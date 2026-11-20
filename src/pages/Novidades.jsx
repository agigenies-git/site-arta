import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { CATEGORIAS, POSTS } from '../data/novidades'
import { SOCIAL, zap } from '../data/site'
import { CategoriaBadgeIcon } from '../components/Icons'

const IconeInsta = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export default function Novidades() {
  useRevealAll()
  const feedRef = useRef(null)

  const rolarParaFeed = () => {
    if (feedRef.current) {
      const top = feedRef.current.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="page-novidades">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb reveal"><Link to="/">Home</Link> <span className="breadcrumb-sep">/</span> <span>Novidades</span></div>
          <h1 className="reveal reveal-delay-1">Fique por <span>dentro</span></h1>
          <p className="reveal reveal-delay-2">
            Acompanhe nossas novidades, entrevistas, casos clínicos, depoimentos e publicações científicas produzidas pelo nosso time.
          </p>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Explore</div>
            <h2 className="section-title reveal reveal-delay-1">Nossas categorias</h2>
            <p className="section-subtitle reveal reveal-delay-2">Navegue pelo nosso conteúdo e conheça mais sobre nosso trabalho, equipe, ciência e resultados.</p>
          </div>
          <div className="categories-grid">
            {CATEGORIAS.map((c, i) => {
              const cardContent = (
                <>
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24"><path d={c.iconePath} /></svg>
                  </div>
                  <h3>{c.titulo}</h3>
                  <p>{c.desc}</p>
                  <div className="category-count">
                    <CategoriaBadgeIcon id={c.id} size={14} />
                    <span>{c.contador}</span>
                  </div>
                </>
              )

              return c.link ? (
                <Link
                  to={c.link}
                  className={`category-card reveal reveal-delay-${i % 4}`}
                  key={c.id}
                  style={{ textDecoration: 'none' }}
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  className={`category-card reveal reveal-delay-${i % 4}`}
                  key={c.id}
                  onClick={rolarParaFeed}
                >
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section instagram-section" ref={feedRef}>
        <div className="container">
          <div className="instagram-header reveal">
            <div className="instagram-header-left">
              <div className="instagram-logo"><IconeInsta /></div>
              <div className="instagram-info">
                <h2>Siga-nos no Instagram</h2>
                <p><a href={SOCIAL.instagram} target="_blank" rel="noreferrer">@artaodontologia</a></p>
              </div>
            </div>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="btn-instagram">
              <IconeInsta width="18" height="18" fill="currentColor" />
              Seguir no Instagram
            </a>
          </div>

          <div className="instagram-grid">
            {POSTS.map((p, i) => (
              <div className={`insta-post reveal reveal-delay-${i % 4}`} key={i} onClick={() => window.open(SOCIAL.instagram, '_blank')}>
                <img src={p.img} alt={`Post Instagram ${i + 1}`} />
                <div className="insta-post-badge"><IconeInsta /></div>
                <div className="insta-post-overlay">
                  <div className="insta-stats">
                    <div className="insta-stat">
                      <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                      <span>{p.curtidas}</span>
                    </div>
                    <div className="insta-stat">
                      <svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" /></svg>
                      <span>{p.comentarios}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section cta-section--gradient">
        <div className="container cta-content">
          <h2 className="reveal">Pronto para transformar seu sorriso?</h2>
          <p className="reveal reveal-delay-1">Agende sua consulta e descubra como podemos devolver a confiança e alegria do seu sorriso com tratamentos personalizados.</p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href={zap('Olá, vim do site e gostaria de agendar uma consulta')} className="btn btn-primary" target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <Link to="/areas-de-atuacao" className="btn btn-white">Ver Áreas de Atuação</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
