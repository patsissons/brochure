import Link from 'next/link'

export function DefaultFooter() {
  return (
    <footer className="border-t border-base-content/50">
      <div className="container mx-auto text-center px-2 py-1">
        <p>
          Powered by
          <Link
            className="hover:text-primary transition-colors px-1 py-1 rounded-md"
            href="https://joinblvd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boulevard
          </Link>
        </p>
      </div>
    </footer>
  )
}
