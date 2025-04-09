import 'server-only'

import type { Business } from '@brochure/ui/types/Business'
import { readFile } from 'fs/promises'
import { cache } from 'react'
import { parse } from 'yaml'

async function loader(id: string) {
  const res = await readFile('./data/business.yaml')
  const yaml = res.toString()
  const business = parse(yaml) as Business

  if (business.id === id || id === 'default') return business
}

export const loadBusiness = cache(loader)
