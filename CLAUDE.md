# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Claude Development Guidelines for EL400 Simulator

## Project Overview
This is a faithful web simulator for the Electronica EL400/MagXact MX-100M digital readout (DRO). The project emphasizes accessibility, accurate hardware behavior reproduction, and modern web development practices.

## Key Requirements
- **Faithful reproduction**: Behavior must match the physical DRO exactly
- **Accessibility first**: WCAG compliance, keyboard navigation, screen reader support
- **Modern web stack**: Next.js 15, TypeScript, Tailwind CSS 4
- **Comprehensive testing**: Unit tests (Vitest), E2E tests (Playwright), component docs (Storybook)

## Development Commands
- `npm run dev` - Start development server (uses Turbopack)
- `npm run build` - Production build
- `npm run lint` - ESLint checking
- `npm test` - Run unit tests with Vitest
- `npm run test:ui` - Run unit tests with UI interface
- `npm run test:e2e` - Run Playwright E2E tests (auto-starts dev server)
- `npm run storybook` - Component documentation and visual testing

## Code Standards
- TypeScript strict mode enabled
- Follow existing component patterns in `src/components/`
- Use Zustand for state management
- Implement proper ARIA labels and keyboard navigation
- Write tests for all new features
- Use Framer Motion for animations matching hardware behavior

## DRO Behavior References
- EL400 Manual: https://www.dropros.com/documents/EL400%20OpManual.pdf
- MX-100M Manual: https://cdn.shopify.com/s/files/1/0576/0984/6859/files/MagXact-MX-100M-Mill-DRO-V1-9-1-2021.pdf
- Manuals stored in `docs/manuals/` folder

## Testing Requirements
- Unit tests for all utilities and hooks
- Component tests for UI behavior
- E2E tests for complete user workflows
- Storybook stories for all components
- Accessibility testing with axe-core

## Architecture Notes
- **State management**: Zustand store for DRO state (see `src/types/dro.ts` for core interfaces)
- **UI components**: Radix UI primitives for accessibility foundation
- **Styling**: Tailwind CSS 4 with custom DRO-specific utilities
- **Testing setup**: Vitest with jsdom, React Testing Library, and axe-core integration
- **Path aliases**: `@/` resolves to `src/` directory

## Project Structure
```
src/
├── app/           # Next.js 15 App Router pages
├── components/    # React components (follow existing patterns)
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions (DRO interfaces)
├── utils/         # Utility functions
└── test/          # Test setup (setup.ts)

docs/manuals/      # Physical DRO reference manuals (PDFs)
e2e/               # Playwright E2E tests
```

## Git Workflow - CRITICAL REQUIREMENTS
⚠️ **STRICT ADHERENCE REQUIRED** - These git workflow rules are mandatory and must be followed exactly:

- **Auto-commit after EVERY change**: You MUST commit immediately after ANY file modification, no matter how small - NO EXCEPTIONS. This includes:
  - Single line edits
  - Configuration changes
  - Code refactoring
  - ANY file creation or deletion
- **Use Task tool for git operations**: ALWAYS use the Task tool to run git commands - NEVER call git directly from main thread
- **Commit first, ask questions later**: Do NOT wait for user confirmation before committing. Commit immediately after making changes
- **Push frequently**: Push after every few commits or when completing a logical unit of work
- **Include lint/test status in commits**: Run lint before committing. If there are failures, fix them if possible or note in commit message and proceed
