To get started with rancher we need to install helm onto our controller plane.
Helm is a package manager for k8s and we can use this to install Rancher. 

You can find the helms install guide [by clicking 'here'](https://helm.sh/docs/intro/install/). I ran

```bash
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-4
chmod 700 get_helm.sh
./get_helm.sh
```

