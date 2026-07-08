import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTEL_INFO } from '../data';
import { Instagram, Facebook, Send, ShieldCheck, Mail } from 'lucide-react';
// @ts-ignore
import logoImg from '../assets/images/imperial_logo_1783538548363.jpg';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate luxury newsletter subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');

      setTimeout(() => {
        setIsSubscribed(false);
      }, 5500);
    }, 1200);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Quartos', href: '#quartos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Depoimentos', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#09090a] text-white/70 py-16 border-t border-luxury-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Column 1: Brand Logo & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="flex items-center space-x-2 group w-fit">
              <div className="w-10 h-10 flex items-center justify-center border border-luxury-gold/30 rounded-sm bg-luxury-black overflow-hidden group-hover:border-luxury-gold/60 transition-colors duration-300">
                <img
                  src={logoImg}
                  alt="Imperial Logo"
                  className="w-full h-full object-cover mix-blend-screen scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.2em] font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                  IMPERIAL
                </span>
                <span className="text-[9px] tracking-[0.4em] text-luxury-gold uppercase -mt-1 font-sans">
                  Hotel Marabá
                </span>
              </div>
            </a>
            <p className="text-sm text-white/50 leading-relaxed font-sans pr-4">
              O Imperial Hotel em Marabá oferece conforto, qualidade e uma excelente localização no coração da Marabá Pioneira, sendo o local ideal para sua estadia de negócios ou lazer.
            </p>
            
            {/* Social Icons inside Footer */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-luxury-gold text-white/60 hover:text-luxury-gold rounded-full transition-colors duration-300" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-luxury-gold text-white/60 hover:text-luxury-gold rounded-full transition-colors duration-300" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/10 hover:border-luxury-gold text-white/60 hover:text-luxury-gold rounded-full transition-colors duration-300" aria-label="TikTok">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0h88a121.18,121.18,0,0,0,1.86,22.32A121.55,121.55,0,0,0,410.15,103.77a120.39,120.39,0,0,0,37.85,6.14Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white border-l-2 border-luxury-gold pl-3">
              Links Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs sm:text-sm text-white/50 hover:text-luxury-gold transition-colors duration-300 py-0.5 font-sans"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter Subscriptions (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white border-l-2 border-luxury-gold pl-3">
              Newsletter Exclusiva
            </h4>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              Inscreva seu endereço de e-mail corporativo ou pessoal para receber cartas informativas com ofertas restritas e datas preferenciais do resort.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="newsletter-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <div className="relative flex-grow">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                      type="email"
                      required
                      placeholder="Ex: seu-nome@dominio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-luxury-gold focus:outline-none rounded-sm pl-10 pr-4 py-3 text-sm text-white font-sans transition-colors duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-sans font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 shadow-md shrink-0 cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-luxury-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>Inscrever</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center space-x-3 bg-green-950/20 border border-green-500/30 p-3.5 rounded-sm text-green-200 text-xs sm:text-sm font-sans"
                >
                  <ShieldCheck size={18} className="text-green-500 shrink-0" />
                  <span>Seu e-mail foi cadastrado! Desfrute das vantagens.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Legal Policies and Copyright Clause Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-white/40 gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="hover:text-luxury-gold transition-colors duration-300 font-sans">
              Políticas de Privacidade
            </a>
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="hover:text-luxury-gold transition-colors duration-300 font-sans">
              Termos de Uso do Resort
            </a>
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="hover:text-luxury-gold transition-colors duration-300 font-sans">
              Políticas de Cookies
            </a>
          </div>

          <div className="font-sans">
            &copy; {new Date().getFullYear()} {HOTEL_INFO.name}. Todos os direitos reservados. Desenvolvido para fins demonstrativos e de simulação premium.
          </div>
        </div>

      </div>
    </footer>
  );
}
