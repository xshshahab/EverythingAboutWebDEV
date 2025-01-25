# `useMemo()` hook in react js

The `useMemo` hook in React is used to optimize performance by memoizing the result of a calculation or computation. It ensures that a function is only re-executed when its dependencies change, thus preventing unnecessary recalculations and re-renders of components.

Here’s a detailed explanation of `useMemo`:

### Syntax:

```javascript
const memoizedValue = useMemo(() => computeValue, [dependencies]);
```

- `computeValue:` A function that performs a calculation or expensive operation.
- `dependencies:` An array of values that the computation depends on. The function will only re-run if one of these dependencies changes.

---

## When to Use `useMemo`:

- When you have expensive or time-consuming calculations.
- To prevent re-rendering of child components when their props have not changed.
- To avoid unnecessary computations in functional components.
