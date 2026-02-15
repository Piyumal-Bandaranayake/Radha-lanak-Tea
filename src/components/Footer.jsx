"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to taste the excellence?</h2>
        <p className="text-white/60 mb-12 max-w-xl mx-auto">
          Contact us for bulk orders, wholesale inquiries, or just to say hello. We love talking about tea!
        </p>
        
        <div className="flex justify-center gap-8 mb-16">
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <span className="sr-only">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <span className="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-sm text-white/50 tracking-widest uppercase">
          <div>
            <h4 className="text-accent mb-4">Location</h4>
            <p>Colombo, Sri Lanka</p>
          </div>
          <div>
            <h4 className="text-accent mb-4">Email</h4>
            <p>hello@radhalanka.com</p>
          </div>
          <div>
            <h4 className="text-accent mb-4">Phone</h4>
            <p>+94 11 234 5678</p>
          </div>
        </div>

        <p className="text-white/30 text-xs uppercase tracking-[0.3em] border-t border-white/10 pt-8 mt-8">
          &copy; {new Date().getFullYear()} Radha Lanka Product. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
