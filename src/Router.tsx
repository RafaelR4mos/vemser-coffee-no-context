import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout/Checkout'
import { CoffeeProvider } from './context/CoffeeContext'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

export function Router() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ShoppingCartProvider>
      </CoffeeProvider>
    </BrowserRouter>
  )
}
