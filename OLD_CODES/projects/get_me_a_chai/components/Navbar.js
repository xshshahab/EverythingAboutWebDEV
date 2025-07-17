import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div id="logo">MyApp</div>
      <Link href="/">Home</Link>
      <Link href={"/about"}>About</Link>
    </nav>
  );
};

export default Navbar;
