# Relatório de Sprint — Arquiteto de Software

**Projeto:** F5 Solution Landing Page
**Sprint:** 6 — Preparação Técnica para Deploy
**Data:** Maio de 2026
**Classificação:** CONFIDENCIAL — USO INTERNO

---

## Resumo Executivo

Sprint 6 concluída. `src/index.html` atualizado com todas as implementações técnicas de pré-produção. Arquivo: 866 linhas, ~79KB. A página está tecnicamente pronta para deploy na Vercel assim que os dados reais forem fornecidos.

---

## Commits desta Sprint

| Arquivo | Commit | Descrição |
|---|---|---|
| `src/index.html` | `feat(sprint-6)` | Production-ready: SEO, OG, GA4, Pixel, form, WA constant |
| `docs/sprint-6-deploy-prep.md` | `docs(sprint-6)` | Documentação técnica completa |
| `reports/sprint-6-report.md` | `reports` | Este relatório |
| `README.md` | `docs` | Status e deploy checklist atualizados |

---

## Métricas Comparativas

| Métrica | Sprint 5 | Sprint 6 |
|---|---|---|
| Linhas de código | 763 | 866 |
| Tamanho do arquivo | ~72KB | ~79KB |
| CTAs WhatsApp centralizados | Manual (href direto) | Via constante `WA_LINK` no JS |
| SEO | Básico | Completo (title, description, canonical, OG, Twitter) |
| GA4 | Ausente | Placeholder com script padrão |
| Meta Pixel | Ausente | Placeholder com script padrão + noscript |
| Formulário comercial | Ausente | Implementado (6 campos, sem backend) |
| Eventos de conversão | Ausente | `whatsapp_click` (GA4) + `Lead` (Pixel) |
| Acessibilidade | Boa | Completa (labels, for/id, aria-label, roles) |

---

## Arquitetura de Dados — O Que Precisa Ser Substituído

| Placeholder | Localização | Valor real necessário |
|---|---|---|
| `5500000000000` | Var `WA_LINK` no JS | Número WhatsApp Business (55 + DDD + número) |
| `G-XXXXXXXXXX` | Script GA4 no `<head>` | ID da propriedade GA4 |
| `META_PIXEL_ID` | Script Pixel no `<head>` | ID do pixel no gerenciador de anúncios |
| `og-image.jpg` | Meta tag OG no `<head>` | Imagem 1200×630px hospedada em f5solution.com.br |
| `contato@f5solution.com.br` | Footer + formulário | E-mail real de contato |

---

## Riscos Técnicos Remanescentes

| Risco | Severidade | Ação |
|---|---|---|
| Formulário sem backend real | 🟡 Médio | Integrar ao Formspree, Make, N8N ou endpoint próprio antes do deploy |
| GA4 com ID placeholder | 🟡 Médio | Criar propriedade GA4 e substituir ID antes da publicação |
| Pixel sem ID real | 🟡 Médio | Configurar pixel no Business Manager e substituir ID |
| Imagem OG inexistente | 🟠 Baixo | Criar 1200×630px com identidade da F5 e hospedar no domínio |
| Logo ainda textual | 🟠 Baixo | Substituir por SVG real na Sprint 7 |
| iOS Safari — backdropfilter | 🟡 Médio | Testar NAV em Safari antes do go-live |

---

## Próxima Sprint

**Sprint 7 — Publicação (Go-live)**

Pré-requisitos obrigatórios antes da Sprint 7:
- [ ] Número real do WhatsApp Business
- [ ] ID real do GA4
- [ ] ID real do Meta Pixel
- [ ] Imagem OG criada (1200×630px)
- [ ] E-mail real de contato
- [ ] Logo SVG aprovada
- [ ] Acesso ao painel Vercel (conta criada + projeto conectado ao repositório)
- [ ] Domínio f5solution.com.br com acesso ao painel DNS

Estimativa Sprint 7: 30-60 minutos após todos os pré-requisitos resolvidos.

---

## Instrução de Deploy (quando pronto)

```bash
# 1. Clonar repositório
git clone https://github.com/gsfsilva/f5-solution-landing.git

# 2. Substituir placeholders no src/index.html
# - WA_LINK: número real
# - G-XXXXXXXXXX: ID GA4
# - META_PIXEL_ID: ID Pixel
# - og-image.jpg: criar e hospedar

# 3. Conectar ao Vercel
# vercel.com → New Project → Import Git Repository → gsfsilva/f5-solution-landing
# Output directory: src
# Framework: Other (static)

# 4. Configurar domínio
# Vercel Dashboard → Project → Settings → Domains → f5solution.com.br
# Apontar DNS conforme instrução do Vercel
```

---

*Relatório gerado automaticamente ao final da Sprint 6.*
