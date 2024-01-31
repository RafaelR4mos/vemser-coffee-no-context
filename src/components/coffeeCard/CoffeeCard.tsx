import { Add, AddShoppingCart, Remove } from '@mui/icons-material'
import {
  CardInfoContainer,
  CoffeeCardContainer,
  CoffeeTagsContainer,
  CoffeeValueContainer,
  IncrementDecrementContainer,
} from './styles'
import { IconButton } from '@mui/material'
import { useState } from 'react'

interface ICoffeeCardProps {
  coffeeData: any
}

export function CoffeeCard({ coffeeData }: ICoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  function handleCoffeeQuantity(isIncrement: boolean) {
    if (isIncrement) {
      setCoffeeQuantity((state) => (state += 1))
    } else if (coffeeQuantity > 0) {
      setCoffeeQuantity((state) => (state -= 1))
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={`/${coffeeData.img}.png`} />

      <CoffeeTagsContainer>
        {coffeeData.type
          ? coffeeData.type.map((type: string) => {
              return <span key={type}>{type}</span>
            })
          : null}
      </CoffeeTagsContainer>

      <div>
        <strong>{coffeeData.name}</strong>
        <p>{coffeeData.description}</p>
      </div>

      <CardInfoContainer>
        <CoffeeValueContainer>
          R$ <strong>{coffeeData.value}</strong>
        </CoffeeValueContainer>
        <div>
          <IncrementDecrementContainer>
            <IconButton
              title="Diminuir quantidade"
              onClick={() => handleCoffeeQuantity(false)}
            >
              <Remove />
            </IconButton>
            <span>{coffeeQuantity}</span>
            <IconButton
              title="Aumentar quantidade"
              onClick={() => handleCoffeeQuantity(true)}
            >
              <Add />
            </IconButton>
          </IncrementDecrementContainer>
          <IconButton
            sx={{
              backgroundColor: '#b47150',
              color: '#FFF',
              '&:hover': { backgroundColor: '#bc8062' },
            }}
            title="Adicionar ao carrinho"
          >
            <AddShoppingCart />
          </IconButton>
        </div>
      </CardInfoContainer>
    </CoffeeCardContainer>
  )
}
