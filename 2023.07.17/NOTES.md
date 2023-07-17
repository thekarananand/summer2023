# ☀️ Jul 17, 2023

## Google Cloud Storage Bucket

### Creating a Google Cloud Storage Bucket

``` bash
gsutil mb gs://fancy-store-$DEVSHELL_PROJECT_ID
```

> Note: Use of the $DEVSHELL_PROJECT_ID environment variable within Cloud Shell is to help ensure the names of objects are unique. Since all Project IDs within Google Cloud must be unique, appending the Project ID should make other names unique as well. 


### Coping File to Storage Storage Bucket

``` bash
gsutil cp <Path/to/FILE> gs://fancy-store-$DEVSHELL_PROJECT_ID
```

### Coping Directory to Storage Storage Bucket

``` bash
gsutil cp -r <Path/to/DIR> gs://fancy-store-$DEVSHELL_PROJECT_ID
```

---

## Google Compute Engine

### Adding a Startup Script to VM

``` bash
gcloud compute instances create <VM-NAME> \
--zone=<ZONE> \
--machine-type=<MACHINE-TYPE> \
--tags=<TAG> \
--metadata=startup-script-url=<URL>
```

### Creating Firewall Rule to Expose Ports from VM

``` bash
gcloud compute firewall-rules create <FW-RULE_NAME> \
--allow tcp:<PORT> \
--target-tags=<VM_TAG>
```

---

### Create instance template from source VM instance

Step 1. Stop the Source Instance

``` bash
gcloud compute instances stop frontend --zone=<ZONE>
```

Step 2. Stop the Source Instance

``` bash
gcloud compute instance-templates create <TEMPLATE-NAME> \
--source-instance-zone=<ZONE> \
--source-instance=<VM-NAME>
```

Step 3. List VM Templates

``` bash
gcloud compute instance-templates list
```