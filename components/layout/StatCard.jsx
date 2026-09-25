import React from "react";
export function StatCard({ label, value, unit, delta, direction, className = "" }) {
  return (
    <div className={"m2m-stat " + className}>
      <span className="m2m-stat__label">{label}</span>
      <span className="m2m-stat__value">{value}{unit && <sup>{unit}</sup>}</span>
      {delta != null && (
        <span className={"m2m-stat__delta m2m-stat__delta--" + (direction || "up")}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: direction === "down" ? "rotate(180deg)" : "none" }}><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          {delta}
        </span>
      )}
    </div>
  );
}
