import lodashTemplate from "lodash/template.js";
import type { HtmlRenderContext } from "./types/Render.js";

export function renderLodash(template: string, _context: HtmlRenderContext) {
  console.log("renderLodash", template, _context.data);
  return lodashTemplate(template)(_context.data);
}
