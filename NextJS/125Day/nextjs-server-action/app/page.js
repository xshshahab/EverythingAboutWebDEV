"use client";

import submitAction from "@/actions/form";
import React from "react";
import { useRef } from "react";

const Home = () => {
  let ref = useRef();

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
        className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-white">
          Sign Up
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 font-medium text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2 text-gray-100 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
