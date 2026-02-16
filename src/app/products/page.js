"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import { products } from "@/data/products";
import { useState } from "react";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-primary pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-6">Our Collections</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg italic px-4 md:px-0">
            "Explore our full range of organic, hand-picked teas from the finest estates in Sri Lanka."
          </p>
        </motion.div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {products.map((product, idx) => (
                <motion.div 
                  layout
                  key={product.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative cursor-pointer flex flex-col items-center"
                >
                  {/* Image Container with Floating Effect */}
                  <div className="relative w-full aspect-4/5 rounded-4xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(27,67,50,0.2)] group-hover:-translate-y-3">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Modern Glass Tag */}
                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                      {product.tag}
                    </div>

                    {/* Elegant Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Pure Ceylon Quality</p>
                        <div className="w-full py-3 bg-accent text-primary font-bold uppercase text-[10px] tracking-[0.3em] rounded-xl shadow-2xl hover:bg-white transition-colors duration-300 text-center">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Minimalist Info Section */}
                  <div className="mt-8 text-center px-4 w-full">
                    <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {product.category}
                    </span>
                    <h4 className="text-xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-accent">
                      {product.name}
                    </h4>
                    <div className="inline-block relative">
                      <div className="text-primary/40 font-bold tracking-[0.2em] text-[10px] uppercase">
                        Starts from / {product.cardPriceLabel || "100g"}
                      </div>
                      <div className="text-primary font-black text-xl tracking-tight">
                        {product.cardPriceKey ? product.prices[product.cardPriceKey] : product.prices["100g"]}
                      </div>
                      {/* Decorative Line */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}
