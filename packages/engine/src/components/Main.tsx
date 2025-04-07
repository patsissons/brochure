import { PropsWithChildren } from "react";
import type { BrochureBlock } from "../types/Brochure.js";
import { BlockStyle } from "./BlockStyle.js";
interface Props {
  pageId: string;
  page?: BrochureBlock;
}

export function Main({ children, pageId, page }: PropsWithChildren<Props>) {
  const blockId = `${pageId}.<main>`;
  return (
    <>
      <BlockStyle blockId={pageId} block={page} type="page" />
      <main
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
        data-block-id={blockId}
      >
        {children}
      </main>
    </>
  );
}
