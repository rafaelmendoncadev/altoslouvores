# Altos Louvores 🎵

Site estático para exibir vídeos com temas gospel. Em destaque: **"Não Desista"** com a **Cantora Ludmila Ferber**.

Totalmente responsivo (celular, tablet e desktop).

## Estrutura

```
AltosLouvores/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos (mobile-first, responsivo)
├── js/
│   ├── main.js             # Menu, player, compartilhar, versículos
│   └── ...
└── assets/
    ├── favicon.svg         # Ícone do site (nota musical)
    └── videos/
        └── nao-desista.mp4 # Vídeo em destaque
```

## Como rodar localmente

Como o site carrega um vídeo local, é recomendável servir por HTTP (evita restrições de `file://` em alguns navegadores):

```bash
# Opção 1: Python
python -m http.server 8000
# depois abra http://localhost:8000

# Opção 2: Node
npx serve .
```

Também funciona abrindo o `index.html` diretamente no navegador (duplo clique).

## Como adicionar mais vídeos

1. Copie o arquivo `.mp4` para `assets/videos/`.
2. Duplique o bloco do `<section class="hero">` ou crie uma nova seção com um novo `<video>` apontando para o novo arquivo.
3. Atualize título e artista conforme necessário.

## Stack

- HTML5 semântico + `<video>` nativo (controles, responsivo via `aspect-ratio`).
- CSS puro (custom properties, mobile-first, `prefers-reduced-motion`).
- JavaScript vanilla (sem dependências).

© Altos Louvores.
