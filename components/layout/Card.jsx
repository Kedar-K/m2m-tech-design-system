import React from "react";
export function Card({ variant = "flat", interactive = false, className = "", children, ...props }) {
  const cls = ["m2m-card", "m2m-card--" + variant, interactive ? "m2m-card--interactive" : "", className].filter(Boolean).join(" ");
  return <div className={cls} {...props}>{children}</div>;
}
export function CardBody({ className = "", children }) { return <div className={"m2m-card__body " + className}>{children}</div>; }
export function CardHeader({ className = "", children }) { return <div className={"m2m-card__header " + className}>{children}</div>; }
export function CardFooter({ className = "", children }) { return <div className={"m2m-card__footer " + className}>{children}</div>; }
