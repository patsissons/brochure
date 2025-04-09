import { loadBrochure } from '@/lib/load/brochure'
import { loadBusiness } from '@/lib/load/business'
import { cache } from 'react'

async function loader(businessId: string) {
  const business = await loadBusiness(businessId)
  if (!business) return {}

  const brochure = await loadBrochure({ business })

  return {
    business,
    brochure,
  }
}

export const loadBusinessData = cache(loader)
