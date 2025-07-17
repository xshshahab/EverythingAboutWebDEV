# React Router

To use React Router in a JSX file, you need to install the `react-router` package and set up routes for your application. Below is an example to help you understand the basics of React Router in JSX.

## Step 1: Install React Router

Install `react-router` using npm or yarn:

```bash
npm install react-router
# or
yarn add react-router
```

## Step 2: Example of Using React Router in JSX

Here’s a simple example of setting up a basic React Router configuration with routes for a Home, About, and Contact page.

`App.jsx`

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

// Component for Home Page
const Home = () => <h1>Welcome to the Home Page</h1>;

// Component for About Page
const About = () => <h1>About Us</h1>;

// Component for Contact Page
const Contact = () => <h1>Contact Us</h1>;

const App = () => {
  return (
    <Router>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```

## Step 3: Render the App

Make sure your app is rendered into the DOM, usually in the `index.jsx` file:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

### Explanation

1. `BrowserRouter:` Wraps the entire application and enables React Router functionality.
2. `Link:` Provides navigation between routes without reloading the page.
3. `Routes and Route:` Define the paths and corresponding components for different pages.

### Output

When you go to `/`, you see the `Home` component.
When you go to `/about`, you see the `About` component.
When you go to `/contact`, you see the `Contact` component.
