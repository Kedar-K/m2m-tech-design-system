import React from "react";
export function IconButton({ variant = "ghost", size = "md", label, className = "", children, ...props }) {
  const cls = ["m2m-iconbtn", "m2m-iconbtn--" + size, variant === "solid" ? "m2m-iconbtn--solid" : "", className].filter(Boolean).join(" ");
  return <button className={cls} aria-label={label} title={label} {...props}>{children}</button>;
}
