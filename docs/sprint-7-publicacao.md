# Sprint 7 — Plano de Publicação (Go-live)

> **Projeto:** F5 Solution Landing Page
> **Data:** Maio de 2026
> **Status:** ✅ HTML aprovado para deploy — aguardando dados reais

---

## Status do HTML

**O HTML está pronto para deploy.**

Validação automatizada: **38/38 checks passando** — zero falhas críticas.

Nenhum ajuste estrutural necessário. O arquivo `src/index.html` pode ser publicado assim que os placeholders abaixo forem substituídos.

---

## Estrutura de Arquivos para Deploy

```
f5-solution-landing/
├── index.html          ← arquivo principal (conteúdo de src/index.html)
└── og-image.jpg        ← criar e adicionar antes do deploy (1200×630px)
```

> **Nota Vercel:** o output directory deve ser configurado como `src` no painel.
> O Vercel servirá `src/index.html` como raiz do site.

---

## Placeholders Pendentes — Substituir Antes do Deploy

| # | Placeholder | Localização no HTML | O que substituir |
|---|---|---|---|
| 1 | `5500000000000` | Var `WA_LINK` no `<script>` final | Número real: `55` + DDD + número (ex: `5511999998888`) |
| 2 | `G-XXXXXXXXXX` | `<script>` GA4 no `<head>` | ID da propriedade GA4 (criar em analytics.google.com) |
| 3 | `META_PIXEL_ID` | `<script>` Pixel no `<head>` | ID do Pixel Meta (criar em business.facebook.com) |
| 4 | `og-image.jpg` | `<meta property="og:image">` | Criar imagem 1200×630px e hospedar em /og-image.jpg |
| 5 | `contato@f5solution.com.br` | Footer + formulário | E-mail comercial real |
| 6 | `action=""` no form | `<form id="form-contato">` | Endpoint real (Formspree, Make, N8N ou webhook) |

### Como substituir o WhatsApp (item 1)

Abrir `index.html`, localizar a linha:

```javascript
var WA_LINK = 'https://wa.me/5500000000000?text=...';
```

Substituir `5500000000000` pelo número real. Todos os botões da página atualizam automaticamente — **editar apenas esta linha**.

---

## Passo a Passo — Publicar na Vercel

### Opção A — Via GitHub (recomendada)

```
1. Acessar vercel.com e fazer login
2. Clicar em "Add New..." → "Project"
3. Selecionar "Import Git Repository"
4. Conectar conta GitHub e selecionar: gsfsilva/f5-solution-landing
5. Em "Configure Project":
   - Framework Preset: Other
   - Root Directory: . (raiz)
   - Output Directory: src
   - Build Command: (deixar vazio)
6. Clicar em "Deploy"
7. Aguardar deploy (30–60 segundos)
8. Testar URL temporária (ex: f5-solution-landing.vercel.app)
9. Só conectar domínio após validar a URL temporária
```

### Opção B — Upload manual (sem GitHub)

```
1. Acessar vercel.com e fazer login
2. Clicar em "Add New..." → "Project"
3. Selecionar "Deploy without Git"
4. Arrastar a pasta contendo index.html (e og-image.jpg)
5. Aguardar deploy
6. Testar URL temporária
```

---

## Configuração de Domínio (após validar URL temporária)

```
1. Vercel Dashboard → selecionar o projeto
2. Ir em Settings → Domains
3. Clicar em "Add"
4. Digitar: f5solution.com.br
5. Vercel exibirá os registros DNS a configurar
6. Acessar painel do registrador do domínio (ex: Registro.br, Hostinger, GoDaddy)
7. Adicionar os registros DNS conforme instrução da Vercel (geralmente tipo A ou CNAME)
8. Aguardar propagação DNS (pode levar de 5 minutos a 48h)
9. Vercel ativa HTTPS automaticamente via Let's Encrypt
10. Validar acesso via https://f5solution.com.br
```

> **Atenção:** configurar também o redirect www → sem www (ou o contrário).
> A Vercel oferece essa opção automaticamente ao adicionar o domínio.

---

## Checklist de Validação Pós-Deploy

### Desktop (Chrome, Firefox, Edge)
- [ ] Hero abre com headline, subheadline e painel técnico visíveis
- [ ] NAV sticky funciona ao scroll — transparente no topo, opaco ao rolar
- [ ] Links do menu rolam para seções corretas: Serviços / Como funciona / Garantia / FAQ
- [ ] Painel de operação técnica renderiza (tickets, métricas, SLA)
- [ ] Seção de prova rápida (strip escuro) renderiza corretamente
- [ ] Cards de dor, serviços e garantia renderizam sem quebra
- [ ] Timeline de "Como funciona" aparece horizontal
- [ ] Painel de gestão/transparência renderiza métricas e barras
- [ ] FAQ accordion abre e fecha corretamente
- [ ] Formulário exibe todos os campos e select de clientes
- [ ] Footer renderiza em 3 colunas sem overflow
- [ ] Nenhum erro crítico no console (F12 → Console)

### Mobile (iOS Safari, Android Chrome)
- [ ] Hero ocupa tela inteira com headline grande e legível
- [ ] Painel técnico não aparece no mobile (oculto por design)
- [ ] Menu hamburguer abre e fecha o drawer
- [ ] Links do drawer rolam para as seções corretas
- [ ] Botão flutuante WhatsApp (FAB) aparece no canto inferior direito
- [ ] CTAs têm tamanho tocável adequado (mínimo 44px)
- [ ] Cards empilham em coluna única corretamente
- [ ] Timeline de "Como funciona" aparece vertical
- [ ] FAQ é confortável para toque
- [ ] Formulário é fácil de preencher no mobile
- [ ] Footer colapsa em coluna única sem overflow
- [ ] Página carrega rápido (< 3 segundos em 4G)

### Conversão
- [ ] Clicar em qualquer botão verde abre o WhatsApp correto
- [ ] Mensagem automática aparece preenchida: "Olá! Vim pelo site da F5 Solution..."
- [ ] Número de destino é o número real (não o placeholder)
- [ ] Evento `whatsapp_click` dispara no GA4 (verificar em tempo real)
- [ ] Evento `Lead` dispara no Pixel Meta (verificar em Events Manager)
- [ ] Formulário exibe feedback visual ao submit (sem envio real)
- [ ] Formulário não usa mensagem enganosa de "enviado com sucesso"

### SEO (verificar após indexação)
- [ ] Title correto: "F5 Solution | Terceirização de Suporte Técnico para Revendas"
- [ ] Description correta (verificar via view-source ou SEO tools)
- [ ] Canonical aponta para https://f5solution.com.br/
- [ ] Preview social funciona (testar em: https://www.opengraph.xyz)
- [ ] Imagem OG aparece no preview (após og-image.jpg criada)
- [ ] Página é indexável (sem meta robots noindex)
- [ ] Google Search Console — adicionar propriedade e validar

### Performance (verificar via PageSpeed Insights)
- [ ] Score mobile > 70 (aceitável sem imagens pesadas)
- [ ] Score desktop > 85
- [ ] Sem erros críticos de acessibilidade
- [ ] Sem recursos bloqueantes críticos
- [ ] HTTPS ativo e certificado válido
- [ ] Nenhum recurso 404 no console

---

## Riscos Antes de Produção

| Risco | Severidade | Ação recomendada |
|---|---|---|
| Número WA ainda placeholder | 🔴 Crítico | Substituir antes de qualquer divulgação — botões não funcionarão |
| Formulário sem endpoint | 🟡 Médio | Integrar ao Formspree ou Make antes do go-live oficial |
| og-image.jpg inexistente | 🟠 Baixo | Preview social aparecerá sem imagem — criar antes de divulgar em redes |
| GA4/Pixel sem ID real | 🟠 Baixo | Página funciona, mas sem rastreamento — configurar antes de campanhas pagas |
| Logo ainda textual | 🟠 Baixo | Funcional, mas menos profissional — substituir por SVG assim que disponível |
| iOS Safari — backdrop-filter | 🟡 Médio | Testar NAV em iPhone real antes do go-live |
| DNS propagation delay | 🟠 Baixo | Aguardar até 48h após configuração — normal |
| Política de privacidade ausente | 🟡 Médio | Necessária se GA4 e Pixel estiverem ativos — adicionar antes de campanhas |

---

## Resumo de Ações para Go-live

```
OBRIGATÓRIO (sem isso a página não converte):
✅ Substituir WA_LINK com número real

IMPORTANTE (antes de campanhas pagas):
○ Criar og-image.jpg (1200×630px)
○ Configurar GA4 e substituir G-XXXXXXXXXX
○ Configurar Meta Pixel e substituir META_PIXEL_ID
○ Integrar formulário a endpoint real

RECOMENDADO (antes de divulgação pública):
○ Substituir logo textual por SVG real
○ Adicionar política de privacidade
○ Testar em iOS Safari e Android Chrome reais
○ Rodar Google PageSpeed Insights e corrigir alertas
```
