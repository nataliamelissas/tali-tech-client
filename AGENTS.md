# Agent Instructions for Tali Tech Client

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (no test runner configured)

## Code Style Guidelines

- **Language**: TypeScript with strict mode enabled
- **Framework**: Next.js 15 with App Router
- **Imports**: Group by source (Next.js/React → external → local); separate type imports
- **Components**: PascalCase, functional with hooks; do not use the "use client" directive unless absolutely necessary
- **Naming**: camelCase for variables/state, PascalCase for components/types
- **Styling**: SCSS modules (styles/\*.module.scss) + Tailwind CSS classes
- **Types**: Explicit TypeScript types required; use interfaces for complex objects
- **Error Handling**: Use Next.js status codes in API routes
- **Path Aliases**: Use `@/` for absolute imports

## Architecture

- AWS Amplify backend with auth/data resources
- API routes in `app/api/` (pages router style)
- Shared utility functions will go in utils/
- Reusable React hooks will go in /hooks
- Global and component-specific styles will go in app/styles
- Components in `app/components/` with SCSS modules</content>
  <parameter name="filePath">C:\Users\natal\Documents\dev\talitech\tali-tech-client\AGENTS.md
