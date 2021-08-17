import { Button } from "@material-ui/core";
import { useContext } from "react";
import CartContext from "../CartContext";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Product = ({ id, image, title, price, description, category }) => {
  const { cartArr, setCartArr, open, setOpen } = useContext(CartContext);
  const onAdd = () => {
    if (!cartArr.some((p) => p.title === title)) {
      setCartArr((cartArr) => [
        ...cartArr,
        { title: title, price: price, amount: 1 },
      ]);
    } else {
      let currentProduct = cartArr.find((p) => p.title === title);
      let prevAmount = currentProduct.amount;
      let prevPrice = currentProduct.price;
      setCartArr(cartArr.filter((product) => product.title !== title));
      setCartArr((cartArr) => [
        ...cartArr,
        { title: title, price: prevPrice + price, amount: prevAmount + 1 },
      ]);
    }
    setOpen(true);
  };
  const onRemove = () => {
    let currentProduct = cartArr.find((p) => p.title === title);
    let prevAmount = currentProduct.amount;
    let prevPrice = currentProduct.price;
    setCartArr(cartArr.filter((product) => product.title !== title));
    setCartArr((cartArr) => [
      ...cartArr,
      { title: title, price: prevPrice - price, amount: prevAmount - 1 },
    ]);
    if (prevAmount === 1) {
      setCartArr(cartArr.filter((product) => product.title !== title));
    }
    setOpen(true);
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h5>{category}</h5>
        <br />
        <h3>{price}</h3>
        <br />
        <Link to={`/products/${id}`}> see more..</Link>
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={onAdd}>
          +
        </Button>
        <Button variant="contained" onClick={onRemove}>
          -
        </Button>
        {/* <h6>{description}</h6> */}
      </div>
    </div>
  );
};
export default Product;
