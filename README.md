# Arta Odontologia — Site

Site institucional da **Arta Odontologia**, clínica de odontologia em Passo Fundo (RS).
React + Vite + React Router, com prerender de todas as rotas, SEO técnico e otimização para LLMs.

## Comandos

```bash
npm install      # instala dependências
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # produção → dist/ (com prerender das rotas)
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
├── data/            # CONTEÚDO DO SITE (edite aqui)
│   ├── site.js          # contatos, horários, WhatsApp, redes, menu
│   ├── profissionais.js # equipe (dentistas e apoio)
│   ├── areas.js         # 8 áreas de atuação
│   ├── novidades.js     # categorias e feed
│   └── seo.js           # títulos, descriptions, FAQ e JSON-LD
├── components/      # Header, Footer, WhatsAppFloat, ScrollManager
├── pages/           # Home, Profissionais, AreasDeAtuacao, Novidades
├── hooks/           # usePageMeta (SEO por rota), useRevealAll (animações)
└── index.css        # estilos unificados
```

## SEO incluído

- Prerender real das 4 rotas (HTML estático no build — crawlers e LLMs leem sem JS)
- JSON-LD: `Dentist` (LocalBusiness), `FAQPage`, `WebSite`
- `robots.txt` (liberado para GPTBot, ClaudeBot, PerplexityBot...), `sitemap.xml`, `llms.txt`
- Redirect 301 da URL antiga `/contato` (WordPress)
- Foco de palavra-chave: **clínica de odontologia em Passo Fundo**

## Deploy

Veja o [DEPLOY.md](./DEPLOY.md) — guia passo a passo para Vercel, Netlify ou cPanel.

---

© Arta Odontologia — ARTA Serviços de Odontologia Ltda (RS-EPAO 4423)
