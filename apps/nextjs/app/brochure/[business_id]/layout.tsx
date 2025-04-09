import { BrochureBusinessLayout } from '@/lib/brochure/business/BrochureBusinessLayout'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { loadBusinessData } from './load'
import { BusinessLayoutProviders } from './providers'

interface Props {
  params: Promise<{ business_id: string }>
}

export default async function BusinessLayout({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const { business_id } = await props.params
  const { business, brochure } = await loadBusinessData(business_id)

  if (!business) return notFound()

  if (brochure) {
    return (
      <BusinessLayoutProviders business={business}>
        <BrochureBusinessLayout brochure={brochure}>
          {children}
        </BrochureBusinessLayout>
      </BusinessLayoutProviders>
    )
  }

  return (
    <BusinessLayoutProviders business={business}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
        }}
      >
        {children}
      </div>
    </BusinessLayoutProviders>
  )
}
