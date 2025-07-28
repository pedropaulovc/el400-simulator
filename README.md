# EL400 Digital Readout (DRO) Simulator

A faithful web-based simulator for the Electronica EL400 (a.k.a. MagXact MX-100M) digital readout (DRO) system.

## Overview

This project recreates the behavior and interface of the EL400/MX-100M DRO with modern web technologies, focusing on accessibility and accurate reproduction of the original hardware's functionality.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Testing**: Vitest (unit), Playwright (E2E), Storybook (components)
- **Accessibility**: axe-core integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Start Storybook
npm run storybook
```

Open [http://localhost:3000](http://localhost:3000) to view the simulator.

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # React components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── test/          # Test setup and utilities

docs/
├── manuals/       # DRO operation manuals (PDFs)
└── specifications/ # Derived behavior specs

e2e/               # Playwright E2E tests
.storybook/        # Storybook configuration
```

## Development

### Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run storybook` - Start Storybook server

### Testing Strategy

- **Unit Tests**: Component logic and utilities
- **Integration Tests**: Component interactions
- **E2E Tests**: Full DRO workflows and user journeys
- **Visual Tests**: Storybook for component documentation
- **Accessibility Tests**: Automated a11y testing

## DRO Specifications

The simulator behavior is based on official manuals:
- [EL400 Operation Manual](https://www.dropros.com/documents/EL400%20OpManual.pdf)
- [MagXact MX-100M Manual](https://cdn.shopify.com/s/files/1/0576/0984/6859/files/MagXact-MX-100M-Mill-DRO-V1-9-1-2021.pdf)

## Contributing

1. Follow existing code conventions
2. Write tests for new features
3. Ensure accessibility compliance
4. Update documentation as needed

## License

MIT License - see LICENSE file for details