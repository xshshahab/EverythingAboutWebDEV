import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2.5 px-10 bg-neutral-900">
      <h1>Syphar</h1>
      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
