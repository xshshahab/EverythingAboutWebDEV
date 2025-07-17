# What is useCallback()

In React, the `useCallback` hook is used to memoize a function, meaning it ensures that the same function instance is returned between renders, as long as its dependencies haven't changed. This is particularly useful when passing callbacks to child components, to avoid unnecessary re-renders or computations.

## Syntax:

```jsx
const memoizedCallback = useCallback(() => {
  // Your function logic
}, [dependencies]);
```

## Parameters:

1. **Function:** The callback function that you want to memoize.
2. **Dependencies:** An array of dependencies that the function relies on. If any dependency changes, the memoized function is updated.

## Why Use `useCallback`?

1. **Prevent Unnecessary Re-Creations of Functions:**

- In React, functions are recreated on every render. This can lead to performance issues, especially when a function is passed as a prop to a child component.
- `useCallback` ensures that the function reference remains the same unless dependencies change.

2. **Optimize React.memo:**

- When used with `React.memo` (a higher-order component to memoize components), it prevents unnecessary re-renders of child components.

---

### Example:

#### Without `useCallback`:

```jsx
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <Child onClick={handleClick} />;
};

export default Parent;
```

In the example above, every time `Parent` re-renders, the `handleClick` function is recreated. Even if the `Child` component is wrapped with `React.memo`, it will still re-render because the reference to the `onClick` prop changes.

#### With `useCallback`:

```jsx
import React, { useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return <Child onClick={handleClick} />;
};

export default Parent;
```

In this example:

- The `handleClick` function is memoized using `useCallback`.
- The `Child` component won't re-render unnecessarily because the `onClick` prop reference stays the same unless dependencies change.

---

## When Should You Use `useCallback`?

- When passing functions to memoized child components (e.g., components wrapped in `React.memo`).
- When a function is used as a dependency in `useEffect` or other hooks.
- When a function is computationally expensive and you don't want it to be recreated unless necessary.
