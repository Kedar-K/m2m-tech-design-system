import React from "react";
export function Checkbox({ label, className = "", ...props }) {
  return (
    <label className={["m2m-check", className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...props} />
      <span className="m2m-check__box m2m-check__box--check">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
