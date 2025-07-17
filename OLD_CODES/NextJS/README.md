# What is NEXT.JS?

Next.js is a **React framework** developed by **Vercel** that extends the capabilities of React for building full-fledged web applications. It is designed to provide **server-side rendering (SSR)** and **static site generation (SSG)** out of the box, making it ideal for building fast, SEO-friendly, and highly performant web applications.

---

## Key Features of Next.js:

**1. File-Based Routing:**

- Unlike React, where routing needs libraries like React Router, Next.js has a built-in routing system. The file structure in the `pages/` directory defines the routes automatically.

- Example:

```bash
pages/index.js → "/"
pages/about.js → "/about"
```

---

**2. Server-Side Rendering (SSR):**

- Next.js can render pages on the server before sending them to the client. This improves SEO and performance for content-heavy or dynamic pages.
- Example:

```jsx
export async function getServerSideProps() {
  return {
    props: { message: "Hello from SSR" },
  };
}

const Page = ({ message }) => <h1>{message}</h1>;
export default Page;
```

---

**3. Static Site Generation (SSG):**

- Next.js can pre-generate pages at build time, making them extremely fast. Perfect for static content like blogs or marketing pages.
- Example:

```jsx
export async function getStaticProps() {
  return {
    props: { message: "Hello from SSG" },
  };
}

const Page = ({ message }) => <h1>{message}</h1>;
export default Page;
```

---

**4. API Routes:**

- Next.js lets you create API endpoints directly in the pages/api/ folder.
- Example:

```bash

/pages/api/hello.js
```

```javascript
export default function handler(req, res) {
  res.status(200).json({ message: "Hello API" });
}
```

---

**5. Built-In Image Optimization:**

- Next.js has a powerful `<Image>` component that optimizes images for faster loading and better performance.
- Example:

```jsx
import Image from "next/image";

export default function Home() {
  return <Image src="/logo.png" alt="Logo" width={200} height={200} />;
}
```

---

**6. Client-Side Rendering (CSR):**

- For dynamic and interactive features, you can use CSR with React hooks like `useState` and `useEffect`.

---

**7. Automatic Code Splitting:**

- Next.js automatically splits the code, so users only download what they need for the current page, improving load times.

---

**8. SEO Friendly:**

- Next.js supports SSR and SSG, enabling search engines to crawl content efficiently. It also allows for metadata customization with the `<Head>` component.
- Example:

```jsx
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Awesome App</title>
        <meta name="description" content="Learn about Next.js" />
      </Head>
      <h1>Welcome to Next.js</h1>
    </div>
  );
}
```

---

**9. Middleware:**

- Next.js provides middleware for handling advanced features like user authentication, logging, and more.

---

**10. Deployment-Ready:**

- Next.js works seamlessly with platforms like Vercel for fast and hassle-free deployment.

---

#### Why Use Next.js?

- **Performance:** Pre-rendering options (SSR and SSG) improve page loading speed and SEO.
- **Built-In Features:** Comes with routing, API support, image optimization, and more.
- **Flexibility:** Use SSR, SSG, or CSR depending on your application’s needs.
- **Scalability:** Great for small projects or enterprise-level apps.

---

### Boiler Plate Code:

```jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Build SSR and SSG apps effortlessly.</p>
    </div>
  );
}
```

---

### Example Code:

#### Static Site Generation:

```jsx
// pages/blog.js
export async function getStaticProps() {
  const posts = [{ id: 1, title: "Next.js Rocks" }];
  return { props: { posts } };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Blog;
```
