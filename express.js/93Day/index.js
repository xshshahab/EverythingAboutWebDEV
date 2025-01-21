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
