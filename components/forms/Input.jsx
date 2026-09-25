import React from "react";
export function Input({ label, hint, error, required, id, className = "", ...props }) {
  const fid = id || (label ? "in-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const inputCls = ["m2m-input", error ? "m2m-input--error" : "", className].filter(Boolean).join(" ");
  return (
    <div className="m2m-field">
      {label && <label className="m2m-label" htmlFor={fid}>{label}{required && <span className="m2m-label__req">*</span>}</label>}
      <input id={fid} className={inputCls} aria-invalid={!!error} {...props} />
      {(error || hint) && <span className={"m2m-hint" + (error ? " m2m-hint--error" : "")}>{error || hint}</span>}
    </div>
  );
}
