"use client";

import type { Brochure } from "@repo/brochure/types";
import { createContext, useContext, type PropsWithChildren } from "react";

const BrochureContext = createContext<Brochure | null>(null);

export function BrochureProvider({
  children,
  brochure,
}: PropsWithChildren<{ brochure: Brochure }>) {
  return (
    <>
      <BrochureContext.Provider value={brochure}>
        {children}
      </BrochureContext.Provider>
    </>
  );
}

export function useBrochure(): Brochure;
export function useBrochure(throwIfMissing: false): Brochure | null;
export function useBrochure(throwIfMissing = true) {
  const brochure = useContext(BrochureContext);
  if (!brochure && throwIfMissing) throw new Error("Brochure not loaded");

  return brochure;
}
