import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { ENTREVISTAS } from '../data/entrevistas'
import { zap } from '../data/site'
import { IconeMicrofone, IconeRelogio } from '../components/Icons'

const IconeSpotify = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.216.353-.674.464-1.027.248-2.812-1.718-6.35-2.107-10.518-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.568-1.044 8.484-.606 11.63 1.338.353.216.464.674.247 1.027zm1.47-3.265c-.272.441-.85.58-1.291.308-3.218-1.978-8.125-2.55-11.932-1.393-.497.151-1.026-.134-1.177-.631-.151-.497.134-1.026.631-1.177 4.356-1.322 9.775-.681 13.461 1.584.441.272.58.85.308 1.291zm.126-3.411c-3.858-2.29-10.222-2.502-13.886-1.389-.59.179-1.218-.16-1.397-.75-.179-.59.16-1.218.75-1.397 4.214-1.28 11.246-1.034 15.688 1.602.531.315.706 1.004.391 1.535-.315.531-1.004.706-1.535.391z" />
  </svg>
)

const IconeZap = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Entrevistas() {
  useRevealAll()

  return (
    <div className="page-entrevistas">
      {/* PAGE HERO */}
      <section className="page-hero page-hero--img">
        <div className="ph-bg"><img src="img/clinic-1.jpg" alt="Entrevistas Arta Odontologia" /></div>
        <div className="ph-overlay"></div>
        <div className="container">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link> <span className="breadcrumb-sep">/</span> <span>Entrevistas</span>
          </div>
          <h1 className="reveal reveal-delay-1">
            Entrevistas & <span>Podcasts</span>
          </h1>
          <p className="reveal reveal-delay-2">
            Acompanhe nossos especialistas em entrevistas de rádio, podcasts e conteúdos informativos sobre odontologia,
            inovações, cuidados e saúde bucal.
          </p>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAL DE ENTREVISTAS */}
      <section className="section" id="episodios">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Mídia & Ciência</div>
            <h2 className="section-title reveal reveal-delay-1">Nossas participações</h2>
            <p className="section-subtitle reveal reveal-delay-2">
              Informação técnica, clara e acessível compartilhada por profissionais com ampla experiência clínica e docência universitária.
            </p>
          </div>

          <div className="interview-list">
            {ENTREVISTAS.map((item) => (
              <article className="interview-featured-card reveal" key={item.id}>
                <div className="interview-card-header">
                  <div className="interview-meta-top">
                    <span className="interview-badge">
                      <IconeMicrofone size={14} />
                      {item.veiculo}
                    </span>
                    <span className="interview-type">{item.tipo}</span>
                    <span className="interview-dot">•</span>
                    <span className="interview-date">{item.data}</span>
                    <span className="interview-dot">•</span>
                    <span className="interview-duration">
                      <IconeRelogio size={14} />
                      {item.duracao}
                    </span>
                  </div>
                  <h3 className="interview-title">{item.titulo}</h3>
                </div>

                <div className="interview-body-grid">
                  <div className="interview-info-col">
                    <p className="interview-description">{item.resumo}</p>

                    {item.topicos && (
                      <div className="interview-topics">
                        <h4>Principais pontos abordados:</h4>
                        <ul>
                          {item.topicos.map((topico, i) => (
                            <li key={i}>{topico}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* PROFISSIONAL ENTREVISTADO */}
                    {item.entrevistado && (
                      <Link to="/profissionais" className="interview-guest-box" title="Ver perfil do profissional">
                        <img
                          src={item.entrevistado.foto}
                          alt={item.entrevistado.nome}
                          className="guest-avatar"
                        />
                        <div>
                          <strong>{item.entrevistado.nome}</strong>
                          <span>{item.entrevistado.cargo}</span>
                          <span className="guest-cro">{item.entrevistado.cro}</span>
                        </div>
                      </Link>
                    )}

                    {/* TAGS */}
                    <div className="interview-tags">
                      {item.tags.map((tag) => (
                        <span className="interview-tag" key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="interview-player-col">
                    <div className="player-wrapper">
                      <div className="player-header">
                        <IconeSpotify size={24} />
                        <span>Ouça o episódio completo no Spotify</span>
                      </div>

                      {/* EMBED SPOTIFY OFICIAL */}
                      <div className="spotify-embed-container">
                        <iframe
                          title={item.titulo}
                          src={item.spotifyEmbedUrl}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          style={{ borderRadius: '12px' }}
                        />
                      </div>

                      <div className="player-actions">
                        <a
                          href={item.spotifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-spotify"
                        >
                          <IconeSpotify size={18} />
                          Abrir no Spotify
                        </a>

                        <a
                          href={zap(item.ctaZap)}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark"
                        >
                          <IconeZap size={18} />
                          Tirar dúvidas no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER PARA IMPRENSA E PODCASTS */}
      <section className="section bg-light" id="imprensa">
        <div className="container">
          <div className="media-invite-card reveal">
            <div className="media-invite-content">
              <div className="section-label" style={{ textAlign: 'left' }}>Imprensa & Podcasters</div>
              <h2>Deseja entrevistar nossos especialistas?</h2>
              <p>
                Os dentistas da Arta Odontologia estão disponíveis para entrevistas, palestras e colaborações com a imprensa,
                rádios e produtores de podcast sobre saúde bucal, estética oral e avanços tecnológicos da odontologia.
              </p>
              <div className="media-invite-actions">
                <a
                  href={zap('Olá! Gostaria de conversar com a equipe da Arta Odontologia para uma pauta/entrevista.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Entrar em Contato para Pautas
                </a>
                <Link to="/profissionais" className="btn btn-white">
                  Conheça o Corpo Clínico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA GERAL */}
      <section className="cta-section">
        <div className="cta-bg"><img src="img/clinic-5.jpg" alt="Consultório" /></div>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal">Gostaria de agendar uma avaliação com nossos especialistas?</h2>
          <p className="reveal reveal-delay-1">
            Entre em contato pelo WhatsApp e marque seu horário para um atendimento acolhedor, transparente e com tecnologia de ponta.
          </p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href={zap('Olá, vim do site e gostaria de agendar uma consulta')} className="btn btn-primary" target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
            </a>
            <Link to="/areas-de-atuacao" className="btn btn-white">
              Ver Todas as Áreas de Atuação
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
