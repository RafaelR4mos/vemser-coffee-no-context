import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";
import { CheckoutSuccess } from "./pages/CheckoutSuccess/CheckoutSuccess";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
