const { Logo } = window.M2MTechDesignSystem_02d78c;
function SiteFooter() {
  const cols = {
    Platform: ["MEA Edge AI", "Rules engine", "Evidence fabric", "Chain of custody"],
    Industries: ["Manufacturing", "Energy", "Logistics", "Data centers"],
    Company: ["About", "Partners", "Careers", "Contact"],
  };
  return (
    <footer className="m2m-dark" style={{ background: "var(--neutral-950)", color: "var(--neutral-400)", borderTop: "1px solid var(--neutral-800)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 32px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }}>
        <div>
          <Logo size={34} src="../../assets/logo-mark.jpeg" />
          <p style={{ fontSize: 13, marginTop: 16, maxWidth: 240, lineHeight: 1.6 }}>The industrial operating layer for Physical AI. Plants, fleets, data centers, airports, energy sites.</p>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h}>
            <div className="m2m-eyebrow" style={{ color: "var(--neutral-500)", marginBottom: 14 }}>{h}</div>
            {items.map((i) => <a key={i} href="#" style={{ display: "block", color: "var(--neutral-300)", fontSize: 14, marginBottom: 10 }}>{i}</a>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", borderTop: "1px solid var(--neutral-800)", display: "flex", justifyContent: "space-between", fontSize: 12, fontFamily: "var(--font-mono)" }}>
        <span>© 2026 M2M TECH · CODE AI</span><span>British Columbia, Canada</span>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
