// pages/[...slug].js

export default function Page({ params, notFound }) {
  let languages = ["JavaScript", "Python", "Ruby", "Go", "Java"];

  if (languages.includes(params.slug)) {
    return <div>Blog post : {params.slug}</div>;
  }

  return <div>Page Not Found</div>;
}
