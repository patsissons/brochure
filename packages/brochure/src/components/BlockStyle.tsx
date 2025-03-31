import type { BrochureBlock } from "../types";

const types = {
  page: "div",
  block: "section",
} as const;

interface Props {
  blockId: string;
  block?: BrochureBlock;
  type?: keyof typeof types;
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
