import { Brochure } from '@brochure/engine/types'
import { BrochureLayout } from '@brochure/ui/brochure/BrochureLayout'
import { PropsWithChildren } from 'react'
import { DefaultFooter } from './DefaultFooter'
import { DefaultHeader } from './DefaultHeader'
import { DefaultLayout } from './DefaultLayout'
import { pageId } from './constants'

interface Props {
  brochure: Brochure
}

export function BrochureBusinessLayout({
  children,
  brochure,
}: PropsWithChildren<Props>) {
  return (
    <BrochureLayout
      brochure={brochure}
      pageId={pageId}
      defaultBlocks={{
        business: DefaultLayout,
        'business.header': DefaultHeader,
        'business.footer': DefaultFooter,
      }}
    >
      {children}
    </BrochureLayout>
  )
}
