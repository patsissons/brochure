import {
  ComponentPropsWithoutRef,
  type ComponentType,
  type PropsWithChildren,
} from 'react'
import { MAIN_BLOCK_ID, TEMPLATE_BLOCK_ID } from '../constants.js'
import { render } from '../render.js'
import type { Brochure, BrochureBlock } from '../types/Brochure.js'
import { BlockStyle } from './BlockStyle.js'

type BrochureRenderBlock = BrochureBlock & { contextId?: string }

interface Props {
  id: string
  brochure: Brochure
  block?: BrochureRenderBlock
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultBlocks?: Record<string, ComponentType<PropsWithChildren<any>>>
  type?: ComponentPropsWithoutRef<typeof BlockStyle>['type']
  noStyle?: boolean
}

export function BrochureEngineBlock({
  id,
  children,
  brochure,
  block,
  defaultBlocks,
  noStyle,
}: PropsWithChildren<Props>) {
  if (!block) {
    const DefaultBlock = defaultBlocks?.[id]
    if (!DefaultBlock) return null

    console.log(`→ renderBlock NOBLOCK ${id}`)

    return <DefaultBlock {...brochure.data}>{children}</DefaultBlock>
  }

  return (
    <>
      {!noStyle && <BlockStyle blockId={block.id} block={block} />}
      {renderBlock(block)}
    </>
  )

  function renderBlock(block: BrochureRenderBlock) {
    const blockId = `${block.contextId ? `${block.contextId}.` : ''}${block.id}`

    // debugBlock("RENDER", block);

    if (block.blocks && block.blocks.length > 0) {
      return block.blocks.map((childBlock) => {
        if (childBlock.id === MAIN_BLOCK_ID) {
          debugBlock('MAIN', block)
          return children
        }

        if (
          childBlock.id === TEMPLATE_BLOCK_ID &&
          childBlock.template == null
        ) {
          return (
            <BrochureEngineBlock
              key={childBlock.id}
              id={childBlock.id}
              brochure={brochure}
              block={{
                id: TEMPLATE_BLOCK_ID,
                template: block.template,
                contextId: block.id,
              }}
              defaultBlocks={defaultBlocks}
            />
          )
        }

        return (
          <BrochureEngineBlock
            key={childBlock.id}
            id={childBlock.id}
            brochure={brochure}
            block={childBlock}
            defaultBlocks={defaultBlocks}
          />
        )
      })
    }

    if (block.id === TEMPLATE_BLOCK_ID) {
      if (block.template != null) {
        debugBlock('TEMPLATE', block)
        const __html = render(block.template, brochure, brochure.engine)
        return (
          <section
            key={block.id}
            data-block-id={blockId}
            dangerouslySetInnerHTML={{ __html }}
          />
        )
      }

      debugBlock('CHILDREN', block)
      return children
    }

    if (block.template == null) {
      const shared = brochure.blocks?.[block.id]
      if (shared) {
        return (
          <BrochureEngineBlock
            id={block.id}
            brochure={brochure}
            block={{ ...shared, contextId: 'blocks' }}
            defaultBlocks={defaultBlocks}
          />
        )
      }

      const DefaultBlock = defaultBlocks?.[block.id]
      if (DefaultBlock) {
        debugBlock('DEFAULT', block)
        return (
          <DefaultBlock key={blockId} {...brochure.data}>
            {children}
          </DefaultBlock>
        )
      }
    }

    if (!block.blocks || block.blocks.length === 0) {
      return (
        <BrochureEngineBlock
          id={TEMPLATE_BLOCK_ID}
          brochure={brochure}
          block={{
            id: TEMPLATE_BLOCK_ID,
            template: block.template,
            contextId: block.id,
          }}
          defaultBlocks={defaultBlocks}
        />
      )
    }

    function debugBlock(
      action: 'CHILDREN' | 'DEFAULT' | 'MAIN' | 'RENDER' | 'TEMPLATE',
      _block?: BrochureRenderBlock,
    ) {
      if (!brochure.settings?.debugging) return

      console.log(
        `${action === 'RENDER' ? '' : '→ '}renderBlock ${action} ${blockId}`,
      )
    }
  }
}
