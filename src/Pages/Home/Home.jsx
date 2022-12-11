import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllProducts from "../Component/AllProducts/AllProducts";
const Home = () => {
  const state = useSelector((state) => state);
  // console.log(state);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <section>
      <div className="filter_btn_container">
        <button>In Stock</button>
        <button>AMD</button>
        <button>Intel</button>
      </div>
      <div className="products_container">
        {products.map((product) => (
          <AllProducts key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
