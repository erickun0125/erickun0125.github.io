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

CI (`deploy.yml`) uses Hugo 0.154.5 extended, Go 1.22, Node.js 20. Note: CI installs deps with `npm install` (not pnpm), so both lockfiles should stay compatible.

## Architecture

**Configuration** lives in `config/_default/` (root `hugo.yaml` is empty):
- `hugo.yaml` — Hugo core settings (base URL, taxonomies, outputs)
- `params.yaml` — HugoBlox theme settings (appearance, header, footer, SEO)
- `module.yaml` — Hugo module imports (HugoBlox blox, netlify, slides)
- `menus.yaml` — Navigation menu items (About, Projects, Experience, CV)
- `languages.yaml` — Language config (English only)

**Content** is in `content/` as Markdown with YAML front matter:
- `_index.md` — Landing page using custom HTML in a `markdown` block (not the standard HugoBlox biography block). Contains profile header, about section, and education inline.
- `projects/` — Individual project pages in subdirectories with `index.md`. The landing page shows only projects with `featured: true` in front matter.
- `projects/_index.md` — Projects listing page, shows all projects in a 3-column grid.

**Author data** (`data/authors/me.yaml`) — Structured YAML with the full CV: education, work experience, skills, awards, social links. This is the primary data source for resume blocks, but the landing page biography is hand-written HTML in `content/_index.md`.

**Custom styling** — The site heavily overrides HugoBlox defaults via two files in `layouts/_partials/hooks/head-end/`:
- `custom-styles.html` — Extensive CSS overrides using `!important` to achieve a minimal, compact design (IBM Plex Sans font, 720px max-width, reduced spacing). This is the main styling customization point.
- `github-button.html` — Loads GitHub buttons script.

**Theme** is pulled via Hugo Modules from `github.com/HugoBlox/kit/modules/blox` (defined in `go.mod`). Additional custom layouts go in `layouts/`.

**Static assets**: `assets/media/` for images/icons, `static/uploads/` for downloadable files (resume.pdf).

## Content Editing Patterns

- To update personal info, education, experience, skills, or awards: edit `data/authors/me.yaml`
- To update the landing page biography/about: edit the HTML in `content/_index.md` (not `me.yaml`)
- To add a new project: create `content/projects/<slug>/index.md` with front matter (title, date, summary, tags). Set `featured: true` to show on the landing page.
- To modify navigation: edit `config/_default/menus.yaml`
- To change theme appearance (colors, fonts, spacing): edit `config/_default/params.yaml` for HugoBlox settings, or `layouts/_partials/hooks/head-end/custom-styles.html` for CSS overrides
- Page blocks (collection, markdown) are configured via `type:` and `block:` in content front matter using HugoBlox's block system

## Dependencies

- Hugo modules managed via `go.mod` / `go.sum`
- Node packages managed via pnpm (`pnpm-lock.yaml`): Tailwind CSS v4, Pagefind (search), Preact
- Package manager: pnpm 10.14.0 (specified in `package.json` `packageManager` field)
