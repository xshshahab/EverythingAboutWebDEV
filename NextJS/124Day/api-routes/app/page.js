"use client";
import React from "react";

const page = () => {
  const handleClick = async () => {
    let data = {
      name: "Syphar",
      role: "coder",
    };

    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();

    console.log(`Response : ${res}`);
  };

  return (
    <div>
      <h1>Next.js API routes demo</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default page;
