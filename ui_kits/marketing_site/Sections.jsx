const { Card, CardBody, StatCard, Tag, Badge, Button } = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;

function Integrations() {
  const names = ["SAP", "Oracle Fusion", "ServiceNow", "PTC", "HighByte", "AWS", "Azure", "Okta"];
  return (
    <section style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 24px", textAlign: "center" }}>
        <span className="m2m-eyebrow">100+ ENTERPRISE CONNECTORS · WE ACT ON TOP, WE DON'T REPLACE</span>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
          {names.map((n) => <Tag key={n}>{n}</Tag>)}
        </div>
      </div>
    </section>
  );
}

function LoopGrid() {
  const cells = [
    ["radio", "Perceive", "Contextualize shopfloor signals from every sensor, camera and controller in real time."],
    ["layers", "Simulate", "Validate against a digital twin before any model touches the real world."],
    ["cpu", "Decide", "One deterministic rules engine executes at the edge — no round-trip to the cloud."],
    ["zap", "Act", "Close the loop into ERP, MES and EAM, with full evidence and chain of custody."],
  ];
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, marginBottom: 40 }}>
          <span className="m2m-eyebrow">THE CLOSED LOOP</span>
          <h2 style={{ fontSize: 40, margin: "12px 0 0" }}>A system that sees, decides, and acts — getting smarter every cycle.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {cells.map(([ic, t, d]) => (
            <Card key={t} variant="flat">
              <CardBody>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--brand-yellow)", color: "var(--brand-ink)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><Icon name={ic} size={22} /></div>
                <h4 style={{ margin: "0 0 8px" }}>{t}</h4>
                <p style={{ margin: 0, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.55 }}>{d}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="m2m-dark" style={{ background: "var(--neutral-950)", color: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="m2m-eyebrow" style={{ color: "var(--brand-yellow)" }}>REPRESENTATIVE OUTCOMES</span>
            <h2 style={{ fontSize: 40, margin: "12px 0 0", color: "#fff", maxWidth: 520 }}>Live in weeks. Measurable in 90 days.</h2>
          </div>
          <span style={{ fontSize: 13, color: "var(--neutral-500)", fontFamily: "var(--font-mono)" }}>300+ orgs · 9 critical industries</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          <StatCard label="OEE lift" value="30" unit="%" delta="in 180 days" direction="up" />
          <StatCard label="Downtime" value="50" unit="%" delta="unplanned failures" direction="down" />
          <StatCard label="Time to live" value="Weeks" delta="not months" direction="up" />
          <StatCard label="Blended ROI" value="290" unit="%" delta="edge + agent" direction="up" />
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <Card variant="signal" style={{ maxWidth: 900, margin: "0 auto" }}>
          <CardBody style={{ padding: 40 }}>
            <Badge tone="neutral">ENERGY · UNDER NDA</Badge>
            <p style={{ fontSize: 26, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text-strong)", lineHeight: 1.3, margin: "18px 0 24px" }}>"The energy data pipeline achieved 92% accuracy, sub-2s processing, and standardized 400k+ records — accelerating our audits and upgrades."</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", gap: 32 }}>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)" }}>92%</div><div className="m2m-eyebrow">ACCURACY</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)" }}>&lt;2s</div><div className="m2m-eyebrow">PROCESSING</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)" }}>400k+</div><div className="m2m-eyebrow">RECORDS</div></div>
              </div>
              <Button variant="outline" trailingIcon={<Icon name="arrowRight" size={16} />}>Read full case study</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

function CTA({ onCTA }) {
  return (
    <section style={{ background: "var(--brand-yellow)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <div>
          <h2 style={{ fontSize: 44, margin: 0, color: "var(--brand-ink)", letterSpacing: "-0.03em" }}>Model your AI savings.</h2>
          <p style={{ fontSize: 18, color: "var(--brand-ink)", opacity: 0.75, margin: "10px 0 0" }}>Plan your deployment roadmap with our team. Up to 75% funding available.</p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <Button variant="secondary" size="lg" onClick={onCTA}>Book a strategy session</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Integrations, LoopGrid, Metrics, CaseStudy, CTA });
