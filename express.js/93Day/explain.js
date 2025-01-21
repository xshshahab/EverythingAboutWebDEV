// Importing required modules
import fs from "fs/promises"; // For promise-based file system operations (asynchronous).
import normalFs from "fs"; // For synchronous file system operations.
import path from "path"; // For working with file and directory paths.

// Define the path to the directory where the files are located
let basePath = "/home/syphar/xshshahab/EverythingAboutWebDEV/express.js/93Day";

// Read all the files in the directory specified by basePath
let files = await fs.readdir(basePath); // This returns an array of file names in the directory.

for (const file of files) {
  // Get the file extension
  let ext = file.split(".")[file.split(".").length - 1]; // Split the file name by "." and get the last part.

  // Check if the file should be processed
  // Skip files with extensions "js", "json", or "md"
  // Also, skip files that do not have an extension
  if (
    ext !== "js" &&
    ext !== "json" &&
    ext !== "md" &&
    file.split(".").length > 1
  ) {
    // Check if a folder with the name of the extension already exists
    if (normalFs.existsSync(path.join(basePath, ext))) {
      // If the folder exists, move the file into that folder
      fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
    } else {
      // If the folder does not exist, create it
      fs.mkdir(ext); // Create a folder named after the extension

      // Then move the file into the newly created folder
      fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
    }
  }
}
