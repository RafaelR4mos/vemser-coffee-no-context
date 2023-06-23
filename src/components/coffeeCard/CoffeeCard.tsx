import { CoffeeCardContainer } from "./styles";

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

  return (
    <CoffeeCardContainer>
      <img src={coffeeTypes[coffeeType as keyof ICoffeeTypes]} />
      <span>Tradicional</span>

      <div>
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <div>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <button>1</button>
        <button>carrinho</button>
      </div>
    </CoffeeCardContainer>
  );
}
