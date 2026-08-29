// Prerender pós-build: gera HTML estático de cada rota em dist/
// (LLMs e crawlers leem o conteúdo sem executar JavaScript)
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// 1) Bundle SSR com esbuild (já disponível como dependência do Vite)
await build({
  entryPoints: [resolve(root, 'src/ssr/entry.jsx')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  jsx: 'automatic',
  outfile: resolve(root, '.ssr/entry.cjs'),
  logLevel: 'silent',
})

const require = createRequire(import.meta.url)
const { render } = require(resolve(root, '.ssr/entry.cjs'))
const { SEO, BASE_URL, jsonLdLocalBusiness, jsonLdFaq, jsonLdWebsite } = await import(
  resolve(root, 'src/data/seo.js')
)

const ld = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

const ROUTES = ['/', '/profissionais', '/areas-de-atuacao', '/novidades']

const shell = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

for (const rota of ROUTES) {
  const seo = SEO[rota] || SEO['/']
  const appHtml = render(rota)

  const schemas = [ld(jsonLdWebsite()), ld(jsonLdLocalBusiness())]
  if (rota === '/') schemas.push(ld(jsonLdFaq()))

  const head = `
<meta name="description" content="${seo.description}">
<meta name="keywords" content="${seo.keywords}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:title" content="${seo.title}">
<meta property="og:description" content="${seo.description}">
<meta property="og:url" content="${BASE_URL}${rota}">
<meta property="og:image" content="${BASE_URL}/img/logo-full.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Arta Odontologia">
<meta name="twitter:card" content="summary">
<link rel="canonical" href="${BASE_URL}${rota}">
${schemas.join('\n')}`

  // substitui description antiga e injeta o restante antes de </head>
  let out = shell
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', head + '\n</head>')
    .replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const arquivo = rota === '/' ? 'dist/index.html' : `dist${rota}/index.html`
  const caminho = resolve(root, arquivo)
  mkdirSync(dirname(caminho), { recursive: true })
  writeFileSync(caminho, out)
  console.log('✓ prerender:', arquivo)
}

console.log('Prerender concluído para', ROUTES.length, 'rotas.')
