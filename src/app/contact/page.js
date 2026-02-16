"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/home/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-primary overflow-hidden">


        <div className="relative z-10 text-center px-6">
          <motion.h3 
            initial={{ opacity: 0, tracking: "0.5em" }}
            animate={{ opacity: 1, tracking: "0.3em" }}
            className="text-accent uppercase font-bold text-sm md:text-base mb-6 tracking-[0.3em]"
          >
            Get in touch
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Contact <span className="text-accent italic">Us</span>
          </motion.h1>

          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Contact Content */}
      <ContactSection />

      <Footer />
    </main>
  );
}
