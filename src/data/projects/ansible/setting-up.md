I started off by downloading Ansible on my desktop which later I can move to a server
<br />
```bash
╭─hamish@hamish in ~
╰─λ sudo pacman -S ansible
[sudo] password for hamish:
resolving dependencies...
looking for conflicting packages...

Package (14)               New Version  Net Change  Download Size

extra/ansible-core         2.21.0-1      24.01 MiB       3.60 MiB
extra/python-bcrypt        5.0.0-2        0.49 MiB       0.20 MiB
extra/python-cffi          2.0.0-2        1.38 MiB       0.28 MiB
extra/python-cryptography  48.0.0-1       6.58 MiB       1.47 MiB
extra/python-fluidity      0.2.1-8        0.05 MiB       0.01 MiB
extra/python-invoke        3.0.3-1        1.05 MiB       0.19 MiB
extra/python-jinja         1:3.1.6-3      2.04 MiB       0.32 MiB
extra/python-lexicon       3.0.0-2        0.03 MiB       0.01 MiB
extra/python-markupsafe    3.0.3-1        0.09 MiB       0.02 MiB
extra/python-paramiko      4.0.0-2        2.37 MiB       0.36 MiB
extra/python-pycparser     3.00-1         0.71 MiB       0.11 MiB
extra/python-pynacl        1.6.2-1        1.01 MiB       0.12 MiB
extra/python-resolvelib    1.2.1-2        0.19 MiB       0.04 MiB
extra/ansible              13.7.0-1     559.39 MiB      41.48 MiB

Total Download Size:    48.23 MiB
Total Installed Size:  599.40 MiB

:: Proceed with installation? [Y/n] y
```

<br />

I also created a github repo to keep my playbooks on.
```
https://github.com/IWantSome314/ansible-playbook
```

<br />

This will be used to store my playbooks so I can move it to a VM once I think its worth to do so.

<br />

I have created a inventory.yml to set my hosts in that I will use my ansible playbooks on

<br />

I aswell have created a vault to keep secrets in `ansible-vault create group_vars/all/vault.yml` and aswell as a gitignore just cause I dont want my vault file even tho encrypted to be on my git repo.


```
╭─hamish@hamish in repo: ansible-playbook on  main [?] took 0s
╰─λ ls
drwxr-xr-x   - hamish 24 May 21:57  .git
drwxr-xr-x   - hamish 24 May 22:40  group_vars
.rw-r--r--  54 hamish 24 May 22:13 󱁻 ansible.cfg
.rw-r--r--  25 hamish 24 May 22:39 󰡯 gitginore
.rw-r--r-- 239 hamish 24 May 22:36  inventory.yml
.rw-r--r--  56 hamish 24 May 21:32  readme.md

╭─hamish@hamish in repo: ansible-playbook on  main [?] took 0s
╰─λ ls group_vars/all/
.rw------- 808 hamish 24 May 22:41  vault.yml

╭─hamish@hamish in repo: ansible-playbook on  main [?] took 0s
╰─λ
```