# Introduction to CSS

**CSS** (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, spacing, and positioning of elements on a webpage. CSS allows web developers to create visually appealing and structured pages by separating the content (HTML) from the design (CSS).

## Key Concepts of CSS

### 1. **Selectors**

Selectors are used to target HTML elements that you want to style. Common selectors include:

- **Element Selector**: Targets HTML tags (e.g., `h1`, `p`, `div`).
- **Class Selector**: Targets elements with a specific class (e.g., `.class-name`).
- **ID Selector**: Targets elements with a specific ID (e.g., `#id-name`).
- **Universal Selector**: Targets all elements (e.g., `*`).

### 2. **Properties and Values**

In CSS, properties define the style of an element, and values define how the property should be applied.
Example:

```css
color: red;
font-size: 16px;
```

### 3. Box Model

Every HTML element is represented as a rectangular box. The box model consists of:

- **Content**: The actual content of the element.
- **Padding**: The space between the content and the border.
- **Border**: The boundary around the padding.
- **Margin**: The space outside the border.

### 4. CSS Syntax

CSS syntax consists of a **selector** followed by **declarations** enclosed in curly braces. Each declaration consists of a **property** and a **value**, separated by a colon.

Example:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### 5. External, Internal, and Inline CSS

- **External CSS**: Written in a separate `.css` file and linked to HTML using the `<link>` tag.
- **Internal CSS**: Written within the `<style>` tag in the `<head>` section of an HTML document.
- **Inline CSS**: Written directly within an HTML element using the `style` attribute.

### 6. CSS Layouts

CSS is used to create various layouts like:

- **Flexbox**: A flexible box layout model for designing complex layouts.
- **Grid**: A two-dimensional grid layout system for creating complex designs.
- **Float**: Used for positioning elements alongside others.

### Example of a Simple CSS:

```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.5;
}
```
