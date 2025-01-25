# Toronto Jazz Extravaganza Website

A responsive website for a music festival, featuring a home page and a ticket purchase page.  
**Group 5 | Project-G05**

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Features
### Home Page
- **Festival Details**: Date, location, and description.
- **Tickets & Pricing**: Two ticket options (General/VIP) with "Buy Tickets" links.
- **Dynamic Performers**: 3 artists displayed using JavaScript object literals.
- **Responsive Design**: Mobile-friendly layout with CSS media queries.

### Purchase Ticket Page
- **Form Validation**:  
  - Minimum 1 ticket required.  
  - 6-digit credit card validation.  
- **Order Summary**: Calculates subtotal, tax (13%), and total price.

### Shared Components
- **Header**: Consistent navigation menu across pages.  
- **Footer**: Copyright notice and social media icons.  
- **Styling**: Unified color scheme (#f7d74b yellow + black/white).

---

## Installation
1. Clone/download the `Project-G05` folder.  
2. Open `index.html` in a web browser (Chrome recommended).  
3. Test in **Incognito Mode** to ensure no cached files interfere.

---

## Known Issues
- **Form Validation**:  
  - Limited to client-side checks (no server-side validation).  
  - Credit card input allows non-numeric characters (though invalid submissions are blocked).  
- **Image Paths**: Assumes an `images/` folder exists with correct filenames.  
- **Browser Compatibility**: Optimized for Chrome; minor styling inconsistencies may occur in other browsers.

---

## Future Improvements
1. **Backend Integration**:  
   - Payment processing (e.g., Stripe API).  
   - User account system for ticket tracking.  
2. **Additional Pages**:  
   - Schedule/lineup page with real-time updates.  
   - Artist/movie detail pages.  
3. **Accessibility**:  
   - ARIA labels for screen readers.  
   - Improved contrast ratios.  
4. **Features**:  
   - Search/filter for performers.  
   - Interactive seat map for ticket selection.  
5. **Security**:  
   - HTTPS implementation.  
   - Server-side validation for credit card data.

---

## Credits
- **Developed By**: Arjun Bishnoi.
- **Icons**: Social media icons sourced from [Flaticon](https://www.flaticon.com/).
- **Images**: Festival banner and performer photos from stock images and logo and colour maker websites.

---

## License  
This project is part of an academic assignment. All rights reserved by the course instructor.  

---