"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Contact Info Sidebar */}
          <div className="md:w-2/5 bg-accent/90 p-8 md:p-12 text-primary flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">Get in Touch</h2>
              <p className="text-primary/70 mb-8 md:mb-12 text-base md:text-lg text-center md:text-left">
                Have questions about our tea varieties or wholesale opportunities? We'd love to hear from you.
              </p>

              
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                   <motion.div 
                     animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                   </motion.div>
                   <div>
                     <h4 className="font-bold opacity-50 text-[10px] md:text-xs uppercase tracking-widest">Store Location</h4>
                     <p className="font-medium text-sm md:text-base">No 34/1/A Mahayaya maliboda. Deraniyagala., Sri Lanka</p>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                   <motion.div 
                     animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </motion.div>
                   <div>
                     <h4 className="font-bold opacity-50 text-[10px] md:text-xs uppercase tracking-widest">Email Us</h4>
                     <p className="font-medium text-sm md:text-base hover:text-primary transition-colors cursor-pointer">contact@radhalanka.com</p>
                   </div>
                </div>
                <a 
                  href="https://wa.me/94769070466" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 group cursor-pointer"
                >
                   <motion.div 
                     animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                     </svg>
                   </motion.div>
                   <div>
                     <h4 className="font-bold opacity-50 text-[10px] md:text-xs uppercase tracking-widest group-hover:text-[#25D366] transition-colors">WhatsApp Us</h4>
                     <p className="font-medium text-sm md:text-base">+94 76 907 0466</p>
                   </div>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4 mt-12">
                <motion.a 
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  href="https://facebook.com/radhalanka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
            </div>
          </div>
 
          {/* Interactive Satellite Map */}
          <div className="md:w-3/5 relative min-h-[300px] md:min-h-[400px] group/map">

            <iframe 
              src="https://maps.google.com/maps?q=6.869722,80.406361&t=k&z=17&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Directions Overlay */}
            <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=6.869722,80.406361"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-md text-primary px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-accent hover:text-primary transition-all flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                Get Directions
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
