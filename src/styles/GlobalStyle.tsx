import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html {
  font-family: "Karla";
}
body {
  height: 100vh;
  margin: 0;
  font-family: "Karla";
  color: #221f27;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: "Karla";
  color: #ffffff;
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
