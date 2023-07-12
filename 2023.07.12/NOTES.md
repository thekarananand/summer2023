# ☀️ Jul 12, 2023

## Temporary fix Django Application  

If the django application can't be accessed by `https://192.168.xxx.xxx:nodeport/` and

```
root@controlplane:~# curl 192.168.xxx.xxx:nodeport
A server error occurred.  Please contact the administrator.
```

This is due because, kubernetes nodes were not defined in the `ALLOWED_HOSTS` setting in Django. This is a security measure that helps protect your application from HTTP Host header attacks. It specifies a list of valid hosts that your Django application will accept requests from.

For local testing, we can do this

```
ALLOWED_HOSTS = ['*']
```

but this will make the app vulnerable to HTTP Host header attacks.

A better solution can be to pass the IPs of Kubernetes as Environment Variables..... But more on that later.

## Explored the Kubernetes Storage

Resource : [YouTube/@TechWorldwithNana](https://youtu.be/0swOh5C3OVM)