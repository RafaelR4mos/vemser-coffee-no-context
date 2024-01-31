import { createContext, useState } from 'react'
import { IChildren, ICoffee } from '../utils/interface'

interface CartProduct extends ICoffee {
  quantity: number
}

interface ShoppingCartContext {
  cartProducts: CartProduct[] | []
  addProductToCart: (product: CartProduct) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: IChildren) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: CartProduct) {
    setCartProducts((state) => [...state, product])
  }

  console.log(cartProducts)

  return (
    <ShoppingCartContext.Provider value={{ cartProducts, addProductToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
