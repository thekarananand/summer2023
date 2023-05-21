# ☀️ May 21, 2023
Tech : HTML, CSS, Linux

# TABLES in HTML
```HTML
    <table>
        <thead>
            <tr>
                <th>Weekdays</th>
                <th>Task 1</th>
                <th>Task 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monday</td>
                <td>HTML</td>
                <td>Docker</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>CSS</td>
                <td>Dockerfile</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>JS</td>
                <td>K8s</td>
            </tr>
        </tbody>
    </table>
```
here
- `<table>...</table>` tag consists of 2 section :
    1. `<thead>` for Table Headings
    2. `<tbody>` for Body Headings
- Tables in html is made up of `<tr>..</tr>` (or Table Rows) which itself is made of `<td>...</td>` (or Table Data) elements.

### Link a HTML Page to .CSS File 

``` HTML
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
```
# CSS

### Types of

1. **inline Styling** : Adding `style=""` attribute to the HTML Tag.
    ``` HTML
    <h1 style="color:red; text-align:center;">RED Heading</h1>
    ```
2. **id Styling**
    ``` HTML
    <h1 id="ironman">BLUE Heading</h1>
    ```

    ``` CSS
    #ironman {
        color: blue;
        text-align: center;
    }
    ```
3. **class Styling**
    ``` HTML
    <h1 class="avengers">GOLDEN Heading</h1>
    ```

    ``` CSS
    .avengers {
        color: gold;
        text-align: center;
    }
    ```
4. **type Styling**
    ``` HTML
    <h1>PURPLE Heading</h1>
    ```

    ``` CSS
    h1 {
        color: purple;
        text-align: center;
    }
    ```




# Linux Basics 

[Kunal Khushwaha's Basic Linux Commands](https://www.youtube.com/watch?v=iwolPf6kN-k&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&index=4&t=3015s)
