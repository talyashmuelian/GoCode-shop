import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      <div className="product-image">
        <img src={product && product.image} />
      </div>
      <div className="product-info">
        <h5>{product && product.title}</h5>
        <h5>{product && product.category}</h5>
        <br />
        <h3>{product && product.price}</h3>
        <br />
        <h6>{product && product.description}</h6>
        <br />
      </div>
    </div>
  );
}
export default ProductDetails;
