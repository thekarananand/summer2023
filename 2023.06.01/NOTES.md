# ☀️ Jun 1, 2023
Tech : Django, Git
# Django
## HTML as a Templates
### Conditions

``` HTML
<body>
    {% if bool_variable %}
        <h1>True</h1>
    {% else %}
        <h1>False</h1>
    {% endif %}
</body>
```

### for Loops

``` HTML
<body>
    {% for x in sequence_variable %}
        <h1>x</h1>
    {% endfor %}
</body>
```

## Static Files
While making a WebApp, we prefer to have a centralized location for static files like `.css` file, `.js` file or Other Assets.

### Step 1 : Place the Static files to `<APP_NAME>/static/<PAGE_NAME>/` 

### Step 2 : Add following to the top of the Template
```
{% load static %}
```

### Step 3 : Add links to the Assets (Wherever Required) in following format
``` 
" {% static %} '<PAGE_NAME>/PATH/ASSET' "
```

# GIT

## Add a Remote Repo to local Repo
``` bash
git remote add <REPO_NAME> <CONNECTION_URL>
```
here,
- `<CONNECTION_URL>` is a link to remote repo like [https://www.github.com/thekarananand/summer2023.git](https://www.github.com/thekarananand/summer2023.git)
- `<REPO_NAME>` is the name given to the `<CONNECTION_URL>`

## List Remote Repos 
``` bash
git remote -v
```

## Pushing to the Remote Repo
``` bash
git push [<REPO_NAME>] [<BRANCH>]
```

## Cloning a Remote Repo
``` bash
git clone <ssh_link/connection_url>
```

## Set your account's default identity
``` bash
git config [--global] user.email "you@example.com"
git config [--global] user.name "Your Name"
```
- `--global` flag is to set this account for all the repos



## To view all the branches (both local and remote)
``` bash
git branch -a
```





