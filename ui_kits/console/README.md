# M2M Tech — Ops Console UI kit

Dark fleet-operations console for the MEA (M2M Edge AI) platform — monitoring
robots, humanoids, drones and sensors across a plant.

**Run:** open `index.html`. Sidebar nav switches views (Overview ↔ Alerts ↔
stubs); the topbar **Deploy** button opens a ruleset-deployment Dialog.

Files:
- `Shell.jsx` — `Sidebar` (nav + system status) and `Topbar` (title, search, deploy, avatar).
- `Views.jsx` — `Overview` (KPI StatCards + device table with live StatusDots + Tabs),
  `Alerts` (severity-coded alert list), `Placeholder` (view stub).

Runs on the `.m2m-dark` token scope. Composes StatCard, Card, Tabs, Badge,
StatusDot, Button, Tag, Dialog, Select, Checkbox. Icons from `../_shared/Icons.jsx`.
