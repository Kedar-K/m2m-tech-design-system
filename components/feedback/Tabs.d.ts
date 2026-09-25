import * as React from "react";
export interface TabsProps {
  tabs: Array<string | { value: string; label: React.ReactNode }>;
  /** Controlled active value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
