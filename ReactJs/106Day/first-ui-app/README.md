# Components, Props and JSX in React js

React.js, understanding components, props, and JSX is essential as they are core building blocks for creating dynamic and reusable user interfaces. Here’s a breakdown:

## **1. Components**

- What are Components?
  - Components are the building blocks of a React application.
  - They are reusable pieces of code that return elements to be rendered on the page.
  - Components allow developers to split the UI into independent, reusable parts.
- Types of Components:

- Functional Components:
  Simple JavaScript functions that accept props and return JSX.
  Introduced with React Hooks to handle state and lifecycle methods.

```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

- Class Components:
  Older way of defining components using ES6 classes.
  They have a render method and can manage state and lifecycle methods.

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

-Key Features:

- Components can manage their own state (if needed).
- Components can be composed to build complex UIs.

## **2. Props (Properties)**

- What are Props?

  - Props are short for "properties" and are used to pass data from a parent component to a child component.
  - Props are immutable (read-only) and cannot be changed by the child component.

- How Props Work:
  -Props are passed as attributes in JSX syntax.
  -Inside the child component, they are accessed via `props`.

```jsx
// Parent Component
const App = () => {
  return <Greeting name="John" />;
};

// Child Component
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

- Default Props:
  - You can define default values for props if none are passed.

```jsx
Greeting.defaultProps = {
  name: "Guest",
};
```

## **3. JSX (JavaScript XML)**

JSX is a syntax extension for JavaScript that looks similar to HTML.
It allows developers to write UI elements in a syntax that resembles HTML but can include JavaScript expressions.

---

### Putting it All Together

Here’s an example of components, props, and JSX in action:

```jsx
import React from "react";

const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
};

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default App;
```

---

## Summary 😊

- **Components:** `Reusable`, independent pieces of UI logic.
- **Props:** Immutable data passed from parent to child components.
- **JSX:** Syntax that combines JavaScript and HTML-like structure for writing React components.
