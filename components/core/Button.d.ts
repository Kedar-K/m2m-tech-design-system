import * as React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Primary = yellow signal CTA. */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  /** Fill the container width. */
  block?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Render as a different element, e.g. "a". */
  as?: any;
}
/**
 * Primary action control. Yellow "primary" is the single loudest element on a
 * view — use exactly one per section.
 * @startingPoint section="Core" subtitle="Buttons, sizes & variants" viewport="700x220"
 */
export declare function Button(props: ButtonProps): JSX.Element;
