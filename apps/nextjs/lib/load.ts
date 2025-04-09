import 'server-only'

import { load } from '@brochure/engine/load'
import { readFile } from 'fs/promises'
import { cache } from 'react'

async function loadBrochure(data?: Record<string, unknown>) {
  const res = await readFile('./data/brochure.yaml')
  const yaml = res.toString()
  const brochure = load(yaml)

  return {
    ...brochure,
    data: {
      ...brochure.data,
      ...data,
    },
  }
}

export default cache(loadBrochure)
