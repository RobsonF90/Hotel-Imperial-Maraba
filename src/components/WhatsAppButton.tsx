import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data';

export default function WhatsAppButton() {
  const handleWhatsAppChat = () => {
    const encodedText = encodeURIComponent(HOTEL_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Ambient Pulsing Rings */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 scale-110 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-40 scale-125 pointer-events-none"></div>

      {/* Floating Button Element */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppChat}
        className="relative flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1EBE57] transition-colors duration-300 cursor-pointer border border-[#1e9d4d] focus:outline-none"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        
        {/* Tooltip badge prompt */}
        <span className="absolute right-14 bg-luxury-black/95 text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-sm border border-luxury-gold/30 opacity-0 md:group-hover:opacity-100 group-hover:pointer-events-auto shadow-md pointer-events-none transition-opacity duration-300 whitespace-nowrap mr-2 flex items-center space-x-1">
          <span>Dúvidas? Fale Conosco</span>
        </span>
      </motion.button>
    </div>
  );
}
