# F5 Solution - Landing Page

Landing page estatica da F5 Solution para terceirizacao de suporte tecnico para revendas de automacao comercial e empresas de ERP.

## Stack

- HTML, CSS e JavaScript estaticos
- Hospedagem recomendada: Vercel
- SEO: canonical, Open Graph, Twitter Card, JSON-LD, sitemap e robots
- Integracao comercial: WhatsApp Business
- Consentimento LGPD: banner, modal e gerenciador de cookies

## Estrutura

```text
f5-solution-landing/
├── index.html
├── diretrizes-e-politicas/
│   ├── termos-de-uso/
│   │   └── index.html
│   └── aviso-de-privacidade/
│       └── index.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
├── .gitignore
└── README.md
```

## Como rodar localmente

```bash
python -m http.server 4173
```

Depois acesse `http://127.0.0.1:4173/`.

## Deploy na Vercel

- Framework preset: Other
- Build command: vazio
- Output directory: vazio / raiz do projeto
- Arquivo servido: `index.html`

O `vercel.json` inclui headers basicos de seguranca e cache longo para `assets/`.

## Configuracao atual

- WhatsApp: `5511978746982` / `(11) 97874-6982`
- E-mail: `contato.f5solution@gmail.com`
- Responsavel: `Wesley Francisco da Silva`
- CNPJ: `59.123.207/0001-04`
- Endereco: `R. Aldo Gianini, 734 - Vila Nova Curuca, Sao Paulo - SP, 08032-326`
- Dominio configurado nos metadados: `https://f5solution.com.br/`

## Cookies e consentimento

- Arquivos: `assets/cookie-consent.css` e `assets/cookie-consent.js`
- Chave localStorage: `f5_cookie_consent`
- Versao atual: `COOKIE_CONSENT_VERSION = "2026-05-25"`
- GA4: preencher `GA_MEASUREMENT_ID` em `assets/cookie-consent.js`
- Meta Pixel: preencher `META_PIXEL_ID` em `assets/cookie-consent.js`
- Link do rodape: `Gerenciador de cookies`
- Scripts opcionais so carregam apos consentimento da categoria correspondente.

## Pendencias antes de operar

- Confirmar se o e-mail `contato.f5solution@gmail.com` recebe mensagens.
- Confirmar DNS e deploy em producao.
- Substituir favicon/OG por logo oficial, caso exista uma marca aprovada.
- Inserir GA4/Meta Pixel somente com IDs reais, mantendo o bloqueio previo por consentimento.
- Trocar dados simulados do painel por metricas reais, se a F5 preferir.
