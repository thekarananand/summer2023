# ☀️ Jun 4, 2023
Tech : JavaScript, Jenkins

# Jenkins Backup & Restore

- Configurations (config.xml), Jobs, and other important stuff are stored in `$JENKINS_HOME` dir.
- To find `$JENKINS_HOME`, run `echo $JENKINS_HOME`.

## Ways to Backup

1. Filesystem Snapshot
    > it's an snapshot not a backup.....

2. Plugins for Backup
    > Easiest Method.

3. Write a Backup Script
    > Example : [GitHub / sue445 / jenkins-backup-script](https://github.com/sue445/jenkins-backup-script).

<hr>
 
## Plugins for Backup

### **Step 1**: Go to Jenkins Dashboard and Navigate to Jenkins Manager > Plugins > Available Plugins

### **Step 2**: Search & Install `ThinBackup` Plugin. This will take a restart.

### **Step 3**: Setup a directory for Backups. For Docker Container, [Click here](#backup-directory-in-jenkins-docker-container)

### **Step 4**: On the Jenkins Dashboard, Navigate to Jenkins > Manage Jenkins > ThinBackup > Settings

### **Step 5**: Now, Enter the Backup Directory, and select the what to backup. Don't Forget to Save. 

### **Step 6**: Now, we can Backup...

<hr>

## Backup Directory in Jenkins Docker Container

### Step 1 : Login into the Container as Root Login

``` bash
docker exec -it -u root <Container_ID> bash
```

### Step 2 : Create a Directory for Backups.

``` 
mkdir /BACKUP
```

### Step 3 : Set Permissions

```
chmod 777 /BACKUP
```
or
```
sudo chown -R <Jenkins_User> /BACKUP
```

# JavaScript

## Accessing the Form response with JS

``` HTML
<head>
    <script>

        document.addEventListener('DOMContentLoaded', function(){
                
            document.querySelector('form').onsubmit = function(){
                    
                let name = document.querySelector("#Name").value;
                alert(`Hello ${name}`);

            }
        });
    
    </script>
</head>

<body>
    <form>
        <input autofocus id="Name" placeholder="Name" type="text">
        <input type="submit">
    </form>
</body>

```