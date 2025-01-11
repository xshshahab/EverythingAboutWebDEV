# **Inline, Internal, and External CSS: Quick Explanation**

### **1. Inline CSS**

- **Definition:** CSS written directly within an HTML element using the `style` attribute.
- **Usage:** Apply styles to a single element.
- **Example:**

```html
<p style="color: red; font-size: 16px;">This is a paragraph.</p>
```

- **Pros:** Quick for small or unique changes.
- **Cons:** Hard to maintain and not reusable.

### **2. Internal CSS**

- **Definition:** CSS defined within a <style> tag inside the <head> section of an HTML document.
- **Usage:** Apply styles to a specific webpage.
- **Example:**

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```

- **Pros:** Useful for single-page styling.
- **Cons:** Not ideal for multiple pages.

### **3. External CSS**

- **Definition:** CSS written in a separate file with a .css extension and linked to HTML using a <link> tag.
- **Usage:** Apply styles across multiple webpages.
- **Example:**

```html
<link rel="stylesheet" href="styles.css" />
```

- **Pros:** Best for consistency and maintainability.
- **Cons:** Requires an additional file, increasing page load time initially.
