# ☀️ May 26, 2023 
Tech : Networking, HTML 

# Networking Basic

> **Network Interface** : Physical or Virtual Connection to Devices to a Switch. By connecting multiple Devices to a Switch, we forms a network.

### Check all available network interfaces
``` bash
ip link
```

> Generally, a switch have an IP like 192.168.1.0 and devices are assigned IPs like 192.168.1.55 or 192.168.1.3

### Check the IP Address assigned
``` bash
ip addr
```

### Assign IP Address for a connected switch
``` bash
ip addr add <Device IP>/24 dev <SWITCH INTERFACE>
```

> to connect to other networks, we need a **ROUTER**. A Router can connected to Multiple Switches, as any other device, and hence, can have multiple IP addresses, one from  each switch. The connection/interface between a Router & a Switch is called **Gateway**. To make a device aware about a Router and other networks accessible, we need to update the **Routing Table** of the device

### Display routing table

``` bash
route
``` 
or
``` bash
ip route
``` 

### Add a route
``` bash
ip route add <TARGET DEVICE IP> via <ROUTER IP>
``` 
here,
- `<TARGET DEVICE IP>` is the IP address for Target device to other network.
- `<ROUTER IP>` is IP of Router assigned by switch that is connected to your device

> if the router is connected to internet, we can use this router to connect to other devices which are not connected to the same switch.

### Connect to other device via internet
``` bash
ip route add default via <ROUTER IP>
``` 
or
``` bash
ip route add 0.0.0.0 via <ROUTER IP>
``` 
here,
- `<ROUTER IP>` is IP of Router assigned by switch that is connected to your device

# Linux Host as a Router

> for this, lets assume the we have 2 switcher (named, Sw_1 and Sw_2), each can connected to multiple devices, but device of concern is dev_A on Sw_1 and dev_B on Sw_2.

- **Step 1** : Connect the Linux Host to both the switches. And obtain IP Addresses for both the Switches.

- **Step 2** : Route dev_A and dev_B via Linux host

    - on dev_A > `ip route add <IP of dev_B>/24 dev <IP of Linux host on Sw_1>`
    - on dev_B > `ip route add <IP of dev_A>/24 dev <IP of Linux host on Sw_2>`

- **Step 3** : Enable IP forwarding by putting `1` in `/proc/sys/net/ipv4/ip_forward`.
>Note : this change will be RESET with Linux host being rebooted.

# DNS

### Assigning a NAME to an IP
in `/etc/hosts` file, add the following entry
```
<IP>        <NAME>
```

### Setting up a DNS SERVER
in `/etc/resolv.conf` file, on all the hosts in the network, add the following entry
```
nameserver     <IP of DNS SERVER>
```

### Preferences
- The preference (by default) is first check `/etc/hosts` than go DNS server,
- This can be modified by changing `host:   files dns` entry to `host:   dns files` in `/etc/nsswitch.conf` file.

### Search list

Let's assume, DNS file on DNS server, looks like this

       192.168.1.1    app.mycompany.com
       192.168.1.2    www.mycompany.com
       192.168.1.3    pay.mycompany.com
       192.168.1.4    map.mycompany.com
       192.168.1.5    drive.mycompany.com
       192.168.1.6    sql.mycompany.com


we want to access all these devices via the name like `app`, `pay`, `map`, etc. for internal hosts.

To do this add a search list in `/etc/resolv.conf`

    namespace          <IP of DNS Server>
    search             mycompany.com

# HTML

### Line Break `<br>`
``` HTML
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br>
        elit, sed do eiusmod tempor incididunt ut laboe et <br>
        dolore magna aliqua. Ut enim ad minim veniam, quis <br>
        nostrud exercitation ullamco labors nisi ut aliqud <br>
        ex ea commodi consequatur? Quis autem vel eum iure <br>
        reprehenderit, qui in ea volutate velit esse, quam <br>
        nihil.
    </p>
```

### Horizontal Ruler `<hr>`
``` HTML
<hr>
```

### Lazy Loading
To Increase Web Performance, We use this attribute to delay loading an image until user scroll in nearby.
``` HTML
<img src="" alt="" loading="lazy">
```

### The Details disclosure element

``` HTML
    <details>
        <summary>I wanna tell you some secret</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et animi consequuntur aliquam del! </p>
    </details>
```

DEMO :

<details>
        <summary>I wanna tell you some secret</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et animi consequuntur aliquam del! </p>
</details>
