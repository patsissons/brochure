import { cache } from 'react'

async function loadLocation(locationId: string) {
  return Promise.resolve({
    id: locationId,
    name: 'Test Location',
  })
}

export default cache(loadLocation)
