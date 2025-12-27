# Security Guidelines for TaliTech Frontend

## Environment Variables

### Never Commit Secrets
- ❌ NEVER commit API keys or secrets to version control
- ❌ Frontend should NEVER contain API keys
- ✅ Use `.env.local` for local development (in `.gitignore`)
- ✅ All external API calls must go through backend

### .env.local Structure (Local Development Only)
```bash
# .env.local - NEVER COMMIT THIS FILE
# This file is for local development only
# Production values stored in backend environment variables
```

## API Security

### Backend-Only API Calls
All sensitive API calls must go through backend:
- ❌ Never call Google Places API directly from frontend
- ❌ Never call Square API directly from frontend
- ✅ Frontend makes requests to backend endpoints
- ✅ Backend handles authentication and rate limiting

### API Service Layer
- All API requests centralized in `services/api/`
- Components import from service layer only
- Services handle error handling and loading states
- Mock data used until backend is ready

## Authentication

### AWS Amplify Auth
- Use AWS Amplify Auth for all authentication
- Implement magic link for passwordless login
- Store session tokens securely (httpOnly cookies)
- Never expose user credentials in frontend code

### Magic Link Flow
1. User enters email
2. Backend generates unique token
3. Backend sends email with magic link
4. User clicks link → auto-login
5. Optional: User can add password later in dashboard

## Payment Security

### Square Integration
- ✅ Use Square Web Payments SDK (PCI-compliant)
- ✅ Square SDK loaded from CDN, never bundled
- ❌ Never handle raw card data in frontend
- ❌ Never store card information

### Security Notice to Users
Always display prominently on payment pages:
```
🔒 Secure Payment
All payments are processed securely through Square.
TaliTech never stores your credit card information.
Your financial data is protected by industry-leading encryption.
```

## Cross-Repository Security

### Repository Structure
- **Frontend**: C:\Users\natal\Documents\dev\talitech\tali-tech-client
- **Backend**: C:\Users\natal\Documents\dev\talitech\tali-tech-backend

### Division of Responsibilities
**Frontend**:
- Display UI and collect user input
- Make authenticated requests to backend
- Never store API keys or secrets

**Backend**:
- Store all API keys in environment variables
- Process payments with Square
- Fetch Google Reviews
- Send emails via AWS SES
- Manage database operations

## .gitignore Requirements

Ensure these are in `.gitignore`:
```
# Environment variables
.env.local
.env*.local
*.env

# API Keys and Secrets
secrets.json
config/secrets.js

# AWS
amplify/
amplify_outputs.json

# Build files
.next/
out/
dist/
```

## Incident Response

### If API Key is Exposed:
1. ⚠️ Immediately regenerate in Google Cloud Console / Square Dashboard
2. 🔄 Update backend environment variables
3. 📊 Review access logs for unauthorized usage
4. 🔐 Rotate all related credentials
5. 📝 Document incident and lessons learned

### If User Data is Compromised:
1. ⚠️ Immediately notify affected users
2. 🔒 Reset passwords/sessions for affected accounts
3. 📊 Investigate breach and patch vulnerability
4. 📝 Document and report as required by law

## Security Best Practices

### Input Validation
- Validate all user inputs on frontend (UX)
- Re-validate all inputs on backend (security)
- Sanitize data before displaying
- Use TypeScript for type safety

### XSS Protection
- Never use `dangerouslySetInnerHTML` without sanitization
- Escape user-generated content
- Use Content Security Policy (CSP) headers

### CSRF Protection
- Use CSRF tokens on all forms
- Verify origin headers
- SameSite cookies for session management

### HTTPS Only
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use secure cookies

## Dependency Management

### Keep Dependencies Updated
```bash
npm audit
npm audit fix
```

### Regular Security Checks
- Run `npm audit` before each deployment
- Review security advisories for dependencies
- Update dependencies regularly
- Remove unused dependencies

## Reporting Security Issues

If you discover a security vulnerability:
1. **DO NOT** open a public GitHub issue
2. Email security concerns to: natalia@talitech.org
3. Include detailed description and reproduction steps
4. Allow time for patching before public disclosure

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [AWS Security Best Practices](https://aws.amazon.com/security/best-practices/)
- [Square Security Documentation](https://developer.squareup.com/docs/security)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
