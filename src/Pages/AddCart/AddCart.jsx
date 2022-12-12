import React from "react";
import { useSelector } from "react-redux";
import AllProducts from "../Component/AllProducts/AllProducts";

const AddCart = () => {
  const carts = useSelector((state) => state.product.cart);
  console.log(carts);
  return (
    <section className="cart_container">
      {carts
        .sort((a, b) => a.cartPosition - b.cartPosition)
        .map((product) => (
          <AllProducts key={product._id} product={product} />
        ))}
    </section>
  );
};

export default AddCart;
