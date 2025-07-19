# Sabor Luanda - Template de Restaurante em Vue.js

Este é um template moderno e responsivo para restaurantes, desenvolvido em Vue.js 3 com Tailwind CSS. O template foi criado para ser facilmente personalizável e pronto para deploy na Netlify.

## Características

- Design moderno e responsivo para todos os dispositivos
- Componentes reutilizáveis e bem estruturados
- Integração com redes sociais
- Formulários de contacto e reserva
- Galeria de imagens com lightbox
- Cardápio interativo com categorias
- Seção de depoimentos
- Botões flutuantes para WhatsApp e reservas
- Otimizado para SEO local
- Pronto para deploy na Netlify

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone este repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd vue-restaurant
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o site em `http://localhost:3000`

## Personalização

### Cores e Fontes

As cores principais e fontes podem ser facilmente alteradas no arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#c91a1a', // Cor principal
      'primary-dark': '#a01414', // Variação escura
      'primary-light': '#e74c3c', // Variação clara
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      dancing: ['"Dancing Script"', 'cursive'],
    },
    // ...
  }
}
```

### Conteúdo

O conteúdo do site pode ser modificado diretamente nos componentes Vue localizados em `src/components/`.

## Build para Produção

Para gerar os arquivos de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos serão gerados na pasta `dist/`.

## Deploy na Netlify

### Opção 1: Deploy Direto via Git

1. Faça upload do seu repositório para o GitHub, GitLab ou Bitbucket
2. Acesse [Netlify](https://www.netlify.com/) e faça login
3. Clique em "New site from Git"
4. Selecione o repositório
5. Configure as opções de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Clique em "Deploy site"

### Opção 2: Deploy Manual

1. Gere os arquivos de produção:
```bash
npm run build
```

2. Instale a CLI da Netlify:
```bash
npm install netlify-cli -g
```

3. Faça login na sua conta Netlify:
```bash
netlify login
```

4. Deploy do site:
```bash
netlify deploy --prod --dir=dist
```

## Estrutura do Projeto

```
vue-restaurant/
├── public/             # Arquivos públicos
├── src/
│   ├── assets/         # Recursos estáticos (CSS, imagens)
│   ├── components/     # Componentes Vue
│   ├── views/          # Páginas Vue
│   ├── App.vue         # Componente raiz
│   └── main.js         # Ponto de entrada
├── index.html          # Template HTML
├── package.json        # Dependências e scripts
├── tailwind.config.js  # Configuração do Tailwind
├── vite.config.js      # Configuração do Vite
└── netlify.toml        # Configuração do Netlify
```

## Licença

Este projeto foi desenvolvido por Germano Chita João.

## Contato

Para mais informações ou suporte, entre em contato:
- Portfolio: [g05th.github.io/meu_portfolio_front_end/index.html](https://g05th.github.io/meu_portfolio_front_end/index.html)
