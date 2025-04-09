import loadBrochure from "@/lib/load";
import { MAIN_BLOCK_ID } from "@brochure/engine/constants";
import { Page } from "@brochure/ui/components/Page";
import { Metadata, ResolvingMetadata } from "next";
import { DefaultPage } from "./DefaultPage";
import loadBusiness from "./load";

interface Props {
  params: Promise<{ business_id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata(
  _props: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const brochure = await loadBrochure();
  const page = brochure.pages?.business;

  return {
    ...brochure.meta,
    ...page?.meta,
  };
}

export default async function Brochure(props: Props) {
  const params = await props.params;
  const business = await loadBusiness(params.business_id);

  return (
    <Page
      pageId="business"
      defaultBlocks={{
        [MAIN_BLOCK_ID]: DefaultPage,
      }}
      data={{ business }}
      loadBrochure={loadBrochure}
    />
  );
}
