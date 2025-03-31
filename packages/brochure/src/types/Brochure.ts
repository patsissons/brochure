export interface BrochureSettings {
  debugging?: boolean;
}

export interface BrochureConfig {
  colors?: Record<string, string>;
  dark_colors?: Record<string, string>;
}

export interface BrochureBlock {
  id: string;
  config?: BrochureConfig;
  blocks?: BrochureBlock[];
  template?: string;
}

export interface Brochure {
  version: string;
  name?: string;
  description?: string;

  config?: BrochureConfig;
  settings?: BrochureSettings;

  pages?: Record<string, BrochureBlock>;
  blocks?: Record<string, BrochureBlock>;
}
