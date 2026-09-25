import * as React from "react";
export interface ToastProps {
  tone?: "brand" | "online" | "warn" | "fault";
  title?: string;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
