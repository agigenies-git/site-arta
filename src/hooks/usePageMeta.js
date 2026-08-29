import { useEffect } from 'react'
import { SEO, BASE_URL, jsonLdLocalBusiness, jsonLdFaq, jsonLdWebsite } from '../data/seo'

const upsertMeta = (attr, chave, valor) => {
  let el = document.head.querySelector(`meta[${attr}="${chave}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, chave)
    document.head.appendChild(el)
  }
  el.setAttribute('content', valor)
}

const upsertJsonLd = (id, obj) => {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(obj)
}

// Atualiza title/description/canonical/OG + injeta JSON-LD conforme a rota
export function usePageMeta(pathname) {
  useEffect(() => {
    const seo = SEO[pathname] || SEO['/']

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'keywords', seo.keywords)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', BASE_URL + pathname)
    upsertMeta('property', 'og:image', `${BASE_URL}/img/logo-full.png`)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = BASE_URL + pathname

    upsertJsonLd('ld-website', jsonLdWebsite())
    upsertJsonLd('ld-clinica', jsonLdLocalBusiness())
    if (pathname === '/') upsertJsonLd('ld-faq', jsonLdFaq())
  }, [pathname])
}
