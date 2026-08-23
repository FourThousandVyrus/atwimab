# DOWNLOADS & FORMS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Header:** General introduction explaining available resources.
  - **Notice Bar:** Advises that these forms are reference copies and must be submitted physically at a branch.
  - **Document Categories:** Structured sections representing Account Forms, Loan Forms, Brochures, and Other Documents.
  - **Document Cards:** Display title, description, badge (e.g. PDF), file size (e.g. 240 KB), and a styled download button.
  - **CTA Banner:** Directs users to physical branches or WhatsApp help if they require assistance.

* **Identified Strengths:**
  - Well-organized classification of common banking forms (Personal, Business, Susu, Loans, etc.).
  - Displays file metadata (types, sizes) which improves UX by managing user expectation.

* **Identified Weak Points:**
  - **Non-Functional Downloads:** The download button is currently a static `<span>` with a `Coming soon — please visit a branch` title tag. Clicking does nothing. To go live, these documents must be hosted in the `/public` assets folder, or the download buttons should be adapted to a functional state.
  - **Geographic Suitability Error:** The page lists a *"SEPA Standing Order Form"*. SEPA (Single Euro Payments Area) is a European payment network and is irrelevant for a local community bank in Ghana that operates in GHS (Ghana Cedis).
  - Notice bar style relies on hardcoded CSS inline variables rather than standardized CSS classes.

* **Identified UI Inconsistencies:**
  - The download action looks interactive (changes cursor to pointer) but clicking does not trigger any action, violating basic usability expectations.

* **Missing Production-Level Enhancements:**
  - Host actual PDF forms in the `/public/forms/` directory and replace the mock spans with functional HTML anchor tags (`<a href="/forms/form-name.pdf" download>`).
  - Standardize Ghanaian alternative banking forms (e.g., local Standing Order request, ACH authorization).

---

## PHASE 1 — UI POLISH

### Tasks
* Replace dummy download spans with actual styling classes that indicate active/inactive states (or convert to anchor tags once files exist).
* Refactor the warning notice box to use standard CSS modules (`downloads.module.css`).

### Suggestions
* Add file icon decorators matching specific document types (e.g. PDF red icon, Doc blue icon).

---

## PHASE 2 — PERFORMANCE

### Tasks
* Ensure icons are embedded inline to minimize page load asset request counts.
* Preload or optimize structural elements of the grid to prevent layout shifting when content renders.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure all download buttons have descriptive `aria-label` tags (e.g., `"Download Personal Account Opening Form (PDF, 240 KB)"`).
* Ensure color contrast of description text meets standard accessibility criteria.
* Ensure notice bar SVG has `aria-hidden="true"`.

---

## PHASE 4 — SEO

### Tasks
* Target search traffic looking for local forms (e.g. "Atwima bank account opening form download", "Foase bank loan form PDF").
* Maintain logical heading hierarchies (`<h1>` -> `<h2>` -> `<h3>`).

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* **Remove Incompatible Assets:** Remove or rename the *"SEPA Standing Order Form"* to a local banking alternative like *"Atwima standing order instruction form"*.
* **Host Form PDF Files:** Upload actual PDF forms to the `public` directory and link the download anchors accordingly.
* **Fallback Handler:** If a PDF is not yet available, configure the button to prompt: *"Form coming soon. Contact us on WhatsApp to have this sent directly to you."* or redirect them to the WhatsApp line.

---

## OPTIONAL ENHANCEMENTS

* Add search filter inputs to allow users to quickly filter forms by typing keywords (e.g. "Susu", "Loan").
