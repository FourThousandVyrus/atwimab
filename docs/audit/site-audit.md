# SITE AUDIT REPORT

## Executive Summary

Atwima Community Bank PLC is launching a static-exported web presence designed to offer comprehensive content, financial tools, and customer contact avenues to depositors in the Ashanti Region of Ghana. Per project requirements, the website is built using Next.js 15, React 19, and vanilla CSS, targeting static deployment.

To ensure the web application is production-ready, this audit scanned the entire codebase (components and pages) against branding guidelines, technical specifications, and regulatory frameworks. Several key findings must be addressed before release, including critical branch mismatches, functional API endpoint challenges under static export, and copy contradictions regarding online banking features.

---

## High-Level Findings Matrix

| Finding Category | Severity | Summary of Issue | Affected Files |
| :--- | :--- | :--- | :--- |
| **Constraint Violation** | Critical | References to "online banking transactions" and "mobile banking access" in text copy conflict with the content-only project scope. | `app/security/page.js`<br>`app/personal-banking/page.js` |
| **Data Inconsistency** | High | The branches listed on the Contact page do not match the branches configured inside the Book Appointment component. | `app/contact/page.js`<br>`app/components/BookAppointment.js` |
| **Deployment Bug** | High | The Contact page uses a server-side route `/api/contact` via `fetch`. Under Next.js static HTML export, server routes are non-functional. | `app/contact/page.js`<br>`app/api/contact/route.js` (if exists) |
| **Regional Suitability** | Medium | Inclusion of "SEPA Standing Order Form" which is a European-specific transaction system not applicable in Ghana. | `app/downloads/page.js` |
| **Content Gaps** | Medium | Missing names, images, and bios for 4 out of 6 active branch managers. | `app/management/page.js` |
| **Build Optimization** | Medium | Use of standard HTML `<img>` tags instead of Next.js optimized `<Image>` components, triggering build-time warnings. | `app/personal-banking/page.js` |
| **UI Maintainability** | Medium | Widespread use of inline React styling objects (`style={{...}}`) instead of localized CSS modules or global variables. | Multiple pages (`loans`, `calculators`, `investments`, etc.) |
| **Accessibility (A11y)** | Medium | Accordion triggers, range sliders, and newsletter subscription forms lack proper ARIA descriptors and keyboard focus. | `app/components/BookAppointment.js`<br>`app/calculators/page.js`<br>`app/faq/page.js` |

---

## Prioritized Implementation Phases

### Phase 1 — Critical Fixes (Immediate)
* **Goal:** Eliminate codebase errors, deployment blockers, and severe discrepancies.
* **Tasks:**
  1. **Sync Branches:** Verify whether the active branch list is `[Foase, Twedie, Kwadaso, Abuakwa, Nkawie, Toase]` or `[Foase, Kwadaso, Patasi, Mpasatia, Allabar, Daban]` and synchronize both `contact/page.js` and `BookAppointment.js`.
  2. **Fix Dynamic API Endpoint:** Replace the dynamic `/api/contact` fetch with a client-side WhatsApp request, mailto redirect, or integration with a third-party serverless form service (e.g. EmailJS, Web3Forms).
  3. **Purge Online Banking Copy:** Remove "online banking transactions" and "mobile banking access" from all descriptions and lists.
  4. **Purge SEPA Forms:** Remove or rename the "SEPA Standing Order Form" on the Downloads page.

### Phase 2 — UI/UX & CSS Polish
* **Goal:** Migrate inline styling to CSS Modules and optimize styling variables.
* **Tasks:**
  1. Extract inline styling blocks into CSS Modules (`.module.css`) for all pages.
  2. Ensure custom focus rings are applied to all input controls using the brand color (`#2596be`).
  3. Apply custom scrollbars matching the color scheme.

### Phase 3 — Accessibility (A11y)
* **Goal:** Ensure WCAG AA compliance.
* **Tasks:**
  1. Add `aria-live="polite"` to calculations outputs.
  2. Map keyboard events (`Space` and `Enter`) to custom accordion dropdowns.
  3. Bind all labels to their respective form elements.

### Phase 4 — SEO & Performance
* **Goal:** Reach a Lighthouse score of 90+ on mobile/desktop.
* **Tasks:**
  1. Replace `<img>` tags with Next.js `<Image>` tags.
  2. Optimize Unsplash image assets to local WebP files inside `/public`.
  3. Add structured schema.org JSON-LD elements.

---

## Code Files and Modifications Required

### 1. `app/security/page.js`
* **Current Code:**
  ```javascript
  // Line 54:
  "All online banking transactions are encrypted with industry-standard SSL/TLS protocols..."
  ```
* **Modification:**
  ```javascript
  "All transactional data and communication between our branches and networks are encrypted with industry-standard protocols..."
  ```

### 2. `app/personal-banking/page.js`
* **Current Code:**
  ```javascript
  // Line 26:
  features: ['Competitive interest rates', 'No minimum balance requirement', 'ATM card access', 'Mobile banking access', 'Interest paid quarterly'],
  ```
* **Modification:**
  ```javascript
  features: ['Competitive interest rates', 'No minimum balance requirement', 'ATM card access', 'USSD quick-banking (*248*230#)', 'Interest paid quarterly'],
  ```

### 3. `app/downloads/page.js`
* **Current Code:**
  ```javascript
  // Line 47:
  { title: 'SEPA Standing Order Form', desc: 'Set up recurring payments or standing orders.', type: 'PDF', size: '190 KB' },
  ```
* **Modification:**
  ```javascript
  { title: 'Standing Order Instruction Form', desc: 'Set up recurring automatic payments between local bank accounts.', type: 'PDF', size: '190 KB' },
  ```

### 4. `app/contact/page.js`
* **Current Code:**
  ```javascript
  // Line 56-60:
  const response = await fetch('/api/contact', { ... });
  // Line 215:
  <option value="Mobile Banking">Mobile Banking & App Support</option>
  ```
* **Modification:**
  * Remove the Mobile Banking option.
  * Adjust fetch submission endpoint, or rewrite to launch WhatsApp with a prefilled message template containing message details.
