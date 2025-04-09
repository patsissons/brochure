"use client";

import { useBrochure } from "@brochure/engine/components/BrochureProvider";

export function Diagnostics() {
  const brochure = useBrochure(false);

  if (!brochure) {
    return <p>No brochure loaded</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(brochure, null, 2)}</pre>
    </div>
  );
}
