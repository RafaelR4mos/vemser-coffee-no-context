import { Header } from '../../components/Header/Header'
import coffeeImg from '../../../public/xicara-cafe.png'
import {
  BigHeroSection,
  CoffeeSection,
  CoffeesContainer,
  CustomButton,
} from './styles'
import { DefaultPageLayoutContainer } from '../styles'

export function Home() {
  return (
    <>
      <Header />
      <DefaultPageLayoutContainer>
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
            <CustomButton onClick={() => (window.location.href = '#coffees')}>
              Confira!
            </CustomButton>
          </div>
          <div>
            <img src={coffeeImg} alt="xicara de café preto" />
          </div>
        </BigHeroSection>
        <CoffeeSection id="coffees">
          <h2>Nossos melhores cafés</h2>
          <CoffeesContainer>
            <h2>Nenhum café encontrado</h2>
          </CoffeesContainer>
        </CoffeeSection>
      </DefaultPageLayoutContainer>
    </>
  )
}
