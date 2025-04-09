import { Layout as BrochureLayout } from "@brochure/engine/components/Layout";
import type { Brochure } from "@brochure/engine/types/Brochure";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Block } from "./Block.js";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
  data?: Record<string, unknown>;
  loadBrochure: (data?: Record<string, unknown>) => Promise<Brochure>;
}

export async function Layout({
  children,
  pageId,
  defaultBlocks,
  data,
  loadBrochure,
}: PropsWithChildren<Props>) {
  const brochure = await loadBrochure(data);
  const page = brochure.pages?.[pageId];

  return (
    <BrochureLayout brochure={brochure} pageId={pageId}>
      <Block
        id={pageId}
        brochure={brochure}
        block={page}
        defaultBlocks={defaultBlocks}
        noStyle
      >
        {children}
      </Block>
    </BrochureLayout>
  );
}
