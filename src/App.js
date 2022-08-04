import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import { store } from "./store";
import { Provider, useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
