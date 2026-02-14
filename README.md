# Community Club — Website

A lightweight, responsive website scaffold for a local community club. Designed to be easy to customize, mobile-friendly, and accessible.

## Files
- `index.html` — Home page
- `about.html` — About the club
- `events.html` — Events listing
- `contact.html` — Contact page (demo form)
- `style.css` — Site styles (CSS variables and responsive rules)
- `script.js` — Small JS for mobile navigation and form demo

## Features
- Responsive layout with a hero, cards, and event grid
- CSS variables for an easy color scheme (supports dark mode)
- Accessible mobile navigation (`aria-expanded` + focus styles)
- Small JS demo for form validation and current year in the footer

## Quick start
1. Open `index.html` in your browser to view the site.
2. Or serve locally from the project folder:

```bash
# Python 3 (cross-platform)
python -m http.server 8000

# then open http://localhost:8000
```

## Customization
- Change the site title and content directly in the HTML files.
- Update colors and spacing in `style.css`. The top of the file declares CSS variables (look for `:root`).
- To enable a working contact form, wire `contact.html` to a backend endpoint or use a form service (Formspree, Netlify Forms, etc.).

## Accessibility notes
- Navigation toggle updates `aria-expanded` and toggles a visible menu state.
- Focus outlines have been added to interactive elements for keyboard users.
- Responsive typography and layout ensure readability on small screens.

## Contributing
PRs welcome — edit HTML/CSS/JS and open a pull request.

## License
This project is provided as-is; add a license file if you want to set terms.

Open `index.html` in your browser to preview changes.
