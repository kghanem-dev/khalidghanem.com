# khalidghanem.com

Source for my portfolio site. Static HTML, CSS and JavaScript, served by GitHub Pages from the root of `main`. No build step, no backend, no secrets.

## Local preview

```powershell
python -m http.server 8766
```

Then open `http://127.0.0.1:8766/`.

## Files

- `index.html`, `styles.css`, `app.js`: the page.
- `query-engine.js`: the in-browser portfolio search. It runs locally against the records in that file.
- `contribution-calendar.js`, `assets/github-contributions.js`: the GitHub contribution calendar. It shows bundled public data first, then refreshes from the public [github-contributions-api](https://github.com/grubersjoe/github-contributions-api), which needs no token.

## Content rule

Clients are described by industry only. No client names, volumes, dates or internal metrics go in this repository, including commit messages.

## Icon credits

Brand icons in `assets/` come from [Simple Icons](https://simpleicons.org/) (CC0-1.0) and [Devicon](https://github.com/devicons/devicon) (MIT). The watsonx icon is from [IBM Carbon](https://github.com/carbon-design-system/carbon) (Apache-2.0). Brand marks remain subject to their owners' trademark guidelines.
