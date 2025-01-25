# What is useCallback()

In React, the `useCallback` hook is used to memoize a function, meaning it ensures that the same function instance is returned between renders, as long as its dependencies haven't changed. This is particularly useful when passing callbacks to child components, to avoid unnecessary re-renders or computations.

## Syntax:

```jsx
const memoizedCallback = useCallback(() => {
  // Your function logic
}, [dependencies]);
```
