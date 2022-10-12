import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import contact from "../assets/images/contact.png";
import artists from "../assets/images/artists.png";

function Navbar() {
  return (
    <div className="flex justify-between bg-black text-white">
      <Link to="/">
        <img className="h-20 w-auto" src={logo} alt="logo" />
      </Link>
      <div className="flex justify-around w-2/6">
        <Link to="/artists">
          <img className="h-10 w-auto" src={artists} alt="logo" />
        </Link>
        <Link to="/contact">
          <img className="h-10 w-auto" src={contact} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
