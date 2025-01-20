# Using Packages in Our Learing Backend

## 1. How to Install sligify:

To install the `slugify` package, run the following command in your project directory:

```bash
npm install slugify
```

### Example Usage of `slugify`:

Once installed, you can use the `slugify` package in your Node.js application. Here's how you can do it:

```javascript
const slugify = require("slugify");

// Basic usage
const slug = slugify("Hello World! Welcome to Slugify.");
console.log(slug); // Output: hello-world-welcome-to-slugify

// Custom separator
const customSlug = slugify("Hello World! Welcome to Slugify.", {
  replacement: "_",
});
console.log(customSlug); // Output: hello_world_welcome_to_slugify

// Remove special characters
const specialSlug = slugify("Hello @#$% World!");
console.log(specialSlug); // Output: hello-world

// Preserve certain characters (e.g., the dollar sign "$")
const preserveSlug = slugify("Price: $100", { remove: /[$]/g });
console.log(preserveSlug); // Output: price-100
```

### 3. Explanation of Key Features:

- **Automatic Removal of Special Characters:**  
  `slugify` removes characters that are not URL-friendly, such as symbols or punctuation marks.

- **Replacement of Spaces:**  
  Spaces in the original string are converted into dashes (`-`) by default, making the string suitable for URLs.

- **Customizable Behavior:**  
  You can customize how `slugify` works, including changing the separator, preserving or removing specific characters, or handling edge cases (like special characters).

---

### 4. Customizing `slugify`:

The `slugify` package allows you to pass an options object to customize its behavior. Some commonly used options include:

- `replacement`: The character used to replace spaces (default is `-`).
- `lower`: Convert the string to lowercase (default is `true`).
- `strict`: If set to `true`, it removes all non-alphanumeric characters (default is `false`).

##### Example of using options:

```javascript
const options = { replacement: "_", lower: true, strict: true };
const customSlug = slugify("Custom Options Example!", options);
console.log(customSlug); // Output: custom_options_example
```

### 5. Use Cases for `slugify`:

- **SEO-Friendly URLs:**  
  Create clean, human-readable URLs for blog posts, articles, products, etc.

  **Example:**

  - Input: `"Best Laptops Under $500!"`
  - Output: `"best-laptops-under-500"`

- **File Names:**  
  Generate safe file names that are readable and consistent.

- **Unique Identifiers:**  
  Use slugs as unique identifiers in a database or URL.

---

This is how you can structure the usage and details of the `slugify` package (or any other package you might want to use). This format provides clear explanations, installation steps, and practical examples, making it easier to understand and implement the package in your project.

### Future Packages:

Whenever you need to include a new package in your project, just follow the same format:

1. **Install the package**
2. **Provide an example usage**
3. **Explain its key features and options**

---

# What is Nodemon?

Nodemon is a tool that automatically restarts your Node.js application when you make changes to the source code. It saves you from manually restarting the app each time you update your code.

## How to Use It:

1. First, you need to have Node.js and npm (Node Package Manager) installed on your system.
2. When you run `npm i nodemon`, npm will download and install Nodemon as a package in your project.
3. After installation, you can use Nodemon instead of `node` to run your application. It will `automatically watch` for any changes in your code and restart the application for you.

## Installing Nodemon

To install Nodemon in your Node.js project, run the following command:

```bash
npm i nodemon
```
