# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo Academic CV site for Kyungseo Park, deployed to GitHub Pages at https://erickun0125.github.io/. Built with HugoBlox theme framework and Tailwind CSS v4.

## Build & Development Commands

```bash
# Local dev server (hot reload)
pnpm dev

# Production build (minified + search index)
pnpm build

# Build search index only
pnpm run pagefind
```

CI (`deploy.yml`) uses Hugo 0.154.5 extended, Go 1.22, Node.js 20. It downloads the module versions pinned in `go.mod` with `hugo mod graph`; do not use `hugo mod get` during deployment, because it upgrades the theme. CI installs deps with `npm install` (not pnpm), so both lockfiles should stay compatible.

## Architecture

**Configuration** lives in `config/_default/` (root `hugo.yaml` is empty):
- `hugo.yaml` — Hugo core settings (base URL, taxonomies, outputs)
- `params.yaml` — HugoBlox theme settings (appearance, header, footer, SEO)
- `module.yaml` — Hugo module imports (HugoBlox blox, netlify, slides)
- `menus.yaml` — Navigation menu items (About, Education, Publications, Experience, Projects, CV)
- `languages.yaml` — Language config (English only)

**Content** is in `content/` as Markdown with YAML front matter:
- `_index.md` — Landing page using the `research-profile` shortcode in a `markdown` block. The profile partial renders Education, Publications, Experience, and Featured Projects from structured data.
- `projects/` — Individual project pages in subdirectories with `index.md`. The landing page selects projects through `data/portfolio.yaml`.
- `projects/_index.md` — Projects listing using the `project-cards` shortcode; displays the four selected projects in a horizontal carousel.

**Profile data** — `data/authors/me.yaml` contains affiliation, education, ordered experience cards, skills, and social links. `data/publications.yaml` contains publications and resource links. `data/portfolio.yaml` contains the four Featured Projects in order: SWIVL, LIVerse, K-Startup Challenge, Auto Balancing Case. Presentation is in `layouts/_partials/profile-home.html` and its card/media partials.

**Media layout** — Experience cards use two media columns on desktop. `media_size: compact` caps the RAI Lab video at 360px; `media_size: dense` caps Rosota, Sequor, and SNU media at 420px. SNU figures use equal 4:3 frames with contained images. Experience media have no visible captions. Featured Projects use square media frames; K-Startup allocates 60% to video and 40% to its smaller image. The carousel advances every six seconds and supports pause, buttons, keyboard arrows, and reduced motion. All MP4 files physically lack audio except K-Startup, whose audio is retained with muted autoplay as the default.

**Institution links** — Experience headings link to `org_url`. Header lab links use `current_lab_url` and `previous_lab_url`; the current education entry uses `lab` and `lab_url`. Keep official URLs consistent when editing these fields.

**Custom styling** — The site heavily overrides HugoBlox defaults via two files in `layouts/_partials/hooks/head-end/`:
- `custom-styles.html` — Minimal academic profile styling with system sans typography, a serif name, a 1000px outer width, responsive cards, and scoped profile selectors. This is the main styling customization point.
- `github-button.html` — Loads GitHub buttons script.
- `profile-navigation.html` — Loads the small navigation enhancement in `assets/js/profile-navigation.js`, providing keyboard control and expanded-state announcements for the theme's mobile checkbox menu.

**Theme** is pulled via Hugo Modules from `github.com/HugoBlox/kit/modules/blox` (defined in `go.mod`). Additional custom layouts go in `layouts/`.

**Static assets**: `assets/media/` for images/icons, `static/uploads/` for downloadable files (resume.pdf).

## Content Editing Patterns

- To update personal info, education, experience, skills, or awards: edit `data/authors/me.yaml`
- To update the landing page introductory prose: the research paragraph uses `bio` from `data/authors/me.yaml`; the current and previous affiliation paragraph is in `layouts/_partials/profile-home.html`. Keep site metadata consistent. The introduction covers control and planning of dynamic systems, physical intelligence through learning, and real-world manipulation and locomotion. Update role, experience, and education in `data/authors/me.yaml`.
- Experience cards use a research `title` and optional `summary`. The SNU card uses Impedance Control & Bimanual Manipulation and summarizes the first-author CoRL research.
- To add a publication: edit `data/publications.yaml`. Each publication is a bordered card ordered title → authors → venue and distinction → resource links → summary. Display CoRL 2026 and Spotlight without accepted or camera-ready progress labels. Leave `paper_url` empty until a public PDF is available.
- To add a project: create `content/projects/<slug>/index.md` with front matter. Edit `data/portfolio.yaml` to control the selected cards and their order; `featured: true` alone does not add a homepage card.
- To modify navigation: edit `config/_default/menus.yaml`
- To change theme appearance (colors, fonts, spacing): edit `config/_default/params.yaml` for HugoBlox settings, or `layouts/_partials/hooks/head-end/custom-styles.html` for CSS overrides
- Page blocks (collection, markdown) are configured via `type:` and `block:` in content front matter using HugoBlox's block system

The current configuration and refresh history are documented in `docs/PROFILE_REFRESH.md`. SWIVL, LIVerse, and Auto Balancing Case detail pages remain as drafts and must not appear in production; shared images are served from `static/projects/`. Keep original and unused media outside the published source tree. The editable CV source remains in the adjacent `CV` repository; synchronize its verified PDF to `static/uploads/cv_kyungseopark.pdf` and the legacy `static/uploads/CV_KyungseoPark.pdf` URL. For local previews, use `hugo server --disableFastRender --renderToMemory` so stale disk output cannot expose draft pages.

## Dependencies

- Hugo modules managed via `go.mod` / `go.sum`
- Node packages managed via pnpm (`pnpm-lock.yaml`): Tailwind CSS v4, Pagefind (search), Preact
- Package manager: pnpm 10.14.0 (specified in `package.json` `packageManager` field)
