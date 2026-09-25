import React from "react";
export function Tag({ onRemove, className = "", children }) {
  const cls = ["m2m-tag", onRemove ? "m2m-tag--removable" : "", className].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      {children}
      {onRemove && <span className="m2m-tag__x" role="button" aria-label="Remove" onClick={onRemove}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </span>}
    </span>
  );
}
