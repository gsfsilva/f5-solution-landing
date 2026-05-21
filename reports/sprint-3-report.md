# Relatório de Sprint — Arquiteto de Software

**Projeto:** F5 Solution Landing Page
**Sprint:** 3 — HTML + Tailwind CSS (Primeira Versão Funcional)
**Data:** Maio de 2026
**Classificação:** CONFIDENCIAL — USO INTERNO

---

## Resumo Executivo

Sprint 3 concluída. Primeira versão funcional da landing page gerada, validada e commitada em `src/index.html`. O arquivo tem 932 linhas e ~65KB. Todas as 11 seções do Prompt Mestre foram implementadas. A página está funcional, responsiva e pronta para visualização local ou deploy em Vercel.

---

## O Que Foi Entregue

| Entregável | Status | Detalhe |
|---|---|---|
| `src/index.html` — primeira versão funcional | ✅ | 932 linhas, ~65KB |
| 11 seções completas conforme Prompt Mestre | ✅ | NAV, HERO, PROVA, DOR, COMO FUNCIONA, SERVIÇOS, GESTÃO, GARANTIA, FAQ, CTA FINAL, FOOTER |
| Copy literal implementada | ✅ | Headline, subheadline, bullets, CTAs, FAQ, CTA final |
| Responsividade mobile/desktop | ✅ | Breakpoints Tailwind sm/md/lg |
| Menu mobile com drawer | ✅ | Hamburger com open/close e close on outside click |
| FAQ accordion animado | ✅ | max-height transition, ícone rotativo |
| Scroll fade-in via IntersectionObserver | ✅ | opacity + translateY, stagger em grids |
| Dashboard simulado no hero | ✅ | Tickets com status, métricas, SLA bar |
| Painel de métricas em Gestão e Transparência | ✅ | Barras de progresso, 4 indicadores simulados |
| Floating WhatsApp button (mobile) | ✅ | Fixo, visible apenas em mobile |
| Todos os CTAs apontando para placeholder WA | ✅ | wa.me/5500000000000 com mensagem pré-preenchida |

---

## Decisões Técnicas Tomadas na Sprint

| Decisão | Justificativa |
|---|---|
| Tailwind via CDN com config customizada | Zero build step, deploy imediato no Vercel |
| Inter como substituta do Geist | Geist não disponível no Google Fonts; Inter via Google Fonts com letter-spacing -0.02em reproduz o efeito |
| IntersectionObserver nativo (sem lib) | Sem dependência, compatível com todos os browsers modernos |
| FAQ via max-height transition (sem JS lib) | Solução CSS-first, leve e acessível |
| Dashboard e métricas com dados simulados | Dados reais serão substituídos antes do deploy quando cliente fornecer números |
| Noise overlay via SVG inline (CSS ::after) | Textura sutil nas seções escuras sem imagem externa |
| Floating WA button apenas em mobile | Desktop já tem CTA fixo no NAV sticky |

---

## Pendências para Sprint 4 (Revisão e Refinamento)

| Item | Prioridade |
|---|---|
| Substituir número placeholder do WhatsApp | 🔴 Alta — bloqueia conversão real |
| Substituir dados simulados do dashboard por reais | 🟡 Média — credibilidade |
| Logo SVG real substituindo texto "F5 Solution" | 🟡 Média — identidade visual |
| E-mail real substituindo placeholder | 🟡 Média |
| Teste em dispositivos reais (iOS Safari, Android Chrome) | 🔴 Alta — validação mobile |
| Validação de acessibilidade (contraste, ARIA) | 🟡 Média |
| Ajuste fino de espaçamentos e tipografia | 🟠 Baixa |

---

## Próxima Sprint

**Sprint 4 — Revisão, Refinamento e Substituição de Placeholders**
Objetivo: Substituir todos os dados placeholder, ajustar visual com base em review do cliente e preparar para deploy.

Pré-requisito: Cliente revisar a Sprint 3 e listar ajustes necessários.

---

## Como Visualizar Localmente

```bash
# Clonar repositório
git clone https://github.com/gsfsilva/f5-solution-landing.git
cd f5-solution-landing

# Abrir no browser
open src/index.html

# Ou com VS Code Live Server
code .
# → instalar extensão "Live Server" → botão "Go Live"
```

---

*Relatório gerado automaticamente ao final da Sprint 3.*
