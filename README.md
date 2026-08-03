# Operon Middle East — Website

Redesigned corporate website for Operon Middle East, an integrated facilities
management company in the UAE (part of the UEM Edgenta Group). Built with
Next.js (App Router) and Tailwind CSS, following the OME Brand Guidelines
(Operon Green `#55A755`, Gotham typeface, white-dominant layouts).

## Running locally

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| Page content (services, stats, case studies, clients, values) | `src/lib/content.ts` |
| Homepage sections | `src/components/home/` |
| Service pages (one dynamic route for all six) | `src/app/services/[slug]/page.tsx` |
| Case studies listing + detail | `src/app/case-studies/` |
| Contact page + RFQ form | `src/app/contact/`, `src/components/contact/RfqForm.tsx` |
| RFQ submission endpoint | `src/app/api/rfq/route.ts` |
| Brand colours (Tailwind tokens) | `src/app/globals.css` |
| Gotham webfonts (self-hosted woff2) | `src/fonts/`, wired in `src/lib/fonts.ts` |
| Logo artwork (icon, wordmark, full lockup — colour + white) | `public/images/` |

## Editing content

Almost all copy lives in `src/lib/content.ts` as plain data. To add a new
service or case study, add an entry to the relevant array — the pages,
navigation, footer and filters pick it up automatically. No layout changes
needed.

## Swapping in real photography

No code changes needed — drop image files into `public/images/photos/`
using these names and the site picks them up automatically (grey
placeholder blocks render wherever a file is missing):

| Slot | File |
| --- | --- |
| Homepage hero (21:9) | `public/images/photos/home-hero.jpg` |
| Service page hero (21:9) | `public/images/photos/services/<slug>.jpg` (e.g. `hard-fm.jpg`, `soft-fm.jpg`, `energy-management.jpg`, `technology-solutions.jpg`, `golf-course-management.jpg`, `consultancy.jpg`) |
| Case study hero + cards (21:9 / 4:3 crops) | `public/images/photos/case-studies/<slug>.jpg` (e.g. `wasl-village.jpg`, `al-thuraya-tower.jpg`) |

`.jpeg`, `.png` and `.webp` also work. Images are served through
`next/image`, so they're resized and optimised automatically. After adding
files, rebuild/redeploy (statically generated pages resolve photos at build
time).

## RFQ form email delivery

`src/app/api/rfq/route.ts` sends submissions by email over SMTP, configured
entirely through environment variables — it works with any provider
(corporate mail server, SendGrid, Mailgun, Amazon SES, etc.):

| Variable | Required | Notes |
| --- | --- | --- |
| `SMTP_HOST` | yes | Without it, submissions are only logged server-side (dev fallback) |
| `SMTP_PORT` | no | Defaults to `587`; `465` switches to implicit TLS |
| `SMTP_USER` / `SMTP_PASS` | no | Omit for unauthenticated relays |
| `RFQ_TO_EMAIL` | no | Destination inbox, defaults to `info@operon.co` |
| `RFQ_FROM_EMAIL` | no | Sender address, defaults to `SMTP_USER` |

The endpoint validates and length-caps every field, rejects malformed
emails, and silently drops bot submissions via a honeypot field. The
submitter's address is set as `Reply-To`, so the ops team can reply
directly from the inbox.

## Before launch

- **Set the SMTP environment variables** (table above) so RFQ submissions
  reach a real inbox.
- **Confirm public building names** for the wasl case-study properties —
  some source materials use internal contract codes (e.g. "R1083").
- **Replace placeholder blocks** with photography once the shoot is done.
