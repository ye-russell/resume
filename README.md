# Resume — Yerassyl Bekberov

Personal portfolio & CV website built with **Angular 19**, **Bootstrap 5**, and **ng-bootstrap 18**.

🔗 Live: [ye-russell.github.io](https://ye-russell.github.io) (or your deployment URL)

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Angular 19 |
| UI | Bootstrap 5.3, ng-bootstrap 18 |
| Icons | FontAwesome 6 (angular-fontawesome) |
| State | RxJS 7.8 |
| Language | TypeScript 5.7 |
| Build | Angular CLI (esbuild application builder) |

## Features

- Responsive single-page application with route-based navigation
- Home, About, CV, Portfolio, and Contact pages
- Dark mode via `prefers-color-scheme` media query
- Embedded React micro-apps (Crossword, Catch Game) in portfolio modals
- Lazy YouTube iframe loading
- Skip-to-content accessibility link
- Google Analytics 4 integration
- Formspree-ready contact form

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
ng serve

# Production build
ng build

# Run unit tests
ng test
```

## Project Structure

```
src/app/
├── header/          # Navbar with responsive collapse
├── footer/          # Site footer
├── home/            # Landing page with hero section
├── about/           # Bio, priorities, and learning path accordion
├── cv/              # Embedded PDF CV viewer
├── portfolio/       # Work experience & pet project cards
├── modal/           # Inline modal for embedded demos
├── contact/         # Contact details & form
├── privacy-policy/  # Privacy policy page
└── services/        # Google Analytics service
```

## Deployment

Build artifacts are output to `dist/resume/`. A `_redirects` file is included for Netlify SPA routing.

To deploy to GitHub Pages:

```bash
ng deploy --base-href=/resume/
```
