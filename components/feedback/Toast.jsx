import React from "react";
export function Toast({ tone = "brand", title, children, onClose, className = "" }) {
  return (
    <div className={"m2m-toast m2m-toast--" + tone + " " + className} role="status">
      <div style={{ flex: 1 }}>
        {title && <p className="m2m-toast__title">{title}</p>}
        {children && <p className="m2m-toast__msg">{children}</p>}
      </div>
      {onClose && <button className="m2m-iconbtn m2m-iconbtn--sm" aria-label="Dismiss" onClick={onClose} style={{ color: "var(--neutral-400)" }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>}
    </div>
  );
}
