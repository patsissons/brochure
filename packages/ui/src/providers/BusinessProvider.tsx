'use client'

import type { Business } from '@/types/Business.js'
import { createContext, PropsWithChildren, useContext } from 'react'

export const BusinessContext = createContext<Business | undefined>(undefined)

export function BusinessProvider({
  children,
  value,
}: PropsWithChildren<{ value: Business }>) {
  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  )
}

export const useBusiness = () => {
  const business = useContext(BusinessContext)
  if (!business) throw new Error('Business not found')

  return business
}
