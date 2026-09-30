# ShineoraTech — Design system

French digital agency homepage for Moroccan businesses. The visual direction combines an editorial dark opening, light service and process sections, violet highlights, and product interface mockups rather than decorative 3D artwork.

## Tokens

- Background: `#101116`; secondary surface: `#1a1920`.
- Light surface: `#f5f4f1`; text: `#f6f6f8`.
- Accent: `#b4a0ff`; primary dark text: `#191227`.
- Typeface: locally available Arial / Helvetica / sans-serif, without font network requests.
- Content width: 1280px maximum. Gutters: 48px desktop, 28px tablet, 20px mobile.
- Section spacing: 110px desktop, 85px tablet, 66px mobile.
- Primary controls: 44–54px minimum height. Corners: 5–10px.
- Motion: restrained one-time reveals and hover transitions; reduced motion respected.

## Page architecture

Navbar → Hero → TrustBar → Services → Portfolio / ProjectCard → WhyUs → Process → BeforeAfter → CTA → Contact → Footer. Persistent WhatsAppButton supports the conversion path.

## Content integrity

Project descriptions come from the supplied brief. Interface mockups and their demonstration data are labelled. No customer numbers, testimonials, awards, real performance results, or private records are invented. Unprovided technical stacks, email, socials, and project URLs are marked as pending.

## Localisation

Service, project, process, and form-option content is in `content/fr.ts`. Site locale and direction are in `lib/site.ts`. Add locale dictionaries and routing when English/Arabic is commissioned; translate the remaining section labels in the components then. Logical CSS properties support future RTL, but this is not a completed Arabic translation.
