# FAQ PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Introduces the Help Centre and FAQ.
  - **Category Sidebar:** Allows users to filter questions by category (Accounts, Loans, Investments, Remittance, Branches & Hours) with indicator badges showing the number of questions in each category.
  - **Accordion Panel:** Displays interactive questions. Clicking toggles the visibility of the answer below it using React states.
  - **Sidebar CTA:** Quick link to WhatsApp chat for unresolved inquiries.

* **Identified Strengths:**
  - Clean client-side performance with reactive category switching.
  - Helpful question badges that summarize category content density.

* **Identified Weak Points:**
  - Standard accordion lacks keyboard support (e.g., users cannot toggle questions open using `Enter` or `Space` keys without complex custom handlers).
  - Lacks a search input, making it difficult for users to find answers without clicking through categories manually.

* **Identified UI Inconsistencies:**
  - Standard chevron icon animations are basic, lacking smooth transition delays.
  - Focus indicators for sidebar buttons are default browser borders, which may clash with the customized design aesthetic.

* **Missing Production-Level Enhancements:**
  - FAQ structured metadata schema (`FAQPage` JSON-LD) to enable Google to display rich search snippet listings.
  - Inline search bar that filters the list of questions dynamically across all categories.

---

## PHASE 1 — UI POLISH

### Tasks
* Implement clean CSS module classes in `page.module.css` to remove any remaining global styles.
* Animate accordion answer expansions with a smooth height and opacity transition.
* Smooth out chevron rotations when questions are active.

### Suggestions
* Add interactive hover states for the sidebar category selectors.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Keep FAQ data arrays static and declare them outside of the React component file or fetch them from a static JSON asset to prevent re-creation during state updates.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Bind the accordion button to toggle on both mouse clicks and keyboard `Enter` / `Space` presses.
* Add correct ARIA properties on accordion components:
  - Trigger: `aria-expanded="true/false"`, `aria-controls="answer-id"`.
  - Panel: `role="region"`, `id="answer-id"`, `aria-labelledby="button-id"`.
* Ensure that the contrast ratio of the grey answer text satisfies WCAG AA guidelines.

---

## PHASE 4 — SEO

### Tasks
* Include relevant financial question keyphrases in page headings.
* Add schema.org `FAQPage` JSON-LD template structure.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Ensure the WhatsApp CTA links correctly match the standard bank phone contact details.
* Standardize branch lists inside the Branch FAQ section to align with the final verified locations (resolving the contact vs appointment branch list mismatch).

---

## OPTIONAL ENHANCEMENTS

* Add an interactive search bar at the top of the FAQ layout that filters questions in real-time.
