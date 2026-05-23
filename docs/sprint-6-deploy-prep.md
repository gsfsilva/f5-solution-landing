# Sprint 6 — Preparação Técnica para Deploy

> **Projeto:** F5 Solution Landing Page
> **Data:** Maio de 2026
> **Status:** ✅ Concluída

---

## Objetivo

Preparar o HTML único da landing page para uso real: SEO, Open Graph, placeholders de rastreamento, formulário comercial, centralização do link WhatsApp e eventos de conversão.

---

## O Que Foi Implementado

### 1. WhatsApp — Link centralizado via JS

Todos os CTAs de WhatsApp foram convertidos para a classe `.wa-link` com `href="#"`.

O JavaScript injeta o link real em todos os elementos `.wa-link` a partir de uma única constante `WA_LINK` no topo do script:

```javascript
// TODO: substituir pelo número real antes do deploy
var WA_LINK = 'https://wa.me/5500000000000?text=...';
document.querySelectorAll('.wa-link').forEach(function(el){
  el.setAttribute('href', WA_LINK);
});
```

**Para trocar o número:** editar apenas a variável `WA_LINK` — todos os botões atualizam automaticamente.

CTAs cobertos: NAV, hero, garantia, CTA final, footer, FAB mobile, menu mobile.

---

### 2. Formulário Comercial

Adicionada seção `#form-contato` entre FAQ e CTA final.

Campos: Nome, Empresa, WhatsApp, E-mail, Quantidade de clientes, Mensagem.

Comportamento sem backend:
- `method="post"`, `action=""` (sem envio real)
- Ao submit: mensagem de feedback visual, botão desabilitado
- Comentário TODO para integração futura (Formspree, Make, N8N, webhook)
- `autocomplete` correto em todos os campos
- Labels acessíveis com `for` linkado ao `id`

O formulário é visualmente discreto — posicionado abaixo do FAQ, antes do CTA final. O WhatsApp continua sendo o CTA principal.

---

### 3. SEO Básico

| Tag | Valor |
|---|---|
| `<title>` | F5 Solution \| Terceirização de Suporte Técnico para Revendas |
| `<meta name="description">` | Terceirize o suporte técnico da sua revenda com a F5 Solution. Atendimento remoto, SLA, indicadores, documentação e 30 dias de experiência sem custo. |
| `<link rel="canonical">` | https://f5solution.com.br/ |
| `lang` | pt-BR |
| Heading hierarchy | H1 único no hero → H2 por seção → H3 nos cards |

---

### 4. Open Graph e Twitter Card

```html
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://f5solution.com.br/" />
<meta property="og:title"       content="F5 Solution | ..." />
<meta property="og:description" content="..." />
<meta property="og:image"       content="https://f5solution.com.br/og-image.jpg" />
<meta name="twitter:card"       content="summary_large_image" />
```

**TODO:** criar imagem OG 1200×630px e subir em `/og-image.jpg` antes do deploy.

---

### 5. GA4 — Placeholder

```html
<!-- TODO: substituir G-XXXXXXXXXX pelo ID real do GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Script padrão incluído. Substituir `G-XXXXXXXXXX` pelo ID real ao criar a propriedade no Google Analytics.

---

### 6. Meta Pixel — Placeholder

```html
<!-- TODO: substituir META_PIXEL_ID pelo ID real do Pixel Meta -->
<script>fbq('init', 'META_PIXEL_ID');</script>
```

Script padrão incluído com `<noscript>` fallback. Substituir `META_PIXEL_ID` pelo ID real no gerenciador de anúncios.

---

### 7. Eventos de Conversão

Todos os CTAs de WhatsApp possuem `data-conversion="whatsapp"`.

O JS escuta cliques e dispara:
- `gtag('event', 'whatsapp_click', {...})` se GA4 estiver configurado
- `fbq('track', 'Lead')` se Pixel estiver configurado
- Não quebra a página se nenhum dos dois estiver ativo

---

### 8. Acessibilidade

- `aria-label` em todos os CTAs de WhatsApp
- `aria-expanded` + `aria-controls` no FAQ accordion
- `aria-label` no hamburguer e mobile drawer
- `role="navigation"`, `role="dialog"`, `role="contentinfo"`
- `for` + `id` em todos os campos do formulário
- `aria-hidden="true"` em SVGs decorativos
- Focus ring: `outline: 2px solid var(--go)` em todos os interativos

---

### 9. Performance

- Sem imagens externas — apenas SVGs inline
- Animações: apenas `opacity + translateY` com `IntersectionObserver`
- JS: ~80 linhas, sem dependências externas
- CSS: ~350 linhas de CSS puro, sem Tailwind CDN (removido em favor de CSS modular)
- Google Fonts com `rel="preconnect"` antes do link

---

### 10. Preparação para Vercel

Comentário técnico no topo do arquivo:

```
CHECKLIST ANTES DO DEPLOY:
1. Substituir WA_NUMBER (var WA_LINK no JS)
2. Substituir G-XXXXXXXXXX pelo ID real do GA4
3. Substituir META_PIXEL_ID pelo ID real do Pixel Meta
4. Criar e subir imagem /og-image.jpg (1200×630px)
5. Salvar como index.html e conectar ao Vercel
6. Configurar domínio f5solution.com.br no painel Vercel
```

---

## IDs de Seção (links âncora)

| Seção | ID |
|---|---|
| Hero | `#hero` |
| Prova rápida | `#strip` |
| Dor e contexto | `#dor` |
| Como funciona | `#como-funciona` |
| Serviços | `#servicos` |
| Gestão | *(sem âncora no menu)* |
| Garantia | `#garantia` |
| FAQ | `#faq` |
| Formulário | `#form-contato` |

---

## Checklist de Integridade Final

- [x] WhatsApp é a conversão principal
- [x] Formulário não compete com WhatsApp
- [x] SEO básico presente
- [x] GA4 e Pixel apenas como placeholders
- [x] Nenhum dado real inventado
- [x] Visual premium preservado
- [x] Mobile funcional
- [x] HTML único
- [x] Pronto para Sprint 7 (publicação)
