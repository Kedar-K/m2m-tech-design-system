import * as React from "react";
export interface StatusDotProps {
  status?: "online" | "warn" | "fault" | "idle";
  /** Pulse the LED for live/streaming state. */
  pulse?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
