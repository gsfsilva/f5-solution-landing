# F5 Solution — Landing Page

> Landing page de alta conversão para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP.

---

## Stack

- **HTML único + CSS modular** (custom properties)
- **Hospedagem:** Vercel *(Sprint 7 — go-live)*
- **Analytics:** Google Analytics 4 + Meta Pixel *(placeholders prontos)*
- **Integração:** WhatsApp Business *(placeholder pronto)*

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
│   ├── sprint-1-analise.md          ✅
│   ├── sprint-2-prompt-mestre.md    ✅
│   ├── sprint-4-refinamento.md      ✅
│   ├── sprint-5-cro.md              ✅
│   └── sprint-6-deploy-prep.md      ✅
├── src/
│   └── index.html                   ✅ Sprint 6 — produção-ready (866 linhas)
├── assets/
│   └── og-image.jpg                 🔜 Criar antes do deploy (1200×630px)
├── reports/
│   ├── sprint-1-report.md           ✅
│   ├── sprint-2-report.md           ✅
│   ├── sprint-3-report.md           ✅
│   ├── sprint-4-report.md           ✅
│   ├── sprint-5-report.md           ✅
│   └── sprint-6-report.md           ✅
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
| Sprint 6 | ✅ Concluída | Preparação técnica para deploy |
| Sprint 7 | 🔜 Pendente | Go-live: substituir placeholders e publicar |

---

## ⚠️ Checklist de Deploy (Sprint 7)

Antes de publicar, substituir obrigatoriamente:

- [ ] `WA_LINK` no JS → número real do WhatsApp Business (`55 + DDD + número`)
- [ ] `G-XXXXXXXXXX` → ID real da propriedade GA4
- [ ] `META_PIXEL_ID` → ID real do Pixel Meta
- [ ] `og-image.jpg` → criar imagem 1200×630px e hospedar
- [ ] `contato@f5solution.com.br` → e-mail real
- [ ] Logo textual → SVG real da marca
- [ ] Formulário `action=""` → endpoint real (Formspree, Make, N8N)

---

## Como rodar localmente

```bash
git clone https://github.com/gsfsilva/f5-solution-landing.git
cd f5-solution-landing
open src/index.html
```

---

## Deploy no Vercel

```
1. vercel.com → New Project → Import: gsfsilva/f5-solution-landing
2. Output directory: src
3. Framework Preset: Other
4. Deploy
5. Settings → Domains → adicionar f5solution.com.br
6. Apontar DNS conforme instrução do Vercel
```

---

*Projeto iniciado em maio de 2026.*
