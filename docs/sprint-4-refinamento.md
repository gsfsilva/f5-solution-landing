# Sprint 4 — Refinamento Visual e UX

> **Projeto:** F5 Solution Landing Page
> **Data:** Maio de 2026
> **Status:** ✅ Concluída

---

## Objetivo

Refinar a primeira versão HTML gerada na Sprint 3, elevando a qualidade visual, hierarquia, responsividade e percepção de valor da F5 Solution.

---

## O Que Foi Refinado

### 1. Sistema de Design
- Substituição de todas as classes Tailwind por CSS customizado modular e semântico
- CSS organizado por componente (nav, hero, strip, dor, steps, services, gestao, garantia, faq, cta, footer)
- Tokens de cor centralizados via `CSS custom properties` (`:root { --ink, --canvas, --go, --body, --rim, --sub }`)
- Tipografia com `letter-spacing: -0.035em` no display e `-0.025em` no heading — sensação Geist sem depender do font-face
- Classes utilitárias `.display`, `.heading`, `.label` para hierarquia consistente

### 2. NAV
- Transparente no topo; aplica fundo branco + blur ao scroll via classe `.scrolled`
- Altura reduzida para 60px — não compete com o hero
- CTA em `#0D1117` sólido, não verde — verde reservado para conversão principal
- Menu mobile com drawer animado (`transform + opacity`), não apenas `max-height`
- `aria-expanded`, `aria-controls`, `aria-hidden` corretos
- Ícones open/close sem dependência externa

### 3. Hero
- Layout two-column com `grid-template-columns: 1fr 1fr`
- Headline com `clamp(2.25rem, 4vw, 3.5rem)` — responsiva sem media query
- Badge técnico com dot verde animado (`pulse-go`)
- Gradiente sutil via `::before` radial — atmosfera sem peso visual
- Painel de operação técnica: métricas em 3 colunas, 3 tickets com status colorido, SLA bar
- Mobile: coluna única, painel removido para não pesar — hero abre limpo

### 4. Prova Rápida (Strip)
- Fundo `#0D1117` — bloco de impacto entre hero e conteúdo
- Grid 4 colunas desktop / 2 colunas mobile
- Ícone + título + descrição por item — sem card com borda
- Visual operacional, não decorativo

### 5. Dor e Contexto
- 3 cards com `hover: box-shadow + translateY(-2px)`
- Ícone com fundo colorido semântico (vermelho, amarelo, azul) — cada cor mapeia uma dor
- Frase de virada ao final da seção: copy de transição para solução

### 6. Como Funciona
- Desktop: timeline horizontal com `::after` pseudo-element como conector
- Mobile: sequência vertical com linha lateral
- Etapa 5 marcada com `#00C853` — última etapa = operação em curso
- Dois markups distintos (`.steps-desktop` / `.steps-mobile`) — display toggle via media query

### 7. Serviços
- Grid 3 colunas desktop / 2 tablet / 1 mobile
- Card `.featured` com borda `rgba(0,200,83,0.3)` e fundo leve — hierarquia visual
- Suporte remoto destacado como serviço principal
- Ícones lineares em `#0D1117` — operacionais, não decorativos

### 8. Gestão e Transparência
- Seção escura (`#0D1117`) two-column: copy + dashboard simulado
- Dashboard com 4 barras de progresso, 3 KPIs e header com badge de mês
- Barras com `transition: width 1.2s cubic-bezier(.22,1,.36,1)` — entrada suave
- Copy ancora: "Você não terceiriza no escuro" — frase de confiança

### 9. Garantia
- Card two-column: lado esquerdo copy + CTA, lado direito lista de itens incluídos
- Badge "30 dias sem custo" em verde sobre fundo branco
- CTA principal verde — único CTA verde na seção (foco de conversão)
- Mobile: coluna única com border-top separando os dois lados

### 10. FAQ
- Accordion com `scrollHeight` real — sem `max-height` fixo que corta respostas longas
- Ícone `+` que vira `×` (rotate 45deg) com transição CSS
- Foco visível (`outline: 2px solid var(--go)`) para acessibilidade de teclado
- `aria-expanded`, `aria-controls`, `role="region"` corretos

### 11. CTA Final
- Seção escura com radial gradient verde sutil via `::before`
- Headline com `clamp` — responsiva
- Botão com `box-shadow: 0 0 40px rgba(0,200,83,0.2)` — glow sutil, sem exagero
- Hover: `brightness(1.07) + translateY(-2px)`

### 12. Footer
- Grid 3 colunas desktop / 1 coluna mobile
- Contraste adequado: links em `rgba(255,255,255,0.5)` → `#fff` no hover
- Informações: WhatsApp, e-mail, cidade, domínio

### 13. Acessibilidade
- `aria-label` em todos os CTAs de WhatsApp
- `role="navigation"`, `role="contentinfo"`, `role="list"`, `role="listitem"`, `role="region"`
- Hierarquia de headings: `h1` no hero, `h2` por seção, `h3` nos cards
- `aria-hidden="true"` em todos os SVGs decorativos
- Focus ring verde em todos os elementos interativos

### 14. Performance
- JS mínimo: 3 funções (nav scroll, drawer mobile, FAQ accordion)
- CSS sem libs externas — apenas Google Fonts + Tailwind CDN (removido em favor de CSS puro)
- Sem animações pesadas — apenas `opacity + translateY` com `cubic-bezier` suave
- `IntersectionObserver` com `rootMargin` e `unobserve` após reveal

---

## Checklist de Qualidade

- [x] Página comunica terceirização de suporte técnico
- [x] Conversão única: WhatsApp com mensagem pré-preenchida
- [x] Visual premium — não parece template gratuito
- [x] Funciona bem no mobile (hero, CTA, cards, timeline, FAQ, footer)
- [x] Coerente com Linear + Stripe + Notion
- [x] Verde usado apenas como acento de conversão
- [x] Sem fotos genéricas de call center
- [x] Sem gradientes exagerados
- [x] Sem excesso de sombras
- [x] Hierarquia visual clara entre seções
