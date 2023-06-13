# ☀️ Jun 13, 2023
Tech : Kubernetes, JavaScript, CSS

# Kubenetes

## Basic `minikube` Commands

### Starts the local Kubernetes cluster

``` bash
minikube start
```

### Gets the status of the local Kubernetes cluster      

``` bash
minikube status
```

### Stops the local Kubernetes cluster

``` bash
minikube stop
```

### Deletes the local Kubernetes cluster

``` bash
minikube delete
```

### Access the Kubernetes dashboard 

``` bash
minikube dashboard
```

<hr>

## Basic `kubectl` Commands

### Running a Pod

``` bash
kubectl run <NAME> --image=<image> 
```

### List Pods

``` bash
kubectl get pods [ -o wide ]
```

- `-o wide` flag gives more info like IP, NODE, etc.

### Get Pod Details of a Pod

``` bash
kubectl describe pod <podName>
```

### IP Address of the Control Plane & Cluster services

``` bash
kubectl cluster-info
```

### List Nodes

``` bash
kubectl get nodes
```

### Create a Deployment

``` bash
kubectl create deployment NAME --image=image
```

<hr>

## Layers of Abstraction

1. **Pods** : Pod is an Abstraction Layer for Container ( + Helper Containers)
2. **ReplicaSets** : ReplicaSets manages the replicas of Pods.
3. **Deployments** : Deployment is an Abstraction Layer for ReplicaSets.

<hr>

# YAML - yet another markup language 

Here's some basic example of how we store data with YAML files.

### Key-Value Pairs

``` YAML
Key: Value
Fruit: Apple
UserName: thekarananand
Machine: G14
```

### List

``` YAML
Fruit:
-   Orange
-   Apple
-   Banana
```

### Dictionary/Map

``` YAML
Specs:
    CPU: Ryzen7
    GPU: RTX3050
    RAM: 24 GB
```

### List of Dictionaries

``` YAML
-   Color: Blue
    Model:
        Name: Lamborghini
        Year: 2023
    Transmission: Automatic
    Price: USD_200,000

-   Color: Red
    Model:
        Name: Lamborghini
        Year: 2023
    Transmission: Manual
    Price: USD_230,000

```

# JavaScript

## Solved some chapter of [Learn JavaScript](https://scrimba.com/learn/learnjavascript) Course

# CSS
## Wrote CSS for [https://thekarananand.github.io/ToDo/](https://thekarananand.github.io/ToDo/)

