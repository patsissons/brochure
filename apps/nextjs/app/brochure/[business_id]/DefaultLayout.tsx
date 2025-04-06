import { PropsWithChildren } from "react";
import { DefaultFooter } from "./DefaultFooter";
import { DefaultHeader } from "./DefaultHeader";

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <DefaultHeader />
      {children}
      <DefaultFooter />
    </>
  );
}
