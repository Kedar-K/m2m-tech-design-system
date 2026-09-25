const { Button, Logo } = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function SiteHeader({ onCTA }) {
  const [open, setOpen] = React.useState(false);
  const nav = ["Platform", "Industries", "Evidence", "Partners", "Company"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(10,11,13,0.82)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--neutral-800)" }} className="m2m-dark">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo size={34} src="../../assets/logo-mark.jpeg" />
        <nav style={{ display: "flex", gap: 30 }}>
          {nav.map((n) => <a key={n} href="#" style={{ color: "var(--neutral-300)", fontSize: 14, fontWeight: 500 }}>{n}</a>)}
        </nav>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#" style={{ color: "var(--neutral-200)", fontSize: 14, fontWeight: 600 }}>Sign in</a>
          <Button size="sm" onClick={onCTA} trailingIcon={<Icon name="arrowRight" size={16} />}>Book a session</Button>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
