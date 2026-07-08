import { motion } from 'motion/react';
import { HOTEL_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, Map } from 'lucide-react';

export default function Location() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x92c2b3e8a5a67f0f%3A0xe54e3dbe16075fbd!2sMarab%C3%A1%20-%20PA!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c2b3e8a5a67f0f%3A0xe54e3dbe16075fbd!2sMarab%C3%A1%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(HOTEL_INFO.address)}`;

  const contactItems = [
    {
      icon: MapPin,
      title: "Endereço",
      value: HOTEL_INFO.address,
      link: googleMapsDirectionsUrl,
      clickable: true,
      label: "Como Chegar"
    },
    {
      icon: Phone,
      title: "Telefone de Reservas",
      value: HOTEL_INFO.phone,
      link: `tel:${HOTEL_INFO.phone.replace(/[^0-9+]/g, '')}`,
      clickable: true,
      label: "Ligar Agora"
    },
    {
      icon: Mail,
      title: "E-mail Geral",
      value: HOTEL_INFO.email,
      link: `mailto:${HOTEL_INFO.email}`,
      clickable: true,
      label: "Enviar E-mail"
    },
    {
      icon: Clock,
      title: "Horários de Atendimento",
      value: HOTEL_INFO.workingHours,
      clickable: false
    }
  ];

  return (
    <section id="localizacao" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Localização Privilegiada</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black mt-2 tracking-tight">
            Sua Melhor Opção em Marabá
          </h2>
          <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-gray text-base font-sans">
            Situado no coração da Marabá Pioneira, o Imperial Hotel garante excelente mobilidade urbana, segurança e acesso rápido aos principais pontos comerciais, bancos, órgãos públicos e praças históricas da cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Info Side: 5 Columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.2em] font-sans font-bold text-luxury-gold uppercase block">Marabá Pioneira</span>
              <h3 className="font-serif text-2xl font-bold text-luxury-black">Localização Estratégica</h3>
              <p className="text-sm text-luxury-gray leading-relaxed font-sans">
                A localização privilegiada do hotel oferece fácil deslocamento terrestre para o Aeroporto de Marabá (SBA) e rodovias da região, facilitando a logística para hóspedes em viagens comerciais ou de lazer.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-5 bg-white border border-luxury-gold/10 hover:border-luxury-gold/40 rounded-sm flex items-start space-x-4 transition-all duration-300 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-sm bg-luxury-beige text-luxury-gold flex items-center justify-center shrink-0 mt-1">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <strong className="block text-xs font-sans tracking-wide text-luxury-black uppercase font-bold">
                        {item.title}
                      </strong>
                      <p className="text-sm text-luxury-gray leading-normal font-sans font-medium">
                        {item.value}
                      </p>
                      {item.clickable && item.link && (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : '_self'}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="inline-flex items-center space-x-1 text-xs text-luxury-gold hover:text-luxury-gold-dark font-sans font-bold tracking-wider uppercase transition-colors duration-300 pt-1"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs">→</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Map Side: 7 Columns */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] relative rounded-sm overflow-hidden shadow-xl border border-luxury-gold/20">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização do Imperial Hotel"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>

            {/* Overlaid Floating Button */}
            <div className="absolute bottom-6 right-6">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 bg-luxury-black/90 backdrop-blur-sm text-white hover:bg-luxury-gold hover:text-luxury-black border border-luxury-gold transition-all duration-300 rounded-sm font-sans text-xs font-bold tracking-wider uppercase shadow-lg"
              >
                <Map size={14} />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
