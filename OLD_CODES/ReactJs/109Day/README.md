# The useRef hook in React JS

The `useRef` hook in React is a powerful tool that can be used for accessing and interacting with DOM elements directly, as well as maintaining mutable values across renders without causing re-renders. It's a great alternative when you need to store values that don’t trigger a re-render of the component, unlike `useState`.

Here’s how `useRef` works:

## Basic Syntax:

```js
const myRef = useRef(initialValue);
```

- `initialValue:` This is the initial value that the `ref` will hold. For DOM elements, you can initialize it with `null`.

- `myRef:` This is an object with a `current` property that will hold the value. When using useRef with a DOM element, the `current` property will point to that DOM element.

## Common Uses of `useRef`:

1. **Accessing DOM Elements:**
   You can use `useRef` to reference a DOM element, allowing you to interact with it directly (e.g., focusing an input, changing styles).

### Example:

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Focuses the input field when the button is clicked
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
```

In this example, `useRef` is used to get a reference to the input element. When the button is clicked, the input field is focused programmatically.

2. **Storing Mutable Values Without Causing Re-renders:**
   `useRef` can also store mutable values that don’t trigger a re-render when they are changed. This is useful for storing previous values, timers, or any other state that doesn't need to be part of React's state cycle.

### Example:

```jsx
import React, { useRef } from "react";

function Timer() {
  const timerRef = useRef(0); // Store a mutable value (timer count)

  const incrementTimer = () => {
    timerRef.current += 1;
    console.log(timerRef.current); // Logs the updated value without causing re-render
  };

  return (
    <div>
      <p>Timer count: {timerRef.current}</p>
      <button onClick={incrementTimer}>Increment Timer</button>
    </div>
  );
}
```

In this example, the value of `timerRef.current` is updated when the button is clicked, but it doesn’t trigger a re-render since it’s stored in a ref.

3. **Preserving Values Between Renders:**
   `useRef` can also be useful for persisting a value across renders without triggering a re-render. This can be useful for things like tracking the previous state or keeping track of a previous render value.

### Example:

```jsx
import React, { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Store the previous count value
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

Here, we use `useRef` to store the previous count value, so even though the component re-renders when the state changes, the previous count persists across renders.

---

### Key Points to Remember:

- **`useRef` does not trigger re-renders:** Unlike `useState`, updating a ref’s value won’t cause a component to re-render.
- **Ref vs State:** Use refs for mutable values that don’t need to trigger re-renders, and use state for values that should cause a component to re-render when they change.
- **Accessing DOM elements:** Ref can be useful for manipulating the DOM (e.g., focusing an input field, measuring dimensions, etc.).
