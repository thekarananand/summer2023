# ☀️ Jun 2, 2023
Tech : Django, Jenkins

# Django
## Template Inheritance 

In a WebApp, Generally, we have a lot of HTML content like `<head>` common across all the pages. To Avoid Copy-Pasting, we can use HTML Templates Inheritance.

### Step 1 : Create a Layout 
Create `Layout.html` file in `<APP_NAME>/templates/<PAGE_NAME>` dir

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Todo App</title>
</head>
<body>
    {% block <NAME> %}
    {% endblock %}
</body>
</html>
```
here,
``` HTML
    {% block <NAME> %}
    {% endblock %}
```
represents as the position where the block of named `<NAME>` will go.

### Step 2 : Adjust other pages
Remove the HTML defined in the `Layout.html` file from all the pages of your WebApp & just keep the necessary bits of code enclose within a block

**PAGE1.html**
``` HTML
{% extends "<PAGE_NAME>/layout.html" %}

{% block Body %}
    <h3> This is Page 1</h3>
{% endblock %}
```

**PAGE2.html**
``` HTML
{% extends "<PAGE_NAME>/layout.html" %}

{% block Body %}
    <h3> This is Page 2</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
    </p>
{% endblock %}
```

here,
- `{% extends "<PAGE_NAME>/layout.html" %}` line links the html page to its layout.html

## Connecting Pages 
Although we can Copy-Page links into the Pages to connect them, but, Theirs a better way........

`urls.py` file of this WebApp
``` Python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.page1, name="Page1"),
    path("page2", views.page2, name="Page2")
]
```

`views.py` file of this WebApp
``` Python
from django.shortcuts import render

# Create your views here.

def page1(request):
    return render(request, "<PAGE_NAME>/PAGE1.html")
    
def page2(request):
    return render(request, "<PAGE_NAME>/PAGE2.html")
```

Now, We can Add links to the HTML pages

### Step 1 : Defining `app_name` in `urls.py`

We need to define a variable `app_name = "<APP_NAME>"` inside `urls.py file` to avoid namespace conflicts.

``` Python
from django.urls import path
from . import views

app_name = "<APP_NAME>"

urlpatterns = [
    path("", views.page1, name="Page1"),
    path("page2", views.page2, name="Page2")
]
```

### Step 2 : Add Links to the HTML Pages

**PAGE1.html**
``` HTML
{% extends "<PAGE_NAME>/layout.html" %}

{% block Body %}
    <h3> This is Page 1</h3>

    <a href="{% url '<APP_NAME>:Page1' %}">Go to Page 2</a>
{% endblock %}
```

**PAGE2.html**
``` HTML
{% extends "<PAGE_NAME>/layout.html" %}

{% block Body %}
    <h3> This is Page 2</h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
    </p>

    <a href="{% url '<APP_NAME>:Page2' %}">Back to Page 1</a>
{% endblock %}
``` 