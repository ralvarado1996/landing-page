# AgroDignity - Product Requirements Document

## Project Overview
Professional institutional landing page for AgroDignity, a Honduran-Italian agri-data platform helping smallholder coffee and cacao farmers in Honduras and Guatemala comply with EU deforestation regulations (EUDR) while earning royalties from their farm data.

## Original Problem Statement
Build a professional institutional landing page with:
- Brand identity: Deep forest green (#1A6B3C) + gold (#B8860B)
- Typography: Inter font
- Spanish language throughout
- 7 sections: Hero, Problem, Solution, How it works, Team, Partners, Contact
- Responsive design with subtle animations
- No backend integrations required (static landing page)

## User Personas
1. **Government Officials** (SAG Honduras) - Need compliance dashboard and evidence
2. **Institutional Partners** (FAO, IFAD, EU NDICI) - Seeking strategic collaboration
3. **Agricultural Cooperatives** (COMSA, BANHPROVI) - Looking for farmer support solutions

## Architecture & Tech Stack
- **Frontend**: React 19, Tailwind CSS, shadcn/ui components
- **Typography**: Inter font (Google Fonts)
- **Styling**: Custom forest green/gold color scheme
- **Animations**: Subtle smooth scrolling and fade-in effects
- **Images**: Unsplash professional farmer images
- **Hosting**: Emergent preview environment

## Implementation Status (December 2025)

### ✅ Completed Features
1. **Header/Navigation**
   - Fixed header with scroll effect
   - Logo integration (user-provided)
   - Smooth scroll navigation to sections
   - Mobile responsive

2. **Hero Section**
   - Full viewport height with mountain plantation background
   - Compelling headline highlighting USD 2.030M exports and EUDR threat
   - Clear value proposition and CTA button
   - Gold accent text for emphasis

3. **Problem Section (El Desafío)**
   - 3-card layout with hover effects
   - Icons: Users, Database, TrendingUp from lucide-react
   - Border-top accent colors (green/gold)
   - Key statistics: 120,000 families, data value, May 2025 milestone

4. **Solution Section (Qué Entrega)**
   - 3-column layout with icon circles
   - Panel Nacional EUDR, Ruta de Carbono, Ingreso Digno
   - Hover animations on icon containers
   - Clear institutional benefits

5. **How It Works (Cómo Funciona)**
   - 3-step horizontal flow with arrows
   - Numbered steps with card design
   - Emphasis on 90% royalty to farmers
   - Progressive color scheme (green → gold → green)

6. **Team Section (El Equipo)**
   - 3 team member cards
   - Placeholder avatars with initials (RA, MB, AP)
   - Role colors (green/gold alternating)
   - Professional credentials displayed

7. **Partners Section**
   - Text badges for institutional partners
   - 6 partners: FAO Roma, IFAD, BANHPROVI, COMSA, SAG Honduras, EU NDICI
   - Hover shadow effects

8. **Contact Section**
   - Forest green background
   - Email and location display
   - Clear call-to-action headline
   - Lucide-react icons (Mail, MapPin)

9. **Footer**
   - Dark theme (gray-900)
   - Logo and copyright
   - Professional branding statement

### Design Implementation
- ✅ Inter font family integrated
- ✅ Forest green (#1A6B3C) and gold (#B8860B) color scheme
- ✅ Smooth scroll behavior
- ✅ Subtle fade-in animations
- ✅ Responsive grid layouts
- ✅ Consistent spacing and typography
- ✅ Professional shadcn/ui components
- ✅ Hover states on interactive elements

## Next Action Items
1. Replace placeholder team avatars with actual photos when provided
2. Add partner logos if available (currently text badges)
3. Consider adding testimonials section from cooperatives
4. Optional: Add simple contact form if lead capture needed
5. Optional: Add metrics counter animation for key statistics

## Files Structure
```
/app/frontend/src/
├── pages/
│   └── Home.jsx          # Main landing page component
├── components/ui/        # shadcn components (Button, Card, etc.)
├── App.js                # Route configuration
├── App.css               # Custom animations
├── index.css             # Inter font import, base styles
└── tailwind.config.js    # Custom colors (forest-green, gold)
```

## Content Notes
- All content is in Spanish as requested
- Email: contacto@agrodignity.com
- Locations: Roma, Italia · Tegucigalpa, Honduras
- Tagline: "Datos con Dignidad" (Data with Dignity)
- No backend requirements - purely informational landing page

## Deployment
- Preview URL: https://honduras-agridata.preview.emergentagent.com
- Frontend runs on port 3000
- No backend APIs required
