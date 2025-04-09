import { BusinessProvider } from '@brochure/ui/providers/BusinessProvider'
import { Business } from '@brochure/ui/types/Business'
import { PropsWithChildren } from 'react'

interface Props {
  business: Business
}

export function BusinessLayoutProviders({
  children,
  business,
}: PropsWithChildren<Props>) {
  return <BusinessProvider value={business}>{children}</BusinessProvider>
}
