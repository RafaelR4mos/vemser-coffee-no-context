import { createContext, useState } from "react";
import { IChildren } from "../utils/interface";
import { ICoffee } from "./CoffeeContext";

interface ICartItem extends ICoffee {
  quantity: number;
}

interface IShoppingCart {
  shoppingCartList: ICartItem[] | [];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (idItemToRemove: number) => void;
  updateCoffeeQuantity: (
    idItemToUpdate: number,
    newQuantity: number,
    isIncrementQuantity: boolean
  ) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCart);

export function ShoppingCartProvider({ children }: IChildren) {
  const [shoppingCartList, setShoppingCartList] = useState<ICartItem[] | []>(
    []
  );

  function addItemToCart(item: ICartItem) {
    setShoppingCartList((state) => [...state, item]);
  }

  function updateCoffeeQuantity(
    idItemToUpdate: number,

    newQuantity: number,
    isIncrementQuantity: boolean
  ) {
    setShoppingCartList((state) =>
      state.map((coffee) => {
        if (coffee.id === idItemToUpdate) {
          if (isIncrementQuantity) {
            return { ...coffee, quantity: (newQuantity += 1) };
          } else {
            return coffee.quantity > 0
              ? { ...coffee, quantity: (newQuantity -= 1) }
              : coffee;
          }
        } else {
          return coffee;
        }
      })
    );
  }

  function removeItemFromCart(idItemToRemove: number) {
    setShoppingCartList((state) =>
      state.filter((item) => idItemToRemove !== item.id)
    );
  }

  // function getTotalPrice() {}

  console.log(shoppingCartList);

  return (
    <ShoppingCartContext.Provider
      value={{
        addItemToCart,
        shoppingCartList,
        removeItemFromCart,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
