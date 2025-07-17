# Hooks & State in React JS

## **What are Hooks?**

Hooks are functions introduced in React 16.8 that allow you to use state and other React features without writing a class.

### **Common React Hooks:**

1. **useState**: To manage state in a functional component.
2. **useEffect**: To handle side effects like data fetching, subscriptions, etc.
3. **useContext**: To consume context values.
4. **useRef**: To create a reference to DOM elements or store mutable values.
5. **useReducer**: For more complex state management.

---

## **State in React**

State is an object that determines how a component behaves and renders. It allows React components to dynamically update and respond to user input or changes.

---

## **Using `useState` Hook**

Here's an example of using `useState` in a functional component:

```jsx
import React, { useState } from "react";

function Counter() {
  // Declare a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Key Points about `useState`

### **1. Destructuring**

- `useState` returns an array with two values:
  - **The current state value.**
  - **A function to update the state.**

### **2. Re-rendering**

- When the state is updated using the setter function, the component **re-renders**.

### **3. Initial Value**

- The argument passed to `useState` is the **initial state value**.

---

## **Example Breakdown**

```jsx
const [count, setCount] = useState(0);
```

- `count:` The current state value.
- `setCount:` The function to update the state.
- `0:` The initial value of `count`.

### **Updating the State**

```jsx
setCount(count + 1);
```

- Updates the state to `count + 1`.
- Triggers a re-render of the component.

---

## **Advantages of Hooks**

- Simplifies the code by avoiding class components.
- Makes it easier to reuse stateful logic with custom hooks.
- Improves readability and maintainability of React code.

### **Note**

- Hooks can `only` be used inside functional components or custom hooks.
- They cannot be used in:
  - Regular functions.
  - Class components.
