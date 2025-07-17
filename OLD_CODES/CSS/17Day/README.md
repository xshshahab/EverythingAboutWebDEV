# **CSS Selectors Masterclass**

## **Introduction**

CSS selectors define the elements to which a set of CSS rules apply. Understanding the full range of selectors allows you to target elements effectively and apply precise styling.

---

## **1. Universal Selector (`*`)**

- **Description:** Selects all elements on the page.
- **Usage:** Useful for resetting default styles or applying global styles.
- **Example:**

```css
* {
  margin: 0;
  padding: 0;
}
```

## **2. Type Selector (Element Selector)**

- **Description:**  
  Selects all elements of a specific type (based on their HTML tag name).

- **Usage:**  
  Use type selectors when you want to apply the same styles to every instance of an element across your page.

- **Example CSS:**  
  The following rule applies a font size of 16 pixels and black color to all `<p>` (paragraph) elements:

```css
p {
  font-size: 16px;
  color: black;
}
```

## **3. Class Selector (`.class-name`)**

- **Description:**  
  Selects all elements that have a specific class attribute value.

- **Usage:**  
  Use class selectors to target multiple elements and apply the same styling by assigning them the same class.

- **Example CSS:**  
  The following rule highlights any element with the `highlight` class by setting its background color to yellow:

  ```css
  .highlight {
    background-color: yellow;
  }
  ```

## **4. ID Selector (`#id-name`)**

- **Description:**  
  Selects a single element with a specific `id` attribute value.

- **Usage:**

  - IDs are unique and should be assigned to only one element per page.
  - Use ID selectors to apply styles to specific elements that need unique styling.

- **Example CSS:**  
  The following rule styles an element with the ID `main-title`, setting its text color to blue and font size to 24 pixels:

  ```css
  #main-title {
    color: blue;
    font-size: 24px;
  }
  ```

## **5. Grouping Selectors**

- **Description:** Apply the same styles to multiple elements by grouping them.
- **Usage:** Reduce redundant code by applying styles to multiple tags at once.
- **Example:**

```css
h1,
h2,
h3 {
  font-family: "Arial", sans-serif;
}
```

## **6. Descendant Selector (`ancestor descendant`)**

- **Description:**  
  Selects elements that are descendants (children, grandchildren, etc.) of a specific element. It targets elements that are nested inside a parent or ancestor element.

- **Usage:**  
  The descendant selector is useful when you want to apply styles to elements that are contained within a certain parent element, regardless of how deep they are nested.

- **Example CSS:**  
  The following rule will apply the red color to all `<p>` elements that are descendants of a `<div>` element:

  ```css
  div p {
    color: red;
  }
  ```

## **8. Adjacent Sibling Selector (`element + element`)**

- **Description:**  
  The adjacent sibling selector targets an element that immediately follows a specified element. It only applies styles to the first sibling element that comes right after the specified element.

- **Usage:**  
  Use the adjacent sibling selector when you want to style an element that comes directly after another element (without any other intervening siblings).

- **Example CSS:**  
  The following rule applies italic styling to a `<p>` element that directly follows an `<h1>` element:

  ```css
  h1 + p {
    font-style: italic;
  }
  ```

## **9. General Sibling Selector (`element ~ element`)**

- **Description:**  
  The general sibling selector selects all sibling elements that follow a specified element, not just the first one. It allows you to apply styles to any sibling elements that come after the specified element, regardless of how many elements are in between.

- **Usage:**  
  Use the general sibling selector when you want to style multiple sibling elements that come after a specified element, not just the immediate next one.

- **Example CSS:**  
  The following rule applies a gray color to all `<p>` elements that are siblings of an `<h1>` element:

  ```css
  h1 ~ p {
    color: gray;
  }
  ```
