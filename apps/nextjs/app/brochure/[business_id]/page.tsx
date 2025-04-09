import { BrochureBusinessPage } from '@/lib/brochure/business/BrochureBusinessPage'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { loadBusinessData } from './load'

interface Props {
  params: Promise<{ business_id: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata(
  props: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { business_id } = await props.params
  const { brochure } = await loadBusinessData(business_id)
  if (!brochure) return {}

  const page = brochure.pages?.business

  return {
    ...brochure.meta,
    ...page?.meta,
  }
}

export default async function Brochure(props: Props) {
  const { business_id } = await props.params
  const { business, brochure } = await loadBusinessData(business_id)

  if (!business) return notFound()

  if (brochure) {
    return <BrochureBusinessPage brochure={brochure} />
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      fallback business page
    </main>
  )
}
