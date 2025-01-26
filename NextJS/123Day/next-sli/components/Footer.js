"use client";

import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/xsh_shahab",
      icon: "https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png",
    },
    {
      name: "Twitter",
      href: "https://x.com/xsh_shahab",
      icon: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/mdshahabuddin82/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      name: "Github",
      href: "https://github.com/xshshahab",
      icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
    },
  ];

  return (
    <footer className="text-white bg-neutral-900">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Syphar Web.</h3>
            <p className="mt-2 text-sm text-gray-400">
              Your trusted partner for awesome services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <ul className="flex mt-4 space-x-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">{link.name}</span>
                    <img src={link.icon} className="w-8 h-8 rounded-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Syphar Web. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400 md:mt-0">
            Built with ❤️{" "}
            <a target="_blank" href="https://github.com/xshshahab">
              @xshshahab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
