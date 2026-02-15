import Navbar from "@/components/Navbar";
import Hero from "@/home/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Sections placeholders for navigation */}
      <section id="product" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Collections</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          <p className="text-text-main/60 max-w-2xl mx-auto italic">
            "Discover the finest organic teas sourced from the lush mountains of Sri Lanka."
          </p>
        </div>
      </section>

      <section id="about" className="py-24 bg-zinc-50 font-sans">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative w-full aspect-square bg-primary/10 rounded-2xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-bold text-2xl uppercase tracking-[0.2em] rotate-12">
                   Tradition & Quality
                 </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-accent uppercase tracking-widest text-sm font-bold mb-4">Our Heritage</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Authentic Ceylon Tea Experience</h2>
              <p className="text-text-main/70 mb-6 leading-relaxed">
                Radha Lanka was born from a passion for preserving the ancient traditions of Sri Lankan tea culture while embracing modern organic practices. Every leaf is hand-picked with care to ensure the highest quality and most exquisite flavor.
              </p>
              <button className="px-8 py-3 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


