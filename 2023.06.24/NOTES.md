# ☀️ Jun 24, 2023
Tech : Ansible, React

# Ansible

## Description of Local Lab Environment

- 3 Virtual Machines, all on same network. (Since, I will be using KVM, Default Network is fine...)

- All of these virtual machines are running Ubuntu Server 22.04, with OpenSSH-Server installed and sshd.service enabled.

- Host Names of these VMs :
    - controlnde
    - target1
    - target2

- on **controlnode**, Install Ansible.

- to know the IPs of VMs

    ``` bash
    virsh net-dhcp-leases default
    ```

- ssh into **target1** & **target2** from **controlnode**

- inventory file on **controlnode**
    
    ``` ini
    [linux]
    target1 ansible_host=192.168.124.10
    target2 ansible_host=192.168.124.20

    [linux:vars]
    ansible_user=thekarananand
    ansible_ssh_pass=PassWord
    ansible_connection=ssh
    ```

- to check every thing is working,
    
    ``` bash
    ansible all -i inventory -m ping
    ``` 

    if everything is fine, this will be the result of this command....

    ```
    target1 | SUCCESS => {
        "ansible_facts": {
            "discovered_interpreter_python": "/usr/bin/python3"
        },
        "changed": false,
        "ping": "pong"
    }
    target2 | SUCCESS => {
        "ansible_facts": {
            "discovered_interpreter_python": "/usr/bin/python3"
        },
        "changed": false,
        "ping": "pong"
    }
    ```

<hr>

## Ansible Command

``` bash
ansible <MACHINE> -m <MODULE> -i <INVENTORY_FILE>
```

- `<MACHINE>` is the target machine.
    
    - Server IP / Alias / Group defines in Inventory file can be used to specify target machines
    - Specifying `all` will target all the machine in the inventory file

- `-m` flag is to specify the module/type of action

    - The above section, we used `ping` module, that ensures a the connection, to the target machines 

- `-i` flag is to specify the inventory file, not specifying this mean use default inventory file (`\etc\ansible\hosts`)

<hr>

## Ansible Configuration File `ansible.cfg`

- Some of the Variables in above command will remain same. It is a good practice to specify these in a `ansible.cfg`

- **📄 ansible.cfg**
    ``` ini
    [defaults]
    inventory = inventory
    ```

- Now that ping command is shortened to
    ``` bash
    ansible all -m ping
    ``` 
 
<hr>

## More Ansible Commands

``` bash
ansible all --list-hosts
```
List the available target machine

<hr>

``` bash
ansible all -m gather_facts
```
Gather information like, Hardware Config, Network Config, Environment Variables, OS info, etc.


For a Particular Machine,
``` bash
ansible <MACHINE> -m gather_facts
```
or
``` bash
ansible all -m gather_facts --limit <MACHINE>
```
<hr>

## apt module

Official Documentation : [https://docs.ansible.com/ansible/2.9/modules/apt_module.html](https://docs.ansible.com/ansible/2.9/modules/apt_module.html)

### `sudo apt-get update`
``` bash
ansible all -m apt -a "update_cache=true" --become --ask-become-pass
```

- `-a` flag is to specify the argument to the module.
- the argument `update_cache=true` is for `update` keyword.
- `--become [USER]` is for changing user. If user is not specified, switch to root.
- `--ask-become-pass` to Provide SUDO PASSWORD

### `sudo aptitude safe-upgrade`

``` bash
ansible all -m apt -a "upgrade=safe" --become --ask-become-pass
```

or

``` bash
ansible all -m apt -a "upgrade=yes" --become --ask-become-pass
```

### `sudo aptitude full-upgrade`

``` bash
ansible all -m apt -a "upgrade=full" --become --ask-become-pass
```

### `sudo apt install nano`

``` bash
ansible all -m apt -a "name=nano" --become --ask-become-pass
```

or

``` bash
ansible all -m apt -a "name=nano state=latest" --become --ask-become-pass
```

### `sudo apt remove nano`

``` bash
ansible all -m apt -a "name=nano state=absent" --become --ask-become-pass
```

### `sudo apt remove --purge snapd`


``` bash
ansible all -m apt -a "name=snapd state=absent purge=yes" --become --ask-become-pass
```

<hr>

## shell module

``` bash
ansible all -m shell -a "<any off-the-shelf command>"
```

example : `sudo systemctl poweroff`

``` bash
ansible all -m shell -a "systemctl poweroff" --become --ask-become-pass
```

# React 

### Started with [Learn React](https://scrimba.com/learn/learnreact) @ Scrimba.com