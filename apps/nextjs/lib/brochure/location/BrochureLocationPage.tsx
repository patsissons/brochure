import { MAIN_BLOCK_ID } from '@brochure/engine/constants'
import { Brochure } from '@brochure/engine/types'
import { BrochurePage } from '@brochure/ui/brochure/BrochurePage'
import { DefaultPage } from './DefaultPage'
import { pageId } from './constants'

interface Props {
  brochure: Brochure
}

export function BrochureLocationPage({ brochure }: Props) {
  return (
    <BrochurePage
      brochure={brochure}
      pageId={pageId}
      defaultBlocks={{
        [MAIN_BLOCK_ID]: DefaultPage,
      }}
    />
  )
}
