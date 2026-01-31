# Utkal Textorium Website - WhatsApp/Meta Compliant

## Overview
A production-ready, single-page responsive website for Utkal Textorium retail clothing store that meets all WhatsApp/Meta approval requirements.

## Key Features Implemented

### 1. Header (Sticky Navigation)
- Logo with store name
- Subtitle: "Ladies & Kids Wear (Retail Store)"
- Two prominent CTA buttons:
  - **WhatsApp Us** (green button, links to https://wa.me/919124036678)
  - **Call Now** (outline button, tel: +91 91240 36678)

### 2. About Section
- Clear description of the business
- Professional, trustworthy content

### 3. Store Information (Prominent Contact Section)
Four information cards displaying:
- **Phone**: +91 91240 36678 (clickable)
- **Email**: mail@utkaltextorium.com (clickable)
- **Address**: CDA Sector 9, Cuttack, Odisha, India
  - Includes "Open in Google Maps" button
- **Business Hours**:
  - Mon-Sat: 10:00 AM - 8:00 PM
  - Sunday: Closed

### 4. WhatsApp Consent Section (COMPLIANCE CRITICAL)
Complete opt-in form with:
- Name field (optional)
- Phone number field (optional)
- **Required checkbox** with exact compliance text:
  - "I agree to receive updates and promotional messages on WhatsApp from Utkal Textorium. I can opt out anytime by replying STOP."
- Submit button (disabled until consent checked)
- Important information box showing:
  - "We message only users who opt in."
  - "To unsubscribe, reply STOP."
  - "To resubscribe, reply START."

### 5. Policies Section (Expandable Accordions)
Five comprehensive policy documents:

#### Privacy Policy
- Information collection details
- Data usage explanation
- Data sharing disclosure (WhatsApp/Meta)
- Data retention and security
- Contact information

#### Terms & Conditions
- Website usage rules
- Pricing and availability disclaimers
- Limitation of liability
- Governing law: India, Jurisdiction: Cuttack

#### WhatsApp Messaging Policy
- Opt-in methods
- Opt-out process (STOP/START)
- Message types
- Message frequency disclosure

#### Return/Exchange Policy
- 7-day return window
- Eligibility requirements
- Non-returnable items
- Refund and exchange processes

#### Pickup Policy / No Delivery
- Clear statement: "We do not offer home delivery"
- In-store shopping only
- Store location and contact

### 6. Footer
- Company information summary
- Quick links to all sections:
  - About Us
  - Contact Us
  - Privacy Policy
  - Terms & Conditions
  - WhatsApp Messaging Policy
  - Return/Exchange Policy
  - Pickup Policy
- Copyright: "© 2026 Utkal Textorium. All rights reserved."
- Smooth scroll navigation

## Technical Implementation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Sticky header that stays visible on scroll
- Touch-friendly buttons and interactive elements

### Performance
- Static site generation (SSG)
- Optimized images
- No heavy animations
- Fast loading times

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support

### SEO & Metadata
- Proper page title and meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Structured content

## WhatsApp/Meta Compliance Checklist

✅ Clear business information (name, location, contact)
✅ Explicit opt-in checkbox with required consent text
✅ STOP/START opt-out instructions displayed
✅ "We message only users who opt in" statement
✅ Privacy Policy with WhatsApp/Meta data sharing disclosure
✅ Terms & Conditions with governing law
✅ WhatsApp Messaging Policy with opt-in/opt-out procedures
✅ Return/Exchange Policy
✅ Clear business type and services
✅ Contact information easily accessible
✅ Professional, trustworthy design

## Editable Content

You can easily modify these values in `/app/page.tsx`:

1. **Address**: Line 169 - Change "CDA Sector 9"
2. **Business Hours**: Lines 197-205
3. **All policy content**: Lines 301-530
4. **Phone/Email**: Multiple locations, use find/replace

## Color Scheme

- Primary: Slate tones (professional, neutral)
- Accent: Green (WhatsApp brand color) for messaging CTAs
- Background: Clean white
- Footer: Dark slate (slate-900)

## Build & Deploy

The project builds successfully with static export:
```bash
npm run build
```

Output is in the `out/` directory, ready for hosting on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## File Structure

```
/app
  ├── page.tsx          # Main page component
  ├── layout.tsx        # Layout with metadata
  └── globals.css       # Global styles

/components/ui          # Shadcn UI components
  ├── button.tsx
  ├── card.tsx
  ├── checkbox.tsx
  ├── input.tsx
  ├── label.tsx
  ├── accordion.tsx
  └── separator.tsx

/public
  └── logo.png          # Store logo
```

## Notes

- No backend required for the consent form (client-side only demo)
- Form shows success message for 3 seconds then resets
- All external links open in new tabs
- Phone and email links work on mobile devices
- Address editable to match actual location
- All compliance text follows WhatsApp/Meta guidelines
- Professional design suitable for business verification
