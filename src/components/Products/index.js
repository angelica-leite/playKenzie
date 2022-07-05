import Button from "../button";
import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";

import { Container } from "./styles";

import { Paper } from "@mui/material";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      {catalogue.map((item) => (
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
    </Container>
  );
};

export default ProductList;
