# ☀️ Jun 10, 2023
Tech : Docker, JavaScript

# Docker

### Setting Environment Variable in a Docker Container

``` bash
docker run -e <ENV_VAR_NAME=value> <Image>
```

To check Environment Variable already set on a container, run 
`docker inspect <Container ID/Name>`

### Example : MySQL 

``` bash
docker run -e MYSQL_ROOT_PASSWORD=db_pass123 mysql
```

### Docker Container on Remote Machine

``` bash
docker run -H <IP>:<Port> <Image>
```

## Resource management for Docker Container


``` bash
docker run --cpus=0.5 <Image>
```

here, `--cpus=0.5` flag give 50% of CPU to the container

``` bash
docker run --memory=500m <Image>
```
here, `--memory=500m` flag give 500Mb of RAM to the container

## Dockerfile : CMD vs ENTRYPOINT

### CMD
Runs the specified command on startup of the container. But, when a command is specified with `docker run` or `docker exec`, this command gets overwritten.

Syntax :
``` dockerfile
CMD sleep 5
```
or
``` dockerfile
CMD [ "sleep", "5" ]
```
> in the second syntax, first thing should be a command/executable

### ENTRYPOINT
Runs the specified command on startup of the container. But, It appends anything specified in `docker run` or `docker exec` to the ENTRYPOINT command. So, it's useable for taking arguments form users.

Syntax :

``` dockerfile
ENTRYPOINT [ "sleep" ]
```

While running :
``` bash
docker run <image> 5
```
> in above syntax, first thing should be a command/executable

now, final command at start up = `sleep 5`

### To set a default value in ENTRYPOINT

``` dockerfile
ENTRYPOINT [ "sleep" ]
CMD [ "5" ]
```

- On, `docker run <image>`, the startup command = `sleep 5`
- But on, `docker run <image> 10`, the startup command = `sleep 10`



# JavaScript

### forEach Loop in Arrays

``` js
num = [ 1 , 2 , 3 , 4 ]

num.forEach( (element) => {
    // Code
})
```

### Build a very basic todo web-app
Check this directory to find the code for the app.