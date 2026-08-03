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

All imagery currently renders as grey placeholder blocks via
`src/components/ui/ImagePlaceholder.tsx` (a photoshoot is planned). To swap
in real images, replace `<ImagePlaceholder />` usages with `next/image` —
the placeholders already occupy the exact aspect ratios the layouts expect
(mostly `21:9` heroes and `4:3` cards).

## Before launch

- **Wire up the RFQ form.** `src/app/api/rfq/route.ts` is a stub: it
  validates and logs submissions server-side but does not send them
  anywhere. Connect it to an email provider (e.g. Resend, SendGrid) or CRM.
- **Confirm public building names** for the wasl case-study properties —
  some source materials use internal contract codes (e.g. "R1083").
- **Replace placeholder blocks** with photography once the shoot is done.
