const { Logo, StatusDot, IconButton, Badge } = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function Sidebar({ active, onNav }) {
  const items = [["grid","Overview"],["map","Fleet"],["bell","Alerts"],["layers","Pipelines"],["shield","Evidence"],["settings","Settings"]];
  return (
    <aside style={{ width: 232, background: "var(--neutral-950)", borderRight: "1px solid var(--neutral-800)", display: "flex", flexDirection: "column", flex: "none" }}>
      <div style={{ padding: "18px 18px", borderBottom: "1px solid var(--neutral-800)" }}><Logo size={30} src="../../assets/logo-mark.jpeg" /></div>
      <nav style={{ padding: 12, display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
        {items.map(([ic, label]) => {
          const on = active === label;
          return (
            <button key={label} onClick={() => onNav(label)} style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, textAlign: "left", background: on ? "var(--neutral-800)" : "transparent", color: on ? "#fff" : "var(--neutral-400)" }}>
              <Icon name={ic} size={18} style={{ color: on ? "var(--brand-yellow)" : "var(--neutral-500)" }} />{label}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: 16, borderTop: "1px solid var(--neutral-800)" }}>
        <StatusDot status="online" pulse>All systems live</StatusDot>
      </div>
    </aside>
  );
}
function Topbar({ title, onDeploy }) {
  const { Button, Input } = window.M2MTechDesignSystem_02d78c;
  return (
    <div style={{ height: 62, borderBottom: "1px solid var(--neutral-800)", background: "var(--neutral-900)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 22px", flex: "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h3 style={{ margin: 0, fontSize: 19, color: "#fff" }}>{title}</h3>
        <Badge tone="online" dot>Plant 04</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <Icon name="search" size={16} style={{ position: "absolute", left: 10, color: "var(--neutral-500)" }} />
          <input placeholder="Search devices…" style={{ background: "var(--neutral-950)", border: "1px solid var(--neutral-700)", borderRadius: 6, color: "#fff", padding: "8px 12px 8px 32px", fontSize: 13, fontFamily: "var(--font-sans)", width: 200 }} />
        </div>
        <IconButton label="Alerts" style={{ color: "var(--neutral-300)" }}><Icon name="bell" size={18} /></IconButton>
        <Button size="sm" onClick={onDeploy} leadingIcon={<Icon name="zap" size={15} />}>Deploy</Button>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--brand-yellow)", color: "var(--brand-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-display)", fontSize: 14 }}>AR</div>
      </div>
    </div>
  );
}
Object.assign(window, { Sidebar, Topbar });
