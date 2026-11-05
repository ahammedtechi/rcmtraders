# RCM Traders Limited – Premium Home Renovation & Interiors

A website designed and developed for **RCM Traders Limited**, a luxury home renovation, interior architecture, and bespoke improvement company based in Worcester, United Kingdom.

---

## 🏛️ Brand & Design Direction

- **Brand Identity**: Authentic 3D metallic gold medallion and Italian Carrara marble badge extracted directly from the official company assets.
- **Palette**:
  - Charcoal Black: `#171717` / `#121212`
  - Metallic Gold & Brass: `#C5A46D` (Accents: `#DFCA9F`, `#9F7F48`)
  - Warm Ivory: `#FAF8F5` / `#F4F1EA`
  - Soft Cashmere Grey: `#EAE8E3`
  - Crisp Pure White: `#FFFFFF`
- **Typography**: Editorial serif (*Cormorant Garamond*) paired with clean modern architectural sans (*Montserrat*).

---

## ⚡ Technology Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Dynamic Metadata, OpenGraph cards, Semantic HTML, Sitemap.xml, Robots.txt, and LocalBusiness JSON-LD structured data targeting Worcester & Worcestershire.

---

## 🌟 Pages & Architecture

1. **Homepage (`/`)**:
   - Full-screen architectural hero with dark editorial overlays and subtle gold glow.
   - Two-column editorial introduction with high-resolution imagery.
   - 6 Specialist Service sections with large editorial photography.
   - Why Choose Us grid with minimal iconography.
   - Interactive Featured Projects gallery with category filtering.
   - Interactive **Before & After comparison slider**.
   - 5-Step Process Timeline (*Tell Us About Your Project* to *Final Sign-off*).
   - Verified Customer Reviews & feedback guarantees.
   - Frequently Asked Questions accordion.
   - Full-width call-to-action section.

2. **Dedicated Service Pages (`/services/[slug]`)**:
   - `/services/kitchen-renovation` (The Heart of Your Home, Beautifully Reimagined)
   - `/services/bathroom-renovation` (Everyday Comfort. A Touch of Luxury)
   - `/services/bedroom-cupboards` (Beautiful Storage. Designed Around You)
   - `/services/media-walls` (Make Your Living Room Extraordinary)
   - `/services/flooring` (The Foundation of a Beautiful Interior)
   - `/services/plumbing` (Reliable Solutions for Your Home Improvements)
   - *Each with individual hero, comprehensive deliverables, interior photo gallery, why choose RCM, service FAQs, and quotation form.*

3. **About Us (`/about`)**:
   - Company story, mission, vision, and core craftsmanship values.

4. **Project Portfolio (`/projects`)**:
   - Multi-category filtering, masonry project grid, full-screen lightbox modal, and before-and-after comparison.

5. **Customer Reviews (`/reviews`)**:
   - 100% verified Worcester homeowner testimonials, category filtering, rating breakdown, and Google Reviews placeholder.

6. **Contact & Free Quote (`/contact`)**:
   - Working quotation form with client-side & server-side validation, reference code generation (`/api/quote`), phone click-to-call (`07711 960238`), and direct WhatsApp chat integration.

7. **Legal & Compliance**:
   - `/privacy` – UK GDPR compliant privacy policy.
   - `/terms` – Business & renovation contract terms.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
