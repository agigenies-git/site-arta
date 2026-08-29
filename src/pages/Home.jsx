import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useRevealAll'
import { AREAS } from '../data/areas'
import { CONTATO, HORARIOS, zap } from '../data/site'
import { FAQ } from '../data/seo'

const IconeZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function FormularioContato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tratamento: '' })

  const mascaraTelefone = (valor) => {
    let v = valor.replace(/\D/g, '')
    if (v.length > 11) v = v.slice(0, 11)
    if (v.length > 7) v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`
    else if (v.length > 2) v = `(${v.slice(0, 2)}) ${v.slice(2)}`
    else if (v.length > 0) v = `(${v}`
    return v
  }

  const enviar = (e) => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${form.nome}.\nEmail: ${form.email}\nTelefone: ${form.telefone}\nTratamento desejado: ${form.tratamento}`
    window.open(zap(msg), '_blank')
  }

  const set = (campo) => (e) =>
    setForm((f) => ({ ...f, [campo]: campo === 'telefone' ? mascaraTelefone(e.target.value) : e.target.value }))

  return (
    <div className="contact-form-wrapper reveal">
      <h3>Envie sua mensagem</h3>
      <p>Preencha o formulário e entraremos em contato.</p>
      <form onSubmit={enviar}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input id="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={set('nome')} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="seu@email.com" value={form.email} onChange={set('email')} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="telefone">WhatsApp</label>
          <input id="telefone" type="tel" placeholder="(54) 99999-9999" value={form.telefone} onChange={set('telefone')} />
        </div>
        <div className="form-group">
          <label htmlFor="tratamento">Tratamento desejado</label>
          <textarea id="tratamento" placeholder="Descreva o tratamento que deseja..." value={form.tratamento} onChange={set('tratamento')} />
        </div>
        <button type="submit" className="btn btn-primary btn-submit">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}

export default function Home() {
  useRevealAll()
  return (
    <div className="page-home">
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img src="img/clinic-1.jpg" alt="Clínica Arta Odontologia" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">Clínica de Odontologia em Passo Fundo</div>
          <h1>Seu sorriso, nossa <span>melhor arte</span></h1>
          <p>Devolvendo aos nossos pacientes a alegria e o prazer de sorrir, mastigar e se expressar bem através da reabilitação oral e facial com tecnologia de ponta.</p>
          <div className="hero-buttons">
            <a href={zap()} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconeZap />
              Agende sua Consulta
            </a>
            <Link to="/areas-de-atuacao" className="btn btn-outline">Nossos Serviços →</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">30</div>
              <div className="stat-label">Anos de Experiência Clínica</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.000+</div>
              <div className="stat-label">Pacientes Atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Especialidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section about" id="sobre">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              <img src="img/clinic-2.jpg" alt="Equipe Arta Odontologia" />
              <div className="about-image-badge">
                <div className="number">2018</div>
                <div className="text">Fundada em Passo Fundo</div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label reveal">Sobre Nós</div>
              <h2 className="reveal reveal-delay-1">Tradição e <span>excelência</span> em odontologia</h2>
              <p className="reveal reveal-delay-2">A Arta Odontologia é uma clínica de odontologia em Passo Fundo fundada em 2018 por 3 cirurgiões dentistas que trabalham juntos desde 1999, com um time de profissionais experientes e especializados. Nossa missão é melhorar a qualidade de vida, devolvendo e mantendo a saúde oral das pessoas.</p>
              <div className="values-grid">
                <div className="value-card reveal reveal-delay-2">
                  <div className="value-icon">🎯</div>
                  <h4>Missão</h4>
                  <p>Melhorar a qualidade de vida, devolvendo e mantendo a saúde oral das pessoas.</p>
                </div>
                <div className="value-card reveal reveal-delay-3">
                  <div className="value-icon">👁️</div>
                  <h4>Visão</h4>
                  <p>Ser referência em Passo Fundo e região, atendendo necessidades e expectativas.</p>
                </div>
                <div className="value-card reveal reveal-delay-4">
                  <div className="value-icon">💎</div>
                  <h4>Valores</h4>
                  <p>Responsabilidade, qualidade, integridade e humanização em cada atendimento.</p>
                </div>
                <div className="value-card reveal reveal-delay-5">
                  <div className="value-icon">⭐</div>
                  <h4>Excelência</h4>
                  <p>Equipamentos modernos, biossegurança e atendimento cordial e exclusivo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Nossos Serviços</div>
            <h2 className="section-title reveal reveal-delay-1">Tratamentos especializados para o seu sorriso</h2>
            <p className="section-subtitle reveal reveal-delay-2">Oferecemos uma gama completa de serviços odontológicos com tecnologia de ponta e profissionais altamente qualificados.</p>
          </div>
          <div className="services-grid">
            {AREAS.map((a, i) => (
              <div className={`service-card reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`} key={a.id}>
                <div className="service-image">
                  <img src={a.img} alt={a.titulo} />
                  <div className="service-image-overlay"></div>
                  <div className="service-icon-float">{a.icon}</div>
                </div>
                <div className="service-body">
                  <h3>{a.titulo}</h3>
                  <p>{a.resumo}</p>
                  <Link to={`/areas-de-atuacao#${a.id}`} className="service-link">Saiba mais →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg"><img src="img/clinic-5.jpg" alt="Sorriso" /></div>
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="reveal">Pronto para transformar seu sorriso?</h2>
          <p className="reveal reveal-delay-1">Agende sua consulta e descubra como podemos devolver a confiança e alegria do seu sorriso com tratamentos personalizados.</p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href={zap('Olá, vim do site e gostaria de agendar uma consulta')} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconeZap />
              Falar no WhatsApp
            </a>
            <a href="#contato" className="btn btn-white">Enviar Mensagem</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Dúvidas Frequentes</div>
            <h2 className="section-title reveal reveal-delay-1">Clínica de odontologia em Passo Fundo: perguntas frequentes</h2>
            <p className="section-subtitle reveal reveal-delay-2">As respostas mais buscadas por quem procura um dentista em Passo Fundo.</p>
          </div>
          <div className="faq-list">
            {FAQ.map((f, i) => (
              <details className="faq-item reveal" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="section contact" id="contato">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-label reveal" style={{ textAlign: 'left' }}>Contato</div>
              <h2 className="reveal reveal-delay-1">Aguardamos seu <span>contato</span></h2>
              <p className="reveal reveal-delay-2">Retornaremos o mais breve possível. Entre em contato conosco pelos canais abaixo ou preencha o formulário ao lado.</p>

              <div className="contact-details">
                <div className="contact-item reveal reveal-delay-2">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text">
                    <h4>Endereço</h4>
                    <p>{CONTATO.endereco.linha1}<br />{CONTATO.endereco.linha2}<br />{CONTATO.endereco.linha3}</p>
                  </div>
                </div>
                <div className="contact-item reveal reveal-delay-3">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <h4>Telefones</h4>
                    <p>
                      {CONTATO.telefones.map((t, i) => (
                        <span key={t.href}>
                          <a href={t.href}>{t.label}</a>{i === 0 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="contact-item reveal reveal-delay-4">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                    <h4>E-mail</h4>
                    <p><a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a></p>
                  </div>
                </div>
              </div>

              <div className="hours-card reveal reveal-delay-5">
                <h4>🕐 Horário de Funcionamento</h4>
                <ul className="hours-list">
                  {HORARIOS.map((h) => (
                    <li key={h.dia} className={h.fechado ? 'closed' : ''}>
                      <span>{h.dia}</span>
                      <span>{h.hora}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <FormularioContato />
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src={CONTATO.mapaEmbed}
            title="Localização Arta Odontologia"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
