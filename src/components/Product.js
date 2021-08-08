import Products from "./Products";

const Product = ({image, title,price,description,category}) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={image} />
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h5 >{category}</h5>
                <br/>
                <h3>{price}</h3>
                <br/>
                <h6>{description}</h6>
                
            </div>
        </div>

    );
};
export default Product;