# ☀️ Jun 25, 2023
Tech : Ansible, HTML + CSS


# Ansible 

## Ansible Playbook

### Here's a Sample Playbook

**📄 playbook.yml**

``` yaml
- name: play1
  hosts: machine1
  tasks:
    - name: Update Cache
      apt:
        update_cache: true
      become: true

    - name: Upgrade Package
      apt:
        upgrade: safe
      become: true


- name: play2
  hosts: machine2
  tasks:
    - name: Upgrade Package
      apt:
        name: nano
        state: latest
      become: true
```

- A Playbook is YML List of Plays
- Each Play has a
    - `name`
    - `hosts` (on which we perform tasks)
    - `tasks`
- `tasks` is a List of Tasks / Activities to run on `hosts` in the specified order.
- Each task has a
    - name
    - module
        - argument
    - become (optional, required for sudo)

## How to Run a Playbook 

``` bash
ansible-playbook [--ask-become-pass] <PLAYBOOK.yml>
```


# HTML + CSS 
## Build [Project0 : search](https://thekarananand.github.io/cs50_web_2020/Project0_search/) as a Part of CS50W

![](search.png)
