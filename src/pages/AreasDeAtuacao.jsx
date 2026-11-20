import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { AREAS } from '../data/areas'
import { zap } from '../data/site'
import { AreaIcon } from '../components/Icons'

function ProCard({ profissional }) {
  if (!profissional) return null
  return (
    <Link to="/profissionais" className="pro-card reveal reveal-delay-2">
      <img src={profissional.foto} alt={profissional.nome} />
      <div>
        <h4>{profissional.nome}</h4>
        <span>{profissional.sub}</span>
      </div>
      <span className="go">→</span>
    </Link>
  )
}

export default function AreasDeAtuacao() {
  useRevealAll()
  return (
    <div className="page-areas">
      {/* PAGE HERO */}
      <section className="page-hero page-hero--img">
        <div className="ph-bg"><img src="img/clinic-1.jpg" alt="Clínica Arta Odontologia" /></div>
        <div className="ph-overlay"></div>
        <div className="container">
          <div className="breadcrumb reveal"><Link to="/">Home</Link> <span className="breadcrumb-sep">/</span> <span>Áreas de Atuação</span></div>
          <h1 className="reveal reveal-delay-1">Áreas de <span>Atuação</span></h1>
          <p className="reveal reveal-delay-2">
            Tratamentos completos para a sua saúde bucal — do canal ao implante, da limpeza à estética do sorriso —
            realizados por especialistas com formação de excelência.
          </p>
          <div className="chips">
            {AREAS.map((a) => (
              <a href={`#${a.id}`} key={a.id}>
                <AreaIcon id={a.id} size={16} />
                <span>{a.titulo.split(' (')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÕES */}
      {AREAS.map((a, i) => (
        <section className={`area-section ${i % 2 === 1 ? 'bg-light' : ''}`} id={a.id} key={a.id}>
          <div className="container">
            <div className={`area-grid ${i % 2 === 1 ? 'flip' : ''}`}>
              <div className="area-img reveal">
                <div className="area-num">{a.num}</div>
                <img src={a.img} alt={a.titulo} />
              </div>
              <div className="area-content">
                <div className="area-label reveal">{a.label}</div>
                <h2 className="reveal reveal-delay-1">{a.titulo}</h2>
                {a.paragrafos.map((p, j) => (
                  <p className={`reveal reveal-delay-${j + 1}`} key={p.slice(0, 24)}>{p}</p>
                ))}
                <ul className="area-highlights reveal reveal-delay-2">
                  {a.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <ProCard profissional={a.profissional} />
                <br />
                <a href={zap(a.ctaMsg)} className="btn btn-primary reveal reveal-delay-3" target="_blank" rel="noreferrer">
                  {a.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"><img src="img/clinic-6.jpg" alt="Sorriso" /></div>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal">Não sabe qual tratamento você precisa?</h2>
          <p className="reveal reveal-delay-1">Agende uma avaliação completa. Nossa equipe vai examinar seu caso e indicar o melhor caminho para o seu sorriso.</p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href={zap('Olá, vim do site e gostaria de agendar uma avaliação')} className="btn btn-primary" target="_blank" rel="noreferrer">
              Agendar Avaliação
            </a>
            <Link to="/casos-clinicos" className="btn btn-white">Ver Casos Clínicos</Link>
            <Link to="/profissionais" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Conheça os Profissionais</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
