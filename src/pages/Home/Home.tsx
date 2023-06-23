import { Header } from "../../components/Header/Header";
import coffeeImg from "../../assets/xicara-cafe.png";
import {
  BigHeroSection,
  CoffeeSection,
  CoffeesContainer,
  CoffeesSection,
} from "./styles";
import { CoffeeCard } from "../../components/coffeeCard/CoffeeCard";

export function Home() {
  return (
    <>
      <Header />
      <BigHeroSection>
        <div>
          <h1>
            Prove apenas do melhor café de todos! Feito para qualquer momento
          </h1>
          <p>
            O café vem ser é equilibrado, porém com a dose certa de intesidade
            para te manter acordado durante o dia inteiro. Ta esperando o que
            para provar?
          </p>
          <button>Confira!</button>
        </div>
        <div>
          <img src={coffeeImg} alt="xicara de café preto" />
        </div>
      </BigHeroSection>
      <CoffeeSection>
        <h2>Nossos melhores cafés</h2>
        <CoffeesContainer>
          <CoffeeCard coffeeType="expresso" />
          <CoffeeCard coffeeType="expressoCremoso" />
          <CoffeeCard coffeeType="mochaccino" />
          <CoffeeCard coffeeType="expressoCremoso" />
          <CoffeeCard coffeeType="mochaccino" />
          <CoffeeCard coffeeType="expresso" />
          <CoffeeCard coffeeType="mochaccino" />
          <CoffeeCard coffeeType="mochaccino" />
        </CoffeesContainer>
      </CoffeeSection>
    </>
  );
}
