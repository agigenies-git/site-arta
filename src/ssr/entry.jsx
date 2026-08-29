// Entry de SSR: renderiza o App para string por rota (usado pelo scripts/prerender.mjs)
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../App'

export function render(path) {
  const html = renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
  return html
}
