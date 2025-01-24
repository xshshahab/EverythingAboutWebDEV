import React from 'react';
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className="text-white bg-neutral-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">Syphar</h1>
                    </div>

                    {/* Links (Desktop View) */}
                    <div className="hidden space-x-4 md:flex">
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                            Home
                        </a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                            About
                        </a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                            Services
                        </a>
                        <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div onClick={openMenu} className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open Main Menu</span>
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                menu && <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            }

        </nav>
    );
};

export default Navbar;
