"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1544787210-282aa9dfec5c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1594631252845-29fc4586216c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1563911191333-dc1c76f63f53?auto=format&fit=crop&q=80&w=1200"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="py-24 bg-zinc-50 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative group w-full max-w-md mx-auto h-[450px] md:h-auto">
              <div className="relative w-full h-full md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 bg-zinc-200">

                {images.map((img, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`Tea Crafting ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                
                {/* Slideshow Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage ? "bg-accent w-6" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-8 rounded-2xl shadow-2xl z-20 border border-accent/10">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-accent text-[8px] md:text-xs uppercase tracking-[0.2em] font-bold">Years of Tradition</div>
              </div>
            </div>
          </div>
 
          <div className="flex-1">
            <h3 className="text-accent uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4">Our Heritage</h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">The Art of Pure <br/> Ceylon Tea</h2>

            <p className="text-text-main/70 mb-8 text-lg leading-relaxed">
              At Radha Lanka, our journey began over five decades ago in the misty highlands of Sri Lanka. We believe that tea is not just a beverage, but a ritual of purity and tranquility. 
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">100% Organic Harvesting</h4>
                  <p className="text-text-main/60 text-sm">We strictly follow traditional, pesticide-free farming methods.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">Hand-Picked with Care</h4>
                  <p className="text-text-main/60 text-sm">Only the finest two leaves and a bud are selected for our premium grades.</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="inline-block px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded shadow-xl hover:bg-accent transition-all duration-300">
              Discover Our Story
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

