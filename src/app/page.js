import Navbar from "@/components/Navbar";
import Hero from "@/home/Hero";
import ProductSection from "@/home/ProductSection";
import AboutSection from "@/home/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <Footer />
    </main>
  );
}



