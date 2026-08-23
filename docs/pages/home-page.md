# HOME PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **RateTicker:** Scrolling ticker displaying current financial rates (Susu, Fixed Deposit, Shares).
  - **Header:** Sticky navbar with dropdowns and a "Security Center" quick CTA.
  - **Hero Section:** Animated gradient with brand tones and floating keyframe orbs.
  - **BentoStats:** A grid displaying bank metrics (years of service, customer count, branches, capital).
  - **ServiceCards:** Four service cards linking to loans, savings, investments, and calculators.
  - **WhyChooseUs:** Highlight cards describing safety, customer service, and local focus.
  - **DigitalBanking:** Features the mobile money integration and physical branch networks (replaces mobile app mention).
  - **Community:** Highlights community development projects (school building, healthcare support).
  - **SusuCalculator:** Ghana-specific daily savings planner displaying GHS accumulations and progress toward a target goal.
  - **Testimonials:** An infinite auto-scroll carousel featuring customer reviews.
  - **RatesSnapshot:** Switchable tabbed card for comparing savings, loan, and investment rates.
  - **CTABanner:** Direct links to calculators, contacts, and WhatsApp.
  - **Newsletter:** Dark gradient subscription section.
  - **Footer:** Structured link directory with BoG and GDPC compliance badges.
  - **Overlays:** BackToTop button, WhatsApp button, and floating BookAppointment dialog.

* **Identified Strengths:**
  - Strong, unified visual branding using the newly migrated `#2596be` color scheme.
  - Interactivity like the Susu calculator and Rates tabs are client-side only and highly responsive.
  - Clean typographic scale utilizing `Playfair Display` for headings and `Inter` for body copy.

* **Identified Weak Points:**
  - High page load payload due to loading all modules at once.
  - CSS animations (RateTicker, floating orbs, auto-scroll Testimonials) can cause layout shifts or performance hiccups on lower-end devices.
  - Form inputs (e.g. Newsletter, BookAppointment) lack front-end verification state alerts.

* **Identified UI Inconsistencies:**
  - The `BookAppointment` modal has its own hardcoded list of branches that matches `ship.md` (Foase, Twedie, Kwadaso, Abuakwa, Nkawie, Toase) but contradicts the contact page list (Foase, Kwadaso, Patasi, Mpasatia, Allabar, Daban).
  - Ticker height forces a scroll padding adjustment in `globals.css` that might offset anchor links.

* **Missing Production-Level Enhancements:**
  - Custom scrollbar integration matching the brand color.
  - Front-end feedback on newsletter submission.
  - Screen reader announcements for the dynamic Susu calculator output change.

---

## PHASE 1 — UI POLISH

### Tasks
* Standardize all home page section paddings to use `var(--space-20)` (5rem) for consistent whitespace.
* Add brand color focus rings on the input fields in the newsletter signup.
* Enhance hover state of the `RatesSnapshot` filter tabs with a smooth scale and brand color border transition.

### Suggestions
* Add subtle scroll reveal fade-in animations to sections (`.reveal` class) to make the page load feel more premium.
* Integrate a brand-colored custom scrollbar using CSS `::-webkit-scrollbar` styling.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Implement native lazy loading (`loading="lazy"`) on all images below the fold (e.g. Testimonials, BentoStats).
* Optimize CSS keyframes for floating orbs using `will-change: transform` to trigger GPU acceleration instead of CPU repaint.
* Debounce or throttle the sticky Header scroll event listener in `Header.js` to avoid performance degradation during scrolling.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add `aria-label` to the floating `Book Visit` button, `BackToTop` button, and the floating `WhatsApp` button.
* Ensure all icons and decorative SVGs have `aria-hidden="true"` so they are ignored by screen readers.
* Add `aria-live="polite"` to the Susu calculator output container so that changes in daily contributions are announced to visually impaired users.
* Improve color contrast of the body text inside the dark-themed `Newsletter` block to meet WCAG AA standards.

---

## PHASE 4 — SEO

### Tasks
* Match page-specific title tag and meta descriptions to local Ghana keywords (e.g., "Ashanti Region Rural Bank", "Susu savings Foase").
* Restructure headers to ensure only one `<h1>` exists (inside the Hero) and all subsequent sections use `<h2>` and `<h3>` hierarchically.
* Add alt descriptions to all static layout images.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Replace the static/reloading newsletter submit button with a stateful React form that intercepts submission, shows a spinner, and outputs a custom "Thank you for subscribing!" success message.
* Remove any debug logs or commented code in page modules.
* Synchronize branch list options between `BookAppointment.js` and the main contact list.

---

## OPTIONAL ENHANCEMENTS

* Add subtle micro-interactions to BentoStats counters using an animated count-up script.
* Embed a trust metric (e.g., "Regulated by the Bank of Ghana & Member of GDPC" badge) explicitly in the hero section.
