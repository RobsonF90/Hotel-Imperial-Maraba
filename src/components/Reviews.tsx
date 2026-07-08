import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="avaliacoes" className="py-24 bg-luxury-beige overflow-hidden relative">
      {/* Background Decorative Quote Sign */}
      <div className="absolute top-12 left-12 text-luxury-gold/5 pointer-events-none select-none">
        <Quote size={200} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Experiências Reais</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-black mt-2">
            O Que Dizem Nossos Hóspedes
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-3"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[350px] sm:min-h-[280px] flex items-center justify-center">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-16 p-3 bg-white hover:bg-luxury-gold hover:text-luxury-black text-luxury-gray rounded-sm border border-luxury-gold/20 shadow-sm transition-all duration-300 z-20"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Active Display Card with Motion transition */}
          <div className="w-full text-center px-8 sm:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center"
              >
                {/* 5-star rating */}
                <div className="flex items-center space-x-1 mb-6 text-luxury-gold">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Review Text */}
                <p className="font-serif italic text-lg sm:text-xl text-luxury-black leading-relaxed max-w-2xl mb-8">
                  "{currentTestimonial.comment}"
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-14 h-14 rounded-sm object-cover border-2 border-luxury-gold shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <strong className="block text-sm font-sans font-bold text-luxury-black">
                      {currentTestimonial.name}
                    </strong>
                    <span className="text-xs text-luxury-gray font-sans">
                      {currentTestimonial.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 p-3 bg-white hover:bg-luxury-gold hover:text-luxury-black text-luxury-gray rounded-sm border border-luxury-gold/20 shadow-sm transition-all duration-300 z-20"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center space-x-2.5 mt-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 ${
                currentIndex === index ? 'w-6 bg-luxury-gold rounded-sm' : 'w-2 bg-luxury-gold/30 rounded-sm'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
