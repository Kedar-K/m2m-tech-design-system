import * as React from "react";
export interface LogoProps {
  /** Mark size in px. */
  size?: number;
  showWord?: boolean;
  tagline?: string;
  /** Path to the mark image (adjust to your relative asset path). */
  src?: string;
  href?: string;
  className?: string;
}
/**
 * Brand lockup: circular yellow mark + M2M TECH wordmark with optional tagline.
 * @startingPoint section="Brand" subtitle="Logo lockups" viewport="700x120"
 */
export declare function Logo(props: LogoProps): JSX.Element;
