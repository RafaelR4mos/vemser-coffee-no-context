import { createContext, useState } from 'react'
import { IChildren, ICoffee } from '../utils/interface'
import { API } from '../utils/api'

interface CoffeeContextType {
  coffeeData: ICoffee[] | null
  getAllCoffees: () => Promise<void>
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeProvider({ children }: IChildren) {
  const [coffeeData, setCoffeeData] = useState(null)

  async function getAllCoffees() {
    try {
      const response = await fetch(`${API}/coffees`)

      if (!response.ok) {
        throw new Error('Os cafés não foram encontrados')
      }

      const data = await response.json()
      setCoffeeData(data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <CoffeeContext.Provider value={{ coffeeData, getAllCoffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
