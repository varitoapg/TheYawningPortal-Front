export interface Color {
  base: string;
  darkest?: string;
  light?: string;
  lightest?: string;
}
export interface CharacterClass {
  artificer: string;
  warlock: string;
  barbarian: string;
  fighter: string;
  monk: string;
  druid: string;
  rogue: string;
  cleric: string;
  ranger: string;
  wizard: string;
  sorcerer: string;
  bard: string;
  paladin: string;
}
export interface DefaultThemeColour {
  primary: Color;
  ink: Color;
  whites: Color;
  errors: Color;
  successColor: Color;
  characterClass: CharacterClass;
}

export interface FontSizes {
  display: string;
  headline: string;
  title: string;
  body: string;
}

export interface FontWeights {
  regular: number;
  bold: number;
}

export interface DefaultThemeFonts {
  main: {
    family: string;
    sizes: FontSizes;
    weights: FontWeights;
  };
}

export interface SizesStructure {
  regular: string;
  big?: string;
  small?: string;
  minimum?: string;
}

export interface PaddingStructure {
  regular: string;
  overall: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface DefaultThemeSizes {
  borderRadius: SizesStructure;
  padding: PaddingStructure;
}

export interface DefaultThemeStyles {
  color: DefaultThemeColour;
  font: DefaultThemeFonts;
  size: DefaultThemeSizes;
}
