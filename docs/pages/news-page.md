# NEWS & ANNOUNCEMENTS PAGE

## CURRENT PAGE ANALYSIS

* **Current Structure:**
  - **Hero Section:** General description welcoming visitors to the news and announcements directory.
  - **News Cards Grid:** Details 5 custom news items featuring:
    - *Fixed Deposit updates:* Up to 22% returns.
    - *Community Health Fair:* Supporting Foase Health Fair.
    - *Online Calculators:* Launching the new calculations platform.
    - *Holiday Hours:* Notice regarding December/January branch timetables.
    - *School Donations:* GH₵15,000 to Kwadaso JHS for a science laboratory.
  - **Tag Badges:** Categorized tags (Important, News, Notice, New Feature) with color codes.
  - **Newsletter Card:** Encourages users to subscribe, linking back to the home page newsletter section (`/#newsletter`).

* **Identified Strengths:**
  - Fantastic localized context in stories, showing real community support in Foase and Kwadaso.
  - Uses tag coloring schema matching alert types.

* **Identified Weak Points:**
  - **External Image Reliance:** Uses external URLs from Unsplash (e.g., `https://images.unsplash.com/...`). If the user goes offline or the Unsplash database alters its paths, images will break.
  - **Redirecting Details:** Clicking "Contact us for details" or card links routes directly to the `/contact` page. Without dynamic blog details pages, this is an acceptable static compromise, but could be clearer.
  - Card list data array is declared directly in the component, polluting the rendering code space.

* **Identified UI Inconsistencies:**
  - Card images use absolute positioning inside dynamic ratios which can look distorted on certain wide-screen browser displays.
  - Button styling in the Newsletter card doesn't share global margins.

* **Missing Production-Level Enhancements:**
  - Filter options allowing users to filter articles by tags (e.g. show only "Notice" or "News").
  - Simple social share links (Facebook, LinkedIn share anchors) on each news card.

---

## PHASE 1 — UI POLISH

### Tasks
* Move all styling configurations from the page file to `page.module.css`.
* Refactor cards to use standard borders and shadow styles defined in the global design system.
* Standardize tag badges and ensure their background colors meet contrast standards.

### Suggestions
* Add hover zoom scale effect on the news card images.

---

## PHASE 2 — PERFORMANCE

### Tasks
* Download the Unsplash images and store them locally inside `/public/news/` as optimized WebP or JPEG formats to avoid external fetch latency.
* Ensure all image cards have `sizes` attributes optimized for responsive views to minimize raw file transfer.

---

## PHASE 3 — ACCESSIBILITY

### Tasks
* Ensure all card links have descriptive tags indicating which news story they refer to (e.g., `aria-label="Contact us for details on Fixed Deposit Rate Update"`).
* Maintain a high text-to-background contrast ratio for tag badges.
* Ensure all decorative card SVGs have `aria-hidden="true"`.

---

## PHASE 4 — SEO

### Tasks
* Target search traffic looking for community updates (e.g., "Atwima bank news", "Foase community announcements").
* Maintain logical heading layouts.

---

## PHASE 5 — PRODUCTION READINESS

### Tasks
* Host news images locally in the `/public` assets folder.
* Configure category filters using client-side react hooks to allow sorting/filtering of news updates.

---

## OPTIONAL ENHANCEMENTS

* Add dynamic pagination or a "Load More" button if the number of news articles expands.
