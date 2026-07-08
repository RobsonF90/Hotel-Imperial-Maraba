import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROMOTIONS } from '../data';
import { Percent, Clipboard, ClipboardCheck, Sparkles, Calendar } from 'lucide-react';

interface PromotionsProps {
  onRedeemOffer: (roomId: string) => void;
}

export default function Promotions({ onRedeemOffer }: PromotionsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="ofertas" className="py-24 bg-luxury-dark text-white relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1500"
          alt="Luxury details"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Oportunidades Únicas</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            Ofertas Especiais &amp; Promoções
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-white/60 text-base font-sans font-light">
            Aproveite nossos pacotes personalizados de temporada ou tarifas promocionais antecipadas com vantagens exclusivas inclusas.
          </p>
        </div>

        {/* Promotions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROMOTIONS.map((promo, index) => {
            const isFirst = index === 0;
            const targetRoomId = isFirst ? "suite-executiva" : "suite-familia";

            return (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-luxury-black/80 border border-luxury-gold/30 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row h-full items-stretch"
              >
                {/* Visual Cover Side: 40% */}
                <div className="md:w-5/12 min-h-[200px] relative group overflow-hidden">
                  <img
                    src={promo.bgImage}
                    alt={promo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent"></div>
                  
                  {/* Floating Promo tag */}
                  <div className="absolute top-4 left-4 bg-luxury-gold text-luxury-black p-2 rounded-sm font-bold flex items-center justify-center border border-white/20">
                    <Percent size={16} />
                  </div>
                </div>

                {/* Details Side: 60% */}
                <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs text-luxury-gold tracking-[0.2em] uppercase font-sans font-bold flex items-center space-x-1.5">
                      <Sparkles size={12} className="animate-pulse" />
                      <span>{promo.subtitle}</span>
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {promo.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
                      {promo.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    {/* Voucher Copy Interaction */}
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 p-2.5 rounded-sm">
                      <div className="pl-2">
                        <span className="text-[9px] uppercase tracking-wider text-white/40 font-bold block">Código de Desconto</span>
                        <code className="text-xs sm:text-sm font-mono font-bold text-luxury-gold-light tracking-widest">{promo.discountCode}</code>
                      </div>
                      
                      <button
                        onClick={(e) => handleCopyCode(promo.id, promo.discountCode, e)}
                        className="p-2 border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold rounded-sm hover:bg-luxury-gold/10 transition-all duration-300 relative shrink-0"
                        title="Copiar código"
                      >
                        <AnimatePresence mode="wait">
                          {copiedId === promo.id ? (
                            <motion.div
                              key="copied"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center space-x-1 text-green-400"
                            >
                              <ClipboardCheck size={16} />
                              <span className="text-[10px] uppercase tracking-wider font-bold pr-1">Copiado</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <Clipboard size={16} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>

                    {/* Redeem Offer CTA */}
                    <div className="flex items-center justify-between text-xs gap-4">
                      <span className="text-[10px] text-white/50 tracking-wider flex items-center space-x-1">
                        <Calendar size={12} className="text-luxury-gold shrink-0" />
                        <span>{promo.validity}</span>
                      </span>

                      <button
                        onClick={() => onRedeemOffer(targetRoomId)}
                        className="px-4 py-2.5 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-sans font-bold tracking-wider uppercase rounded-sm transition-all duration-300 shadow-md hover:shadow-luxury-gold/10 shrink-0"
                      >
                        Resgatar
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
