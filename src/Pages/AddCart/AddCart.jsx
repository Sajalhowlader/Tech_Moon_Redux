import React from "react";
import { useSelector } from "react-redux";
import AllProducts from "../Component/AllProducts/AllProducts";

const AddCart = () => {
  const carts = useSelector((state) => state.cart);
  // console.log(cart)
  return (
    <section className="cart_container">
      {carts.map((product) => (
        <AllProducts key={product._id} product={product} />
      ))}
    </section>
  );
};

export default AddCart;
