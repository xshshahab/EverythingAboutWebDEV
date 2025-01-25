# Explanation of `useContext` Hook in React JS

The `useContext` hook in React simplifies the consumption of React Context by avoiding the need for `Context.Consumer`. It allows you to access the context's value directly.

### When to Use `useContext`?

You use `useContext` when:

`. You want to avoid "prop-drilling" (passing props through multiple levels of components). 2. You want to make the application more readable and manageable by sharing global state across multiple components.

### Syntax

```javascript
const value = useContext(MyContext);
```

Here:

- `MyContext` is the context object created using `React.createContext()`.
- `value` is the current value of the context.

### Example

```jsx
import React, { createContext, useContext, useState } from "react";

// Step 1: Create Context
const ThemeContext = createContext();

// Step 2: Create a Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Consume Context in a Child Component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Step 4: Use the Provider in the App
const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
```

### File Structure

```plaintext
src/
├── App.js            # Main App Component
├── ThemeContext.js   # Context and Provider
├── ThemeSwitcher.js  # Component using useContext
└── index.js          # Entry Point
```
