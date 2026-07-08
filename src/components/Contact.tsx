import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTEL_INFO } from '../data';
import { Phone, Mail, MessageSquare, Instagram, Facebook, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      
      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');

      // Auto dismiss success screen after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleWhatsAppChat = () => {
    const encodedText = encodeURIComponent(HOTEL_INFO.whatsappDefaultMessage);
    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-luxury-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Central de Atendimento</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mt-2 tracking-tight">
            Fale Conosco
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-gray text-base font-sans">
            Seja para tirar dúvidas sobre sua hospedagem, solicitar informações sobre tarifas corporativas ou pacotes especiais, nossa equipe está sempre à disposição para ajudá-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column: 5 Columns */}
          <div className="lg:col-span-5 bg-luxury-dark text-white p-8 sm:p-10 rounded-sm border border-luxury-gold/20 flex flex-col justify-between shadow-xl">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-luxury-gold uppercase font-sans font-bold block mb-2">Canais Diretos</span>
                <h3 className="font-serif text-2xl font-bold mb-4">Informações &amp; Reservas</h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  Nossa equipe de recepção está pronta para fornecer todo o suporte necessário para garantir que sua estadia em Marabá seja confortável e tranquila.
                </p>
              </div>

              {/* Clickable Channels */}
              <div className="space-y-4">
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-black transition-colors duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-white/50 tracking-wider font-bold">Ligue Agora</span>
                    <span className="font-semibold text-sm sm:text-base group-hover:text-luxury-gold transition-colors duration-300">{HOTEL_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="flex items-center space-x-4 p-4 rounded-sm bg-white/5 border border-white/10 hover:border-luxury-gold hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-black transition-colors duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-white/50 tracking-wider font-bold">E-mail Corporativo</span>
                    <span className="font-semibold text-sm sm:text-base group-hover:text-luxury-gold transition-colors duration-300 truncate max-w-[200px] sm:max-w-none">{HOTEL_INFO.email}</span>
                  </div>
                </a>

                {/* Big WhatsApp Card */}
                <button
                  onClick={handleWhatsAppChat}
                  className="w-full flex items-center space-x-4 p-4 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300 group text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare size={18} fill="currentColor" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#25D366] tracking-wider font-bold">WhatsApp Direto</span>
                    <span className="font-bold text-sm sm:text-base text-white group-hover:text-luxury-gold transition-colors duration-300">Conversar Conosco</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/40 tracking-widest uppercase font-sans font-semibold">Siga-nos:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all duration-300"
                  aria-label="Acesse nosso Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all duration-300"
                  aria-label="Acesse nosso Facebook"
                >
                  <Facebook size={18} />
                </a>
                {/* Custom TikTok Vector Icon */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white/80 hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all duration-300"
                  aria-label="Acesse nosso TikTok"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.32A121.55,121.55,0,0,0,410.15,103.77a120.39,120.39,0,0,0,37.85,6.14Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column: 7 Columns */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-luxury-gold/15 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-luxury-black mb-1">Envie uma Mensagem</h3>
                    <p className="text-xs sm:text-sm text-luxury-gray font-sans">Preencha o formulário abaixo e receba atendimento personalizado em seu e-mail ou telefone em minutos.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs text-luxury-gray uppercase tracking-widest font-bold mb-2 font-sans">Seu Nome</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Constança Vasconcelos"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-luxury-cream border border-luxury-gold/15 rounded-sm px-4 py-3.5 text-luxury-black text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs text-luxury-gray uppercase tracking-widest font-bold mb-2 font-sans">Seu Telefone</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-luxury-cream border border-luxury-gold/15 rounded-sm px-4 py-3.5 text-luxury-black text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-luxury-gray uppercase tracking-widest font-bold mb-2 font-sans">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: seu-nome@dominio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-luxury-cream border border-luxury-gold/15 rounded-sm px-4 py-3.5 text-luxury-black text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs text-luxury-gray uppercase tracking-widest font-bold mb-2 font-sans">Sua Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva detalhes de sua solicitação, pacotes de interesse ou dúvidas gerais..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-luxury-cream border border-luxury-gold/15 rounded-sm px-4 py-3.5 text-luxury-black text-sm focus:outline-none focus:border-luxury-gold transition-colors duration-300 font-sans placeholder:text-zinc-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-luxury-black hover:bg-luxury-gold text-white hover:text-luxury-black rounded-sm font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md disabled:opacity-50 ml-auto cursor-pointer"
                  >
                    {isSending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center border-2 border-green-200">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-luxury-black">Mensagem Enviada!</h3>
                  <p className="text-sm text-luxury-gray leading-relaxed max-w-sm font-sans">
                    Agradecemos seu contato. Suas informações foram enviadas com sucesso diretamente para nossa recepção. Responderemos o mais breve possível.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-bold font-sans tracking-widest uppercase text-luxury-gold hover:text-luxury-gold-dark transition-colors duration-300"
                  >
                    Enviar Outro Formulário
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>

        </div>

      </div>
    </section>
  );
}
