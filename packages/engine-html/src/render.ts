import type { HtmlRenderContext } from './types/Render.js'

export function renderHtml(template: string, _context: HtmlRenderContext) {
  console.log('renderHtml', template, _context.data)
  return template
}
