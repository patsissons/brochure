import { renderHtml } from "@repo/brochure-html/render";
import { renderLodash } from "@repo/brochure-lodash/render";
import { Brochure } from "./types";

export function render(template: string, brochure: Brochure, engine = "html") {
  console.log("render", template, brochure.data);
  switch (engine) {
    case "html":
      return renderHtml(template, brochure);
    case "lodash":
      return renderLodash(template, brochure);
    default:
      throw new Error(`Unsupported engine: ${engine}`);
  }
}
