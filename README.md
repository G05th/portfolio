# Housify - Website de Imobiliária

## Descrição
Website completo e responsivo para uma empresa de imobiliária, baseado no mockup fornecido. Desenvolvido com React, Tailwind CSS e componentes modernos.

## Características
- ✅ Design moderno e profissional
- ✅ Totalmente responsivo (desktop, tablet, mobile)
- ✅ Navegação suave entre seções
- ✅ Formulário de contacto funcional
- ✅ Animações e transições elegantes
- ✅ Otimizado para conversão
- ✅ Ideal para vitrine no Instagram

## Seções Incluídas
1. **Header** - Navegação com logo e menu
2. **Hero Section** - Seção principal com call-to-action
3. **Who We Are** - Apresentação da empresa com estatísticas
4. **Property Match** - Propriedades em destaque
5. **About Us** - Informações detalhadas da empresa
6. **Property Showcase** - Catálogo de propriedades com filtros
7. **Contact Form** - Formulário de contacto interativo
8. **Footer** - Links e informações de contacto

## Tecnologias Utilizadas
- React 18
- Tailwind CSS
- Lucide Icons
- Vite (bundler)
- JavaScript (ES6+)

## Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação
1. Extrair o arquivo zip
2. Navegar para a pasta do projeto:
   ```bash
   cd housify-website
   ```

3. Instalar dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

### Desenvolvimento
Para executar em modo de desenvolvimento:
```bash
npm run dev
# ou
pnpm run dev
```

O website estará disponível em: http://localhost:5173

### Build para Produção
Para criar a versão de produção:
```bash
npm run build
# ou
pnpm run build
```

Os ficheiros de produção estarão na pasta `dist/`

## Estrutura do Projeto
```
housify-website/
├── public/              # Ficheiros públicos
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes de UI reutilizáveis
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── WhoWeAre.jsx
│   │   ├── PropertyMatch.jsx
│   │   ├── AboutUs.jsx
│   │   ├── PropertyShowcase.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── hooks/          # Hooks personalizados
│   ├── lib/            # Utilitários
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos personalizados
│   └── main.jsx        # Ponto de entrada
├── dist/               # Build de produção
├── package.json
└── README.md
```

## Personalização
- **Cores**: Editar as variáveis CSS em `src/App.css`
- **Conteúdo**: Modificar os componentes em `src/components/`
- **Imagens**: Substituir URLs das imagens nos componentes
- **Estilos**: Usar classes Tailwind CSS para ajustes

## Deploy
O projeto está pronto para deploy em qualquer plataforma de hosting estático:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Suporte
Para questões ou suporte, contacte o desenvolvedor.

---
Desenvolvido com ❤️ para Housify

