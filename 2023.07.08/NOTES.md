# ☀️ Jul 8, 2023

## How to Create a Multinode Kubernetes Cluster for HomeLab ?

1. Create VMs for Control-Plane & Nodes

    - with SSH Server
    - without swap
    - root user enabled

2. [All Nodes] SSH as Normal user and switch to root user 

    ```
    su
    ```

3. [All Nodes] Enable SSH as Root

    ```
    echo 'PermitRootLogin=yes'  | tee -a /etc/ssh/sshd_config
    systemctl restart sshd
    ```

4. [All Nodes] Install prerequisites

    ```
    apt install -y apt-transport-https curl gpg sudo nano ufw
    ```

5. [All Nodes] Turn off Swap

    ```
    swapoff -a
    sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
    ```

6. [All Nodes] Update `/etc/hosts` file 


    **📄 /etc/hosts**

    ```
    # kubernetes  

    192.168.xxx.1		controlplane
    192.168.xxx.101		node1
    192.168.xxx.102		node2
    ```

7. [Control Plane] Configure Firewall Rules

    ```
    ufw allow 6443/tcp
    ufw allow 2379/tcp
    ufw allow 2380/tcp
    ufw allow 10250/tcp
    ufw allow 10251/tcp
    ufw allow 10252/tcp
    ufw allow 10255/tcp
    ufw reload
    ```

    [Nodes] Configure Firewall Rules

    ```
    ufw allow 10250/tcp
    ufw allow 30000:32767/tcp
    ufw reload
    ```

8. [All Nodes] Setting-up Kernel Parameters for Containerd

    ```
    cat <<EOF | tee /etc/modules-load.d/containerd.conf
    overlay
    br_netfilter
    EOF

    modprobe overlay
    modprobe br_netfilter

    cat <<EOF | tee /etc/sysctl.d/99-kubernetes-k8s.conf
    net.bridge.bridge-nf-call-iptables = 1
    net.ipv4.ip_forward = 1
    net.bridge.bridge-nf-call-ip6tables = 1
    EOF

    sysctl --system
    ```


9. [All Nodes] Install containerd

    ```
    apt  update
    apt -y install containerd
    ```

10. [All Nodes]Configure containerd to works with Kubernetes

    ```
    containerd config default | tee /etc/containerd/config.toml >/dev/null 2>&1
    ```

    now,

    ```
    nano /etc/containerd/config.toml
    ```
    and add `SystemdCgroup = true` under `[plugins.”io.containerd.grpc.v1.cri”.containerd.runtimes.runc.options]` section

    ```
    systemctl restart containerd
    systemctl enable containerd
    ```

11. [All Nodes] Add Google Cloud Repo for Kubernetes

    ```
    curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /etc/apt/keyrings/kubernetes-archive-keyring.gpg

    echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list
    ```

12. [All Nodes] Install Kubernetes Components

    ```
    apt update
    apt install -y kubelet kubeadm kubectl
    ```

13. [Control Plane] Initialize the cluster

    ```
    kubeadm init --control-plane-endpoint=controlplane
    ```
    This Command will return 
    
    1. `export KUBECONFIG=/etc/kubernetes/admin.conf` to set kubeconfig as env variable.....
    (need to do it on each boot, on controlplane)
    2. `kubeadm join` command, run those command on Nodes, to make them Join the Cluster

14. [Control Plane] run `kubectl get nodes`

    ```
    root@controlplane:~# kubectl get nodes
    NAME           STATUS      ROLES           AGE    VERSION
    controlplane   NotReady    control-plane   104m   v1.27.3
    node1          NotReady    <none>          103m   v1.27.3
    node2          NotReady    <none>          103m   v1.27.3
    ```


15. [Control Plane] Deploy
    [Calico](https://docs.tigera.io/calico/latest/getting-started/kubernetes/self-managed-onprem/onpremises#install-calico-with-kubernetes-api-datastore-50-nodes-or-less)
    for Cluster Networking

    ```
    kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml
    ```

16. [Control Plane] Firewall Config for Calico

    ```
    ufw allow 179/tcp
    ufw allow 4789/udp
    ufw allow 51820/udp
    ufw allow 51821/udp
    ufw reload
    ```

14. [Control Plane] run `kubectl get nodes` (may take a few minutes)

    ```
    root@controlplane:~# kubectl get nodes
    NAME           STATUS      ROLES           AGE    VERSION
    controlplane   Ready       control-plane   104m   v1.27.3
    node1          Ready       <none>          103m   v1.27.3
    node2          Ready       <none>          103m   v1.27.3
    ```

---

## Add Cluster to Lens IDE

1. [Control Plane] Get the KUBECONFIG

    ```
    cat $KUBECONFIG
    ```

    or

    ```
    cat /etc/kubernetes/admin.conf
    ```

    Copy the Output

2. [Lens IDE] Paste this file in `File > Add Cluster`

---

## Test this Cluster

on **Control Plane**

1. Create a NGINX deployment

    ```
    kubectl create deployment nginx-app --image=nginx --replicas 2
    kubectl expose deployment nginx-app --name=nginx-web-svc --type NodePort --port 80 --target-port 80
    ```

2. Get Service Details

    ```
    kubectl describe svc nginx-web-svc
    ```
3. Try to Connect

    ```
    curl http://node1:<NODEPORT>
    ```

    or

    ```
    curl http://node2:<NODEPORT>
    ```