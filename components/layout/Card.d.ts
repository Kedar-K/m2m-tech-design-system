import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** flat = hairline border; raised = shadow; signal = ink border + yellow offset. */
  variant?: "flat" | "raised" | "signal";
  interactive?: boolean;
}
/**
 * Surface container. Compose with CardHeader / CardBody / CardFooter.
 * @startingPoint section="Layout" subtitle="Content surface + sub-parts" viewport="700x260"
 */
export declare function Card(props: CardProps): JSX.Element;
export declare function CardBody(props: { className?: string; children: React.ReactNode }): JSX.Element;
export declare function CardHeader(props: { className?: string; children: React.ReactNode }): JSX.Element;
export declare function CardFooter(props: { className?: string; children: React.ReactNode }): JSX.Element;
