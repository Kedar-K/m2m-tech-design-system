import * as React from "react";
export interface TagProps {
  /** When provided, renders a removable × affordance. */
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
