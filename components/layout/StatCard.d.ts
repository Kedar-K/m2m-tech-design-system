import * as React from "react";
export interface StatCardProps {
  label: string;
  value: React.ReactNode;
  /** Small superscript unit, e.g. "%". */
  unit?: string;
  /** Trend text, e.g. "+12% vs last week". */
  delta?: React.ReactNode;
  direction?: "up" | "down";
  className?: string;
}
/**
 * Headline metric tile for dashboards and marketing proof points.
 * @startingPoint section="Layout" subtitle="KPI / metric tile" viewport="700x160"
 */
export declare function StatCard(props: StatCardProps): JSX.Element;
