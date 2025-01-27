# Middelware in Next.js

Middleware in Next.js is a powerful tool that enables you to execute code before a request is completed. It allows you to modify the response, handle authentication, redirect requests, and more, all based on conditions like request headers, cookies, or query parameters.

Middleware was introduced in Next.js 12 and has become a robust feature for advanced request handling.

---

## How Middleware Works

Middleware runs **before the request is processed** by the route handler or static file serving.
It works on the **Edge Runtime**, making it lightweight and optimized for low-latency tasks.

---

## Creating Middleware

To add middleware to your Next.js project, create a `middleware.js` file at the root of your project (or in the `/src` directory if you're using it).

### Basic Middleware Example

```javascript
// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware running...");

  return NextResponse.next(); // Pass the request to the next handler
}
```

- `NextResponse.next()` lets the request continue as normal.
- You can modify headers, redirect, or respond directly using `NextResponse`.

---

## Defining Middleware Scope

By default, middleware runs on every request. You can limit it to specific routes using the `matcher` configuration in `next.config.js`.

### Example: Scope Middleware to Specific Routes

```javascript
// next.config.js
module.exports = {
  middleware: {
    matcher: ["/dashboard/:path*", "/admin/:path*"], // Apply middleware to these paths
  },
};
```

---

# **Next.js Middleware API**

Middleware in Next.js allows you to execute code before a request is completed. It enables features such as redirects, rewrites, and custom response handling at the edge.

---

## **Middleware API**

Middleware provides access to the following:

### **`request`**

The incoming `Request` object, based on the Web Fetch API. Key properties include:

- **`request.nextUrl`**:  
  A parsed URL object with additional properties like `pathname` and `searchParams`.

- **`request.cookies`**:  
  Access cookies from the request.

- **`request.headers`**:  
  Access headers from the request.

---

### **`NextResponse`**

The `NextResponse` object is a helper to modify the response.

- **`NextResponse.next()`**:  
  Pass the request to the next handler.

- **`NextResponse.redirect(url)`**:  
  Redirect the user to a new URL.

- **`NextResponse.rewrite(url)`**:  
  Rewrite the URL without changing the user's visible path.

---

## **Example Usage**

### Redirect Example:

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/old-path") {
    return NextResponse.redirect(new URL("/new-path", request.url));
  }

  return NextResponse.next();
}
```

### Advanced Example: Role-Based Access Control

Here’s an example of how to enforce role-based access to a dashboard:

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const userRole = request.cookies.get("role");

  if (!userRole || userRole !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return NextResponse.next();
}
```

In this example:

- Users without the `admin` role cookie are redirected to `/unauthorized`.

---

## Middleware Limitations

- Middleware cannot access `req` or `res` from Node.js since it runs in the Edge Runtime.
- Middleware cannot directly interact with the database or perform long-running tasks.
