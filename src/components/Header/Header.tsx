import { IconButton } from "@mui/material";
import { ShoppingCart, Coffee } from "@mui/icons-material";
import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <IconButton onClick={() => navigate("/")}>
        <Coffee
          aria-label="vem ser coffee"
          titleAccess="Vem ser coffee ícone"
          sx={{ fontSize: "48px", cursor: "pointer" }}
        />
      </IconButton>
      <div>
        <span>Porto Alegre, RS</span>
        <IconButton aria-label="carrinho" onClick={() => navigate("checkout")}>
          <ShoppingCart />
        </IconButton>
      </div>
    </HeaderContainer>
  );
}
