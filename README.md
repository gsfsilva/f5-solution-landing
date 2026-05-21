# F5 Solution — Landing Page

> Landing page de alta conversão para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP.

---

## Stack

- **HTML + Tailwind CSS** (CDN, zero build step)
- **Hospedagem:** Vercel
- **Analytics:** Google Analytics 4 + Meta Pixel *(Sprint 5)*
- **Integração:** WhatsApp Business

## Fontes

- Títulos: Inter (letter-spacing -0.02em, substituta do Geist)
- Corpo: Inter — [Google Fonts](https://fonts.google.com/specimen/Inter)

## Paleta

| Token | Hex |
|---|---|
| Primária | `#0D1117` |
| Fundo | `#F8F9FA` |
| Acento | `#00C853` |
| Texto | `#2B2B2B` |
| Borda | `#E5E7EB` |
| Texto secundário | `#6B7280` |

---

## Estrutura do Projeto

```
f5-solution-landing/
├── docs/
│   ├── sprint-1-analise.md         ✅ Crítica estratégica do briefing
│   └── sprint-2-prompt-mestre.md   ✅ Prompt Mestre completo
├── src/
│   └── index.html                  ✅ Sprint 3 — primeira versão funcional
├── assets/
├── reports/
│   ├── sprint-1-report.md          ✅
│   ├── sprint-2-report.md          ✅
│   └── sprint-3-report.md          ✅
└── README.md
```

---

## Sprints

| Sprint | Status | Descrição |
|---|---|---|
| Sprint 1 | ✅ Concluída | Crítica estratégica do briefing |
| Sprint 2 | ✅ Concluída | Prompt Mestre |
| Sprint 3 | ✅ Concluída | HTML + Tailwind — primeira versão funcional |
| Sprint 4 | 🔜 Pendente | Revisão, refinamento e substituição de placeholders |
| Sprint 5 | 🔜 Pendente | GA4, Meta Pixel e deploy em Vercel |

---

## Como rodar localmente

```bash
git clone https://github.com/gsfsilva/f5-solution-landing.git
cd f5-solution-landing
open src/index.html
```

Ou com VS Code + extensão **Live Server** → botão "Go Live".

---

## Placeholders a substituir antes do deploy

- [ ] Número WhatsApp: `5500000000000` → número real
- [ ] E-mail: `contato@f5solution.com.br` → e-mail real
- [ ] Logo textual → SVG real da marca
- [ ] Dados do dashboard (simulados) → dados reais

---

*Projeto iniciado em maio de 2026.*
