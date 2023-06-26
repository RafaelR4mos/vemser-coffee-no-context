import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import {
  CardInfoContainer,
  CoffeeCardContainer,
  CoffeeValueContainer,
  IncrementDecrementContainer,
} from "./styles";
import { IconButton } from "@mui/material";
import { useState } from "react";

type CoffeTypes = "expresso" | "expressoCremoso" | "mochaccino";

interface ICoffeeCardProps {
  coffeeType: CoffeTypes;
}

interface ICoffeeTypes {
  expresso: string;
  expressoCremoso: string;
  mochaccino: string;
}

export function CoffeeCard({ coffeeType }: ICoffeeCardProps) {
  const coffeeTypes: ICoffeeTypes = {
    expresso: `${import.meta.env.BASE_URL}src/assets/expresso.png`,
    expressoCremoso: `${
      import.meta.env.BASE_URL
    }src/assets/expresso-cremoso.png`,
    mochaccino: `${import.meta.env.BASE_URL}src/assets/mochaccino.png`,
  };

  const [quantity, setQuantity] = useState(0);

  function handleCoffeeQuantity(isIncrement: boolean) {
    if (isIncrement) {
      setQuantity((state) => (state += 1));
    } else if (quantity > 0) {
      setQuantity((state) => (state -= 1));
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={coffeeTypes[coffeeType as keyof ICoffeeTypes]} />
      <span>Tradicional</span>

      <div>
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <CardInfoContainer>
        <CoffeeValueContainer>
          R$ <strong>9,90</strong>
        </CoffeeValueContainer>
        <div>
          <IncrementDecrementContainer>
            <IconButton
              title="Diminuir quantidade"
              onClick={() => handleCoffeeQuantity(false)}
            >
              <Remove />
            </IconButton>
            <span>{quantity}</span>
            <IconButton
              title="Aumentar quantidade"
              onClick={() => handleCoffeeQuantity(true)}
            >
              <Add />
            </IconButton>
          </IncrementDecrementContainer>
          <IconButton
            sx={{
              backgroundColor: "#b47150",
              color: "#FFF",
              "&:hover": { backgroundColor: "#bc8062" },
            }}
            title="Adicionar ao carrinho"
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardInfoContainer>
    </CoffeeCardContainer>
  );
}
