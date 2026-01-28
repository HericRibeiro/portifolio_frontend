# Portfolio App

Portfólio moderno e dark desenvolvido com React + TypeScript + Vite + Tailwind CSS.

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

## 📦 Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 🎨 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Ícones

## ✏️ Personalização

Para personalizar o portfólio, edite o arquivo `src/App.tsx`:

- Altere `"Seu Nome"` para seu nome real
- Atualize `seu@email.com` com seu email
- Modifique os links do GitHub e LinkedIn
- Edite os projetos no array `projects`
- Ajuste as skills no array `skills`

## 📁 Estrutura do projeto

```
portfolio-app/
    src/
    ├── components/
    │   ├── sections/ 
    │   │   ├── HeroSection.tsx
    │   │   ├── ProjectsSection.tsx
    │   │   ├── SkillsSection.tsx
    │   │   ├── ContactSection.tsx
    │   │   └── index.ts
    │   ├── Navigation.tsx
    │   ├── Footer.tsx
    │   ├── MouseGradient.tsx
    │   ├── ProjectCard.tsx
    │   ├── SkillCard.tsx
    │   ├── SocialLinks.tsx
    │   ├── ScrollIndicator.tsx
    │   └── index.ts
    ├── hooks/ 
    │   └── useMousePosition.ts
    ├── constants/ 
    │   └── data.ts
    ├── types/ 
    │   └── index.ts
    └── App.tsx 
```

## 🌐 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta dist para netlify.com
```

### GitHub Pages
```bash
npm run build
# Configure o GitHub Pages para usar a pasta dist
```

## 📝 Licença

MIT


src/
├── components/          # Componentes reutilizáveis
│   ├── sections/       # Seções principais da página
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── MouseGradient.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   ├── SocialLinks.tsx
│   ├── ScrollIndicator.tsx
│   └── index.ts
├── hooks/              # Custom hooks
│   └── useMousePosition.ts
├── constants/          # Constantes e dados estáticos
│   └── data.ts
├── types/              # Definições de tipos TypeScript
│   └── index.ts
└── App.tsx            # Componente principal
