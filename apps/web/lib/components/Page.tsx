import { Main } from "@repo/brochure/components/Main";
import { MAIN_BLOCK_ID } from "@repo/brochure/constants";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import loadBrochure from "../load";
import { Block } from "./Block";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
}

export default async function Page({
  children,
  pageId,
  defaultBlocks,
}: PropsWithChildren<Props>) {
  const brochure = await loadBrochure();
  const page = brochure.pages?.[pageId];
  const block = page?.blocks?.find((block) => block.id === MAIN_BLOCK_ID);

  return (
    <Main pageId={pageId} page={page}>
      <Block
        brochure={brochure}
        block={block && { ...block, contextId: page?.id }}
        defaultBlocks={defaultBlocks}
      >
        {children}
      </Block>
    </Main>
  );
}
