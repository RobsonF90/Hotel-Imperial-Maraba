import { motion } from 'motion/react';
import { ROOMS } from '../data';
import { BedDouble, Check, Users, Maximize, Compass } from 'lucide-react';
import { Room } from '../types';

interface RoomsProps {
  onSelectRoom: (roomId: string) => void;
}

export default function Rooms({ onSelectRoom }: RoomsProps) {
  return (
    <section id="quartos" className="py-24 bg-luxury-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Descanso &amp; Acolhimento</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mt-2 tracking-tight">
            Quartos &amp; Suítes Confortáveis
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-gray text-base font-sans">
            Cada quarto no Imperial Hotel foi planejado com carinho para proporcionar uma estadia relaxante e de alta qualidade, aliando excelente custo-benefício, ar-condicionado silencioso e facilidades práticas.
          </p>
        </div>

        {/* Rooms Listing Layout */}
        <div className="space-y-16 lg:space-y-24">
          {ROOMS.map((room: Room, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Room Image - Column 1 (6 cols in a 12-col layout conceptually) */}
                <div className="lg:w-1/2 relative group overflow-hidden rounded-sm shadow-xl border border-luxury-gold/15">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full min-h-[350px] md:min-h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Top Overlay showing size and view */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                    <span className="px-4 py-1.5 bg-luxury-black/75 backdrop-blur-sm text-white text-xs tracking-widest uppercase rounded-sm border border-luxury-gold/30">
                      {room.size}
                    </span>
                    <span className="px-4 py-1.5 bg-luxury-black/75 backdrop-blur-sm text-luxury-gold text-xs tracking-widest uppercase rounded-sm border border-luxury-gold/30 flex items-center space-x-1">
                      <Compass size={12} className="animate-spin-slow" />
                      <span>{room.view}</span>
                    </span>
                  </div>
                </div>

                {/* Room Details - Column 2 */}
                <div className="lg:w-1/2 flex flex-col justify-between py-2 space-y-6">
                  <div>
                    {/* Size and Info Bar for Mobile */}
                    <div className="flex flex-wrap gap-3 mb-3 lg:hidden">
                      <span className="px-3 py-1 bg-white text-luxury-black text-xs font-semibold tracking-wider rounded-sm border border-luxury-gold/15">
                        {room.size}
                      </span>
                      <span className="px-3 py-1 bg-white text-luxury-gold text-xs font-semibold tracking-wider rounded-sm border border-luxury-gold/15">
                        {room.view}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-black tracking-tight mb-4 hover:text-luxury-gold transition-colors duration-300">
                      {room.name}
                    </h3>
                    
                    <p className="text-luxury-gray text-sm sm:text-base leading-relaxed font-sans mb-6">
                      {room.description}
                    </p>

                    {/* Room Attributes */}
                    <div className="flex items-center space-x-6 text-sm text-luxury-gray font-semibold mb-6 border-b border-luxury-gold/20 pb-4">
                      <div className="flex items-center space-x-2">
                        <Users size={18} className="text-luxury-gold" />
                        <span>Acomoda até {room.capacity} Hóspedes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Maximize size={18} className="text-luxury-gold" />
                        <span>{room.size} de área privativa</span>
                      </div>
                    </div>

                    {/* Amenities Checklist */}
                    <div>
                      <h4 className="text-xs font-sans tracking-[0.2em] font-bold text-luxury-black uppercase mb-3">
                        Comodidades Inclusas:
                      </h4>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {room.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-start space-x-2 text-xs sm:text-sm text-luxury-gray font-sans">
                            <Check size={14} className="text-luxury-gold shrink-0 mt-0.5" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Trigger and Price */}
                  <div className="pt-6 border-t border-luxury-gold/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                    <div>
                      <span className="text-xs text-luxury-gray uppercase tracking-widest block font-sans">Diária a partir de</span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-sm font-sans font-semibold text-luxury-gold">R$</span>
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-luxury-black">
                          {room.price.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-xs text-luxury-gray font-sans font-medium"> / noite</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectRoom(room.id)}
                      className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-luxury-black text-white hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 rounded-sm font-sans text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-luxury-gold/20"
                    >
                      <BedDouble size={16} />
                      <span>Reservar {room.name.split(' ').slice(1).join(' ')}</span>
                    </button>
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
