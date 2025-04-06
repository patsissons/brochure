import type { BrochureBlock } from "../types";

interface Props {
  blockId: string;
  block?: BrochureBlock;
  type?: "page" | "block";
}

export function BlockStyle({ blockId, block, type = "block" }: Props) {
  if (!block) return null;

  return (
    <>
      {block.config?.colors && (
        <style>
          {`
:root {
/* ${blockId} (${type}) */
${Object.entries(block.config.colors)
  .map(([key, value]) => `  --color-${key}: ${value};`)
  .join("\n")}
}
          `}
        </style>
      )}
      {block.config?.dark_colors && (
        <style>
          {`
/* ${blockId} (${type}) */
@media (prefers-color-scheme: dark) {
  :root {
${Object.entries(block.config.dark_colors)
  .map(([key, value]) => `    --color-${key}: ${value};`)
  .join("\n")}
  }
}
          `}
        </style>
      )}
    </>
  );
}
