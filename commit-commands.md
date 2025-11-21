# Comandos de Commit - Coffee Delivery

## 📋 Estratégia de Commits Atômicos

Execute os comandos abaixo na ordem para criar commits organizados:

### 1. Commit - Arquitetura e Utilitários
```bash
git add src/types/ src/utils/ src/config/ src/hooks/ src/data/
git commit -m "feat: implementar arquitetura modular com centralização de tipos e utilitários

- Adicionar centralização de tipos TypeScript em src/types/index.ts
- Criar utilitários de formatação em src/utils/formatters.ts
- Implementar validações centralizadas com Zod em src/utils/validations.ts
- Adicionar configurações centralizadas em src/config/constants.ts
- Organizar estrutura de pastas seguindo princípios SOLID

BREAKING CHANGE: Reestruturação completa da organização de arquivos"
```

### 2. Commit - Componentes Reutilizáveis
```bash
git add src/components/Loading/ src/components/ErrorBoundary/
git commit -m "feat: adicionar componentes reutilizáveis para melhor UX

- Implementar Loading component com spinner animado
- Criar ErrorBoundary para tratamento elegante de erros
- Melhorar feedback visual com estados de carregamento
- Adicionar componentes modulares e reutilizáveis"
```

### 3. Commit - Correções de Bugs
```bash
git add src/App.tsx src/components/Card/index.tsx src/contexts/CoffeeContext.tsx
git commit -m "fix: corrigir problemas de tipagem e importações

- Corrigir import de GlobalStyles em App.tsx
- Ajustar tipagem de tags no componente Card
- Resolver conflitos de importação de OrderFinalizedProps
- Corrigir uso do tema no ThemeProvider"
```

### 4. Commit - Melhorias de Checkout
```bash
git add src/pages/checkout/index.tsx src/components/Header/index.tsx
git commit -m "feat(checkout): implementar validação robusta de formulários

- Adicionar validação em tempo real com react-hook-form e Zod
- Implementar máscaras de input para CEP
- Melhorar tratamento de erros de validação
- Adicionar feedback visual para campos inválidos"
```

### 5. Commit - Documentação
```bash
git add README.md IMPROVEMENTS.md
git commit -m "docs: atualizar README com melhorias implementadas

- Integrar documentação de melhorias do IMPROVEMENTS.md
- Adicionar seções de arquitetura e tecnologias
- Documentar estrutura do projeto e scripts disponíveis
- Incluir métricas de qualidade e próximos passos"
```

## 🔄 Comando Alternativo - Commit Único

Se preferir um commit único com todas as mudanças:

```bash
git add .
git commit -m "feat!: implementar melhorias de arquitetura e qualidade de código

- Centralizar tipos, utilitários e configurações
- Adicionar componentes reutilizáveis (Loading, ErrorBoundary)
- Implementar validação robusta de formulários
- Corrigir problemas de tipagem e importações
- Atualizar documentação com melhorias implementadas

BREAKING CHANGE: Reestruturação completa da arquitetura do projeto"
```

## 📝 Validação das Mensagens

Todas as mensagens seguem o padrão Conventional Commits:
- ✅ Formato: `<tipo>[escopo opcional]: <descrição>`
- ✅ Tipos válidos: feat, fix, docs
- ✅ Descrições claras e concisas
- ✅ Breaking changes indicados corretamente
- ✅ Corpo opcional com detalhes