import { BrochureLocationPage } from '@/lib/brochure/location/BrochureLocationPage'
import { notFound } from 'next/navigation'
import { loadLocationData } from './load'

interface Props {
  params: Promise<{ business_id: string; location_id: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function Brochure(props: Props) {
  const { business_id, location_id } = await props.params
  const { location, brochure } = await loadLocationData(
    business_id,
    location_id,
  )

  if (!location) return notFound()

  if (brochure) {
    return <BrochureLocationPage brochure={brochure} />
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      fallback location page
    </main>
  )
}
