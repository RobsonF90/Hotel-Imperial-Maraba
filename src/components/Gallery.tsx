import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { value: 'todos', label: 'Tudo' },
    { value: 'quartos', label: 'Quartos' },
    { value: 'piscina', label: 'Piscina' },
    { value: 'restaurante', label: 'Restaurante' },
    { value: 'externa', label: 'Área Externa' },
    { value: 'recepcao', label: 'Recepção' },
  ];

  // Filter items based on active tab
  const filteredItems = activeCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems]);

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galeria" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Portfólio Visual</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mt-2 tracking-tight">
            Galeria de Fotos
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-gray text-base font-sans">
            Explore as instalações do Imperial Hotel em Marabá através de registros fotográficos da nossa estrutura, quartos e recepção acolhedora.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setActiveCategory(category.value);
                setSelectedItemIndex(null); // Reset index selection on tab change
              }}
              className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm border transition-all duration-300 font-sans ${
                activeCategory === category.value
                  ? 'bg-luxury-black text-white border-luxury-black shadow-md'
                  : 'bg-white text-luxury-gray border-luxury-gold/20 hover:border-luxury-gold hover:text-luxury-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem, index: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className="relative aspect-square group overflow-hidden rounded-sm cursor-pointer bg-luxury-dark border border-luxury-gold/10 shadow-sm"
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider text-luxury-gold font-bold uppercase block">
                        {item.category === 'recepcao' ? 'Recepção' : item.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-white truncate max-w-[150px]">
                        {item.alt}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-sm border border-luxury-gold/50 flex items-center justify-center text-luxury-gold bg-luxury-black/40">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Overlay (Popup Portal) */}
        <AnimatePresence>
          {selectedItemIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center lightbox-overlay p-4 md:p-8"
              onClick={() => setSelectedItemIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-luxury-black/60 text-white hover:text-luxury-gold rounded-sm border border-white/10 transition-colors duration-300"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>

              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 p-3 md:p-4 bg-luxury-black/60 text-white hover:text-luxury-gold rounded-sm border border-white/10 transition-colors duration-300 z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Expanded Image Frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] bg-luxury-black rounded-sm overflow-hidden border border-luxury-gold/30 shadow-2xl flex flex-col"
              >
                <img
                  src={filteredItems[selectedItemIndex].src}
                  alt={filteredItems[selectedItemIndex].alt}
                  className="max-h-[70vh] w-auto h-auto object-contain object-center max-w-full mx-auto"
                  referrerPolicy="no-referrer"
                />

                {/* Caption Bar */}
                <div className="bg-luxury-dark/95 border-t border-luxury-gold/20 px-6 py-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <ImageIcon className="text-luxury-gold" size={18} />
                    <div>
                      <h4 className="font-serif text-base font-semibold">{filteredItems[selectedItemIndex].alt}</h4>
                      <p className="text-xs text-luxury-gold tracking-wider uppercase font-sans">
                        Categoria: {filteredItems[selectedItemIndex].category}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-white/50 font-mono">
                    {selectedItemIndex + 1} de {filteredItems.length}
                  </span>
                </div>
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-3 md:p-4 bg-luxury-black/60 text-white hover:text-luxury-gold rounded-sm border border-white/10 transition-colors duration-300 z-10"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
