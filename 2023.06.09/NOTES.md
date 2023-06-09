# ☀️ Jun 9, 2023
Tech : Docker, JavaScript

# JavaScript

### Arrow Notation on Anonymous Functions

- Normally

    ``` js
    document.addEventListener('DOMContentLoaded', function(arg1, arg2){
        console.log( arg1 + arg2 )
    })
    ```

- with Arrow Notation

    ``` js
    document.addEventListener('DOMContentLoaded', (arg1, arg2) => {
        console.log( arg1 + arg2 )
    })
    ```

### Array in JS

``` js
let arr = [ 1, "Element", 5.1, null ]
```

### for Loop in JS

``` js
for ( let i = 0 ; i < n ; i++ ){
    // Code to execute
}
```

### for in Loop in JS

``` js
for ( let i in arr ){
    // Code to execute
}
```

- `i` contain the index 0 -> len-1


### for of Loop in JS

``` js
for ( let i of arr ){
    // Code to execute
}
```

- `i` contain elements

# Docker 

### Docker Build Command

``` bash
docker build <parent dir of dockerfile> -t <imgName> [ -t <imgName2> ... ]
```

- `<imgName>` is generally, `<userName>/<appName>:<tag>`

### Docker login

``` bash
docker login
```

### Docker Push 

``` bash
docker push <imgName>
```

In the case of
- Error storing credentials
- pass not initialized
- password store is empty

try

``` bash
rm -rf ~/.password-store/docker-credential-helpers
gpg --generate-key
pass init <generated gpg-id public key>
```

<hr>

### Finally Pushed my first docker container to [Docker Hub](https://hub.docker.com/r/thekarananand/minicalc).

<hr>

