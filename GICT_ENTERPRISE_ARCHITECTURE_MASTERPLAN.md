# GICT — Enterprise Digital Architecture & Web Specification

**Document version:** 2.0.0  
**Status:** Implementation-ready blueprint  
**Supersedes:** v1.0.0 (Master Blueprint)  
**Prepared:** 21 October 2026  
**Owner:** Global Institute of Corporate Training (GICT), Rawalpindi  
**Technical owner:** _To be assigned_  
**Tax content reviewer:** _To be assigned (required before calculator publication)_  
**Review cycle:** Quarterly, and within 5 working days of every Finance Act / major SRO

---

## DOCUMENT CONTROL

### Purpose

This document is the single source of truth for the design, content, engineering, compliance, and launch of the GICT website. It is written to be handed to a designer, developer, content writer, tax reviewer, and admissions manager without further interpretation.

### Rules for using this document

1. **No invented facts.** Every public claim, fee, date, rating, alumni count, accreditation, or faculty credential must have an owner and evidence in the Claim Register (Appendix F).
2. **No hardcoded tax rates in copy or components.** All rates live in a versioned tax-rules registry, with a source, effective date, reviewer, and test fixtures.
3. **One canonical URL per page.** No duplicate routes, no orphan pages, no placeholder pages published.
4. **TBD is allowed in planning.** TBD must be resolved before launch and tracked in the Open Decisions table (Appendix G).
5. **If a feature is not implemented, do not promise it.** This applies to automated WhatsApp messages, CRM syncing, syllabus downloads, portals, and payment links.
6. **Accessibility and legal review are launch gates, not post-launch tasks.**

### What changed from v1.0

| v1 issue | v2 correction |
|---|---|
| Routes were inconsistent (`/about-us`, `/knowledge-hub`, `/contact-us`, `/corporate-solutions`) | One route table with final URLs and redirects |
| B2B page referenced but never specified | Dedicated `/corporate-training` specification |
| “Quick Pay / Student Portal” appeared in the header but had no page or system | Removed from MVP; added to Phase 2 backlog with an owner |
| Unverified claims (“4.9/5”, “1,200+ alumni”, “Pakistan’s most comprehensive”, “Lighthouse 100”) | Claim Register, evidence requirements, realistic performance budgets |
| Finance Act 2024-25 treated as permanent | Versioned tax-rules registry with effective dates and review workflow |
| Gold/gradient-heavy visual direction | White, slate, and navy design system; monochrome icons; no decorative colour |
| Automated WhatsApp/email/CRM promised without architecture | Phased integration: deep links first, Cloud API later; server-side lead pipeline specified |
| 25 calculators listed without formulas or edge cases | Calculator specification, shared engine rules, fixtures, and per-tool edge cases |
| No privacy, terms, refund, or calculator disclaimer pages | Legal and compliance section plus required page templates |
| 30-day roadmap with no team, risks, or acceptance criteria | 10-week plan (≈68 person-days), roles, gates, risks, and QA checklist |
| No analytics, consent, monitoring, or maintenance model | Measurement plan, consent, uptime monitoring, tax-update SLA |

### Scope

**In scope**

- Public marketing site, course catalogue, faculty directory, calculator hub, knowledge hub, contact, corporate training, legal pages.
- Lead capture, email notification, CRM/webhook integration, WhatsApp click-to-chat.
- SEO, analytics, accessibility, performance, security, and content governance.

**Out of scope for v1 launch**

- Student portal, online payments, LMS, attendance, results, certificates, and fee management.
- Automated WhatsApp Business API messaging (Phase 2; requires opt-in and template approval).
- Urdu/RTL localisation (Phase 2; architecture must not block it).
- Mobile apps.
- AI chatbot or AI-generated legal advice.

### Definition of done

A page is done only when:

- Content is approved by the business owner and, where relevant, the tax/legal reviewer.
- Desktop and mobile layouts are complete.
- Keyboard navigation, focus states, labels, and contrast pass.
- Metadata, canonical URL, Open Graph image, and schema are present.
- Links are valid; no console errors; no layout shift from missing image dimensions.
- Lighthouse mobile targets are met (see §8.12).
- The page is added to the sitemap and internal-link plan.
- Analytics events are firing.
- Claims on the page are recorded in the Claim Register.

---

## 1. BUSINESS CONTEXT

### 1.1 Audiences and jobs to be done

| Audience | What they need | Primary page | Conversion |
|---|---|---|---|
| Working tax consultants and accountants | Practical IRIS filing, withholding, wealth reconciliation, current-law updates | Course detail, calculator hub | Admission enquiry |
| Corporate finance teams (CFO, manager, accountant) | Corporate tax, sales tax, SECP compliance, audit readiness | Corporate training, course detail | B2B proposal |
| Lawyers and litigators | Assessment, appeals, ATIR, stay orders, drafting | Litigation course, faculty | Admission enquiry |
| Business owners and directors | Compliance calendar, risk reduction, in-house capability | Corporate training, knowledge hub | Consultation |
| Students and fresh graduates | Career-focused, practical training and certificate | Course index, about | Admission enquiry |
| Overseas Pakistani professionals | Live online access, recordings, time-zone-friendly schedule | Course detail, contact | Admission enquiry |
| Corporate HR / L&D | Vendor credibility, scope, delivery model, commercial terms | Corporate training | Proposal request |

### 1.2 Positioning

**Positioning statement**

> GICT is a practitioner-led taxation and corporate training institute in Rawalpindi. Its programmes are built around current Pakistani statute and live portal work, taught by advocates and chartered accountancy practitioners, with weekend on-campus and live online delivery.

**Use factual language.** Avoid “best”, “premier”, “#1”, “guaranteed”, “100% placement”, or unverified ratings. Those words require evidence and legal review.

### 1.3 Proof strategy

The site should prove capability through:

- Named faculty with verified designations, affiliations, and consent.
- Actual course curriculum, module counts, assessment method, and certificate criteria.
- Real campus details, photographs, and location.
- Real testimonials with written consent and, where possible, name/role/company.
- Actual batch dates, formats, and seat limits.
- Transparent calculator methodology, sources, and last-verified dates.
- Clear policies on fees, refunds, and privacy.

**Do not publish** stock photos presented as faculty, invented alumni counts, fake reviews, or “limited seats” countdowns that reset.

### 1.4 Conversion goals

| Priority | Action | Event name | Destination |
|---|---|---|---|
| 1 | Admission enquiry | `lead_submit_admission` | `/thank-you?type=admission` |
| 2 | Corporate proposal request | `lead_submit_corporate` | `/thank-you?type=corporate` |
| 3 | WhatsApp conversation | `whatsapp_click` | `wa.me` |
| 4 | Calculator use | `calculator_result` | In-page |
| 5 | Syllabus/course view | `course_view` | Course detail |
| 6 | Call | `phone_click` | `tel:` |

**Primary CTA:** “Apply for the next cohort” (opens admission form).  
**Secondary CTA:** “Explore calculators” or “View syllabus”.  
Do not place two competing lead forms above the fold.

---

## 2. INFORMATION ARCHITECTURE

### 2.1 Principles

- Content silos: Courses, Calculators, Knowledge Hub, Faculty.
- Every page has one clear primary action.
- Maximum three clicks from home to any course, calculator, or article.
- Every course links to relevant calculators, faculty, and articles.
- Every calculator links to a relevant course and at least two related calculators.
- Legal pages are reachable from the footer and every form.

### 2.2 Final route table

| Route | Page | Indexable | Primary CTA |
|---|---|---|---|
| `/` | Home | Yes | Admission enquiry |
| `/about` | About GICT | Yes | Admission enquiry |
| `/faculty` | Faculty directory | Yes | Admission enquiry |
| `/faculty/[slug]` | Faculty profile | Yes | Admission enquiry |
| `/courses` | Course catalogue | Yes | View course |
| `/courses/[slug]` | Course detail | Yes | Admission enquiry |
| `/calculators` | Calculator hub | Yes | Open calculator |
| `/calculators/[slug]` | Calculator detail | Yes | Use calculator |
| `/knowledge-hub` | Article index | Yes | Read article |
| `/knowledge-hub/[slug]` | Article | Yes | Course CTA |
| `/corporate-training` | B2B training | Yes | Proposal request |
| `/contact` | Contact and campus | Yes | Contact form |
| `/thank-you` | Post-submission confirmation | No (`noindex`) | WhatsApp / return |
| `/privacy` | Privacy policy | Yes | Contact |
| `/terms` | Terms of use | Yes | Contact |
| `/refund-policy` | Refund and cancellation policy | Yes | Contact |
| `/disclaimer` | Calculator and content disclaimer | Yes | Contact |
| `/accessibility` | Accessibility statement | Yes | Contact |
| `/404` | Not found | No | Search / useful links |

**Redirects required**

| Old / likely URL | New URL | Status |
|---|---|---|
| `/about-us` | `/about` | 301 |
| `/contact-us` | `/contact` | 301 |
| `/blog` | `/knowledge-hub` | 301 |
| `/corporate-solutions` | `/corporate-training` | 301 |
| `/courses/tax-filing-iris-compliance/` (trailing slash variants) | canonical no-trailing-slash URL | 301 |

Set `trailingSlash: 'never'` in the framework config and make canonicals match.

### 2.3 Navigation

**Desktop primary navigation (7 items maximum):**

`Courses` · `Calculators` · `Faculty` · `About` · `Knowledge Hub` · `Contact` · `[Apply for admission]`

Corporate training appears in the footer, the About dropdown, the courses page, and contextual CTAs. It does not need a top-level item if space is tight.

**Courses dropdown:** all six programmes, grouped into “Taxation & regulatory” and “Finance & technology”, plus “Compare programmes”.

**Calculators dropdown:** six categories, four popular tools, and “View all calculators”. The count is rendered dynamically from published tools, not hardcoded.

**Mobile drawer:** all routes, contact details, hours, CTA. It must close on Escape, on link click, and when focus leaves the drawer. Body scroll is locked while open.

### 2.4 Page hierarchy

```
Home
├── Courses
│   ├── Tax Filing & IRIS Compliance
│   ├── Corporate Taxation & Advisory
│   ├── Sales Tax & Provincial VAT
│   ├── Advanced Income Tax Litigation
│   ├── Corporate Finance & Financial Modeling
│   └── Computerized Accounting & QuickBooks
├── Calculators
│   ├── Individual & Salary
│   ├── Property & Capital Gains
│   ├── Sales Tax & VAT
│   ├── Corporate & Turnover
│   ├── Withholding & Banking
│   └── SECP & Financial Models
├── Faculty
│   └── Individual profiles
├── Knowledge Hub
│   └── Articles by category
├── Corporate Training
├── About
├── Contact
└── Legal
```

---

## 3. DESIGN SYSTEM

### 3.1 Design principles

1. **White by default.** White surfaces, light-grey section bands, and thin borders create structure.
2. **One accent.** Navy is the action colour. Gold is not a UI colour; it may appear only inside the institutional logo.
3. **Editorial hierarchy.** Serif headings, sans-serif body, generous spacing, restrained weights.
4. **Monochrome iconography.** All interface icons use the same slate colour and stroke weight.
5. **No decoration without purpose.** No gradients, glows, floating blobs, auto-carousels, or animated counters.
6. **Content first.** Photography supports credibility; it does not replace it.
7. **Accessible by construction.** Contrast, focus, keyboard, and labels are part of the component, not an afterthought.

### 3.2 Colour tokens

| Token | Value | Usage |
|---|---|---|
| `--color-surface` | `#FFFFFF` | Page background, cards, inputs |
| `--color-surface-muted` | `#F8FAFC` | Alternate section bands, result panels |
| `--color-ink-900` | `#0F172A` | Headings, primary text |
| `--color-ink-700` | `#334155` | Strong body text |
| `--color-muted` | `#64748B` | Secondary text, default icon colour |
| `--color-line` | `#E2E8F0` | Borders and dividers |
| `--color-line-strong` | `#CBD5E1` | Input borders, hover borders |
| `--color-brand` | `#0B1F3A` | Primary buttons, dark accents |
| `--color-brand-hover` | `#16304F` | Primary button hover |
| `--color-focus` | `#0F172A` | Focus ring (with offset) |
| `--color-success` | `#166534` | Success text only |
| `--color-error` | `#B91C1C` | Error text and borders only |
| `--color-warning` | `#92400E` | Warning text only |

**Rules**

- Do not use gold, amber, emerald, blue, or purple as decorative section colours.
- Semantic colours appear only for validation, status, and destructive actions.
- Icons: `#64748B` default; `#0F172A` on hover/active; `#FFFFFF` inside dark buttons.
- Never use colour alone to convey meaning; pair with text or an icon.

### 3.3 Typography

| Role | Font | Size / line-height | Weight |
|---|---|---|---|
| Display | Source Serif 4 | `clamp(2.5rem, 5vw, 3.5rem)` / 1.1 | 600 |
| H1 | Source Serif 4 | `clamp(2rem, 4vw, 3rem)` / 1.15 | 600 |
| H2 | Source Serif 4 | `clamp(1.75rem, 3vw, 2.25rem)` / 1.2 | 600 |
| H3 | Source Serif 4 | `1.5rem` / 1.3 | 600 |
| H4 | Inter | `1rem` / 1.4 | 600 |
| Body | Inter | `1rem` / 1.65 | 400 |
| Body small | Inter | `0.875rem` / 1.6 | 400 |
| Caption | Inter | `0.75rem` / 1.5 | 400 |
| Overline | Inter | `0.6875rem` / 1.4, tracking `0.16em` | 600, uppercase |
| Button | Inter | `0.8125rem` / 1 | 600 |

- Body measure: 60–75 characters.
- Headings: sentence case, no all-caps except overlines.
- Do not use more than three font weights on a page.
- Self-host fonts with `font-display: swap` and subset Latin; avoid render-blocking third-party font requests.

### 3.4 Spacing and layout

- Base unit: 4px.
- Container: `max-width: 1200px` (use 1280px where content allows), horizontal padding 16px mobile / 24px tablet / 32px desktop.
- Section padding: 80px desktop, 56px tablet, 48px mobile.
- Grid: 12 columns; gutter 24px; cards may span 4 columns desktop, 6 tablet, 12 mobile.
- Vertical rhythm: 8px increments.
- Card radius: 8px. Button radius: 6px. Input radius: 6px. Avoid oversized 24px+ radii.
- Shadows: mostly none. Use `0 4px 16px rgba(15,23,42,.05)` only on hover or modal.
- Borders: 1px `--color-line`; use `--color-line-strong` for form controls.

### 3.5 Components

| Component | Variants | Required states | Notes |
|---|---|---|---|
| Button | primary, outline, quiet, destructive | default, hover, focus-visible, active, disabled, loading | Min height 44px; icon 16px; no gradient |
| Link | inline, navigation, quiet | default, hover, focus-visible, visited | Underline on inline links |
| Input | text, tel, email, number, date | default, hover, focus, error, disabled, read-only | Visible label; help text; error text |
| Select | native | same | Avoid custom dropdowns unless necessary |
| Textarea | — | same | Auto-resize optional; character count optional |
| Checkbox / radio | — | default, focus, checked, error, disabled | 44px touch target; group legend |
| Card | programme, faculty, calculator, article | default, hover, focus-within | Entire card may not be a link if it contains actions |
| Badge | neutral, status | — | Text + optional dot; no colour-only meaning |
| Accordion | single/multiple | collapsed, expanded, focus | Native `<details>` acceptable; animated height optional |
| Tabs | underline | selected, focus | Keyboard arrow support if custom |
| Modal | admission, confirmation | open, closing, error, loading | Focus trap, ESC, overlay click, return focus |
| Breadcrumb | — | — | `aria-label="Breadcrumb"`; last item not linked |
| Pagination | — | — | Only if article/calculator lists exceed one page |
| Callout | info, warning, success, error | — | Icon + text; no colour-only meaning |
| Table | data, comparison | — | Responsive scroll wrapper; header scope |
| Stat | — | — | Label above value; no invented numbers |
| Empty state | — | — | Explain what to do next |
| Toast | success, error | auto-dismiss | `aria-live`; do not use for critical errors |
| Skip link | — | focus | First focusable element |

### 3.6 Iconography

- Use one line-icon family (Lucide or a custom 24px set).
- Stroke width 1.5–1.75; `currentColor`; `aria-hidden="true"` when decorative.
- Default colour `#64748B`; interactive hover `#0F172A`; inside dark buttons `#FFFFFF`.
- Do not mix filled and outline icons, except the WhatsApp brand glyph where required.
- No emoji as interface icons (no 📍, 📞, ✅, ⚡ in UI).
- Icons must not be the only label for an action; pair with text where meaning is not universal.

### 3.7 Motion

- Duration: 150–200ms for hover/focus; 250ms for modal/drawer.
- Easing: `ease-out`.
- Respect `prefers-reduced-motion: reduce`; disable transforms and non-essential animation.
- No parallax, auto-playing carousels, pulsing “live” dots, or countdown timers.

### 3.8 Accessibility (WCAG 2.2 AA)

- Semantic landmarks: `header`, `nav`, `main`, `footer`.
- One `h1` per page; logical heading order.
- Skip-to-content link.
- Visible focus ring: 2px solid `#0F172A`, 2px offset.
- Contrast: 4.5:1 normal text; 3:1 large text and UI boundaries.
- Touch targets: at least 44×44px.
- Forms: visible labels, `autocomplete`, `inputmode`, inline errors, error summary, `aria-describedby`.
- Calculator results: `aria-live="polite"`; announce only after user input, not on every keystroke (debounce).
- Modal: `role="dialog"`, `aria-modal="true"`, labelled title, focus trap, ESC, restore focus.
- Images: meaningful `alt`; decorative `alt=""`.
- Video/audio: captions and transcript if used.
- Tables: `<caption>` where helpful, `scope` on headers.
- No keyboard traps; no hover-only content.
- Test with keyboard, screen reader (NVDA/VoiceOver spot check), 200% zoom, and mobile.

### 3.9 Responsive breakpoints

| Name | Width | Layout behaviour |
|---|---|---|
| Mobile | `< 640px` | Single column, drawer nav, stacked cards, 16px padding |
| Small tablet | `640–767px` | 2-column cards where content allows |
| Tablet | `768–1023px` | 2-column grids, visible utility bar optional |
| Desktop | `1024–1279px` | Full navigation, 3-column course grids |
| Wide | `≥ 1280px` | 1200–1280px container, 4-column faculty/testimonial grids |

Test at 320px, 375px, 390px, 768px, 1024px, 1280px, 1440px.

### 3.10 Content style

- British spelling for consistency (`programme`, `organisation`, `specialised`) except in official names and quoted material.
- Short sentences; concrete nouns; no hype.
- Explain acronyms on first use: Federal Board of Revenue (FBR), Securities and Exchange Commission of Pakistan (SECP).
- Use “tax year” explicitly, e.g. “Tax Year 2025-26”.
- Do not say “guaranteed”, “100%”, “best”, or “official” unless contractually true.
- Calculators: “estimate”, not “final liability”.
- Legal content: “general information, not advice”.

### 3.11 Imagery

- Real campus and faculty photography only, with consent.
- Faculty portraits: consistent aspect ratio 4:5, neutral background, face centred, no heavy filters.
- Logo: maintain clear space; do not place on busy backgrounds.
- Images: AVIF/WebP, explicit width/height, `loading="lazy"` below the fold, `fetchpriority="high"` for the hero image if used.
- Missing faculty image: neutral placeholder with “GICT Faculty” label, never the institute logo as a fake portrait.

---

## 4. GLOBAL SHELL AND PAGE SPECIFICATIONS

### 4.1 Global header

**Utility bar (desktop only, optional on tablet)**

- Address (short): “Office-11, Alfalah Askaria Plaza, Committee Chowk, Rawalpindi”
- Hours: “Mon–Fri 9:00–18:00 · Sat 10:00–16:00”
- Phone: `0339-0006853`
- Email: `admissions@gict.edu.pk`
- WhatsApp: `0339-0006853`
- Icons monochrome, 16px.

**Main navigation**

- White, sticky, 80px height, bottom border.
- Logo 44px + wordmark.
- Active item: 2px bottom border in navy; not colour alone.
- Dropdowns: white panel, 1px border, subtle shadow, keyboard accessible, close on Escape and outside click.
- CTA: navy “Apply for admission”.
- Mobile: hamburger with accessible label; drawer white; contact block; CTA.

**Footer**

- Light grey background, top border.
- Columns: brand/contact; programmes; calculators; campus hours; corporate training.
- Legal row: privacy, terms, refund, disclaimer, accessibility.
- Copyright with current year.
- No newsletter signup unless a real double opt-in system exists.

**Floating WhatsApp**

- 48px circle, navy background with white glyph (or official green only if brand guidelines require it; do not mix with the monochrome icon system elsewhere).
- Accessible label and tooltip on hover/focus.
- No pulsing animation.
- Hidden when the admission modal is open.

### 4.2 Admission modal

**Purpose:** capture a qualified admission enquiry without leaving the page.

**Fields**

1. Full name (required)
2. WhatsApp number (required, international format, default `+92`)
3. Email (required)
4. Programme (required; preselected from course CTA)
5. Learning mode (physical / live online)
6. Preferred schedule (weekend morning / weekend afternoon; weekday evening only if actually offered)
7. Current background (optional)
8. Message (optional)
9. Consent checkbox (required): “I agree to be contacted about my enquiry. See Privacy Policy.”
10. Hidden: page URL, UTM parameters, timestamp, honeypot.

**Behaviour**

- Two-step maximum; step 1 programme + mode; step 2 contact details.
- Client + server validation; inline errors; error summary on submit.
- Submit button shows loading state; disabled while submitting.
- Success: close modal, redirect to `/thank-you?type=admission` or show an in-modal success panel with a link.
- Failure: preserve data, show retry and a WhatsApp fallback.
- No automatic WhatsApp popup on submit; provide a “Continue on WhatsApp” button after success.
- No promise of a response time unless staffed; use “We usually respond within one working day.”
- Do not pre-check marketing consent.

**Acceptance criteria**

- Keyboard-only completion works.
- ESC closes; focus returns to the trigger.
- Form cannot be submitted twice.
- No PII in the URL or analytics.
- Server rejects missing consent.
- Spam protection does not block real users.

### 4.3 Home page (`/`)

**SEO title:** `GICT | Taxation & Corporate Training in Rawalpindi`  
**Meta description:** `Practitioner-led taxation, FBR IRIS, sales tax, SECP compliance and litigation training in Rawalpindi. Weekend on-campus and live online cohorts.`  
**H1:** `Practical training in Pakistani taxation, FBR IRIS and corporate law.`

**Sections**

1. **Hero.** Overline, H1, 2–3 sentence subhead, primary CTA, secondary calculator link. Right side: “Next cohort” facts card (programme, start date, format, duration, seats) — only if dates are real. No duplicate lead form here.
2. **Verified affiliations strip.** Only real affiliations, with permission. Otherwise omit.
3. **Programme grid.** All published programmes; category, duration, format, status, next start (if known), key outcomes, “View syllabus”, “Apply”.
4. **Why GICT.** Four pillars: live portal work, litigation depth, weekend schedule, alumni support. Each with a monochrome icon and factual copy.
5. **Faculty spotlight.** Four published profiles; link to directory.
6. **Calculator feature.** One working calculator preview or a static result panel; link to hub. Explain the tax year and disclaimer.
7. **Campus and hybrid delivery.** Address, metro access, facilities, map link, photo (real).
8. **Testimonials.** Only consented quotes; name, role, programme. No star ratings unless verified.
9. **FAQ.** 5–7 real questions, visible answers, `FAQPage` schema.
10. **Closing CTA.** Apply or contact; phone, WhatsApp, email.
11. **Footer.**

**Do not include:** fake urgency, animated counters, “1,200+ alumni” without evidence, multiple competing forms, or a hero image that pushes content below the fold on mobile.

### 4.4 Course catalogue (`/courses`)

**Purpose:** help a visitor choose the right programme.

**Sections**

- Breadcrumb.
- H1: “Taxation, corporate law and finance programmes.”
- Intro (2–3 sentences).
- Filter tabs: All / Taxation & regulatory / Finance & technology. Client-side, accessible, reflects URL hash or query if shareable.
- Comparison table (desktop): programme, duration, format, level, next start, status, primary outcome.
- Programme cards (mobile-first): category, title, summary, duration, format, status, start date, CTA.
- “Not sure which programme?” contact block.
- FAQ: level, prerequisites, certificate, online option, fees.
- CTA.

**Card rules**

- Status comes from content, not hardcoded: “Admissions open”, “Waiting list”, “Coming soon”, “Closed”.
- If a start date is not confirmed, omit it; do not write “starting soon”.
- “Apply” opens the modal with the programme preselected.
- Entire card must not be a link if it contains a button; use a heading link plus separate actions.

### 4.5 Course detail (`/courses/[slug]`)

**SEO title pattern:** `{Course title} ({Duration}) | GICT Rawalpindi`  
**Meta description:** unique, 140–160 characters, includes format and audience.  
**H1:** course title.

**Sections**

1. Breadcrumb.
2. Header: category, status, duration, format, next start (if confirmed), H1, summary, instructors.
3. Enrolment card (desktop sticky): next step, CTA, WhatsApp, phone, fee status (“Fee schedule on request” until public), refund policy link.
4. Overview: who it is for, problem solved, outcome.
5. Learning outcomes (6–8 measurable outcomes).
6. Curriculum: week-by-week accordion with topics, contact hours, practical work.
7. Assessment and certificate: attendance, assignments, capstone, certificate criteria.
8. Faculty: names, designations, links to profiles.
9. Schedule and location: campus, online, timings, time zone, recordings policy.
10. Fees and payment: public fee or “request fee schedule”; instalments; refund policy; no hidden charges.
11. Prerequisites and audience.
12. FAQ.
13. Related programmes and calculators.
14. CTA.

**Course schema:** `Course` with `name`, `description`, `provider`, `courseCode`, `hasCourseInstance` (`courseMode`, `courseWorkload`, `startDate` only if real). Add `offers` only if price is public.

**Acceptance criteria**

- A visitor can answer: what will I learn, who teaches it, how long, where, how much, when, and how to apply — without contacting anyone.
- Mobile sticky CTA does not cover form fields or footer.
- Curriculum headings are links/anchors where a table of contents exists.

### 4.6 Faculty directory and profiles

**`/faculty`**

- H1: “Faculty and mentors.”
- Intro: practitioner-led teaching, verification policy.
- Cards: photo, name, designation, specialisations, programmes taught, link.
- Filter by discipline (tax, law, finance, procurement) only if enough profiles.
- Note: “Profiles are published with consent. Credentials are verified before publication.”

**`/faculty/[slug]`**

- Breadcrumb.
- Photo, name, designation, affiliations.
- Biography (120–200 words), areas of practice, qualifications, programmes, publications/speaking (optional).
- “Reviewed on” date.
- CTA: programme taught.
- `Person` schema with `jobTitle`, `worksFor`, `alumniOf`, `knowsAbout`; no invented awards.

**Data requirements**

- Written consent for photo and bio.
- Verification source for each credential (bar council number, membership, degree, certification).
- Contact details are not published unless the faculty member agrees.

### 4.7 About (`/about`)

**Sections**

- H1 and mission (factual).
- The GICT method: 70/30 practical-to-theory only if true and enforceable; otherwise describe actual split.
- Campus and facilities (real photos).
- Quality assurance: faculty review, content review, feedback, certificate criteria.
- Governance: only real people and roles. Do not invent an advisory board.
- Community/alumni: only verifiable facts.
- CTA.

### 4.8 Calculator hub (`/calculators`)

**Purpose:** a fast, trustworthy reference tool that also earns search traffic.

**Sections**

- Breadcrumb.
- H1: “Pakistan tax and corporate calculators.”
- Intro: free, estimate-only, last verified date, tax year selector if multiple years are supported.
- Search (client-side, by name, section, keyword).
- Category filters (six).
- Result count and active filter chips.
- Cards: title, category, law reference, one-line description, input count, last verified, “Open tool”.
- “Recently updated” or “Popular” only if data supports it.
- Disclaimer callout.
- CTA to relevant courses.

**Rules**

- Only published and reviewed calculators appear.
- If a calculator’s review is overdue, show “Rates under review” and disable calculation, or show a prominent warning.
- Do not label a tool “official” or “FBR-approved”.
- Count text is dynamic: `{publishedCount} calculators`, not hardcoded “25” unless the number is true.

### 4.9 Calculator detail (`/calculators/[slug]`)

**Header:** category, law reference, tax year, last verified, H1, short description.

**Body**

1. Calculator panel (inputs left/top, results right/bottom).
2. Result: primary amount, breakdown table, effective rate, assumptions, “Copy summary” and “Print”.
3. “How this is calculated”: formula, slab/threshold table, worked example, source links.
4. “Important notes”: exclusions, edge cases, rounding.
5. Disclaimer: estimate only, not tax/legal advice, verify with FBR/professional.
6. Related calculators.
7. Relevant course CTA.
8. FAQ (3–5 questions) with schema only if visible.

**Interaction**

- Validate on blur and on submit; do not show errors while the user is still typing the first character.
- Results update on input with a 150–250ms debounce; announce via `aria-live="polite"`.
- “Reset” restores documented defaults.
- Print stylesheet hides navigation and shows inputs, assumptions, and results.
- No data leaves the browser; state this near the form.
- Optional shareable URL uses only non-PII values; validate on load.

### 4.10 Knowledge Hub (`/knowledge-hub`)

**Index**

- H1, intro, category filters, featured article (only if genuinely featured), list with title, summary, author, reviewed date, reading time.
- Pagination or “Load more” with accessible status.
- No fake “latest” ordering; use published date.
- CTA: calculator or course.

**Article**

- Breadcrumb, category, title, author, published date, reviewed date, reading time.
- Summary/key takeaways.
- Table of contents for long articles.
- Body with headings, tables, callouts, and source links.
- “Sources” section with official links and access dates.
- Author bio and credentials.
- Disclaimer: general information, not advice; laws change.
- Related articles and course CTA.
- `Article` schema with `author`, `datePublished`, `dateModified`, `reviewedBy` where applicable.

**Editorial rules**

- Every article has a named author and a reviewer for legal/tax content.
- Cite primary sources: Finance Act, Ordinance, FBR SRO/circular, SECP regulation, court judgment.
- Add “Last reviewed” and a correction policy.
- Do not publish AI-generated legal analysis without expert review.

### 4.11 Corporate training (`/corporate-training`)

**Sections**

- H1: “Corporate tax and compliance training for teams.”
- Who it is for: finance, tax, legal, procurement, audit teams.
- Needs assessment: skill gap, jurisdictions, systems, timeline.
- Formats: on-site, live online, blended; half-day, full-day, multi-week.
- Curriculum examples (not fixed products): corporate tax, sales tax, withholding, SECP, litigation awareness, procurement.
- Trainers: links to faculty.
- Deliverables: workbook, case studies, assessment, certificate, follow-up.
- Commercial process: proposal, scope, dates, fees, cancellation.
- Proposal form: company, contact, role, team size, topics, format, city, timeline, budget range (optional), consent.
- Procurement information: legal entity, NTN, bank details only on request, standard terms.
- CTA.

**Do not publish client logos or case studies without written permission.**

### 4.12 Contact (`/contact`)

**Sections**

- H1 and intro.
- Address, landmark, map, directions.
- Phone, WhatsApp, email (admissions and general).
- Hours and live open/closed indicator based on Pakistan Standard Time, not the visitor’s local time.
- Contact form (name, email, phone, topic, message, consent).
- Response expectation.
- Privacy note.
- Campus visit booking only if a real calendar/booking system exists.

**Map**

- Embed only after consent if the provider sets cookies; otherwise use a static map image with a “View on Google Maps” link.
- Provide a text address and directions for users who cannot load the map.

### 4.13 Legal pages

Required templates:

- **Privacy Policy:** data collected, purpose, lawful basis/consent, retention, third parties (hosting, email, CRM, analytics), international transfers, security, rights, children, changes, contact.
- **Terms of Use:** acceptance, permitted use, IP, user submissions, third-party links, no warranty, limitation of liability, governing law, changes.
- **Refund and Cancellation Policy:** actual GICT policy; do not invent. Include batch transfer, cancellation by GICT, no-show, force majeure.
- **Disclaimer:** calculators and articles are estimates/general information, not tax, legal, or financial advice; no adviser-client relationship; verify with FBR/professional.
- **Accessibility Statement:** conformance target, known limitations, feedback contact, review date.

### 4.14 Thank-you and 404

**Thank-you**

- `noindex, nofollow`.
- Confirm what was submitted (without repeating sensitive data).
- Next steps and expected response time.
- “Continue on WhatsApp” button (user-initiated).
- Link to calculators or knowledge hub.
- No fake “application approved” language.

**404**

- Clear message, search or useful links, contact.
- No redirect to home without explanation.

---

## 5. COURSE CATALOGUE SPECIFICATION

### 5.1 Catalogue rules

- Every course has: slug, title, category, duration, format, status, next start (optional), fee status, audience, prerequisites, outcomes, modules, assessment, certificate, faculty, FAQs.
- Status values: `admissions-open`, `waiting-list`, `coming-soon`, `closed`.
- Do not publish a course without at least one named instructor and an approved curriculum.
- Batch dates must be updated or removed when passed; never show stale dates.

### 5.2 Programme summary

| Programme | Duration | Category | Status (example) | Primary audience |
|---|---|---|---|---|
| Tax Filing & IRIS Compliance | 8 weeks | Taxation | Admissions open | Tax consultants, accountants, graduates |
| Corporate Taxation & Advisory | 10 weeks | Taxation | Admissions open | Corporate finance, tax advisers |
| Sales Tax & Provincial VAT | 6 weeks | Taxation | Admissions open | Accountants, compliance teams |
| Advanced Income Tax Litigation | 8 weeks | Law | Admissions open | Lawyers, tax practitioners |
| Corporate Finance & Financial Modeling | 10 weeks | Finance | Coming soon | Finance managers, analysts |
| Computerized Accounting & QuickBooks | 8 weeks | Technology | Coming soon | Accountants, bookkeepers, students |

### 5.3 Curriculum outlines

#### Tax Filing & IRIS Compliance

1. Statutory framework, NTN registration, biometric verification.
2. Resident/non-resident rules, source of income.
3. Salary income, allowances, exemptions, tax credits.
4. Business income, admissible/inadmissible expenses, depreciation.
5. Property income, capital gains basics.
6. Foreign income, foreign assets, double taxation relief.
7. Wealth statement reconciliation (Section 116).
8. Withholding monitoring and filing.
9. Capstone: end-to-end mock filing and assessment response.

**Assessment:** weekly exercises, one capstone filing, attendance requirement.  
**Certificate:** completion based on capstone and attendance; state exact criteria.

#### Corporate Taxation & Advisory

1. Entity classification and corporate tax framework.
2. Accounting profit vs taxable profit.
3. Minimum tax (Section 113), ACT (113C), super tax (4C).
4. Advance tax (147), withholding (149–153).
5. Depreciation, tax audits, deferred tax basics.
6. Withholding statements and notices.
7. SECP annual compliance overview.
8. Corporate tax strategy capstone.

#### Sales Tax & Provincial VAT

1. Federal Sales Tax Act 1990 fundamentals.
2. Registration, invoicing, record-keeping.
3. Input tax, apportionment, inadmissible input.
4. PRA, SRB, KPRA, BRA frameworks.
5. Cross-provincial services and jurisdiction.
6. Monthly returns and e-filing.
7. Sales tax withholding (11th Schedule).
8. Capstone: multi-province compliance scenario.

#### Advanced Income Tax Litigation

1. Assessment framework: 121, 122.
2. Show-cause notices and replies.
3. Appeals to CIR (Appeals) under 127.
4. Stay of demand and recovery.
5. ATIR procedure and evidence.
6. Reference applications under 133.
7. ADR under 134A and FTO complaints.
8. Drafting workshop and mock hearing.

#### Corporate Finance & Financial Modeling

1. Financial statement analysis.
2. Three-statement modelling.
3. DCF, WACC, sensitivity.
4. Working capital and cash forecasting.
5. Capital budgeting (NPV/IRR).
6. Boardroom communication.

#### Computerized Accounting & QuickBooks

1. Chart of accounts for Pakistani businesses.
2. Company setup and master data.
3. Sales tax–aware invoicing.
4. Bank reconciliation and cash controls.
5. Payroll and withholding.
6. Financial reports and management packs.

**Content owner:** Academic lead. **Reviewer:** relevant faculty. **Review cadence:** before each batch and after any law change.

---

## 6. FACULTY CONTENT MODEL

### 6.1 Required fields

| Field | Required | Notes |
|---|---|---|
| Name | Yes | As it should appear publicly |
| Prefix | Yes | Adv., Mr, Ms, Dr, etc. |
| Designation | Yes | Current role, verified |
| Affiliations | Yes | Verified memberships; no honorary claims without evidence |
| Qualifications | Yes | Highest relevant; verification source |
| Specialisations | Yes | 3–6 areas |
| Biography | Yes | 120–200 words; factual |
| Programmes taught | Yes | Links to courses |
| Photo | Yes | Consent + licence; 4:5; minimum 800×1000 |
| Experience years | Only if verified | Otherwise omit |
| Contact | Optional | Only with consent |
| Reviewed date | Yes | Content owner |

### 6.2 Verification and consent

- Signed media/content consent for photo, bio, and publication.
- Credential verification record stored internally (not published).
- Right to withdraw; removal within 5 working days.
- No use of the institute logo as a faculty photo placeholder.
- For missing photos, use a neutral placeholder with initials or “GICT Faculty”.

---

## 7. CALCULATOR PROGRAMME

### 7.1 Why calculators matter

Calculators are the main organic-acquisition asset and a practical demonstration of GICT’s expertise. They must be:

- **Correct** for the stated tax year and assumptions.
- **Transparent** about formulas, sources, and exclusions.
- **Fast** (client-side, no server round trip).
- **Accessible** and usable on a low-end phone.
- **Maintainable** through a versioned rules registry, not copy-pasted rates.

### 7.2 Shared calculator UX

1. Header: category, law reference, tax year, last verified.
2. Inputs: label, unit (PKR, %, months), help text, validation, example value.
3. Results: primary amount, breakdown, effective/marginal rate, assumptions.
4. Actions: reset, copy summary, print.
5. Explanation: formula, slab table, worked example, sources.
6. Disclaimer: estimate only; not advice; verify with FBR/professional.
7. Related tools and course CTA.
8. FAQ (optional).

**No personal data** is sent to the server. State this explicitly.

### 7.3 Tax-rules registry

Rates must never be hardcoded in components or copied into articles. Each supported tax year has a JSON file validated by Zod:

```ts
import { z } from 'zod';

export const taxRuleSetSchema = z.object({
  taxYear: z.string().regex(/^\d{4}-\d{2}$/),        // e.g. "2025-26"
  financeAct: z.string(),                             // e.g. "Finance Act 2025"
  effectiveFrom: z.string(),                          // ISO date
  effectiveTo: z.string().optional(),
  status: z.enum(['draft', 'review', 'published', 'deprecated']),
  verifiedAt: z.string(),                             // ISO datetime
  verifiedBy: z.string(),
  sources: z.array(z.object({
    label: z.string(),
    url: z.string().url(),
    accessed: z.string()
  })).min(1),
  parameters: z.record(z.union([z.number(), z.string(), z.boolean()])),
  notes: z.string().optional()
});

export type TaxRuleSet = z.infer<typeof taxRuleSetSchema>;
```

**Publication rule:** a calculator can use a rule set only when `status === 'published'`, `verifiedAt` is within the review window, and at least one official source is present. If the review is overdue, show a warning and disable calculation.

**Change control:** every rate change is a pull request containing the source, effective date, reviewer, updated fixtures, and changelog entry. Two-person review: one technical, one tax.

### 7.4 Calculation standards

- Money: integer paisa internally; display rounded to the nearest rupee.
- Percentages: basis points or decimals, not formatted strings.
- Rounding: half-up at the final tax amount unless the law specifies otherwise; document it.
- Dates: ISO `YYYY-MM-DD`; use Asia/Karachi for “today” where relevant.
- Negative inputs: reject with a clear message; do not silently clamp.
- Zero: allow and explain.
- Very large numbers: cap at a documented maximum (e.g. PKR 1 trillion) to prevent precision/UI issues.
- Currency: PKR only in v1; label every amount.
- Tax year: always visible; never mix years in one calculation.
- Assumptions: display them next to the result, not only in a tooltip.

### 7.5 Calculator specifications

Below, “rules” means values from the tax-rules registry. Rates are intentionally not hardcoded in this document.

#### 1. Salary Income Tax Calculator

- **Inputs:** tax year, monthly or annual gross salary, taxable allowances, exemptions, tax credits, surcharge applicability.
- **Outputs:** taxable salary, annual tax, monthly withholding, net take-home, effective rate, marginal rate, slab breakdown.
- **Logic:** convert to annual; subtract exemptions/credits per rules; apply progressive slabs; add surcharge where applicable; divide by 12 for withholding; round at the end.
- **Edge cases:** zero/negative salary; annual vs monthly toggle; credits exceed tax; salary is not the only income; non-resident (out of scope, link to note); surcharge threshold.
- **Fixtures (illustrative 2024-25 example only — verify before use):** annual 1,800,000 → tax 120,000; monthly 150,000 → withholding 10,000; annual 3,600,000 → tax 530,000; monthly tax 44,167.
- **Boundaries:** 600,000; 1,200,000; 2,200,000; 3,200,000; 4,100,000.

#### 2. Business Individual & AOP Income Tax Calculator

- **Inputs:** revenue, admissible expenses, depreciation, other income, entity type (individual/AOP), salary share.
- **Outputs:** taxable income, tax, effective rate, quarterly advance tax estimate.
- **Logic:** net income = revenue − expenses − depreciation + other income; apply non-salaried slabs; apply the 75% salary rule for individuals where applicable; compare minimum tax.
- **Edge cases:** loss; AOP profit share; salary >75% of income; exempt income; minimum tax interaction.

#### 3. Rental Income Tax Calculator

- **Inputs:** gross rent, property type, entity, local taxes, insurance, collection charges, repairs, loan interest (if deductible), vacant periods.
- **Outputs:** net chargeable rent, tax, effective rate.
- **Logic:** apply Section 15/15A rules; repairs allowance cap; deductions; company vs individual rates; surcharge.
- **Edge cases:** advance rent; rent-free period; joint ownership; company property; minimum tax.

#### 4. Gratuity & Golden Handshake Calculator

- **Inputs:** amount received, approved/unapproved fund, years of service, last salary, average tax rate of preceding three years.
- **Outputs:** exempt amount, taxable amount, tax under current-year vs spread-over-three-years treatment, recommended option.
- **Logic:** Sixth Schedule exemption limits; approved fund conditions; spread under Section 12(6); marginal relief.
- **Edge cases:** death/disability; less than three years of records; unapproved fund; amount above exemption; multiple employers.

#### 5. Bonus & Salary Arrears Marginal Relief Calculator

- **Inputs:** normal salary, arrears/bonus, years to which arrears relate, historical tax rates, current-year income.
- **Outputs:** tax with relief, tax without relief, saving, year-by-year breakdown.
- **Logic:** Section 12(9); recompute tax as if arrears were received in the relevant years; compare with current-year aggregate.
- **Edge cases:** missing historical records; multiple employers; refunds; rates changed between years; no relief available.

#### 6. Capital Gains Tax on Immovable Property

- **Inputs:** acquisition/disposal dates, cost, sale consideration, allowable expenses, property type, ATL status, FBR/DC value, advance tax already paid.
- **Outputs:** holding period, gain, CGT, 236C/236K credit, net payable/refund.
- **Logic:** holding-period tiers from rules; cost basis; 236C seller and 236K buyer advance tax; ATL/non-ATL; adjustable vs final treatment.
- **Edge cases:** inherited/gifted property; joint owners; foreign property; loss; construction cost; provincial stamp duty; law changes by date.
- **Risk:** high-change area; legal review required every Finance Act.

#### 7. CGT on Securities & Mutual Funds

- **Inputs:** acquisition/disposal dates, cost, sale value, asset category, ATL status, expenses.
- **Outputs:** gain/loss, tax, net proceeds, effective rate.
- **Logic:** Section 37A holding periods; rate table; ATL; loss set-off/carry-forward per rules.
- **Edge cases:** bonus/right shares; mutual funds; debt instruments; foreign securities; corporate actions.

#### 8. Advance Tax on Property Purchase/Sale (236K/236C)

- **Inputs:** transaction value, FBR valuation, DC value, buyer/seller ATL status, property type, transfer date.
- **Outputs:** 236K buyer tax, 236C seller tax, total advance tax, effective rate.
- **Logic:** use the higher of FBR/DC value; rate table by status; exemptions only where legally verified.
- **Edge cases:** joint buyers; exempt transfers (inheritance/gift) subject to legal review; instalments; late filer; refund/adjustment.

#### 9. Motor Vehicle Registration & Transfer (231B)

- **Inputs:** engine capacity, vehicle type (ICE/hybrid/EV), new registration vs transfer, ATL status, invoice/value.
- **Outputs:** advance tax, total payable.
- **Logic:** slab table by engine capacity and vehicle type; ATL/non-ATL.
- **Edge cases:** imported/auctioned vehicles; gifted vehicles; old vehicle transfer; EV/hybrid concessions; provincial registration fees (excluded).

#### 10. Federal Sales Tax on Goods

- **Inputs:** taxable value, rate, output tax, eligible input tax, POS/retailer status, exempt/zero-rated proportion.
- **Outputs:** output tax, input tax credit, net payable/refund, invoice total.
- **Logic:** standard/reduced rate; input tax limitation (e.g. 90% rule where applicable); apportionment; zero-rated/exempt.
- **Edge cases:** unregistered supplier; debit/credit notes; further tax; POS; refunds; provincial sales tax on services is separate.

#### 11. Provincial Services Sales Tax Comparator

- **Inputs:** service value, province, service category, registration status, withholding.
- **Outputs:** tax per province, invoice total, comparison table, notes on jurisdiction.
- **Logic:** rate matrix by province and sector; minimum tax where applicable; withholding rules.
- **Edge cases:** cross-border services; ICT; reduced/exempt services; place of consumption; double taxation; input tax credit availability.

#### 12. Sales Tax Withholding (11th Schedule)

- **Inputs:** supplier registered status, value excluding sales tax, category, withholding agent type.
- **Outputs:** withholding amount, net payment, voucher details.
- **Logic:** 11th Schedule rate matrix; whole tax vs part; ATL.
- **Edge cases:** exempt/zero-rated supplies; government vs corporate agents; partial payments; credit notes.

#### 13. Corporate Income Tax & Super Tax

- **Inputs:** taxable profit, company type, turnover, tax year, credits, super tax applicability.
- **Outputs:** base tax, super tax, total tax, effective rate, marginal impact.
- **Logic:** corporate rate by company type; super tax slabs; credits; compare minimum tax.
- **Edge cases:** loss; small company; public company; super tax thresholds; prior-year credits; group relief (out of scope).

#### 14. Minimum Tax on Turnover (Section 113)

- **Inputs:** turnover, industry/sector, tax already paid, carry-forward balance.
- **Outputs:** minimum tax, shortfall, carry-forward, comparison with normal tax.
- **Logic:** sector rate from rules; compare with normal tax; carry-forward period.
- **Edge cases:** loss; exempt income; zero-rated; turnover below threshold; group companies; specified sectors.

#### 15. Alternate Corporate Tax (113C)

- **Inputs:** accounting profit, tax adjustments, exempt income, tax already paid.
- **Outputs:** ACT, normal tax comparison, payable/(refundable), carry-forward.
- **Logic:** ACT rate from rules; compare; carry-forward.
- **Edge cases:** loss; exempt income; minimum tax interaction; transition rules.

#### 16. Withholding Tax on Goods, Services & Contracts (153)

- **Inputs:** payment type, payee type (company/individual/AOP), amount, ATL, contract vs supply, threshold.
- **Outputs:** withholding rate, tax withheld, net payment, regime (minimum/final).
- **Logic:** rate matrix; ATL; thresholds; service vs goods vs contract.
- **Edge cases:** advertising, transport, brokerage, exports, treaty relief, partial payments.

#### 17. Dividend Withholding Tax (150)

- **Inputs:** gross dividend, recipient type, source type, ATL.
- **Outputs:** rate, tax withheld, net dividend.
- **Logic:** rate matrix; ATL; special regimes (IPP/free zone) only if verified.
- **Edge cases:** inter-corporate dividends; mutual funds; REIT; foreign shareholders; withholding agent obligations.

#### 18. Profit on Debt / Bank Interest (151)

- **Inputs:** gross profit, instrument type, recipient type, ATL.
- **Outputs:** tax withheld, net profit, final vs adjustable note.
- **Logic:** rate table; ATL; instrument-specific rules.
- **Edge cases:** NSC; bank deposits; bonds; foreign currency accounts; sukuk; corporate recipients.

#### 19. Foreign Remittance / Card Transaction Advance Tax (236Y)

- **Inputs:** amount, transaction type (debit/credit card, foreign remittance), ATL, purpose.
- **Outputs:** advance tax, net amount.
- **Logic:** rate table; thresholds; ATL; exemptions only if legally verified.
- **Edge cases:** education/medical; business vs personal; foreign currency; bank fees; cross-border e-commerce.

#### 20. Electricity Bill Advance Tax (235)

- **Inputs:** bill amount, meter category, ATL, billing month.
- **Outputs:** advance tax, total payable.
- **Logic:** slab table by category; ATL; adjustable note.
- **Edge cases:** domestic/agricultural; prepaid; exempt entities; multiple meters; arrears.

#### 21. SECP Company Incorporation Fee

- **Inputs:** authorised capital, company type, online/physical mode, name reservation.
- **Outputs:** registration fee, name fee, total estimate.
- **Logic:** Seventh Schedule (Companies Act 2017); mode; company type.
- **Edge cases:** SMC; public unlisted; foreign company; authorised capital changes; professional fees excluded.

#### 22. SECP Annual Filing Penalty

- **Inputs:** form type, due date, filing date, company type.
- **Outputs:** days late, additional fee/penalty, total.
- **Logic:** SECP adjudication regulations; per-day/month caps.
- **Edge cases:** weekends/holidays; extension; condonation; multiple forms; late filing of different forms.

#### 23. FBR Late Filing Penalty & Default Surcharge

- **Inputs:** tax payable, due date, filing date, KIBOR, payment date.
- **Outputs:** Section 182 penalty, Section 205 surcharge, total.
- **Logic:** per-day penalty with statutory min/max; daily surcharge at KIBOR + spread; part payments.
- **Edge cases:** nil return; waiver; holidays; short payment; multiple tax years.

#### 24. Corporate Loan Amortization & DSCR

- **Inputs:** principal, annual rate, tenor, frequency, grace period, EBITDA, existing debt service.
- **Outputs:** instalment, amortisation schedule, total interest, DSCR, covenant flag.
- **Logic:** standard amortisation formula; DSCR = EBITDA / total debt service; configurable covenant threshold.
- **Edge cases:** balloon payment; variable rate; prepayment; interest-only period; negative EBITDA.

#### 25. Capital Budgeting: NPV & IRR

- **Inputs:** initial outlay, yearly cash flows, discount rate, project life.
- **Outputs:** NPV, IRR, payback period, profitability index, accept/reject.
- **Logic:** discounted cash flow; IRR via robust root finding (bisection/Newton with fallback); payback; PI.
- **Edge cases:** multiple sign changes (multiple IRRs); no real IRR; zero discount rate; negative cash flows; non-conventional projects.

### 7.6 Calculator testing

For every calculator:

- Unit tests for boundaries, zero, negative, maximum, and rounding.
- At least two independent fixtures with expected results.
- Monotonicity/property tests where applicable (e.g. tax should not decrease as income increases within a continuous regime).
- UI tests: keyboard, validation, reset, print, mobile.
- Legal/tax review sign-off recorded in the calculator metadata.

---

## 8. TECHNICAL ARCHITECTURE

### 8.1 Stack decision

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Astro 5** | Content-first, static HTML, excellent SEO, minimal JS |
| Styling | **Tailwind CSS 4** + design tokens | Fast, consistent, small CSS |
| Language | **TypeScript (strict)** | Type safety for calculators and content |
| Interactive islands | **Preact** | ~4KB, sufficient for calculators/forms; no global SPA |
| Content | **Astro Content Collections + MDX** | Typed content, Git-based workflow |
| Editor UX | **Keystatic** (Git-based) | Non-technical editing without a database |
| Hosting | **Cloudflare Pages + Workers** | Edge performance in Pakistan, WAF, simple deploys |
| Forms API | **Cloudflare Worker** `/api/leads` | Server-side validation, spam protection, CRM integration |
| Email | **Resend** | Transactional email, simple API |
| CRM | _Decision required_ (HubSpot/Zoho/Pipedrive/Sheets) | Pipeline and follow-up |
| Analytics | **Plausible** (cookieless) or GA4 + Consent Mode | Privacy-friendly measurement |
| Error tracking | **Sentry** (optional) | Client/server errors |
| Uptime | **Better Stack** or Cloudflare notifications | Availability alerts |
| Search | **Fuse.js** (calculators) / **Pagefind** (site, phase 2) | No backend search needed |

**Why not Next.js?** The site is content-heavy and mostly static; Astro delivers better default performance with less JavaScript. If GICT later needs authenticated portals, payments, or a full LMS, add a separate application rather than converting the marketing site into a SPA.

### 8.2 Repository structure

```
gict/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── images/
│   ├── documents/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/            # Button, Input, Card, Badge, Modal, Accordion…
│   │   ├── layout/        # Header, Footer, Container, Section, SkipLink
│   │   ├── calculators/   # CalculatorShell, ResultPanel, fields
│   │   ├── forms/         # LeadForm, AdmissionForm, ContactForm, CorporateForm
│   │   └── seo/           # Seo.astro, JsonLd.astro
│   ├── content/
│   │   ├── courses/
│   │   ├── faculty/
│   │   ├── calculators/
│   │   ├── articles/
│   │   └── legal/
│   ├── layouts/
│   ├── lib/
│   │   ├── calculators/   # pure compute functions
│   │   ├── tax-rules/     # versioned JSON + Zod schemas
│   │   ├── forms/         # shared validation and submit helpers
│   │   ├── seo/
│   │   └── utils/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── faculty/index.astro
│   │   ├── faculty/[slug].astro
│   │   ├── courses/index.astro
│   │   ├── courses/[slug].astro
│   │   ├── calculators/index.astro
│   │   ├── calculators/[slug].astro
│   │   ├── knowledge-hub/index.astro
│   │   ├── knowledge-hub/[slug].astro
│   │   ├── corporate-training.astro
│   │   ├── contact.astro
│   │   ├── thank-you.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── refund-policy.astro
│   │   ├── disclaimer.astro
│   │   ├── accessibility.astro
│   │   ├── 404.astro
│   │   └── api/leads.ts
│   ├── styles/global.css
│   └── content.config.ts
└── tests/
    ├── unit/
    ├── e2e/
    └── fixtures/
```

### 8.3 Rendering strategy

- All marketing/content pages: prerendered static HTML.
- Calculator pages: static shell + one Preact island per calculator (or shared registry-driven island).
- Forms: static HTML with progressive enhancement; POST to `/api/leads`; works without JS only if a mailto fallback is acceptable (otherwise document JS requirement).
- API route: dynamic Worker; no database required for MVP, but CRM/email must be durable.
- Images: static assets, optimised at build time; no runtime image service required.
- 404 and thank-you: static.

### 8.4 Content model

Use Astro Content Collections with Zod schemas. Minimum fields:

**Course**

```ts
{
  slug, title, category, duration, format, status,
  startDate?, feeStatus, summary, outcomes[], audience[],
  prerequisites, modules[{ week, title, topics[] }],
  assessment, certificate, facultySlugs[], faqs[],
  seoTitle, seoDescription, updatedAt
}
```

**Faculty**

```ts
{
  slug, name, prefix, designation, affiliations[], qualifications[],
  specialisations[], bio, coursesTaught[], image?, experienceYears?,
  consentOnFile: boolean, verifiedOn, updatedAt
}
```

**Calculator**

```ts
{
  slug, title, shortTitle, category, lawReference, description,
  inputs[], outputs[], taxYear, status, lastVerified,
  reviewers[], sources[], faqs[], relatedSlugs[]
}
```

**Article**

```ts
{
  slug, title, summary, category, authorSlug, reviewerSlug?,
  publishedAt, updatedAt, readingTime, body, sources[]
}
```

**Validation:** build fails if required fields are missing, slugs are duplicated, or a published calculator has no source/reviewer.

### 8.5 Calculator engine

- Pure functions: `(inputs, ruleSet) => result`.
- No framework dependencies in compute code.
- Shared `Money` helpers using integer paisa.
- One registry keyed by slug; the UI island imports only the needed compute functions (tree-shaken).
- Field definitions drive rendering and validation; keep labels/help text in content, not in components.
- Every result includes `assumptions: string[]`, `ruleSetVersion`, `lastVerified`.
- Error states return typed errors, never `NaN` or `Infinity`.

**Example result shape**

```ts
type CalculationResult = {
  primary: { label: string; amount: number };
  rows: { label: string; amount?: number; note?: string }[];
  assumptions: string[];
  warnings: string[];
  ruleSet: { taxYear: string; verifiedAt: string; status: string };
};
```

### 8.6 Forms and lead pipeline

**Flow**

1. Client validates basic fields and consent.
2. POST JSON to `/api/leads` with an idempotency key.
3. Worker validates with the shared Zod schema.
4. Turnstile verification.
5. Honeypot + minimum completion time check.
6. Rate limit (e.g. 5 requests/minute/IP; 20/hour/IP) using Cloudflare KV.
7. Normalise phone to E.164.
8. Store/forward to CRM; send internal email via Resend.
9. Return `{ ok: true, leadId }`.
10. Client redirects to `/thank-you` (no PII in URL) or shows success.

**Failure handling**

- CRM/email failure: do not lose the lead; write to a durable queue (Cloudflare Queues) or fallback log with alerting; return a clear retry message.
- Validation errors: 400 with field errors.
- Rate limit: 429 with retry guidance.
- Server error: 500; show WhatsApp/phone fallback.

**Privacy**

- Collect only what is needed.
- No PII in analytics, URLs, logs, or error reports.
- Consent timestamp and source stored with the lead.
- Retention: define in privacy policy (e.g. 24 months for enquiries; shorter if no consent).
- Do not auto-subscribe to marketing.

### 8.7 WhatsApp integration

**MVP:** click-to-chat deep links.

```
https://wa.me/923390006853?text=<URL-encoded message>
```

- Message contains no sensitive data.
- Opens in a new tab only after user action.
- Track `whatsapp_click` with page and context (not phone/email).

**Phase 2 (optional): WhatsApp Business Cloud API**

- Requires business verification, a dedicated number, template approval, opt-in records, and a 24-hour customer-service window.
- Never send promotional messages without explicit opt-in.
- Store consent and message logs per policy.
- Budget for conversation fees and provider tooling.

### 8.8 Search and filtering

- Calculator search: client-side, debounced, matches title, category, law reference, keywords; shows result count and empty state.
- Course filters: category; optional format/status.
- Knowledge Hub: category + pagination; no infinite scroll without accessible fallback.
- Site search (phase 2): Pagefind static index; no server.

### 8.9 Hosting, DNS, and environments

- Cloudflare Pages project connected to the Git repository.
- Preview deployment per pull request; production on `main`.
- DNS and WAF on Cloudflare; HTTPS enforced; HSTS.
- Environment variables: `RESEND_API_KEY`, `CRM_WEBHOOK_URL`, `CRM_WEBHOOK_SECRET`, `TURNSTILE_SECRET`, `LEAD_NOTIFICATION_EMAIL`, `PUBLIC_SITE_URL`.
- No secrets in the repository; use Cloudflare encrypted variables.
- Staging environment with `noindex`.

### 8.10 Security

- HTTPS only; HSTS; secure cookies if any.
- CSP: default-src self; script-src self + analytics domain; style-src self + inline (if required by framework); img-src self + data + map provider; frame-src only the map provider; connect-src self + analytics + form endpoint.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal.
- Server-side validation for every form; never trust the client.
- Turnstile + rate limiting + honeypot.
- Output encoding; no `dangerouslySetInnerHTML` with user content.
- Dependency audit monthly; Dependabot/Renovate.
- Principle of least privilege for CMS and CRM access.
- Incident response: rotate keys, disable form endpoint if abused, notify affected users if personal data is compromised.

### 8.11 Analytics and consent

- Prefer Plausible (cookieless, no banner required in many jurisdictions). If GA4 is used, implement Consent Mode v2 and a consent banner that blocks analytics until consent.
- Track: page views, CTA clicks, calculator opens/results (debounced), form starts/submissions/successes, WhatsApp clicks, phone/email clicks, course views, syllabus downloads.
- UTM parameters captured on landing and stored with the lead (first-touch and last-touch).
- No PII in event properties.
- Document retention and access.
- Google Search Console + Bing Webmaster Tools verified; submit sitemap.

### 8.12 Performance budgets

Targets are goals, not guarantees:

| Metric | Target |
|---|---|
| LCP (mobile, 4G) | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |
| Lighthouse mobile performance | ≥ 90 (stretch 95) |
| Accessibility / Best Practices / SEO | ≥ 95 |
| HTML per page | ≤ 100KB gzipped |
| CSS | ≤ 50KB gzipped |
| JS per content page | ≤ 30KB gzipped |
| JS on calculator page | ≤ 80KB gzipped |
| Fonts | ≤ 2 families, ≤ 4 files, subset |

**Techniques:** static HTML, self-hosted fonts, preload only critical assets, responsive images, lazy loading below the fold, no heavy third-party scripts, defer analytics, avoid client-side rendering for content.

### 8.13 SEO implementation

- Unique title/description per page; one H1.
- Canonical URLs, no trailing slash.
- Open Graph + Twitter cards; 1200×630 OG image per page type.
- `sitemap.xml` auto-generated; `robots.txt` allows public pages, blocks `/thank-you`, `/api`, preview deployments.
- Breadcrumb schema and visible breadcrumbs.
- Internal linking: course ↔ calculator ↔ article ↔ faculty.
- 301 redirects for old URLs; no chains.
- 404 returns HTTP 404.
- Image alt text; descriptive file names.
- No keyword stuffing; no doorway pages.
- Local SEO: Google Business Profile, NAP consistency, map link, reviews (genuine).
- Article dates and reviewer info for E-E-A-T.

### 8.14 Error handling and monitoring

- Custom 404 and 500 pages.
- Client errors to Sentry with PII scrubbing (if enabled).
- Form endpoint alerts on failure rate > 2% or CRM failures.
- Uptime check every minute for `/` and `/api/health`.
- Broken-link check monthly.
- Cloudflare analytics for traffic/performance.

### 8.15 Backups and disaster recovery

- Content and code in Git; protected `main`.
- CRM data exported monthly.
- Cloudflare configuration documented and exportable.
- Images and PDFs in the repository (or R2 with versioning).
- RPO: 24 hours. RTO: 4 hours.
- Restore drill twice a year.

---

## 9. DATA MODELS AND VALIDATION

### 9.1 Lead schema

```ts
const leadSchema = z.object({
  type: z.enum(['admission', 'contact', 'corporate']),
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(20),
  programme: z.string().max(120).optional(),
  mode: z.enum(['physical', 'online']).optional(),
  schedule: z.string().max(80).optional(),
  background: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  teamSize: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
  consent: z.literal(true),
  source: z.string().max(200),
  utm: z.record(z.string()).optional(),
  submittedAt: z.string().datetime(),
  idempotencyKey: z.string().uuid()
});
```

**Server-side rules**

- Reject unknown fields or strip them.
- Normalise phone to E.164 using `libphonenumber-js`.
- Trim and collapse whitespace.
- Reject URLs in name/company fields if spammy.
- Maximum request body: 16KB.
- Honeypot field must be empty.
- Minimum time from form render to submit: 2 seconds (configurable).

### 9.2 Event schema

```ts
type AnalyticsEvent =
  | { name: 'cta_click'; page: string; cta: string }
  | { name: 'calculator_open'; slug: string }
  | { name: 'calculator_result'; slug: string; taxYear: string }
  | { name: 'form_start'; form: 'admission' | 'contact' | 'corporate' }
  | { name: 'form_submit'; form: string; ok: boolean }
  | { name: 'whatsapp_click'; page: string }
  | { name: 'phone_click'; page: string };
```

No names, emails, phone numbers, or free-text messages in analytics.

---

## 10. INTEGRATIONS

| Integration | Purpose | MVP | Owner | Notes |
|---|---|---|---|---|
| Resend | Internal lead notification, auto-reply | Yes | Dev | Verify domain; no marketing without consent |
| CRM | Pipeline, follow-up | Yes | GICT | Choose before build; test duplicate handling |
| WhatsApp deep link | Immediate conversation | Yes | GICT | No automation |
| WhatsApp Cloud API | Automated templates | Phase 2 | GICT | Opt-in, templates, fees |
| Cloudflare Turnstile | Spam protection | Yes | Dev | Invisible/managed mode |
| Google Maps | Location | Yes | Dev | Consent-aware embed or static map |
| Plausible/GA4 | Analytics | Yes | GICT | Consent if cookies |
| Google Search Console | SEO | Yes | GICT | Verify domain |
| Calendar booking | Campus visit | Phase 2 | GICT | Only if staffed |
| Payment gateway | Fees | Out of scope | GICT | Do not add until finance/legal ready |

**CRM requirements**

- Accept webhook with HMAC signature or API key.
- Deduplicate by email + phone.
- Store consent and source.
- Assign owner and pipeline stage.
- Alert on failure.
- Exportable.

---

## 11. SEO AND CONTENT STRATEGY

### 11.1 Keyword clusters

| Cluster | Example queries | Primary page |
|---|---|---|
| IRIS & filing | “IRIS income tax return filing”, “Section 116 wealth statement” | Course, articles |
| Salary tax | “salary tax calculator Pakistan”, “income tax slabs” | Calculator, article |
| Corporate tax | “corporate tax rate Pakistan”, “super tax 4C” | Course, calculator |
| Sales tax | “PRA sales tax”, “SRB services tax”, “input tax 90%” | Course, calculator |
| Property/CGT | “236C rate”, “CGT property calculator” | Calculator, article |
| Litigation | “Section 122 notice reply”, “ATIR appeal” | Course, article |
| Compliance calendar | “FBR due dates”, “SECP filing deadlines” | Article, hub |
| Local | “tax course Rawalpindi”, “tax training Islamabad” | Home, contact |
| B2B | “corporate tax training Pakistan” | Corporate training |

### 11.2 Content plan (first 90 days)

| # | Article | Intent | Internal links |
|---|---|---|---|
| 1 | Salary tax slabs: how to read your withholding | Informational | Salary calculator, Tax Filing course |
| 2 | Section 116 wealth reconciliation: common IRIS errors | Problem-solving | IRIS course, salary calculator |
| 3 | PRA vs SRB: where services are taxed | Comparison | Sales Tax course, provincial calculator |
| 4 | Section 122 notices: first response checklist | Urgent/legal | Litigation course, faculty |
| 5 | Corporate tax computation: accounting to taxable profit | Informational | Corporate Tax course, corporate calculator |
| 6 | 236C/236K property advance tax: buyer and seller | Transactional | Property calculator |
| 7 | Minimum tax vs normal tax: carry-forward basics | Informational | Minimum tax calculator |
| 8 | SECP annual filing calendar | Reference | SECP calculators |
| 9 | FBR late filing penalty and surcharge | Problem-solving | Penalty calculator |
| 10 | Input tax adjustment: common mistakes | Informational | Sales tax calculator |
| 11 | How to evaluate a tax training programme | Commercial | Courses |
| 12 | Corporate training needs assessment template | B2B | Corporate training |

**Cadence:** 2 articles/month after launch; each reviewed by a qualified person; update dates visible.

### 11.3 On-page SEO checklist

- Title ≤ 60 characters, unique, primary keyword first.
- Description 140–160 characters, benefit + location/format.
- H1 matches intent; H2s cover subtopics.
- 3–6 internal links with descriptive anchors.
- At least one authoritative external source for legal/tax claims.
- Image alt text; compressed assets.
- Schema where appropriate.
- Author and reviewed date for articles.

### 11.4 Local SEO

- Google Business Profile: category, address, hours, phone, photos, services, Q&A.
- NAP identical on site, GBP, and citations.
- Map embed and directions.
- Ask for reviews after a batch; never gate or incentivise reviews improperly.
- Local content: campus access, metro, parking, Islamabad/Rawalpindi audience.

---

## 12. CONVERSION AND LEAD OPERATIONS

### 12.1 Funnel

| Stage | Definition | Measurement |
|---|---|---|
| Awareness | Organic/social/referral visit | Sessions, impressions |
| Interest | Course/calculator view | Scroll depth, time, calculator result |
| Consideration | CTA click, form start | CTA CTR, form start rate |
| Conversion | Valid lead submitted | Form completion rate, lead quality |
| Enrolment | Fee paid / seat confirmed | CRM stage, enrolment rate |
| Advocacy | Testimonial/referral | Referral leads |

### 12.2 Lead handling

- Respond within one working day (or state the actual SLA).
- Use a consistent script; confirm programme, mode, schedule, background, and next step.
- Do not pressure with fake deadlines.
- Record source and consent.
- Follow-up: day 1, day 3, day 7; stop after two unanswered attempts or opt-out.
- Mark lost reasons (fee, timing, location, not qualified).
- Monthly review of lead quality by programme and source.

### 12.3 Forms

- Ask only what is needed to qualify.
- Explain why phone/email are needed.
- Inline validation; preserve data on error.
- Success page with next steps.
- Consent unchecked by default.
- Provide a non-WhatsApp contact route.

---

## 13. LEGAL, PRIVACY, AND COMPLIANCE

### 13.1 Required policies

- Privacy Policy
- Terms of Use
- Refund and Cancellation Policy
- Calculator/Content Disclaimer
- Accessibility Statement
- Cookie Policy (if cookies are used)

### 13.2 Data protection baseline

- Collect minimum personal data.
- State purpose, retention, and third parties.
- Obtain explicit consent for contact where required.
- Provide access/correction/deletion request contact.
- Secure transmission and storage; restrict access.
- Do not sell data.
- Confirm obligations with Pakistani counsel; adopt GDPR-aligned practices as a baseline where local law is unsettled.
- Keep consent records (timestamp, source, wording).

### 13.3 Claims and advertising

- Maintain a Claim Register with evidence for ratings, alumni counts, affiliations, placement, and results.
- Remove unverifiable superlatives.
- Testimonials require consent and must reflect genuine experience.
- Do not use “guaranteed job”, “100% placement”, or “FBR-approved” unless factually and legally supportable.

### 13.4 Calculator disclaimer (required text)

> This calculator provides an estimate based on the selected tax year and the assumptions shown. It is general information, not tax, legal, or financial advice, and does not create an adviser-client relationship. Tax law and rates change. Verify with the FBR, the relevant authority, or a qualified professional before filing or making a decision.

### 13.5 Faculty and testimonial consent

- Written consent for photo, name, designation, bio, and publication.
- Consent for testimonials, including name/role/company if used.
- Withdrawal process and removal SLA.
- Store consent records securely.

---

## 14. QUALITY ASSURANCE AND ACCEPTANCE

### 14.1 Test matrix

| Area | Checks |
|---|---|
| Content | Facts, dates, fees, claims, links, spelling, tone |
| Tax accuracy | Rules, sources, fixtures, reviewer sign-off |
| Functional | Navigation, filters, calculator inputs/results, forms, modal, print |
| Accessibility | Keyboard, focus, labels, contrast, zoom, screen reader |
| Responsive | 320, 375, 390, 768, 1024, 1280, 1440 |
| Performance | Lighthouse, WebPageTest, JS/CSS budgets |
| SEO | Titles, descriptions, canonicals, schema, sitemap, robots, redirects |
| Security | Headers, form validation, rate limit, spam, dependency audit |
| Legal | Privacy, terms, refund, disclaimer, consent |
| Analytics | Events fire once, no PII, correct parameters |
| Cross-browser | Chrome, Edge, Firefox, Safari iOS, Android Chrome |

### 14.2 Calculator acceptance

- Correct for all fixtures and boundaries.
- Visible tax year, source, last verified.
- Disclaimer visible.
- Assumptions and exclusions documented.
- Keyboard accessible; `aria-live` results.
- Print output readable.
- No console errors.
- Mobile layout usable one-handed.

### 14.3 Form acceptance

- Required fields enforced client and server.
- Consent required server-side.
- Spam protection works without blocking humans.
- Duplicate submission prevented.
- CRM/email failure does not lose the lead.
- Success and failure states clear.
- No PII in URL/analytics.
- Rate limit returns a helpful message.

### 14.4 Launch gate

- All pages pass content/legal review.
- All published calculators have a reviewer and source.
- No broken links; no 404s on internal links.
- Lighthouse targets met.
- Accessibility audit passed.
- Forms tested end-to-end in production-like environment.
- Analytics and Search Console verified.
- Backups and monitoring active.
- Rollback plan documented.

---

## 15. DELIVERY PLAN

### 15.1 Team

| Role | Responsibility | Allocation |
|---|---|---|
| Product owner (GICT) | Decisions, content, approvals | 0.3 FTE |
| Tech lead / full-stack | Architecture, calculators, forms, deploy | 1.0 FTE |
| Designer | Design system, page designs, QA | 0.5 FTE |
| Content lead | Copy, curriculum, SEO content | 0.5 FTE |
| Tax reviewer | Rate verification, calculator sign-off | 0.2 FTE |
| QA/accessibility | Test plan, audits | 0.3 FTE |

### 15.2 Phases (10 weeks, ≈68 person-days)

| Phase | Duration | Deliverables | Gate |
|---|---|---|---|
| 0. Discovery & decisions | Week 1 | Route map, content inventory, CRM/WhatsApp/domain decisions, tax source list, claim register | Decisions signed off |
| 1. Foundation | Weeks 2–3 | Repo, CI, design tokens, global shell, content schemas, legal page templates | Design system + shell approved |
| 2. Core pages | Weeks 4–5 | Home, about, faculty, courses, contact, corporate, legal copy | Content + mobile QA |
| 3. Calculators | Weeks 6–7 | Rules registry, engine, 25 tools, fixtures, disclaimers, print | Tax reviewer sign-off |
| 4. Growth & leads | Week 8 | Knowledge Hub, forms, CRM/email, WhatsApp, analytics, SEO schema | End-to-end lead test |
| 5. QA & launch | Week 9–10 | Accessibility, performance, security, UAT, redirects, monitoring, handover | Launch gate checklist |

**Critical path:** tax-rule verification → calculator fixtures → content sign-off → launch. Start tax source collection in week 1; do not wait for development.

### 15.3 Prioritisation (MoSCoW)

**Must:** Home, courses, course detail, faculty, calculators engine + agreed tools, contact, admission form, legal pages, SEO, analytics, accessibility, security.

**Should:** Knowledge Hub, corporate training, individual faculty profiles, print/PDF summaries, calculator search.

**Could:** Urdu, site search, WhatsApp Cloud API, booking calendar, newsletter.

**Won’t (v1):** LMS, payments, student portal, AI chatbot, mobile app.

### 15.4 Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Tax rates outdated/incorrect | High | High | Versioned rules, two-person review, fixtures, visible tax year, quarterly audit |
| Content not ready | High | High | Content owner, templates, weekly deadlines, launch with fewer complete pages |
| Claims/legal issues | Medium | High | Claim register, legal review, remove superlatives |
| Faculty photos/consent missing | Medium | Medium | Neutral placeholders, consent forms, publish only approved profiles |
| CRM/WhatsApp integration delays | Medium | Medium | Deep links MVP; CRM adapter interface; test early |
| Scope creep | High | Medium | MoSCoW, change request, phase gates |
| Performance regressions | Medium | Medium | Budgets in CI, Lighthouse checks, review third-party scripts |
| Single developer dependency | Medium | High | Documentation, code review, CI, handover |
| SEO competition | High | Medium | Long-tail calculators, local SEO, authoritative content, internal links |
| Spam/abuse | Medium | Medium | Turnstile, rate limits, honeypot, monitoring |

---

## 16. OPERATIONS AND MAINTENANCE

### 16.1 Cadence

| Task | Frequency | Owner |
|---|---|---|
| Tax rule review | Quarterly + after Finance Act/SRO | Tax reviewer |
| Article review | Every 6–12 months | Content lead |
| Faculty profile review | Annually or on change | Admin |
| Batch dates/status | Before each intake | Admissions |
| Dependency updates | Monthly | Dev |
| Security patches | Within 7 days for critical | Dev |
| Backup verification | Monthly | Dev |
| Broken-link check | Monthly | Content/QA |
| Analytics review | Monthly | Marketing |
| Accessibility spot check | Quarterly | QA |
| Uptime/error review | Weekly | Dev |

### 16.2 Tax update procedure

1. Monitor Finance Act, FBR circulars/SROs, SECP regulations.
2. Create a rules draft with sources and effective dates.
3. Update fixtures and expected outputs.
4. Technical review + tax review.
5. Publish with `lastVerified` and a changelog entry.
6. Update affected articles and course notes.
7. Announce changes where relevant.

### 16.3 Incident response

- Form endpoint abuse: enable stricter rate limit/WAF, rotate keys, notify.
- Data breach: contain, assess, notify per policy/legal advice, document.
- Site outage: check Cloudflare status, roll back last deploy, restore from Git, communicate.
- Incorrect calculator result: disable the tool, publish a notice, fix, re-test, post-mortem.

---

## 17. KPIs AND REPORTING

### 17.1 Business KPIs

- Qualified admission enquiries per month.
- Enrolments and conversion rate by programme/source.
- Corporate proposals and conversion.
- Cost per lead/enrolment (if paid media).
- Response time and follow-up completion.

### 17.2 Product KPIs

- Calculator sessions and completion rate.
- CTA click-through rate.
- Form start → submit rate.
- WhatsApp/phone clicks.
- Mobile vs desktop conversion.

### 17.3 SEO KPIs

- Indexed pages and coverage errors.
- Organic impressions/clicks (GSC).
- Top-10 rankings for target clusters.
- Local pack views/actions.
- Referring domains (quality, not quantity).

### 17.4 Technical KPIs

- Core Web Vitals pass rate.
- Uptime ≥ 99.9%.
- JS error rate.
- Form success rate ≥ 99% (excluding spam).
- Lighthouse mobile performance.

Set targets after 90 days of baseline data; do not invent targets in advance.

---

## 18. LAUNCH CHECKLIST

### Content

- [ ] Every page has approved copy.
- [ ] Course dates, fees, duration, and status are current.
- [ ] Faculty credentials and consents verified.
- [ ] Claims register complete.
- [ ] Legal pages reviewed.
- [ ] Calculator disclaimers visible.
- [ ] No placeholder text or lorem ipsum.

### Technical

- [ ] Production build passes.
- [ ] All routes return 200/404 correctly.
- [ ] Redirects tested.
- [ ] Forms tested end-to-end (email + CRM).
- [ ] Spam protection tested.
- [ ] Analytics events verified.
- [ ] Sitemap/robots/canonicals verified.
- [ ] Security headers verified.
- [ ] Backups and monitoring active.
- [ ] Rollback plan documented.

### Quality

- [ ] Lighthouse targets met.
- [ ] Accessibility audit passed.
- [ ] Cross-browser/mobile checks passed.
- [ ] No console errors.
- [ ] Images optimised with dimensions.
- [ ] Print stylesheet works for calculators.

### Handover

- [ ] CMS/editing guide delivered.
- [ ] CRM/lead process documented.
- [ ] Tax update procedure documented.
- [ ] Access and ownership transferred to GICT.
- [ ] Support/maintenance agreement defined.

---

## APPENDIX A — ROUTE AND REDIRECT INVENTORY

| From | To | Type | Reason |
|---|---|---|---|
| `/about-us` | `/about` | 301 | Canonical simplification |
| `/contact-us` | `/contact` | 301 | Canonical simplification |
| `/blog` | `/knowledge-hub` | 301 | Brand-aligned URL |
| `/corporate-solutions` | `/corporate-training` | 301 | Clear intent |
| `/courses/*/` | `/courses/*` | 301 | No trailing slash |
| `/calculators/*/` | `/calculators/*` | 301 | No trailing slash |
| `/thank-you` | — | `noindex` | Conversion page |
| `/api/*` | — | `noindex`, `Disallow` | Endpoint |

---

## APPENDIX B — TAX-RULES EXAMPLE (ILLUSTRATIVE, NOT PRODUCTION)

This example uses Tax Year 2024-25 only to demonstrate structure and test fixtures. **It must be verified against the Finance Act and replaced/updated before publication.** Do not copy it into production without review.

```json
{
  "taxYear": "2024-25",
  "financeAct": "Finance Act 2024",
  "effectiveFrom": "2024-07-01",
  "status": "example-only",
  "verifiedAt": "2026-10-21T00:00:00Z",
  "verifiedBy": "REPLACE_WITH_REVIEWER",
  "sources": [
    {
      "label": "Finance Act 2024 — official text (verify URL)",
      "url": "https://www.fbr.gov.pk/",
      "accessed": "2026-10-21"
    }
  ],
  "parameters": {
    "currency": "PKR",
    "rounding": "half-up",
    "salarySlabs": [
      { "upTo": 600000, "rate": 0.00, "fixed": 0 },
      { "upTo": 1200000, "rate": 0.05, "fixed": 0 },
      { "upTo": 2200000, "rate": 0.15, "fixed": 30000 },
      { "upTo": 3200000, "rate": 0.25, "fixed": 180000 },
      { "upTo": 4100000, "rate": 0.30, "fixed": 430000 },
      { "upTo": null, "rate": 0.35, "fixed": 700000 }
    ]
  }
}
```

**Fixtures (for the example only):**

| Annual salary | Expected tax | Expected monthly withholding |
|---:|---:|---:|
| 600,000 | 0 | 0 |
| 1,200,000 | 30,000 | 2,500 |
| 1,800,000 | 120,000 | 10,000 |
| 3,600,000 | 530,000 | 44,167 |
| 4,100,000 | 700,000 | 58,333 |

---

## APPENDIX C — LEAD PAYLOAD EXAMPLE

```json
{
  "type": "admission",
  "name": "Example Applicant",
  "email": "applicant@example.com",
  "phone": "+923001234567",
  "programme": "Tax Filing & IRIS Compliance",
  "mode": "online",
  "schedule": "weekend-morning",
  "background": "tax-consultant",
  "message": "Please share the fee schedule.",
  "consent": true,
  "source": "/courses/tax-filing-iris-compliance",
  "utm": { "source": "google", "medium": "organic" },
  "submittedAt": "2026-10-21T10:00:00Z",
  "idempotencyKey": "00000000-0000-4000-8000-000000000000"
}
```

Server response: `201 { "ok": true, "leadId": "ld_..." }`.

---

## APPENDIX D — JSON-LD EXAMPLES

### Organisation

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Global Institute of Corporate Training",
  "alternateName": "GICT",
  "url": "https://www.gict.edu.pk",
  "logo": "https://www.gict.edu.pk/images/gict-logo.png",
  "telephone": "+92-339-0006853",
  "email": "info@gict.edu.pk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office-11, First Floor, Alfalah Askaria Plaza, Committee Chowk, Murree Road",
    "addressLocality": "Rawalpindi",
    "addressRegion": "Punjab",
    "postalCode": "46000",
    "addressCountry": "PK"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.6067, "longitude": 73.0694 },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ]
}
```

### Course

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Tax Filing & IRIS Compliance",
  "description": "Practical tax filing and IRIS compliance programme.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Global Institute of Corporate Training",
    "sameAs": "https://www.gict.edu.pk"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": ["onsite", "online"],
    "courseWorkload": "P8W",
    "startDate": "2026-11-01"
  }
}
```

Add `offers` only when the fee is public and accurate.

### Calculator

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Salary Income Tax Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
  "provider": { "@type": "EducationalOrganization", "name": "GICT" }
}
```

---

## APPENDIX E — CONTENT TEMPLATES

### Course page template

1. Breadcrumb
2. Category · status · duration · format
3. H1
4. Summary (40–60 words)
5. Key facts table
6. Enrolment card
7. Overview (120–180 words)
8. Outcomes (6–8 bullets)
9. Curriculum (accordion)
10. Assessment and certificate
11. Faculty
12. Schedule and location
13. Fees and payment
14. Prerequisites
15. FAQ
16. Related
17. CTA

### Calculator page template

1. Breadcrumb
2. Category · law reference · tax year · last verified
3. H1
4. Description (40–60 words)
5. Calculator
6. Result and assumptions
7. Formula and worked example
8. Notes and exclusions
9. Disclaimer
10. Related tools
11. Course CTA
12. FAQ

### Article template

1. Category · date · reading time
2. H1
3. Summary
4. Author and reviewer
5. Table of contents
6. Body
7. Sources
8. Disclaimer
9. Author bio
10. Related
11. CTA

---

## APPENDIX F — CLAIM REGISTER TEMPLATE

| Claim | Page | Evidence | Owner | Verified on | Status |
|---|---|---|---|---|---|
| “Practitioner-led faculty” | Home, About | Faculty contracts/credentials | Academic lead | TBD | Pending |
| “Live online cohorts” | Courses | Delivery process | Operations | TBD | Pending |
| Alumni count | Home | CRM/attendance records | Admissions | TBD | Pending |
| Rating | Home | Survey evidence + method | Marketing | TBD | Pending |
| Affiliations | Home | Membership certificates | Faculty | TBD | Pending |

**Rule:** do not publish a claim with status other than “Verified”.

---

## APPENDIX G — OPEN DECISIONS

| # | Decision | Owner | Needed by | Impact |
|---|---|---|---|---|
| 1 | Public fees or “on request” | GICT | Phase 0 | Course pages, schema |
| 2 | Batch dates and seat limits | Admissions | Phase 0 | Hero, course pages |
| 3 | Verified claims/ratings/alumni numbers | GICT | Phase 0 | Home, about |
| 4 | Faculty photos/consent/bios | Academic lead | Phase 1 | Faculty pages |
| 5 | CRM choice and access | GICT | Phase 0 | Forms pipeline |
| 6 | WhatsApp deep link vs Cloud API | GICT | Phase 0 | Messaging |
| 7 | Domain, email, hosting ownership | GICT | Phase 0 | DNS/deploy |
| 8 | Refund/cancellation policy | GICT/legal | Phase 1 | Legal page, course page |
| 9 | English only or English + Urdu | GICT | Phase 1 | IA, fonts, RTL |
| 10 | Analytics choice and consent | GICT | Phase 1 | Tracking |
| 11 | Certificate wording/accreditation | Academic lead | Phase 1 | Course pages |
| 12 | Corporate training offer/pricing | GICT | Phase 2 | B2B page |
| 13 | Legal review of disclaimers | Counsel | Phase 1 | All calculators/forms |
| 14 | Tax year to launch with | Tax reviewer | Phase 0 | Calculator content |

---

## APPENDIX H — GLOSSARY

| Term | Meaning |
|---|---|
| ATL | Active Taxpayer List |
| AOP | Association of Persons |
| CGT | Capital Gains Tax |
| CIR (Appeals) | Commissioner Inland Revenue (Appeals) |
| ATIR | Appellate Tribunal Inland Revenue |
| FBR | Federal Board of Revenue |
| FTO | Federal Tax Ombudsman |
| IRIS | FBR’s online tax filing portal |
| KPRA | Khyber Pakhtunkhwa Revenue Authority |
| PRA | Punjab Revenue Authority |
| SECP | Securities and Exchange Commission of Pakistan |
| SRB | Sindh Revenue Board |
| BRA | Balochistan Revenue Authority |
| SRO | Statutory Rules and Order |
| WHT | Withholding tax |
| DSCR | Debt Service Coverage Ratio |
| NPV / IRR | Net Present Value / Internal Rate of Return |

---

## APPENDIX I — HANDOVER CHECKLIST

- [ ] Repository ownership transferred to GICT.
- [ ] Cloudflare, domain, DNS, and email access documented.
- [ ] CMS/editing guide with screenshots.
- [ ] Tax-rules update guide with a worked example.
- [ ] CRM pipeline and lead-handling SOP.
- [ ] Form failure and incident runbook.
- [ ] Analytics/Search Console access.
- [ ] Backup and restore procedure.
- [ ] Vendor/account inventory and renewal dates.
- [ ] 30-day post-launch support plan.

---

**End of document — GICT Enterprise Digital Architecture & Web Specification v2.0.0**
