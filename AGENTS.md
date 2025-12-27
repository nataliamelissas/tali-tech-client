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

## Company Context

See COMPANY.md for detailed business context including:
- Camp schedules, pricing, and policies (updated Dec 22, 2025)
- Brand guidelines (colors: #ffffff, #f8f3ef, #aecf0e, #3fa7d6, #e44faa)
- Team information and teaching philosophy
- Testimonial sources (Google Reviews + parent testimonials)

Reference COMPANY.md when building features to ensure alignment with business requirements.

## Architecture

- AWS Amplify backend with auth/data resources (separate repository)
- Backend repository: C:\Users\natal\Documents\dev\talitech\tali-tech-backend
- API routes in `app/api/` (pages router style)
- Shared utility functions in `utils/`
- Reusable React hooks in `hooks/`
- Global styles in `styles/`, component-specific styles in component directories
- Components in `app/components/` with SCSS modules
- TypeScript types in `types/`

## Backend Integration

- All API calls must go through backend services (separate repository)
- Backend handles sensitive operations:
  - Google Places API calls (API keys stored server-side)
  - Payment processing with Square
  - Database queries (camp availability, registrations)
  - Email confirmations via AWS SES
- Frontend makes authenticated requests to backend endpoints
- Never expose API keys or credentials in frontend code

## API Service Layer

Create a centralized API service layer in `services/api/`:
- `services/api/camps.ts` - Camp availability, registration
- `services/api/auth.ts` - AWS Amplify authentication
- `services/api/payments.ts` - Square payment processing
- `services/api/reviews.ts` - Google Reviews fetching
- `services/api/parent.ts` - Parent dashboard data

All components should import from these service files, never make direct fetch calls.

Example structure:
```typescript
// services/api/camps.ts
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/data-schema';

const client = generateClient<Schema>();

export async function getCamps() {
  const { data } = await client.models.Camp.list();
  return data;
}
```

## Security

- See SECURITY.md for detailed security guidelines
- Never commit API keys or secrets
- All payment processing through Square SDK
- Emphasize in UI: "Card data never stored by TaliTech"
- Use AWS Amplify Auth for authentication (magic link + optional password)

## Best Practices

1. Leverage API Routes Efficiently: Modularize and Handle Errors Gracefully

Next.js API routes allow you to build full-stack applications. However, following best practices helps avoid bloated routes:

Modularize Logic: Keep API routes lean by moving complex business logic into separate service files. This promotes code organization and maintainability.
Error Handling: Implement proper error handling and return meaningful HTTP status codes for client-side consumption. Use middleware for common concerns like authentication or request validation.

2. Code Splitting and Lazy Loading for Improved Performance

For large applications, loading all code at once can degrade performance. Next.js optimizes performance, but consider using dynamic imports and lazy loading to reduce the initial bundle size:

```javascript
const LazyComponent = dynamic(() => import("../components/LazyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

This improves performance by loading components only when needed.

3. Server-Side Rendering (SSR) vs Static Site Generation (SSG): A Balancing Act

Understanding when to use SSR versus SSG significantly impacts performance.

SSR (getServerSideProps): Use for pages requiring dynamic generation on each request (e.g., dashboards, authenticated content).
SSG (getStaticProps): Use for pre-rendered pages at build time (e.g., blog posts, marketing pages).

4. State Management with Hooks and Context API: Lightweight Solutions

Managing the state can become complex. Consider using React's useState, useReducer, and useContext hooks for local and global state management before resorting to third-party libraries. These, combined with Next.js's server-side features, offer effective data fetching and caching.

For the global state, the Context API can be a lightweight solution. For more complex scenarios, libraries like Redux or Zustand might be better suited.

5. Linting and Formatting: Maintain Readability and Consistency

Maintaining code consistency with tools like ESLint and Prettier promotes readability and maintainability. They help catch potential issues early and ensure your code adheres to best practices.

6. Testing and CI/CD: Ensure Reliability and Efficiency

Automated testing is critical for ensuring application reliability. Tools like Jest and React Testing Library facilitate unit and component testing. Integrate your project with CI/CD pipelines (e.g., GitHub Actions) to run tests automatically on every commit and deployment.

7. Security Considerations: Stay Vigilant

While not explicitly mentioned here, remember to follow security best practices for building web applications. This includes:

Input Validation: Ensure user-provided data is validated and sanitized to prevent attacks like SQL injection and cross-site scripting (XSS).
Output Encoding: Properly encode output to prevent XSS attacks.
Dependency Management: Keep dependencies up-to-date to address security vulnerabilities.
Authentication and Authorization: Implement robust authentication and authorization mechanisms to protect sensitive data.
HTTPS: Use HTTPS to encrypt data transmitted between your application and users.</content>
<parameter name="filePath">C:\Users\natal\Documents\dev\talitech\tali-tech-client\AGENTS.md
