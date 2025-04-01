import lodashTemplate from "lodash/template";
import type { HtmlRenderContext } from "./types";

export function renderLodash(template: string, _context: HtmlRenderContext) {
  console.log("renderLodash", template, _context.data);
  return lodashTemplate(template)(_context.data);
}
