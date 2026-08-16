# SPEC — Melhorias Visuais do Altos Louvores

## 1. Objetivo

Realizar uma evolução visual completa do site **Altos Louvores**, mantendo a estrutura e as funcionalidades atuais, mas elevando significativamente a percepção de qualidade, modernidade, espiritualidade e profissionalismo.

Esta etapa deve ser **exclusivamente visual/UI/UX**.

Não implementar neste momento:

- Sistema de usuários
- Login/cadastro
- Banco de dados
- Painel administrativo
- Busca avançada
- Favoritos
- Categorias dinâmicas
- Newsletter
- Notificações
- Biblioteca completa de conteúdos

Esses recursos poderão ser implementados em uma segunda fase.

---

# 2. Diretriz visual

O novo visual deve transmitir:

- Fé
- Paz
- Esperança
- Adoração
- Elegância
- Modernidade
- Acolhimento
- Profundidade espiritual

Evitar uma aparência excessivamente religiosa/genérica.

A proposta visual deve combinar:

> **Portal cristão moderno + plataforma de conteúdo + estética cinematográfica**

---

# 3. Paleta de cores

Criar uma identidade visual consistente.

### Cores principais

```text
Background principal:
#0B1020

Background secundário:
#11182B

Superfície:
#17213A

Texto principal:
#FFFFFF

Texto secundário:
#B8C0D4

Cor de destaque:
#D4AF37

Cor de destaque secundária:
#F0D477
```

### Regras

- Não utilizar dourado excessivamente.
- O dourado deve aparecer principalmente em detalhes.
- Utilizar gradientes suaves.
- Garantir contraste WCAG adequado.
- Evitar excesso de cores.

---

# 4. Tipografia

Adotar uma hierarquia tipográfica clara.

### H1

Desktop:

```text
48px — 64px
font-weight: 700/800
```

Mobile:

```text
36px — 42px
```

### H2

```text
32px — 40px
font-weight: 700
```

### H3

```text
20px — 24px
font-weight: 600
```

### Texto

```text
16px — 18px
line-height: 1.6
```

### Texto secundário

```text
14px — 15px
```

Utilizar uma fonte moderna e altamente legível.

Sugestões:

- Inter
- Poppins
- Manrope

Para títulos especiais ou versículos, pode ser utilizada uma fonte serifada elegante, desde que não prejudique a consistência visual.

---

# 5. Header

## Objetivo

Transformar o header atual em uma navegação mais premium sem adicionar novas funcionalidades.

Manter:

- Logo/identidade Altos Louvores
- Em destaque
- Sobre
- Contato

### Desktop

Implementar:

- Header sticky.
- Fundo semitransparente.
- `backdrop-filter: blur`.
- Borda inferior extremamente discreta.
- Logo com maior destaque.
- Espaçamento horizontal equilibrado.
- Indicador visual da seção ativa.
- Transição suave nos links.

### Scroll

Quando o usuário começar a rolar:

- reduzir levemente a altura do header;
- aumentar o contraste do fundo;
- manter efeito de blur;
- preservar a legibilidade.

### Mobile

Implementar:

- botão hamburger;
- menu responsivo;
- animação suave de abertura;
- área clicável confortável;
- fechamento automático após selecionar uma opção.

---

# 6. Hero — principal prioridade

O Hero deve ser o elemento visual mais impactante da página.

Conteúdo atual:

**Não Desista — Ludmila Ferber**

Transformar essa área em um destaque cinematográfico.

## Estrutura

```text
LOUVOR EM DESTAQUE

Não Desista

Ludmila Ferber

Uma mensagem de fé e esperança
para encorajar o seu coração.

[ ▶ Assistir ao louvor ]

[ ↗ Compartilhar ]
```

## Imagem

Utilizar a thumbnail/imagem relacionada ao conteúdo.

A imagem deve:

- ocupar grande parte do Hero;
- possuir bordas arredondadas;
- utilizar overlay escuro;
- permitir leitura perfeita do texto;
- possuir gradiente lateral/inferior.

## Overlay

Utilizar gradiente semelhante a:

```css
background:
linear-gradient(
  90deg,
  rgba(11, 16, 32, 0.95) 0%,
  rgba(11, 16, 32, 0.70) 45%,
  rgba(11, 16, 32, 0.15) 100%
);
```

Adaptar para mobile.

---

# 7. Hero — animações

Adicionar microanimações discretas.

Ao carregar:

1. título aparece suavemente;
2. subtítulo aparece em seguida;
3. botões aparecem;
4. imagem possui pequena transição de escala.

Evitar animações exageradas.

Utilizar:

```text
opacity
transform
translateY
scale
```

Duração recomendada:

```text
300ms — 700ms
```

---

# 8. Botão principal

Criar botão visualmente forte:

```text
▶ Assistir ao louvor
```

Características:

- destaque dourado;
- alto contraste;
- border-radius moderno;
- sombra discreta;
- efeito hover;
- pequena animação no ícone.

Hover:

```text
transform: translateY(-2px)
```

---

# 9. Botão secundário

Criar botão:

```text
↗ Compartilhar
```

Características:

- fundo transparente/semitransparente;
- borda sutil;
- texto branco;
- hover com destaque dourado;
- ícone de compartilhamento.

---

# 10. Seção "Sobre"

Manter a seção atual, mas melhorar sua apresentação.

Os três blocos existentes:

- Mensagens que tocam
- Louvores & adoração
- Sempre disponível

devem ser transformados em cards modernos.

## Card

Cada card deve conter:

```text
[Ícone]

Título

Descrição
```

### Estilo

- background: `#11182B`;
- border-radius: 16px — 20px;
- border sutil;
- sombra discreta;
- padding generoso;
- altura uniforme.

### Hover

Ao passar o mouse:

- card sobe 4px;
- borda ganha destaque;
- ícone recebe pequeno efeito;
- transição de 250ms.

---

# 11. Ícones

Utilizar uma biblioteca consistente.

Preferencialmente:

**Lucide Icons** ou **Bootstrap Icons**.

Sugestões:

### Mensagens

```text
Sparkles
```

### Louvores

```text
Music
```

### Disponibilidade

```text
Smartphone
```

Não utilizar emojis como ícones principais da interface.

---

# 12. Seção de versículo

Transformar o versículo em uma das áreas visualmente mais bonitas da página.

## Estrutura

```text
✦ PALAVRA PARA O SEU DIA

"Texto do versículo"

Filipenses 4:13

[ ↻ Ver outro versículo ]
```

## Design

Criar uma seção visualmente diferente do restante da página.

Sugestões:

- background com gradiente;
- brilho radial extremamente discreto;
- textura visual muito sutil;
- bastante espaço vertical;
- tipografia elegante;
- versículo centralizado.

O usuário deve sentir que essa seção representa um momento de pausa/reflexão.

---

# 13. Versículo — botão

O botão:

```text
Ver outro versículo
```

deve possuir:

- ícone de atualização;
- borda;
- hover;
- transição suave.

Não alterar a funcionalidade atual.

Apenas melhorar visualmente.

---

# 14. Divisores de seção

Adicionar divisores visuais discretos entre as principais áreas.

Exemplo:

```text
──────── ✦ ────────
```

Ou utilizar linhas/gradientes muito sutis.

Evitar divisores pesados.

---

# 15. Espaçamento

Revisar completamente os espaçamentos.

### Desktop

Utilizar aproximadamente:

```text
section padding:
80px — 120px
```

### Tablet

```text
60px — 80px
```

### Mobile

```text
48px — 64px
```

Garantir bastante espaço entre:

- títulos;
- textos;
- cards;
- botões;
- seções.

O objetivo é criar uma sensação de sofisticação e "respiro".

---

# 16. Bordas e cards

Utilizar um padrão consistente.

### Border radius

```text
Cards:
16px — 20px

Botões:
10px — 14px

Hero:
20px — 24px
```

Evitar misturar muitos estilos de arredondamento.

---

# 17. Sombras

Utilizar sombras muito discretas.

Evitar:

```text
sombras muito pretas
sombras exageradas
efeito neon
```

Preferir profundidade através de:

- contraste;
- transparência;
- bordas;
- gradientes.

---

# 18. Microinterações

Implementar microinterações nos principais elementos:

### Menu

Hover suave.

### Botões

Pequeno deslocamento vertical.

### Cards

Elevação de 2–4px.

### Imagens

Pequeno zoom:

```text
scale(1.02)
```

### Links

Transição de cor.

Todas as animações devem ser rápidas e suaves.

---

# 19. Responsividade — prioridade alta

A interface deve ser desenvolvida prioritariamente pensando em smartphones.

## Mobile

Garantir:

- nenhuma rolagem horizontal;
- textos sem overflow;
- botões confortáveis;
- imagens proporcionais;
- cards empilhados;
- menu funcional;
- Hero adaptado;
- versículo legível;
- footer organizado.

### Hero mobile

Estrutura recomendada:

```text
┌───────────────────────┐
│                       │
│       IMAGEM          │
│                       │
├───────────────────────┤
│ LOUVOR EM DESTAQUE    │
│                       │
│ Não Desista           │
│ Ludmila Ferber        │
│                       │
│ Mensagem...           │
│                       │
│ [ Assistir ]          │
│ [ Compartilhar ]      │
└───────────────────────┘
```

---

# 20. Breakpoints

Garantir testes em pelo menos:

```text
320px
360px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

---

# 21. Footer

Manter o footer simples, mas visualmente mais profissional.

Estrutura:

```text
ALTOS LOUVORES

Louvores, mensagens e palavras
que fortalecem sua fé.

Início · Sobre · Contato

────────────────────────

© 2026 Altos Louvores

Que a paz e a fé te acompanhem.
```

Utilizar contraste adequado e bastante espaçamento.

---

# 22. Imagens

Revisar todas as imagens utilizadas.

Priorizar:

- alta resolução;
- proporção adequada;
- imagens relacionadas ao conteúdo;
- compressão;
- WebP/AVIF quando possível;
- `loading="lazy"` para imagens fora do primeiro viewport.

Não utilizar imagens genéricas de baixa qualidade.

---

# 23. Efeitos de fundo

Adicionar profundidade visual utilizando:

### Gradientes

```text
background:
radial-gradient(...)
```

### Glow

Utilizar pequenos pontos de iluminação difusa.

### Textura

Opcionalmente utilizar uma textura extremamente discreta.

Evitar fundos visualmente poluídos.

---

# 24. Acessibilidade visual

Garantir:

- contraste adequado;
- foco visível;
- navegação por teclado;
- textos alternativos nas imagens;
- botões com labels claros;
- tamanho mínimo adequado para áreas clicáveis;
- respeito a `prefers-reduced-motion`.

Quando o usuário utilizar redução de movimento:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    transition-duration: 0.01ms;
  }
}
```

---

# 25. Performance visual

As melhorias não devem prejudicar o carregamento.

Implementar:

- compressão das imagens;
- formatos modernos;
- lazy loading;
- evitar bibliotecas desnecessárias;
- evitar animações pesadas;
- evitar vídeos automáticos;
- otimizar fontes.

O primeiro conteúdo visível deve carregar rapidamente.

---

# 26. SEO visual/técnico básico

Embora esta etapa seja principalmente visual, realizar melhorias básicas:

### Title

```text
Altos Louvores | Louvores, Mensagens e Versículos
```

### Description

```text
Encontre louvores, mensagens de fé e versículos
para fortalecer sua caminhada com Deus.
```

Implementar também:

- favicon;
- Open Graph;
- imagem de compartilhamento;
- `alt` nas imagens;
- hierarquia correta de H1/H2/H3.

---

# 27. Open Graph

Criar uma imagem específica para compartilhamento.

Conceito:

```text
ALTOS LOUVORES

Louvores • Fé • Esperança

"Que a paz e a fé te acompanhem."
```

Dimensão:

```text
1200 × 630
```

---

# 28. Estados de interação

Garantir estados visuais para:

- hover;
- focus;
- active;
- disabled;
- carregamento.

Todos os elementos interativos devem fornecer feedback visual.

---

# 29. Não exagerar nos efeitos

Regra fundamental:

> **Elegância acima de efeitos.**

Evitar:

- partículas excessivas;
- animações contínuas;
- parallax exagerado;
- neon;
- textos piscando;
- excesso de gradientes;
- efeitos 3D;
- elementos flutuantes sem propósito.

A interface deve transmitir paz e sofisticação.

---

# 30. Checklist de implementação

## Header

- [ ] Header sticky
- [ ] Efeito glass/blur
- [ ] Melhorar logo
- [ ] Melhorar espaçamento
- [ ] Hover dos links
- [ ] Indicador de seção
- [ ] Menu mobile

## Hero

- [ ] Redesenhar Hero
- [ ] Adicionar imagem de destaque
- [ ] Overlay
- [ ] Gradiente
- [ ] Melhorar H1
- [ ] Melhorar subtítulo
- [ ] Botão principal
- [ ] Botão compartilhar
- [ ] Microanimações

## Cards

- [ ] Redesenhar cards
- [ ] Adicionar ícones
- [ ] Padronizar altura
- [ ] Melhorar espaçamento
- [ ] Hover
- [ ] Bordas
- [ ] Sombras

## Versículo

- [ ] Redesenhar seção
- [ ] Criar destaque visual
- [ ] Melhorar tipografia
- [ ] Melhorar botão
- [ ] Adicionar elemento decorativo

## Footer

- [ ] Melhorar layout
- [ ] Melhorar tipografia
- [ ] Melhorar espaçamento
- [ ] Melhorar contraste

## Responsividade

- [ ] 320px
- [ ] 360px
- [ ] 375px
- [ ] 390px
- [ ] 414px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1440px
- [ ] 1920px

## Acessibilidade

- [ ] Contraste
- [ ] Focus
- [ ] Alt
- [ ] Navegação por teclado
- [ ] Reduced motion

## Performance

- [ ] WebP/AVIF
- [ ] Lazy loading
- [ ] Otimizar fontes
- [ ] Otimizar imagens
- [ ] Reduzir dependências

## SEO básico

- [ ] Title
- [ ] Meta description
- [ ] Favicon
- [ ] Open Graph
- [ ] Imagem OG
- [ ] Hierarquia de headings

---

# 31. Critério de aceitação

A implementação será considerada concluída quando:

1. O site apresentar aparência significativamente mais profissional.
2. O Hero for claramente o principal elemento visual.
3. A identidade visual estiver consistente em todas as seções.
4. Cards, botões e elementos interativos possuírem estados visuais.
5. O versículo possuir destaque visual especial.
6. O site funcionar perfeitamente em smartphones.
7. Não existir rolagem horizontal.
8. As animações forem suaves e discretas.
9. O contraste e a acessibilidade forem adequados.
10. A melhoria visual não causar degradação perceptível de performance.
11. O conteúdo e as funcionalidades atuais continuarem funcionando.
12. Nenhuma funcionalidade complexa da segunda fase seja introduzida.

---

# 32. Resultado esperado

Ao finalizar esta SPEC, o **Altos Louvores** deve manter sua simplicidade atual, porém apresentar uma experiência visual muito mais refinada.

A percepção desejada é:

> **"Um portal cristão moderno, elegante, acolhedor e profissional."**

A primeira versão deve priorizar **UI/UX e apresentação**, deixando a expansão funcional para uma segunda etapa.