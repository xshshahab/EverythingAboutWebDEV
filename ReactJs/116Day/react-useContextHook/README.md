# What is usecontext hook in react js

The `useContext` hook in React is a powerful feature that allows you to access and manage context values in a functional component. It simplifies the process of passing data through the component tree without having to pass props manually at every level.

## What is Context in React?

Context is a way to share values (like a theme, user authentication, or settings) between components without having to explicitly pass props through each level of the component tree.

## `useContext` Hook:

The `useContext` hook is used to consume context values in functional components. It eliminates the need for the older Context.Consumer syntax and provides a simpler and more readable way to access context data.

### Syntax:

```javascript
const value = useContext(MyContext);
```

- `MyContext:` The context object you created using `React.createContext()`.
- `value:` The current value of the context.

### Steps to Use `useContext`:

1. **Create a Context:**

```javascript
import React, { createContext } from "react";

const MyContext = createContext();
export default MyContext;
```

2. **Provide the Context Value:** Wrap your components with the `Provider` of the context and pass a value to it.

```javascript
import React from "react";
import MyContext from "./MyContext";

const App = () => {
  const contextValue = { theme: "dark" };

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
};
```

3. **Consume the Context Value:** Use the `useContext` hook in any child component to access the context value.

```javascript
import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const context = useContext(MyContext);

  return <div>Current Theme: {context.theme}</div>;
};

export default ChildComponent;
```

## Advantages of `useContext`:

1. **Simplifies Context Consumption:** Removes the need for `Context.Consumer` components.
2. **Improves Readability:** Code is easier to read and maintain.
3. **Integrates with Functional Components:** Works seamlessly with React Hooks and functional components.

### Example Use Cases:

1. **Theming:** Managing light/dark modes across the app.
2. **User Authentication:** Providing user details or authentication state.
3. **Global State Management:** Storing shared state for various parts of the app.

#### `Note:`

- The `useContext` hook only works for consuming context, not creating or providing it.
- Be cautious when using `useContext` with frequently updated data, as it can cause unnecessary re-renders in deeply nested components. Use memoization or context splitting if performance issues arise.
