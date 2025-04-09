import { renderHtml } from '@brochure/engine-html/render'
import { renderLodash } from '@brochure/engine-lodash/render'
import { Brochure } from './types/Brochure.js'

export function render(template: string, brochure: Brochure, engine = 'html') {
  console.log('render', template, brochure.data)
  switch (engine) {
    case 'html':
      return renderHtml(template, brochure)
    case 'lodash':
      return renderLodash(template, brochure)
    default:
      throw new Error(`Unsupported engine: ${engine}`)
  }
}
