import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  padding: 0 10rem;
}


main {
  margin-inline: auto;
}

img {
  max-width: 100%;
  display: block
}
`;
