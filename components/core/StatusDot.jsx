import React from "react";
export function StatusDot({ status = "online", pulse = false, className = "", children }) {
  const cls = ["m2m-dot", "m2m-dot--" + status, pulse ? "m2m-dot--pulse" : "", className].filter(Boolean).join(" ");
  return <span className={cls}><span className="m2m-dot__led" />{children}</span>;
}
