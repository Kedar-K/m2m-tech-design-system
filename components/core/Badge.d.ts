import * as React from "react";
export interface BadgeProps {
  /** Semantic color. */
  tone?: "neutral" | "brand" | "online" | "warn" | "fault" | "info" | "outline";
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
