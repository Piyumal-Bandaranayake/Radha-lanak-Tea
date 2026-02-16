"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/data/heroSlides";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between"
        >
          {/* Decorative Floating Leaves */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute left-10 top-1/4 opacity-40"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-accent rotate-45">
              <path d="M50 0C50 0 100 20 100 50C100 80 80 100 50 100C50 100 0 80 0 50C0 20 50 0 50 0Z" fill="currentColor" />
            </svg>
          </motion.div>

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start pt-20 md:pt-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-accent text-xs md:text-base font-medium tracking-[0.3em] uppercase mb-4"
            >
              {heroSlides[current].subtitle}
            </motion.h3>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-8xl text-white mb-6 md:mb-8 leading-tight font-secondary"
              dangerouslySetInnerHTML={{ __html: heroSlides[current].title }}
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-text-light/70 max-w-lg mb-8 md:mb-10 text-base md:text-lg font-light leading-relaxed px-4 md:px-0"
            >
              {heroSlides[current].description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto px-6 md:px-0"
            >
              <Link href="/products" className="px-10 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-xs md:text-sm rounded hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20 text-center">
                Shop Now
              </Link>
              <Link href="/about" className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded hover:bg-white/10 transition-all duration-300 text-center">
                Explore Our Story
              </Link>

            </motion.div>
          </div>

          {/* Right side: Image Element */}
          <div className="flex-1 relative mt-12 md:mt-0 flex justify-center items-center scale-90 md:scale-100">
              <div className="relative w-72 h-72 md:w-[550px] md:h-[550px]">
                  {/* Decorative Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-accent/20 rounded-full"
                  ></motion.div>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border border-accent/40 rounded-full"
                  ></motion.div>
                  
                  {/* Main Image */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="absolute inset-12 md:inset-16 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50 group"
                  >
                      <Image 
                        src={heroSlides[current].image} 
                        alt="Teapot"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent"></div>
                  </motion.div>
                  
                  {/* Floating Highlight */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-2 md:p-3 shadow-xl border border-white/20"
                  >
                       
                  </motion.div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute bottom-16 -left-6 md:bottom-20 md:-left-10 w-20 h-20 md:w-24 md:h-24 bg-accent/20 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-accent font-bold text-[8px] md:text-[10px] text-center leading-tight border border-accent/20"
                  >
                      {heroSlides[current].feature.split(' ').map((word, i) => (
                        <span key={i}>{word}<br/></span>
                      ))}
                  </motion.div>

              </div>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Social Links */}
      <div className="absolute left-6 bottom-12 hidden lg:flex flex-col gap-8 text-white/50 text-xs">
  
        <a href="https://www.facebook.com/share/1DT4K9jPiU/" className="hover:text-accent [writing-mode:vertical-lr] uppercase tracking-[0.3em] transition-colors">Facebook</a>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-12 left-1/2 -track-x-1/2 flex gap-3"> 
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === i ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;

