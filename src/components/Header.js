import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="px-6 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* {button} */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/">
            Log In
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3
          rounded-lg transition"
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
