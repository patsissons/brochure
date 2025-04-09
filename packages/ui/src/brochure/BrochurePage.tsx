import { BrochureEngineMain } from '@brochure/engine/components/BrochureEngineMain'
import { MAIN_BLOCK_ID } from '@brochure/engine/constants'
import { Brochure } from '@brochure/engine/types'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { BrochureBlock } from './BrochureBlock.js'

interface Props {
  brochure: Brochure
  pageId: string
  defaultBlocks?: ComponentPropsWithoutRef<
    typeof BrochureBlock
  >['defaultBlocks']
}

export async function BrochurePage({
  children,
  brochure,
  pageId,
  defaultBlocks,
}: PropsWithChildren<Props>) {
  const page = brochure.pages?.[pageId]
  const block = page?.blocks?.find((block) => block.id === MAIN_BLOCK_ID)

  return (
    <BrochureEngineMain pageId={pageId} page={page}>
      <BrochureBlock
        id={MAIN_BLOCK_ID}
        brochure={brochure}
        block={block && { ...block, contextId: page?.id }}
        defaultBlocks={defaultBlocks}
      >
        {children}
      </BrochureBlock>
    </BrochureEngineMain>
  )
}
