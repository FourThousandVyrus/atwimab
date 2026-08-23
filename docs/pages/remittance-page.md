# REMITTANCE SERVICES PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** General welcome detailing global payout accessibility.
  - **Western Union Partnership Header:** Prominently highlights Western Union integration.
  - **Step-by-Step Payout Process:** Grid displaying four step cards:
    - *01 Get Reference Number:* Obtaining MTCN.
    - *02 Visit a Branch:* Bringing personal identification documents.
    - *03 Verify Transaction:* Consultant assists with verification.
    - *04 Receive Payout:* Fast payout in Ghana Cedis (GHS).
  - **Alternative Transfer Services Block:** General notice mentioning future partnerships with a CTA pointing to `/contact`.

* **Identified Strengths:**
  - Standard process grid with large numeric markers (01, 02, 03, 04).
  - Explicit confirmation that payouts are disbursed in Ghana Cedis.

* **Identified Weak Points:**
  - Relies completely on inline styles inside React elements instead of utilizing clean CSS Modules.
  - Doesn't explicitly state the exact accepted identity documents (e.g., Ghana Card is mandatory per Bank of Ghana rules).

* **Identified UI Inconsistencies:**
  - The step layout is styled with inline CSS grids that do not leverage the default class standards.
  - Margin sizes on the secondary card container are hardcoded in pixels.

* **Missing Production-Level Enhancements:**
  - A Checklist of "What to Bring to the Branch" (e.g., Valid Ghana Card, MTCN Code, Sender Full Name, Expected Amount, Sender Country).
  - Payout branch schedule listing (or a link directly to `/contact` branch operational hours).

---

## PHASE 1 — UI POLISH

### Tasks
* Refactor all inline layout styles to the central or modular CSS sheets.
* Style the numeric indicator labels (01, 02, etc.) to use soft transparency matching the brand palette.
* Standardize margins and layouts of steps.

### Suggestions
* Add hover scale zoom transitions to step cards.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Keep static step arrays outside the main React function body to optimize execution pathing.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure the step numerical headings (`01`, `02`) are marked as structural indices and have high color contrast ratios against card backgrounds.
* Add unique descriptions to CTA link buttons.

---

## PHASE 4 — SEO

### Tasks
* Include metadata keywords focused on local money transfers (e.g. "Western Union Foase", "Receive money from abroad Ghana", "Kumasi Western Union agent").
* Standardize outline structure.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* **Ghana Card Requirement:** Explicitly note in Step 02 that the **Ghana Card** is the only accepted national identity card for receiving international money transfers in Ghana (complying with Bank of Ghana guidelines).
* Add links pointing back to branch locations and hours for remittance payouts.

---

## OPTIONAL ENHANCEMENTS

* Add quick details for other remittance channels (e.g. MTN Mobile Money cashouts if supported).
