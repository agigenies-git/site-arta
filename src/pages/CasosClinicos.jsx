import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { CATEGORIAS_CASOS, CASOS_CLINICOS } from '../data/casos'
import { zap } from '../data/site'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function CasosClinicos() {
  useRevealAll()
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredCasos =
    activeCategory === 'todos'
      ? CASOS_CLINICOS
      : CASOS_CLINICOS.filter((c) => c.categoria === activeCategory)

  return (
    <div className="page-casos">
      {/* PAGE HERO */}
      <section className="page-hero page-hero--img">
        <div className="ph-bg">
          <img src="img/clinic-1.jpg" alt="Clínica Arta Odontologia" />
        </div>
        <div className="ph-overlay"></div>
        <div className="container">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> <span className="breadcrumb-sep">/</span> <span>Casos Clínicos</span>
          </div>
          <h1 className="reveal reveal-delay-1">
            Casos <span>Clínicos</span>
          </h1>
          <p className="reveal reveal-delay-2">
            Resultados reais planejados com rigor científico, tecnologia de ponta e foco total na saúde biológica,
            função mastigatória e harmonia do sorriso.
          </p>
        </div>
      </section>

      {/* AVISO ÉTICO CFO / CRO-RS */}
      <section className="casos-notice-section">
        <div className="container">
          <div className="casos-notice-box reveal">
            <div className="notice-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div className="notice-text">
              <strong>Nota Informativa & Ética (CFO / CRO-RS):</strong>
              <p>
                As imagens e relatos clínicos presentes nesta página têm caráter estritamente educativo e ilustrativo das técnicas
                empregadas na clínica. Cada paciente possui características anatômicas e biológicas individuais, de modo que os
                resultados podem variar e dependem de prévia avaliação e planejamento individualizado por cirurgião-dentista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS DE CATEGORIA */}
      <section className="section pb-0 pt-0">
        <div className="container">
          <div className="casos-filter-bar reveal">
            <div className="casos-filter-chips">
              {CATEGORIAS_CASOS.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="casos-count">
              Exibindo <strong>{filteredCasos.length}</strong> {filteredCasos.length === 1 ? 'caso' : 'casos'}
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE CASOS CLÍNICOS */}
      <section className="section">
        <div className="container">
          <div className="casos-grid">
            {filteredCasos.map((caso, index) => (
              <article className={`caso-card reveal reveal-delay-${(index % 3) + 1}`} key={caso.id} id={caso.id}>
                {/* ÁREA DE IMAGEM / SLIDER */}
                <div className="caso-media-wrap">
                  {caso.tipo === 'antes-depois' ? (
                    <BeforeAfterSlider
                      imagemAntes={caso.imagemAntes}
                      imagemDepois={caso.imagemDepois}
                      altAntes={`Antes: ${caso.titulo}`}
                      altDepois={`Depois: ${caso.titulo}`}
                    />
                  ) : (
                    <div className="caso-single-image">
                      <img src={caso.imagemUnica} alt={caso.titulo} loading="lazy" />
                      <span className="ba-badge ba-badge--single">Registro Clínico</span>
                    </div>
                  )}
                </div>

                {/* CONTEÚDO DO CASO */}
                <div className="caso-content">
                  <div className="caso-meta-top">
                    <span className="caso-badge">{caso.categoriaLabel}</span>
                    {caso.tipo === 'antes-depois' && (
                      <span className="caso-interactive-hint">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15 18 9 12 15 6"></polyline>
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        Arraste o slider para comparar
                      </span>
                    )}
                  </div>

                  <h2 className="caso-title">{caso.titulo}</h2>
                  <p className="caso-sub">{caso.subtitulo}</p>
                  <p className="caso-desc">{caso.descricao}</p>

                  <div className="caso-highlights">
                    <h4>Principais aspectos do tratamento:</h4>
                    <ul>
                      {caso.destaques.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="caso-footer">
                    <div className="caso-specialist">
                      <span className="spec-label">Profissional / Condução:</span>
                      <strong>{caso.especialista}</strong>
                    </div>

                    <a
                      href={zap(caso.ctaMsg)}
                      className="btn btn-primary btn-sm btn-caso-zap"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      Avaliar meu caso
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="img/clinic-6.jpg" alt="Sorriso Arta Odontologia" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal">Deseja transformar o seu sorriso com segurança?</h2>
          <p className="reveal reveal-delay-1">
            Cada tratamento começa com uma avaliação detalhada e personalizada. Venha conversar com nossos especialistas.
          </p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a
              href={zap('Olá! Estive vendo a página de casos clínicos e gostaria de agendar uma avaliação para o meu sorriso.')}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Agendar Avaliação
            </a>
            <Link to="/areas-de-atuacao" className="btn btn-white">
              Conhecer Tratamentos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

