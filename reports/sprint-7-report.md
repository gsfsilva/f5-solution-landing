# Relatório de Sprint — Arquiteto de Software

**Projeto:** F5 Solution Landing Page
**Sprint:** 7 — Plano de Publicação (Go-live)
**Data:** Maio de 2026
**Classificação:** CONFIDENCIAL — USO INTERNO

---

## Resumo Executivo

Sprint 7 concluída. Nenhum ajuste de código necessário — validação automatizada confirmou 38/38 checks passando no HTML da Sprint 6. Entregues: plano de publicação completo, checklist pós-deploy e mapa de riscos antes do go-live.

---

## Validação do HTML (38/38 — zero falhas)

| Categoria | Checks | Status |
|---|---|---|
| WhatsApp | WA_LINK, wa-link class, data-conversion, target, rel | ✅ 5/5 |
| Analytics | GA4 placeholder, Pixel placeholder, eventos seguros | ✅ 3/3 |
| SEO | title, description, canonical, lang, viewport, H1, OG tags, Twitter | ✅ 8/8 |
| Formulário | form-contato, method=post, sem envio fake, TODO integração | ✅ 4/4 |
| IDs âncora | hero, servicos, como-funciona, garantia, faq | ✅ 5/5 |
| Rastreamento | whatsapp_click, Lead fbq, typeof gtag, typeof fbq | ✅ 4/4 |
| Performance | IntersectionObserver, preconnect fonts | ✅ 2/2 |
| Comentários | Checklist deploy, TODO WA, TODO GA4, TODO Pixel, TODO og-image | ✅ 5/5 |
| Estrutura | sem backend, og:url, og:type | ✅ 3/3 |

---

## Estado Final do Projeto

### Entregues — 7 sprints completas
| Sprint | Entregável |
|---|---|
| 1 | Crítica estratégica do briefing |
| 2 | Prompt Mestre completo |
| 3 | HTML funcional (primeira versão) |
| 4 | Refinamento visual, UX e acessibilidade |
| 5 | Otimização de conversão (CRO) |
| 6 | Preparação técnica para produção |
| 7 | Plano de publicação e validação |

### Repositório
- URL: https://github.com/gsfsilva/f5-solution-landing
- Branch: main
- Último commit: `docs(sprint-7): publication plan`
- Arquivo principal: `src/index.html` (866 linhas, ~79KB)

---

## Bloqueadores para Go-live

| Bloqueador | Responsável | Status |
|---|---|---|
| Número real do WhatsApp Business | Cliente (F5 Solution) | 🔴 Pendente |
| ID real do GA4 | Cliente | 🟠 Pendente |
| ID real do Meta Pixel | Cliente | 🟠 Pendente |
| Imagem OG (1200×630px) | Cliente / Designer | 🟠 Pendente |
| Acesso ao Vercel | Cliente | 🟠 Pendente |
| Acesso ao DNS do domínio | Cliente | 🟠 Pendente |

---

## Estimativa de Tempo para Go-live

| Etapa | Tempo estimado |
|---|---|
| Substituir WA_LINK | 2 minutos |
| Substituir GA4 + Pixel IDs | 5 minutos |
| Criar og-image.jpg | 1–2 horas (design) |
| Conectar repo ao Vercel | 10 minutos |
| Configurar domínio DNS | 15 minutos (+ propagação 1–48h) |
| Validação pós-deploy | 30 minutos |
| **Total técnico** | **~1h (excluindo og-image e DNS propagation)** |

---

## Encerramento do Projeto (desenvolvimento)

O projeto de landing page da F5 Solution está **tecnicamente concluído**. O HTML está pronto, validado, documentado e versionado. O código pode ser publicado em produção imediatamente após o fornecimento dos dados reais listados acima.

Próximos passos são responsabilidade do cliente (dados reais) e podem ser executados em uma única sessão de trabalho de 60–90 minutos.

---

*Relatório gerado automaticamente ao final da Sprint 7.*
*Projeto encerrado em desenvolvimento — aguardando go-live.*
