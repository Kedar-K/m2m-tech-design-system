import * as React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "solid";
  size?: "sm" | "md";
  /** Accessible label (required — icon-only control). */
  label: string;
  children: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
