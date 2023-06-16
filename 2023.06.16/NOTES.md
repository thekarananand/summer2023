# ☀️ Jun 16, 2023
Tech : JavaScript, Kubernetes

# JavaScript


## OOPS in JS

- `key: value` pairs are called **Object Properties**
- `key: function()` pairs are called **Object Methods**
- `new` keywords represents a new empty object
- `this` keywords represents current object

## Object Creation is JS ( 2 Methods ) :

### 1. Factory Function

- Function Definition :

    ``` JS
    function createRectangle(length, width) {
        return rectangle = {
            length,
            width,
            area(){
                return length * width
            }
        }
    }
    ``` 

    or

    ``` JS
    function createRectangle(length, width) {
        return rectangle = {
            length: length,
            width: width,
            area: () => {
                return length * width
            }
        }
    }
    ```

- Objection Creation :

    ``` JS
    let NewRectangle = createRectangle(2, 4);
    ```

### 2. Constructor Function

- Function Definition

    ``` JS
    function createRectangle(length, width) {
        this.length = length
        this.width = width
        this.area = () => {
            return this.length * this.width
        }
    }
    ```
    
- Objection Creation :

    ``` JS
    let NewRectangle = new createRectangle(2, 4);
    ```

## Dynamic Nature of Objects
- Add a New Property to an Object

    ``` js
    NewRectangle.color = "red"
    ```

- Deleting a Property from an Object

    ``` js
    delete NewRectangle.color
    ```

<hr>

## Math Object in JS
Math is an intrinsic object that provides basic mathematics functionality and constants.

- Round a float number

    ``` JS
    Math.round(x)
    ```

- Floor Value

    ``` JS
    Math.floor(x)
    ```

- Ceiling Value

    ``` JS
    Math.ceil(x)
    ```

- Power

    ``` JS
    Math.pow(x, 2)
    ```

- Square Root

    ``` JS
    Math.sqrt(x)
    ```

- Modulus / Absolute Value

    ``` JS
    Math.abs(x)
    ```

- Maximum

    ``` JS
    Math.max(x, y, z)
    ```

- Minimum

    ``` JS
    Math.min(x, y, z)
    ```

- Value of PI

    ``` JS
    Math.PI
    ```

<hr>

## Random Numbers in JS

- Gives floats b/w 0 and 1

    ``` JS
    let x = Math.random();
    ```

- Gives floats b/w 0 and 10

    ``` JS
    let x = Math.random() * 10;
    ```

- Gives Integers from 1 to 10

    ``` JS
    let x = Math.floor((Math.random() * 10) + 1);
    ```

<hr>

# Kubernetes


## One Command to Get All the detail about Kubernetes Cluster

``` Bash
kubectl get all
```

<hr>

## Creating Deployment with YAML file
This is same as [Creating ReplicaSets with YAML file](https://github.com/thekarananand/summer2023/blob/main/2023.06.15/NOTES.md#create-replicasets-with-yaml-file), But the only difference is `kind: Deployment`

<hr>

## Update and Rollback in a Deployment

Roll Out Strategy

1. Recreate 
1. Rolling Update (Default) 

### Status of Rollout

``` bash
kubectl rollout status deployment/<NAME>
```
### History of Rollout

``` bash
kubectl rollout history deployment/<NAME>
```

### How to Update a Deployment ( 2 Ways )

1. Update the YAML File
2. Run
    ``` bash
    kubectl apply -f <file.yml>
    ```

### Rollback

``` bash
kubectl rollout undo deployment/<NAME>
```
