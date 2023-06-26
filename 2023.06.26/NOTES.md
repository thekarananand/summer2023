# ☀️ Jun 26, 2023
Tech : Ansible, JavaScript


# More Ansible Modulus

## `command` Module

[Official Documentation](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/command_module.html#parameters)

**📄 playbook.yml**

``` yaml
- name: play1
  hosts: machine1
  tasks:
    - name: what's the date
      command: date

    - name: display /etc/resolv.conf content
      command: cat /etc/resolv.conf
```

Talking about the second task....

We can do a better job with the help of Parameters

### Parameters of `command` Module

- `chdir=<DIR>`

    This Parameter ensures that Directory has been changed before executing the specified command.

    ``` yaml
    - name: display /etc/resolv.conf content
      command: cat resolv.conf chdir=/etc
    ```

- `creates=<DIR>`

    Used with the commands that creates a directory. This Parameter ensures that execution will happen when specified directory don't exists

    ``` yaml
    - name: create hello directory
      command: mkdir hello chdir=hello
    ```

- `removes=<DIR>`

    Used with the commands that removes a directory. This Parameter ensures that execution will happen when specified directory exists

    ``` yaml
    - name: remove hello directory
      command: rmdir hello removes=hello
    ```

<hr>

## `script` Module

**📄 playbook.yml**

``` yaml
- name: play1
  hosts: machine1
  tasks:
    - name: run this script
      command: /path/to/script.sh -arg1 -arg2
```
- this copies the script from `ControlNode` to Target Machines

<hr>

## `service` Module

**📄 playbook.yml**

``` yaml
- name: play1
  hosts: machine1
  tasks:

    - name: Start service httpd, if not started
      service:
        name: httpd
        state: started

    - name: Stop service httpd, if started
      service:
        name: httpd
        state: stopped

    - name: Restart service httpd, in all cases
      service:
        name: httpd
        state: restarted

    - name: Reload service httpd, in all cases
      service:
        name: httpd
        state: reloaded

    - name: Enable service httpd, and not touch the state
      service:
        name: httpd
        enabled: yes
```

<hr>

## `lineinfile` Module

Adds a Line in as file, if the Line is not already in the file 

**📄 playbook.yml**

``` yaml
- name: play1
  hosts: machine1
  tasks:

    - name: Start service httpd, if not started
      lineinfile:
        path: /etc/resolv.conf
        line: 'target2 192.168.124.20'
```

# JavaScript

## Revisited Basics of JS & DOM Manipulation