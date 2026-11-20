// ===== Novidades: categorias e feed do Instagram =====
// (iconePath = path do SVG renderizado pela página)

export const CATEGORIAS = [
  {
    id: 'midia',
    titulo: 'Mídia',
    desc: 'Fotos da clínica, equipe e bastidores',
    contador: '42 publicações',
    iconePath:
      'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z',
  },
  {
    id: 'entrevistas',
    titulo: 'Entrevistas',
    desc: 'Podcasts e participações dos nossos especialistas',
    contador: 'Ouvir podcasts',
    link: '/entrevistas',
    iconePath:
      'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z',
  },
  {
    id: 'casos',
    titulo: 'Casos Clínicos',
    desc: 'Resultados reais e transformações do sorriso',
    contador: 'Ver Casos Clínicos',
    link: '/casos-clinicos',
    iconePath:
      'M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 7h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z',
  },
  {
    id: 'depoimentos',
    titulo: 'Depoimentos',
    desc: 'Histórias de quem confiou em nós',
    contador: '53 relatos',
    iconePath: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
  },
  {
    id: 'publicacoes',
    titulo: 'Publicações Científicas',
    desc: 'Artigos e pesquisas do nosso time',
    contador: '12 artigos',
    iconePath:
      'M13 11.33 18 18H6l5-6.67V6h2m3.96-4H7.04c-.42 0-.65.48-.39.81L9 6v4.67L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6l2.35-3.19c.26-.33.03-.81-.39-.81z',
  },
]

export const POSTS = [
  { img: 'img/clinic-1.jpg', curtidas: 284, comentarios: 32 },
  { img: 'img/clinic-2.jpg', curtidas: 412, comentarios: 48 },
  { img: 'img/clinic-3.jpg', curtidas: 198, comentarios: 21 },
  { img: 'img/clinic-4.jpg', curtidas: 567, comentarios: 72 },
  { img: 'img/clinic-5.jpg', curtidas: 321, comentarios: 39 },
  { img: 'img/clinic-6.jpg', curtidas: 245, comentarios: 28 },
  { img: 'img/clinic-7.jpg', curtidas: 389, comentarios: 54 },
  { img: 'img/clinic-1.jpg', curtidas: 478, comentarios: 63 },
]
