# Site Comsystem — versão independente do Lovable

Projeto convertido para React + Vite estático, sem dependências de execução ou build do Lovable.

## Requisitos

- Node.js 22
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Gerar versão de produção

```bash
npm run build
```

Os arquivos prontos serão gerados na pasta `dist/`.

## Publicar na Hostinger

1. Gere a pasta `dist` com `npm run build`.
2. Abra o hPanel da Hostinger.
3. Vá em Arquivos > Gerenciador de arquivos.
4. Abra `public_html`.
5. Remova os arquivos do site antigo somente após fazer backup.
6. Envie o conteúdo interno de `dist/` para `public_html`.
7. Confirme que `index.html`, `.htaccess`, `robots.txt`, `sitemap.xml`, `assets/` e `favicon.ico` estão diretamente em `public_html`.

## Atenção: formulário de contato

O formulário presente no projeto original apenas simula o envio no navegador. Ele ainda precisa ser conectado a um serviço real de e-mail, API ou script PHP antes da publicação definitiva.
