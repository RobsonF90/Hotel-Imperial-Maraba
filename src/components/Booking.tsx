import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ROOMS, HOTEL_INFO } from '../data';
import { Calendar, Users, Home, ClipboardCheck, Sparkles, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';

interface BookingProps {
  selectedRoomId: string | null;
  onClearSelectedRoom: () => void;
}

export default function Booking({ selectedRoomId, onClearSelectedRoom }: BookingProps) {
  // Input states
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [roomType, setRoomType] = useState<string>(ROOMS[0].id);

  // Flow states
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [bookingSummary, setBookingSummary] = useState<any | null>(null);

  // Set default dates on load (today and tomorrow)
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 2); // 2 nights default

    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Update room type dropdown if preselectedRoomId changes
  useEffect(() => {
    if (selectedRoomId) {
      setRoomType(selectedRoomId);
      // Scroll to the booking section
      const bookingSection = document.getElementById('reservas');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedRoomId]);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setBookingSummary(null);

    // Date validations
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    if (!checkIn || !checkOut) {
      setValidationError("Por favor, preencha as datas de check-in e check-out.");
      return;
    }

    if (checkInDate < todayDate) {
      setValidationError("A data de check-in não pode ser inferior ao dia de hoje.");
      return;
    }

    if (checkOutDate <= checkInDate) {
      setValidationError("A data de check-out deve ser posterior ao check-in.");
      return;
    }

    // Calculate total nights
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    const totalNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Retrieve active room info
    const selectedRoom = ROOMS.find(r => r.id === roomType);
    if (!selectedRoom) return;

    setIsSearching(true);

    // Simulate luxury search engine animation
    setTimeout(() => {
      const baseTotal = selectedRoom.price * totalNights * roomsCount;
      const luxuryTax = Math.round(baseTotal * 0.05); // 5% luxury tourism tax
      const finalGrandTotal = baseTotal + luxuryTax;

      setBookingSummary({
        roomName: selectedRoom.name,
        roomImage: selectedRoom.image,
        dailyRate: selectedRoom.price,
        totalNights,
        baseTotal,
        luxuryTax,
        finalGrandTotal,
        guestsCount: guests,
        roomsCount,
        formattedCheckIn: checkInDate.toLocaleDateString('pt-BR'),
        formattedCheckOut: checkOutDate.toLocaleDateString('pt-BR')
      });
      setIsSearching(false);
    }, 1200);
  };

  const handleWhatsAppInstantBooking = () => {
    if (!bookingSummary) return;
    const msg = `Olá! Gostaria de confirmar uma cotação no Imperial Hotel Marabá:\n\n` +
      `🏨 *Acomodação:* ${bookingSummary.roomName}\n` +
      `📅 *Check-in:* ${bookingSummary.formattedCheckIn}\n` +
      `📅 *Check-out:* ${bookingSummary.formattedCheckOut}\n` +
      `🌙 *Noites:* ${bookingSummary.totalNights} diárias\n` +
      `👥 *Hóspedes:* ${bookingSummary.guestsCount} pessoa(s)\n` +
      `🔑 *Quartos:* ${bookingSummary.roomsCount}\n\n` +
      `💰 *Valor Estimado:* R$ ${bookingSummary.finalGrandTotal.toLocaleString('pt-BR')}\n\n` +
      `Gostaria de prosseguir com a reserva, por favor.`;
    
    const encodedText = encodeURIComponent(msg);
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="reservas" className="py-24 bg-luxury-dark text-white relative overflow-hidden">
      {/* Decorative Golden Ambient Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Simulador Inteligente</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
            Planeje Sua Estadia Exclusiva
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-white/60 text-base font-sans">
            Insira suas datas preferidas e o tipo de suíte desejada. Nosso simulador calcula os valores integrando taxas exclusivas de forma transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Search Inputs Panel: 7 Columns */}
          <div className="lg:col-span-7 bg-luxury-black/60 border border-luxury-gold/20 p-6 sm:p-10 rounded-sm backdrop-blur-md shadow-xl">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
              <ClipboardCheck className="text-luxury-gold" size={24} />
              <h3 className="font-serif text-xl sm:text-2xl font-bold">Verificar Disponibilidade</h3>
            </div>

            <form onSubmit={handleCheckAvailability} className="space-y-6">
              
              {/* Check-in and Check-out Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs text-white/50 tracking-wider uppercase font-semibold mb-2 font-sans flex items-center space-x-1.5">
                    <Calendar size={12} className="text-luxury-gold" />
                    <span>Check-In</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      setBookingSummary(null);
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-white/50 tracking-wider uppercase font-semibold mb-2 font-sans flex items-center space-x-1.5">
                    <Calendar size={12} className="text-luxury-gold" />
                    <span>Check-Out</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => {
                      setCheckOut(e.target.value);
                      setBookingSummary(null);
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans"
                  />
                </div>
              </div>

              {/* Guests and Rooms Configuration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs text-white/50 tracking-wider uppercase font-semibold mb-2 font-sans flex items-center space-x-1.5">
                    <Users size={12} className="text-luxury-gold" />
                    <span>Número de Hóspedes</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => {
                      setGuests(Number(e.target.value));
                      setBookingSummary(null);
                    }}
                    className="w-full bg-luxury-dark border border-white/10 rounded-sm px-4 py-3.5 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n} className="bg-luxury-black text-white">{n} Hóspede{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-white/50 tracking-wider uppercase font-semibold mb-2 font-sans flex items-center space-x-1.5">
                    <Home size={12} className="text-luxury-gold" />
                    <span>Número de Quartos</span>
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => {
                      setRoomsCount(Number(e.target.value));
                      setBookingSummary(null);
                    }}
                    className="w-full bg-luxury-dark border border-white/10 rounded-sm px-4 py-3.5 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n} className="bg-luxury-black text-white">{n} Quarto{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Room Type Selector */}
              <div className="flex flex-col">
                <label className="text-xs text-white/50 tracking-wider uppercase font-semibold mb-2 font-sans flex items-center space-x-1.5">
                  <Sparkles size={12} className="text-luxury-gold" />
                  <span>Tipo de Quarto</span>
                </label>
                <select
                  value={roomType}
                  onChange={(e) => {
                    setRoomType(e.target.value);
                    setBookingSummary(null);
                    onClearSelectedRoom(); // Clear preselected room state if user changes manually
                  }}
                  className="w-full bg-luxury-dark border border-white/10 rounded-sm px-4 py-3.5 text-white text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans appearance-none cursor-pointer"
                >
                  {ROOMS.map(room => (
                    <option key={room.id} value={room.id} className="bg-luxury-black text-white">
                      {room.name} - Diária: R$ {room.price.toLocaleString('pt-BR')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error Warning */}
              {validationError && (
                <div className="flex items-start space-x-2 bg-red-950/40 border border-red-500/40 p-4 rounded-sm text-red-200 text-xs sm:text-sm font-sans animate-pulse">
                  <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Form Button */}
              <button
                type="submit"
                disabled={isSearching}
                className="w-full flex items-center justify-center space-x-2 py-4 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black rounded-sm font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-luxury-gold/15 disabled:opacity-50"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-luxury-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Consultando Tarifário...</span>
                  </div>
                ) : (
                  <span>Ver Disponibilidade</span>
                )}
              </button>
            </form>
          </div>

          {/* Results Summary and Integration Setup: 5 Columns */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {bookingSummary ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white text-luxury-black p-6 sm:p-8 rounded-sm shadow-2xl border border-luxury-gold/20"
                >
                  <div className="flex items-center space-x-2 text-green-700 bg-green-50 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit border border-green-200">
                    <CheckCircle size={14} />
                    <span>Disponibilidade Confirmada</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 border-b border-luxury-gold/20 pb-3">
                    Resumo do Seu Orçamento
                  </h3>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex items-start space-x-3 bg-luxury-beige/50 p-3 rounded-sm border border-luxury-gold/10">
                      <img
                        src={bookingSummary.roomImage}
                        alt={bookingSummary.roomName}
                        className="w-20 h-16 object-cover rounded-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <strong className="block text-luxury-black font-semibold text-base">{bookingSummary.roomName}</strong>
                        <span className="text-xs text-luxury-gray">{bookingSummary.roomsCount} quarto(s) para {bookingSummary.guestsCount} hóspedes</span>
                      </div>
                    </div>

                    <div className="flex justify-between border-b border-luxury-gold/15 pb-2 text-luxury-gray">
                      <span>Período Estimado</span>
                      <span className="font-semibold text-luxury-black">{bookingSummary.formattedCheckIn} - {bookingSummary.formattedCheckOut}</span>
                    </div>

                    <div className="flex justify-between border-b border-luxury-gold/15 pb-2 text-luxury-gray">
                      <span>Duração da Estadia</span>
                      <span className="font-semibold text-luxury-black">{bookingSummary.totalNights} Noite{bookingSummary.totalNights > 1 ? 's' : ''}</span>
                    </div>

                    <div className="flex justify-between border-b border-luxury-gold/15 pb-2 text-luxury-gray">
                      <span>Tarifa Diária (Por quarto)</span>
                      <span className="font-semibold text-luxury-black">R$ {bookingSummary.dailyRate.toLocaleString('pt-BR')}</span>
                    </div>

                    <div className="flex justify-between border-b border-luxury-gold/15 pb-2 text-luxury-gray">
                      <span>Subtotal Hospedagem</span>
                      <span className="font-semibold text-luxury-black">R$ {bookingSummary.baseTotal.toLocaleString('pt-BR')}</span>
                    </div>

                    <div className="flex justify-between border-b border-luxury-gold/15 pb-2 text-luxury-gray">
                      <span>Taxa de Serviço (5%)</span>
                      <span className="font-semibold text-luxury-black">R$ {bookingSummary.luxuryTax.toLocaleString('pt-BR')}</span>
                    </div>

                    <div className="flex justify-between pt-2 text-base sm:text-lg">
                      <span className="font-bold font-serif">Valor Total Estimado</span>
                      <span className="font-bold text-luxury-gold-dark font-serif text-lg sm:text-xl">
                        R$ {bookingSummary.finalGrandTotal.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {/* Immediate Action - WhatsApp booking */}
                  <button
                    onClick={handleWhatsAppInstantBooking}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-sm font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-md mb-6"
                  >
                    <MessageSquare size={16} />
                    <span>Concluir pelo WhatsApp</span>
                  </button>

                  {/* Future Booking Engine Connections (Requested Integration Layouts) */}
                  <div className="border-t border-luxury-gold/20 pt-4">
                    <span className="text-[10px] tracking-wider text-luxury-gray uppercase font-bold block mb-3">
                      Canais de Integração Futura (API / PMS):
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs">
                      {[
                        { name: "Booking.com API", details: "Conexão de Canais" },
                        { name: "Cloudbeds PMS", details: "Reservas de Quartos" },
                        { name: "SiteMinder Channel", details: "Gestor Tarifário" },
                        { name: "HotelRunner Engine", details: "Motor Integrado" }
                      ].map((integ) => (
                        <div
                          key={integ.name}
                          className="border border-luxury-gold/20 hover:border-luxury-gold/60 p-2 rounded-sm text-left bg-luxury-cream transition-colors duration-300"
                        >
                          <strong className="block text-luxury-black font-semibold">{integ.name}</strong>
                          <span className="text-[9px] text-luxury-gray">{integ.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ) : (
                <div className="bg-luxury-black/40 border border-white/5 p-8 rounded-sm backdrop-blur-md shadow-lg h-full flex flex-col justify-center items-center text-center min-h-[300px]">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mb-6">
                    <Sparkles className="animate-pulse" size={30} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Simule Seu Orçamento</h3>
                  <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                    Insira as datas de check-in e check-out ideais ao lado e visualize um orçamento completo com todas as taxas calculadas automaticamente.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
