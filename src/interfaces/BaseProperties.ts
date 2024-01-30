import { HTMLAttributes, ReactNode } from "react";

export type BaseProperties = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};
