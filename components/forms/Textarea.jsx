import React from "react";
export function Textarea({ label, hint, error, required, id, className = "", ...props }) {
  const fid = id || (label ? "ta-" + label.replace(/\\s+/g, "-").toLowerCase() : undefined);
  const cls = ["m2m-textarea", error ? "m2m-textarea--error" : "", className].filter(Boolean).join(" ");
  return (
    <div className="m2m-field">
      {label && <label className="m2m-label" htmlFor={fid}>{label}{required && <span className="m2m-label__req">*</span>}</label>}
      <textarea id={fid} className={cls} aria-invalid={!!error} {...props} />
      {(error || hint) && <span className={"m2m-hint" + (error ? " m2m-hint--error" : "")}>{error || hint}</span>}
    </div>
  );
}
