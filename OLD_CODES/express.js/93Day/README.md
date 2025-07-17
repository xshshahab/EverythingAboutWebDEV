# File Organizer Script

This script organizes files in a specified directory by grouping them into subdirectories based on their extensions. Below is an explanation of how it works.

## Features

- Reads all files in the target directory (`basePath`).
- Skips files with extensions `.js`, `.json`, `.md`, or files without extensions.
- Groups other files into subdirectories named after their extensions.
- Creates subdirectories if they don’t already exist.

## How It Works

1. **Import Required Modules**

   - `fs/promises`: For promise-based file operations.
   - `fs`: For synchronous file checks.
   - `path`: For path manipulation.

2. **Set the Base Directory**

   - Update the `basePath` variable to the directory where your files are located.

3. **Organize Files**
   - Iterate through the files.
   - Extract the file extension.
   - If a file doesn’t have an excluded extension (`.js`, `.json`, `.md`), move it into a subdirectory named after its extension.
   - Create the subdirectory if it doesn’t exist.

## Code

```javascript
import fs from "fs/promises";
import normalFs from "fs";
import path from "path";

let basePath = "/home/syphar/xshshahab/EverythingAboutWebDEV/express.js/93Day";
let files = await fs.readdir(basePath);

for (const file of files) {
  let ext = file.split(".")[file.split(".").length - 1];

  if (
    ext !== "js" &&
    ext !== "json" &&
    ext !== "md" &&
    file.split(".").length > 1
  ) {
    if (normalFs.existsSync(path.join(basePath, ext))) {
      fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
    }
  }
}
```
