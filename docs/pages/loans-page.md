# LOANS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Introduction detailing the bank's credit and financing solutions.
  - **Loans Grid:** Nine different card items representing various specialized loan offerings:
    - *Salary Loan / Overdraft:* For salaried public/private employees.
    - *Commercial Loan / Overdraft:* Business working capital.
    - *Transport Loan:* Financing for vehicle acquisitions.
    - *Susu Loan:* Petty trader micro-financing.
    - *Funeral Loan:* Supporting families with funeral expenses.
    - *Church Development Loan:* Financing building projects and vehicles for churches.
    - *Group Loans:* Collective liability loans for cooperatives.
  - **CTAs:** Each card includes an "Apply Now" button that routes to `/contact`.

* **Identified Strengths:**
  - High level of product localization reflecting specific Ghanaian community financial needs (Funeral, Susu, and Church loans).
  - Inline custom SVG icons representing each product category.

* **Identified Weak Points:**
  - Plentiful inline styles used for margins, borders, colors, and layout flex grids.
  - All nine cards have identical "Apply Now" buttons, which reduces contextual action clarity.

* **Identified UI Inconsistencies:**
  - Inconsistent spacing values compared to standard section layout guidelines.

* **Missing Production-Level Enhancements:**
  - Linking cards directly to the loan calculators on the `/calculators` page so that users can estimate monthly payments.
  - Direct integration with downloadable PDF forms on `/downloads` (e.g., Personal Loan application, SME Loan application, Salary Advance form).

---

## PHASE 1 — UI POLISH

### Tasks
* Move duplicate inline styles into a dedicated `loans.module.css` stylesheet.
* Standardize SVG icon dimension wrappers to ensure identical margins and alignments across cards.
* Highlight special cards (e.g., "Commercial Loan" or "Salary Loan") with unique borders or subtle brand markers to indicate popularity.

### Suggestions
* Add interactive hover shadows and vertical offsets on cards.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Extract the array of loan products and SVG icons outside the React component render function to prevent memory reallocation on page re-renders.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add explicit `aria-label` names to the buttons (e.g. `"Apply for Salary Loan"`, `"Apply for Susu Loan"`).
* Mark SVG icons with `aria-hidden="true"` since they are decorative.
* Ensure list item bullet icons have appropriate label roles if read by screen readers.

---

## PHASE 4 — SEO

### Tasks
* Optimize local loan keywords in metadata (e.g. "Personal loans Foase", "Susu loans Kumasi", "Salary overdraft Ghana").
* Establish structured outline elements.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Link the Salary Loan card to the Salary Advance Application Form on `/downloads`.
* Link the Commercial Loan card to the SME Loan Application Form on `/downloads`.
* Link the Susu Loan card to the Susu Account Registration Form on `/downloads`.
* Add a disclaimer detailing that *all loan approvals are subject to credit assessment and terms*.

---

## OPTIONAL ENHANCEMENTS

* Add a floating "Quick Estimate" tool link in the sidebar or header.
