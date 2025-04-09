import loadBrochure from '@/lib/load'
import { Layout } from '@brochure/ui/components/Layout'
import { PropsWithChildren } from 'react'
import { DefaultFooter } from './DefaultFooter'
import { DefaultHeader } from './DefaultHeader'
import { DefaultLayout } from './DefaultLayout'
import loadBusiness from './load'

interface Props {
  params: Promise<{ business_id: string }>
  // searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BrochureLayout({
  children,
  ...props
}: PropsWithChildren<Props>) {
  const params = await props.params
  const business = await loadBusiness(params.business_id)

  return (
    <Layout
      pageId="business"
      defaultBlocks={{
        business: DefaultLayout,
        'business.header': DefaultHeader,
        'business.footer': DefaultFooter,
      }}
      data={{ business }}
      loadBrochure={loadBrochure}
    >
      {children}
    </Layout>
  )
}
