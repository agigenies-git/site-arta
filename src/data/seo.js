// ===== SEO do site — foco: Clínica de Odontologia em Passo Fundo =====

export const BASE_URL = 'https://artaodontologia.com.br'

export const SEO = {
  '/': {
    title: 'Clínica de Odontologia em Passo Fundo | Arta Odontologia',
    description:
      'Clínica de odontologia em Passo Fundo (RS). Endodontia, Ortodontia, Implantes, Clareamento, Harmonização Orofacial, Ozonioterapia, Odontopediatria e mais. Agende sua consulta!',
    keywords:
      'clínica de odontologia em Passo Fundo, dentista em Passo Fundo, implantes Passo Fundo, ortodontia Passo Fundo, harmonização orofacial Passo Fundo, ozonioterapia Passo Fundo, endodontia Passo Fundo, odontopediatria Passo Fundo',
    h1: 'Clínica de Odontologia em Passo Fundo',
  },
  '/profissionais': {
    title: 'Profissionais | Clínica de Odontologia em Passo Fundo – Arta',
    description:
      'Conheça a equipe da Arta Odontologia em Passo Fundo: dentistas com especializações, mestrado, doutorado e docência universitária.',
    keywords: 'dentistas em Passo Fundo, equipe odontológica Passo Fundo, clínica de odontologia em Passo Fundo',
    h1: 'Profissionais da clínica de odontologia em Passo Fundo',
  },
  '/areas-de-atuacao': {
    title: 'Áreas de Atuação | Dentista em Passo Fundo – Arta Odontologia',
    description:
      '10 especialidades da nossa clínica de odontologia em Passo Fundo: Endodontia, Ortodontia, Implantes, Clareamento, Profilaxia, Cirurgias Estéticas, Odontopediatria, Ortopedia Funcional, Harmonização Orofacial e Ozonioterapia.',
    keywords:
      'tratamento de canal Passo Fundo, aparelho ortodôntico Passo Fundo, implante dentário Passo Fundo, harmonização orofacial Passo Fundo, ozonioterapia Passo Fundo, clareamento dental Passo Fundo, odontopediatra Passo Fundo',
    h1: 'Áreas de atuação da clínica de odontologia em Passo Fundo',
  },
  '/casos-clinicos': {
    title: 'Casos Clínicos & Transformações do Sorriso | Arta Odontologia',
    description:
      'Veja resultados clínicos reais da Arta Odontologia em Passo Fundo: cirurgias gengivais estéticas, implantes, próteses fixas, facetas e clareamento dental.',
    keywords:
      'casos clínicos odontologia Passo Fundo, antes e depois dentista Passo Fundo, cirurgia gengival antes e depois, implantes dentários casos clínicos, prótese sobre implante Passo Fundo',
    h1: 'Casos Clínicos da Arta Odontologia',
  },
  '/entrevistas': {
    title: 'Entrevistas e Podcasts | Arta Odontologia – Passo Fundo',
    description:
      'Ouça as entrevistas e participações dos cirurgiões-dentistas da Arta Odontologia em rádios e podcasts (Rádio UPF + e Spotify) sobre implantes dentários, saúde bucal e inovações.',
    keywords:
      'entrevistas odontologia Passo Fundo, podcast odontologia Spotify, rádio UPF implantes dentários, Dr Cristiano Magagnin Arta Odontologia, tecnologia odontológica',
    h1: 'Entrevistas e Podcasts da Arta Odontologia',
  },
  '/novidades': {
    title: 'Novidades | Arta Odontologia – Clínica de Odontologia em Passo Fundo',
    description:
      'Novidades da Arta Odontologia: mídia, entrevistas, casos clínicos, depoimentos e publicações científicas do nosso time em Passo Fundo.',
    keywords: 'novidades clínica de odontologia em Passo Fundo, casos clínicos odontologia, entrevistas Arta Odontologia',
    h1: 'Novidades da clínica de odontologia em Passo Fundo',
  },
}

// ===== FAQ (conteúdo factual — usado na página e no schema FAQPage) =====
export const FAQ = [
  {
    q: 'Onde fica a Arta Odontologia?',
    a: 'A Arta Odontologia fica na Rua Uruguai, 1932 – Sala 402, no Centro de Passo Fundo – RS (CEP 99010-111).',
  },
  {
    q: 'Quais são os horários de funcionamento?',
    a: 'De segunda a sexta, das 8h às 12h e das 13h30 às 18h. Sábado e domingo a clínica permanece fechada.',
  },
  {
    q: 'Quais especialidades a clínica de odontologia em Passo Fundo oferece?',
    a: 'São 10 áreas de atuação: Tratamento Endodôntico (canal), Aparelhos Ortodônticos, Implantes e Próteses, Clareamento Dental, Profilaxia e tratamento das gengivas, Cirurgias Gengivais Estéticas, Odontopediatria, Ortopedia Funcional dos Maxilares, Harmonização Orofacial e Ozonioterapia.',
  },
  {
    q: 'Como agendar uma consulta?',
    a: 'Pelo WhatsApp (54) 99135-8696, pelo telefone (54) 3312-6964 ou pelo formulário de contato no site. Retornamos o mais breve possível.',
  },
  {
    q: 'A clínica atende crianças e bebês?',
    a: 'Sim. A Dra. Emeli Miotto, especialista em Odontopediatria, atende bebês, crianças e adolescentes, com odontologia preventiva e tratamentos sob sedação com óxido nitroso quando necessário.',
  },
]

// ===== JSON-LD =====
const SERVICOS_SCHEMA = [
  'Tratamento Endodôntico',
  'Aparelhos Ortodônticos',
  'Implantes e Próteses',
  'Clareamento Dental',
  'Profilaxia e Tratamento das Gengivas',
  'Cirurgias Gengivais Estéticas',
  'Odontopediatria',
  'Ortopedia Funcional dos Maxilares',
  'Harmonização Orofacial',
  'Ozonioterapia na Odontologia',
]

export function jsonLdLocalBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${BASE_URL}/#clinica`,
    name: 'Arta Odontologia',
    legalName: 'ARTA SERVIÇOS DE ODONTOLOGIA LTDA',
    description:
      'Clínica de odontologia em Passo Fundo fundada em 2018, com especialistas em Endodontia, Ortodontia, Implantodontia, Harmonização Orofacial, Ozonioterapia, Odontopediatria e mais.',
    url: BASE_URL,
    telephone: '+555433126964',
    email: 'contato@artaodontologia.com.br',
    foundingDate: '2018',
    image: `${BASE_URL}/img/logo-full.png`,
    logo: `${BASE_URL}/img/logo-full.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Uruguai, 1932 - Sala 402',
      addressLocality: 'Passo Fundo',
      addressRegion: 'RS',
      postalCode: '99010-111',
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: -28.2628, longitude: -52.4067 },
    areaServed: { '@type': 'City', name: 'Passo Fundo' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '12:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '13:30',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/artaodontologia/',
      'https://www.instagram.com/artaodontologia/',
    ],
    medicalSpecialty: ['Dentistry', 'Endodontics', 'Orthodontics', 'PediatricDentistry', 'CosmeticDentistry'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Áreas de Atuação',
      itemListElement: SERVICOS_SCHEMA.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'MedicalProcedure', name: s },
      })),
    },
  }
}

export function jsonLdFaq() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function jsonLdBreadcrumb(itens) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nome,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

export function jsonLdWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arta Odontologia',
    url: BASE_URL,
    description: 'Clínica de odontologia em Passo Fundo – RS.',
    publisher: { '@id': `${BASE_URL}/#clinica` },
  }
}
