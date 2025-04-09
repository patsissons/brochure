import { Business, Location } from '@brochure/ui/types/Business'
import Link from 'next/link'

interface Props {
  business: Business
  location: Location
}

export function DefaultPage({ business, location }: Props) {
  return (
    <div className="flex-1 grid place-content-center">
      <h2 className="text-2xl font-bold text-center">{location.name}</h2>
      <Link
        className="hover:text-primary transition-colors px-2 py-1 rounded-md text-center"
        href={`/brochure/${business.id}`}
      >
        Back to business
      </Link>
    </div>
  )
}
