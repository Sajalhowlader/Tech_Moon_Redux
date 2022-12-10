import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../../../Redux/ActionCreator/ProductAcction";
import "./AllProductCart.css";
const AllProducts = ({ product }) => {
  const { pathname } = useLocation();
  const { image, model, keyFeature, price, rating, spec } = product;
  const dispatch = useDispatch();
  return (
    <div className="product_cart">
      <img src={image} alt="" />
      <h2 className="model">{model}</h2>
      <p className="price">Price : {price}</p>
      <p className="rating">Rating : {rating}</p>
      {keyFeature.map((feature,index) => (
        <p key={index} className="feature">
          {feature.slice(0, 32) + "..."}
        </p>
      ))}
      <button
        className="add_to_cart_btn"
        onClick={() => dispatch(addToCart(product))}
      >
        <AiOutlineShoppingCart /> <span> Add To Cart</span>
      </button>
      {pathname.includes("mycart") && (
        <button
          className="add_to_cart_btn remove_btn"
          onClick={() => dispatch(removeFromCart(product))}
        >
          <MdOutlineDeleteOutline /> <span>Remove From Cart</span>
        </button>
      )}
    </div>
  );
};

export default AllProducts;
