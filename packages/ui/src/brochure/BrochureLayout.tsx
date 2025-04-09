import { BrochureEngineLayout } from '@brochure/engine/components/BrochureEngineLayout'
import type { Brochure } from '@brochure/engine/types/Brochure'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { BrochureBlock } from './BrochureBlock.js'

interface Props {
  brochure: Brochure
  pageId: string
  defaultBlocks?: ComponentPropsWithoutRef<
    typeof BrochureBlock
  >['defaultBlocks']
}

export async function BrochureLayout({
  children,
  brochure,
  pageId,
  defaultBlocks,
}: PropsWithChildren<Props>) {
  const page = brochure.pages?.[pageId]

  return (
    <BrochureEngineLayout brochure={brochure} pageId={pageId}>
      <BrochureBlock
        id={pageId}
        brochure={brochure}
        block={page}
        defaultBlocks={defaultBlocks}
        noStyle
      >
        {children}
      </BrochureBlock>
    </BrochureEngineLayout>
  )
}
