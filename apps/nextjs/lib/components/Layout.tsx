import { Layout as BrochureLayout } from "@brochure/engine/components/Layout";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import loadBrochure from "../load";
import { Block } from "./Block";

interface Props {
  pageId: string;
  defaultBlocks?: ComponentPropsWithoutRef<typeof Block>["defaultBlocks"];
  data?: Record<string, unknown>;
}

export default async function Layout({
  children,
  pageId,
  defaultBlocks,
  data,
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
