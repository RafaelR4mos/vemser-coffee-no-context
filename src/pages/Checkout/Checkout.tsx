import { Button, IconButton, TextField } from '@mui/material'
import { Header } from '../../components/Header/Header'
import {
  ActionsContainer,
  CheckoutButtonContainer,
  CheckoutPageContainer,
  CoffeeTitle,
  CoffeeValue,
  ConfirmButton,
  FormContainer,
  SelectedCoffee,
  SelectedCoffeeContainer,
  TotalContainer,
} from './styles'
import { Add, DeleteOutlineOutlined, Remove } from '@mui/icons-material'

export function Checkout() {
  const isCoffeeSelected = true

  return (
    <>
      <Header />
      <CheckoutPageContainer>
        <FormContainer>
          <h2>Complete seu pedido</h2>

          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço para receber seu cafézinho</p>
            <form>
              <TextField
                label="CEP"
                placeholder="CEP"
                required
                sx={{ width: '40%' }}
              />
              <TextField
                label="Rua"
                placeholder="Rua"
                required
                sx={{ width: '100%' }}
              />
              <TextField
                label="Número"
                placeholder="Número"
                required
                sx={{ width: '40%' }}
              />
              <TextField
                label="Complemento"
                placeholder="Complemento"
                sx={{ width: 'calc(60% - 0.75rem)' }}
              />
              <TextField
                label="Bairro"
                placeholder="Bairro"
                required
                sx={{ width: 'calc(44% - 0.75rem)' }}
              />
              <TextField
                label="Cidade"
                placeholder="Cidade"
                required
                sx={{ width: 'calc(44% - 0.75rem)' }}
              />
              <TextField
                label="UF"
                placeholder="UF"
                required
                sx={{ width: '12%' }}
              />
            </form>
          </div>
        </FormContainer>

        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffeeContainer>
            {isCoffeeSelected ? (
              <>
                <SelectedCoffee>
                  <img
                    src={`${
                      import.meta.env.BASE_URL
                    }public/expresso-tradicional.png`}
                  />
                  <div>
                    <CoffeeTitle>Nome café</CoffeeTitle>
                    <ActionsContainer>
                      <CheckoutButtonContainer>
                        <IconButton title="Diminuir quantidade">
                          <Remove />
                        </IconButton>
                        <span>2</span>
                        <IconButton title="Aumentar quantidade">
                          <Add />
                        </IconButton>
                      </CheckoutButtonContainer>
                      <CheckoutButtonContainer>
                        <Button
                          startIcon={<DeleteOutlineOutlined />}
                          sx={{ color: '#000' }}
                        >
                          Remover
                        </Button>
                      </CheckoutButtonContainer>
                    </ActionsContainer>
                  </div>
                  <CoffeeValue>{`R$ 00,00`}</CoffeeValue>
                </SelectedCoffee>

                <TotalContainer>
                  <span>
                    <span>Total de itens</span>
                    <span>R$ 29,70</span>
                  </span>
                  <span>
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                  </span>
                  <span>
                    <strong>Total</strong>
                    <strong>R$ 33,20</strong>
                  </span>

                  <ConfirmButton>Confirmar pedido!</ConfirmButton>
                </TotalContainer>
              </>
            ) : (
              <p>Não foram adicionados nenhum item ao carrinho</p>
            )}
          </SelectedCoffeeContainer>
        </div>
      </CheckoutPageContainer>
    </>
  )
}
