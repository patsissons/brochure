import Layout from "@/lib/components/Layout";
import { PropsWithChildren } from "react";
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";

export default async function BrochureLayout({ children }: PropsWithChildren) {
  return (
    <Layout
      pageId="business"
      defaultBlocks={{
        "business.header": DefaultHeader,
        "business.footer": DefaultFooter,
      }}
    >
      {children}
    </Layout>
  );
}
