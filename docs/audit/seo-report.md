# SEO & METADATA REPORT

## Executive Summary
Search Engine Optimization (SEO) is critical for driving organic search traffic to the Atwima Community Bank portal. This report audits the site's metadata, heading hierarchical structures, semantic HTML usage, and structured data schemas. Implementing these recommendations will ensure that major search engines can crawl, index, and list the bank's services, local branches, and community news effectively, particularly for depositors searching within the Ashanti Region of Ghana.

---

## Core SEO Vulnerabilities

### 1. Root Metadata & Schema Audit (`app/layout.js`)
* **Status:** The root layout includes standard metadata (title, description, viewport details) and configures a global JSON-LD schema.
* **Remediation:** 
  - Ensure the sitemap domain matches the live production hostname (e.g. `https://www.atwimabank.com`).
  - Configure the `LocalBusiness` or `FinancialService` JSON-LD schema with the verified physical locations of all branches (Foase, Twedie, Kwadaso, Abuakwa, Nkawie, Toase).

### 2. Heading Hierarchies (`<h1>` per Page)
* **Gap:** Several pages utilize multiple `<h1>` elements or skip heading levels (e.g., jumping from `<h1>` directly to `<h3>` inside sections).
* **Remediation:**
  - Standardize all pages to utilize exactly one `<h1>` element, reserved for the main page hero heading.
  - Update secondary section headers to utilize `<h2>`, and internal cards or sub-sections to use `<h3>`.

### 3. Missing Alt Attributes
* **Gap:** Static image assets used for background cards or section headers lack descriptive alternative text (`alt`).
* **Impact:** Search engine bots cannot interpret the content of these images, and screen readers will bypass them or read raw file paths.
* **Remediation:** Apply descriptive alt text to all Next.js `<Image>` and standard HTML `<img>` elements.

### 4. Canonical Link tags
* **Gap:** The site lacks canonical links on individual pages.
* **Impact:** Search engines may flag duplicate content issues if pages are accessed via different URL variations (e.g., `atwimabank.com/loans` vs `www.atwimabank.com/loans`).
* **Remediation:** Inject dynamic canonical headers into the root layout metadata configurations.

---

## SEO Checklist & Implementation Tasks

### 1. Semantic HTML Structure
- [ ] Ensure all page outlines wrap their core layout content in a `<main>` container.
- [ ] Utilize `<section>` tags for page divisions and `<nav>` tags for breadcrumbs and dropdown wrappers.
- [ ] Wrap individual news or blog items in `<article>` tags in `app/news/page.js`.

### 2. Search Metadata Calibration
- [ ] **Home Page:** Update title to *"Atwima Community Bank PLC — Trusted Banking in Ashanti Region"* and meta description to *"Welcome to Atwima Community Bank PLC. Explore our Susu daily savings, commercial loans, fixed deposits, and remittance services in Foase, Kwadaso, and Kumasi."*
- [ ] **Calculators Page:** Set title to *"Financial Calculators — Loan, Fixed Deposit & Susu Planner"*.
- [ ] **Security Page:** Set title to *"Security Center & Fraud Prevention — Atwima Community Bank"*.

### 3. Structured Schema (JSON-LD)
- [ ] Add `FAQPage` schema on the `/faq` page.
- [ ] Add `FinancialService` schema on the home page specifying:
  - Base Address: Foase, Ashanti Region.
  - Price Range: `GHS`.
  - Telephone: `0501 387 040`.
  - Opening Hours: `Mo-Fr 08:30-16:30`, `Sa 08:00-12:00`.

### 4. Technical SEO Deliverables
- [ ] **`public/robots.txt`:** Create a standard robots index configuration:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://www.atwimabank.com/sitemap.xml
  ```
- [ ] **`public/sitemap.xml`:** Construct a sitemap file detailing all 16 page endpoints with prioritized indexing scales.
