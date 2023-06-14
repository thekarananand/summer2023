# ☀️ Jun 14, 2023
Tech : Kubernetes, HTML Basic

# Kubernetes


## Create with YAML file

``` bash
kubectl create -f <file.yml>
```

## PODS With YAML 

### 4 Top Level Fields

``` YAML
apiVersion:
kind:
metadata:


spec:


```

- All of these 4 field are required in a Kubernetes Manifest File.
- `apiVersion` and `kind` expects a string as Value.
- `metadata` and `spec` expects a Dictionary.

### `apiVersion` and `kind` 

| **kind**   | **apiVersion** |
|------------|----------------|
| Pod        | v1             |
| Service    | v1             |
| ReplicaSet | apps/v1        |
| Deployment | apps/v1        |

in this case:

``` YAML
apiVersion: v1
kind: Pod
```

### `metadata`

``` YAML
metadata:
    name: myApp
    labels: 
        app: myApp
        type: Frontend
        karan: anand
```

- `metadata` expects a dictionary can contain only kubernetes object like `name`, `labels`, etc.
- `name` expects a string to specify the name of the pod.
- `labels` expects a dictionary with any `key: value` that can be helpful to filter out the pod.

### `spec`

``` YAML
spec:
    containers: 
        - name: Frontend
          image: nginx
        - name: Database
          image: mysql
```

- `spec` expects a dictionary to specify kubernetes objects. 

<hr>

# HTML

## Revisied HTML & Got this Certificate

![](https://media.licdn.com/dms/image/D4D22AQGF5A_5_GlT5Q/feedshare-shrink_800/0/1686754925888?e=1689811200&v=beta&t=iiW94GyzFG1LOBMj2iqJAo0KeOBSth8IoG_Nvay3bO8)