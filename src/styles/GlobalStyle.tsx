import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  margin: 0;
  font-family: ${(props) => props.theme.font.main.family};
  color: ${(props) => props.theme.color.ink.base};
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family:  ${(props) => props.theme.font.main.family};
  color: ${(props) => props.theme.color.whites.lightest};
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
