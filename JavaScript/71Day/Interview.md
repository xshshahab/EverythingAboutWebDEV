# Common Interview Questions on DOM

## **1. Difference Between `innerHTML` and `textContent`**

- `innerHTML:` Parses and renders HTML content.
- `textContent:` Sets or retrieves the plain text content.

## **Example:**

```javascript
element.innerHTML = "<b>Bold Text</b>"; // Renders as bold
element.textContent = "<b>Bold Text</b>"; // Renders as plain text
```

## **2. What is Event Delegation?**

- `Definition:` Event delegation is a technique where a parent element handles events for its child elements.
- `Why Use It:`
  - Fewer event listeners improve performance.
  - Handles dynamic elements added after the page loads.

## **Example:**

```javascript
document.querySelector(".container").addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    console.log("Button clicked:", e.target);
  }
});
```

## **3. What is the Difference Between `event.target` and `event.currentTarget?`**

- `event.target:` The element that triggered the event.
- `event.currentTarget:` The element on which the event listener is attached.

## **Example:**

```javascript
document.querySelector(".btn").addEventListener("click", (e) => {
  console.log("Target:", e.target); // The clicked element
  console.log("Current Target:", e.currentTarget); // The element with the event listener
});
```

## **4. How to Prevent Event Bubbling?**

Use `event.stopPropagation()` to stop the event from propagating to parent elements.

## **Example:**

```javascript
document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked!");
});
```

## **5. How to Dynamically Add and Remove Event Listeners?**

- `Adding:`

```javascript
const button = document.querySelector(".btn");
const handleClick = () => console.log("Clicked!");
button.addEventListener("click", handleClick);
```

- `Removing:`

```javascript
button.removeEventListener("click", handleClick);
```

## **6. Difference Between `NodeList` and `HTMLCollection`**

| **Feature**          | **NodeList**             | **HTMLCollection**            |
| -------------------- | ------------------------ | ----------------------------- |
| **Type**             | Static or live (depends) | Live (updates dynamically)    |
| **Access by Index**  | Yes                      | Yes                           |
| **Access by Name**   | No                       | Yes (if elements have `name`) |
| **Selector Support** | Yes                      | No                            |

#### Example:

```javascript
const nodeList = document.querySelectorAll(".item"); // Static
const htmlCollection = document.getElementsByClassName("item"); // Live
```

### Key Takeaways

1. **Master selectors** (`getElementById`, `querySelector`).
2. **Understand the difference** between `innerHTML` and `textContent`.
3. **Learn event delegation** for dynamic elements.
4. **Know event propagation** and how to stop it.
5. **Practice creating, appending, and removing elements dynamically.**
6. **Be clear about `NodeList` vs. `HTMLCollection`.**
