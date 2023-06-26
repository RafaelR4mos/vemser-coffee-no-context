import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CoffeeProvider } from "./context/CoffeeContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeProvider>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </CoffeeProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
