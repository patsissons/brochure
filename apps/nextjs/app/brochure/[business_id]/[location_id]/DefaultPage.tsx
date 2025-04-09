import Link from 'next/link'

export function DefaultPage() {
  return (
    <div className="flex-1 grid place-content-center">
      <Link
        className="hover:text-primary transition-colors px-2 py-1 rounded-md"
        href="/brochure/123"
      >
        Back to business
      </Link>
    </div>
  )
}
