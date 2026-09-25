import React from "react";
export function Radio({ label, className = "", ...props }) {
  return (
    <label className={["m2m-check", className].filter(Boolean).join(" ")}>
      <input type="radio" {...props} />
      <span className="m2m-check__box m2m-check__box--radio"><span className="m2m-check__radio-fill" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
