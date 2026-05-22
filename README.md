# F5 Solution — Landing Page

> Landing page de alta conversão para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP.

---

## Stack

- **HTML + CSS modular** (custom properties) + **Tailwind CDN** (Sprint 3) → **CSS puro** (Sprint 4)
- **Hospedagem:** Vercel *(Sprint 5)*
- **Analytics:** Google Analytics 4 + Meta Pixel *(Sprint 5)*
- **Integração:** WhatsApp Business

## Fontes

- Display/Headings: Inter com `letter-spacing: -0.035em` (equivalente visual ao Geist)
- Corpo: Inter — [Google Fonts](https://fonts.google.com/specimen/Inter)
- Geist real será carregado via Vercel CDN no deploy

## Paleta

| Token | Hex | CSS var |
|---|---|---|
| Primária | `#0D1117` | `--ink` |
| Fundo | `#F8F9FA` | `--canvas` |
| Acento | `#00C853` | `--go` |
| Texto | `#2B2B2B` | `--body` |
| Borda | `#E5E7EB` | `--rim` |
| Texto secundário | `#6B7280` | `--sub` |

---

## Estrutura do Projeto

```
f5-solution-landing/
├── docs/
│   ├── sprint-1-analise.md          ✅ Crítica estratégica
│   ├── sprint-2-prompt-mestre.md    ✅ Prompt Mestre
│   └── sprint-4-refinamento.md      ✅ Documentação de refinamento
├── src/
│   └── index.html                   ✅ Sprint 4 — versão refinada (1.125 linhas)
├── assets/
├── reports/
│   ├── sprint-1-report.md           ✅
│   ├── sprint-2-report.md           ✅
│   ├── sprint-3-report.md           ✅
│   └── sprint-4-report.md           ✅
└── README.md
```

---

## Sprints

| Sprint | Status | Descrição |
|---|---|---|
| Sprint 1 | ✅ Concluída | Crítica estratégica do briefing |
| Sprint 2 | ✅ Concluída | Prompt Mestre |
| Sprint 3 | ✅ Concluída | HTML + Tailwind — primeira versão funcional |
| Sprint 4 | ✅ Concluída | Refinamento visual, UX e acessibilidade |
| Sprint 5 | 🔜 Pendente | Integrações, placeholders reais e deploy Vercel |

---

## Como rodar localmente

```bash
git clone https://github.com/gsfsilva/f5-solution-landing.git
cd f5-solution-landing
open src/index.html
```

Ou com VS Code + extensão **Live Server** → botão "Go Live".

---

## Placeholders a substituir antes do deploy (Sprint 5)

- [ ] `5500000000000` → número real do WhatsApp Business
- [ ] `contato@f5solution.com.br` → e-mail real
- [ ] Logo textual → arquivo SVG real da marca
- [ ] Dados do dashboard (simulados) → dados reais quando disponíveis

---

*Projeto iniciado em maio de 2026.*
