# Tola website

Company website for Tola LLC, with 20 company portfolios and 74 areas of contribution. BJ’s and Nestlé each have one company page with distinct engagement sections. Older project links redirect to the matching section.

The site includes 12 service pages and 43 HTML pages in total. Technology, clinical pharmacy and operations are the three primary practices, with pharmacy featured second and linked from the main navigation.

## Website

GitHub Pages address: https://hazimsaeed2.github.io/tola-website/

The deployment workflow builds and checks the site on pushes to main, then publishes only the generated dist folder. A deployment is live when the Deploy Tola website workflow succeeds.

## Local development

Requires Node.js 24. No external packages are needed.

Run node build.cjs, then node check.cjs. Open dist/index.html or run node preview.cjs and visit http://127.0.0.1:5473.

- content.cjs: reviewed company and engagement summaries.
- capability-data.cjs: service scopes, deliverables and related experience.
- build.cjs, page-templates.cjs and company-page.cjs: page generation.
- styles.css and app.js: styling and interactions.
- brand/: approved Tola logo.
- check.cjs: page, link, content and publication checks.
- .github/workflows/pages.yml: build and deployment.

SITE_URL controls canonical links, sitemap and social-image URLs. GitHub Actions takes it from Pages configuration. It defaults to the GitHub Pages address above. No custom domain is configured.

## Source records

Private knowledge-base documents, financial records, review reports and credentials are excluded from this repository and deployment. They remain in the owner's local project folder. Public summaries retain their stated delivery attribution and owner-reported results.

Contact links use the supplied Tola emails and phone numbers. There is no contact-form backend or advertising analytics service.
