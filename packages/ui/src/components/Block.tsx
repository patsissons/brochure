import { Block as BrochureBlock } from '@brochure/engine/components/Block'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { Diagnostics } from './blocks/Diagnostics.js'

export const defaultBlocks = {
  diagnostics: Diagnostics,
}

export function Block({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<typeof BrochureBlock>>) {
  return (
    <BrochureBlock
      {...props}
      defaultBlocks={{
        ...defaultBlocks,
        ...props.defaultBlocks,
      }}
    >
      {children}
    </BrochureBlock>
  )
}
