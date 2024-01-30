import { BaseProperties } from "@/interfaces/BaseProperties.ts";

export type AnchorProps = BaseProperties & {
  href: string;
  target?: string;
  rel?: string;
};
