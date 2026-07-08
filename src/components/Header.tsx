import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO } from '../data';
// @ts-ignore
import logoImg from '../assets/images/imperial_logo_1783538548363.jpg';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Quartos', href: '#quartos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
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

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-md py-4 shadow-lg border-b border-luxury-gold/20'
            : 'bg-gradient-to-b from-luxury-black/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center border border-luxury-gold/30 rounded-sm bg-luxury-black overflow-hidden group-hover:border-luxury-gold/60 transition-colors duration-300">
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

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-luxury-gold tracking-wider uppercase transition-colors duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center space-x-2 text-white/80 hover:text-luxury-gold transition-colors duration-300 text-sm font-medium mr-2"
            >
              <Phone size={16} className="text-luxury-gold" />
              <span className="hidden lg:inline">{HOTEL_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="flex items-center space-x-2 px-5 py-2.5 bg-transparent border border-luxury-gold text-luxury-gold rounded-sm hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-sans text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-luxury-gold/20"
            >
              <Calendar size={16} />
              <span>Reservar</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="p-2 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black rounded-sm transition-all duration-300 md:hidden"
              aria-label="Reservar"
            >
              <Calendar size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-luxury-gold transition-colors duration-300 focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-luxury-black/95 backdrop-blur-md transition-all duration-500 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <nav className="flex flex-col space-y-5 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl font-serif tracking-widest text-white hover:text-luxury-gold transition-colors duration-300 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center space-y-6">
            <div className="h-px w-24 bg-luxury-gold/30"></div>
            <a
              href={`tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center space-x-2 text-white/90 hover:text-luxury-gold text-base"
            >
              <Phone size={18} className="text-luxury-gold" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full max-w-xs flex items-center justify-center space-x-2 py-3 bg-luxury-gold text-luxury-black rounded-sm hover:bg-luxury-gold-dark transition-all duration-300 font-sans text-sm font-bold tracking-widest uppercase shadow-lg shadow-luxury-gold/20"
            >
              <Calendar size={18} />
              <span>Reservar Agora</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
