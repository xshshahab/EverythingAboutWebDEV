import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 text-center bg-indigo-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-200">Page Not Found</p>
        <Link
          className="inline-block px-6 py-3 mt-6 text-lg text-white transition bg-blue-600 rounded-md hover:bg-blue-500"
          href="/"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
