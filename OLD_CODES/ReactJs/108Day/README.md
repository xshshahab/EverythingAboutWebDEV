# UseEffect Hook in React JS

The `useEffect` hook is one of the most commonly used hooks in React. It allows you to perform side effects in functional components, such as fetching data, directly interacting with the DOM, setting up subscriptions, or cleaning up resources.

Here's a breakdown of the `useEffect` hook:

## Syntax

```javascript
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

## Key Features

1. **Side Effects:** Allows you to run code after rendering.
2. **Dependencies:** You can specify when the effect should run by passing dependencies.
3. **Cleanup:** Handles cleanup for effects, such as removing event listeners.

## How It Works

### Basic Example: Running on Every Render

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
```

- **Effect Behavior:** This runs on every render of the component (initial and after updates).

### Example: Running Only on Initial Render

To run an effect only once (like `componentDidMount` in class components), pass an empty dependency array (`[]`).

```javascript
useEffect(() => {
  console.log("This runs only once!");
}, []); // No dependencies
```

### Example: Watching Specific Dependencies

If you pass a list of dependencies, the effect will run whenever any of them change.

```javascript
useEffect(() => {
  console.log("Count updated:", count);
}, [count]); // Runs when `count` changes
```

### Example: Cleanup with useEffect

Useful for clearing timers, removing event listeners, or cleaning up subscriptions.

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Cleanup on unmount or dependency change");
  };
}, []); // Runs once or when dependencies change
```

### Key Points to Remember

1. Empty Dependency Array (`[]`): Runs only once (on mount).
2. No Dependency Array: Runs after every render (mount + updates).
3. Specific Dependencies: Runs only when the specified dependencies change.
4. Cleanup Function: Runs before the next effect call or component unmount.

### Common Use Cases

1. **Fetching Data**

```javascript
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []); // Empty array ensures it runs only once
```

2. **Event Listeners**

```javascript
useEffect(() => {
  const handleResize = () => console.log("Window resized");
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []); // Cleanup when the component unmounts
```

3. **Subscribing to External Sources**

```javascript
useEffect(() => {
  const subscription = subscribeToData((data) => console.log(data));

  return () => subscription.unsubscribe();
}, []);
```

### Comparison with Class Component Lifecycle

The `useEffect` hook combines the behavior of several lifecycle methods in class components:

- `componentDidMount` → `useEffect(() => {}, [])`
- `componentDidUpdate` →`useEffect(() => {}, [dependencies])`
- `componentWillUnmount` → Cleanup function in `useEffect`
