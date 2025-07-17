"use client"

import React, { useState } from "react";

const Home = () => {

  const [count, setCount] = useState(0)

  return <div className="flex items-center justify-center w-full h-screen" >
    <div className="flex min-h-[50vh] container mx-auto bg-indigo-950 flex-col items-center justify-center">

      <h1 className="py-4 text-4xl">Next Js App</h1>
      <div id="main-continer" className="flex items-center gap-10">
        <button className="px-4 py-1 font-semibold bg-red-400 rounded text-zinc-900" onClick={() => setCount(count - 1)}>Decrement</button>

        <p>Count: {count}</p>
        <button className="px-4 py-1 font-semibold bg-green-600 rounded text-zinc-900" onClick={() => setCount(count + 1)}>Increment</button>

      </div>
    </div>


  </div>;
};

export default Home;
