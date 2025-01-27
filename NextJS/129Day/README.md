# Layouts in Next.js

In Next.js, layouts are used to define a consistent structure across different pages in your application. They allow you to centralize and reuse common components like headers, footers, and sidebars, improving maintainability and scalability.

## Key Concepts

- **Reusable Layout Components**: Define a layout component with common elements that are shared across multiple pages.
- **Dynamic Layouts**: Choose different layouts for different pages based on the needs of the page.
- **Nested Layouts**: Create layouts within layouts for more complex page structures.

## Example of Using Layouts

1. **Create a Layout Component**

   First, define your layout in a separate component.

```jsx
// components/Layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>Navbar</nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

---

2. **Use Layout in Pages**

Wrap your pages with the layout in the \_app.js file.

```jsx
// pages/_app.js
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

---

3. **Dynamic Layouts in Next.js**

In Next.js 13 and later, layouts can be defined within the app directory:

```jsx
// app/layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>Navbar</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

// app/page.js
export default function Page() {
  return <div>Welcome to the page!</div>;
}
```
