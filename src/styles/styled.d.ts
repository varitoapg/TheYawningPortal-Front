import { DefaultThemeStyles } from "./types";

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeStyles {}
}
