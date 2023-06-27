import { Button, IconButton, TextField } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
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
} from "./styles";
import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function Checkout() {
  const { shoppingCartList, removeItemFromCart, updateCoffeeQuantity } =
    useContext(ShoppingCartContext);

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
                sx={{ width: "40%" }}
              />
              <TextField
                label="Rua"
                placeholder="Rua"
                required
                sx={{ width: "100%" }}
              />
              <TextField
                label="Número"
                placeholder="Número"
                required
                sx={{ width: "40%" }}
              />
              <TextField
                label="Complemento"
                placeholder="Complemento"
                sx={{ width: "calc(60% - 0.75rem)" }}
              />
              <TextField
                label="Bairro"
                placeholder="Bairro"
                required
                sx={{ width: "calc(44% - 0.75rem)" }}
              />
              <TextField
                label="Cidade"
                placeholder="Cidade"
                required
                sx={{ width: "calc(44% - 0.75rem)" }}
              />
              <TextField
                label="UF"
                placeholder="UF"
                required
                sx={{ width: "12%" }}
              />
            </form>
          </div>
        </FormContainer>

        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffeeContainer>
            {shoppingCartList.length > 0 ? (
              <>
                {shoppingCartList.map((coffee) => {
                  return (
                    <SelectedCoffee key={coffee.id}>
                      <img
                        src={`${import.meta.env.BASE_URL}src/assets/${
                          coffee.img
                        }.png`}
                      />
                      <div>
                        <CoffeeTitle>{coffee.name}</CoffeeTitle>
                        <ActionsContainer>
                          <CheckoutButtonContainer>
                            <IconButton
                              title="Diminuir quantidade"
                              onClick={() =>
                                updateCoffeeQuantity(
                                  coffee.id,
                                  coffee.quantity,
                                  false
                                )
                              }
                            >
                              <Remove />
                            </IconButton>
                            <span>{coffee.quantity}</span>
                            <IconButton
                              title="Aumentar quantidade"
                              onClick={() =>
                                updateCoffeeQuantity(
                                  coffee.id,
                                  coffee.quantity,
                                  true
                                )
                              }
                            >
                              <Add />
                            </IconButton>
                          </CheckoutButtonContainer>
                          <CheckoutButtonContainer>
                            <Button
                              startIcon={<DeleteOutlineOutlined />}
                              sx={{ color: "#000" }}
                              onClick={() => removeItemFromCart(coffee.id)}
                            >
                              Remover
                            </Button>
                          </CheckoutButtonContainer>
                        </ActionsContainer>
                      </div>
                      <CoffeeValue>{`R$ ${coffee.value}`}</CoffeeValue>
                    </SelectedCoffee>
                  );
                })}

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
  );
}
