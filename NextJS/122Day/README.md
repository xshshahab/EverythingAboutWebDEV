# Server Components in Next.js

Next.js leverages **Server Components** to improve performance and developer experience. Server Components allow you to render components entirely on the server, reducing JavaScript sent to the client.

## What Are Server Components?

Server Components are a React feature where certain components are rendered on the server and sent as HTML to the client. These components:

- Do not include JavaScript in the client bundle.
- Can fetch data directly on the server.
- Improve performance by reducing client-side JavaScript.

## Benefits of Server Components

1. **Reduced JavaScript Size**:
   Since Server Components don’t run in the browser, no JavaScript for them is sent to the client.

2. **Faster Rendering**:
   Heavy lifting like data fetching or computation is done on the server, improving the client experience.

3. **Seamless Integration**:
   Works alongside Client Components, providing flexibility.

---

## Using Server Components in Next.js

In Next.js (13+ with the App Router), files inside the `app/` directory are **Server Components** by default.

### Example: A Server Component

```javascript
// app/server-component-example.js
import React from "react";

export default function ServerComponentExample() {
  const data = fetchDataOnServer();

  return (
    <div>
      <h1>Server Component</h1>
      <p>Data fetched on the server: {data}</p>
    </div>
  );
}

// This function runs on the server
function fetchDataOnServer() {
  return "Hello from the server!";
}
```

---

### When to Use Client Components

If you need interactivity (e.g., event listeners or state), you should use a Client Component. Mark a file as a Client Component by including `"use client"` at the top.

```javascript
// app/client-component-example.js
"use client";

import { useState } from "react";

export default function ClientComponentExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

### Combining Server and Client Components

You can mix Server and Client Components for optimal performance and interactivity. For example:

```javascript
// app/mixed-components-example.js
import React from "react";
import ClientComponentExample from "./client-component-example";

export default function MixedComponentsExample() {
  const data = fetchDataOnServer();

  return (
    <div>
      <h1>Mixed Components</h1>
      <p>Data fetched on the server: {data}</p>
      <ClientComponentExample />
    </div>
  );
}

function fetchDataOnServer() {
  return "Server-side data";
}
```

---

## Key Notes

1. **Server Components:**

- Best for static content or data fetching.
- No client-side JavaScript is needed.

2. **Client Components:**

- Use when interactivity or browser-specific features are required.

3. **Default Behavior:**

Components in the `app/` directory are Server Components by default.
Add `"use client"` to opt into a Client Component.
