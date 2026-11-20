// ===== Ícones SVG Profissionais para a Arta Odontologia =====

// Ícones por Área de Atuação / Especialidade
export function AreaIcon({ id, size = 22, color = 'currentColor', className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }

  switch (id) {
    case 'endo': // Tratamento de canal / dente com canais radiculares
      return (
        <svg {...props}>
          <path d="M12 2C8.5 2 6 4 6 7.5c0 3.5 1.5 7.5 3 12 .7 2 1.3 2.5 2 1 .8-1.5 1-4 1-6 0 2 .2 4.5 1 6 .7 1.5 1.3 1 2-1 1.5-4.5 3-8.5 3-12C18 4 15.5 2 12 2z" />
          <path d="M10 8c0 3 2 4.5 2 7.5" />
          <path d="M14 8c0 3-2 4.5-2 7.5" />
        </svg>
      )

    case 'orto': // Ortodontia / Aparelho com braquetes e fio
      return (
        <svg {...props}>
          <path d="M3 12h18" />
          <rect x="5" y="9.5" width="3.5" height="5" rx="1" fill={color} />
          <rect x="10.25" y="9.5" width="3.5" height="5" rx="1" fill={color} />
          <rect x="15.5" y="9.5" width="3.5" height="5" rx="1" fill={color} />
          <path d="M4 8c2-3 4.5-4.5 8-4.5s6 1.5 8 4.5" />
          <path d="M4 16c2 3 4.5 4.5 8 4.5s6-1.5 8-4.5" />
        </svg>
      )

    case 'implante': // Implante e Prótese / Fixação óssea precisa
      return (
        <svg {...props}>
          <path d="M7 3h10v3.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 6.5V3z" />
          <path d="M9 9v12l3 2 3-2V9" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="15" x2="16" y2="15" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      )

    case 'clareamento': // Clareamento dental / Brilho estético
      return (
        <svg {...props}>
          <path d="m12 2 2.6 6.4L21 11l-5.4 4.6 1.6 7-6.2-4.1L4.8 22.6l1.6-7L1 11l6.4-2.6L12 2z" />
          <path d="M19 2v4" />
          <path d="M21 4h-4" />
        </svg>
      )

    case 'profilaxia': // Profilaxia / Limpeza / Proteção e saúde gengival
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )

    case 'cirurgia': // Cirurgias gengivais estéticas / Precisão cirúrgica
      return (
        <svg {...props}>
          <path d="m14.5 4.5 5 5-9 9H5.5v-5z" />
          <line x1="13.5" y1="7.5" x2="16.5" y2="10.5" />
          <path d="M3 21h18" />
        </svg>
      )

    case 'odontopediatria': // Odontopediatria / Sorriso acolhedor infantil
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14.5s1.5 2 4 2 4-2 4-2" />
          <circle cx="9" cy="9.5" r="1" fill={color} />
          <circle cx="15" cy="9.5" r="1" fill={color} />
          <path d="M12 3a4 4 0 0 1 4 4" />
        </svg>
      )

    case 'ortopedia': // Ortopedia Funcional dos Maxilares / Estrutura óssea e equilíbrio
      return (
        <svg {...props}>
          <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7V6z" />
          <path d="M9 16v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3" />
          <line x1="8" y1="9" x2="16" y2="9" />
        </svg>
      )

    case 'harmonizacao': // Harmonização Orofacial / Simetria facial e proporções
      return (
        <svg {...props}>
          <path d="M12 21c-4.5 0-8-4-8-9 0-4 3.5-8 8-8s8 4 8 8c0 5-3.5 9-8 9z" />
          <circle cx="9.5" cy="10.5" r="1" fill={color} />
          <circle cx="14.5" cy="10.5" r="1" fill={color} />
          <path d="M10 14.5c.8.6 1.4.9 2 .9s1.2-.3 2-.9" />
          <path d="M19 3l.8 1.6L21.5 5.5l-1.7.8L19 8l-.8-1.7-1.7-.8 1.7-.9L19 3z" />
        </svg>
      )

    case 'ozonioterapia': // Ozonioterapia / Molécula bioativa e regeneração
      return (
        <svg {...props}>
          <circle cx="12" cy="6" r="3.2" />
          <circle cx="6.5" cy="16.5" r="3.2" />
          <circle cx="17.5" cy="16.5" r="3.2" />
          <line x1="10.2" y1="8.5" x2="8.3" y2="13.5" />
          <line x1="13.8" y1="8.5" x2="15.7" y2="13.5" />
          <line x1="10" y1="16.5" x2="14" y2="16.5" />
        </svg>
      )

    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}

// Ícones de Valores / Sobre Nós
export function IconeMissao({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

export function IconeVisao({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconeValores({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
      <path d="m10 3 2 6-2 12" />
      <path d="m14 3-2 6 2 12" />
    </svg>
  )
}

export function IconeExcelencia({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

// Ícones de Contato
export function IconeEndereco({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconeTelefone({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function IconeEmail({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function IconeRelogio({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// Ícone de Microfone para Podcasts / Rádio
export function IconeMicrofone({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

// Mini-ícones para badges de categorias (Novidades)
export function CategoriaBadgeIcon({ id, size = 14, className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }

  switch (id) {
    case 'midia': // Câmera
      return (
        <svg {...props}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    case 'entrevistas': // Microfone
      return (
        <svg {...props}>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      )
    case 'casos': // Prancheta / Casos clínicos
      return (
        <svg {...props}>
          <rect width="8" height="4" x="8" y="2" rx="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    case 'depoimentos': // Balão de mensagem / Avaliações
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    case 'publicacoes': // Ciência / Microscópio
      return (
        <svg {...props}>
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

