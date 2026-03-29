import React from "react";
import logo from "../assets/logo-main.png";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-15 backdrop-blur-lg shadow-lg fixed top-0 w-full z-50 bg-white/60">
      <div>
        <img src={logo} alt="logo" className="max-w-35" />
      </div>
      <div>
        <ul className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/deals">Deals</NavLink>
          <NavLink to="/Vegetable">Vegetable</NavLink>
          <NavLink to="/newarrivals">New Arrivals</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Link to="/login" className="btn btn-accent">
          Login
        </Link>
        <Link to="/cart" className="text-3xl btn btn-accent">
          <PiShoppingCartSimpleLight />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
