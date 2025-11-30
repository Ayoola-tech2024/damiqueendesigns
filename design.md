# Damiqueen Footwears - Design Style Guide

## Design Philosophy

### Visual Language
**Minimalist Luxury**: Clean, sophisticated aesthetic that emphasizes quality over quantity. Every element serves a purpose, with generous white space creating breathing room and elevating the premium feel.

### Color Palette
- **Primary**: #111111 (Deep Charcoal Black) - Main text, headers, premium elements
- **Secondary**: #FFFFFF (Pure White) - Background, negative space, clean sections  
- **Accent 1**: #C6A667 (Elegant Gold) - Call-to-action buttons, highlights, luxury touches
- **Accent 2**: #F5F5F5 (Soft Light Gray) - Subtle backgrounds, card backgrounds
- **Accent 3**: #222222 (Dark Neutral) - Secondary backgrounds, footer sections

### Typography
**Primary Font**: "Playfair Display" (Serif) - For headings and brand elements
- Elegant, high-contrast serif that conveys luxury and craftsmanship
- Used for: Main headings, logo, product names, tagline

**Secondary Font**: "Inter" (Sans-serif) - For body text and UI elements  
- Clean, modern sans-serif ensuring excellent readability
- Used for: Body text, navigation, buttons, form labels

### Visual Hierarchy
- **H1**: 48px Playfair Display, #111111
- **H2**: 36px Playfair Display, #111111  
- **H3**: 24px Playfair Display, #111111
- **Body**: 16px Inter, #333333
- **Small**: 14px Inter, #666666

## Visual Effects & Animation

### Core Libraries Used
1. **Anime.js** - Smooth micro-interactions and page transitions
2. **Splide.js** - Elegant product image carousels
3. **ECharts.js** - Subtle data visualizations (if needed)
4. **p5.js** - Creative background effects
5. **Matter.js** - Physics-based hover effects
6. **PIXI.js** - Advanced visual effects
7. **Shader-park** - Premium background shaders

### Animation Principles
- **Subtle Motion**: All animations serve functionality, never decorative
- **Easing**: Custom cubic-bezier curves for premium feel
- **Duration**: 200-400ms for micro-interactions, 600ms for page transitions
- **Stagger**: 50ms delays between elements for organic flow

### Header Effects
**Gradient Text Animation**: Brand tagline with subtle color cycling between #111111 and #C6A667
**Parallax Scroll**: Hero section with gentle background movement (max 8% translation)

### Background Treatments
**Continuous Premium Background**: Subtle shader effect using warm neutral tones
- No section-based color changes
- Consistent luxury feel throughout
- Soft gradient overlay from #FEFEFE to #F5F5F5

### Interactive Elements
**Button Hover Effects**:
- Subtle scale: 1.0 → 1.02
- Shadow enhancement: 0 2px 8px rgba(198, 166, 103, 0.2)
- Color transition: #C6A667 → #B8956A (200ms ease)

**Product Card Animations**:
- Fade-in on scroll with 16px upward translation
- Staggered timing for grid layouts
- Hover state with elegant shadow expansion

### Image Treatment
**Product Photography Style**:
- Clean white/soft gray backgrounds
- Professional studio lighting
- Consistent shadow depth
- High-resolution, crisp details
- Angled shots showcasing craftsmanship

### Layout Principles
**Grid System**: 12-column responsive grid with 24px gutters
**Spacing Scale**: 8px base unit (8, 16, 24, 32, 48, 64, 96px)
**Container Max-Width**: 1200px for optimal reading experience
**Mobile-First**: Responsive breakpoints at 768px, 1024px, 1440px

### Luxury Details
**Micro-Interactions**:
- Form field focus states with gold accent underline
- Loading states with elegant spinner animations
- Smooth page transitions with fade effects
- Scroll-triggered animations with intersection observer

**Premium Touches**:
- Custom cursor on hover states
- Subtle texture overlays on backgrounds
- Elegant error states with helpful messaging
- Consistent border-radius (8px for cards, 4px for buttons)

## Component Styling

### Navigation Bar
- Fixed position with subtle backdrop blur
- Height: 80px desktop, 64px mobile
- Logo: 32px height, Playfair Display font
- Navigation links: 16px Inter, #111111

### Product Cards
- Background: #FFFFFF with 1px #E5E5E5 border
- Border-radius: 8px
- Shadow: 0 2px 12px rgba(0,0,0,0.08)
- Hover shadow: 0 4px 20px rgba(0,0,0,0.12)

### Buttons
**Primary**: #C6A667 background, #FFFFFF text, 48px height
**Secondary**: #FFFFFF background, #111111 text, 1px #C6A667 border
**Hover States**: Subtle color darkening, shadow enhancement

### Forms
- Input fields: 48px height, #F5F5F5 background
- Focus state: #C6A667 border, subtle glow
- Labels: 14px Inter, #666666
- Error states: #E53E3E color with helpful messaging