import Layout from "@/lib/components/Layout";
import { PropsWithChildren } from "react";
import { DefaultFooter } from "./DefaultFooter";
import { DefaultHeader } from "./DefaultHeader";
import { DefaultLayout } from "./DefaultLayout";

export default async function BrochureLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      pageId="business"
      defaultBlocks={{
        business: DefaultLayout,
        "business.header": DefaultHeader,
        "business.footer": DefaultFooter,
      }}
    >
      {children}
    </Layout>
  );
}
