import { Business } from '@brochure/ui/types/Business'
import { PropsWithChildren } from 'react'
import { DefaultFooter } from './DefaultFooter'
import { DefaultHeader } from './DefaultHeader'

interface Props {
  business: Business
}

export function DefaultLayout({
  children,
  business,
}: PropsWithChildren<Props>) {
  return (
    <>
      <DefaultHeader business={business} />
      {children}
      <DefaultFooter />
    </>
  )
}
