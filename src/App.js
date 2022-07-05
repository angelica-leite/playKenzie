import "./App.css";
import Header from "./components/Header";
import Global from "./styles/global";
import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <Header />
          <Routes />
          <Global />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
