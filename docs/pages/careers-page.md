# CAREERS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Introduction promoting careers at the bank in the Ashanti Region.
  - **Culture Values:** Grid displaying core corporate values (Community First, Growth Mindset, Integrity, Excellence).
  - **Current Openings:** A "No Vacancies" card instructing candidates to submit their credentials for future openings.
  - **Expression of Interest Form:** Interactive form (Name, Email, Phone, Role, Message) that encodes inputs and launches a pre-filled WhatsApp message redirecting to the HR contact line.

* **Identified Strengths:**
  - WhatsApp redirection is highly practical for a database-less static export, bypassing complex file upload databases.
  - Clear culture statements align well with community banking.

* **Identified Weak Points:**
  - The submission workflow does not support actual file uploads; the user is redirected to WhatsApp with text, which may confuse applicants who expect their PDF CV to be transmitted automatically.
  - Form validation is basic, lacking phone format checks (e.g. validating Ghanaian phone format starting with `05` or `02` or `+233`).

* **Identified UI Inconsistencies:**
  - Success state displays a WhatsApp checkmark card, but the actual file submission is still manual on the applicant's side.
  - Inputs use browser-default focus outlines instead of standard brand color focus rings.

* **Missing Production-Level Enhancements:**
  - Explanatory copy near the file upload or submit button clarifying that the user must manually attach their PDF CV document *after* WhatsApp opens.
  - An email fallback option (mail link) for applicants who prefer to submit their CV from a desktop computer without WhatsApp installed.

---

## PHASE 1 — UI POLISH

### Tasks
* Replace standard browser focus styles on form inputs with a custom `#2596be` outline transition.
* Style the form layout using a custom CSS module (`careers.module.css`) to align padding and margins.
* Improve the layout of the "No Vacancies" section with a soft card outline and subtle background pattern.

### Suggestions
* Add micro-interactions (e.g., hover scaling) to the values cards.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Optimize SVG icons in the Contact Info panel to use inline paths or custom SVG files to avoid extra image request latency.
* Prevent double-submission of the form by disabling the submit button immediately upon click.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Link all form labels with input fields using standard `htmlFor` properties.
* Add an explicit `aria-describedby` link on the WhatsApp submission button explaining that clicking it opens an external application.
* Ensure contrast ratio on description copy meets standard WCAG AA guidelines.

---

## PHASE 4 — SEO

### Tasks
* Include metadata tags targeted toward local job seekers (e.g., "Careers at Atwima Bank", "Banking jobs Ashanti Region").
* Ensure heading hierarchy has one `<h1>` at the top and subheaders formatted as `<h2>` or `<h3>`.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Add an explicit tooltip/guideline note: *"Note: Clicking submit will open WhatsApp. Please attach your PDF CV to the chat to complete your application."*
* Include an alternative mailto link pointing to `info@atwimabank.com` for applicants who do not have WhatsApp.

---

## OPTIONAL ENHANCEMENTS

* Add a section highlighting "Life at Atwima Bank" with dummy photo grid panels (using generate_image mockups).
