#

Since ansible works agentless. I will need to set up my ssh key onto my servers for the my ansible user. I am creating a playbook that will do this but it wont work till I do it manually first anyway but my reason for doing this is because later I can change this playbook to a SSH key from my desktop to the each of the servers onces I make a vm to use my ansible host.

<br />

I made a folder **`/playbooks`** which if it isnt obvious is where I will store my playbooks. Maybe I will organise later if needed but for now Ive created a file called **ssh_key.yml**

<br>

```yml
---
- name: Push ssh keys to hosts
  hosts: all # Specifying the hosts in this case everything
  become: true # Become true escalates the script/process/task or what ever as a privileged user /root

  tasks:
    - name: create .ssh dir if needed
      file: # Ansible builtin module to specify we are working with a file or later specified a directory. Using this it checks if the file exists if so theres nothing to do if not then it will create the file
        path: /home/{{ vault_ansible_user }}/.ssh # Specify the directory we are checking
        state: directory # Specifies the expected state of the target
        mode: '0700'
        owner: "{{ vault_ansible_user }}"
        group: "{{ vault_ansible_user }}"

    - name: Push ssh keys
      authorized_key: # Ansible ssh key module
        user: "{{ vault_ansible_user }}"
        state: present # Stating we want the key to be present for mentioned user
        key: "{{ lookup('file', '~/.ssh/id_ed25519.pub') }}" # Setting the source/location of the key
```
