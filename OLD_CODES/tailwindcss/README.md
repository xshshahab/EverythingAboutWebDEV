# Tailwind CSS Complete Guide

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs without having to write custom CSS. It allows you to style your HTML elements directly in your markup.

## Installation

### **1. Using npm**

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### **2. Using CDN**

For quick prototyping, you can use the CDN version:

```html
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.0/dist/tailwind.min.css"
  rel="stylesheet"
/>
```

## Configuration

After running `npx tailwindcss init`, a `tailwind.config.js` file is created. You can customize the configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], // Define file paths to scan for classes
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};
```

## Usage

### Basic Example

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">Welcome to Tailwind CSS</div>
```

### Responsive Design

Use breakpoints for responsiveness:

```html
<div
  class="bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500"
>
  Responsive background colors
</div>
```

---

## Key Features

### **1. Flexbox and Grid**

```html
<div class="flex items-center justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

### **2. Typography**

```html
<h1 class="text-4xl font-extrabold">Title</h1>
<p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet.</p>
```

### **3. Transitions and Animations**

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-all duration-300">
  Hover Me
</button>
```

### **4. Custom Breakpoints**

```javascript

theme: {
  screens: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
}
```

## Plugins

### **1. Adding Plugins**

Install plugins:

```bash
npm install @tailwindcss/forms
```

Add them to your `tailwind.config.js`:

```javascript
plugins: [
  require('@tailwindcss/forms'),
],
```

Use plugin utilities:

```html
<input type="text" class="form-input" />
```

### **2. Official Plugins**

- @tailwindcss/typography
- @tailwindcss/aspect-ratio
- @tailwindcss/forms
