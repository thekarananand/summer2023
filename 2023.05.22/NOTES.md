# ☀️ May 22, 2023
Tech : CSS, CSS Flexbox, CS Grids, GIT

# HTML
### HTML BUTTONS
```HTML
<button>CLICK ME</button>
```
here,
- `<button>...</button>` tag is for a Button. The label of that button is contained within this tag.
- this button can be customized by **CSS**. Following is an example.

# CSS
### CSS on HTML BUTTONS 
```CSS
button {
    border-radius: 0px;
    border: 0px;
    background-color: #333333;

    width: 216px;
    height: 68px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;;
    color: white;
}

button:hover {
    background-color: blueviolet;
}
```
here,
- All the CSS tags are quite common and self-explanatory  
- `button:hover` is a psudo CSS Class. Whenever a specified action is triggered (in this case hovering over the object), we can see the Specified CSS changes. 

### CSS on HTML Tables
If we simply create a table in html (as i have created [here](https://github.com/thekarananand/summer2023/blob/main/2023.05.21/NOTES.md#tables-in-html)), we can easily observe that the data representation is not good. To fix we can use CSS. Here's an example
``` CSS
table {
    border: 1px solid black;
    border-collapse: collapse;
}

td, th {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: 1px solid black;
    padding: 5px;
    width: 180px;
    text-align: left;
}

tr:hover {
    background-color: lavender;
    font-weight: bold;
}
```

here,
- `table {border-collapse: collapse;}` tag gives a unified border, instead of box in a big box containing Table Headings and Table Data.

# CSS FLEXBOX
``` HTML
    <body>
        <div id="container">
            <div>BOX 1</div>
            <div>BOX 2</div>
            <div>BOX 3</div>
            <div>BOX 4</div>
            <div>BOX 5</div>
            <div>BOX 6</div>
            <div>BOX 7</div>
            <div>BOX 8</div>
            <div>BOX 9</div>
            <div>BOX 10</div>
            <div>BOX 11</div>
            <div>BOX 12</div>
        </div>
    </body>
```
``` CSS
#container {
    display: flex;
    flex-wrap: wrap;
}
```
- `display: flex;` tag tells web browser that this is a CSS flexbox
- `flex-wrap: wrap;` tag tells web browser put boxes to the next line if don't find space.

# CSS GRID
``` HTML
    <body>
        <div id="container">
            <div>BOX 1</div>
            <div>BOX 2</div>
            <div>BOX 3</div>
            <div>BOX 4</div>
            <div>BOX 5</div>
            <div>BOX 6</div>
            <div>BOX 7</div>
            <div>BOX 8</div>
            <div>BOX 9</div>
            <div>BOX 10</div>
            <div>BOX 11</div>
            <div>BOX 12</div>
        </div>
    </body>
```
``` CSS
#container {
    display: grid;

    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: 100px auto;
}
```

- `display: grid;` tag tells web browser that this is a CSS grid
- `grid-column-gap: 20px;` is to gap between the column
- `grid-row-gap: 20px;` is to gap between the rows
- `grid-template-columns: 100px auto;` is to specify the Width Pattern to each column. 

# Responsive Design

### Adjusting Viewport
``` HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Queries
To perform Changes to the styling of webpages based on Screen Width, use Media Query. Here's a quick example.
``` CSS
@media (min-width: 600px ) {
    body {
        background-color: lightsalmon;
    }
}
@media (max-width: 599px ) {
    body {
        background-color: lightgreen;
    }
}
```

# GIT

### Creating an Empty Repo
```bash
git init
```
- Running this command will add `.git` folder to the current directory 

### Adding File/Directory to Track Changes
```bash
git add <DIR or FILE>
```

### To check tracked changes
```bash
git status
```

- To track all the changes in the current directory
```bash
git add .
```

### Commit Changes to the local Repo
```bash
git commit [-m "<COMMENT>"]
```
- `[-m "<COMMENT>"]` flag is used to add comment to the commit

### Add all the files and commit
```bash
git commit -am "<COMMENT>"
```

### Push all commits to Remote Repo (GitHub)
```bash
git push
```

### Update the local Repo from Remote Repo
```bash
git pull
```

### Checking Commit Logs
```bash
git log
```
- These Commits are stacked i.e., the most recent commit is on the top. Also, each commit have a hash id assigned to it.


### Remove a file from the Index
```bash
git restore --staged <FILE NAME>
```

### Revert back to an older Commit
```bash
git reset --hard <COMMIT HASH-ID> 
```
- Any commit above this `<COMMIT HASH-ID>` in the stack will be removed.
```bash
git reset --hard <origin/master> 
```
