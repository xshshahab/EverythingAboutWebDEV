# Script, Link & Image components in Next.js

In Next.js, the `Script`, `Link`, and `Image` components are designed to enhance performance and developer experience. Here's an overview of each:

---

### 1. **Script Component**

The `Script` component is used to manage external scripts in a performant way. Next.js helps optimize the loading of scripts by allowing you to specify loading behavior.

##### **Key Features:**

- Controls when and how a script is loaded.
- Supports loading scripts before or after the page has been rendered.

##### **Props:**

- `strategy:` Determines how the script is loaded.
  - `beforeInteractive:` Loads the script before the page is interactive (e.g., for critical scripts).
  - `afterInteractive (default):` Loads the script after the page is interactive.
  - `lazyOnload:` Loads the script when the browser is idle.
- `src:` The URL of the external script.
- `onLoad` / `onError`: Callbacks for when the script loads or fails.
  Example:

```jsx
import Script from "next/script";

export default function Page() {
  return (
    <>
      <h1>Hello World</h1>
      <Script
        src="https://example.com/some-script.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Script loaded successfully")}
      />
    </>
  );
}
```

---

### 2. **`Link` Component**

The `Link` component is used for client-side navigation between pages in a Next.js application. It prefetches pages in the background, making navigation instant.

##### **Key Features:**

- **Prefetching:** Automatically prefetches the page's assets when the link is in the viewport.
- **Built for Single Page Applications (SPA):** Navigation is seamless without full page reloads.

##### **Props:**

- **href:** The URL to navigate to (required).
- **legacyBehavior:** Makes `Link` behave like earlier versions (using `<a> `as a child).
- Any other props passed to the `<a>` tag.

#### Example:

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      {/_ You can omit <a> if not using legacy behavior _/}
      <Link href="/contact">Contact Page</Link>
    </nav>
  );
}
```

##### Customizing `Link`:

You can use the `passHref` prop to pass the `href` to a custom component.

```jsx
<Link href="/custom" passHref>
  <CustomComponent />
</Link>
```

---

### **3. `Image` Component**

The `Image` component optimizes image loading and delivery, improving performance by:

- Supporting automatic **image optimization** (e.g., resizing, compression).
- Using modern formats like **WebP** when supported.
- Handling lazy-loading and responsive sizes automatically.

##### **Key Features:**

- Lazy loads images by default.
- Handles responsive image dimensions.
- Allows specifying a list of domains or a loader for external images.

#### **Props:**

- **src:** Image source (required).

- **alt:** Accessible alt text (required).
- `width` / `height`: Fixed dimensions for the image.
- **layout:**
  - **intrinsic:** Adapts to the intrinsic dimensions of the image.
  - **responsive:** Adjusts to the container size.
  - **fill:** Fills the parent container.
- **priority:** Loads the image eagerly.

#### Example:

```jsx
import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <Image
        src="/me.jpg"
        alt="Picture of me"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
```

#### Configuring External Domains:

To load images from external sources, add them to the `next.config.js` file:

```js
module.exports = {
  images: {
    domains: ["example.com"],
  },
};
```
