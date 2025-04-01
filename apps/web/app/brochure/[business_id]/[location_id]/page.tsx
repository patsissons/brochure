import Page from "@/lib/components/Page";
import { MAIN_BLOCK_ID } from "@repo/brochure/constants";
import { DefaultPage } from "./DefaultPage";

export default async function Brochure() {
  return (
    <Page
      pageId="location"
      defaultBlocks={{
        [MAIN_BLOCK_ID]: DefaultPage,
      }}
    />
  );
}
