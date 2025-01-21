# MongoDB Alias Setup on Ubuntu

Your alias setup for MongoDB on Ubuntu looks well-organized and functional. Here's a review of each alias and its purpose to ensure everything works as expected:

---

## Alias Definitions

### **`mongod-start`**

- **Command**:

  ```bash
  sudo systemctl start mongod && sudo systemctl status mongod
  ```

- **Purpose:** Starts the MongoDB service and immediately displays its status.
- **Check:** This should work correctly as long as:
  - The `mongod` service is properly installed.
  - Your user has the necessary permissions for `sudo`.

### **`mongod-stop`**

- **Command**:

  ```bash
  sudo systemctl stop mongod
  ```

- **Purpose:** Stops the MongoDB service.
- **Check:** This should work as intended:

### **`mongod-restart`**

- **Command**:

  ```bash
  sudo systemctl restart mongod
  ```

- **Purpose:** Restarts the MongoDB service.
- **Check:** This command should correctly restart the service.

### **`mongod-enable`**

- **Command**:

  ```bash
  sudo systemctl enable mongod
  ```

- **Purpose:** Enables MongoDB to start on boot.
- **Check:** This ensures MongoDB starts automatically when the system boots up.

### **`mongod-disable`**

- **Command**:

  ```bash
  sudo systemctl disable mongod
  ```

- **Purpose:** Disables automatic startup of MongoDB on boot.
- **Check:** This stops MongoDB from starting automatically after reboot.

---

## Testing and Validation

1. Ensure that your `~/.bashrc` (or `~/.zshrc` if you're using Zsh) file contains these aliases.
2. To make the aliases available immediately, run:

```bash
   source ~/.bashrc
```

3. Test each alias one by one in your terminal:

```bash

mongod-start
mongod-stop
mongod-restart
mongod-enable
mongod-disable
```
