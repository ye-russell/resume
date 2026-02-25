# CV Website Review — Remaining Items

Items from the comprehensive review that have **not yet been implemented**.

---

## Completed

### ~~1. Upgrade Angular to v19~~ ✅
- Upgraded from Angular **15.2.10** → **19.2.18**.
- Migrated to esbuild-based `application` builder.
- Added `standalone: false` to all NgModule-declared components.
- Migrated ng-bootstrap accordion to directive-based API.
- Escaped `@` characters in templates for Angular 19 control-flow parser.

### ~~2. Upgrade RxJS to v7~~ ✅
- Upgraded from RxJS **6.6.0** → **7.8.x**.
- Also upgraded: ng-bootstrap 14→18, @fortawesome/angular-fontawesome 0.10→1.0, FontAwesome icons to 6.7.x, Bootstrap 4→5, TypeScript 4.9→5.7, zone.js 0.11→0.15.

---

## Remaining Items (require manual action)

### 3. Optimize Background Image
- `home.component.css` loads `IMG_20170528_154326.jpg` with no optimization.
- Recommendations:
  - Convert to **WebP** format (50-70% smaller).
  - Provide a responsive `image-set()` or use `srcset` for different screen sizes.
  - Add a `<link rel="preload">` hint in `index.html` for the hero image.

### 4. Verify External Portfolio Links
- Several projects link to hosts that may be offline:
  - **Heroku** (`peaceful-shore-72566.herokuapp.com`) — Heroku discontinued free dynos in Nov 2022.
  - **AWS S3** static hosting for English for Kids.
  - **CodeSandbox** for Keeper app.
  - **GitHub Pages** links for older projects.
- Audit all links manually. Replace broken ones with screenshots or remove them.

### 5. Connect Formspree Contact Form
- The contact form HTML has been added with `action="https://formspree.io/f/your-form-id"`.
- **Action required:** Create a free Formspree account, get your form endpoint ID, and replace `your-form-id` in [contact.component.html](src/app/contact/contact.component.html).

### 6. Set OG Image URL
- `og:image` and `twitter:image` meta tags have been added but use a relative path (`assets/photo.png`).
- **Action required:** Replace with an absolute URL once the site is deployed (e.g., `https://your-domain.com/assets/photo.png`).

### 7. Expand Unit Tests
- All spec files exist but likely only contain the default `should create` test.
- Add meaningful tests for:
  - Archive toggle behavior in `AboutComponent`.
  - Modal open/close in `PortfolioComponent` and `ModalComponent`.
  - Breakpoint observer logic in `HeaderComponent`.
  - Route navigation and 404 redirect.

### 8. Reduce Bundle Size
- Current initial bundle is 624kB (exceeds the 500kB budget warning).
- Options:
  - Remove Bootstrap CSS if ng-bootstrap is sufficient.
  - Use tree-shakeable Bootstrap utilities only.
  - Lazy-load the About and Portfolio routes.

---

## Summary

| Priority | Count | Effort |
|----------|-------|--------|
| **Done** | 2 | ~~Angular/RxJS upgrade~~ ✅ |
| **High** | 1 | Formspree setup (small) |
| **Medium** | 4 | Image optimization, link auditing, OG URL, bundle size |
| **Low** | 1 | Unit tests |
