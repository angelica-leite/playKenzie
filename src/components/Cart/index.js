import Button from "../button";
import { useContext } from "react";

import { CartContext } from "../../providers/cart";

import { Container, Title } from "./styles";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";

const Cart = ({ type }) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <>
      <Title>Meu carrinho de compras</Title>
      <Container>
        <div>
          {cart.map((item) => (
            <Paper elevation={3}>
              <div key={item.id} className="item">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
                <Button type={type} item={item} />
              </div>
            </Paper>
          ))}
        </div>

        <div className="resume">
          <h3>Resumo do pedido</h3>
          <p>{cart.length} Produtos</p>
          <p>
            {totalPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button>Finalizar Compra</button>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;
