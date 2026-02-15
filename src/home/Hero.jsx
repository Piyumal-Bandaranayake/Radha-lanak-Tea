"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Floating Leaves (Stylized with CSS/SVGs) */}
        <div className="hidden lg:block absolute left-10 top-1/4 animate-bounce duration-3000">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent opacity-50 rotate-45">
            <path d="M50 0C50 0 100 20 100 50C100 80 80 100 50 100C50 100 0 80 0 50C0 20 50 0 50 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="hidden lg:block absolute left-24 bottom-1/4 animate-pulse">
           <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary opacity-30 -rotate-12">
            <path d="M50 0C50 0 100 20 100 50C100 80 80 100 50 100C50 100 0 80 0 50C0 20 50 0 50 0Z" fill="#2D6A4F" />
          </svg>
        </div>

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-accent text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Hand Made Tea Set
          </h3>
          <h1 className="font-script text-6xl md:text-8xl text-white mb-8 leading-tight animate-fade-in-up">
            Organic <span className="text-accent">Tea</span> House
          </h1>
          <p className="text-text-light/70 max-w-lg mb-10 text-lg font-light leading-relaxed animate-fade-in-up delay-100">
            Experience the essence of Sri Lankan nature in every sip. Our premium organic teas are hand-picked and crafted for perfection.
          </p>
          
          <div className="flex gap-4 animate-fade-in-up delay-200">
            <button className="px-10 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-sm rounded hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20">
              Shop Now
            </button>
            <button className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-white/10 transition-all duration-300">
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Right side: Image Placeholder/Stylized Element */}
        <div className="flex-1 relative mt-16 md:mt-0 flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-[550px] md:h-[550px]">
                {/* Decorative Rings */}
                <div className="absolute inset-0 border border-accent/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-accent/40 rounded-full animate-reverse-spin-slow"></div>
                
                {/* Main Teapot Image (Using Unsplash) */}
                <div className="absolute inset-16 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50 group">
                    <Image 
                      src="https://images.unsplash.com/photo-1544787210-282aa9dfec5c?auto=format&fit=crop&q=80&w=1000" 
                      alt="Premium Teapot"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent"></div>
                </div>
                
                {/* Floating Elements (Leaves) */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-3 animate-bounce shadow-xl border border-white/20">
                     <Image 
                        src="https://v5.airtableusercontent.com/v3/u/34/34/1739815200000/bKxMofv7iYv6w99O6PjSww/w80rVp9O8C0_34c56y5x_o_4H_X_w_w/34" 
                        alt="Tea Leaf" 
                        fill
                        className="object-contain p-2 opacity-80" 
                     />
                </div>
                
                <div className="absolute bottom-20 -left-10 w-24 h-24 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center text-accent font-bold animate-pulse">
                    ECO <br/> FRIENDLY
                </div>

            </div>
        </div>

      </div>

      {/* Social Links on the left (as seen in the image) */}
      <div className="absolute left-6 bottom-12 hidden lg:flex flex-col gap-6 text-white/50 text-sm">
        <a href="#" className="hover:text-accent rotate-90 mb-4 origin-left uppercase tracking-widest">Instagram</a>
        <a href="#" className="hover:text-accent rotate-90 mb-4 origin-left uppercase tracking-widest">Facebook</a>
      </div>

      {/* Bottom pagination/indicator as seen in image */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <div className="w-2 h-2 rounded-full bg-white/30"></div>
        <div className="w-2 h-2 rounded-full bg-white/30"></div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin-slow { animation: reverse-spin-slow 15s linear infinite; }
        .delay-100 { animation-delay: 0.2s; }
        .delay-200 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default Hero;
