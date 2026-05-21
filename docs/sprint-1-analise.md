# Sprint 1 — Crítica Estratégica do Briefing

> **Projeto:** F5 Solution Landing Page  
> **Data:** Maio de 2026  
> **Responsável:** Estrategista de Produto Digital  
> **Status:** ✅ Concluída

---

## 1. Diagnóstico Geral

**Classificação: MÉDIO-FORTE** — com pontos críticos a corrigir antes da Sprint 2.

O briefing tem fundação sólida: público bem definido, conversão única clara e promessa central honesta. O problema está na execução — a estrutura de seções é excessiva para uma landing com CTA único de WhatsApp, a copy do hero é genérica demais para o público técnico-gestor, e vários itens da "prova dura" soam como lista de features sem ancoragem em dor real. Corrigindo esses três pontos, o briefing se torna forte o suficiente para gerar o Prompt Mestre.

---

## 2. O Que Está Claro e Bem Definido

**Cliente ideal:** ✅ Muito bem descrito.
- Faixa de tamanho (20–300 clientes ativos), perfil do decisor (dono, sócio técnico, gerente operacional), gatilho de compra (equipe interna no limite) e dor primária (suporte virando gargalo de crescimento). Raro ter esse nível de clareza em briefing de agência.

**Conversão única:** ✅ Correto e cirúrgico.
- WhatsApp com mensagem pré-preenchida. Baixa fricção, canal certo para esse público. Não há tentação de dividir atenção com formulário ou newsletter.

**Promessa central:** ✅ Honesta e funcional.
- "Suporte técnico com padrão profissional sem o custo e a dor de manter equipe própria" é uma promessa real, verificável e diferente de "soluções completas de TI". Funciona.

**Tom de voz:** ✅ Definido corretamente.
- Profissional, direto, operacional. Sem aspiracionalismo vazio. Certo para B2B de nicho.

**Referências visuais:** ✅ Coerentes entre si.
- Linear + Stripe + Notion apontam na mesma direção: produto técnico, premium, clean. Não há conflito entre elas.

**Entrega técnica:** ✅ Definida e realista.
- HTML + Tailwind + Vercel é a stack certa para esse projeto. GA4 + Meta Pixel é o mínimo necessário.

---

## 3. O Que Está Vago, Contraditório ou Faltando

### Prova dura — fraca demais para o nome que carrega

Dos 11 itens listados como "prova dura", a maioria é promessa, não prova:

| Item | Problema |
|---|---|
| "Equipe formada por especialistas em automação comercial" | Quem afirma isso? Quantos? Com qual histórico? |
| "Processo estruturado com SLA, indicadores e monitoramento contínuo" | Qualquer empresa escreve isso. Qual é o SLA real? |
| "30 dias de experiência sem custo" | É bom, mas está escondido na lista. Precisa de seção própria. |
| "Metodologia com transferência de conhecimento e técnico dedicado" | Metodologia chamada como? É proprietária? |
| "Suporte operacional imediato após onboarding" | O que é "imediato"? Em horas? Em dias? |

**O que falta de verdade:**
- Número de revendas atendidas (mesmo que seja 3, coloca)
- Tempo médio de resposta real (ex: "primeira resposta em até 2h úteis")
- Nome ou referência de sistema ERP/automação que já suportou (Saurus, STI3, etc.)
- Um depoimento real — mesmo que seja de um parceiro informal

### Seções com problema estrutural

- **"Quem Somos"** — seção de ego corporativo. Não converte. O decisor não está comprando a história da empresa, está comprando a solução para o problema dele. Se existir, tem que ter no máximo 3 linhas integradas a outra seção.
- **"Gestão de Operações"** e **"Transferência de Conhecimento"** — são sub-tópicos de "Como Funciona", não seções independentes. Separadas assim, criam complexidade desnecessária e enfraquecem o fluxo.
- **"Planos e Precificação"** — crítico: se não há preço público definido, essa seção gera mais objeção do que resolve. "Consulte-nos" em pricing page é um CTA matador de conversão.

### Copy genérica no hero

A headline atual — *"Terceirize seu suporte sem perder qualidade"* — tem três problemas:
1. "Sem perder qualidade" pressupõe que o suporte atual tem qualidade. A dor do público é justamente o oposto.
2. "Terceirize" é jargão corporativo frio. O decisor pensa em "tirar esse peso das minhas costas", não em "terceirização".
3. Não há especificidade de nicho. Poderia ser qualquer empresa de BPO.

---

## 4. Coerência entre Promessa, Conversão e Estrutura

**Promessa × Conversão:** ✅ Coerentes.
- Promessa de alívio operacional + CTA para conversa direta no WhatsApp = funil correto para venda consultiva B2B de nicho. Não precisa de formulário, não precisa de demo automatizada.

**Estrutura × Conversão:** ❌ Problema sério.
- 14 seções para uma landing com CTA único de WhatsApp é excessivo. Cada seção adicional é uma chance de o usuário perder o foco, se distrair ou sair da página. A regra para landing de conversão única: máximo 8–9 seções, cada uma com função cirúrgica.

**CTA secundário "Ver serviços":** ❌ Conflito direto.
- Um CTA secundário no hero ancora o usuário abaixo do fold e atrasa a conversão. Eliminar ou transformar em âncora interna discreta.

---

## 5. Análise da Copy

### Headline atual
> *"Terceirize seu suporte sem perder qualidade."*

**Problemas:** Genérica. Pressupõe qualidade atual inexistente. Sem nicho. Sem dor específica.

**Versões propostas:**

- *"Seu suporte técnico não precisa mais travar sua operação."*
- *"Suporte técnico profissional para sua revenda — sem contratar, sem treinar, sem se preocupar."*
- *"Quando o suporte técnico vira gargalo, revendas perdem clientes. A F5 resolve isso."*

**Recomendada:** `"Seu suporte técnico não precisa mais travar sua operação."` — nomeia a dor sem pressupor solução atual, é específica ao momento do decisor.

---

### Subheadline atual
> *"A F5 Solution cuida da operação técnica da sua revenda enquanto você foca no crescimento do negócio."*

**Problema:** Segunda metade ("enquanto você foca no crescimento") é clichê de agência. Todo mundo escreve isso.

**Versão proposta:**
*"Assumimos o suporte técnico da sua revenda com equipe especializada em automação comercial e ERP — SLA definido, atendimento ágil e sem o custo de time CLT."*

---

### Bullets atuais
- Atendimento remoto ágil com Digisac + WhatsApp + AnyDesk ✅ (específico, bom)
- Redução de custo operacional sem precisar montar equipe CLT ✅ (dor real, bom)
- Monitoramento, SLA e suporte especializado em automação comercial ✅ (técnico, bom)

**Melhoria nos bullets — tornar mais concretos:**
- *"Primeira resposta em até [X]h — via Digisac, WhatsApp ou AnyDesk"*
- *"Sem CLT, sem rescisão, sem gap de cobertura — equipe pronta para operar"*
- *"SLA monitorado com relatório mensal — você acompanha tudo sem precisar gerenciar nada"*

---

### CTA principal
> *"Quero falar com a F5 →"*

**Problema:** Fraco. "Falar com a F5" é genérico e não ativa nenhuma emoção ou urgência.

**Versões propostas:**
- *"Quero terceirizar meu suporte →"*
- *"Entender como funciona →"*
- *"Falar com um especialista →"*

**Recomendado:** `"Quero terceirizar meu suporte →"` — espelha exatamente a mensagem automática do WhatsApp e reforça a conversão.

---

### CTA secundário
> *"Ver serviços"*

**Recomendação:** Eliminar do hero. Se mantido, usar apenas como âncora interna discreta no nav.

---

### FAQ-1
> *"Como vou confiar meu suporte a uma equipe terceirizada? Porque a F5 trabalha com treinamento, documentação, indicadores e período de experiência sem custo para validar a parceria antes de qualquer contrato."*

**Problema:** A resposta começa com "Porque" — parece automática e defensiva. Falta especificidade.

**Versão proposta:**
*"Confiança se constrói com processo, não com promessa. Por isso oferecemos 30 dias de experiência sem custo, com SLA definido, documentação completa e relatório de acompanhamento — para você avaliar antes de assinar qualquer contrato."*

---

## 6. Análise Visual e Direção de Arte

### Paleta: ✅ Correta
`#0D1117` como primária é forte e técnica. `#00C853` como acento funciona — mas atenção: **usar verde em mais de 3 elementos visíveis simultaneamente vai parecer landing de fintech, não de suporte técnico.** O verde deve aparecer apenas em: CTA principal, um dado de destaque e talvez o badge da garantia de 30 dias.

### Tipografia: ✅ Correta
Geist nos títulos transmite exatamente a sensação de produto moderno que o briefing pede. Inter no corpo é escolha segura e legível. Não mudar.

### O que usar de cada referência

| Referência | Usar | Evitar |
|---|---|---|
| **Linear** | Tipografia grande e técnica no hero, densidade de informação controlada, sensação de produto | Gradientes escuros demais, estética de editor de código |
| **Stripe** | Hierarquia visual forte, credibilidade B2B, seções bem espaçadas | Animações complexas, excesso de ilustrações 3D |
| **Notion** | Espaço em branco generoso, clareza de leitura, organização de informação | Minimalismo tão radical que pareça vazio ou sem produto |

### Riscos visuais a evitar

- **Parecer SaaS demais:** Não usar dashboard screenshots nem UI mockups de software. Isso é empresa de serviço, não produto.
- **Verde em excesso:** Máximo 3 ocorrências visíveis. Verde é CTA, não decoração.
- **Cards em excesso:** Máximo 3–4 cards por seção. Cards empilhados matam hierarquia.
- **Página longa demais:** Com 8 seções e espaço generoso, a página já vai ser longa. Não adicionar seções decorativas.
- **Ícones genéricos:** Evitar ícones de "nuvem", "engrenagem" e "check verde" que aparecem em 90% das landing pages de TI.

---

## 7. Estrutura Final Recomendada (8 Seções)

| # | Seção | Papel na conversão |
|---|---|---|
| 1 | **NAV** | Orientação mínima — logo + CTA WhatsApp fixo |
| 2 | **HERO** | Nomear a dor, entregar a promessa, primeiro CTA |
| 3 | **DOR / ESPELHO** | Espelhar o dia a dia do decisor — "você se reconhece aqui?" |
| 4 | **COMO FUNCIONA** | Reduzir medo de complexidade com processo em 3–4 etapas |
| 5 | **DIFERENCIAIS** | Provas concretas: SLA, integrações, 30 dias sem custo |
| 6 | **SERVIÇOS** | O que a F5 faz — remoto, plantão, implantação (conciso) |
| 7 | **PROVA SOCIAL** | Depoimentos ou indicadores reais (mesmo que 1 depoimento) |
| 8 | **CTA FINAL + FAQ** | Objeções resolvidas + botão WhatsApp forte |
| 9 | **FOOTER** | CNPJ, e-mail, cidade, WhatsApp |

**Seções removidas do briefing original:**
- ~~Quem Somos~~ → integrar 1 frase no footer ou no hero
- ~~Gestão de Operações~~ → subitem de "Como Funciona"
- ~~Transferência de Conhecimento~~ → subitem de "Como Funciona"
- ~~Planos e Precificação~~ → remover até ter preço público definido
- ~~Garantia de 30 Dias~~ → integrar à seção de Diferenciais

---

## 8. Checklist de Correções Antes da Sprint 2

Antes de gerar o Prompt Mestre, as seguintes decisões precisam ser tomadas ou informações coletadas:

- [ ] **Número real de clientes/revendas atendidas** — mesmo que seja pequeno, coloca
- [ ] **Tempo médio de primeira resposta** — dado concreto de SLA
- [ ] **Sistemas ERP/automação suportados** — Saurus, STI3, outros?
- [ ] **Ao menos 1 depoimento real** — pode ser de parceiro informal
- [ ] **Decisão sobre precificação pública** — exibir ou não exibir planos
- [ ] **Nome da metodologia de onboarding** — tem nome próprio ou é processo genérico?
- [ ] **Headline final aprovada** — escolher entre as 3 opções propostas
- [ ] **CTA principal aprovado** — "Quero terceirizar meu suporte →" ou outro
- [ ] **Definir se haverá FAQ** — quantas perguntas e quais objeções priorizar
- [ ] **Logo da F5 Solution** — arquivo disponível? Formato SVG preferencial
- [ ] **Domínio f5solution.com.br** — já registrado? Apontado para Vercel?
