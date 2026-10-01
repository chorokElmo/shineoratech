# ShineoraTech

A complete French agency homepage built with Next.js 16.3.7, TypeScript, Tailwind CSS, Framer Motion, and Lucide. The site is statically exported for fast, portable hosting.

## Run locally

Use Node.js 22+ and pnpm 10.28.2:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
```

The production website is generated in `out/`. Deploy this directory with any HTTPS static host. `.openai/hosting.json` identifies its registered private Site. A private deployment is not a public agency launch; audience access and a custom domain can be configured separately.

## Run with Docker Compose

Install Docker with Docker Compose v2 (on Windows, use Docker Desktop with Linux containers), then run from this project directory:

```sh
docker compose up --build -d
```

Open http://localhost:8080. The image builds the Next.js static export with Node.js 22 and pnpm 10.28.2, then serves it with Nginx. Node.js and source files are not included in the runtime image. No database or environment variables are required for the current site.

To use a different host port in PowerShell:

```powershell
$env:PORT = "8090"
docker compose up --build -d
```

Inspect status and logs, or stop the container:

```sh
docker compose ps
docker compose logs -f web
docker compose down
```

Re-run `docker compose up --build -d` after source changes. This runs the production static site, without the Next.js development indicator. The build needs network access to pull base images and install locked dependencies. HTTPS requires a separate reverse proxy or hosting configuration.

## Content and structure

- `app/page.tsx`: semantic section composition and organisation structured data.
- `components/site/landing.tsx`: navigation, brand, hero, trust bar, reusable illustrative mockups, reveal animation.
- `components/site/sections.tsx`: services, expandable case studies, benefits, process, comparison, enquiry form, footer and WhatsApp.
- `content/fr.ts`: French service/project/process data and form choices.
- `lib/site.ts`: canonical origin, locale, direction, WhatsApp, email and social configuration.
- `app/globals.css`, `app/sections.css`: responsive design tokens and component styles.
- `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`: sitemap, robots, canonical and OpenGraph metadata.
- `DESIGN-SYSTEM.md`: brand direction and page architecture.

## Service pages

- /creation-site-web/ : création de sites vitrines.
- /creation-site-ecommerce/ : création de boutiques en ligne.
- /applications-web/ : développement d’applications métier.

Each page has its own title, description, canonical URL and Service structured data. All three pages are linked from the homepage and included in the sitemap. SEO URLs use the origin configured in lib/site.ts; update it to the confirmed production domain before publishing.

## Pricing section

The homepage includes `components/site/pricing.tsx` after Services. French and
Arabic copy lives in `content/pricing.ts`. MAD is the default and billing currency;
the USD view displays the requested approximate `~ $160` with a translated
billing notice. Optional services remain explicitly priced in MAD. WhatsApp
messages always quote the reference MAD price.

This checkout has no language switcher. The pricing component follows changes
to the document's `lang` and `dir` attributes. When integrating with a language
context in another version, pass its current `fr` or `ar` value to
`<Pricing language={language} />`. It does not add or modify navigation controls.

## Lead generation

WhatsApp uses the supplied Moroccan number: +212 681 402 071. The form validates name, phone, email, project type, budget and message. It prepares an encoded, structured enquiry for WhatsApp; the visitor explicitly continues and sends in WhatsApp. It never claims that a message was sent. No lead is saved in local storage or a database, and no email delivery is currently configured. This requires WhatsApp to complete delivery.

To add independent email delivery, supply a recipient and an email service. Add a protected server endpoint with server-side validation, abuse controls, and delivery handling; switch away from static export or use an external form service. Never put service credentials in client code.

## Production domain and Google indexing

The production origin is `https://shineoratech.com`, configured in `lib/site.ts`.
This controls page canonical URLs, Open Graph URLs, organisation structured data,
`robots.txt`, and all four public URLs in `sitemap.xml`.

After deploying this change, verify that the homepage canonical uses this domain,
`https://shineoratech.com/robots.txt` allows crawling and references the production
sitemap, and `https://shineoratech.com/sitemap.xml` lists only production URLs.
For Docker hosting, rebuild with `docker compose up --build -d`; for another
static host, run `pnpm build` and publish the generated `out/` directory.
Configure the hosting provider or reverse proxy to redirect HTTP to HTTPS and
`www.shineoratech.com` to `https://shineoratech.com`, preserving paths and queries.

In Google Search Console, add a Domain property for `shineoratech.com` and verify
ownership using Google's supplied DNS TXT record. Submit
`https://shineoratech.com/sitemap.xml`, then use URL Inspection to test the live
homepage and request indexing. Check the Page indexing report for remaining
issues. Verification requires the owner's Google account and DNS access; no
verification token is included in the source. Indexing and rankings are Google's
decision and are not guaranteed by deploying these settings.

## Still to supply

- Business email and Instagram, Facebook, TikTok and LinkedIn URLs.
- Real project screenshots and approved public demos.
- Confirmed stacks for SplitEasy and Finance Management.

The illustrative previews contain clearly labelled fictitious demonstration data. They do not claim actual client outcomes. No confidential records or customer testimonials are included.

## Verification

Production compilation, TypeScript checking and static export passed. Browser checks covered 375px, 768px and 1440px widths, mobile navigation, required-field errors, a valid WhatsApp enquiry URL, process selection, and the comparison slider keyboard control. Test enquiries were not sent. No Lighthouse score is claimed.
# shineoratech
