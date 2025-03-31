import { Layout as BrochureLayout } from "@repo/brochure/components/Layout";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import loadBrochure from "../load";
import { Block } from "./Block";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
}

export default async function Layout({
  children,
  pageId,
  defaultBlocks,
}: PropsWithChildren<Props>) {
  const brochure = await loadBrochure();
  const page = brochure.pages?.[pageId];

  return (
    <BrochureLayout brochure={brochure} pageId={pageId} page={page}>
      <Block
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
