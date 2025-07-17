# DOM in JavaScript

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing developers to interact with and manipulate the content, structure, and styles of a web page.

---

## Key Concepts

### 1. **Document**

- Represents the entire HTML document.
- Acts as the root of the DOM tree.
- Accessible via `document` object in JavaScript.

### 2. **Nodes**

- **Element Nodes**: Represent HTML tags like `<div>`, `<p>`, `<a>`.
- **Text Nodes**: Contain text content inside elements.
- **Attribute Nodes**: Represent HTML attributes of elements.

### 3. **DOM Tree**

- The HTML document is represented as a hierarchical tree structure:

```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello, DOM!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## Accessing the DOM

### Common Methods

| **Method**                                   | **Description**                     |
| -------------------------------------------- | ----------------------------------- |
| `document.getElementById(id)`                | Selects an element by its `id`.     |
| `document.querySelector(selector)`           | Selects the first matching element. |
| `document.querySelectorAll(selector)`        | Selects all matching elements.      |
| `document.getElementsByClassName(className)` | Selects elements by class name.     |
| `document.getElementsByTagName(tagName)`     | Selects elements by tag name.       |

## Example:

```javascript
// Access an element by its ID
const heading = document.getElementById("main-heading");

// Change its text content
heading.textContent = "Updated Heading";
```
