import { PropsWithChildren } from 'react'
import type { Brochure } from '../types/Brochure.js'
import { BrochureProvider } from './BrochureProvider.js'

interface Props {
  brochure: Brochure
  pageId: string
}

export function BrochureEngineLayout({
  children,
  brochure,
  pageId,
}: PropsWithChildren<Props>) {
  return (
    <BrochureProvider value={brochure}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
        }}
        data-page-id={pageId}
      >
        {children}
      </div>
    </BrochureProvider>
  )
}
