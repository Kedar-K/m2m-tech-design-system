import React from "react";
export function Dialog({ open, title, onClose, footer, className = "", children }) {
  if (!open) return null;
  return (
    <div className="m2m-overlay" onClick={onClose}>
      <div className={"m2m-dialog " + className} role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="m2m-dialog__header">
            <h2 className="m2m-dialog__title">{title}</h2>
            <button className="m2m-iconbtn m2m-iconbtn--sm" aria-label="Close" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
        )}
        <div className="m2m-dialog__body">{children}</div>
        {footer && <div className="m2m-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
