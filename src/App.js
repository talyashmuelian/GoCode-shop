import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import Loading from "./components/Loading";

let productsArr = [];
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(productsArr);
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
      <div className="App">
        <Header onFilter={onFilter} />
        <Products products={products} />
      </div>
    );
  }
}

export default App;
