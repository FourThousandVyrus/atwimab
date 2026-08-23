# INVESTMENTS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** General introduction detailing available investment products.
  - **Product Grid:** Two main cards:
    - *ARB Fixed Deposit:* Includes details on the 22% annual return rate, maturity terms, and tenure options (3, 6, 9, 12 months).
    - *ARB Shares:* Explains co-ownership, dividends, and capital growth benefits.
  - **CTAs:** Direct links to the `/contact` page.

* **Identified Strengths:**
  - Clear interest rate callouts with clean badges (e.g. "Up to 22%").
  - Practical checklist formatting of features.

* **Identified Weak Points:**
  - Standard React inline styling cluttering components instead of centralized modular CSS.
  - Plain layout that lacks visual data graphs representing growth or investment yields.

* **Identified UI Inconsistencies:**
  - Inline grid column styling deviates from standardized flex and grid patterns defined globally.
  - Buttons use inline variables rather than global button components.

* **Missing Production-Level Enhancements:**
  - An inline link on the Fixed Deposit card directing users to the Fixed Deposit tab on the `/calculators` page.
  - Structured guidelines explaining the minimum investment threshold for opening a fixed deposit.

---

## PHASE 1 — UI POLISH

### Tasks
* Convert all inline styles to modular styles inside an `investments.module.css` file.
* Add hover transitions to investment cards (e.g. scale up 3px and animate border highlight color).
* Align checkmark list alignments to match global layouts.

### Suggestions
* Introduce a subtle graphical chart mockup showing the benefit of compound returns or share growth over time.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Optimize layout checks to ensure columns stack neatly on mobile screens without re-calculating dimensions in JavaScript.
* Use lightweight static icons instead of heavy vector calculations.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add specific `aria-label` definitions to CTA buttons (e.g., `"Contact Us to Invest in Fixed Deposits"` and `"Contact Us to Purchase Shares"`).
* Ensure SVGs and checkmark bullet icons are marked with `aria-hidden="true"`.
* Maintain contrast ratios on card backgrounds.

---

## PHASE 4 — SEO

### Tasks
* Target search traffic looking for local investment products (e.g. "Fixed deposit rates Ghana", "Buy community bank shares Ashanti Region").
* Order headers logically (`<h1>` for title, `<h2>` for cards).

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Add a reference link to the Fixed Deposit Application Form on `/downloads` directly within the Fixed Deposit card.
* Add a reference link to the Investment & Shares Guide brochure on the `/downloads` page.

---

## OPTIONAL ENHANCEMENTS

* Add a small embedded "Quick FD Calculator" widget directly on this page.
