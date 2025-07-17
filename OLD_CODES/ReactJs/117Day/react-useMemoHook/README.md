# useMemo() Hook

The `useMemo` hook in React is used to optimize performance by memoizing the result of a calculation or computation. It ensures that a function is only re-executed when its dependencies change, thus preventing unnecessary recalculations and re-renders of components.

### Example 1: Memoizing an Expensive Calculation

```javascript
import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, [count]);

  return (
    <div>
      <h1>Expensive Calculation: {expensiveCalculation}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default ExpensiveComponent;
```

#### Explanation:

The expensive calculation will only be re-computed when `count` changes.
Typing in the input box (`text`) won’t trigger the expensive calculation again, thanks to `useMemo`.

### Example 2: Optimizing Rendering of Child Components

```javascript
import React, { useState, useMemo } from "react";

function Child({ data }) {
  console.log("Child rendered");
  return <p>{data}</p>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const memoizedData = useMemo(() => {
    return `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child data={memoizedData} />
    </div>
  );
}

export default Parent;
```

#### Explanation:

- The `Child` component will only re-render when `memoizedData` changes, which happens when `count` changes.
- Without `useMemo`, `Child` would re-render every time the `Parent` component updates, even if the `data` prop has not changed.

---

### Key Points:

- **Memoization only avoids unnecessary recalculations, not re-renders.** If you want to avoid re-rendering, consider using React.memo for the child components.
- **Use only when necessary.** Overusing useMemo can make your code harder to read and debug. Use it for performance-critical operations.
- **Works with immutable data.** Ensure your dependencies in the array don’t get mutated, as it can cause unexpected behaviors.
