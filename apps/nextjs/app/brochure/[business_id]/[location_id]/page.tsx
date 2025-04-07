import loadBrochure from "@/lib/load";
import { MAIN_BLOCK_ID } from "@brochure/engine/constants";
import { Page } from "@brochure/react/components/Page";
import loadBusiness from "../load";
import { DefaultPage } from "./DefaultPage";
import loadLocation from "./load";
interface Props {
  params: Promise<{ business_id: string; location_id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Brochure(props: Props) {
  const params = await props.params;
  const business = await loadBusiness(params.business_id);
  const location = await loadLocation(params.location_id);

  return (
    <Page
      pageId="location"
      defaultBlocks={{
        [MAIN_BLOCK_ID]: DefaultPage,
      }}
      data={{ business, location }}
      loadBrochure={loadBrochure}
    />
  );
}
