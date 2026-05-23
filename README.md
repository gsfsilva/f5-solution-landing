# F5 Solution — Landing Page

> Landing page de alta conversão para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP.

---

## 🚀 Status do Projeto

**PRONTO PARA DEPLOY** — aguardando substituição dos placeholders abaixo.

---

## ⚠️ Substituir Antes de Publicar

| # | Localização | Substituir por |
|---|---|---|
| 1 | Var `WA_LINK` no JS | Número real do WhatsApp Business (`55DDD+número`) |
| 2 | `G-XXXXXXXXXX` no `<head>` | ID real da propriedade GA4 |
| 3 | `META_PIXEL_ID` no `<head>` | ID real do Pixel Meta |
| 4 | `/og-image.jpg` | Imagem 1200×630px criada |
| 5 | `contato@f5solution.com.br` | E-mail comercial real |
| 6 | `action=""` no formulário | Endpoint real (Formspree, Make, N8N) |

---

## Stack

- **HTML único + CSS modular** (custom properties, sem framework)
- **Hospedagem:** Vercel
- **Domínio:** f5solution.com.br

## Sprints

| Sprint | Status | Entregável |
|---|---|---|
| 1 | ✅ | Crítica estratégica |
| 2 | ✅ | Prompt Mestre |
| 3 | ✅ | HTML v1 funcional |
| 4 | ✅ | Refinamento visual e UX |
| 5 | ✅ | Otimização de conversão (CRO) |
| 6 | ✅ | Preparação técnica (SEO, OG, GA4, Pixel, form) |
| 7 | ✅ | Plano de publicação e validação |

---

## Deploy na Vercel

```
1. vercel.com → New Project → Import: gsfsilva/f5-solution-landing
2. Output Directory: src
3. Framework Preset: Other
4. Build Command: (vazio)
5. Deploy → testar URL temporária
6. Settings → Domains → adicionar f5solution.com.br
7. Configurar DNS conforme Vercel → aguardar propagação
```

## Rodar Localmente

```bash
git clone https://github.com/gsfsilva/f5-solution-landing.git
open src/index.html
```

---

## Paleta

| Token | Hex |
|---|---|
| Primária | `#0D1117` |
| Fundo | `#F8F9FA` |
| Acento | `#00C853` |
| Texto | `#2B2B2B` |
| Borda | `#E5E7EB` |
| Texto sec. | `#6B7280` |

---

*Projeto desenvolvido em 7 sprints — maio de 2026.*
