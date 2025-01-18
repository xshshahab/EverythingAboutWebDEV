# EVERYTHING ABOUT DOM

![Banner](https://github.com/xshshahab/EverythingAboutWebDEV/blob/main/JavaScript/71Day/Showcase.png)

# Document Object Model `(DOM)` :

## What is DOM?

- **Definition:** The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects.
- **Purpose:** It allows JavaScript (or other scripting languages) to access and manipulate the structure, style, and content of a document.

## DOM Structure

- The DOM represents an HTML or XML document as a tree of nodes.
  - **Document:** The root of the tree.
  - **Element Nodes:** Represent HTML tags (`<div>`, `<p>`, etc.).
  - **Attribute Nodes:** Represent the attributes of an element (e.g., `id="header"`).
  - **Text Nodes:** Represent the text content inside an element.

### Example DOM Tree for HTML

```bash
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Sample paragraph.</p>
  </body>
</html>
```

### DOM Representation:

```bash
Document
├── html
    ├── head
    │   └── title: "Example"
    ├── body
        ├── h1: "Hello World"
        ├── p: "Sample paragraph."
```

# Common DOM Manipulation Tasks

## 1. Selecting Elements

**Methods:**

- `getElementById('id'):` Selects an element by its `id`.
- `getElementsByClassName('class'):` Selects elements by their class name.
- `getElementsByTagName('tag'):` Selects elements by their tag name.
- `querySelector('selector'):` Selects the first matching element using a CSS selector.
- `querySelectorAll('selector'):` Selects all matching elements as a `NodeList`.

#### Example:

```javascript
const title = document.getElementById("main-title");
const items = document.querySelectorAll(".list-item");
```

## 2. Modifying Content

**Methods:**

- `element.textContent:` Sets or gets the text content of an element.
- `element.innerHTML:` Sets or gets the HTML content inside an element.
- `element.setAttribute('attribute', 'value'):` Sets an attribute value.
- `element.getAttribute('attribute'):` Gets an attribute value.

#### Example:

```javascript
const title = document.getElementById("main-title");
title.textContent = "New Title"; // Change text content

const button = document.querySelector("button");
button.setAttribute("disabled", "true"); // Add a 'disabled' attribute
```

## 3. Styling Elements

**Methods:**

- `element.style.property:` Modifies a specific CSS property of an element.
- `element.classList.add('class'):` Adds a class to the element.
- `element.classList.remove('class'):` Removes a class.
- `element.classList.toggle('class'):` Toggles a class (adds if absent, removes if present).

#### Example:

```javascript
const box = document.querySelector(".box");
box.style.backgroundColor = "blue"; // Change background color
box.classList.add("highlight"); // Add 'highlight' class
```

## 4. Creating and Appending Elements

**Methods:**

- `document.createElement('tag'):` Creates a new element.
- `parentNode.appendChild(childNode):` Appends a child node to a parent node.
- `parentNode.insertBefore(newNode, referenceNode):` Inserts a node before a reference node.

#### Example:

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Newly Created Div";
document.body.appendChild(newDiv); // Append to the body
```

## 5. Removing Elements

**Methods:**

- `parentNode.removeChild(childNode):` Removes a child node.
- `element.remove():` Removes the element from the DOM.

#### Example:

```javascript
const oldElement = document.querySelector(".old");
oldElement.remove(); // Remove directly
```

## 6. Event Handling

**Methods:**

- `addEventListener('event', callback):` Attaches an event listener.
- Common events:
  - `click`, `mouseover`, `mouseout`, `keyup`, `keydown`, `submit`.

#### Example:

```javascript
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  alert("Button Clicked!");
});
```
