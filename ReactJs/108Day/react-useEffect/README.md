# `useEffect` in React JS

`useEffect` in React is like a "side-effect manager." It runs code when something changes in your component. Think of it like this:

## When to use it:

Use `useEffect` when you need to do something _after_ your component renders, such as:

- Fetching data from an API.
- Updating the DOM.
- Setting up a timer or subscription.

## How it works:

- It runs **after the component is rendered**.
- You can control _when_ it runs by adding dependencies (things it should "watch") in a list (called the dependency array).

---

## Basic Example:

```jsx
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component rendered or updated!");
  }, []); // Empty array = only runs once when the component loads

  return <div>Hello!</div>;
}
```

---

## Key Points:

1. **Empty array (`[]`)**:

   - Runs only **once** when the component loads (like `componentDidMount` in class components).

2. **With dependencies**:
   - Runs whenever the specified dependencies change.

---

## Example:

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed!");
  }, [count]); // Runs only when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
