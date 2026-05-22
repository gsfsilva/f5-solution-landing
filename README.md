# F5 Solution — Landing Page

> Landing page de alta conversão para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP.

---

## Stack

- **HTML + CSS modular** (custom properties)
- **Hospedagem:** Vercel *(Sprint 6)*
- **Analytics:** Google Analytics 4 + Meta Pixel *(Sprint 6)*
- **Integração:** WhatsApp Business

## Fontes

- Display/Headings: Inter com `letter-spacing: -0.036em`
- Corpo: Inter — [Google Fonts](https://fonts.google.com/specimen/Inter)

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
│   ├── sprint-4-refinamento.md      ✅ Refinamento visual
│   └── sprint-5-cro.md              ✅ Otimização de conversão
├── src/
│   └── index.html                   ✅ Sprint 5 — versão otimizada (763 linhas)
├── assets/
├── reports/
│   ├── sprint-1-report.md           ✅
│   ├── sprint-2-report.md           ✅
│   ├── sprint-3-report.md           ✅
│   ├── sprint-4-report.md           ✅
│   └── sprint-5-report.md           ✅
└── README.md
```

---

## Sprints

| Sprint | Status | Descrição |
|---|---|---|
| Sprint 1 | ✅ Concluída | Crítica estratégica do briefing |
| Sprint 2 | ✅ Concluída | Prompt Mestre |
| Sprint 3 | ✅ Concluída | HTML + CSS — primeira versão funcional |
| Sprint 4 | ✅ Concluída | Refinamento visual, UX e acessibilidade |
| Sprint 5 | ✅ Concluída | Otimização de conversão (CRO) |
| Sprint 6 | 🔜 Pendente | Deploy, integrações e placeholders reais |

---

## Como rodar localmente

```bash
git clone https://github.com/gsfsilva/f5-solution-landing.git
cd f5-solution-landing
open src/index.html
```

---

## Placeholders a substituir antes do deploy (Sprint 6)

- [ ] `5500000000000` → número real do WhatsApp Business
- [ ] `contato@f5solution.com.br` → e-mail real
- [ ] Logo textual → arquivo SVG real da marca
- [ ] IDs do GA4 e Meta Pixel

---

*Projeto iniciado em maio de 2026.*
