import { useEffect, useRef } from 'react'

// Wrapper de animação de scroll (substitui o IntersectionObserver do site estático)
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
