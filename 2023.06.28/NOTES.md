# ☀️ Jun 28, 2023
Tech : JavaScript, Ansible

# JavaScript

## Monitor Events

- ``` JS
  monitorEvents(document)
  ```
  
  Returns the events triggered like click, double click, scrolling, move movement, key press, etc. on the `document`

- ``` JS
  let BOX = document.querySelector('.box')
  monitorEvents(BOX)
  ```
  Returns the events triggered wrt `BOX` element

---

## Unmonitor Event

- ``` JS
  unmonitorEvents(BOX)
  ```

- ``` JS
  unmonitorEvents(document)
  ```

---

## addEventListener()

``` JS
TARGET_ELEMENT.addEventListener('EVENT', FUNCTION )
```

- `TARGET_ELEMENT` is the element on which the Event Listener is to be applied.

- `EVENT` is the Event for which Event Listener is applied.

- `FUNCTION` defines what to do, when Event is Triggered.

Example:

``` JS
box.addEventListener('click', () => {
    box.style.background = 'pink'
})
```

---

## removeEventListener()

``` JS
TARGET_ELEMENT.removeEventListener('EVENT', FUNCTION )
```

- `TARGET_ELEMENT` & `FUNCTION` must be the same object as the `addEventListener`

- `EVENT` must be same.

This Works:

``` JS
let BOX = document.querySelector('.box')
let thatFunction(){
    BOX.style.background = 'pink'
}

BOX.addEventListener('click', thatFunction)
...

BOX.removeEventListener('click', thatFunction)
```

This don't Works:

``` JS
let BOX = document.querySelector('.box')

BOX.addEventListener('click', () => {
    BOX.style.background = 'pink'
})
...

BOX.removeEventListener('click', () => {
    BOX.style.background = 'pink'
})
```

---

## `event` object

``` JS
BOX.addEventListener('click', (event) => {
    //Some Code
})
```

This is used to access more details about the triggering event.

# Ansible

## Looping with `loop`

**📄 playbook.yml**

``` yaml
-
  name: 'Install required packages'
  hosts: deb
  tasks:
    -
      name: 'install those packages'
      apt: 'name={{ item }} state=present'
      become: true
      loop:
        - htop
        - gcc
        - make
        - nodejs
```

## Looping with `with_items`

**📄 playbook.yml**

``` yaml
-
  name: 'Install required packages'
  hosts: deb
  vars:
    packages:
      - htop
      - gcc
      - make
      - nodejs
  tasks:
    -
      name: 'install those packages'
      apt: 'name={{ item }} state=present'
      become: true
      with_items: '{{ packages }}'
```
