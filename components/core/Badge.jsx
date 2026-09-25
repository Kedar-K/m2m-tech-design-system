import React from "react";
export function Badge({ tone = "neutral", dot = false, className = "", children }) {
  const cls = ["m2m-badge", "m2m-badge--" + tone, className].filter(Boolean).join(" ");
  return <span className={cls}>{dot && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor" }} />}{children}</span>;
}
