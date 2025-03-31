import {
  ComponentPropsWithoutRef,
  type ComponentType,
  type PropsWithChildren,
} from "react";
import { MAIN_BLOCK_ID, TEMPLATE_BLOCK_ID } from "../constants";
import type { Brochure, BrochureBlock } from "../types";
import { BlockStyle } from "./BlockStyle";

type BrochureRenderBlock = BrochureBlock & { contextId?: string };

interface Props {
  brochure: Brochure;
  block?: BrochureRenderBlock;
  defaultBlocks?: Record<string, ComponentType>;
  type?: ComponentPropsWithoutRef<typeof BlockStyle>["type"];
  noStyle?: boolean;
}

export function Block({
  children,
  brochure,
  block,
  defaultBlocks,
  noStyle,
}: PropsWithChildren<Props>) {
  if (!block) return null;

  return (
    <>
      {!noStyle && <BlockStyle blockId={block.id} block={block} />}
      {renderBlock(block)}
    </>
  );

  function renderBlock(block: BrochureRenderBlock) {
    let blockId = `${block.contextId ? `${block.contextId}.` : ""}${block.id}`;

    // debugBlock("RENDER", block);

    if (block.blocks && block.blocks.length > 0) {
      return block.blocks.map((childBlock) => {
        if (childBlock.id === MAIN_BLOCK_ID) {
          debugBlock("MAIN", block);
          return children;
        }

        if (
          childBlock.id === TEMPLATE_BLOCK_ID &&
          childBlock.template == null
        ) {
          return (
            <Block
              key={childBlock.id}
              brochure={brochure}
              block={{
                id: TEMPLATE_BLOCK_ID,
                template: block.template,
                contextId: block.id,
              }}
              defaultBlocks={defaultBlocks}
            />
          );
        }

        return (
          <Block
            key={childBlock.id}
            brochure={brochure}
            block={childBlock}
            defaultBlocks={defaultBlocks}
          />
        );
      });
    }

    if (block.id === TEMPLATE_BLOCK_ID) {
      if (block.template != null) {
        debugBlock("TEMPLATE", block);
        return (
          <section
            key={block.id}
            data-block-id={blockId}
            dangerouslySetInnerHTML={{ __html: block.template }}
          />
        );
      }

      debugBlock("CHILDREN", block);
      return children;
    }

    if (block.template == null) {
      const shared = brochure.blocks?.[block.id];
      if (shared) {
        return (
          <Block
            brochure={brochure}
            block={{ ...shared, contextId: "blocks" }}
            defaultBlocks={defaultBlocks}
          />
        );
      }

      const DefaultBlock = defaultBlocks?.[block.id];
      if (DefaultBlock) {
        debugBlock("DEFAULT", block);
        return <DefaultBlock key={blockId} />;
      }
    }

    if (!block.blocks || block.blocks.length === 0) {
      return (
        <Block
          brochure={brochure}
          block={{
            id: TEMPLATE_BLOCK_ID,
            template: block.template,
            contextId: block.id,
          }}
          defaultBlocks={defaultBlocks}
        />
      );
    }

    function debugBlock(
      action: "CHILDREN" | "DEFAULT" | "MAIN" | "RENDER" | "TEMPLATE",
      block?: BrochureRenderBlock
    ) {
      if (!brochure.settings?.debugging) return;

      console.log(
        `${action === "RENDER" ? "" : "→ "}renderBlock ${action} ${blockId}`
      );
    }
  }
}
