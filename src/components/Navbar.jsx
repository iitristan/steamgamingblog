import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar () {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white py-4 h-full">
      <div className="container mx-auto flex justify-center items-center h-full px-8">
        <div className="flex space-x-4 items-center">
        <div className="text-lg font-bold"><img src="Logo.png" alt="logo" className="logo"></img></div>
          <div className="flex-grow"></div> {/* This will push the links to the center */}
          <div className="navlist flex justify-center space-x-4">
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
              className={`px-4 hover:text-red-00 ${
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
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
