# ACCESSIBILITY REPORT

## Executive Summary
Atwima Community Bank is committed to financial inclusion, which extends directly to web accessibility. This report evaluates the website's layout, interactive elements, and forms against the **World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards. Correcting identified accessibility gaps is essential to ensure that customers of all abilities—including those using screen readers, keyboard-only navigation, and mobile touchscreens—can easily navigate the site's resources.

---

## Core Accessibility Gap Analysis

### 1. Keyboard Navigation & Focus Management
* **Gap:** Custom interactive widgets (such as the category buttons in `app/faq/page.js` and the tab buttons in `app/contact/page.js`) do not support proper keyboard tab loops. 
* **Details:**
  - The `BookAppointment` modal does not trap focus when open. A keyboard user pressing `Tab` can navigate to elements behind the modal overlay, causing confusion and rendering the modal unusable.
  - Custom accordion buttons (e.g., `BoardAccordion`) cannot be opened using the `Enter` or `Space` keys, rendering bios inaccessible to keyboard-only users.
* **WCAG Mapping:** Success Criterion 2.1.1 (Keyboard), Success Criterion 2.4.3 (Focus Order).

### 2. Screen Reader ARIA Semantics
* **Gap:** Interactive components lack ARIA attributes to announce state changes.
* **Details:**
  - FAQ triggers do not specify whether they are expanded or collapsed, nor do they link to the answer containers.
  - Decorative SVG icons (e.g., in `app/loans/page.js` and `app/business-banking/page.js`) lack `aria-hidden="true"`, causing screen readers to announce raw SVG paths or generic graphics descriptions.
* **WCAG Mapping:** Success Criterion 4.1.2 (Name, Role, Value).

### 3. Dynamic Calculation Content
* **Gap:** Dynamic calculation updates on `/calculators` are not announced to screen reader users.
* **Details:** When values are altered via range sliders, the numerical outputs (total maturity, monthly repayments) update instantly. Without aria-live declarations, screen readers do not notify users of the new results.
* **WCAG Mapping:** Success Criterion 4.1.3 (Status Messages).

### 4. Form Labels & Inputs
* **Gap:** Form input structures are not programmatically coupled with their descriptive titles.
* **Details:** Several inputs inside `careers/page.js`, `contact/page.js`, and the newsletter form lack clear `id` bindings to their corresponding `<label htmlFor="...">` tags, relying instead on visual proximity.
* **WCAG Mapping:** Success Criterion 1.3.1 (Info and Relationships), Success Criterion 3.3.2 (Labels or Instructions).

### 5. Color Contrast Limits
* **Gap:** Contrast warnings on specialized components.
* **Details:**
  - Light-grey description text over white backgrounds inside the FAQ answer block does not meet the mandatory 4.5:1 ratio.
  - White subtitles overlaying bright cyan elements in certain card headers fail minimum contrast checks.
* **WCAG Mapping:** Success Criterion 1.4.3 (Contrast - Minimum).

---

## Technical Remediation Checklist

### 1. Interactive Widgets (Accordions, Tabs, Modals)
- [ ] Add `aria-expanded="true/false"` and `aria-controls="panel-id"` to all Accordion button triggers.
- [ ] Map `onKeyDown` listeners to all custom triggers, checking for `Enter` (code 13) and `Space` (code 32) inputs.
- [ ] Implement a focus trap utility inside the `BookAppointment` modal to confine `Tab` focus to the form inputs when active, and return focus to the trigger button upon closing.

### 2. Dynamic Status Messages
- [ ] Add `aria-live="polite"` to the results cards inside `app/calculators/page.js` to announce calculated interest and repayments.
- [ ] Use `aria-describedby` to link input sliders to their current value labels.

### 3. Form Refactoring
- [ ] Ensure all input fields have unique `id` values that match the `htmlFor` property of their labels.
- [ ] Add `aria-required="true"` to fields marked with asterisks (`*`).

### 4. Stylistic Contrast adjustments
- [ ] Darken text colors inside `.text-muted` and FAQ answers from soft grey to a darker charcoal (contrast minimum 4.5:1).
- [ ] Provide highly visible focus indicators (custom brand outlines) for all inputs and buttons.
