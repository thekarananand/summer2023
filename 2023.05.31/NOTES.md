# ☀️ May 31, 2023
Tech : Django, Git

# Django

## Adding a Subdirectory Path 

### Step 1 : Path Entry
Inside the `urls.py` file of `<APP_NAME>` directory, add the `path()` entry with the subdirectory name

``` Python
from django.urls import path

# To add function form views.py
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("karan/", views.karan, name="karan"),
]
```

### Step 2 : Create the Function in views.py
Inside `<APP_NAME>/views.py` file
``` Python
...
def karan(request):
    return HttpResponse("Hello, Karan Boss!")
...
```

## Input from Path

In the above example, I tried to make a special path to a webpage that justs greet me, but if we want to greet everyone (or essentially every sub-path), we can do the following:

### Step 1 : Path to Variable
We can add `urlpatterns` entry in `<APP_NAME>/urls.py`

``` Python
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("str:Name", views.greet, name="greet"),
]
```

Now, this will take the subpath in a variable `Name`, and pass it to a function `greet()` defined in the `./views.py`

### Step 2 : Creating `greet()` function
Inside `<APP_NAME>/views.py` file
``` Python
...
def greet(request, Name):
    return HttpResponse(f"Hello, {Name}")
...
```

## HTML as Template
Although, entire HTML can be inserted into `HttpResponse()` function but that make the project quite tedious. So, we can use HTML page as a template and use functions in `view.py` file to fill necessary changes in HTML. 

### Step 1 : Create a HTML template
Create `<APP_NAME>/templates/<PAGE_Name>/index.html` file & it's Parent Directories.
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Random Page</title>
</head>
<body>
    <h1>Hi, {{ Name }}!!</h1>
</body>
</html>
``` 
here,
- `{{ Name }}` is a Variable for Django's HTML Template.
- We can also integrate CSS and JS in `<PAGE_NAME>` directory

### Step 2 : Create a Function in `views.py`
``` Python 
def greet(request):
    return render(request, "<PAGE_NAME>/index.html", { 
        "Name": Name.capitalize()
    })
```
here, `render()` is taking:

1. http request
2. Path to HTML Template
3. Variables in Dictionary

# Git Branches

### Create a Branch
``` bash
git branch <NEW_BRANCH_NAME>
```

### List Branches
``` bash
git branch
```

### Switch Branch
``` bash
git checkout <BRANCH_NAME> 
```

### Delete Branch
``` bash
git checkout -d <BRANCH_NAME> 
```

### Create a Branch and Switch to the new Breach 
``` bash
git checkout -b <NEW_BRANCH_NAME>
```
### To List the changed files in Git Log
``` bash
git log --name-only
