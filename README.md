<div align="center"> 
<img height="180" src="./public/coffee-home.png">

<h1><img src="./public/coffee.svg"> Coffee Delivery</h1>

![Static Badge](https://img.shields.io/badge/Rocketseat%20-%20Desafio%20Prático-%237159c1?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

[![PyPi license](https://badgen.net/pypi/license/pip/)](https://pypi.org/project/pip/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f1e90cbc-5e7f-4e72-9433-69bb5e5b17f7/deploy-status)](https://app.netlify.com/sites/ignite-02-coffee-delivery/deploys)

<h4 align="center"> 
	🚧  React Select 🚀 Em construção...  🚧
</h4>
</div>

## 📋 Descrição

O **Coffee Delivery** é um projeto e desafio 02 desenvolvido no curso **Ignite [Rocketseat](https://www.rocketseat.com.br/)**, evoluído com melhorias significativas de arquitetura, qualidade de código e experiência do usuário.

### 🎯 Funcionalidades Principais

- ☕ **Catálogo de Cafés**: Listagem completa de produtos disponíveis
- 🛒 **Carrinho Inteligente**: Adicionar, remover e gerenciar quantidades
- 📍 **Checkout Completo**: Formulário de endereço com validação em tempo real
- 💰 **Cálculo Automático**: Total de itens e valores com formatação brasileira
- 💾 **Persistência**: Dados salvos no localStorage
- 📱 **Responsivo**: Interface adaptável para todos os dispositivos

### 🔗 Links do Projeto

<div align="center">

| Projeto Publicado | Design no Figma |
|:-----------------:|:---------------:|
| <a href="https://ignite-02-coffee-delivery.netlify.app/"><img height="100" src="./public/miniatura/telaInicialSite.png"/></a> | <a href="https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate"><img height="100" src="./public/miniatura/logo Coffee Delivery.png"/></a> |

</div>

## 🎨 Layout e Demonstração

<div align="center">

### 🏠 Página Inicial
<img alt="Página inicial do Coffee Delivery" src="./public/part01.gif" width="100%">

### 🛒 Carrinho de Compras
<img alt="Carrinho de compras" src="./public/part02.gif" width="100%">

### ✅ Finalização do Pedido
<img alt="Finalização do pedido" src="./public/part03.gif" width="100%">

</div>

## 🚀 Melhorias Implementadas

### 🏗️ **Arquitetura e Organização**
- **Centralização de Constantes**: Configurações reutilizáveis em `src/config/constants.ts`
- **Tipos TypeScript**: Tipagem forte e consistente em `src/types/index.ts`
- **Utilitários**: Formatadores e validações centralizadas
- **Estrutura Modular**: Separação clara de responsabilidades

### 🎯 **Componentes Reutilizáveis**
- **Loading Component**: Estados de carregamento com spinner animado
- **ErrorBoundary**: Captura e tratamento elegante de erros
- **Hooks Customizados**: `useCart` para lógica centralizada do carrinho

### 🛡️ **Qualidade e Segurança**
- **Validação Robusta**: Schemas Zod para formulários
- **Tratamento de Erros**: Error boundaries e validações em tempo real
- **TypeScript**: Tipagem forte em toda aplicação
- **Código DRY**: Eliminação de duplicações

### 🎨 **Experiência do Usuário**
- **Feedback Visual**: Estados de loading e validação
- **Máscaras de Input**: Formatação automática de CEP
- **Responsividade**: Interface adaptável
- **Acessibilidade**: HTML semântico e navegação por teclado

## 🛠️ Tecnologias

- **[React](https://pt-br.reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool moderna
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS
- **[Phosphor Icons](https://phosphoricons.com/)** - Ícones modernos
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[React Router DOM](https://reactrouter.com/)** - Navegação SPA

## 📁 Estrutura do Projeto

```
src/
├── @types/           # Definições de tipos globais
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── Card/         # Card de produto
│   ├── Cart/         # Componentes do carrinho
│   ├── Counter/      # Contador de quantidade
│   ├── ErrorBoundary/# Tratamento de erros
│   ├── Header/       # Cabeçalho da aplicação
│   └── Loading/      # Componente de loading
├── config/           # Configurações e constantes
├── contexts/         # Contextos React
├── data/             # Dados estáticos
├── hooks/            # Hooks customizados
├── layouts/          # Layouts da aplicação
├── pages/            # Páginas da aplicação
│   ├── checkout/     # Página de checkout
│   ├── home/         # Página inicial
│   └── success/      # Página de sucesso
├── styles/           # Estilos globais e temas
├── types/            # Definições de tipos
└── utils/            # Utilitários e helpers
```

## 🚀 Como executar o projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Instalação e Execução**

```bash
# Clonar o repositório
git clone https://github.com/Paulohbarbosa/02-coffee-delivery.git

# Entrar na pasta do projeto
cd 02-coffee-delivery

# Instalar as dependências
npm install

# Executar o projeto em modo de desenvolvimento
npm run dev

# O projeto estará disponível em http://localhost:5174
```

### **Scripts Disponíveis**

```bash
npm run dev      # Executa em modo de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa linting do código
```

## 📊 Métricas de Qualidade

### ✅ **Melhorias Implementadas**
- **Código Centralizado**: Eliminação de duplicações
- **Tipagem Forte**: TypeScript em 100% do código
- **Tratamento de Erros**: Error boundaries e validações
- **Performance**: Otimizações com useMemo e useCallback
- **UX Aprimorada**: Loading states e feedback visual
- **Manutenibilidade**: Código modular e bem documentado

### 🎯 **Próximos Passos**
- [ ] Implementar testes unitários e de integração
- [ ] Adicionar busca e filtros de produtos
- [ ] Implementar lazy loading de rotas
- [ ] Adicionar PWA features
- [ ] Implementar histórico de pedidos

## 📝 Funcionalidades Técnicas

### **React Concepts**
- ⚛️ Estados e imutabilidade
- 🔄 Hooks (useState, useEffect, useContext, useMemo)
- 🎯 Context API para gerenciamento de estado
- 📦 Componentização e reutilização
- 🔑 Listas e chaves no React

### **Boas Práticas**
- 🏗️ Arquitetura limpa e modular
- 🛡️ Tratamento robusto de erros
- 📱 Design responsivo
- ♿ Acessibilidade web
- 🔒 Validação de dados
- 💾 Persistência local

## 👨‍💻 Autor

<div align="center">

<a href="https://github.com/Paulohbarbosa">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/29965327?v=4" width="100px;" alt="Paulo Barbosa"/>
 <br />
 <sub><b>Paulo Barbosa</b></sub>
</a>

<p>Desenvolvedor apaixonado por criar experiências digitais incríveis</p>

[![Linkedin Badge](https://img.shields.io/badge/-Paulo%20Barbosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/paulo-henrique-barbosa-495492160/)](https://www.linkedin.com/in/paulo-henrique-barbosa-495492160/) 
[![Gmail Badge](https://img.shields.io/badge/-paulobarbosah.ph@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:paulobarbosah.ph@gmail.com)](mailto:paulobarbosah.ph@gmail.com)

</div>

---

<div align="center">

**Feito com ❤️ e muito ☕ por Paulo Barbosa**

*Coffee Delivery - Transformando código em experiências excepcionais*

</div>
