import { motion } from 'motion/react';
import { MessageSquare, Calendar, ChevronDown } from 'lucide-react';
import { HOTEL_INFO, HIGHLIGHTS } from '../data';
import IconRenderer from './IconRenderer';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppChat = () => {
    const encodedText = encodeURIComponent(HOTEL_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="inicio" className="relative bg-luxury-black text-white min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000"
          alt="Aurum Grand Hotel Exterior"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-luxury-black/70 z-10"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center justify-center pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Accent Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-[1px] bg-luxury-gold mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm tracking-[0.4em] text-luxury-gold uppercase font-sans font-semibold mb-4"
          >
            Conforto e Qualidade em Marabá
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {HOTEL_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-serif italic text-lg sm:text-xl md:text-2xl text-luxury-beige/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            "{HOTEL_INFO.slogan}"
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-luxury-gold text-luxury-black rounded-sm hover:bg-luxury-gold-dark hover:scale-105 transition-all duration-300 font-sans text-sm font-bold tracking-widest uppercase shadow-lg shadow-luxury-gold/30"
            >
              <Calendar size={18} />
              <span>Reserve Agora</span>
            </button>
            <button
              onClick={handleWhatsAppChat}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-white/30 text-white rounded-sm hover:border-luxury-gold hover:text-luxury-gold hover:scale-105 transition-all duration-300 font-sans text-sm font-bold tracking-widest uppercase backdrop-blur-sm"
            >
              <MessageSquare size={18} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="relative z-20 flex flex-col items-center justify-center pb-8">
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-white/50 hover:text-luxury-gold transition-colors duration-300 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans mb-2 group-hover:translate-y-1 transition-transform duration-300">
            Descubra Mais
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      {/* Highlights Overlay Section (Immediately Below Hero) */}
      <div className="relative z-30 bg-luxury-black border-t border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-medium">Experiência Imperial</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white mt-1">Destaques Exclusivos</h2>
            <div className="w-12 h-0.5 bg-luxury-gold/50 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-luxury-dark/40 border border-white/5 p-6 rounded-sm hover:border-luxury-gold/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-luxury-gold/10 text-luxury-gold rounded-sm mb-4 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300">
                  <IconRenderer name={highlight.iconName} size={22} />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
