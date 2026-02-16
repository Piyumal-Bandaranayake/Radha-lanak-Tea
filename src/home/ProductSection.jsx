"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import ProductModal from "@/components/ProductModal";

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const featuredProducts = products.slice(0, 3);

  const floatingTags = [
    { text: "Handmade Tea", pos: "top-10 left-0" },
    { text: "Herbal Tea", pos: "top-40 -left-10" },
    { text: "Black Tea", pos: "bottom-20 left-10" },
    { text: "100% Natural Flavory Tea", pos: "top-20 right-0" },
    { text: "Spicy", pos: "bottom-40 -right-10" },
    { text: "Dehydrated Product", pos: "bottom-10 right-10" },
  ];

  return (
    <section id="product" className="py-24 bg-zinc-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Premium Showcase Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-32 min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden rounded-3xl md:rounded-[3rem] bg-linear-to-br from-primary/5 to-accent/5 border border-primary/5 py-12 md:py-0"
        >
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 z-0 text-[#1B4332]/5">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-current rounded-full animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[450px] md:h-[450px] border border-accent/10 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-accent/5 rounded-full blur-3xl"></div>
          </div>


          <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 px-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex-1 text-center md:text-left pt-8 md:pt-0"
            >
              <h2 className="text-3xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Crafting the Soul of <br/> <span className="text-accent italic">Ceylon</span>
              </h2>
              <p className="text-primary/60 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
                Experience the pure essence of nature with our hand-picked, organic collections.
              </p>
              <Link href="/products" className="px-8 py-3 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent transition-all inline-block">
                View Collections
              </Link>
            </motion.div>
 
            {/* Center Product with Floating Tags */}
            <div className="flex-1 relative flex justify-center py-12 md:py-20 scale-75 md:scale-100">
               {/* Podium */}
               <div className="absolute bottom-10 w-64 h-20 bg-white shadow-2xl rounded-[50%] skew-x-[-10deg] blur-sm opacity-50"></div>
               <div className="absolute bottom-14 w-56 h-4 bg-primary/10 rounded-full blur-xl"></div>
               
               {/* Main Product Image */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                 className="relative w-48 h-72 md:w-64 md:h-96 z-10 animate-float"
               >
                  <Image 
                    src="/product.png" 
                    alt="Premium Tea Tin"
                    fill
                    className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                  />
               </motion.div>


               {/* Floating Tags */}
               {floatingTags.map((tag, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.6 + (i * 0.1), duration: 0.4 }}
                   className={`absolute ${tag.pos} z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-accent/20 hidden lg:block`}
                 >
                    <span className="text-primary font-bold text-[10px] uppercase tracking-wider">{tag.text}</span>
                    <div className="absolute -z-10 w-2 h-2 bg-accent rounded-full -top-1 -right-1"></div>
                 </motion.div>
               ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-3">Our Collections</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Exquisite Tea Selection</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-text-main/60 max-w-2xl mx-auto italic text-lg leading-relaxed">
            "Discover the finest organic teas sourced from the lush, mist-covered mountains of Sri Lanka."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              onClick={() => setSelectedProduct(product)}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              {/* Image Container with Floating Effect */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(27,67,50,0.2)] group-hover:-translate-y-3">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Modern Glass Tag */}
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                  {product.tag}
                </div>

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                   <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     <p className="text-white/80 text-xs uppercase tracking-[0.3em] font-bold mb-4">Discover Quality</p>
                     <button className="w-full py-4 bg-accent text-primary font-bold uppercase text-xs tracking-[0.3em] rounded-xl shadow-2xl hover:bg-white transition-colors duration-300">
                       View Details
                     </button>
                   </div>
                </div>
              </div>

              {/* Minimalist Info Section */}
              <div className="mt-8 text-center px-4 w-full">
                <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {product.category}
                </span>
                <h4 className="text-2xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-accent">
                  {product.name}
                </h4>
                <div className="inline-block relative">
                   <div className="text-primary/40 font-bold tracking-[0.2em] text-sm uppercase">
                     Starts from / {product.cardPriceLabel || "100g"}
                   </div>
                   <div className="text-primary font-black text-2xl tracking-tight">
                     {product.cardPriceKey ? product.prices[product.cardPriceKey] : product.prices["100g"]}
                   </div>
                   {/* Decorative Line */}
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/products"
            className="inline-block px-12 py-5 bg-primary text-white font-bold uppercase tracking-[0.2em] text-sm rounded-lg shadow-2xl hover:bg-accent transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Explore More Products
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductSection;



