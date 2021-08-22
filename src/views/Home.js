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
import ProductsContext from "../ProductsContext";
import { Slider } from "@material-ui/core";

let productsArr = [];
const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function Home() {
  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();
  //the value for slider
  const [value, setValue] = useState([]);

  const handleChange = (event, newValue, category) => {
    setValue(newValue);
    onFilterByPriceSlider(category);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); //= Object.keys(groupBy(productList, 'category'));

  const onFilter = (category) => {
    if (category !== "All") {
      setProducts(
        productsArr.filter(
          (product) =>
            product.price >= value[0] &&
            product.price <= value[1] &&
            product.category === category
        )
      );
    } else {
      setProducts(
        productsArr.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        )
      );
    }
  };
  const onFilterByPriceSlider = (category) => {
    if (category !== "All") {
      setProducts(
        productsArr.filter(
          (product) =>
            product.price >= value[0] &&
            product.price <= value[1] &&
            product.category === category
        )
      );
    } else {
      setProducts(
        productsArr.filter(
          (product) => product.price >= value[0] && product.price <= value[1]
        )
      );
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
        const maxPriceInitial = Math.max.apply(
          Math,
          productsArr.map(function (o) {
            return o.price;
          })
        );
        setMaxPrice(Math.ceil(maxPriceInitial));
        const minPriceInitial = Math.min.apply(
          Math,
          productsArr.map(function (o) {
            return o.price;
          })
        );
        setMinPrice(Math.floor(minPriceInitial));
        setValue([Math.floor(minPriceInitial), Math.ceil(maxPriceInitial)]);
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
      <div className="App">
        <Header
          categories={categories}
          onFilter={onFilter}
          products={products}
          handleChange={handleChange}
          value={value}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <Cart />
        <br /> <br /> <br /> <br />
        <Products products={products} />
      </div>
    );
  }
}
export default Home;
