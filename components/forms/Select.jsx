import React from "react";
export function Select({ label, hint, error, required, id, options = [], placeholder, className = "", children, ...props }) {
  const fid = id || (label ? "sel-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const cls = ["m2m-select", error ? "m2m-select--error" : "", className].filter(Boolean).join(" ");
  return (
    <div className="m2m-field">
      {label && <label className="m2m-label" htmlFor={fid}>{label}{required && <span className="m2m-label__req">*</span>}</label>}
      <select id={fid} className={cls} aria-invalid={!!error} {...props}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        {children}
      </select>
      {(error || hint) && <span className={"m2m-hint" + (error ? " m2m-hint--error" : "")}>{error || hint}</span>}
    </div>
  );
}
