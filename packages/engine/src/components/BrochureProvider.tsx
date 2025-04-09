'use client'

import type { Brochure } from '@brochure/engine/types'
import { createContext, PropsWithChildren, useContext } from 'react'

const BrochureContext = createContext<Brochure | null>(null)

export function BrochureProvider({
  children,
  value,
}: PropsWithChildren<{ value: Brochure }>) {
  return (
    <BrochureContext.Provider value={value}>
      {children}
    </BrochureContext.Provider>
  )
}

export function useBrochure(): Brochure
export function useBrochure(throwIfMissing: false): Brochure | null
export function useBrochure(throwIfMissing = true) {
  const brochure = useContext(BrochureContext)
  if (!brochure && throwIfMissing) throw new Error('Brochure not loaded')

  return brochure
}
