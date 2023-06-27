import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import {
  CardInfoContainer,
  CoffeeCardContainer,
  CoffeeTagsContainer,
  CoffeeValueContainer,
  IncrementDecrementContainer,
} from "./styles";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ICoffee } from "../../context/CoffeeContext";

interface ICoffeeCardProps {
  coffeeData: ICoffee;
}

export function CoffeeCard({ coffeeData }: ICoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);
  const { addItemToCart } = useContext(ShoppingCartContext);

  function handleCoffeeQuantity(isIncrement: boolean) {
    if (isIncrement) {
      setCoffeeQuantity((state) => (state += 1));
    } else if (coffeeQuantity > 0) {
      setCoffeeQuantity((state) => (state -= 1));
    }
  }

  return (
    <CoffeeCardContainer>
      <img
        src={
          import.meta.env.PROD
            ? `${import.meta.env.BASE_URL}assets/${coffeeData.img}.png`
            : `${import.meta.env.BASE_URL}src/assets/${coffeeData.img}.png`
        }
      />

      <CoffeeTagsContainer>
        {coffeeData.type
          ? coffeeData.type.map((type: string) => {
              return <span key={type}>{type}</span>;
            })
          : null}
      </CoffeeTagsContainer>

      <div>
        <strong>{coffeeData.name}</strong>
        <p>{coffeeData.description}</p>
      </div>

      <CardInfoContainer>
        <CoffeeValueContainer>
          R$ <strong>{coffeeData.value}</strong>
        </CoffeeValueContainer>
        <div>
          <IncrementDecrementContainer>
            <IconButton
              title="Diminuir quantidade"
              onClick={() => handleCoffeeQuantity(false)}
            >
              <Remove />
            </IconButton>
            <span>{coffeeQuantity}</span>
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
            onClick={() => {
              if (coffeeQuantity > 0) {
                addItemToCart({ ...coffeeData, quantity: coffeeQuantity });
              } else {
                alert(
                  "Selecione quantos cafés você gostaria de adicionar ao carrinho."
                );
              }
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardInfoContainer>
    </CoffeeCardContainer>
  );
}
