const { StatCard, Card, CardBody, StatusDot, Badge, Tabs, Button, Tag } = window.M2MTechDesignSystem_02d78c;
const Icon = window.M2MIcon;

const DEVICES = [
  ["edge-node-01", "Compute · Line B", "online", "12.4ms", "99.98%"],
  ["humanoid-arm-07", "Actuator · Weld cell", "online", "8.1ms", "99.9%"],
  ["drone-survey-02", "Aerial · Yard scan", "warn", "41ms", "97.2%"],
  ["sensor-array-19", "Telemetry · Boiler", "online", "3.2ms", "100%"],
  ["conveyor-ctrl-11", "PLC · Line A", "online", "6.7ms", "99.95%"],
  ["amr-forklift-05", "Mobile · Dock 3", "fault", "—", "0%"],
  ["vision-cam-22", "Inspection · QA", "online", "15.0ms", "99.7%"],
];

function Overview({ onDeploy }) {
  const [tab, setTab] = React.useState("All devices");
  const rows = tab === "Faults" ? DEVICES.filter(d => d[2] !== "online") : DEVICES;
  return (
    <div style={{ padding: 24, overflow: "auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 22 }}>
        <StatCard label="Nodes online" value="41/42" delta="1 fault" direction="down" />
        <StatCard label="Avg latency" value="12.4" unit="ms" delta="edge" direction="up" />
        <StatCard label="OEE" value="87" unit="%" delta="+4.2% wk" direction="up" />
        <StatCard label="Evidence written" value="1.2M" delta="today" direction="up" />
      </div>
      <Card variant="flat">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px 0" }}>
          <Tabs tabs={["All devices", "Faults", "Idle"]} onChange={setTab} />
          <div style={{ display: "flex", gap: 8 }}><Tag>Plant 04</Tag><Button variant="ghost" size="sm" leadingIcon={<Icon name="filter" size={14} />}>Filter</Button></div>
        </div>
        <div style={{ padding: "8px 8px 12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr>{["Device", "Class", "Status", "Latency", "Uptime", ""].map((h, i) => <th key={i} style={{ textAlign: i > 2 && i < 5 ? "right" : "left", padding: "10px 14px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--neutral-500)", borderBottom: "1px solid var(--neutral-800)" }}>{h}</th>)}</tr></thead>
            <tbody>
              {rows.map((d) => (
                <tr key={d[0]} style={{ borderBottom: "1px solid var(--neutral-800)" }}>
                  <td style={{ padding: "12px 14px", fontFamily: "var(--font-mono)", fontSize: 13, color: "#fff" }}>{d[0]}</td>
                  <td style={{ padding: "12px 14px", fontSize: 13, color: "var(--neutral-400)" }}>{d[1]}</td>
                  <td style={{ padding: "12px 14px" }}><StatusDot status={d[2]} pulse={d[2] === "online"}>{d[2]}</StatusDot></td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--neutral-300)" }}>{d[3]}</td>
                  <td style={{ padding: "12px 14px", textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--neutral-300)" }}>{d[4]}</td>
                  <td style={{ padding: "12px 14px", textAlign: "right" }}><Button variant="ghost" size="sm">Inspect</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function Alerts() {
  const items = [
    ["fault", "amr-forklift-05 offline", "Dock 3 · lost heartbeat 4m ago", "CRITICAL"],
    ["warn", "drone-survey-02 latency spike", "Yard scan · 41ms (threshold 25ms)", "WARN"],
    ["warn", "Line A throughput -8%", "Conveyor controller backpressure", "WARN"],
    ["online", "MEA v2.4 rollout complete", "41 nodes on latest ruleset", "RESOLVED"],
  ];
  return (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, overflow: "auto" }}>
      {items.map((a, i) => (
        <Card key={i} variant="flat">
          <CardBody style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, flex: "none", display: "flex", alignItems: "center", justifyContent: "center", background: a[0] === "fault" ? "var(--status-fault-wash)" : a[0] === "warn" ? "var(--status-warn-wash)" : "var(--status-online-wash)", color: a[0] === "fault" ? "var(--status-fault)" : a[0] === "warn" ? "var(--status-warn)" : "var(--status-online)" }}><Icon name={a[0] === "online" ? "check" : "alert"} size={20} /></div>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}>{a[1]}</div><div style={{ fontSize: 13, color: "var(--neutral-400)", marginTop: 2 }}>{a[2]}</div></div>
            <Badge tone={a[0] === "fault" ? "fault" : a[0] === "warn" ? "warn" : "online"}>{a[3]}</Badge>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

function Placeholder({ name }) {
  return <div style={{ padding: 60, textAlign: "center", color: "var(--neutral-500)" }}><Icon name="layers" size={40} style={{ opacity: 0.4 }} /><p style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 13 }}>{name} — view stub</p></div>;
}
Object.assign(window, { Overview, Alerts, Placeholder });
