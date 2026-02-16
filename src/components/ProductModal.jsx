"use client";

import Image from "next/image";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-accent transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-auto">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-accent text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {product.tag}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{product.category}</span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 leading-tight">{product.name}</h2>
          
          <p className="text-text-main/70 text-sm md:text-base leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="space-y-3 mb-8">
            <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary/5 pb-1">Pricing Details</h4>
            <div className="space-y-2">
              {Object.entries(product.prices).map(([key, value]) => {
                const labels = {
                  "1kg": "1 Kilo Package",
                  "500g": "500 Grams Package",
                  "100g": "100 Grams Sample",
                  "piece": "1 Piece",
                  "bowl": "1 Bolw"
                };
                return (
                  <div key={key} className="flex justify-between items-center bg-zinc-50 px-4 py-2.5 rounded-xl border border-primary/5">
                    <span className="text-primary/60 text-xs font-medium">{labels[key] || key}</span>
                    <span className="text-primary font-bold text-lg">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href={`https://wa.me/94769070466?text=Hello Radha Lanka! I'm interested in ordering ${product.name}. Could you provide more details?`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 text-xs md:text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order Now
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ProductModal;
