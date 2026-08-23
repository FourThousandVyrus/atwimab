# PERSONAL BANKING PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Breadcrumbs navigation, title, and descriptive subtitle.
  - **Accounts Listing Grid:** Cards detailing 5 personal account products:
    - *ARB Current Account:* Cheque books, standing orders.
    - *ARB Savings Account:* Interest-bearing account with ATM access.
    - *ARB Salary Account:* Salaried employee options with overdraft facilities.
    - *ARB Susu Account:* Modernized daily collection saving scheme.
    - *Kiddies Account:* Junior savings program.
  - **Content Items:** Checklists of core features and direct CTAs to open each account.

* **Identified Strengths:**
  - Standard card structure with key feature lists.
  - Clear section linking (`id` tags) matching header dropdown navigation anchors.

* **Identified Weak Points:**
  - **Constraint Contradiction:** The savings account key features list includes *"Mobile banking access"*, which directly contradicts the strict project constraint that this bank does not support online or mobile banking apps.
  - Uses standard HTML `<img>` tags (line 79) instead of Next.js optimized `<Image>` tags. This will trigger warning alerts during Next.js builds.
  - Profile images (`/acc_current.png`, `/acc_savings.png`, etc.) might not exist or need to be verified.

* **Identified UI Inconsistencies:**
  - Inline margins and styles on buttons.
  - Visual layout is basic, utilizing solid cards.

* **Missing Production-Level Enhancements:**
  - Linking the ARB Susu Account card to the Susu Calculator tab on `/calculators`.
  - Linking the ARB Savings Account card to the Fixed Deposit calculator.
  - Linking Account cards to the downloadable forms (e.g. Personal Account Opening Form, Susu Account Registration Form) on the `/downloads` page.

---

## PHASE 1 — UI POLISH

### Tasks
* Replace standard `<img>` tags with Next.js `<Image>` components to avoid linting errors and layout shifts.
* Adjust padding and margin styles inside `page.module.css` to match standard design structures.

### Suggestions
* Add interactive hover effects to product cards (e.g., zoom profile picture slightly, translate buttons).

---

## PHASE 2 — PERFORMANCE

### Tasks
* Ensure all page images are compressed and stored in local WebP formats.
* Preload the primary hero page sections to optimize Largest Contentful Paint (LCP).

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add distinct `aria-label` names to the CTA buttons (e.g., `"Apply to open a Current Account"`, `"Apply to open a Susu Account"`).
* Ensure checkmark SVGs are ignored by screen readers (`aria-hidden="true"`).

---

## PHASE 4 — SEO

### Tasks
* Target search traffic looking for personal savings tools (e.g., "Open savings account Foase", "Susu savings account Kumasi").
* Organize headings properly.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* **Remove Non-Existent Features:** Remove *"Mobile banking access"* from the Savings Account features list to maintain strict content/tools constraints.
* **Integrate Downloads:** Link account cards to their corresponding downloadable registration forms on `/downloads`.

---

## OPTIONAL ENHANCEMENTS

* Add a quick FAQ accordion specific to personal savings requirements.
