# Tola website

Company website for Tola LLC, with 20 company portfolios and 74 areas of contribution. BJ’s and Nestlé each have one company page with distinct engagement sections. Older project links redirect to the matching section.

The site includes 12 service pages and 44 HTML pages in total. Tola is presented as one business and healthcare solutions company. Healthcare solutions appears second within the shared service offering; there is no separate pharmacy navigation item. The underlying healthcare scope remains medication management, patient support and facility services.

## Website

GitHub Pages address: https://hazimsaeed2.github.io/tola-website/

Configured public domain: https://tolaunited.com/

The deployment workflow builds and checks the site on pushes to main, then publishes only the generated dist folder. A deployment is live when the Deploy Tola website workflow succeeds.

## Local development

Requires Node.js 24. No external packages are needed.

Run node build.cjs, then node check.cjs. Open dist/index.html or run node preview.cjs and visit http://127.0.0.1:5473.

- content.cjs: reviewed company and engagement summaries.
- industry-data.cjs: eight industry domains, supported capabilities and portfolio references.
- capability-data.cjs: service scopes, deliverables and related experience.
- build.cjs, page-templates.cjs and company-page.cjs: page generation.
- styles.css and app.js: styling and interactions.
- brand/: approved Tola logo.
- check.cjs: page, link, content and publication checks.
- .github/workflows/pages.yml: build and deployment.

SITE_URL controls canonical links, sitemap and social-image URLs. GitHub Actions takes it from Pages configuration and normalizes HTTP to HTTPS. It defaults to the configured public domain above.

## Source records

Private knowledge-base documents, financial records, review reports and credentials are excluded from this repository and deployment. They remain in the owner's local project folder. Public summaries retain their stated delivery attribution and owner-reported results.

Contact links use the supplied Tola emails and phone numbers. There is no contact-form backend or advertising analytics service.
