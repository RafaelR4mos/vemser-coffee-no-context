import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}


body {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
}


main {
  margin-inline: auto;
}

img {
  max-width: 100%;
  display: block
}
`;
