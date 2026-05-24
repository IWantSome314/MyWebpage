I started to create an inventory with a few of my already exsisting VMs. And just tested a ping

```yaml
all:
  children:
    management:
      hosts:
        slt-01:
        k3s-man-01:
    k3s:
      hosts:
        k3s-man-01:
        k3s-wrk-01:
        k3s-wrk-02:
```

<br />

```json
╰─λ ansible all -m ping -i inventory.yml
Vault password:
[WARNING]: Host 'k3s-wrk-02' is using the discovered Python interpreter at '/usr/bin/python3.12', but future installation of another Python interpreter could cause a different interpreter to be discovered. See https://docs.ansible.com/ansible-core/2.21/reference_appendices/interpreter_discovery.html for more information.
k3s-wrk-02 | SUCCESS => {
"ansible_facts": {
"discovered_interpreter_python": "/usr/bin/python3.12"
},
"changed": false,
"ping": "pong"
}
[WARNING]: Host 'k3s-wrk-01' is using the discovered Python interpreter at '/usr/bin/python3.12', but future installation of another Python interpreter could cause a different interpreter to be discovered. See https://docs.ansible.com/ansible-core/2.21/reference_appendices/interpreter_discovery.html for more information.
k3s-wrk-01 | SUCCESS => {
"ansible_facts": {
"discovered_interpreter_python": "/usr/bin/python3.12"
},
"changed": false,
"ping": "pong"
}
[WARNING]: Host 'k3s-man-01' is using the discovered Python interpreter at '/usr/bin/python3.12', but future installation of another Python interpreter could cause a different interpreter to be discovered. See https://docs.ansible.com/ansible-core/2.21/reference_appendices/interpreter_discovery.html for more information.
k3s-man-01 | SUCCESS => {
"ansible_facts": {
"discovered_interpreter_python": "/usr/bin/python3.12"
},
"changed": false,
"ping": "pong"
}
[WARNING]: Host 'slt-01' is using the discovered Python interpreter at '/usr/bin/python3.12', but future installation of another Python interpreter could cause a different interpreter to bediscovered. See https://docs.ansible.com/ansible-core/2.21/reference_appendices/interpreter_discovery.html for more information.
slt-01 | SUCCESS => {
"ansible_facts": {
"discovered_interpreter_python": "/usr/bin/python3.12"
},
"changed": false,
"ping": "pong"
}
```

<br />

I then wanted to set some vars for a base user and port to use so I created a vault to store my secrets in.
```bash
ansible-vault create group_vars/all/vault.yml
```

I then called my set secrets/vars in my inventory

```yaml
all:
  vars:
    ansible_user: "{{ vault_ansible_user }}"
    ansible_port: "{{ vault_ansible_port }}"
  children:
    management:
      hosts:
        slt-01:
        k3s-man-01:
    k3s:
      hosts:
        k3s-man-01:
        k3s-wrk-01:
        k3s-wrk-02:
```