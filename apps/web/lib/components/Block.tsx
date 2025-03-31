import { Block as BrochureBlock } from "@repo/brochure/components/Block";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Diagnostics } from "./blocks/Diagnostics";

export const defaultBlocks = {
  diagnostics: Diagnostics,
};

export function Block({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<typeof BrochureBlock>>) {
  return (
    <BrochureBlock
      {...props}
      defaultBlocks={{
        ...defaultBlocks,
        ...props.defaultBlocks,
      }}
    >
      {children}
    </BrochureBlock>
  );
}
