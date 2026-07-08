import { useState, useEffect } from 'react';
import { HOTEL_INFO } from './data';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  // Set page meta tags, Open Graph, and browser title dynamically for SEO optimization
  useEffect(() => {
    document.title = `${HOTEL_INFO.name} | Hospedagem de Conforto e Qualidade em Marabá`;

    // Dynamic Meta Tags injection
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Website oficial do Imperial Hotel em Marabá - PA. Conforto, excelente localização na Marabá Pioneira e atendimento de alta qualidade.";
    document.head.appendChild(metaDescription);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "Imperial Hotel Marabá | Hospedagem com Conforto e Qualidade";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "Oferecemos acomodações confortáveis, café da manhã completo incluso, Wi-Fi gratuito e estacionamento para sua viagem de negócios ou lazer em Marabá.";
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200";
    document.head.appendChild(ogImage);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
    };
  }, []);

  // Handle selected room trigger (scroll to simulator, pre-set room values)
  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    
    // Smooth scroll down to the reservation simulator
    const bookingSection = document.getElementById('reservas');
    if (bookingSection) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearSelectedRoom = () => {
    setSelectedRoomId(null);
  };

  const handleOpenBooking = () => {
    // Scroll to booking simulator directly
    const bookingSection = document.getElementById('reservas');
    if (bookingSection) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Structured Data Schema.org definition for Hotel
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": HOTEL_INFO.name,
    "description": "Imperial Hotel em Marabá - PA oferece acomodações confortáveis, café da manhã completo, Wi-Fi gratuito e excelente localização na Marabá Pioneira.",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    "telephone": HOTEL_INFO.phone,
    "email": HOTEL_INFO.email,
    "priceRange": "R$ 180 - R$ 420",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Mal. Deodoro, 1923 - Marabá Pioneira",
      "addressLocality": "Marabá",
      "addressRegion": "PA",
      "postalCode": "68500-020",
      "addressCountry": "BR"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3.6",
      "bestRating": "5"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Café da Manhã Completo",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wi-Fi Gratuito",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Estacionamento Próprio",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ar Condicionado",
        "value": true
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-luxury-cream text-luxury-black font-sans selection:bg-luxury-gold selection:text-luxury-black antialiased">
      
      {/* Schema.org Structured Data Injector */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Header and Navbar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Layout Sections */}
      <main>
        {/* Home/Hero and Highlights Grid */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Section (Heritage, Collage, Pillars) */}
        <About />

        {/* Dynamic Interactive Stats Banner Row */}
        <section className="py-16 bg-luxury-dark text-white border-t border-b border-luxury-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black to-transparent opacity-50 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {HOTEL_INFO.stats.map((stat) => (
                <div key={stat.label} className="stat-card text-left group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-gold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {stat.value.toLocaleString('pt-BR')}{stat.suffix}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-sans font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Listing (Amenities, Prices, and Pre-select hooks) */}
        <Rooms onSelectRoom={handleSelectRoom} />

        {/* Gallery Section with advanced filter tabs and lightbox carousel */}
        <Gallery />

        {/* Booking & Simulation Reservation Engine (Taxes, future APIs, WhatsApp CTA) */}
        <Booking selectedRoomId={selectedRoomId} onClearSelectedRoom={handleClearSelectedRoom} />

        {/* Services & Luxuries Grid */}
        <Services />

        {/* Promotions and Special Season Packages */}
        <Promotions onRedeemOffer={handleSelectRoom} />

        {/* Customer Reviews & Ratings Slider Carousel */}
        <Reviews />

        {/* Embedded Interactive Vector Map and Access Coordinates */}
        <Location />

        {/* Frequently Asked Questions (FAQ) Accordions */}
        <FAQ />

        {/* Contact Form & Messaging center */}
        <Contact />
      </main>

      {/* Footer (Quick links, Newsletter form, and policies) */}
      <Footer />

      {/* Persistent Floating Utility Components */}
      <ScrollToTop />
      <WhatsAppButton />

    </div>
  );
}
