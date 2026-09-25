const { Button, Badge, StatusDot } = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;
function Hero({ onCTA }) {
  const loop = ["Perceive", "Simulate", "Decide", "Act"];
  return (
    <section className="m2m-dark" style={{ background: "radial-gradient(1200px 500px at 70% -10%, rgba(255,206,0,0.14), transparent 60%), var(--neutral-950)", color: "var(--neutral-25)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 64px", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "center" }}>
        <div>
          <span className="m2m-eyebrow" style={{ color: "var(--brand-yellow)" }}>INDUSTRIAL OPERATING LAYER</span>
          <h1 style={{ fontSize: 62, lineHeight: 1.02, letterSpacing: "-0.03em", margin: "16px 0 20px", color: "#fff" }}>Physical AI,<br/>under <span style={{ color: "var(--brand-yellow)" }}>chain of custody.</span></h1>
          <p style={{ fontSize: 19, color: "var(--neutral-300)", maxWidth: 520, margin: "0 0 28px", lineHeight: 1.55 }}>One rules engine, one evidence fabric, one chain of custody across every robot, humanoid, drone and sensor you deploy. Live on your line in weeks, not months.</p>
          <div style={{ display: "flex", gap: 14, marginBottom: 34 }}>
            <Button size="lg" onClick={onCTA} trailingIcon={<Icon name="arrowRight" size={18} />}>Run an AI opportunity assessment</Button>
            <Button size="lg" variant="outline" style={{ color: "#fff", borderColor: "var(--neutral-700)" }} leadingIcon={<Icon name="play" size={18} />}>Watch the loop</Button>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {loop.map((s, i) => (
              <React.Fragment key={s}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", color: "var(--neutral-400)", textTransform: "uppercase" }}>{s}</span>
                {i < 3 && <Icon name="chevronRight" size={13} style={{ color: "var(--neutral-600)" }} />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div style={{ background: "var(--neutral-900)", border: "1px solid var(--neutral-800)", borderRadius: 14, padding: 20, boxShadow: "var(--shadow-lg)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <StatusDot status="online" pulse>Fleet · live</StatusDot>
            <Badge tone="brand">MEA v2.4</Badge>
          </div>
          {[["edge-node-01", "Plant 04 · Line B", "online", "12.4ms"], ["humanoid-arm-07", "Weld cell", "online", "8.1ms"], ["drone-survey-02", "Yard scan", "warn", "41ms"], ["sensor-array-19", "Boiler room", "online", "3.2ms"]].map((r) => (
            <div key={r[0]} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderTop: "1px solid var(--neutral-800)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <StatusDot status={r[2]} />
                <div><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#fff" }}>{r[0]}</div><div style={{ fontSize: 12, color: "var(--neutral-500)" }}>{r[1]}</div></div>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--neutral-400)" }}>{r[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
