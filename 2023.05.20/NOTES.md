# ☀️ May 20, 2023
Tech : HTML, Docker

# HTML

### Basic Structure of HTML

``` HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Title</title>
    </head>
    <body>
        Hello, World
        
        
    </body>
</html>
```

here,
- `<!DOCTYPE html>` tells the web browser that this html page is written in HTML5
- `<head>...</head>` section contains Metadata of the page like Title, etc.
- `<body>...</body>` section contains Actual Data to be represented in the webpage.
- Both the Head & Body section is contained in `<html>...</html>` tags with a attribute `lang='en'` defining the language. A Good Practice!

### Headings 
HTML gives us 6 types of heading, `<h1>`, `<h2>` and all the way to `<h6>`. Here `<h1>` is the largest and `<h6>` is the smallest.
``` HTML
<body> 
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</body>
```

### Ordered List / Numbered List
``` HTML
    This is an Ordered List (Numbered List) :
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ol>
```
here,
- `<ol>...</ol>` tag tells the browser that this an ordered list
- `<li>...<li>` is for list items.

### Unordered List / Bullet Point List
```HTML
    This is an Unordered List (Bullet Point List)
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ul>
```
here,
- `<ul>...</ul>` tag tells the browser that this an unordered list
- Again, `<li>...<li>` is for list items.

### Image in HTML
``` HTML
    <img src="Profile.jpeg" alt="My Profile Pic" width="480px">
```
here,
- `scr=""` is a **Required** attribute that defines the image source.
- `alt=""` is a **Required** attribute that give an alternate text.
- `width=""` is to resize the width of image.

### Links
``` HTML
    <a href="https://www.github.com/thekarananand">My GitHub</a>
```
here,
- `href=""` is a **Required** attribute that defines the link tto go.

## HTML FORM

### Taking a Basic Text input like Name from User :
``` HTML
<form>
    <input type="text" placeholder="Name" name="name">
</form>
```
here,
- `<form>...</form>` tag tell the browser that is a Form.'
- `<input>` tag is for an Input field
- `type="text"` attribute tell browser the that a text input. The other type of input we will discuss later on.
- `placeholder=""` attribute is for Placeholder Text to tell user about the intended input.
- `name=""` attribute is to link the input with a specific name, for later to be used by backend logic.

### Submit Button at the end.
``` HTML
<input type="submit">
```

### Taking Password (or Any Sensitive input)
```HTML
<input type="password" placeholder="password" name="password">
```
here,
- `type="password"` attribute tell browser the that a sensitive input, so HIDE it.
- Again, `placeholder=""` attribute is for Placeholder Text to tell user about the intended input.
- Again, `name=""` attribute is to link the input with a specific name, for later to be used by backend logic.

### Radio Button (or Select one MCQ Options)
``` HTML
    Rate me out of 5:
    <input name="rating" type="radio" value="1"> 1
    <input name="rating" type="radio" value="2"> 2
    <input name="rating" type="radio" value="3"> 3
    <input name="rating" type="radio" value="4"> 4
    <input name="rating" type="radio" value="5"> 5     
```
here,
- `type="radio"` attribute tell browser the that this this is a radio button type input.
- Each `<input>` tag has `name=""` attribute tell browser that from all the radio button with same name user can select only one.
- Each `<input>` tag has `value=""` attribute along with some text next to the tag. This Text will be displayed as an option and corresponding value attribute value will be given as response to the backend logic.

### Color Selector
``` HTML
    Select Your Favorite Color
    <input type="color">
```

### Drop-Down List
``` HTML
        What year of graduation you are in?
        <input name="YearOfGraduation" list="Years" placeholder="year">
        <datalist id ="Years">
            <option value="1">(1st) First</option>
            <option value="2">(2nd) Second</option>
            <option value="3">(3nd) Third</option>
            <option value="4">(4th) Forth</option>
        </datalist>
```
here,
- In this kind of input, we don't have a `type=""` attribute, but we have a `list=""` attribute to link a datalist with same `id`.
- `<datalist>...</datalist>` tag refers to datalist (as the name suggests),  containing option for drop down, enclosed in `<option>...<\option>` tag.
- Each `<option>` tag has a Text enclose within it along with `value=""` attribute corresponding to it. This Text will be displayed as an option and corresponding value attribute value will be given as response to the backend logic.

# Docker


### Pulling an image from DOCKER HUB
```bash
docker pull <IMAGE NAME>[:<TAG>]
```
here,
- `<TAG>` is used to specify the version.


### Creating a container from an Image
```bash
docker run [-i] [-t] [-d] [-p <H>:<C>] [--name <NAME>] <IMAGE NAME> <COMMAND>
```
here,
- NOTE : if the specified image is not available locally, docker will automatically grab it from dockerhub
- `-i` flag is used to run the container in interactive mode.
- `-t` flag is to open TTY session.
- `-d` flag is to run the container in detach mode (Run container in background)
- `[-p <H>:<C>]` flag is for Port Forwarding from Container’s Port `<C>` to Host’s port `<H>`
- `[--name <NAME>]` flag is for adding a custom name to the container.
- `<COMMAND>` can be an actual command for the container to run. if `-d` flag is not used then, output from the container will be displayed. After the execution of the command ended, the container will stop

### List all local Docker Images
```bash
docker images
```

### List runing Containers
There are two commands for the same task.

**Command 1 :**
```bash
docker container ls [-a]
```

**Command 2 :**
```bash
docker ps [-a]
```
here,
- `-a` command is used to list all running containers + stopped containers

### Execute Something in an existing Container
There are two commands for the same task.

**Command 1 :**
```bash
docker exec [-i] [-t] [-d] <CONTAINER ID> <COMMAND>
```

**Command 2 :**
```bash
docker container exec [-i] [-t] [-d] <CONTAINER ID> <COMMAND>
```
here,
- `-i` flag is used to run the container in interactive mode.
- `-t` flag is for TTY.
- `-d` flag is to run the container in detach mode (Run container in background)
- `<CONTAINER ID>` can be fetched by `docker ps` command.
- `<COMMAND>` can be an actual command for the container to run, or Commend shell can be fetched by `docker ps` command.  If `-d` flag is not used then, output from the container will be displayed.

### Just Start an existing Container
```bash
docker start <CONTAINER ID> 
```
here,
- `<CONTAINER ID>` can be fetched by `docker ps` command.

### Stop a Container

**Command 1 :**
```bash
docker kill <CONTAINER ID> [<CONTAINER ID1> <CONTAINER ID2> ...]
```

**Command 2 :**
```bash
docker stop <CONTAINER ID>
```
here,
- `<CONTAINER ID>` can be fetched by `docker ps` command.

### Remove a Container
```bash
docker rm <CONTAINER ID>
```
here,
- `<CONTAINER ID>` can be fetched by `docker ps` command.

### Display Logs of a Container
```bash
docker logs [--since <time>] <CONTAINER ID> 
```
here,
- `<CONTAINER ID>` can be fetched by `docker ps` command.
- `[--since <time>]` is used to show logs since the given time.

### Remove all stopped containers
```bash
docker container prune [-f]
```
here,
- `-f` = Force.

### Remove a Docker Image
```bash
docker rmi <IMAGE NAME> [-f]
```
here,
- `-f` = Force.
- NOTE : if the container of an image is running, then the image can’t be removed

### Create a new image from a Container
```bash
docker commit [-m "<message>"] <CONTAINER ID> <NEW IMAGE NAME[:<TAG>]>
```
here,
- `-m "<message>"` flag is used to attach a message

### Inspect Containers / Images
```bash
docker inspect <IMAGE ID/CONTAINER ID>
```