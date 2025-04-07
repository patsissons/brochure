import { Main } from "@brochure/engine/components/Main";
import { MAIN_BLOCK_ID } from "@brochure/engine/constants";
import { Brochure } from "@brochure/engine/types";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Block } from "./Block.js";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
  data?: Record<string, unknown>;
  loadBrochure: (data?: Record<string, unknown>) => Promise<Brochure>;
}

export async function Page({
  children,
  pageId,
  defaultBlocks,
  data,
  loadBrochure,
}: PropsWithChildren<Props>) {
  const brochure = await loadBrochure(data);
  const page = brochure.pages?.[pageId];
  const block = page?.blocks?.find((block) => block.id === MAIN_BLOCK_ID);

  return (
    <Main pageId={pageId} page={page}>
      <Block
        id={MAIN_BLOCK_ID}
        brochure={brochure}
        block={block && { ...block, contextId: page?.id }}
        defaultBlocks={defaultBlocks}
      >
        {children}
      </Block>
    </Main>
  );
}
