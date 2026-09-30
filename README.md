# Khalid Ghanem portfolio

A minimalist dark portfolio with a persistent white profile card, compact project stories, and colorful brand icons. Everything is local; no deployment is required.

The site is static and responsive. Open `index.html` directly, or run a local preview from this folder:

```powershell
python -m http.server 8766
```

Then visit `http://127.0.0.1:8766/`. No build step or package install is needed.

The portfolio search runs locally in the browser against the resume-backed records and Khalid’s subsequent project updates in `query-engine.js`. The GitHub section is an interactive contribution calendar showing the current calendar year, with daily hover/tap details and arrow-key navigation. It displays bundled public data immediately, then refreshes from the open-source GitHub Contributions API. The source caches for up to an hour; fetch failure leaves the saved calendar usable with an honest date/status. The original supplied PNG remains unchanged in a disclosure. No daily values are inferred from the image.

The photo at `assets/khalid-ghanem.jpg` was supplied by Khalid. Brand SVGs in `assets/` come from [Simple Icons](https://simpleicons.org/) (version 5.0.0, except the Anthropic mark from the current set). Google Cloud, Python, AWS, and Supabase icons are from [Devicon](https://github.com/devicons/devicon) (MIT); the AWS wordmark has a light text fill for contrast. The Simple Icons project is distributed under CC0-1.0; individual brand marks may have their own trademark or usage guidelines. The portfolio's layout, copy, and code are separate from those marks.

The AWS multi-tenant RAG platform is marked Production following Khalid’s update. The GCP project includes the custom knowledge-base UI and RAG agent; the AWS SOP/document auditor remains labeled Client deployment. Savings and cost projections retain their estimate or client-reported qualifiers. Skills added from Khalid’s update include vector embeddings, ML, and kNN.


Client delivery, 5+ enterprise/SMB deployments, a multi-million-dollar travel client, and solution architecture for a 15+ clinic system incorporate Khalid’s updates. The healthcare platform is explicitly solution architecture with implementation by another builder. Featured credentials are selected from the supplied credential screenshot; the AWS Databricks Platform Architect entry is a Databricks accreditation, not an AWS-issued certification.

OPOR context is attributed to Nova Scotia Health: https://physicians.nshealth.ca/news/one-person-one-record-year-review . The site uses the verified Nova Scotia scope, not an unsupported Canada-wide superlative.

The healthcare architecture appears alongside deployments with an Architecture & implementation label; the visible ownership note explicitly credits Khalid with solution architecture/planning and another builder with implementation. AWS RAG timeline: a 3-day PoC followed by 2 additional weeks to production, per Khalid’s update.

Hero brand context distinguishes AWS/GCP deployments, Databricks platform expertise, watsonx technical essentials, and the IBM analyst role. Databricks and IBM SVGs are from Simple Icons; watsonx is the official IBM Carbon icon from https://github.com/carbon-design-system/carbon/blob/main/packages/icons/src/svg/32/watsonx.svg (Apache-2.0). The IBM/Carbon glyphs use light IBM blue fills for legibility on the dark canvas.

Savings audit (all three supplied resumes): healthcare retired an approximately CAD $38k/year Shopify Plus expense; GCP saved-time value is conservatively estimated at ~$88k/year and ~57 hours/week; GrappleTrak model routing reduced token cost by ~70%. The healthcare amount is the retired platform line, not a calculated net saving after AWS costs. AWS/GCP operating-cost estimates remain separate.

The focused skill groups now include Databricks and explicitly qualified watsonx essentials training, with cloud architecture/cost optimization and client/technical delivery leadership aligned to the projects. The personal note retains the credentials section’s editorial style and highlights 21+ years of martial arts.

Interactive contribution data: https://github.com/grubersjoe/github-contributions-api (public CORS endpoint; no token or backend). Bundled history in `assets/github-contributions.js` was retrieved September 30, 2026 and cross-checked against GitHub’s official public calendars for every available year, 2022–2026: 1,826 daily counts and levels matched exactly. Annual totals: 2022=1, 2023=0, 2024=0, 2025=95, 2026=1,182. The UI sums actual returned days, excludes future dates, and does not invent missing days. The rendered calendar automatically selects the current UTC year; no year selector or multi-year UI is exposed. Historical records remain in the verified bundle but are not displayed. Local file previews use the bundled script without requiring a local JSON fetch.
