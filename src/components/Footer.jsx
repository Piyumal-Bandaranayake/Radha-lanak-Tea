"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">RADHA</span>
            <span className="text-accent ml-1">LANKA</span>
          </div>

          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-white/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Shipping Info</a>
          </div>

          <p className="text-white/30 text-xs uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Radha Lanka. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
