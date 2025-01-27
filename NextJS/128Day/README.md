# Dynamic Routes in Next.js

## 1. Create a dynamic route

Create a file with square brackets `[]` in the `pages` directory.

Example:

```javascript
// pages/post/[id].js

import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Post ID: {id}</h1>;
};

export default Post;
```

## 2. Access the dynamic route

Visit the route by navigating to `/post/1`, `/post/2`, etc.

## 3. Optional catch-all routes

To handle optional segments, use square brackets with three dots `...`.

##### Example:

```javascript
/ pages/post/[[...slug]].js

import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Slug: {slug ? slug.join('/') : 'No slug provided'}</h1>;
};
export default Post;
```

## 4. getStaticPaths for static generation

For static generation, define paths using `getStaticPaths`.

##### Example:

```javascript
// pages/post/[id].js

import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <h1>{post.title}</h1>;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = { id: params.id, title: `Post ${params.id}` };
  return { props: { post } };
}

export default Post;
```
