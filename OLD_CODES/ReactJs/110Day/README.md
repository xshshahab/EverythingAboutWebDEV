# Conditional Rendering & Rendering Lists in React

## Conditional Rendering

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if`, `&&`, `||`, and the ternary operator to dynamically render components.

### Example: Conditional Rendering with `if-else`

```jsx
import React from "react";

function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export default UserGreeting;
```

### Example: Conditional Rendering with `Ternary Operator`

```jsx
import React from "react";

function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>
    </div>
  );
}

export default UserGreeting;
```

### Example: Conditional Rendering with `&&`

```jsx
import React from "react";

function Notification({ hasUnreadMessages }) {
  return <div>{hasUnreadMessages && <p>You have new messages!</p>}</div>;
}

export default Notification;
```

---

## Rendering Lists

To render a list in React, use JavaScript's `map()` method to iterate over an array and return JSX for each item. Always provide a unique key prop for list elements.

### Example: Rendering a List

```jsx
import React from "react";

function TodoList() {
  const todos = ["Learn React", "Build a project", "Practice daily"];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
```

### Example: Rendering a List of Objects

```jsx
import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

#### Notes:

1. **Unique Keys:** React uses the `key` prop to track changes in a list. Make sure each item has a unique key.
2. **Avoid Using Index as Key:** Use `index` as a key only when there is no unique identifier and the list won't change.

---

### Combining Conditional Rendering with Lists

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

// ShoppingList Component
function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>Your shopping list is empty.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// App Component
const App = () => {
  const shoppingItems = [
    { id: 1, name: "Milk" },
    { id: 2, name: "Eggs" },
    { id: 3, name: "Bread" },
    { id: 4, name: "Butter" },
    { id: 5, name: "Cheese" },
    { id: 6, name: "Apples" },
    { id: 7, name: "Bananas" },
    { id: 8, name: "Tomatoes" },
    { id: 9, name: "Chicken" },
    { id: 10, name: "Rice" },
  ];

  return (
    <div>
      <h1>My Shopping List</h1>
      <ShoppingList items={shoppingItems} />
    </div>
  );
};

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```
