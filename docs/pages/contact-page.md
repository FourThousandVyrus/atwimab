# CONTACT & BRANCHES PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Header:** Breadcrumbs, page title, core phone number, and global branch open/closed indicator.
  - **Branch Grid:** Displays six branch cards with address, phone number, hours, and a real-time status badge ("Open Now" / "Closed") calculated client-side.
  - **Form Panel Switcher:** Flip-card layout switching between:
    - *Send a Message (Front):* Sends data to an internal `/api/contact` endpoint via `fetch`.
    - *Book a Branch Visit (Back):* Encodes fields and triggers a WhatsApp redirect to the main bank phone line.

* **Identified Strengths:**
  - Excellent dynamic branch open/closed time checker running client-side.
  - Highly interactive tab-flip transition between the message form and the appointment form.

* **Identified Weak Points:**
  - **Critical Branch Mismatch:** The branch cards on the contact page list: *Foase, Kwadaso, Patasi, Mpasatia, Allabar, Daban*. However, the floating `BookAppointment` modal lists: *Foase, Twedie, Kwadaso, Abuakwa, Nkawie, Toase*. This is a major contradiction that needs correction.
  - **Static Export API Route Issue:** The "Send a Message" form submits to `/api/contact` using a standard `POST` fetch request. In a static export (`output: 'export'`), custom API routes are not supported and will return a 404 error. This must be refactored to a client-side mailto link, external form service, or a WhatsApp redirect similar to the appointment card.
  - **Constraint Violations:** The topic dropdown contains an option for *"Mobile Banking & App Support"*, violating the project constraint that Atwima Community Bank does not support mobile banking or mobile apps.

* **Identified UI Inconsistencies:**
  - Form validation error alerts use basic browser dialog popups (`alert(...)`) instead of modern, themed UI alert state panels.

* **Missing Production-Level Enhancements:**
  - Explicit interactive map links (e.g. Google Maps URL) for each of the six physical branch addresses.
  - A friendly, styled inline error/success handler for form submission failures instead of a raw alert box.

---

## PHASE 1 — UI POLISH

### Tasks
* Replace browser `alert()` popups with themed inline success/error notice boxes within the card layout.
* Standardize inputs to match the global focus styles and spacing rules.
* Move contact page layout-specific styles to `contact.module.css`.

### Suggestions
* Add smooth flip transitions for card toggling using CSS 3D transforms.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Debounce or optimize the `getBranchStatus` polling logic to avoid constant layout evaluation.
* Optimize CSS layout classes on cards to prevent repaints when switching forms.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure the form toggle buttons (`Send Us a Message` / `Book a Branch Visit`) have proper ARIA attributes to indicate which panel is active.
* Add form helper text and error states with `aria-invalid` and `aria-describedby` associations.
* Link all form labels to their respective inputs using unique `htmlFor` targets.

---

## PHASE 4 — SEO

### Tasks
* Target local contact queries (e.g., "Atwima bank contact number", "Foase bank branch address", "Kumasi community bank branch").
* Ensure all headers are organized hierarchically.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* **Correct Branch Mismatches:** Coordinate with management to verify the correct list of active branches and synchronize both `contact/page.js` and `BookAppointment.js`.
* **Remove Non-Existent Features:** Remove *"Mobile Banking & App Support"* from the topic selection dropdown to align with strict content-only constraints.
* **Resolve Static Export Endpoint:** Re-architect the message submission form to either launch a WhatsApp message template, open a pre-filled email client link, or connect to an external serverless contact form handler.

---

## OPTIONAL ENHANCEMENTS

* Embed structured contact details as Schema.org `LocalBusiness` markers in JSON-LD.
