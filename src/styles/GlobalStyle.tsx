import { createGlobalStyle } from "styled-components";
import mainStyleColors from "./mainStyleColors";
import mainStyleFonts from "./mainStyleFonts";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  margin: 0;
  font-family: ${mainStyleFonts.mainFont};
  color: ${mainStyleColors.ink.base};
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: ${mainStyleFonts.mainFont};
  color: ${mainStyleColors.Whites.lightest};
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
