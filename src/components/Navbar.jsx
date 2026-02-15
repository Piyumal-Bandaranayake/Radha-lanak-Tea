"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight text-primary">
            <span className={isScrolled ? "text-primary" : "text-white"}>RADHA</span>
            <span className="text-accent ml-1">LANKA</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-accent ${
                isScrolled ? "text-text-main" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button (would add state/etc here) */}
        <div className="md:hidden flex items-center">
           <button className={`p-2 ${isScrolled ? "text-primary" : "text-white"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
