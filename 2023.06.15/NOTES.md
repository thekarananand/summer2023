# ☀️ Jun 15, 2023
Tech : Cloud Fundamentals, JavaScript, Kubernetes

# Cloud Fundamentals

## What is Cloud Computing?

Cloud Computing is a way of using IT, that has these five equally important traits:
1. On-Demand and Self-Serviced, Computing Resources.
2. These Resources accessible anywhere, over the Internet.
3. Resource Provider have a large pool of these Resources.
4. These resources are elastic (can increase or decrease, as needed)
5. Pay only for what is Used, or Reserved

<hr>

## IaaS, PaaS, and SaaS

### IaaS : Infrastructure as a Service

    IaaS provides virtualized computing resources, such as virtual machines, storage, and networking, over the internet. It allows users to access and manage these resources remotely, similar to physical data centers.

### PaaS : Platform as a Service

    PaaS provides a platform with pre-configured computing resources, development tools, and services to build, test, and deploy applications. Providers handle the underlying infrastructure and allows developers to focus more on application development rather than infrastructure management.

### SaaS : Software as a Service

    SaaS provides software applications & services over the internet as a service. This eliminates the need for users to handle software installation, updates, and maintenance, as these responsibilities are taken care of by the SaaS provider.

<hr>

## Google Cloud Architecture

Google Cloud's infrastructure can be divided into three layers:

    1. Networking & Security
    2. Compute & Storage (Decoupled & Scales Independently based on demand)
    3. Big Data & Machine Learning

### Compute Services

    1. Compute Engine
    2. Google Kubernetes Engine
    3. App Engine
    4. Cloud Functions
    5. Cloud Run

### Storage Services

    1. Cloud Storage
    2. Cloud SQL (Relational Databases)
    3. Cloud Spanner (Relational Databases)
    4. Cloud Bigtable (MySQL Databases)
    5. Firestore (MySQL Databases)

### Big Data & Machine Learning

    1. Cloud Storage
    2. Dataproc
    3. Bigtable
    4. BigQuery
    5. Dataflow
    6. Firestore
    7. Pub/Sub
    8. Looker
    9. Cloud Spanner
    10. AutoML
    11. Vertex AI.

## Google Cloud Infrastructure

Google Cloud's infrastructure is spread across five major geographic locations

1. North America
2. South America
3. Europe
4. Asia
5. Australia

- These locations are further divided into regions and zones, with each zone representing a deployment area for Google Cloud resources.
- Users can specify the geographical locations to run their services and resources. optimizing availability, durability, and latency.


# JavaScript

## Objects in JS

``` JS
let laptop = {
    user: "Karan Anand",
    CPU: "Ryzen 7",
    GPU: 3050
}
```

2 Ways to Access the Values 

``` JS
console.log(laptop.CPU)
```
``` JS
console.log(laptop['CPU'])
```
## Arithmetic Operates 

    Addition (+)          : num1 + num2
    Subtraction (-)       : num1 - num2
    Multiplication (*)    : num1 * num2
    Division (/)          : num1 / num2
    Remainder (%)         : num1 % num2
    Exponential (**)      : num1 ** num2

## Increment Operators

    Post-Increment : x++
    Pre-Increment  : ++x
    Post-Decrement : x++
    Pre-Decrement  : --x    > NOTE: `<NAME>` is the name of R eplicaSet

## Comparison Operators

    Greater than                : >
    Less than                   : <
    Greater than or equal to    : >=
    Less than or equal to       : <=
    Loose Equality              : ==
    Loose Inequality            : !=
    Strict Equality             : ===
    Strict Inequality           : !==

## Ternary Operator

    CONDITION ? STATEMENT_1 : STATEMENT_2

## Logical Operators

    AND  : a && b
    OR   : a || b
    NOT  : !a

## Bitwise Operators

    BITWISE AND (&) : a & b
    BITWISE OR (|)  : a | b

## Switch Case

``` JS
switch (num2) {
    case 1:
        // Code to Run
        break;

    case 2:
        // Code to Run
        break;

    default:
        // Code to Run
        break;
}
```

## While Loop

``` JS
while (CONDITION) {
    // Code to Run
}
```

## Do While Loop

``` JS
do {
    // Code to Run
} while (CONDITION);
```

# Kubernetes

## Create ReplicaSets with YAML File
### Basic Structure

``` YAML
apiVersion: apps/v1
kind: ReplicaSet
metadata:
    name: RS-myApp
    label:
        app: my-App-RC
        
spec:
    template:
    replicas:
    selector:
```

- `replicas` expects an integer input that specify the number of replica for given pod

- `template` expects a dictionary with `metadata` and `spec` keys defining the pod

    ``` YAML
    template:
        metadata:
            name: myApp
            labels: 
                app: myApp
                type: Frontend
        spec:
            containers: 
                - name: Frontend
                image: nginx
                - name: Database
                image: mysql
    ```

- `selector` is to select the PODS by specifed Labels

    ``` YAML
    selector:
        matchLabels:
            label1: someValue
            label2: someValue
    ``` 

## 4 Ways to Scale Replicas in a ReplicaSet

### Way 1

1. Update the number of replicas in YAML file.
2. Run
    ``` BASH
    kubectl replace -f <file.yml>
    ```

### Way 2
- Just Run
    ``` BASH
    kubectl edit replicaset <NAME>
    ```
- Edit the value of replicas in the file

### Way 3
- Just Run
    ``` BASH
    kubectl scale --replicas=<NUM> -f replicaset <NAME>
    ```

### Way 4
- Just Run
    ``` BASH
    kubectl scale --replicas=<NUM> -f <file.yml>
    ```
    > NOTE : this will not update the `<file.yml>`
