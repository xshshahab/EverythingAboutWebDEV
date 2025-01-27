# Server action in Next Js

In Next.js, server actions are a way to handle server-side logic directly in your React components. They allow you to process data, make database calls, or handle other server-side operations without relying on traditional API routes. Starting with Next.js 13, these server actions can leverage the capabilities of the app directory.

- Here’s how you can use server actions in Next.js:

---

## 1. **Server Actions Using `async` Functions**

Server actions are typically written as `async` functions within your components or pages. These can fetch data, handle POST requests, or perform backend logic.

### Example: Fetch Data Server-Side

```javascript
export default async function Home() {
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Data from Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In this case, the fetch operation happens on the server during build time or when the page is requested (depending on your configuration).

---

## 2. **Using Actions for Form Submissions**

You can create server actions to handle form data submissions directly in components.

### Example: Handling a Form Submission

```javascript
"use client";

import { useState } from "react";

export default function FormExample() {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    setResponse(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <button type="submit">Submit</button>
      {response && <p>{response}</p>}
    </form>
  );
}
```

Here, the `fetch` call makes a POST request to the `/api/submit` route. The backend logic for the form can be implemented in the `pages/api` folder.

---

## 3. **Server Actions with RSC (React Server Components)**

You can define server-side logic in your server components directly.

### Example: Fetching Data for React Server Components

```javascript
import { getServerSideProps } from "next";

export async function getData() {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Data Fetched on the Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In this example:

- Data fetching logic (`getData`) runs server-side.
- You can optimize server rendering by fetching data at runtime or statically.

---

## 4. **Combining API Routes and Server Actions**

Server actions can also use traditional API routes if you want to decouple logic.

### Example: API Route

```javascript
Copy;
Edit;
// pages/api/submit.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;
    // Perform server-side logic (e.g., database write)
    res.status(200).json({ message: `Thanks, ${name}!` });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
```

---

## 5. **Middleware for Advanced Logic**

For even more control over server actions, you can use middleware for tasks like authentication, caching, or request validation.

### Example: Middleware

```javascript
// middleware.js
export function middleware(req) {
  const token = req.headers.get("authorization");
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  return NextResponse.next();
}
```

---

Server actions in Next.js streamline server-side logic, enabling efficient and declarative data fetching and interactions in your application. If you’re using Next.js 13+ with the App Directory, server actions can work seamlessly within your React Server Components.
