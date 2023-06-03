# ☀️ Jun 3, 2023
Tech : JavaScript, Jenkins

# JavaScript
### Link a HTML Page to .JS File 
``` bash
    <head>
        <script src="MyJS.js"></script>
    </head>
```

### Embedding JavaScrip into the HTML file
``` bash
    <script>
        - - - 
    </script>
```

### Alert Box
To Print an Alert Message to user
``` JavaScript
alert("Hello, World!");
```


### Find an Element

Locate the first element with the given class:
``` JavaScript
document.querySelector('.class');
```

Locate the element with the given id:
``` JavaScript
document.querySelector('#id');
```


### To update the inner html of an html
``` JavaScript
document.querySelector().innerHTML = <NewHTML>
```

### Variable Definition in JavaScript
``` JavaScript
let x = 1000;
```

### Function Definition in JavaScript
``` JavaScript
function hello() {
    alert("Hello, World!");
}
```

### Click to Execute JavaScript Function
``` JavaScript
    <button onclick="hello()">Click me</button>
```

### To Move above into `<script> ... </script>`
``` JavaScript
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').onclick = count;
    })
```

or

``` JavaScript
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').addEventListener('onclick', count );
    })
```

### Template Literal 
``` JavaScript
let x = 1000;
alert(`Value of x is ${x}`)
```
