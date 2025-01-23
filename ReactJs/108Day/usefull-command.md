# code -r foldername

The command `code -r foldername` is a Visual Studio Code (VS Code) command used in the terminal to open a specific folder in an already running instance of VS Code. Here's a detailed explanation:

---

## Breaking It Down

### **`code`**

- This is the command-line interface for **Visual Studio Code**.
- It allows you to open files, folders, or perform other actions directly from the terminal.

> If `code` doesn't work, it might not be set up on your system. You can enable it by:
>
> 1. Opening VS Code.
> 2. Pressing `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux).
> 3. Typing **"Shell Command"** and selecting **Install 'code' command in PATH**.

---

### **`-r`**

- This stands for **reusing the current window**.
- Instead of opening a new instance of VS Code, it **reuses the currently open instance** and opens the folder within it.
- This is useful when you don’t want multiple VS Code windows cluttering your screen.

---

### **`foldername`**

- This is the name of the folder you want to open in VS Code.
- Replace `foldername` with the **path to the actual folder**.

---

## Examples

1. **Open a Folder in the Same Window**

```bash
code -r myProject
```

- Opens the folder `myProject` in the currently active VS Code window.

2. **Open a Folder by Full Path**

```bash

code -r /Users/username/Documents/myProject
```

- Opens the specified folder by its full path.

3. **Open the Current Folder in the Same Window**

```bash
code -r .
```

The `.` represents the **current directory**, so this command opens the current folder in the active window.

---

## Other Related Options

1. **Open in a New Window**

Use the `-n` flag to open the folder in a new window instead:

```bash

code -n foldername
```

2. **Open a File**

- You can use `code` to open individual files:

```bash
code file.txt
```

3. **Help Command**

- To see all available options:

```bash

code --help
```

---

## Why Use `code -r`?

- Keeps your workflow clean by reusing the current window.
- Faster and more efficient when working on multiple projects.
