"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">RADHA</span>
              <span className="text-accent ml-1">LANKA</span>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://facebook.com/radhalanka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
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
