import Link from 'next/link'

export default function Brochure() {
  return (
    <div className="grid place-content-center min-h-dvh">
      <Link
        className="text-2xl hover:text-primary rounded-md focus:outline-none focus:ring-2 ring-primary transition-colors px-1 py-0.5"
        href="/brochure/default"
      >
        Default Business
      </Link>
    </div>
  )
}
