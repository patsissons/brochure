import Link from 'next/link'

export function DefaultPage() {
  return (
    <div className="flex-1 grid place-content-center">
      <div className="grid gap-4">
        <h2>Choose a location</h2>
        <ul>
          <li>
            <Link
              className="hover:text-primary transition-colors px-2 py-1 rounded-md"
              href="/brochure/123/456"
            >
              Location 1
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
