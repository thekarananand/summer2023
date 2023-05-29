# ☀️ May 29, 2023
Tech : Django, Build Processes of Java & Python

# Django
### Install Django
``` bash
pip3 install django
```

### Create a Django Web Server
``` bash
django-admin startproject <P_NAME>
```

### Start Server
``` bash
python3 manage.py runserver
```

stdout >>

```
...
Django version <SomeThing>, using settings '<P_NAME>.settings'
Starting development server at <Local Server URL>
Quit the server with CONTROL-C.
```

- this gives the URL for the Django Server. 

## Setting up a Web App

### Step 1 : Create a Web App in a Django Project
``` bash
python3 manage.py startapp <APP_NAME>
```

### Step 2 : Install the Web App into the ZDjango Project
in `<P_Name>/settings.py` file, add `<APP_NAME>` as a string element in `INSTALLED_APPS` list
``` Python
...
INSTALLED_APPS = [

    '<APP_NAME>',
    
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
...
```

### Step 3 : Defining `Views.py` for `<APP_NAME>`

in `<APP_NAME>/views.py` file

``` Python
# Added by default
from django.shortcuts import render

# Added by me
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello, world!")
```

- Essentially, we are creating a Module, containing specified function add a dynamic nature to the Web App 

### Step 4 : Adding URL Configuration for Installed Web App

**Step 1**: Create `urls.py` file in `<APP_NAME>` directory, add
APP_NAME
``` Python
from django.urls import path

# To add function form views.py
from . import views

urlpatterns = [
    path("", views.index, name="index"),
]
```

**Step 2**: in `<P_Name>/urls.py` file, Add a path entry for `<APP_NAME>/urls.py`

``` Python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('<Path_for_<APP_NAME> >/', include("<APP_NAME>.urls"))
]
```



# Build Process of Node.js

Node.js is a server-side JavaScript environment that can be used to develop apps like web servers using JavaScript

### Install Node.js

**Step 1**: Go to NodeSource repo.

**Step 2**: Find the link of required binary and get the download link.

**Step 3**: Download the Package using `wget` or `curl`.

**Step 4**: Install the Package using Package Manager.

### Checking the version

``` bash
node -v
```

### Running a JS program

``` bash
node program.js 
```

## Node.js's Package Manager - `npm`

### Checking the version

``` bash
npm -v
```

### Searching a NPM Package

``` bash
npm search <Package>
```

### Installing a NPM Package, Application Level

``` bash
npm install <Package>
```

### Paths of installed NPM Packages

``` bash
node -e "console.log(module.paths)" 
```

### Installing a NPM Package, Globally

``` bash
npm install <Package> -g 
```

Build-In Modules : `/usr/lib/node_modules/npm/node_modules/`

External Modules : `/usr/lib/node_modules/`