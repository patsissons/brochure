import { loadBrochure } from '@/lib/load/brochure'
import { loadBusiness } from '@/lib/load/business'
import { cache } from 'react'

async function loader(businessId: string, locationId: string) {
  const business = await loadBusiness(businessId)
  if (!business) return {}

  const location = business.locations.find(
    (location) => location.id === locationId,
  )

  if (!location) return {}

  const brochure = await loadBrochure({ business, location })

  return {
    business,
    location,
    brochure,
  }
}

export const loadLocationData = cache(loader)
