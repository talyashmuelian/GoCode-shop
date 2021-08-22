import { Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState } from "react";
import ProductsContext from "../ProductsContext";

function valuetext(value) {
  return `${value}°C`;
}
const Header = ({
  categories,
  onFilter,
  products,
  handleChange,
  value,
  minPrice,
  maxPrice,
}) => {
  const [category, setCategory] = useState("All");

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div style={{ width: 300, margin: 30 }}>
        {" "}
        <Slider
          min={Math.floor(minPrice)}
          max={Math.ceil(maxPrice)}
          value={value}
          onChange={(e, value) => {
            handleChange(e, value, category);
          }}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
      <h1>{value[0]}</h1>
      <h1>{value[1]}</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              onFilter("All");
              onFilter(e.target.value);
              setCategory(e.target.value);
            }}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
export default Header;
