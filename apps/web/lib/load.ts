import "server-only";

import { load } from "@repo/brochure/load";
import { readFile } from "fs/promises";
import { cache } from "react";

async function loadBrochure() {
  const res = await readFile("./data/brochure.yaml");
  const data = res.toString();
  return load(data);
}

export default cache(loadBrochure);
