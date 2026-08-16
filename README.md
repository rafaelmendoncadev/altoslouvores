# Altos Louvores 🎵

Site estático para exibir vídeos com temas gospel. Em destaque: **"Não Desista"** com a **Cantora Ludmila Ferber**, reproduzido direto do YouTube (embed).

Totalmente responsivo (celular, tablet e desktop).

## Estrutura

```
AltosLouvores/
├── index.html              # Página principal (vídeo em destaque via embed do YouTube)
├── css/
│   └── styles.css          # Estilos (mobile-first, responsivo)
├── js/
│   └── main.js             # Menu, player (embed), compartilhar, versículos
└── assets/
    ├── favicon.svg         # Ícone do site (nota musical)
    └── images/
        └── capa-nao-desista.jpg  # Capa do destaque (og:image)
```

## Como rodar localmente

O vídeo em destaque vem do YouTube (embed), então o site funciona até abrindo o `index.html` diretamente (duplo clique). Para um ambiente mais próximo da produção, sirva por HTTP:

```bash
# Opção 1: Python
python -m http.server 8000
# depois abra http://localhost:8000

# Opção 2: Node
npx serve .
```

## Como adicionar mais vídeos

1. No YouTube, use **Compartilhar → Incorporar** para copiar o código do `<iframe>`.
2. Cole o `<iframe>` dentro de `.video-wrapper` na seção do vídeo (mantenha `allowfullscreen` e um `id` único).
3. Atualize o `title` do iframe, o `src` (ID do vídeo) e os textos de título/artista conforme necessário.

## Stack

- HTML5 semântico + embed do YouTube (`<iframe>` responsivo via `aspect-ratio`).
- CSS puro (custom properties, mobile-first, `prefers-reduced-motion`).
- JavaScript vanilla (sem dependências).

© Altos Louvores.
