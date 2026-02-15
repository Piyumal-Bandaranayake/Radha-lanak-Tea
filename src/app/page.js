import Navbar from "@/components/Navbar";
import Hero from "@/home/Hero";
import ProductSection from "@/home/ProductSection";
import AboutSection from "@/home/AboutSection";
import ContactSection from "@/home/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}



