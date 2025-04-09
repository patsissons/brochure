import 'server-only'

import { load } from '@brochure/engine/load'
import { readFile } from 'fs/promises'
import { cache } from 'react'

async function loader(data?: Record<string, unknown>) {
  const res = await readFile('./data/brochure.yaml')
  const yaml = res.toString()
  const brochure = load(yaml)

  // if (brochure.version) return

  return {
    ...brochure,
    data: {
      ...brochure.data,
      ...data,
    },
  }
}

export const loadBrochure = cache(loader)
