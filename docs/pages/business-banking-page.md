# BUSINESS BANKING PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Gradient background with breadcrumb links, title, and general description of business services.
  - **Products Section:** Displayed as a grid of detailed cards showing three core offerings:
    - *Business Accounts:* Savings and Current accounts for sole proprietors and companies.
    - *Commercial Loans / Overdrafts:* Capital for businesses.
    - *Group Loans:* Financing for cooperatives/groups.
  - **CTA:** Buttons on each card linking to the `/contact` page.

* **Identified Strengths:**
  - Clean card layout with checkmarks detailing product features.
  - Direct integration of svg icons inside card headers.

* **Identified Weak Points:**
  - Excessive use of inline styling objects instead of modular CSS styles.
  - Hardcoded color values (e.g. `rgba(255,255,255,0.6)`, `var(--neutral-900)`) directly in the JSX instead of using semantic style classes.
  - Lacks dedicated business-specific imagery or graphics, relying solely on icons.

* **Identified UI Inconsistencies:**
  - The page utilizes inline grid styles that don't match the modular responsive grid classes defined in `globals.css`.
  - Button styling is written inline rather than using the global `.btn` and `.btn-primary` class combinations.

* **Missing Production-Level Enhancements:**
  - An interactive section directing business owners to the business-relevant calculator on `/calculators`.
  - A section listing the required documents for business account opening (e.g. Business registration certificate, Ghana Card, Tax Identification Number).

---

## PHASE 1 — UI POLISH

### Tasks
* Convert all inline styles (spacing, layout grids, cards) to modular CSS in a new `business-banking.module.css` file or reference global classes.
* Add hover transitions to the business product cards (e.g., slide up 4px with a soft box shadow).
* Standardize the lists to use global list item spacing classes instead of inline padding.

### Suggestions
* Introduce a stylized background mesh pattern or custom svg icons with brand gradients.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Extract the product list data array outside of the component or into a separate static configuration file to avoid recreation on re-render.
* Ensure layout shifts are prevented by specifying explicit dimension wrappers on card containers.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Verify that all links have unique, descriptive texts (instead of multiple identical "Apply Now" buttons, customize to "Apply for Commercial Loan", etc.).
* Ensure the SVG checkmarks are marked with `aria-hidden="true"`.
* Improve color contrast on subtitle text elements over dark backgrounds.

---

## PHASE 4 — SEO

### Tasks
* Enhance metadata title and description with local commercial keywords ("SME Loans Kumasi", "Business Accounts Ashanti Region").
* Ensure proper heading hierarchy (e.g., `<h2>` for products, `<h3>` for cards).

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Link the Business Account card directly to the relevant downloadable forms on the `/downloads` page (e.g., Business Account Opening Form).
* Link the Commercial Loans card directly to the SME Loan Application form on the `/downloads` page.

---

## OPTIONAL ENHANCEMENTS

* Add a "Business Requirements Checklist" accordion or popover to prepare business owners before they visit a branch.
