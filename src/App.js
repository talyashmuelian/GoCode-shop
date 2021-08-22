import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import Loading from "./components/Loading";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Cart from "./components/Cart";
import CartContext from "./CartContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";

function App() {
  const [cartArr, setCartArr] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <CartContext.Provider value={{ cartArr, setCartArr, open, setOpen }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
