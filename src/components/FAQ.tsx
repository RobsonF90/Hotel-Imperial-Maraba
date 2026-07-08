import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-luxury-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Dúvidas Frequentes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-black mt-2">
            Perguntas &amp; Respostas
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-3"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border border-luxury-gold/15 rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-luxury-gold/30 transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-luxury-beige/30"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <div className="w-8 h-8 rounded-sm bg-luxury-beige text-luxury-gold flex items-center justify-center shrink-0">
                      <HelpCircle size={16} />
                    </div>
                    <span className="font-serif text-sm sm:text-base font-bold text-luxury-black">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-sm bg-luxury-cream text-luxury-gold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Accordion Answer Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-luxury-gold/10 ml-12 text-sm sm:text-base text-luxury-gray leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
