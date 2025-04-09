'use client'

import type { Brochure } from '@brochure/engine/types'
import { createContext, PropsWithChildren, useContext } from 'react'

const BrochureContext = createContext<Brochure | null>(null)

interface Props {
  brochure: Brochure
}

export function BrochureProvider({
  children,
  brochure,
}: PropsWithChildren<Props>) {
  return (
    <>
      <BrochureContext.Provider value={brochure}>
        {children}
      </BrochureContext.Provider>
    </>
  )
}

export function useBrochure(): Brochure
export function useBrochure(throwIfMissing: false): Brochure | null
export function useBrochure(throwIfMissing = true) {
  const brochure = useContext(BrochureContext)
  if (!brochure && throwIfMissing) throw new Error('Brochure not loaded')

  return brochure
}
