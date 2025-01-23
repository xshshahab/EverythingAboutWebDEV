# What is VPS

A **VPS** (`Virtual Private Server`) is a type of hosting service that provides users with dedicated virtualized server resources on a shared physical server. It's like having your own private server but at a lower cost because the physical hardware is shared with other users.

**Here’s how it works and why people use it:**

### Key Features:

1. **Virtualization:** A VPS is created by partitioning a physical server into multiple virtual servers, each with its own dedicated resources (CPU, RAM, storage, etc.).

2. **Dedicated Resources:** Unlike shared hosting, where multiple users share the same server resources, a VPS provides dedicated resources to ensure better performance and reliability.

3. **Customization:** You have root access (or admin access) to configure the operating system, software, and settings according to your needs.

4. **Scalability:** It’s easy to scale up (add more resources) or scale down as your needs change, making it ideal for growing projects.

### Who Uses VPS?

- **Developers:** For hosting apps, websites, or custom projects that need more control than shared hosting.
- **Businesses:** For hosting e-commerce sites, customer portals, or systems requiring higher performance and reliability.
- **Gamers:** To host game servers (e.g., Minecraft, Rust, etc.).
- **Resellers:** To host multiple client websites on one VPS.

### Benefits:

- **Performance:** Faster and more reliable than shared hosting.
- **Control:** You can install any software or operating system.
- **Cost-Effective:** Cheaper than a dedicated server but offers similar control and flexibility.
- **Security:** More secure than shared hosting since your environment is isolated from others.

### Common Uses:

- Hosting websites and blogs.
- Running applications (e.g., CRM, ERP systems).
- Cloud storage or file hosting.
- Hosting game servers.
- Creating a VPN (Virtual Private Network).

If you’re considering `VPS hosting`, it’s a great middle ground between shared hosting (`cheap but limited`) and dedicated servers (`powerful but expensive`).

---

## How to host Node.js apps on Ubuntu

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
