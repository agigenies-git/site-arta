# 🚀 Guia de Deploy — Site Arta Odontologia (React)

Foco SEO: **Clínica de Odontologia em Passo Fundo**

O site é um SPA React (Vite) com **prerender de todas as rotas** — o `npm run build` gera em `dist/` o HTML estático de cada página (bom para Google e LLMs), os schemas JSON-LD, `robots.txt`, `sitemap.xml` e `llms.txt`.

---

## 0. Preparar o projeto (uma vez)

Requisitos: **Node.js 18+** (baixe em nodejs.org).

```bash
cd arta-react
npm install        # instala dependências
npm run build      # gera a pasta dist/ (site pronto para produção)
```

Teste local da versão de produção:

```bash
npm run preview    # abre em http://localhost:5173
```

> Sempre suba o **conteúdo da pasta `dist/`**. Os arquivos `.env`, `src/` e `node_modules/` não vão para o servidor.

---

## Opção A — Vercel (recomendada) ✅

A mais simples e gratuita para este projeto.

### A1. Subir o código para o GitHub
1. Crie uma conta em [github.com](https://github.com) e um repositório novo (ex.: `arta-odontologia`)
2. No terminal (na pasta `arta-react`):
   ```bash
   git init
   git add .
   git commit -m "Site Arta Odontologia - React"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/arta-odontologia.git
   git push -u origin main
   ```
   *(ou use o site do GitHub: "uploading an existing file" e arraste os arquivos)*

### A2. Publicar na Vercel
1. Acesse [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. **Add New → Project** → selecione o repositório `arta-odontologia`
3. A Vercel detecta o Vite sozinho. Confirme apenas:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** 🎉 (o `vercel.json` já está no projeto com redirects e rewrites)

### A3. Domínio próprio (artaodontologia.com.br)
1. No painel do projeto: **Settings → Domains → Add** → `artaodontologia.com.br` e `www.artaodontologia.com.br`
2. No painel de DNS onde o domínio está registrado (Registro.br / host atual), altere:
   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |
3. Aguarde a propagação (minutos a 24h). **Importante:** mexa apenas nos registros de site (A/CNAME). Os registros de **e-mail (MX) não mudam** — o e-mail `@artaodontologia.com.br` continua funcionando.

---

## Opção B — Netlify

1. [netlify.com](https://netlify.com) → Sign up with GitHub
2. **Add new site → Import an existing project** → selecione o repositório
3. Build command: `npm run build` · Publish directory: `dist`
4. Deploy (o arquivo `_redirects` já está incluído)
5. Domínio: **Domain settings → Add custom domain** e aponte o DNS:
   | Tipo | Nome | Valor |
   |---|---|---|
   | A | `@` | `75.2.60.5` |
   | CNAME | `www` | `SEU-SITE.netlify.app` |

---

## Opção C — Hospedagem tradicional (cPanel/FTP)

Se o domínio está hoje num hosting com cPanel (onde roda o WordPress atual):

1. `npm run build` na sua máquina
2. No cPanel, abra o **Gerenciador de Arquivos** → `public_html`
3. ⚠️ **Se o site WordPress atual será substituído**, faça backup antes (baixe a pasta `wp-content` — tem as fotos antigas — e o banco, se quiser histórico)
4. Apague o conteúdo de `public_html` (ou mova o WordPress para uma subpasta `wp-antigo/`)
5. Envie **todo o conteúdo de `dist/`** para `public_html` (incluindo o `.htaccess` — ele garante que `/profissionais` funcione sem 404)
6. Pronto — o Apache serve as páginas prerenderizadas e o fallback cuida das rotas

> O e-mail hospedado no mesmo cPanel **não é afetado** (é gerenciado por MX/contas, não pelos arquivos do site).

---

## 🔄 Substituindo o site WordPress atual

| URL antiga (WordPress) | Nova | Situação |
|---|---|---|
| `/` | `/` | igual ✅ |
| `/profissionais/` | `/profissionais` | igual (rota prerendered) ✅ |
| `/areas-de-atuacao/` | `/areas-de-atuacao` | igual ✅ |
| `/contato/` | `/#contato` | **redirect 301 já configurado** nos 3 métodos ✅ |

Se houver outras URLs antigas com tráfego/índice no Google, me avise que adiciono os redirects.

---

## ✅ Checklist pós-deploy (SEO + LLMs)

1. **Testar o site**: abra as 4 rotas direto na URL (recarregue a página em `/profissionais` — não pode dar 404)
2. **Robots**: acesse `https://SEU-DOMINIO/robots.txt` e `/sitemap.xml` e `/llms.txt` — devem abrir normalmente
3. **HTML renderizado**: em `/profissionais`, "Ver código-fonte" no navegador deve mostrar os nomes dos dentistas (prerender funcionando)
4. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)):
   - Adicionar a propriedade `artaodontologia.com.br`
   - Enviar o sitemap: `sitemap.xml`
   - Usar "Inspecionar URL" nas 4 páginas e pedir indexação
5. **Validar schemas**: teste a home em [validator.schema.org](https://validator.schema.org) (deve mostrar Dentist + FAQPage)
6. **Google Business Profile** ([business.google.com](https://business.google.com)): atualizar o link do site e conferir endereço/telefone (reforça o SEO local em Passo Fundo)
7. **PageSpeed**: rode [pagespeed.web.dev](https://pagespeed.web.dev) — meta: 90+ em mobile (imagens já otimizadas)
8. **Sinais para LLMs**: os arquivos `llms.txt` + robots liberado para GPTBot/ClaudeBot/PerplexityBot + FAQ factual já estão no ar; citar o site em perfis (Instagram link na bio) ajuda as IAs a confirmar NAP (nome-endereço-telefone)

---

## 📁 Resumo do que vai ao ar (`dist/`)

```
dist/
├── index.html                    → home prerendered + FAQ + JSON-LD
├── profissionais/index.html      → equipe prerendered
├── areas-de-atuacao/index.html   → 8 especialidades prerendered
├── novidades/index.html
├── robots.txt · sitemap.xml · llms.txt
├── .htaccess (Apache) · _redirects (Netlify)  [vercel.json fica na raiz do repo]
├── img/                          → 22 imagens otimizadas
└── assets/                       → JS/CSS com hash (cache 1 ano)
```

Qualquer dúvida em algum passo, me diga em qual opção você vai publicar (Vercel, Netlify ou cPanel) que eu detalho ainda mais! 🦷
