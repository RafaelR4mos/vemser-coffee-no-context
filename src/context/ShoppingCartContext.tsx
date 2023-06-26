import { createContext, useState } from "react";
import { IChildren } from "../utils/interface";
import { ICoffee } from "./CoffeeContext";

interface ICartItem extends ICoffee {
  quantity: number;
}

interface IShoppingCart {
  shoppingCartList: ICartItem[] | [];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (idItemToRemove: string) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCart);

export function ShoppingCartProvider({ children }: IChildren) {
  const [shoppingCartList, setShoppingCartList] = useState<ICartItem[] | []>(
    []
  );

  function addItemToCart(item: ICartItem) {
    setShoppingCartList((state) => [...state, item]);
  }

  function removeItemFromCart(idItemToRemove: string) {
    setShoppingCartList((state) =>
      state.filter((item) => idItemToRemove !== item.id)
    );
  }

  // function getTotalPrice() {}

  console.log(shoppingCartList);

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartList, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
