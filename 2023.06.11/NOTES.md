# ☀️ Jun 11, 2023
Tech : Docker Networking, Docker Storage, JavaScript

## Docker Networking
3 Types of default docker network:

1. Bridge (Default)
    
    - Private Internal Network, created by docker, on the host.
    - All docker container are connected to this network, by Default.
    - Generally, Internal IP assigned to the container is of 172.17 Series. 
    - This network has an internal DNS Name resolution, allowing container to communicate with each other just by their names.
    - To access these containers, we map ports.

    ``` bash
    docker run <image>
    ```

2. none

    - Complete Network Isolation
    
    ``` bash
    docker run --network none <image>
    ```

3. Host

    - No Network Isolation.
    - Associates the container with Host's Network.
    - Automatically assigns the Required Posts without specifying.
    - This takes away the ability of running the multiple container with same port.

    ``` bash
    docker run --network host <image>
    ```

### List all the Docker Network 

``` bash
docker network ls
```

- This gives the NETWORK ID, NAME, DRIVER, SCOPE
- DRIVER = Network Type

### Creating a user Defined Network 

``` bash
docker network create [ --driver <DRIVER> ] [ --subnet <SUBNET> ] [ --gateway <GATEWAY> ] <NetworkName>
```

### Removing a Network 

``` bash
docker network rm <NetworkName>
```

### Removing all unused Networks

``` bash
docker network prune
```

### Connecting a container to a network

``` bash
docker network connect <NetworkName> <ContainerName>
```

### Disconnecting a container to a network

``` bash
docker network disconnect <NetworkName> <ContainerName>
```

<hr>

## Docker Storage

### Creating a Docker Volume

``` bash
docker volume create <volName>
```

These volumes are stored at `/var/lib/docker/volumes`

### Mount a Docker Volume (Volume Mounting)

``` bash
docker run -v <volName>:<Container-DIR> <Image>
```
or
``` bash
docker run --mount 'type=volume, src=<volName>, dst=<Container-DIR>' <Image>
```

> if the volume don't exists, this will create one.

### Mount a Host Directory to Container Directory (Bind Mounting)

``` bash
docker run -v <Host-DIR>:<Container-DIR> <Image>
```
or
``` bash
docker run --mount 'type=bind, src=<Host-DIR>, dst=<Container-DIR>' <Image>
```

# JavaScript

## Worked on To-Do App

## Check it out : [thekarananand.github.com](https://thekarananand.github.com)