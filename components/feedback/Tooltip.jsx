import React from "react";
export function Tooltip({ content, className = "", children }) {
  return <span className={"m2m-tt " + className} tabIndex={0}>{children}<span className="m2m-tt__bubble" role="tooltip">{content}</span></span>;
}
