# AGENTS.md — Altos Louvores

## Propósito

Site estático (single page) em português para exibir vídeos gospel. Em destaque: **"Não Desista"** com Ludmila Ferber. Totalmente responsivo (celular, tablet, desktop). Deploy na **Vercel** (config em `vercel.json`).

## Estrutura

```
index.html              # Página principal (única página, seções: hero/destaque, sobre, contato)
css/styles.css          # Estilos mobile-first, custom properties, prefers-reduced-motion
js/main.js              # JS vanilla: menu mobile, player, compartilhar, versículos, toast, ano
assets/
  favicon.svg           # Ícone do site
  images/capa-nao-desista.jpg  # Capa do destaque (og:image)
vercel.json             # cleanUrls; Cache-Control immutable e Accept-Ranges: bytes para assets
```

## Como rodar / testar

**Não há build, package.json, linter nem testes** — é HTML/CSS/JS puro. Para testar localmente, sirva por HTTP:

```bash
python -m http.server 8000   # ou: npx serve .
```

## Regras de arquitetura

- **Sem frameworks e sem dependências:** mantenha o padrão HTML5 + CSS puro + JS vanilla. Não introduza npm, bundlers ou bibliotecas sem necessidade.
- **Uma página só:** alterações de conteúdo vão em `index.html` (seções `#destaque`, `#sobre`, `#contato`).
- **Como adicionar vídeo:** cole o `<iframe>` de incorporação do YouTube dentro de `.video-wrapper` (mantenha `allowfullscreen` e um `id` único), e atualize título/artista/`og:image`/`og:title`.

## Convenções

- Todo conteúdo visível e comentários em **português do Brasil**; mensagens de commit em português no imperativo.
- `js/main.js` usa estilo ES5+ (`var`, IIFE, `use strict`) — siga o estilo existente ao editar.
- Acessibilidade é requisito: `aria-*`, `aria-expanded` no menu mobile, `aria-live` no toast, `hidden` para menu fechado.
- CSS: mobile-first, custom properties no `:root`, respeitar `prefers-reduced-motion`.

## Gotchas

- **Histórico do repositório:** o antigo `nao-desista.mp4` (~91 MB) foi removido da árvore, mas o blob permanece no histórico do Git — evite adicionar vídeos pesados e, se um dia precisar, considere limpar o histórico.
- `vercel.json` exige `Accept-Ranges: bytes` e `Cache-Control: immutable` para `/assets/videos/*.mp4` — não remova ao mudar o deploy.
- `navigator.share`/`navigator.clipboard` exigem contexto seguro (HTTPS); em HTTP local usa-se override/fallback.
- O `.gitignore` lista `.vercel` duas vezes (linhas 24 e 43) — duplicação já existente, evite re-adicionar.

## Documentação

- `README.md` contém o guia de estrutura e de como adicionar vídeos — leia antes de mudar a estrutura.