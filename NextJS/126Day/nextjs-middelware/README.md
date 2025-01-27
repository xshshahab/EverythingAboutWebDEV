# Middelware in Next.js

Middleware in Next.js is a powerful tool that enables you to execute code before a request is completed. It allows you to modify the response, handle authentication, redirect requests, and more, all based on conditions like request headers, cookies, or query parameters.

Middleware was introduced in Next.js 12 and has become a robust feature for advanced request handling.

---

### Key Middleware Features

1. **Redirects: You can redirect requests to different URLs conditionally.**

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname === "/old-path") {
    return NextResponse.redirect(new URL("/new-path", request.url));
  }

  return NextResponse.next();
}
```

In this example, users visiting `/old-path` are redirected to `/new-path`.

2. **Authentication**: Middleware can enforce authentication by checking cookies or headers.

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
```

Here, users without a valid `authToken` are redirected to the `/login` page.

3. **Rewriting URLs**: Middleware can rewrite the URL without changing the user's visible URL.

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname === "/blog") {
    return NextResponse.rewrite(new URL("/blog-posts", request.url));
  }

  return NextResponse.next();
}
```

In this case, requests to `/blog` are rewritten to `/blog-posts` while keeping the visible URL as `/blog`.

4. **Adding Headers**: You can add or modify request or response headers.

```javascript
import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set("X-Custom-Header", "Hello Middleware");
  return response;
}
```
