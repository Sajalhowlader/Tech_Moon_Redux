import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllProducts from "../Component/AllProducts/AllProducts";
const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <section>
      <div className="products_container">
        {products.map((product) => (
          <AllProducts key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
