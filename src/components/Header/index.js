import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Container } from "./styles";
import { Badge } from "@mui/material";
import { CartContext } from "../../providers/cart";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h2>PlayKenzie</h2>

      <div className="btns">
        <Link to="/Cart">
          <button>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
            Carrinho
          </button>
        </Link>
        <button>
          <ExitToAppIcon />
          Entrar
        </button>
      </div>
    </Container>
  );
};

export default Header;
