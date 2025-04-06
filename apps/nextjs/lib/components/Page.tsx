import { Main } from "@brochure/engine/components/Main";
import { MAIN_BLOCK_ID } from "@brochure/engine/constants";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import loadBrochure from "../load";
import { Block } from "./Block";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
  data?: Record<string, unknown>;
}

export default async function Page({
  children,
  pageId,
  defaultBlocks,
  data,
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
