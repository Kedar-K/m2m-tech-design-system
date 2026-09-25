import React, { useState } from "react";
export function Tabs({ tabs = [], value, defaultValue, onChange, className = "" }) {
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value ?? internal;
  const set = (v) => { setInternal(v); onChange && onChange(v); };
  return (
    <div className={"m2m-tabs " + className} role="tablist">
      {tabs.map((t) => {
        const v = t.value ?? t; const label = t.label ?? t;
        return <button key={v} role="tab" aria-selected={active === v} className={"m2m-tab" + (active === v ? " m2m-tab--active" : "")} onClick={() => set(v)}>{label}</button>;
      })}
    </div>
  );
}
