import * as React from "react";
export interface TooltipProps {
  content: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
