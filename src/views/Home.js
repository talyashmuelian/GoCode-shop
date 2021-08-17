import { useEffect, useState } from "react";
//import logo from "./logo.svg";
import Header from "../components/Header";
import Products from "../components/Products";
import Product from "../components/Product";
import Loading from "../components/Loading";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Cart from "../components/Cart";
import CartContext from "../CartContext";

let productsArr = [];
const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); //= Object.keys(groupBy(productList, 'category'));
  const [cartArr, setCartArr] = useState([
    { title: "hi", price: 70, amount: 1 },
    { title: "hi2", price: 30, amount: 2 },
  ]);
  const [open, setOpen] = useState(false);
  const onFilter = (category) => {
    if (category !== "All") {
      setProducts(
        productsArr.filter((product) => product.category === category)
      );
    } else {
      setProducts(productsArr);
    }
  };
  useEffect(() => {
    console.log("AFTER FIRST RENDER");
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        productsArr = json;
        setCategories(["All", ...Object.keys(groupBy(json, "category"))]);
        setIsLoading(false);
      });
    console.log("here");
  }, []);
  if (isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  } else {
    return (
      <CartContext.Provider value={{ cartArr, setCartArr, open, setOpen }}>
        <div className="App">
          <Header categories={categories} onFilter={onFilter} />
          <Cart />
          <br /> <br /> <br /> <br />
          <Products products={products} />
        </div>
      </CartContext.Provider>
    );
  }
}
export default Home;
