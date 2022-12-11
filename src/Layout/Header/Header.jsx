import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="home_page_nav">
      <div className="nav_container">
        <div className="site_name">
          <h2>Deep Door</h2>
        </div>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search" />
          <BsSearch />
        </div>
        <div>
          <ul className="list_items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/best_items">Best Items</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
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
