import React from "react";
export function Switch({ label, className = "", ...props }) {
  return (
    <label className={["m2m-switch", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" {...props} />
      <span className="m2m-switch__track"><span className="m2m-switch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
