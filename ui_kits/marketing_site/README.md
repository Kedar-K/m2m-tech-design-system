# M2M Tech — Marketing Site UI kit

High-fidelity recreation of the M2M Tech marketing homepage (m2mtechconnect.com),
positioning M2M as *"the industrial operating layer for Physical AI."*

**Run:** open `index.html` — a full scrolling marketing page. The "Book a session"
CTAs open a lead-capture Dialog.

Screens / sections (each a small JSX file, mounted to `window`):
- `Header.jsx` — sticky dark nav with logo, links, sign-in + CTA.
- `Hero.jsx` — dark radial hero, headline, dual CTAs, live-fleet preview card.
- `Sections.jsx` — `Integrations` (connector tags), `LoopGrid` (Perceive/Simulate/Decide/Act), `Metrics` (dark KPI band), `CaseStudy` (signal card quote), `CTA` (yellow band).
- `Footer.jsx` — dark footer with link columns.

Composes design-system primitives (Button, Badge, StatCard, Card, Tag, StatusDot,
Logo, Dialog, Input, Select) — no re-implemented components. Icons come from
`../_shared/Icons.jsx` (Lucide paths).
