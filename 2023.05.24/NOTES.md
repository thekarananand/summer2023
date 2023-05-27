# ☀️ May 24, 2023
Tech : Git Branches, HTML Structures

# Git Branches

### List Current Branches

``` bash
git branch
```

### Creating a new branch

``` bash
git checkout -b <BRANCH-NAME>
```

### Switch to already existing branch

``` bash
git checkout <BRANCH-NAME>
```

### Merge two branches

- **Step 1** : Go to **Branch 1**
- **Step 2** : To Merge **Branch 2** into **Branch 1** with
``` bash
git merge <_BRANCH 2_>
```
- **Step 3** : Solve Merge Conflicts, if Any.

# HTML BODY Structure

``` HTML
    <body>
        <header></header>

        <nav>
            <ul>
                <li>Section 1</li>
                <li>Section 2</li>
                <li>Section 3</li>
            </ul>
        </nav>

        <main>Hello, World!</main>

        <footer></footer>

    </body>
```

# Link to a Different Section in the same page

``` HTML

    <a href="#ElementID">Element</a>

    .
    .
    .
    
    <div id="ElementID">Element</div>

```
