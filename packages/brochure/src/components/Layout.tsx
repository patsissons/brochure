import { PropsWithChildren } from "react";
import type { Brochure, BrochureBlock } from "../types";
import { BrochureProvider } from "./BrochureProvider";

interface Props {
  brochure: Brochure;
  pageId: string;
  page?: BrochureBlock;
}

export function Layout({
  children,
  brochure,
  pageId,
  page,
}: PropsWithChildren<Props>) {
  return (
    <BrochureProvider brochure={brochure}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
        }}
        data-page-id={pageId}
      >
        {children}
      </div>
    </BrochureProvider>
  );
}
