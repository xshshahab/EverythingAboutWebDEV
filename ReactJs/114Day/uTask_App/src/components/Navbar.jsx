import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Your Task', href: '#your-task' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="text-white bg-zinc-900">
            <div className="flex items-center justify-between px-4 h-14 md:px-32">
                <div className="text-2xl font-bold">
                    <a href="/">Unlok Task</a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden space-x-6 md:flex">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="transition duration-200 hover:text-gray-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className="bg-slate-800 md:hidden">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="block px-4 py-2 transition duration-200 hover:bg-zinc-800"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
