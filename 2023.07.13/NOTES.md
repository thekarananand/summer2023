# ☀️ Jul 13, 2023

## How to Create a NFS Server for HomeLab ?

1. Create VMs for Control-Plane & Nodes

    - with SSH Server
    - root user enabled

2. [NFS SERVER] SSH as Normal user and switch to root user 

    ```
    su
    ```

3. [NFS SERVER] Enable SSH as Root

    ```
    echo 'PermitRootLogin=yes'  | tee -a /etc/ssh/sshd_config
    systemctl restart sshd
    ```

4. [NFS SERVER] Install Packages

    ```
    apt install nfs-kernel-server keyutils libnfsidmap1 nfs-common rpcbind
    ```

5. [NFS SERVER] Enable Service

    ```
    systemctl enable nfs-kernel-server 
    systemctl start nfs-kernel-server 
    ```

6. [NFS SERVER] Update the `/etc/hosts`

    **📄 /etc/hosts**

    ```
    # kubernetes  

    192.168.xxx.1		controlplane
    192.168.xxx.101		node1
    192.168.xxx.102		node2
    ```

7. [NFS SERVER] Create the Location for Shared Storage & Manage Permissions 
    ```
    mkdir -p /path/to/share-storage
    chmod 777 /path/to/share-storage
    ```

8. [NFS SERVER] Update the `/etc/exports`

    **📄 /etc/exports**

    ```
    /root/nfs-storage       node1(rw,sync,no_subtree_check)
    /root/nfs-storage       node2(rw,sync,no_subtree_check)
    ```

9. [CLIENTS] Install Packages

    ```
    apt install nfs-common
    ```

10. [CLIENTS] Update the `/etc/hosts`

    **📄 /etc/hosts**

    ```
    # kubernetes  

    192.168.xxx.1         controlplane
    192.168.xxx.101       node1
    192.168.xxx.102       node2
    192.168.xxx.201       nfs-server   
    ```


11. [CLIENTS] Check that Available Mount Points

    ```
    showmount --exports nfs-server
    ```

12. [CLIENTS] Mount the Shared Server

    ```
    mkdir -p /mnt/nfs
    mount nfs-server:/path/to/share-storage /mnt/nfs
    ```

-----------------------------------------------------------------

# Kubernetes Volume 

## 1. Local Storage of Node on which the Pod is running

``` yml
apiVersion: apps/v1
kind: Deployment
metadata:

spec:
    template:
        metadata:
        spec:
            containers:
              - name:
                image:
                volumeMounts:
                  - name: local-storage
                    mountPath: /path/in/the/pod
            volumes:
              - name: local-storage
                hostPath:
                  path: /path/on/the/Node
    replicas:
    selector:
```

## 2. Kubernetes Persistent Volume 

### Kubernetes Persistent Volume 

``` yml
apiVersion: v1
kind: PersistentVolume 
metadata:
    name: nfs-server
spec:
    capacity:
        storage: 100Gi
    accessModes:
      - ReadWriteMany
    storageClassName: nfs
    nfs:
        server: nfs-server
        path: "/root/nfs-storage"
```

### Kubernetes Persistent Volume Claim

``` yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
    name: nfs-server
spec:
    accessModes:
      - ReadWriteMany
    storageClassName: nfs
    resources:
        requests:
            storage: 30Gi
```

### Mount Point definition in Deployment file

``` yml
apiVersion: apps/v1
kind: Deployment
metadata:
spec:
    template:
        metadata:
        spec:
            containers:
              - name:
                image: 
                volumeMounts:
                  - name: md-entries
                    mountPath: /wiki/entries
            volumes:
              - name: md-entries
                persistentVolumeClaim:
                    claimName: nfs
    replicas: 
    selector:
```