
# Site de Exemplo para Restaurante (React + Vite + TypeScript + Tailwind CSS)

Este é um site de exemplo para um restaurante fictício, "Sabor Luanda", criado como parte de um portfólio para demonstrar habilidades em desenvolvimento web front-end.

## Tecnologias Utilizadas

*   **Framework:** React (v18+)
*   **Bundler:** Vite
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS
*   **Roteamento:** React Router DOM
*   **Ícones:** Lucide React (ou similar)

## Funcionalidades Principais

*   Design moderno, limpo e totalmente responsivo (mobile-first).
*   Navbar fixa que muda de estilo ao rolar.
*   Secções principais: Hero, Sobre Nós (com storytelling), Cardápio, Galeria, Depoimentos.
*   Página de Contato com formulário funcional (validação front-end).
*   Integração de gatilhos mentais (escassez, prova social, autoridade, CTAs claros).
*   Rodapé completo com informações de contato e links sociais.

## Estrutura de Pastas (Resumida)

```
/home/ubuntu/react-restaurant
├── public/
├── src/
│   ├── assets/         # Imagens, ícones, etc.
│   ├── components/     # Componentes reutilizáveis (Navbar, Footer, Hero, Menu, etc.)
│   │   └── ui/         # Componentes de UI base (Button, Card, etc. - se aplicável)
│   ├── hooks/          # Hooks customizados
│   ├── lib/            # Funções utilitárias
│   ├── pages/          # Componentes de página (Home, Contato)
│   ├── router/         # Configuração de rotas (index.tsx)
│   ├── App.tsx         # Layout principal da aplicação
│   ├── index.css       # Estilos globais e configuração Tailwind
│   ├── main.tsx        # Ponto de entrada da aplicação React
│   └── vite-env.d.ts   # Tipos de ambiente Vite
├── .eslintrc.cjs
├── .gitignore
├── index.html          # Ponto de entrada HTML (Vite)
├── package.json        # Dependências e scripts
├── postcss.config.js   # Configuração do PostCSS (para Tailwind)
├── README.md           # Este ficheiro
├── tailwind.config.js  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
├── tsconfig.node.json  # Configuração do TypeScript para Node
└── vite.config.ts      # Configuração do Vite
```

## Pré-requisitos

*   Node.js (versão 18.x ou superior recomendada)
*   npm (geralmente vem com o Node.js)

## Instalação

1.  **Clone o repositório (ou extraia o .zip):**
    ```bash
    # Se for um repositório git
    # git clone <url_do_repositorio>
    # cd react-restaurant

    # Se for um .zip, navegue até a pasta extraída
    cd /path/to/react-restaurant
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

## Execução

1.  **Modo de Desenvolvimento:**
    *   Inicia um servidor de desenvolvimento local (geralmente em `http://localhost:5173`).
    *   Possui Hot Module Replacement (HMR) para atualizações rápidas.
    ```bash
    npm run dev
    ```

2.  **Build para Produção:**
    *   Compila e otimiza o projeto para produção na pasta `dist/`.
    ```bash
    npm run build
    ```

3.  **Pré-visualizar Build de Produção:**
    *   Inicia um servidor local para servir os ficheiros da pasta `dist/`.
    ```bash
    npm run preview
    ```

## Possíveis Problemas Comuns e Soluções

*   **Estilos do Tailwind não aplicados:**
    *   Verifique se o `tailwind.config.js` está configurado corretamente, especialmente a propriedade `content`. Deve incluir os caminhos para todos os ficheiros que usam classes Tailwind (ex: `./src/**/*.{js,jsx,ts,tsx}`).
    *   Confirme se o `index.css` (ou o ficheiro CSS principal) inclui as diretivas `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`.
    *   Certifique-se de que os processos do PostCSS e Tailwind estão a correr (geralmente tratados pelo Vite).
    *   Tente reiniciar o servidor de desenvolvimento (`npm run dev`).
*   **Erro de importação de módulo:**
    *   Verifique se o caminho da importação está correto e se o ficheiro/módulo existe.
    *   Confirme se a dependência está listada no `package.json` e foi instalada (`npm install`).
*   **Erro `Cannot find module '...'` ao rodar `npm run dev`:**
    *   Execute `npm install` novamente para garantir que todas as dependências estão instaladas corretamente.
    *   Exclua a pasta `node_modules` e o ficheiro `package-lock.json` e execute `npm install` novamente.

---
*Este projeto foi gerado/modificado pela IA Manus.*

