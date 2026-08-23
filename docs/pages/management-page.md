# SENIOR MANAGEMENT PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** Image backdrop (bod background.jpg) with dark text overlay.
  - **Spine Timeline Grid:** Eight senior executives detailed in alternating left/right layout blocks tied to a vertical central line:
    - *Ernest Gyau:* Chief Executive Officer.
    - *Salamatu Zakaria:* Human Resource Manager.
    - *Clifford Awuah:* Business Development Manager.
    - *Evelyn Ackah:* Compliance Manager.
    - *Frederick Arhin Bukuro:* Operations Manager.
    - *Samuel Donkor:* Credit Manager.
    - *Richard Antwi:* Marketing Manager.
    - *Collins Boateng Bawuah:* IT Manager.
  - **Unit Heads Grid:** Displays operational leadership (CAGD Unit, Digital & Innovation Unit, Recovery Manager, Susu Coordinator).
  - **Branch Leadership Grid:** Prince Afriyie (Foase Manager) and Kwadaso Branch Manager.
  - **Footer Quote:** Dynamic closing banner.

* **Identified Strengths:**
  - Highly detailed professional bios detailing qualifications (MBA, Chartered Accountants, UPSA/KNUST alumni).
  - Unique timeline visual representation.

* **Identified Weak Points:**
  - **Content Gap:** The bank has six branches, but only two branch managers are listed in the Branch Leadership grid (Prince Afriyie for Foase, and a generic unnamed placeholder card for Kwadaso). The managers for Twedie, Abuakwa, Nkawie, and Toase are missing.
  - **Image Asset Dependency:** Relies on local image assets like `/ernest.jpg`, `/salamatu.jpg`, etc. These files must be verified as present in the `/public` folder, otherwise they will fail to load or display a broken image.
  - High inline complexity for timeline styling (e.g. `--delay` properties).

* **Identified UI Inconsistencies:**
  - Transition animations on the timeline row elements use inline styles that could be standardized inside the `management.module.css` file.
  - Font scaling inside timeline cards could be better responsive on tablet screens.

* **Missing Production-Level Enhancements:**
  - Link individual managers to their professional LinkedIn profiles.
  - Add text truncation or "Read More" collapse toggle buttons on bio paragraphs to keep the timeline from becoming overly tall on mobile screens.

---

## PHASE 1 — UI POLISH

### Tasks
* Standardize the timeline connectors and nodes inside `management.module.css` to use CSS custom variables for branding colors instead of hardcoded colors.
* Make the timeline vertical connector line hide automatically on screen widths below 768px (convert timeline card layouts to a single linear list).
* Align role badges and executive indices.

### Suggestions
* Add soft fade-in CSS transitions on scroll reveal for the timeline cards.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Ensure all Next.js `<Image>` tags use absolute width and height parameters to avoid Cumulative Layout Shifts (CLS) while downloading.
* Set `priority` attributes on the CEO hero background and profile photo since they appear above the fold.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure the alt description on all profile images includes the manager's name and role (e.g. `alt="Mr. Ernest Gyau - Chief Executive Officer"`).
* Maintain appropriate contrast on text elements displayed over dark overlays.

---

## PHASE 4 — SEO

### Tasks
* Target search traffic looking for corporate governance details (e.g. "Atwima Community Bank Board", "Ernest Gyau CEO Atwima").
* Provide proper outline formatting.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* **Verify Profile Images:** Ensure all images (e.g. `/ernest.jpg`, `/pics/RECOVERY MANAGER.jpg`) exist inside the static directories. If not, generate generic vector profile placeholder SVGs.
* **Resolve Branch Leadership Gaps:** Request confirmation from management regarding the names and bios of the missing branch managers (Twedie, Abuakwa, Nkawie, Toase) to complete the directory.

---

## OPTIONAL ENHANCEMENTS

* Add a back link button to return to the parent `/about` page easily.
