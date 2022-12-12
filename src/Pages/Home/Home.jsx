import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleBrands,
  toggleStocks,
} from "../../Redux/ActionCreator/FiltersAction";
import AllProducts from "../Component/AllProducts/AllProducts";
const Home = () => {
  const filters = useSelector((state) => state.filter.filters);
  const { brands, stock } = filters;
  console.log(brands, stock);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  // http://localhost:5000/products
  useEffect(() => {
    fetch(" http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const active_toggle_btn = "active_toggle_btn";
  let content;
  if (products.length) {
    content = products.map((product) => (
      <AllProducts key={product._id} product={product} />
    ));
  }
  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <AllProducts key={product._id} product={product} />);
  }
  return (
    <section>
      <div className="filter_btn_container">
        <button
          className={`toggle_btn ${stock ? active_toggle_btn : null}  `}
          onClick={() => dispatch(toggleStocks())}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`toggle_btn ${
            brands.includes("amd") ? active_toggle_btn : null
          }`}
        >
          AMD
        </button>
        <button
          className={`toggle_btn ${
            brands.includes("intel") ? active_toggle_btn : null
          }`}
          onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div>
      <div className="products_container">{content}</div>
    </section>
  );
};

export default Home;
