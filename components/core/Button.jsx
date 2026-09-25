import React from "react";
export function Button({ variant = "primary", size = "md", block = false, leadingIcon, trailingIcon, as = "button", className = "", children, ...props }) {
  const Tag = as;
  const cls = ["m2m-btn", "m2m-btn--" + variant, "m2m-btn--" + size, block ? "m2m-btn--block" : "", className].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...props}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </Tag>
  );
}
