# Sprint 2 — Prompt Mestre

> **Projeto:** F5 Solution Landing Page
> **Data:** Maio de 2026
> **Status:** ✅ Concluída

---

## Prompt Mestre — F5 Solution Landing Page

Crie uma landing page B2B premium, responsiva e focada em conversão via WhatsApp para a **F5 Solution**, empresa especializada em terceirização de suporte técnico para revendas de automação comercial e empresas de ERP. O público-alvo são donos de revendas, sócios técnicos e gerentes operacionais que sofrem com suporte interno sobrecarregado, dificuldade para contratar equipe CLT qualificada e risco de perder clientes por demora no atendimento. A promessa central é: **"Seu suporte técnico funcionando com padrão profissional, sem o custo e a dor de manter equipe própria."** A única conversão da página é o clique para WhatsApp, com mensagem automática pré-preenchida: *"Olá! Vim pelo site da F5 Solution e quero entender como terceirizar meu suporte técnico."*

---

### Referências Visuais

**Linear** — Copiar: tipografia técnica e grande nos títulos, interface limpa, cards discretos com borda fina, sensação de eficiência operacional, visual denso mas bem respirado. Evitar: parecer SaaS internacional genérico, estética de editor de código ou fundo escuro dominante.

**Stripe Brasil** — Copiar: credibilidade corporativa, hierarquia visual forte entre seções, blocos bem delimitados, aparência de empresa séria e confiável para decisores B2B. Evitar: gradientes excessivos, ilustrações 3D complexas ou visual distante da realidade operacional de suporte técnico.

**Notion** — Copiar: espaço em branco generoso, leitura linear clara, organização sem ruído visual, equilíbrio entre texto e elemento visual. Evitar: minimalismo tão radical que enfraqueça a percepção de valor ou elimine a força comercial da página.

---

### Paleta de Cores

| Papel | Hex |
|---|---|
| Primária (fundo escuro / blocos de impacto) | `#0D1117` |
| Fundo principal | `#F8F9FA` |
| Acento (CTA, destaques de conversão) | `#00C853` |
| Texto neutro principal | `#2B2B2B` |
| Branco | `#FFFFFF` |
| Borda e divisores | `#E5E7EB` |
| Texto secundário / labels | `#6B7280` |

O verde `#00C853` deve aparecer **apenas** em: botões de CTA, um dado de destaque por seção e o badge de garantia. Nunca como cor de fundo de seção nem em mais de 3 elementos visíveis simultaneamente.

---

### Tipografia

- **Títulos e headlines:** Geist — importar via `https://vercel.com/font` ou CDN equivalente
- **Corpo e textos de apoio:** Inter — importar via Google Fonts
- Hierarquia sugerida: headline hero `text-5xl` / subtítulos de seção `text-3xl` / corpo `text-base` / labels `text-sm uppercase tracking-wider`

---

### Estrutura de Seções — Ordem Obrigatória

**1. NAV**
Navegação minimalista com fundo `#FFFFFF`, borda inferior sutil `#E5E7EB`. Logo "F5 Solution" à esquerda em Geist bold. Links internos centrais: Serviços · Como Funciona · Garantia · FAQ. CTA à direita: botão sólido `#0D1117` com texto "Quero falar com a F5" linkando para WhatsApp. No mobile: menu hamburguer com drawer lateral. O NAV deve ter `position: sticky top-0 z-50`.

---

**2. HERO**
Seção de impacto máximo. Fundo `#F8F9FA`. Duas colunas no desktop: esquerda com copy, direita com elemento visual técnico abstrato — um painel de status ou bloco de cards simulando tickets de suporte com status (Aberto / Em andamento / Resolvido). Nunca usar foto de call center ou headset.

Copy literal obrigatória:
- **Headline:** "Terceirize seu suporte técnico sem perder qualidade."
- **Subheadline:** "A F5 Solution cuida da operação técnica da sua revenda enquanto você foca no crescimento do negócio."
- **Bullets:**
  - "Atendimento remoto ágil com Digisac, WhatsApp e AnyDesk."
  - "Redução de custo operacional sem precisar montar equipe CLT."
  - "SLA, indicadores e suporte especializado em automação comercial."
- **CTA principal:** botão verde `#00C853` texto escuro — "Quero falar com a F5 →" — link para WhatsApp
- **CTA secundário:** link-texto discreto — "Ver serviços" — âncora para seção de serviços

---

**3. PROVA RÁPIDA**
Faixa horizontal de fundo `#0D1117`. Quatro diferenciais lado a lado com ícone linear simples e texto branco:
- "SLA e monitoramento"
- "Especialistas em automação"
- "WhatsApp + Digisac + AnyDesk"
- "30 dias de experiência sem custo"

No mobile: grid 2×2. Sem cards com bordas — apenas ícone + texto alinhados.

---

**4. DOR E CONTEXTO**
Fundo `#F8F9FA`. Seção de espelho emocional. Título âncora: **"Quando o suporte vira gargalo, a revenda para de crescer."** Três colunas com situações reais que o decisor vive: equipe interna sobrecarregada / demora no atendimento causando reclamações / dificuldade de contratar técnico qualificado com CLT. Finalizar com frase de virada: "A F5 entra para dar previsibilidade, processo e capacidade operacional ao seu suporte." Tom direto, sem dramatizar. Sem ícones genéricos de alerta.

---

**5. COMO FUNCIONA**
Fundo `#FFFFFF`. Título: "Como a F5 assume seu suporte." Timeline em 5 etapas — horizontal no desktop, vertical no mobile. Usar linha conectora discreta `#E5E7EB` entre os nós numerados:
1. Diagnóstico inicial da operação
2. Onboarding e transferência de conhecimento
3. Organização dos canais e ferramentas (Digisac, AnyDesk, WhatsApp)
4. Início do atendimento remoto com SLA definido
5. Monitoramento contínuo com indicadores e melhoria operacional

---

**6. SERVIÇOS**
Fundo `#F8F9FA`. Grid de cards premium: máximo 3 por linha no desktop, 1 por linha no mobile. Borda `#E5E7EB`, sombra `shadow-sm`, padding generoso, ícone linear no topo, título em Geist, descrição em Inter.

Serviços obrigatórios:
- Suporte técnico remoto
- Plantão emergencial
- Visitas técnicas sob demanda
- Implantação e apoio em ERP
- Documentação e relatórios operacionais

---

**7. GESTÃO E TRANSPARÊNCIA**
Fundo `#0D1117`. Texto branco. Seção de credibilidade operacional. Título: **"Você não terceiriza no escuro."** Subtítulo: "A operação é acompanhada com processo, documentação e indicadores." Três blocos lado a lado mostrando: SLA monitorado / Relatórios mensais / Documentação viva. Visual pode simular um painel de status com métricas abstratas — nunca dashboard real de terceiro.

---

**8. GARANTIA DE 30 DIAS**
Fundo `#F8F9FA`. Seção destacada com badge verde "30 dias sem custo". Copy literal obrigatória:
- **Título:** "Teste a operação por 30 dias antes de assumir um compromisso."
- **Texto de apoio:** "Durante o período de experiência, sua revenda valida o atendimento, o processo e a adaptação da equipe F5 à sua operação."
- **CTA:** botão verde — "Quero testar a F5 →" — link para WhatsApp

---

**9. FAQ**
Fundo `#FFFFFF`. Accordion com abertura suave. Incluir obrigatoriamente estas perguntas:

- **"Como vou confiar meu suporte a uma equipe terceirizada?"**
  Resposta: "Porque a F5 trabalha com treinamento, documentação, indicadores e período de experiência sem custo para validar a parceria antes de qualquer contrato."
- "Como funciona o onboarding?"
- "A F5 atende pelo WhatsApp?"
- "Existe suporte emergencial?"
- "Preciso trocar minhas ferramentas atuais?"
- "O contrato é flexível?"

---

**10. CTA FINAL**
Faixa de fundo `#0D1117`. Título branco grande: **"Pronto para tirar o suporte técnico das costas da sua equipe?"** Subtítulo: "Fale com a F5 Solution e entenda como estruturar uma operação de suporte mais profissional para sua revenda." CTA: botão verde — "Falar com a F5 no WhatsApp →"

---

**11. FOOTER**
Fundo `#0D1117`. Logo à esquerda. Centro: links de navegação internos. Direita: e-mail, WhatsApp, cidade/UF. Rodapé inferior: "© 2026 F5 Solution — f5solution.com.br — Todos os direitos reservados."

---

### Comportamentos, Animações e Interações

- Layout 100% responsivo com breakpoints Tailwind: `sm`, `md`, `lg`
- Animações de entrada via `opacity-0 → opacity-100` com `translate-y-4 → translate-y-0` no scroll — suaves, sem exagero
- Hover em cards: `shadow-md` e leve `translate-y-[-2px]` com `transition-all duration-200`
- Hover em botões CTA: `brightness-110` com `transition duration-150`
- Accordion FAQ: abertura com `max-height` animado, `transition-all duration-300`
- Menu mobile: drawer lateral com `transform translate-x` suave
- Botão WhatsApp: fixo no canto inferior direito do mobile — ícone branco em fundo verde, `shadow-lg`, sempre visível
- Sem parallax. Sem animações de partícula. Sem loops automáticos.

---

### Restrições Visuais Obrigatórias

- Não usar fotos de call center, headset ou banco de imagens genérico
- Não usar mais de 3 ocorrências visíveis do verde `#00C853` por tela
- Não usar mais de 4 cards por linha em nenhuma seção
- Não usar gradientes complexos — apenas sólidos
- Não usar tipografia decorativa — apenas Geist e Inter
- Não usar ícones coloridos — apenas ícones lineares em `#6B7280` ou `#0D1117`

---

Gere como HTML único com Tailwind inline.
