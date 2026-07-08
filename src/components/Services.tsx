import { motion } from 'motion/react';
import { SERVICES } from '../data';
import IconRenderer from './IconRenderer';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Serviços &amp; Comodidades</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mt-2 tracking-tight">
            Comodidades e Facilidades
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-gray text-base font-sans">
            No Imperial Hotel, focamos no seu bem-estar e praticidade. Oferecemos tudo o que você precisa para uma estadia tranquila, agradável e acolhedora em Marabá.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-luxury-gold/10 p-6 rounded-sm hover:border-luxury-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 flex items-center justify-center bg-luxury-beige text-luxury-gold rounded-sm mb-5 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-colors duration-300">
                  <IconRenderer name={srv.iconName} size={22} />
                </div>

                {/* Name */}
                <h3 className="font-serif text-lg font-bold text-luxury-black mb-3 group-hover:text-luxury-gold-dark transition-colors duration-300">
                  {srv.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-luxury-gray leading-relaxed font-sans">
                  {srv.description}
                </p>
              </div>

              {/* Decorative gold dot */}
              <div className="w-1 h-1 bg-luxury-gold/30 rounded-full mt-6 group-hover:bg-luxury-gold transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
