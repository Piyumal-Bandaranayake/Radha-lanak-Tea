"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-primary overflow-hidden">


        <div className="relative z-10 text-center px-6">
          <motion.h3 
            initial={{ opacity: 0, tracking: "0.5em" }}
            animate={{ opacity: 1, tracking: "0.3em" }}
            className="text-accent uppercase font-bold text-sm md:text-base mb-6 tracking-[0.3em]"
          >
            Since 2014
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Our <span className="text-accent italic">Heritage</span>
          </motion.h1>

          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <motion.div {...animations.fadeInUp} className="flex-1">
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Purity in Every <br/> Single Drop
              </h2>
              <div className="flex gap-8 mb-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/40">
                <div className="flex flex-col gap-1">
                   <span>Tea Board Reg</span>
                   <span className="text-accent">HT 0075</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span>Company Reg</span>
                   <span className="text-accent">PV 00313941</span>
                </div>
              </div>
              <p className="text-primary/70 text-lg leading-relaxed mb-6 font-medium italic">
                "All these tea products are produced using only the finest, purest and highest quality tea leaves harvested from the tea estates owned by Radha Lanka Teas (PVT) LTD, using our unique techniques."
              </p>
              <p className="text-primary/70 text-base leading-relaxed mb-8">
                Radha Lanka was born in the heart of the misty Sri Lankan highlands. We maintain a commitment to purity that defines every leaf we harvest for over 10 years. We believe that tea is more than a beverage; it is a bridge between nature and the soul.
              </p>
              
              <div className="bg-zinc-50 p-6 rounded-2xl border border-primary/5">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h11M5 12h11M5 16h11M5 4h11" />
                  </svg>
                  Island-wide Delivery
                </h4>
                <p className="text-primary/60 text-sm">
                  We provide direct home delivery for all our products across Sri Lanka. Standard courier service charges apply based on your location.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex-1 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/bteas.jpg"
                  alt="Radha Lanka Premium Teas"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.div {...animations.fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Stand For</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Traditional Craft",
                desc: "We still use hand-picking methods passed down through generations to ensure only the tender 'two leaves and a bud' are selected.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Ethical Sourcing",
                desc: "Our estates provide fair wages, housing, and education for our harvesting communities, fostering a cycle of prosperity.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Pure Nature",
                desc: "We strictly prohibit the use of chemical fertilizers or pesticides, maintaining a 100% organic ecosystem in our gardens.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.654M5.637 11A9.959 9.959 0 0115 5.233M15 5.233A9.953 9.953 0 0119.938 11M15 5.233V3.5a2.5 2.5 0 00-2.5-2.5h-1A2.5 2.5 0 009 3.5V5" />
                  </svg>
                )
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white p-12 rounded-3xl shadow-xl shadow-primary/5 hover:translate-y-[-10px] transition-transform duration-500 text-center"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-8">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-widest">{value.title}</h4>
                <p className="text-primary/60 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-accent rounded-full animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div {...animations.fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Experience the Tradition</h2>
            <p className="text-white/60 mb-12 max-w-xl mx-auto italic text-lg">
              "From our estates to your cup, experience the journey of purity."
            </p>
            <Link 
              href="/products"
              className="inline-block px-12 py-5 bg-accent text-primary font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-2xl shadow-accent/20"
            >
              Shop Our Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
