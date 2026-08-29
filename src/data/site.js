// ===== Dados gerais do site =====

export const WHATSAPP = '5554991358696'

export const zap = (msg = 'Olá, vim do site e gostaria de mais informações') =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(msg)}`

export const CONTATO = {
  endereco: {
    linha1: 'Rua Uruguai, 1932 - Sala 402',
    linha2: 'Centro - Passo Fundo - RS',
    linha3: 'CEP: 99010-111',
  },
  telefones: [
    { label: '(54) 3312-6964', href: 'tel:+555433126964' },
    { label: '(54) 99135-8696', href: 'tel:+5554991358696' },
  ],
  email: 'contato@artaodontologia.com.br',
  mapaEmbed:
    'https://maps.google.com/maps?q=Rua%20Uruguai%2C%201932%20-%20sala%20402%20-%20Centro%20-%20Passo%20Fundo%20-%20RS&t=m&z=15&output=embed&iwloc=near',
}

export const HORARIOS = [
  { dia: 'Segunda', hora: '8h - 12h / 13h30 - 18h' },
  { dia: 'Terça', hora: '8h - 12h / 13h30 - 18h' },
  { dia: 'Quarta', hora: '8h - 12h / 13h30 - 18h' },
  { dia: 'Quinta', hora: '8h - 12h / 13h30 - 18h' },
  { dia: 'Sexta', hora: '8h - 12h / 13h30 - 18h' },
  { dia: 'Sábado', hora: 'Fechado', fechado: true },
  { dia: 'Domingo', hora: 'Fechado', fechado: true },
]

export const SOCIAL = {
  facebook: 'https://www.facebook.com/artaodontologia/',
  instagram: 'https://www.instagram.com/artaodontologia/',
}

export const LEGAL = {
  razao: 'ARTA SERVIÇOS DE ODONTOLOGIA LTDA',
  epao: '(RS-EPAO-4423)',
  rt: 'RT Mateus Silveira Martins Hartmann',
  cro: 'CRO RS 11886',
}

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/profissionais', label: 'Profissionais' },
  { to: '/areas-de-atuacao', label: 'Áreas de Atuação' },
  { to: '/novidades', label: 'Novidades' },
  { to: '/#contato', label: 'Contato' },
]
