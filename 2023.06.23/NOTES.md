# ☀️ Jun 23, 2023
Tech : Ansible, React

# Ansible

## Ansible Inventory files

Default Inventory files : `/etc/ansible/hosts`

## Contains a List of Target Server IP

**📄 Inventory.txt**

``` ini
192.168.124.10
192.168.124.20
```

### But, this is not enough, we need specify ansible_user & password

**📄 Inventory.txt**

``` ini
# For Linux/macOS
192.168.124.10 ansible_user=USERNAME ansible_ssh_pass=PASSWORD

# For Windows
192.168.124.20 ansible_user=USERNAME ansible_password=PASSWORD
```

> Please Don't Put Passwords in Plain Text File, rather setup SSH-Key Based Password-less Authentication.

## Alias for each Target Server IPs

**📄 Inventory.txt**

``` ini
SERVER1 ansible_host=192.168.124.10
SERVER1 ansible_host=192.168.124.20
```

### Other Parameters

- `ansible_connection`

    ``` ini
    # To connect to Linux/macOS
    ansible_connection=ssh

    # To connect to Linux/macOS
    ansible_connection=winrm

    # To connect to Local Machine
    ansible_connection=localhost
    ```

- `ansible_post`

    ``` ini
    ansible_post=PORT
    # By Default, ansible_post=22 for SSH
    ```

## Group Target Server IPs

**📄 Inventory.txt**

``` ini
[backend]
192.168.124.10
192.168.124.20

[frontend]
192.168.124.30
192.168.124.40
```

## Defining Ansible Parameters for the All Machines in a Group

**📄 Inventory.txt**

``` ini
[backend]
192.168.124.10
192.168.124.20

[frontend]
192.168.124.30
192.168.124.40

[backend]
ansible_user=thekarananand
ansible_connection=ssh
ansible_ssh_pass=PassLinux

[frontend]
ansible_user=thekarananand
ansible_connection=winrm
ansible_password=PassWindows
```

## Group of Groups

**📄 Inventory.txt**
``` ini
[all_servers:children]
frontend
backend
```

<hr>

## Here's a Sample Ansible Inventory file

**📄 Sample_Inventory.txt**
``` ini
# Databases
sql_db1 ansible_host=sql01.xyz.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=LinPass
sql_db2 ansible_host=sql02.xyz.com ansible_connection=ssh ansible_user=root ansible_ssh_pass=LinPass

# Web-Servers
web_node1 ansible_host=web01.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=WinPass
web_node2 ansible_host=web02.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=WinPass
web_node3 ansible_host=web03.xyz.com ansible_connection=winrm ansible_user=administrator ansible_password=WinPass

[db_nodes]
sql_db1
sql_db2

[web_nodes]
web_node1
web_node2
web_node3

[boston_nodes]
sql_db1
web_node1

[dallas_nodes]
sql_db2
web_node2
web_node3

[us_nodes:children]
boston_nodes
dallas_nodes
```

<hr>
<hr>

# REACT

## React Hook `useState`

``` JSX
import { useState } from 'react'

const [title, setTitle] = useState('Initial Title')
// useState() function returns 2 Objects, 
// First one ('Here, named "title"'), contains the current value
// Second ('Here, named "setTitle"'), is a function, that takes the new value of title as an argument.
// useState() function take the initial value of title an argument.

function update() {
    setTitle('New Title')
}
// Enclosed setTitle('New Title') call in update function, for onClick Event.

<div>{title}</div>
<button onClick={update}>Update</button>
```



## Here's a Counter Comonent, made with `useState`

``` JSX
import './TestUseState.css'
import { useState } from 'react'

let Count = 0

function TestUseState() {

    const [title, setTitle] = useState('Click Button below to Start Count')

    function CountUp() {
        setTitle(++Count)
    }

    return (
        <div>
            <h1>
               {title} 
            </h1>
            <button onClick={CountUp}>Count</button>
        </div>
    )
}

export default TestUseState
```

## Use can Update/Replace Elements with `useState`

### [Check The Code!](https://github.com/thekarananand/summer2023/blob/main/2023.06.23/firstapp) 

### Before Clicking
![](Before.png)
### After Clicking
![](After.png)

