# Product Requirements Document (PRD)
## Cargo Plus - Logistics & Supply Chain Website

---

## 1. Product Overview

**Product Name:** Cargo Plus Website  
**Version:** 1.0  
**Date:** December 2025  
**Owner:** Product Team

### 1.1 Purpose
A modern, responsive marketing website for Cargo Plus, a logistics and supply chain company operating across India. The website serves as the primary digital touchpoint for potential customers to learn about services, request quotes, and contact the company.

### 1.2 Target Audience
- Small and Medium Enterprises (SMEs)
- Manufacturers
- E-commerce brands
- B2B businesses requiring logistics services

---

## 2. Goals & Objectives

### 2.1 Business Goals
- Generate qualified leads through quote requests
- Establish trust and credibility in the logistics market
- Clearly communicate service offerings and value propositions
- Provide easy contact methods for urgent inquiries

### 2.2 User Goals
- Quickly understand services offered
- Get transparent pricing information
- Request quotes easily
- Track shipments (future feature)
- Contact company for support

---

## 3. Functional Requirements

### 3.1 Navigation
- **Fixed Header Navigation**
  - Logo with company name
  - Navigation links: Home, Services, Why Us, Contact
  - CTA buttons: "Get a Quote" and "Call Now"
  - Mobile-responsive hamburger menu

### 3.2 Hero Section
- Compelling headline and tagline
- Brief value proposition
- Three key service highlights (badges/chips)
- Dual CTAs: "Get a Free Quote" and "View Services"
- Background image or gradient

### 3.3 Live Shipment Experience (Interactive Demo)
- Visual representation of shipment tracking
- Example route display (Bengaluru → Mumbai)
- Key metrics display:
  - 98% On-time delivery rate
  - GPS Tracking status
  - e-POD Proof indicator
- ETA status indicator
- Animated or interactive elements to demonstrate tracking capability

### 3.4 Services Section
- Three service cards with icons:
  1. **Road Transport (FTL & LTL)**
     - Description
     - Key features (bullet points)
  2. **Warehousing & Distribution**
     - Description
     - Key features (bullet points)
  3. **Last-Mile & E-Commerce**
     - Description
     - Key features (bullet points)

### 3.5 Why Cargo Plus Section
- Four trust-building elements with icons:
  1. Real-Time Tracking
  2. SOP-Driven Handling
  3. Transparent Pricing
  4. Dedicated Support
- "At a Glance" summary box with key differentiators

### 3.6 Contact/Quote Request Section
- **Quote Request Form**
  - Fields: Name, Phone, From City, To City, Cargo Details (textarea)
  - Submit button: "Request Quote"
  - Response time message
  
- **Direct Contact Information**
  - Phone number (clickable tel: link)
  - Email address (clickable mailto: link)
  - Working hours
  - Physical location
  - 24x7 monitoring note

### 3.7 Footer
- Copyright notice
- Navigation links (Home, Services, Why Us, Contact)
- Minimalist design

---

## 4. Technical Requirements

### 4.1 Technology Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Responsive Framework:** Custom CSS Grid/Flexbox
- **Icons:** Font Awesome or similar icon library
- **Fonts:** Google Fonts (modern sans-serif)

### 4.2 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 4.3 Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### 4.4 Performance Requirements
- Page load time: < 3 seconds
- First Contentful Paint: < 1.5 seconds
- Lighthouse Performance Score: > 90

### 4.5 Form Handling
- Client-side validation for all form fields
- Phone number format validation (Indian format)
- Email validation
- Required field indicators
- Success/error message display
- Form submission (can be mock or real endpoint)

---

## 5. Design Requirements

### 5.1 Visual Style
- **Color Scheme:**
  - Primary: Professional blue (#0066CC or similar)
  - Secondary: Orange/amber for CTAs (#FF6B00 or similar)
  - Neutral: Grays for text and backgrounds
  - Success: Green for positive indicators
  
- **Typography:**
  - Headings: Bold, modern sans-serif (e.g., Inter, Poppins)
  - Body: Clean, readable sans-serif (16px base)
  - Hierarchy: Clear distinction between H1, H2, H3

- **Spacing:**
  - Generous whitespace between sections
  - Consistent padding and margins
  - Card-based layouts with subtle shadows

### 5.2 Components
- **Buttons:**
  - Primary: Filled with primary color
  - Secondary: Outlined or secondary color
  - Hover states with smooth transitions
  
- **Cards:**
  - Subtle shadow or border
  - Hover effects (lift or highlight)
  - Icon at top or left
  
- **Icons:**
  - Consistent style (line or solid)
  - Appropriate size (24-32px typically)
  - Color matching design system

### 5.3 Animations
- Smooth scroll to sections
- Fade-in on scroll for sections
- Button hover effects
- Form field focus states
- Mobile menu slide-in animation
- Live shipment demo with subtle animation

---

## 6. User Interactions

### 6.1 Navigation
- Smooth scroll to section anchors
- Highlight active section in navigation
- Mobile menu toggle
- Sticky header on scroll

### 6.2 CTAs
- "Get a Quote" - scrolls to contact form
- "Call Now" - initiates phone call on mobile
- "View Services" - scrolls to services section

### 6.3 Form Submission
1. User fills out form
2. Client-side validation runs
3. Show loading state on button
4. Display success message
5. Optional: Clear form or redirect

### 6.4 Accessibility
- Keyboard navigation support
- ARIA labels for screen readers
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Alt text for images

---

## 7. Content Requirements

### 7.1 Copy Tone
- Professional yet approachable
- Clear and concise
- Trust-building language
- Action-oriented CTAs

### 7.2 Required Content
- Company tagline
- Service descriptions (3)
- Value propositions (4)
- Contact details
- Legal/copyright notice

### 7.3 Imagery
- Hero background image (logistics/trucks)
- Service icons (3)
- Why Us icons (4)
- Optional: Team or facility photos

---

## 8. Future Enhancements

### Phase 2 Features
- Live shipment tracking portal (login required)
- Customer testimonials section
- Blog/resources section
- Multi-language support
- Rate calculator tool
- Integration with CRM/backend system
- Email notifications for quote requests
- Live chat support
- Case studies/success stories

---

## 9. Success Metrics

### 9.1 Key Performance Indicators (KPIs)
- Quote request form submissions per week
- Phone call click-through rate
- Average session duration
- Bounce rate
- Mobile vs desktop traffic ratio
- Page scroll depth

### 9.2 Conversion Goals
- Primary: Quote request submission
- Secondary: Phone call initiation
- Tertiary: Email contact

---

## 10. Constraints & Assumptions

### 10.1 Constraints
- Single-page application (no multi-page routing initially)
- No backend integration in MVP
- No user authentication system
- Static content (no CMS)

### 10.2 Assumptions
- Users have modern browsers with JavaScript enabled
- Primary traffic from Indian market
- Most users will access via mobile devices
- Quote requests will be handled manually by team

---

## 11. Launch Checklist

- [ ] Design mockups approved
- [ ] Development complete
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verified
- [ ] Form validation tested
- [ ] Content proofread
- [ ] Performance optimization
- [ ] SEO meta tags added
- [ ] Analytics tracking implemented
- [ ] Domain and hosting configured
- [ ] SSL certificate installed
- [ ] Backup system in place

---

## 12. Maintenance & Support

### 12.1 Regular Updates
- Content updates (quarterly)
- Security patches (as needed)
- Performance monitoring (monthly)
- Analytics review (monthly)

### 12.2 Support Contacts
- Technical issues: Development team
- Content updates: Marketing team
- Urgent downtime: Hosting provider support

