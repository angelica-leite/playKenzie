import { useContext } from "react";

import { CartContext } from "../../providers/cart";

const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text =
    type === "catalogue" ? "Adicionar ao carrinho" : "Remover do carrinho";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
