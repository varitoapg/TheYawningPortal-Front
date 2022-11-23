interface Color {
  base: string;
  darkest?: string;
  light?: string;
  lightest?: string;
}

const mainStyleColors = {
  primary: {
    base: "#C11F15",
    darkest: "#9A1911",
    light: "#CD4C44",
    lightest: "#E08F8A",
  } as Color,

  ink: {
    base: "#221F27",
    darkest: "#000000",
    light: "#4E4C52",
    lightest: "#918F93",
  } as Color,

  Whites: {
    base: "#E6E6E6",
    lightest: "#FFFFFF",
    light: "#CCCCCC",
    darkest: "#7F7F7F",
  } as Color,

  errors: {
    base: "#F03738",
  } as Color,

  success: {
    base: "#3CC13B",
  } as Color,
};

export default mainStyleColors;
