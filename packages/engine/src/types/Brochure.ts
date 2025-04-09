export interface BrochureSettings {
  debugging?: boolean
}

export interface BrochureConfig {
  colors?: Record<string, string>
  dark_colors?: Record<string, string>
}

export interface BrochureBlock {
  id: string
  config?: BrochureConfig
  blocks?: BrochureBlock[]
  template?: string
}

export interface BrochureMeta {
  title?: string
  description?: string
}

export interface BrochurePage extends BrochureBlock {
  meta: BrochureMeta
}

export interface Brochure {
  version: string
  engine?: string
  meta?: BrochureMeta

  config?: BrochureConfig
  settings?: BrochureSettings

  data?: Record<string, unknown>

  pages?: Record<string, BrochurePage>
  blocks?: Record<string, BrochureBlock>
}
