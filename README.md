# a11y-demo-app

A small React app **deliberately full of accessibility violations**, used as a
target for the a11y agent demo: connect it, scan it, and the agent automatically
opens a PR fixing every issue with AI-written explanations.

## What the scanner finds

This app intentionally trips ~9 rule groups (14 violations total) such as:

- Missing `alt` on images (`img-alt`)
- Links without valid `href` (`anchor-valid`)
- Non-interactive elements with click handlers (`click-keyboard`, `static-events`)
- `tabIndex` misuse (`tabindex-positive`, `noninteractive-tabindex`)
- `iframe` without a `title` (`iframe-title`)
- `mouseover`/`mouseout` without focus/blur (`mouse-keyboard`)
- `audio` without captions (`media-caption`)

## Local development

```bash
npm install --legacy-peer-deps
npm run lint          # shows the a11y violations via eslint-plugin-jsx-a11y
```

## Push to GitHub

```bash
git init
git add .
git commit -m "a11y-heavy demo app"
git branch -M main
git remote add origin git@github.com:<you>/a11y-demo-app.git
git push -u origin main
```

Then connect it in the a11y agent UI with `AUTO_PR=true` to auto-raise a PR with
AI-generated fixes.
