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

## Content and structure

- `app/page.tsx`: semantic section composition and organisation structured data.
- `components/site/landing.tsx`: navigation, brand, hero, trust bar, reusable illustrative mockups, reveal animation.
- `components/site/sections.tsx`: services, expandable case studies, benefits, process, comparison, enquiry form, footer and WhatsApp.
- `content/fr.ts`: French service/project/process data and form choices.
- `lib/site.ts`: canonical origin, locale, direction, WhatsApp, email and social configuration.
- `app/globals.css`, `app/sections.css`: responsive design tokens and component styles.
- `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`: sitemap, robots, canonical and OpenGraph metadata.
- `DESIGN-SYSTEM.md`: brand direction and page architecture.

## Lead generation

WhatsApp uses the supplied Moroccan number: +212 681 402 071. The form validates name, phone, email, project type, budget and message. It prepares an encoded, structured enquiry for WhatsApp; the visitor explicitly continues and sends in WhatsApp. It never claims that a message was sent. No lead is saved in local storage or a database, and no email delivery is currently configured. This requires WhatsApp to complete delivery.

To add independent email delivery, supply a recipient and an email service. Add a protected server endpoint with server-side validation, abuse controls, and delivery handling; switch away from static export or use an external form service. Never put service credentials in client code.

## Still to supply

- Business email and Instagram, Facebook, TikTok and LinkedIn URLs.
- Real project screenshots and approved public demos.
- Confirmed stacks for FTTH Coverage Platform, SplitEasy and Finance Management.
- Public domain and publishing audience when ready for launch.

The illustrative previews contain clearly labelled fictitious demonstration data. They do not claim actual client outcomes. No confidential records or customer testimonials are included.

## Verification

Production compilation, TypeScript checking and static export passed. Browser checks covered 375px, 768px and 1440px widths, mobile navigation, required-field errors, a valid WhatsApp enquiry URL, process selection, and the comparison slider keyboard control. Test enquiries were not sent. No Lighthouse score is claimed.
# shineoratech
