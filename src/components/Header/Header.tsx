import { Badge, IconButton } from '@mui/material'
import { ShoppingCart, Coffee } from '@mui/icons-material'
import { HeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

export function Header() {
  const navigate = useNavigate()
  const { cartProducts } = useContext(ShoppingCartContext)

  return (
    <HeaderContainer>
      <IconButton onClick={() => navigate('/')}>
        <Coffee
          aria-label="vem ser coffee"
          titleAccess="Vem ser coffee ícone"
          sx={{ fontSize: '48px', cursor: 'pointer' }}
        />
      </IconButton>
      <div>
        <span>Porto Alegre, RS</span>
        <IconButton aria-label="carrinho" onClick={() => navigate('checkout')}>
          <Badge badgeContent={cartProducts.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </HeaderContainer>
  )
}
