# Images, Lists, and Tables in html

### 1. Images in HTML

In HTML, images are embedded using the `<img>` tag. This tag is self-closing, meaning it doesn't need a closing tag.

#### Syntax for the `<img>` tag:

```html
<img src="image_url" alt="description" />
```

- `src` (source): Specifies the path to the image file. This can be a relative path (if the image is in the same directory) or an absolute URL (if the image is hosted online).

- `alt` (alternative text): Provides a description of the image. It's used for accessibility, and it will show if the image fails to load.

##### Example:

```html
<img src="dog.jpg" alt="A cute dog" />
```

This will display an image called `dog.jpg`, and if the image cannot be loaded, the text "A cute dog" will appear instead.

### 2. Lists in HTML

There are two main types of lists in HTML: **unordered lists** and **ordered lists**.

#### Unordered List:

An unordered list uses bullet points to display items.

##### Syntax:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

- `<ul>`: Starts an unordered list.
- `<li>`: Defines each item in the list.

#### Ordered List:

An ordered list uses numbers or letters to order the items.

##### Syntax:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

- `<ol>`: Starts an ordered list.
- `<li>`: Defines each item in the list.

### HTML Table Explanation

A table in HTML is defined using the `<table>` element, and it consists of rows (`<tr>`) and columns (`<td>` for data cells and `<th>` for header cells).

Here’s a breakdown of the key components:

- **`<table>`**: The outer container for the table.
- **`<tr>`**: Represents a row in the table.
- **`<th>`**: Represents a header cell in the table. Text inside `<th>` is typically bold and centered by default.
- **`<td>`**: Represents a regular data cell in the table.
- **`<thead>`, `<tbody>`, `<tfoot>`**: Optional sections to group header, body, and footer rows, respectively.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Table Example</title>
  </head>
  <body>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>25</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>30</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>Charlie</td>
          <td>28</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```
