// ===== Áreas de atuação / serviços =====
// resumo = texto curto (cards da home) | paragrafos = texto longo (página de áreas)

const EQUIPE = {
  nome: 'Equipe Arta Odontologia',
  sub: 'Profissionais especializados em cada etapa do atendimento',
  foto: 'img/clinic-2.jpg',
}

export const EQUIPE_CARD = EQUIPE

export const AREAS = [
  {
    id: 'endo',
    num: '01',
    icon: '🦷',
    label: 'Especialidade',
    titulo: 'Tratamento Endodôntico',
    img: 'img/clinic-3.jpg',
    resumo:
      'Especialidade que trata da parte interna do dente, popularmente conhecido como o canal ou o nervo, com técnicas avançadas e indolor.',
    paragrafos: [
      'A Endodontia é a especialidade que trata da parte interna do dente, popularmente conhecida como o canal, ou o nervo. Quando a polpa dentária é afetada por cárie, trauma ou infecção, o tratamento de canal remove o tecido inflamado, promove a limpeza e a desinfecção dos canais e preserva o dente natural.',
      'Com técnicas modernas e anestesia eficaz, o procedimento é realizado com conforto e precisão, devolvendo a saúde e a função ao seu dente.',
    ],
    highlights: [
      'Preservação do dente natural',
      'Técnicas atualizadas e instrumentação moderna',
      'Realizado por doutor em Endodontia (FOP-Unicamp)',
    ],
    profissional: {
      nome: 'Dr. Mateus Hartmann',
      sub: 'CRO-RS 11886 · Doutor em Endodontia – FOP-Unicamp',
      foto: 'img/prof-mateus.jpg',
    },
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de agendar uma avaliação de Endodontia (tratamento de canal)',
  },
  {
    id: 'orto',
    num: '02',
    icon: '😁',
    label: 'Especialidade',
    titulo: 'Aparelhos Ortodônticos',
    img: 'img/clinic-4.jpg',
    resumo:
      'Atua no crescimento e desenvolvimento da face, prevenindo, interceptando e corrigindo as más oclusões dentárias com resultados precisos.',
    paragrafos: [
      'A Ortodontia atua no crescimento e no desenvolvimento da face, acompanhando as dentições decídua (de leite), mista e permanente e seus desvios de normalidade — prevenindo, interceptando e corrigindo as más oclusões dentárias.',
      'O tratamento ortodôntico alinha os dentes, melhora a mordida e a estética do sorriso, contribuindo para a saúde bucal em qualquer idade.',
    ],
    highlights: [
      'Atendimento para crianças, adolescentes e adultos',
      'Ortodontia preventiva, interceptativa e corretiva',
      'Especialista com curso de excelência pela Dental Press',
    ],
    profissional: {
      nome: 'Dra. Daniela Lange',
      sub: 'CRO-RS 11245 · Especialista em Ortodontia – UPF',
      foto: 'img/prof-daniela.jpg',
    },
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de agendar uma avaliação de Ortodontia (aparelhos)',
  },
  {
    id: 'implante',
    num: '03',
    icon: '🔩',
    label: 'Especialidade',
    titulo: 'Implantes e Próteses',
    img: 'img/clinic-5.jpg',
    resumo:
      'Implantes dentários funcionam como raízes artificiais para próteses fixas, substituindo um ou mais dentes com naturalidade e segurança.',
    paragrafos: [
      'Os implantes dentários são realizados quando as raízes dentais não têm mais condições de suportar próteses fixas: funcionam como raízes artificiais para a instalação de próteses fixas, devolvendo função, estética e conforto.',
      'Os implantes podem substituir um, vários ou todos os dentes, com planejamento personalizado e previsibilidade.',
    ],
    highlights: [
      'Substituição de um ou mais dentes até reabilitações completas',
      'Planejamento personalizado caso a caso',
      'Especialista e coordenador de curso de Implantodontia',
    ],
    profissional: {
      nome: 'Dr. Cristiano Magagnin',
      sub: 'CRO-RS 13903 · Especialista em Implantodontia – CEOM/IMED',
      foto: 'img/prof-cristiano.jpg',
    },
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de agendar uma avaliação de Implantes e Próteses',
  },
  {
    id: 'clareamento',
    num: '04',
    icon: '✨',
    label: 'Estética',
    titulo: 'Clareamento Dental',
    img: 'img/clinic-6.jpg',
    resumo:
      'Aplicação de substâncias clareadoras que melhoram a cor dos dentes, removendo pequenas manchas e devolvendo o brilho natural do sorriso.',
    paragrafos: [
      'O clareamento dental é realizado com a aplicação de substâncias clareadoras que melhoram a cor dos dentes, proporcionando um sorriso mais claro e harmonioso. Em alguns casos, o clareamento também consegue remover pequenas manchas.',
      'O procedimento é planejado conforme as características dos seus dentes e gengivas, com acompanhamento profissional para garantir segurança e resultados naturais.',
    ],
    highlights: [
      'Resultados naturais e graduais',
      'Remoção de pequenas manchas',
      'Acompanhamento profissional durante todo o processo',
    ],
    profissional: null,
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de agendar uma avaliação de Clareamento Dental',
  },
  {
    id: 'profilaxia',
    num: '05',
    icon: '🧼',
    label: 'Prevenção',
    titulo: 'Profilaxia (limpeza) e Tratamento das Gengivas',
    img: 'img/clinic-7.jpg',
    resumo:
      'Limpeza profissional realizada por dentistas especializados, essencial para a prevenção de doenças periodontais e manutenção da saúde bucal.',
    paragrafos: [
      'A profilaxia consiste em uma limpeza profissional que deve ser realizada sempre por um dentista especializado e capacitado na área. Ela remove a placa bacteriana e o tártaro acumulados, prevenindo cáries e doenças nas gengivas.',
      'O tratamento das gengivas (periodontal) interrompe a evolução de inflamações e infecções, mantendo a saúde dos tecidos que sustentam os seus dentes.',
    ],
    highlights: [
      'Limpeza profissional completa',
      'Prevenção de cárie e doença periodontal',
      'Manutenção periódica da saúde bucal',
    ],
    profissional: EQUIPE,
    cta: 'Agendar Limpeza',
    ctaMsg: 'Olá, gostaria de agendar uma profilaxia (limpeza)',
  },
  {
    id: 'cirurgia',
    num: '06',
    icon: '💫',
    label: 'Estética',
    titulo: 'Cirurgias Gengivais Estéticas',
    img: 'img/clinic-1.jpg',
    resumo:
      'Procedimentos seguros para aumentar ou reduzir o tamanho dos dentes, melhorando a estética do sorriso com recuperação rápida.',
    paragrafos: [
      'As cirurgias estéticas são realizadas para aumentar ou reduzir o tamanho dos dentes, melhorando a estética do sorriso — como nos casos de "sorriso gengival", em que a gengiva aparece em excesso.',
      'As cirurgias gengivais são procedimentos seguros, que requerem pequenos cuidados para uma recuperação rápida e tranquila do paciente.',
    ],
    highlights: [
      'Correção do sorriso gengival',
      'Harmonização da linha do sorriso',
      'Procedimento seguro com recuperação rápida',
    ],
    profissional: { ...EQUIPE, sub: 'Avaliação personalizada do seu caso' },
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de saber mais sobre Cirurgias Gengivais Estéticas',
  },
  {
    id: 'odontopediatria',
    num: '07',
    icon: '🧒',
    label: 'Especialidade',
    titulo: 'Odontopediatria',
    img: 'img/srv-odontopediatria.jpg',
    resumo:
      'Atendimento acolhedor para bebês, crianças e adolescentes, com foco na prevenção e tratamentos adaptados a cada fase — inclusive sob sedação com óxido nitroso.',
    paragrafos: [
      'A Odontopediatria cuida da saúde bucal de bebês, crianças e adolescentes, com atendimento acolhedor e adaptado a cada fase do crescimento — da primeira consulta às trocas de dentição.',
      'O foco está na prevenção: acompanhamento periódico, orientação de hábitos e tratamentos planejados para que a ida ao dentista seja uma experiência tranquila e positiva.',
    ],
    highlights: [
      'Atendimento para bebês, crianças e adolescentes',
      'Odontologia preventiva e acompanhamento do crescimento',
      'Tratamentos sob sedação com óxido nitroso, quando necessário',
    ],
    profissional: {
      nome: 'Dra. Emeli Miotto',
      sub: 'CRO-RS 19822 · Especialista em Odontopediatria – ABORS',
      foto: 'img/prof-emeli.jpg',
    },
    cta: 'Agendar Consulta',
    ctaMsg: 'Olá, gostaria de agendar uma consulta de Odontopediatria',
  },
  {
    id: 'ortopedia',
    num: '08',
    icon: '🦴',
    label: 'Especialidade',
    titulo: 'Ortopedia Funcional dos Maxilares',
    img: 'img/srv-ortopedia.jpg',
    resumo:
      'Guia o crescimento e o desenvolvimento dos maxilares na infância e adolescência, corrigindo a forma óssea e as funções na idade certa.',
    paragrafos: [
      'A Ortopedia Funcional dos Maxilares atua no crescimento e no desenvolvimento dos maxilares da criança e do adolescente, guiando a forma óssea e estimulando o equilíbrio das funções — respiração, mastigação, deglutição e fala.',
      'Com aparelhos funcionais removíveis, o tratamento aproveita a fase de crescimento para corrigir desarmônias ósseas na idade certa, muitas vezes evitando tratamentos mais complexos no futuro.',
    ],
    highlights: [
      'Aproveita a fase de crescimento para guiar os maxilares',
      'Correção de desarmônias ósseas na idade ideal',
      'Integração entre forma óssea e funções orais',
    ],
    profissional: {
      nome: 'Dra. Emeli Miotto',
      sub: 'CRO-RS 19822 · Ortopedia Funcional dos Maxilares – SOBRACOM',
      foto: 'img/prof-emeli.jpg',
    },
    cta: 'Agendar Avaliação',
    ctaMsg: 'Olá, gostaria de saber mais sobre Ortopedia Funcional dos Maxilares',
  },
]
