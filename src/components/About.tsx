import { motion } from 'motion/react';
import { Target, Compass, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Hospitalidade Genuína",
      description: "Acolhemos todos os nossos hóspedes de negócios ou lazer com o caloroso espírito de serviço e amizade paraense.",
      icon: Award
    },
    {
      title: "Respeito e Inclusão",
      description: "Temos imenso orgulho em ser uma empresa que acolhe integralmente a comunidade LGBTQ+ e valoriza a diversidade.",
      icon: Compass
    },
    {
      title: "Praticidade e Conforto",
      description: "Oferecemos facilidades essenciais para a sua estadia, unindo quartos aconchegantes com tarifas justas.",
      icon: Target
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-luxury-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid: History and Elegant Editorial Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Text Content: 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-semibold">Uma Herança de Conforto</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-black tracking-tight leading-tight">
              Sua estadia com o descanso e a atenção que você merece
            </h2>
            <div className="w-16 h-0.5 bg-luxury-gold my-4"></div>
            
            <p className="text-luxury-gray text-base leading-relaxed font-sans">
              Localizado na histórica região da Marabá Pioneira, o <strong className="text-luxury-black font-semibold">Imperial Hotel</strong> nasceu para oferecer o equilíbrio perfeito entre conforto moderno e a calorosa hospitalidade paraense. Seja para uma viagem de lazer ou negócios, disponibilizamos quartos projetados com carinho para o seu descanso, com fácil acesso aos principais centros comerciais, vias e atrativos turísticos da cidade.
            </p>
            <p className="text-luxury-gray text-base leading-relaxed font-sans">
              Nossa missão é acolher com carinho e qualidade todos os hóspedes, oferecendo serviços fundamentais como café da manhã completo incluso, Wi-Fi sem fio gratuito e estacionamento seguro. Prezamos pelo respeito, diversidade e excelência de atendimento, sendo uma empresa acolhedora à comunidade LGBTQ+.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-luxury-gold/20">
              <div>
                <span className="block font-serif text-3xl font-bold text-luxury-gold">100%</span>
                <span className="text-xs text-luxury-gray uppercase tracking-widest font-sans">Acolhedor</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-luxury-gold">Grátis</span>
                <span className="text-xs text-luxury-gray uppercase tracking-widest font-sans">Wi-Fi &amp; Vaga</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-luxury-gold">Incluso</span>
                <span className="text-xs text-luxury-gray uppercase tracking-widest font-sans">Café Completo</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Image Collage: 5 Columns */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="rounded-sm overflow-hidden shadow-md border border-luxury-gold/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600"
                    alt="Lobby do Hotel"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-sm overflow-hidden shadow-md border border-luxury-gold/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600"
                    alt="Área externa espreguiçadeiras"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 pt-8"
              >
                <div className="rounded-sm overflow-hidden shadow-md border border-luxury-gold/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600"
                    alt="Serviço Premium"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-sm overflow-hidden shadow-md border border-luxury-gold/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600"
                    alt="Café imperial"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Absolute Decorative Frame Accent */}
            <div className="absolute -inset-4 border border-luxury-gold/20 rounded-sm pointer-events-none -z-10 translate-x-2 translate-y-2"></div>
          </div>

        </div>

        {/* Lower Grid: Mission, Vision, and Values in a bento-style design */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] text-luxury-gold uppercase font-sans font-medium">Nossos Pilares</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-luxury-black mt-1">Missão, Visão &amp; Valores</h3>
            <div className="w-12 h-0.5 bg-luxury-gold/50 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-luxury-gold/10 hover:border-luxury-gold p-8 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md group flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-luxury-beige text-luxury-gold flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-colors duration-300">
                    <Icon size={26} />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-luxury-black mb-3">
                    {val.title}
                  </h4>
                  <p className="text-sm text-luxury-gray leading-relaxed font-sans">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
