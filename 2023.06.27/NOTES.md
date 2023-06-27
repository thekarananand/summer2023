# ☀️ Jun 27, 2023
Tech : JavaScript, Ansible

# JavaScript

## How to Adds a Element?

<hr>

### `.appendChild()` Method

Initial HTML

``` HTML
<body>
    <div id="root">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
    </div>
</body>
```

JS

``` JS
let content = document.querySelector('#root')
let MyNewElement = document.createElement('div')
MyNewElement.innerHTML = 'Box 5'
content.appendChild(MyNewElement)
```

Result 

``` HTML
<body>
    <div id="root">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
    </div>
</body>
```

<hr>

### `.insertAdjacentHTML()` Method

Initial HTML

``` HTML
<body>
    <div id="root">
        <div class="box">Some Stuff</div>
        <div class="box">Some Stuff</div>
    </div>
</body>
```

JS

``` JS
let content = document.querySelector('#root')
let MyNewElement = document.createElement('div')
MyNewElement.innerHTML = 'New Stuff'
```

We have 4 Position to insert new Element

- beforeBegin
    ``` JS
    content.insertAdjacentHTML('beforeBegin', MyNewElement)
    ```

    Result 

    ``` HTML
    <body>
        <div>New Stuff</div> 
        <div id="root">
            <div class="box">Some Stuff</div>
            <div class="box">Some Stuff</div>
        </div>
    </body>
    ```

- afterBegin
    ``` JS
    content.insertAdjacentHTML('afterBegin', MyNewElement)
    ```

    Result 

    ``` HTML
    <body>
        <div id="root">
            <div>New Stuff</div> 
            <div class="box">Some Stuff</div>
            <div class="box">Some Stuff</div>
        </div>
    </body>
    ```

- beforeEnd
    ``` JS
    content.insertAdjacentHTML('beforeEnd', MyNewElement)
    ```

    Result 

    ``` HTML
    <body>
        <div id="root">
            <div class="box">Some Stuff</div>
            <div class="box">Some Stuff</div>
            <div>New Stuff</div> 
        </div>
    </body>
    ```

- afterEnd
    ``` JS
    content.insertAdjacentHTML('afterEnd', MyNewElement)
    ```

    Result 

    ``` HTML
    <body>
        <div id="root">
            <div class="box">Some Stuff</div>
            <div class="box">Some Stuff</div>
        </div>
        <div>New Stuff</div> 
    </body>
    ```
<hr>

## How to Remove a Element?

<hr>

### `.removeChild()` Method

Initial HTML

``` HTML
<body>
    <div id="root">
        <div class="box">Box 1</div>
    </div>
</body>
```

JS

``` JS
let parentElement = document.querySelector('#root')
let childElement = document.querySelector('.box')

parentElement.removeChild(childElement)
```

Result 

``` HTML
<body>
    <div id="root">
    </div>
</body>
```

<hr>

## Manage CSS With JS

### `.style` method

``` JS
let Target = document.querySelector('.boxTarget')

Target.style.background = 'orange'
Target.style.fontWeight = 'bolder'
Target.style.fontFamily = 'Arial'
``` 

All three CSS Properties will be applied.

<hr>

### `.cssText` method

``` JS
let Target = document.querySelector('.boxTarget')

Target.style.cssText = 'background: orange;'
Target.style.cssText = 'font-family: Arial; font-weight: bolder;'
``` 

Each Successive `Target.style.cssText` will replace last one. So, only properties applies :

- `font-family: Arial;`
- `font-weight: bolder;`
- Other Properties for that Class / ID

<hr>

## `.setAttribute()` method

``` JS
let Target = document.querySelector('.boxTarget')

Target.setAttribute('style', 'background: orange;')
Target.setAttribute('style', 'font-family: Arial; font-weight: bolder;')
``` 

Each Successive `TargetsetAttribute(style, )` will replace last one. So, only properties applies :

- `font-family: Arial;`
- `font-weight: bolder;`
- Other Properties for that Class / ID

<hr>

## `.classList` Attribute

Initial HTML

``` HTML
<body>
    <div id="root">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="Target box">Box 3</div>
        <div class="box">Box 4</div>
    </div>
</body>
```

JS

``` JS
let Target = document.querySelector('.Target')

// Array of Classes applied
Target.classList   

// Removes box Class
Target.classList.remove('box')

// Removes box Class
Target.classList.add('batman')

// If Exists, then Removes SuperMan Class, else Add the SuperMan CLass
Target.classList.toggle('SuperMan')

// If Exists, then return TRUE, else FALSE
Target.classList.contains('box')
``` 

# Ansible

## Conditional

`when` keyword is Check a Condition and then executing a command 

## Today's Playbook

**📄 playbook.yml**

``` yaml
- name: Update Cache
  hosts: all
  tasks:
    - name: Update Cache on Ubuntu Machines
      apt:
        update_cache: true
      become: true
      when: ansible_distribution == "Ubuntu"

    - name: Update Cache on Fedora Machines
      yum:
        update_cache: true
      become: true
      when: ansible_distribution == "Fedora"

- name: Upgrade Packages
  hosts: all
  tasks:

    - name: Upgrade Package on Ubuntu Machines
      apt:
        upgrade: full
      become: true
      when: ansible_distribution == "Ubuntu"

    - name: Upgrade Packages on Fedora Machines
      yum:
        name: '*'
        state: latest
        exclude: kernel*
      become: true
      when: ansible_distribution == "Fedora"

- name: Install Nano
  hosts: all
  tasks:
    - name: Install Nano on Ubuntu Machines
      apt:
        name: nano
      become: true
      when: ansible_distribution == "Ubuntu"

    - name: Install Nano on Fedora Machines
      yum:
        update_cache: true
      become: true
      when: ansible_distribution == "Fedora"
```