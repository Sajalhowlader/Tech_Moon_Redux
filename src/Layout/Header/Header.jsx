import React from "react";
import './Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="home_page_nav">
      <div className="nav_container">
        <div className="site_name">
          <h2>Deep Door</h2>
        </div>
        <div>
          <ul className="list_items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/best_items">Best Items</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mycart">
              <AiOutlineShoppingCart />
            </NavLink>
            <NavLink to="/report">
              <TbReport />
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
