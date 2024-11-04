"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import Button from shadcn
import { Menu, X } from "lucide-react"; // Menu and close icons
import { useState } from "react";
// navLinks.js
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/flipnews", label: "FlipFlop" },
  { href: "/contact", label: "Contact" },
];



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white shadow-md mb-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            Indic Wire
          </h1>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call to Action - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Subscribe</Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-2 w-3/4">Subscribe</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
