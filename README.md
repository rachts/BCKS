# Bardhaman Chhatra Kalyan Samiti (BCKS) | বর্ধমান ছাত্র কল্যাণ সমিতি

A production-grade, bespoke web application built for the historic charitable society **Bardhaman Chhatra Kalyan Samiti** (Reg. S/1L/83617 under the West Bengal Societies Registration Act XXVI of 1961), founded in 2011 by Sri Baidyanath Singha Roy and dedicated to educational stipends, health camps, student welfare, and talent competitions across Purba and Paschim Bardhaman.

---

## 🎨 Design System: "Heritage Broadside"

The design strictly embodies the **"Heritage Broadside"** aesthetic — evoking a beautifully printed, archival annual report and gazette:

- **Color Palette**:
  - **Paper Cream** (`#FAF6EC` / `bg-paper-cream`): Warm, archival background base
  - **Paper Dark** (`#F1EADA` / `bg-paper-dark`): Subtly contrasted column tints and callout cards
  - **Deep Ink** (`#1F2430` / `text-deep-ink`): High-legibility classical typography
  - **Deep Maroon** (`#7A1F2B` / `text-deep-maroon` / `bg-deep-maroon`): Primary institutional accent
  - **Muted Marigold** (`#D9A441`): Used sparingly for dates, thin rules, and brass badge highlights
  - **Hairline Border** (`#E2DAC8` / `border-hairline`): 1px ink rules at 15% opacity
- **Typography**:
  - Headings: Serif (**Playfair Display**) — Hero (64–80px), Section titles (36–48px)
  - Body: Sans-serif (**Source Sans 3** & **Plus Jakarta Sans**) — 17–18px, generous 1.7 line height
  - Accents: 11px uppercase, tracked section labels accompanied by a 24px hairline rule; 72–120px italic serif numerals for milestones, metrics, and steps.
- **Editorial Rules**:
  - Maximum **ONE** deep-maroon accent band per page (with cream text) for a quote or primary CTA.
  - Authentic hairline `<table>` styling with no zebra striping or card wrappers.
  - Calm, trustworthy micro-interactions and smooth scroll.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Runtime**: React 19
- **Styling**: Tailwind CSS v4 with custom CSS variables and font configuration
- **Animations**: [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scrolling**: [Lenis (lenis/react)](https://lenis.darkroom.engineering/)
- **Language**: TypeScript (strict mode)
- **Icons**: Lucide React

---

## 🧭 Page Architecture & Routes

The application features 13 fully responsive, server-rendered routes:

1. **`/` (Homepage)**:
   - Hero broadside with archival photography and gold badge
   - Multi-metric statistics counter strip
   - Tripartite mission & ideological tenets
   - Archival activities showcase collage
   - Merit criteria breakdown
   - Founder quote dark band (Sri Baidyanath Singha Roy)
   - Official gazette notices table with download circular links
2. **`/about` (About the Samiti)**:
   - Society genesis, charter registration summary (Reg. S/1L/83617)
   - Dual-column broadsheet article with archival images
   - Institutional milestones timeline (2011–2022)
   - Founder biography and statutory transparency disclosure
3. **`/scholarships` (Scholarships & Merit Stipends)**:
   - Merit-cum-means criteria with large italic numerals
   - 2026–27 academic stipend disbursement calendar
   - Mandatory verification documents checklist
   - Roll of merit scholars (historical disbursement register)
   - Applicant desk rail & institutional nomination dark band
4. **`/apply` (Application Forms & Digital Docket)**:
   - 4 Statutory printable forms (`BCKS/ADM/M-01`, `BCKS/SCH/S-04`, `BCKS/VID/V-02`, `BCKS/COMP/N-03`)
   - Interactive slide-out digital application docket drawer with live client-side validation
   - Institutional intake trend graphic and submission guidelines
5. **`/student-programmes` (Student Programmes & Health)**:
   - Mobile diagnostic clinics and free ophthalmic camps
   - Upcoming community health camps schedule
   - Adolescent wellbeing and career counselling forum
   - Medical volunteer patronage callout
6. **`/competitions` (Annual Inter-School Competitions)**:
   - Inter-school competition categories table (Elocution, Art, Quiz, Essay)
   - Regulatory code collapsibles and criteria
   - Chronicle of laureates (2023, 2024, 2025 results archive)
   - Memorial prize patronage callout
7. **`/functions` (Functions & Photographic Monographs)**:
   - Archival photo monograph across Chapter I (AGM), Chapter II (Vidyasagar Jayanti), and Chapter III (Observances)
   - Client-side year filter tabs (All, 2025, 2024, 2023)
   - High-resolution photographic cards with Bengali annotations
8. **`/our-people` (Governing Council & Patrons)**:
   - Governing Council Directory (President Sri Amar Nath Ghosh, General Secretary Sri Baidyanath Singha Roy, Treasurer Sri Soumen Mukherjee)
   - Executive committee members with affiliations and portfolios
   - Institutional advisors and founding council roll
9. **`/membership` (Membership & Patron Roll)**:
   - Membership classifications (Life, Ordinary, Student)
   - Statutory rights and constitutional duties under Act XXVI of 1961
   - 3-Step enrolment protocol
   - Searchable active district register with instant filtering
10. **`/agm` (Annual General Meeting)**:
    - Official notice plate for the 15th AGM
    - Quorum, proxy, and voting eligibility rules
    - 6-Stage parliamentary order of conclave
    - Statutory auditor appointment notice
11. **`/updates` (Official Dispatches Gazette)**:
    - Gazette dispatches with Bengali dates
    - Category filtering (All, Circular, Scholarship, Health Camp, Notice)
    - Downloadable circular links and press communiqués
12. **`/donate` (Donate & 80G Tax Exemption)**:
    - Preset contribution chips (₹500 to ₹10,000) and custom input
    - Official UPI QR code and one-click UPI ID copy
    - Institutional NEFT/RTGS bank credentials
    - Section 80G tax deduction claim form
13. **`/ways-to-give` (Ways to Give)**:
    - 7 Philanthropic pathways (Named Endowments, Book Bank, Health Camps, Corpus)
    - Audited financial ledgers and transparency disclosures
    - Statutory certificates (80G, 12A, WB Societies Act)
    - Founding charter broadside quote

---

## 🚀 Running Locally

Ensure Node.js 18+ is installed.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start -p 3000
```

The application is accessible at [http://localhost:3000](http://localhost:3000).

---

## 🏛 Legal & Statutory Information

- **Registered Society**: Bardhaman Chhatra Kalyan Samiti
- **Registration No.**: S/1L/83617 under West Bengal Societies Registration Act XXVI of 1961
- **Tax Exemption**: Section 80G & 12A of the Income Tax Act, 1961
- **Registered Office**: Raniganj Bazar, Bardhaman, West Bengal 713101, India
- **Contact**: contact@bcks-bardhaman.org | +91 342 256 0192
