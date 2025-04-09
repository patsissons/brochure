'use client'

import { Business } from '@brochure/ui/types/Business'
import Link from 'next/link'

interface Props {
  business: Business
}

export function DefaultPage({ business }: Props) {
  return (
    <div className="flex-1 grid place-content-center">
      <div className="grid gap-4">
        <h2>Choose a location</h2>
        <ul>
          {business.locations.map((location) => (
            <li key={location.id}>
              <Link
                className="hover:text-primary transition-colors px-2 py-1 rounded-md"
                href={`/brochure/${business.id}/${location.id}`}
              >
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
