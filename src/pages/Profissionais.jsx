import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { DENTISTAS, APOIO } from '../data/profissionais'
import { LEGAL, zap } from '../data/site'

export default function Profissionais() {
  useRevealAll()
  return (
    <div className="page-profissionais">
      {/* PAGE HERO */}
      <section className="page-hero page-hero--img">
        <div className="ph-bg"><img src="img/clinic-2.jpg" alt="Equipe Arta Odontologia" /></div>
        <div className="ph-overlay"></div>
        <div className="container">
          <div className="breadcrumb reveal"><Link to="/">Home</Link> <span className="breadcrumb-sep">/</span> <span>Profissionais</span></div>
          <h1 className="reveal reveal-delay-1">Nossos <span>Profissionais</span></h1>
          <p className="reveal reveal-delay-2">
            Profissionais qualificados e experientes nas áreas de atuação. Cirurgiões-dentistas com especializações,
            mestrados, doutorado e docência universitária, dedicados ao cuidado de bebês, crianças, adolescentes e adultos.
          </p>
        </div>
      </section>

      {/* DENTISTAS */}
      <section className="section" id="dentistas">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Cirurgiões-Dentistas</div>
            <h2 className="section-title reveal reveal-delay-1">Especialistas à frente da clínica</h2>
            <p className="section-subtitle reveal reveal-delay-2">Fundadores da Arta Odontologia, com formação sólida e atuação em docência e pesquisa.</p>
          </div>

          <div className="dentist-grid">
            {DENTISTAS.map((d, i) => (
              <div className={`dentist-card reveal reveal-delay-${i % 4}`} key={d.id}>
                <div className="dentist-photo">
                  <img src={d.foto} alt={d.nome} />
                  <div className="cro-badge">{d.cro}</div>
                </div>
                <div className="dentist-body">
                  <h3>{d.nome}</h3>
                  <div className="dentist-role">{d.area}</div>
                  <ul className="cred-list">
                    {d.credenciais.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                  <div className="chips-spec">
                    {d.chips.map((chip) => <span key={chip}>{chip}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE DE APOIO */}
      <section className="section bg-light" id="apoio">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Equipe de Apoio</div>
            <h2 className="section-title reveal reveal-delay-1">Atendimento acolhedor e qualificado</h2>
            <p className="section-subtitle reveal reveal-delay-2">Auxiliares em Saúde Bucal dedicadas ao seu bem-estar do início ao fim do tratamento.</p>
          </div>
          <div className="support-grid">
            {APOIO.map((p, i) => (
              <div className={`support-card reveal reveal-delay-${i + 1}`} key={p.id}>
                <img src={p.foto} alt={p.nome} />
                <div>
                  <h4>{p.nome}</h4>
                  <div className="asb">{p.cro}</div>
                  <p>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSÁVEL TÉCNICO */}
      <div className="rte-bar">
        <div className="container">
          Responsável Técnico: <strong>CD {LEGAL.rt.replace('RT ', '')}</strong> – {LEGAL.cro} &nbsp;|&nbsp; {LEGAL.razao} – EPAO nº 4423
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"><img src="img/clinic-6.jpg" alt="Sorriso" /></div>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal">Quer conhecer nosso time pessoalmente?</h2>
          <p className="reveal reveal-delay-1">Agende uma avaliação e descubra o tratamento ideal para o seu sorriso com quem entende do assunto.</p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href={zap('Olá, vim do site e gostaria de agendar uma avaliação')} className="btn btn-primary" target="_blank" rel="noreferrer">
              Agendar Avaliação
            </a>
            <Link to="/areas-de-atuacao" className="btn btn-white">Áreas de Atuação</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
