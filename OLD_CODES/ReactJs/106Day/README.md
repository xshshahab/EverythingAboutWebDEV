# React Basics: Components, Props, and JSX

## 1. Components

Components are the building blocks of a React application. They are JavaScript functions or classes that return React elements to render UI. There are two types of components:

### Functional Component

```jsx
import React from "react";

function Greeting() {
  return <h1>Hello, World!</h1>;
}

export default Greeting;
```

### Class Component

```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default Greeting;
```

## 2. Props (Properties)

Props are used to pass data from a parent component to a child component. They make components dynamic and reusable.

### Example of Passing Props

```jsx
import React from "react";

// Child Component
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;
```

- Props with Default Values

```jsx
import React from "react";

function Welcome({ name = "Guest" }) {
  return <h1>Welcome, {name}!</h1>;
}

export default Welcome;
```

### 3. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI elements directly within JavaScript.

#### JSX Example

```jsx
import React from "react";

function JSXExample() {
  const name = "React";
  return (
    <div>
      <h1>Welcome to {name}!</h1>
      <p>This is an example of JSX.</p>
    </div>
  );
}

export default JSXExample;
```

#### Embedding Expressions in JSX

```jsx
import React from "react";

function ExpressionExample() {
  const number = 10;
  const double = number * 2;

  return (
    <div>
      <p>The number is {number}</p>
      <p>Double of the number is {double}</p>
    </div>
  );
}

export default ExpressionExample;
```

#### Conditional Rendering in JSX

```jsx
import React from "react";

function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>}</div>
  );
}

export default ConditionalRendering;
```
