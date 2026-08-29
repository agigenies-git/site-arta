import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS, zap } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={fecharMenu}>
          <img src="img/logo-wide.png" alt="Arta Odontologia – Dentista em Passo Fundo" className="logo-img" />
        </Link>
        <div className="header-right">
          <nav className={`nav ${menuAberto ? 'active' : ''}`} id="nav">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={fecharMenu}
                className={({ isActive }) => (isActive && !l.to.includes('#') ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <a href={zap()} className="nav-cta" target="_blank" rel="noreferrer">
            Agendar Consulta
          </a>
          <button
            className={`mobile-toggle ${menuAberto ? 'active' : ''}`}
            id="mobileToggle"
            aria-label="Menu"
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
