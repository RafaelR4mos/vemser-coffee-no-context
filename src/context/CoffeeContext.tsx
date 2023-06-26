import { createContext, useState } from "react";
import { IChildren } from "../utils/interface";

interface ICoffeeContext {
  coffeeList: ICoffee[];
  getCoffee: () => void;
}

export interface ICoffee {
  id: string;
  name: string;
  description: string;
  value: number;
  type: string[];
  img: string;
}

export const CoffeeContext = createContext({} as ICoffeeContext);

export function CoffeeProvider({ children }: IChildren) {
  const [coffeeList, setCoffeeList] = useState([]);

  async function getCoffee() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/coffees`);
      if (response.ok) {
        setCoffeeList(await response.json());
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CoffeeContext.Provider value={{ coffeeList, getCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
}
