
I started by creating three virtual machines on Rocky Linux 10.
I installed k3s on the control plane with:

```bash
curl -sfL https://get.k3s.io | sh -
```

Then I created a Salt state to target servers matching `k3s-wrk*` (worker nodes).
The state checks for a marker file to determine whether k3s is already installed.
If the file is missing, Salt installs k3s and joins the node to the control plane:

```bash
curl -sfL https://get.k3s.io | K3S_URL=https://controlPlane:6443 K3S_TOKEN=controlPlaneToken sh -
```

Now my control plane is set up and I have my worker nodes linked and ready I can move onto my next task which will be rancher.

```bash
[root@k3s-man-01 ~]# kubectl get nodes
NAME         STATUS   ROLES           AGE     VERSION
k3s-man-01   Ready    control-plane   3d23h   v1.35.4+k3s1
k3s-wrk-01   Ready    <none>          3d22h   v1.35.4+k3s1
k3s-wrk-02   Ready    <none>          3d22h   v1.35.4+k3s1
[root@k3s-man-01 ~]#
```