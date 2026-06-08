Installing and connecting a minion is very simple. You can easily follow the guide from the ****[salt project docs that can be found by clicking here ](https://docs.saltproject.io/salt/install-guide/en/latest/)****

<br />

For debain family installs which most of my servers are bar a few you can just copy and paste below for salt minion version3006.* which is the LTS version of salt stack. I believe the next LTS version will be 3008 which will be released very soon

<br />

```sh
# Ensure keyrings dir exists
mkdir -m 755 -p /etc/apt/keyrings
# Download public key
curl -fsSL https://packages.broadcom.com/artifactory/api/security/keypair/SaltProjectKey/public | gpg --dearmor | sudo tee /etc/apt/keyrings/salt-archive-keyring.pgp > /dev/null
# Create apt repo target configuration
curl -fsSL https://github.com/saltstack/salt-install-guide/releases/latest/download/salt.sources | sudo tee /etc/apt/sources.list.d/salt.sources

# Pinning salt version to 3006.*

echo 'Package: salt-*
Pin: version 3006.*
Pin-Priority: 1001' | sudo tee /etc/apt/preferences.d/salt-pin-1001


#install the salt minion and needed parts for a salt-minions
sudo apt-get install salt-master
sudo apt-get install salt-minion
sudo apt-get install salt-ssh
sudo apt-get install salt-syndic
sudo apt-get install salt-cloud
sudo apt-get install salt-api


# enable and start the salt minion
sudo systemctl enable salt-master && sudo systemctl start salt-master
sudo systemctl enable salt-minion && sudo systemctl start salt-minion
sudo systemctl enable salt-syndic && sudo systemctl start salt-syndic
sudo systemctl enable salt-api && sudo systemctl start salt-api

```

<br />

The next step of setting up your minion is pointing it to a master. The config for this is held in `/etc/salt/minion` in this file you will need to set the `master:` You can overwrite the whole file like I have done below

<br />

```
root@radarr:~# echo "master: slt-01" > /etc/salt/minion
root@radarr:~# systemctl restart salt-minion
```
<br />

Next to accept the minion you will need to accept the keys/minions **-A** will accept all pending keys. You can also run **salt-key -a "minion fqdn"**

```
salt-key -A
```
