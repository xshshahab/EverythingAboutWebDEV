# How to host Node.js apps on Ubuntu

### Step 1 - Installing Node.js & build essentials

```bash
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

Now install build essentials

```bash
sudo apt-get install build-essential
```

### Step 2 - Create a sample Node.js app

You can also use your own app if you want to host it. Otherwise if you are just trying out, you can use a sample app.

### Step 3 - Install pm2 & launch your app

Install pm2 package which is a process manager for Node.js applications

```bash
sudo npm install -g pm2
```

Now launch your app using this command

```bash
pm2 start index.js
```

### Step 4 - Install nginx

Nginx is a web server which we will be using as a proxy

```bash
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites-available/default using following command

```bash
sudo nano /etc/nginx/sites-available/default
```

We want this file to look like this:

```bash
. . .
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
...
```

### Step 5 - Test and restart nginx

Test and restart nginx using following commands

```bash
sudo nginx -t
```

Now restart using:

```bash
sudo systemctl restart nginx
```
