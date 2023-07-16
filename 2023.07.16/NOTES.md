# ☀️ Jul 16, 2023

## Basics of GCP

This a Good Practice to Define the Region & Zone initially, with Environment Variables.

``` bash
gcloud config set compute/zone us-east1-c
gcloud config set compute/region us-east1
```

``` bash
export REGION=us-east1
export ZONE=us-east1-c
```


# Basics of Google Compute Engine

## Creating a VM instance

``` bash
gcloud compute instances create <NAME> --machine-type <TYPE> --zone=<ZONE>
```

The new instance has these default values:

- The latest Debian 11 (bullseye) image.
- The e2-medium machine type.
- A root persistent disk with the same name as the instance; the disk is automatically attached to the instance.

Here's the [Official Documentation](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#gcloud)


## SSH into VM instance
``` bash
gcloud compute ssh gcelab2 --zone=<ZONE>
```


## Adding More Persistent Storage 

### Step 1: Create VM

### Step 2: Create Persistent Storage

``` bash
gcloud compute disks create <DISK_NAME> --size <SIZE> --zone <ZONE>
```

> **Note**: To attach disk to the VM instance, the zone must be the same. 

### Step 3: Attach the Disk to VM

``` bash
gcloud compute instances attach-disk <VM_NAME> --disk <DISK_NAME> [--device-name <DEV_NAME>] --zone $ZONE
```

- `--device-name <DEV_NAME>` is to define a custom device name by which the disk will be recognized by the VM

- Default Device Name = `scsi-0Google_PersistentDisk_persistent-disk-1`

### Step 4: Formatting & Mounting the Disk

- Make a mount point

- Format the disk using the mkfs tool

- Mount the Disk


### Step 5: Auto Mount on Reboot

- edit the `/etc/fstab`

- Add the following below the line that starts with "UUID=...":

    ```
    /dev/disk/by-id/<DEV_NAME> <MOUNT POINT> <FORMAT> defaults 1 1
    ```

## Deleting VM

``` bash
gcloud compute instances delete backend --zone=$ZONE [–keep-disks]
```

- `–keep-disks` prevents the destruction of an attached persistent disk when the instance is deleted
