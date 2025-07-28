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
- `npm test` - Run unit tests
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run storybook` - Component documentation

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
- State management: Zustand store for DRO state
- UI components: Radix UI primitives for accessibility
- Styling: Tailwind CSS with custom DRO-specific utilities
- Type safety: Comprehensive TypeScript interfaces in `src/types/`

## Important: Always run tests and lint before commits