import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Error message; also flips the field to the error style. */
  error?: string;
  required?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
