import React from "react";
import Script from "next/script";

const Contact = () => {
  return (
    <div>
      <Script>{`alert("Welcome to Contact Page");`}</Script>
      <h1>Get in touch</h1>
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "Contact - Syphar web",
  description: " Contact page of Syphar web",
};
