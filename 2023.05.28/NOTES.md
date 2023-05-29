# ☀️ May 28, 2023
Tech : HTML + CSS, Python, Build Processes of Java & Python

# HTML + CSS

Worked on [New Tab](https://thekarananand.github.io/NewTab/) - [(Github)](https://github.com/thekarananand/NewTab)

- Swapped Socials with a more general section, called Quick Links.
- Added Icons for Quick Links.
- Minor Touches to CSS

# Python Revision

## [Python Crash Course](https://www.youtube.com/watch?v=t8pPdKYpowI)

# Build Process of Java

### Install Java (JDK)

**Step 1**: Go to OpenJDK Webpage, find the required version and get the download link

**Step 2**: Download JDK Package using `wget` or `curl`

**Step 3**: Use `tar -x -f <OpenJDK-...-bin.tar.gz>` command to extract binaries

here,
- `-x` flag = extract
- `-f` flag = specify a file
- this will extract a `jdk-<version>` directory in which `bin` directory contains Required Binary files.

### (Optional) Adding JDK to Environment PATH Variable
``` bash
export PATH = &PATH:</path/to/JDK/bin/>
```

some Important Java Tools :
- `javadoc` : to document application with JDK
- `javac` : to compile application with JDK
- `jdb` : to debug application with JDK
- `jre` : Java Runtime Environment (discontinued with the release of JDK9. Last released with JDK8 (1.8) )


### Checking Java Version
``` bash
java -version
```

### Building a Java Application

> Java Source Cade is stored in a `.java` file.

**Step 1**: To Compile, run `javac file_name.java`. This will generate a `file_name.class` file.

**Step 2**: To Run `java file_name`

### Packaging a Java Application to `.jar`

``` bash
jar cf <Output_Name.jar> <Program1.class> [<Program2.class> <Dependency1> <Dependency2>....]
```

- this command will package all java .class files and other dependencies into `output.jar` file
- this `.jar` file contains a Manifest file at `/META-INF/MANIFEST.MF`
- this manifest file contains a `Main-class: something.class` entry. This `something.class` will be at the beginning of execution.

### To Run a `.jar` file

``` bash
javac -jar <MyJarFile.jar>
```

### Documentation with `javadoc`
``` bash
javadoc -d doc <Source_Code.java>
```

> Java Build Tools to do :
> 1. maven
> 2. ant
> 3. gradle

# Build Process of Python

Two version 

1. `python2` 
2. `python3` 

### Check Python version

``` bash
python2 -V
```

``` bash
python3 -V
```

### Use your Package Manager to install `python2` or `python3`

### Running Python Program

``` bash
python2 <file_name.py>
```

``` bash
python3 <file_name.py>
```

## Python's Package manager - `pip`

### Checking Version
``` bash
pip2 -V
```

``` bash
pip3 -V
```

### Install Packages
``` bash
pip2 install <Package>
```

``` bash
pip3 install <Package>
```

Note : these package are installed at `/usr/lib/python<version>/site-packages` or `/usr/lib64/python<version>/site-packages`

### Install Packages as per `requirements.txt`
``` bash
pip2 install -r requirements.txt
```

``` bash
pip3 install -r requirements.txt
```

### Upgrade Package
``` bash
pip2 install <Package> --upgrade
```

``` bash
pip3 install <Package> --upgrade
```

### To check status of Packages
``` bash
pip2 show <Package> [<Package> ...]
```

``` bash
pip3 show <Package> [<Package> ...]
```

### uninstall Packages
``` bash
pip2 uninstall <Package>
```

``` bash
pip3 uninstall <Package>
```
