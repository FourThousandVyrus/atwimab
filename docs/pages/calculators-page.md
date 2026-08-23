# CALCULATORS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Header:** Simple title introducing the tools.
  - **Tab Switcher:** Interactively switches between the three calculators:
    - *Loan Calculator:* Calculates monthly repayments based on Principal, Interest Rate (annual), and Tenure (months).
    - *Fixed Deposit Calculator:* Calculates Maturity Amount and Interest Earned based on Principal, Tenure (months), and Interest Rate.
    - *Susu savings calculator:* Calculates total accumulated savings and progress towards a target based on daily contribution and days.
  - **Interactive Inputs:** Range sliders and numeric input fields.
  - **Results Panel:** Displays calculated values dynamically in Ghana Cedis (GHS).

* **Identified Strengths:**
  - Fast, fully client-side execution using React state, avoiding slow backend API trips.
  - Useful presets matching actual bank rates (e.g., 22% FD rate, 28% Loan rate).

* **Identified Weak Points:**
  - Heavy usage of inline styles which clutter the JSX file and complicate responsive redesigns.
  - Lacks sanitization or constraints on direct numerical text input; users can type negative numbers, very large numbers, or empty strings that generate `NaN` or infinite values in calculations.
  - Slider controls are small and difficult to adjust precisely on mobile touch devices.

* **Identified UI Inconsistencies:**
  - Inconsistent formatting of currency values (some use `₵` and others use `GH₵` or standard currency filters).
  - Calculator cards use custom styling variables that do not fully leverage standard values in `globals.css`.

* **Missing Production-Level Enhancements:**
  - Form validation that automatically handles or blocks invalid inputs (e.g., negative loan terms, zero deposits).
  - Clear explanations of the calculation formulas used (e.g., simple interest vs reducing balance for loans).
  - A "Share Quote" or "Print Quote" function.

---

## PHASE 1 — UI POLISH

### Tasks
* Move inline styles to a modular CSS file (`calculators.module.css`) to improve readability and structure.
* Increase range slider track and thumb hit areas for improved mobile ergonomics.
* Unify currency formatting across all calculations to consistently use `GH₵` (Ghana Cedi symbol).

### Suggestions
* Add subtle animations (e.g., slide or fade) when switching tabs.
* Provide quick preset buttons for loan amounts or tenure (e.g., "12 Months", "24 Months", "36 Months").

---

## PHASE 2 — PERFORMANCE

### Tasks
* Use React `useMemo` for calculation results to prevent redundant recalculation on unrelated component state changes.
* Ensure slider inputs use debounced states if complex UI re-renders are triggered.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Add clear `<label>` tags for all slider and text inputs, ensuring they are linked with `htmlFor` attributes.
* Use `aria-live="polite"` on the results panel so screen readers dynamically announce new calculation totals to users.
* Ensure keyboard users can navigate, select tabs, and adjust the range sliders using arrow keys.

---

## PHASE 4 — SEO

### Tasks
* Optimize metadata to capture search traffic for local finance calculations (e.g., "Ghana loan calculator", "Susu savings calculator online").
* Add structured JSON-LD showing that this page contains financial calculators.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Add robust input sanitization to replace values less than or equal to zero with sensible defaults and block negative numbers.
* Add a disclaimer text: *"These calculations are estimates for planning purposes only. Actual rates and repayments are determined at the branch."*

---

## OPTIONAL ENHANCEMENTS

* Add a button: "Book Appointment with this Quote" that pre-fills the appointment form with the calculated service query.
