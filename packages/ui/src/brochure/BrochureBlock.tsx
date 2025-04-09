import { Diagnostics } from '@/blocks/Diagnostics.js'
import { BrochureEngineBlock } from '@brochure/engine/components/BrochureEngineBlock'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export const defaultBlocks = {
  diagnostics: Diagnostics,
}

export function BrochureBlock({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<typeof BrochureEngineBlock>>) {
  return (
    <BrochureEngineBlock
      {...props}
      defaultBlocks={{
        ...defaultBlocks,
        ...props.defaultBlocks,
      }}
    >
      {children}
    </BrochureEngineBlock>
  )
}
