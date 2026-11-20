import { useState, useRef, useCallback } from 'react'

export default function BeforeAfterSlider({ imagemAntes, imagemDepois, altAntes = 'Antes do tratamento', altDepois = 'Depois do tratamento' }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  const onMouseDown = () => setIsDragging(true)
  const onMouseUp = () => setIsDragging(false)
  const onMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <div className="ba-slider-wrapper">
      <div
        className="ba-slider-container"
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        role="region"
        aria-label="Comparação de antes e depois"
      >
        {/* IMAGEM DEPOIS (FUNDO) */}
        <div className="ba-layer ba-after">
          <img src={imagemDepois} alt={altDepois} loading="lazy" />
          <span className="ba-badge ba-badge--after">Depois</span>
        </div>

        {/* IMAGEM ANTES (SOBREPOSIÇÃO COM CLIP) */}
        <div
          className="ba-layer ba-before"
          style={{ width: `${sliderPos}%` }}
        >
          <img src={imagemAntes} alt={altAntes} loading="lazy" />
          <span className="ba-badge ba-badge--before">Antes</span>
        </div>

        {/* LINHA DIVISÓRIA E BOTÃO DESLIZANTE */}
        <div className="ba-handle-line" style={{ left: `${sliderPos}%` }}>
          <div className="ba-handle-knob" title="Arraste para comparar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6" style={{ opacity: 0.35 }}></polyline>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
              <polyline points="15 18 21 12 15 6" style={{ opacity: 0.35 }}></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* CONTROLES RÁPIDOS */}
      <div className="ba-controls">
        <button
          type="button"
          className={`ba-ctrl-btn ${sliderPos > 70 ? 'active' : ''}`}
          onClick={() => setSliderPos(100)}
        >
          Ver Antes
        </button>
        <button
          type="button"
          className={`ba-ctrl-btn ${sliderPos >= 40 && sliderPos <= 60 ? 'active' : ''}`}
          onClick={() => setSliderPos(50)}
        >
          Comparar (50/50)
        </button>
        <button
          type="button"
          className={`ba-ctrl-btn ${sliderPos < 30 ? 'active' : ''}`}
          onClick={() => setSliderPos(0)}
        >
          Ver Depois
        </button>
      </div>
    </div>
  )
}

