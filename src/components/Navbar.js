import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex space-x-4 bg-black text-white">
      <Link to="/">
        <img className="max-w-sm h-auto" src={logo} alt="logo" />
      </Link>
      <Link to="/artists">
        <p>Artists</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
    </div>
  );
}

export default Navbar;
