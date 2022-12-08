import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./AllProductCart.css";
const AllProducts = ({ product }) => {
  console.log(product);
  const { image, model, keyFeature, price, rating, spec } = product;
  return (
    <div className="product_cart">
      <img src={image} alt="" />
      <h2 className="model">{model}</h2>
      <p className="price">{price}</p>
      <p className="rating">{rating}</p>
      {keyFeature.map((feature) => (
        <p key={feature.index} className="feature">
          {feature.slice(0,32) + "..."}
        </p>
      ))}
      <button className="add_to_cart_btn">
        <AiOutlineShoppingCart /> <span>Add To Cart</span>
      </button>
    </div>
  );
};

export default AllProducts;
