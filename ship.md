# Atwima Rural Bank — Ship Plan

**Project:** Atwima Rural Bank PLC Website  
**Stack:** Next.js 15+ · React 19 · CSS Modules  
**Brand Color:** `#2596be` (replaces legacy `#214F8B`)  
**Constraint:** No online banking, no login, no mobile app. Pure content + tools site.

---

## Overview

Full-site upgrade in 7 phases: brand refresh, homepage upgrades, component deep rebuilds, new unique interactive tools, new pages, SEO/technical polish, and UX performance pass.

---

## Phase 1 — Brand Color Migration ✅

| File | Change |
|------|--------|
| `app/globals.css` | Full `--primary-*` scale replaced with `#2596be`-derived palette |
| `app/components/Header.js` | SVG logo fill `#214F8B` → `#2596be` |
| `app/components/Footer.js` | SVG logo fill `#214F8B` → `#2596be` |

**New Primary Scale:**
```
--primary-900: #061a24   --primary-800: #0c2e3e   --primary-700: #134459
--primary-600: #2596be   ← BRAND CORE
--primary-500: #3aaed7   --primary-400: #5cc4e6   --primary-300: #88d5ee
--primary-200: #b5e6f5   --primary-100: #daf3fb   --primary-50:  #edf9fd
```

---

## Phase 2 — Homepage Upgrades ✅

| File | Change |
|------|--------|
| `app/components/Hero.module.css` | Animated gradient using new brand tones + floating orbs `@keyframes` |
| `app/components/DigitalBanking.js` | Reframed away from "Mobile App" → Mobile Money Integration, Branch Network |
| `app/components/ServiceCards.js` | Added 4th card: "Financial Tools" → `/calculators` |
| `app/components/CTABanner.js` | Added 3rd button: "Financial Calculators" → `/calculators` |

---

## Phase 3 — Component Deep Upgrades ✅

| File | Change |
|------|--------|
| `app/components/Testimonials.js` + `.module.css` | Full rebuild: infinite CSS-only auto-scroll carousel (6→12 items, `@keyframes scroll`, hover-pause, fade edges) |
| `app/components/RatesSnapshot.js` + `.module.css` | Filter tabs (All / Savings / Investments / Loans), 2 new products (Susu, ARB Shares) |
| `app/components/Newsletter.js` + `.module.css` | Dark gradient redesign, new copy, icon wrap, `btn-primary` |
| `app/components/Footer.js` | Added FAQ, News, Careers, Downloads links; Financial Calculators to Products |
| `app/components/Header.js` | Added "Tools" dropdown (Calculators, FAQ, News, Downloads); Careers under About Us |

---

## Phase 4 — New Unique Components ✅

### RateTicker
- File: `app/components/RateTicker.js` + `.module.css`
- Live rates marquee bar above Header on homepage
- 10 rate items, doubled for seamless loop, pure CSS `@keyframes ticker` (55s)
- No backend — hardcoded rates array, easy to update

### SusuCalculator
- File: `app/components/SusuCalculator.js` + `.module.css`
- Ghana-specific Susu savings planner — homepage exclusive
- Inputs: daily GH₵ amount + number of days
- Preset day buttons: 30 / 60 / 90 / 180 / 365
- Formula: `Total = Daily × Days`
- Animated progress bar toward GH₵5,000 goal
- Intl.NumberFormat GHS formatting
- 3-step explainer column, links to `/calculators` and `/contact`

### BookAppointment
- File: `app/components/BookAppointment.js` + `.module.css`
- Floating "Book Visit" button → modal → WhatsApp deep link
- Zero backend — `wa.me/233501387040?text=...`
- Fields: Name, Phone, Branch (6 branches), Date, Service (7 options)
- Accessible: `role="dialog" aria-modal aria-label`

**Homepage wiring (`app/page.js`):**
- `RateTicker` → above `<Header />`
- `SusuCalculator` → between Community and Testimonials
- `BookAppointment` → alongside BackToTop and WhatsApp buttons

---

## Phase 5 — New Pages ✅

| Page | Route | Key Features |
|------|-------|-------------|
| Financial Calculators | `/calculators` | Loan (annuity formula), Fixed Deposit (simple interest), Susu — all client-side, GHS formatted |
| FAQ | `/faq` | 20+ Q&As, 5 categories, sticky sidebar, accordion, WhatsApp CTA |
| News & Announcements | `/news` | 5 articles, category tags, server component with `metadata` export |
| Privacy Policy | `/privacy-policy` | Ghana Data Protection Act 2012 compliant, 9 sections, TOC sidebar, DPO card |
| Careers | `/careers` | Values grid, "no vacancies" state, CV submission → WhatsApp deeplink |
| Downloads & Forms | `/downloads` | 4 categories, 15 document cards, PDF placeholder, branch-visit notice |
| Custom 404 | `not-found.js` | Branded 404, quick nav grid (Personal Banking, Business, Calculators, FAQ) |

---

## Phase 6 — SEO & Technical Polish ✅

| File | Change |
|------|--------|
| `app/layout.js` | `lang="en-GH"`, `theme-color #2596be` meta, LocalBusiness JSON-LD (schema.org/BankOrCreditUnion) with address, geo, hours, phone |
| `app/sitemap.js` | 15 routes with priority + changeFrequency |
| `next.config.mjs` | Security headers: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy` |

---

## Phase 7 — UX & Performance Polish ✅

| File | Change |
|------|--------|
| `app/globals.css` | `scroll-padding-top: calc(header-height + 36px)` — accounts for RateTicker bar |
| `app/globals.css` | `@keyframes pageFadeIn` + `body { animation: pageFadeIn 0.3s ease }` — smooth page transitions |

---

## Architecture Notes

- **No auth, no backend, no mobile app** — strict. All interactivity is pure client state.
- **WhatsApp integration** is the primary human contact channel: `wa.me/233501387040`
- **6 branches:** Foase (HQ), Twedie, Kwadaso, Abuakwa, Nkawie, Toase
- **Calculators** are all formula-only, no API calls
- **RateTicker** rates can be updated in `app/components/RateTicker.js` → `rates` array
- **Susu** savings scheme is Ghana-specific — key differentiator vs competitors

---

## File Inventory

### New Components
- `app/components/RateTicker.js` + `.module.css`
- `app/components/SusuCalculator.js` + `.module.css`
- `app/components/BookAppointment.js` + `.module.css`

### New Pages
- `app/calculators/page.js` + `page.module.css`
- `app/faq/page.js` + `page.module.css`
- `app/news/page.js` + `page.module.css`
- `app/privacy-policy/page.js` + `page.module.css`
- `app/careers/page.js` + `page.module.css`
- `app/downloads/page.js` + `page.module.css`
- `app/not-found.js` + `not-found.module.css`
- `app/sitemap.js`

### Modified Files
- `app/globals.css`
- `app/layout.js`
- `app/page.js`
- `next.config.mjs`
- `app/components/Header.js`
- `app/components/Footer.js`
- `app/components/Hero.module.css`
- `app/components/DigitalBanking.js`
- `app/components/ServiceCards.js`
- `app/components/CTABanner.js`
- `app/components/Testimonials.js` + `.module.css`
- `app/components/RatesSnapshot.js` + `.module.css`
- `app/components/Newsletter.js` + `.module.css`

---

## Verify Build

```bash
cd d:/prince/atwima
npm run build
```

Zero errors expected. All pages are static-exportable. No server actions, no API routes, no dynamic data fetching.
