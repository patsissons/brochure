import yaml from "yaml";
import type { Brochure, BrochureBlock } from "./types/Brochure.js";

export function load(config: string): Brochure {
  if (config.startsWith("{")) {
    return transform(JSON.parse(config));
  }

  return transform(yaml.parse(config));

  function transform(brochure: Brochure): Brochure {
    linkIds(brochure.pages);
    linkIds(brochure.blocks);

    if (brochure.settings?.debugging) {
      console.log("📖 Brochure loaded");
    }

    return brochure;

    function linkIds(map?: Record<string, BrochureBlock>) {
      if (!map) return;

      for (const key in map) {
        if (!map[key]) continue;

        map[key].id = key;
      }
    }
  }
}
