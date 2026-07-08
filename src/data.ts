import { Room, Service, Testimonial, FAQ, GalleryItem, Promotion } from './types';

export const HOTEL_INFO = {
  name: "Imperial Hotel",
  slogan: "Sua melhor escolha em conforto, excelente localização e atendimento de qualidade em Marabá.",
  whatsappNumber: "+5594984309229",
  whatsappDefaultMessage: "Olá! Gostaria de obter informações sobre hospedagem e reservas no Imperial Hotel em Marabá.",
  phone: "+55 (94) 98430-9229",
  email: "contato@imperialhotelmaraba.com.br",
  address: "Av. Mal. Deodoro, 1923 - Marabá Pioneira, Marabá - PA, 68500-020",
  workingHours: "Atendimento Geral: 24h | Reservas: Segunda a Domingo, das 8h às 22h",
  coordinates: { lat: -5.3524, lng: -49.1235 }, // Marabá Pioneira
  stats: [
    { label: "Avaliação Média", value: 3.6, suffix: " / 5.0" },
    { label: "Avaliações no Google", value: 171, suffix: " Opiniões" },
    { label: "Visualizações do Perfil", value: 10600, suffix: "+" },
    { label: "Acolhimento Comunitário", value: 100, suffix: "% LGBTQ+" }
  ]
};

export const HIGHLIGHTS = [
  {
    title: "Excelente Localização",
    description: "No coração da Marabá Pioneira, com fácil acesso aos principais pontos comerciais e turísticos da cidade.",
    iconName: "MapPin"
  },
  {
    title: "Quartos Confortáveis",
    description: "Ambientes climatizados, limpos e totalmente preparados para garantir o seu descanso absoluto.",
    iconName: "BedDouble"
  },
  {
    title: "Café da Manhã Completo",
    description: "Inicie seu dia com um buffet de café da manhã variado, com frutas frescas, sucos, pães e delícias locais.",
    iconName: "Coffee"
  },
  {
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade sem fio disponível gratuitamente em todos os apartamentos e áreas comuns.",
    iconName: "Wifi"
  },
  {
    title: "Estacionamento Disponível",
    description: "Estacione seu veículo com segurança, tranquilidade e total comodidade durante a sua hospedagem.",
    iconName: "Car"
  },
  {
    title: "Viagem de Negócios ou Lazer",
    description: "Estrutura completa e acolhedora ideal para quem viaja a trabalho, eventos ou para conhecer o Pará.",
    iconName: "ShieldCheck"
  }
];

export const ROOMS: Room[] = [
  {
    id: "suite-executiva",
    name: "Suíte Executiva Premium",
    description: "O mais alto padrão de conforto de nossa propriedade. Perfeita para executivos e casais que buscam mais espaço. Oferece cama King-Size, ar-condicionado split silencioso, mesa de trabalho dedicada, Smart TV de 55 polegadas, sofá aconchegante e frigobar completo.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
    amenities: [
      "Ar-condicionado Split",
      "Cama King-Size Confortável",
      "Mesa de Trabalho Executiva",
      "Smart TV 55\" com Streaming",
      "Wi-Fi Premium Gratuito",
      "Frigobar Abastecido",
      "Café da Manhã Completo Incluso",
      "Estacionamento Cortesia"
    ],
    price: 420,
    size: "40 m²",
    view: "Vista Panorâmica da Cidade",
    capacity: 2
  },
  {
    id: "suite-familia",
    name: "Suíte Família Confort",
    description: "Ideal para viagens em família ou pequenos grupos. Amplo quarto com uma confortável cama de casal e uma cama de solteiro extra, ar-condicionado potente, guarda-roupas, Smart TV e frigobar para manter suas bebidas sempre geladas.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
    amenities: [
      "Cama de Casal + Cama de Solteiro",
      "Ar-condicionado",
      "Frigobar Privativo",
      "Wi-Fi de Alta Velocidade",
      "Smart TV de Led",
      "Banheiro Privativo Espaçoso",
      "Café da Manhã Completo Incluso",
      "Estacionamento Cortesia"
    ],
    price: 350,
    size: "35 m²",
    view: "Vista para a Região Pioneira",
    capacity: 3
  },
  {
    id: "standard-casal",
    name: "Quarto Standard Casal",
    description: "Conforto ideal para uma excelente noite de sono a dois. Equipado com uma cama de casal aconchegante, banheiro privativo completo com chuveiro elétrico, ar-condicionado, Wi-Fi gratuito e Smart TV de tela plana.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200",
    amenities: [
      "Cama de Casal Aconchegante",
      "Ar-condicionado",
      "Wi-Fi Gratuito",
      "Smart TV",
      "Frigobar",
      "Chuveiro Elétrico",
      "Café da Manhã Completo Incluso",
      "Serviço de Quarto Ágil"
    ],
    price: 260,
    size: "22 m²",
    view: "Vista Cidade Marabá",
    capacity: 2
  },
  {
    id: "standard-solteiro",
    name: "Quarto Standard Solteiro",
    description: "Excelente opção funcional e econômica para quem viaja sozinho a trabalho ou negócios. Oferece uma confortável cama de solteiro, ar-condicionado eficiente, mesa para notebook, TV e internet sem fio dedicada.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200",
    amenities: [
      "Cama de Solteiro Confortável",
      "Ar-condicionado",
      "Wi-Fi Gratuito",
      "Mesa de Trabalho Compacta",
      "TV de Tela Plana",
      "Frigobar",
      "Banheiro Privativo",
      "Café da Manhã Completo Incluso"
    ],
    price: 180,
    size: "18 m²",
    view: "Vista Interna do Hotel",
    capacity: 1
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    alt: "Suíte Executiva Premium",
    category: "quartos"
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800",
    alt: "Suíte Família Confort",
    category: "quartos"
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800",
    alt: "Quarto Standard Casal",
    category: "quartos"
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    alt: "Recepção e Lobby de Entrada",
    category: "recepcao"
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    alt: "Lounge de Estar e Convivência",
    category: "recepcao"
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
    alt: "Salão de Café da Manhã",
    category: "restaurante"
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-refeicoes",
    name: "Café da Manhã Completo",
    description: "Incluso na sua diária. Um buffet variado contendo frutas da estação, pães fresquinhos, bolos caseiros, sucos naturais e pratos típicos regionais.",
    iconName: "Coffee"
  },
  {
    id: "srv-wifi",
    name: "Wi-Fi Gratuito de Alta Velocidade",
    description: "Conexão rápida disponível sem custos adicionais em todos os quartos e áreas sociais, ideal para reuniões virtuais e lazer.",
    iconName: "Wifi"
  },
  {
    id: "srv-estacionamento",
    name: "Estacionamento Próprio",
    description: "Estacione seu automóvel com segurança no nosso pátio próprio monitorado, trazendo toda a comodidade para quem viaja de carro.",
    iconName: "Car"
  },
  {
    id: "srv-room",
    name: "Atendimento & Recepção 24h",
    description: "Equipe sempre disponível na recepção pronta para receber você a qualquer hora do dia ou da noite com toda a hospitalidade paraense.",
    iconName: "ConciergeBell"
  },
  {
    id: "srv-climatizacao",
    name: "Ar-Condicionado nos Quartos",
    description: "Equipamentos modernos em todas as acomodações para manter o clima fresco e agradável contra o calor de Marabá.",
    iconName: "Wind"
  },
  {
    id: "srv-lgbtq",
    name: "Inclusão & Diversidade",
    description: "Somos uma empresa acolhedora da comunidade LGBTQ+, garantindo respeito e segurança de forma integral a todos os hóspedes.",
    iconName: "ShieldCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Marcos Vinícius",
    location: "Belém, PA",
    comment: "Excelente custo-benefício em Marabá! Localização perfeita perto de tudo no centro da Pioneira, quarto com ar-condicionado excelente e um café da manhã muito completo. Sempre me hospedo aqui a trabalho.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: "t-2",
    name: "Fernanda Costa",
    location: "Goiânia, GO",
    comment: "O Imperial Hotel se destaca pela hospitalidade. Equipe muito acolhedora e prestativa. O quarto estava limpíssimo e a internet funcionou perfeitamente para minhas chamadas de vídeo. Recomendo muito!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: "t-3",
    name: "Roberto Almeida",
    location: "Marabá, PA",
    comment: "Sempre recomendo para parceiros comerciais quando vêm visitar nossa empresa na cidade. O estacionamento seguro é excelente e o check-in é super ágil. Parabéns à gerência pelo atendimento de qualidade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "promo-1",
    title: "Tarifa Corporativa",
    subtitle: "Desconto para Empresas",
    description: "Viajando a trabalho ou negócios para Marabá? Cadastre sua empresa e garanta tarifas especiais fixas de segunda a sexta, além de faturamento facilitado para sua empresa.",
    discountCode: "IMPERIALBIZ",
    validity: "Válido por tempo indeterminado",
    bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
  },
  {
    id: "promo-2",
    title: "Estadia Prolongada",
    subtitle: "A partir de 4 Diárias",
    description: "Programe sua viagem de lazer ou negócios com estadia de 4 ou mais diárias e ganhe 15% de desconto no valor total da sua reserva, com check-out estendido cortesia.",
    discountCode: "STAYMARABA",
    validity: "Válido para estadias até Dezembro de 2026",
    bgImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "Quais são os horários padrão de check-in e check-out?",
    answer: "Nosso horário de check-in oficial se inicia às 14h. O horário limite de check-out é até as 12h do dia de saída. Caso precise de horários especiais, converse com nossa recepção."
  },
  {
    id: "faq-2",
    question: "O café da manhã está incluso no valor da diária?",
    answer: "Sim! Um café da manhã completo e saboroso está incluso no valor de todas as diárias do Imperial Hotel."
  },
  {
    id: "faq-3",
    question: "O hotel dispõe de estacionamento?",
    answer: "Sim, possuímos estacionamento próprio disponível gratuitamente para os nossos hóspedes durante todo o período de sua estadia."
  },
  {
    id: "faq-4",
    question: "Como funciona a política de cancelamento de reservas?",
    answer: "As reservas podem ser canceladas gratuitamente até 24 horas antes do check-in planejado. Cancelamentos tardios ou não comparecimento podem estar sujeitos a cobrança da primeira diária."
  },
  {
    id: "faq-5",
    question: "O Imperial Hotel aceita pets?",
    answer: "Para manter a tranquilidade e a limpeza de todos os ambientes para nossos hóspedes de negócios, aceitamos apenas animais de serviço sob consulta e notificação prévia."
  }
];
