# Documentação de manutenção e hospedagem — Site Comsystem

Este projeto foi desenvolvido em **React**, usando **Vite**, **TypeScript** e **Tailwind CSS**. O site funciona de forma independente e pode ser hospedado como um site estático na Hostinger.

## 1. Requisitos

Antes de trabalhar no projeto, instale:

- Node.js 22 ou superior;
- npm;
- Visual Studio Code ou outro editor de código;
- acesso ao hPanel da Hostinger.

Para confirmar as instalações, execute:

```bash
node --version
npm --version
```

## 2. Estrutura principal do projeto

Os arquivos mais importantes estão nestas pastas:

```text
src/
├── assets/                 # Imagens utilizadas no site
├── components/
│   └── site/               # Seções e componentes da página
├── config/
│   └── site.ts             # Textos, contatos, links e informações gerais
├── App.tsx                 # Organização das seções da página
├── main.tsx                # Inicialização da aplicação
└── styles.css              # Estilos globais

public/
├── .htaccess               # Configuração necessária para a hospedagem
├── favicon.ico             # Ícone exibido no navegador
├── robots.txt              # Orientações para mecanismos de busca
└── sitemap.xml             # Mapa do site para mecanismos de busca
```

## 3. Preparar o projeto pela primeira vez

Abra o terminal dentro da pasta do projeto e execute:

```bash
npm install
```

Esse comando instala todas as dependências registradas no arquivo `package.json`.

Normalmente, ele só precisa ser executado novamente quando:

- o projeto for aberto em outro computador;
- a pasta `node_modules` for apagada;
- alguma dependência for adicionada ou atualizada.

## 4. Rodar o site localmente

Para iniciar o ambiente de desenvolvimento, execute:

```bash
npm run dev
```

O terminal mostrará um endereço semelhante a:

```text
http://localhost:5173
```

Abra esse endereço no navegador. Enquanto o comando estiver rodando, as alterações feitas no código serão atualizadas automaticamente.

Para encerrar o servidor local, pressione:

```text
Ctrl + C
```

## 5. Como realizar alterações

### Textos, contatos e links

As principais informações centralizadas do site estão em:

```text
src/config/site.ts
```

Nesse arquivo podem ser alterados, por exemplo:

- telefone;
- WhatsApp;
- e-mail;
- endereço;
- Instagram;
- links externos;
- textos das soluções;
- segmentos atendidos;
- benefícios e informações institucionais.

Exemplo:

```ts
export const company = {
  phone: "(67) 3291-4114",
  whatsapp: "https://wa.me/556732914114",
  email: "sac@comsysteminformatica.com.br",
};
```

### Seções e layout

As seções da página estão em:

```text
src/components/site/
```

Alguns dos principais arquivos são:

```text
Header.tsx            # Cabeçalho e menu
Hero.tsx              # Seção inicial
Solutions.tsx         # Soluções oferecidas
Segments.tsx          # Segmentos atendidos
About.tsx              # Sobre a empresa
ContactForm.tsx        # Formulário de contato
Footer.tsx             # Rodapé
WhatsAppButton.tsx    # Botão flutuante do WhatsApp
```

### Imagens

As imagens utilizadas pela aplicação estão em:

```text
src/assets/
```

Para substituir uma imagem:

1. coloque a nova imagem dentro de `src/assets`;
2. atualize a importação no componente correspondente;
3. mantenha nomes de arquivos simples, sem espaços ou acentos;
4. prefira imagens otimizadas em `.webp`, `.jpg` ou `.png`.

### Estilos globais

Os estilos gerais estão em:

```text
src/styles.css
```

Grande parte do layout também é definida diretamente nos componentes usando classes do Tailwind CSS.

### Título e informações para buscadores

O título da página e algumas metatags ficam em:

```text
index.html
```

Sempre que o domínio oficial mudar, revise também:

```text
public/sitemap.xml
public/robots.txt
src/config/site.ts
```

## 6. Verificar a qualidade antes de publicar

Antes de gerar a versão de produção, execute:

```bash
npm run lint
```

Para formatar automaticamente os arquivos:

```bash
npm run format
```

Depois, teste o site localmente e verifique:

- menu e navegação;
- links e botões;
- WhatsApp e telefone;
- exibição no celular;
- exibição no computador;
- textos e imagens;
- formulário de contato;
- ausência de erros no console do navegador.

## 7. Gerar o build de produção

Para gerar a versão que será enviada à Hostinger, execute:

```bash
npm run build
```

O Vite criará a pasta:

```text
dist/
```

Essa pasta contém a versão final e otimizada do site.

A estrutura será semelhante a:

```text
dist/
├── assets/
├── .htaccess
├── favicon.ico
├── index.html
├── robots.txt
└── sitemap.xml
```

A pasta `dist` pode ser apagada e recriada sempre que necessário. Nunca faça alterações diretamente nela, pois o próximo build substituirá seu conteúdo.

## 8. Testar o build localmente

Depois de executar `npm run build`, rode:

```bash
npm run preview
```

O terminal mostrará um endereço local, geralmente:

```text
http://localhost:4173
```

Use esse endereço para verificar a versão final antes da publicação.

## 9. Hospedar o site na Hostinger

### Primeira publicação

1. Execute `npm run build` no computador.
2. Entre no hPanel da Hostinger.
3. Acesse o site ou domínio desejado.
4. Abra **Arquivos → Gerenciador de arquivos**.
5. Entre na pasta `public_html`.
6. Faça backup dos arquivos que já estiverem nessa pasta.
7. Remova os arquivos do site anterior, sem apagar a pasta `public_html`.
8. Abra a pasta `dist` no computador.
9. Envie todos os arquivos e pastas que estão dentro de `dist` para `public_html`.
10. Confirme que `index.html` está diretamente dentro de `public_html`.

A estrutura correta deve ficar assim:

```text
public_html/
├── assets/
├── .htaccess
├── favicon.ico
├── index.html
├── robots.txt
└── sitemap.xml
```

A estrutura abaixo está errada:

```text
public_html/
└── dist/
    └── index.html
```

O conteúdo de `dist` deve ser enviado, e não a pasta `dist` inteira.

### Atualizações futuras

Para publicar uma alteração:

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

Depois:

1. faça backup do `public_html` atual;
2. envie o novo conteúdo de `dist` para `public_html`;
3. permita que os arquivos existentes sejam substituídos;
4. teste o domínio em uma janela anônima;
5. teste o site no celular e no computador.

## 10. Fluxo recomendado de manutenção

Use sempre esta sequência:

```text
Alterar os arquivos em src
        ↓
Rodar npm run dev
        ↓
Testar as alterações
        ↓
Rodar npm run lint
        ↓
Rodar npm run build
        ↓
Rodar npm run preview
        ↓
Fazer backup da Hostinger
        ↓
Enviar o conteúdo de dist para public_html
        ↓
Testar o site publicado
```

## 11. Git e GitHub

É recomendado manter o código-fonte em um repositório privado no GitHub.

Antes de iniciar uma alteração:

```bash
git pull
```

Depois de concluir e testar:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```

Não envie as pastas abaixo ao GitHub:

```text
node_modules/
dist/
```

Elas já estão previstas no arquivo `.gitignore` e podem ser recriadas com `npm install` e `npm run build`.

## 12. Cuidados importantes

- Não edite diretamente os arquivos de `public_html` como forma principal de manutenção.
- Não edite a pasta `dist`, pois ela é recriada a cada build.
- Mantenha o código-fonte original salvo no GitHub e em backup local.
- Faça backup do site antes de cada publicação.
- Não apague a pasta `public_html`.
- Não envie `node_modules` para a Hostinger.
- Confira se o arquivo `.htaccess` foi enviado, pois arquivos ocultos podem não aparecer em algumas configurações do sistema.
- Após publicar, teste os links, o WhatsApp, o telefone e o formulário.

## 13. Formulário de contato

O formulário atual precisa ser conectado a um serviço real para enviar mensagens.

A mensagem de sucesso exibida na tela não garante, por si só, que um e-mail foi enviado. Antes da publicação definitiva, o formulário deve ser integrado a uma destas opções:

- API própria;
- script PHP hospedado na Hostinger;
- serviço de envio de e-mail;
- SMTP configurado com segurança;
- redirecionamento para WhatsApp.

Depois da integração, faça um envio de teste e confirme o recebimento da mensagem.

## 14. Problemas comuns

### O site abre uma tela em branco

Verifique:

- se o build terminou sem erros;
- se `index.html` está diretamente em `public_html`;
- se a pasta `assets` foi enviada;
- se todos os arquivos de `dist` foram publicados;
- se existem erros no console do navegador.

### O site continua mostrando a versão antiga

- abra o site em uma janela anônima;
- pressione `Ctrl + F5`;
- limpe o cache do navegador;
- limpe o cache da Hostinger ou CDN, caso esteja habilitado.

### Imagens não aparecem

- confira o caminho e o nome do arquivo;
- verifique diferenças entre letras maiúsculas e minúsculas;
- confirme que a imagem está importada corretamente;
- gere um novo build após a alteração.

### `npm install` apresenta erro

Verifique a versão do Node.js:

```bash
node --version
```

O projeto foi preparado para Node.js 22. Depois, tente novamente:

```bash
npm install
```

### O build apresenta erro

Execute:

```bash
npm run lint
npm run build
```

Leia a primeira mensagem de erro exibida no terminal, localize o arquivo indicado e corrija o problema antes de publicar.

## 15. Resumo dos comandos

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Verificar o código
npm run lint

# Formatar o código
npm run format

# Gerar a versão de produção
npm run build

# Visualizar o build localmente
npm run preview
```
