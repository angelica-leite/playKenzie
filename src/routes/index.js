import { Route, Switch } from "react-router-dom";
import Cart from "../components/Cart";
import ProductList from "../components/Products";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList type="catalogue" />
      </Route>
      <Route exact path="/Cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
