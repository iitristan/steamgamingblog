import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="flex space-x-4">
          <div className="text-lg font-bold"><img src="Logo.png" alt="logo" className="logo"></img></div>
          <div className="navlist space-x-4">
            <Link
              to="/"
              className={`px-4 hover:text-red-600 ${
                location.pathname === "/" ? "text-red-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/games"
              className={`px-4 hover:text-red-600 ${
                location.pathname === "/games" ? "text-red-600" : ""
              }`}
            >
              Games
            </Link>
            <Link
              to="/collections"
              className={`px-4 hover:text-red-600 ${
                location.pathname === "/collections" ? "text-red-600" : ""
              }`}
            >
              Collections
            </Link>
            <Link
              to="/wishlist"
              className={`px-4 hover:text-red-600 ${
                location.pathname === "/wishlist" ? "text-red-600" : ""
              }`}
            > Wishlist
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="searchbar px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;