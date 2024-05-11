import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="flex space-x-4">
          <div className="text-lg font-bold">Gaming Blog</div>
          <div className="space-x-4">
            <a to="/" className="px-4 hover:text-green-400">
              Home
            </a>
            <a to="/games" className="px-4 hover:text-green-400">
              Games
            </a>
            <a to="/collections" className="px-4 hover:text-green-400">
              Collections
            </a>
            <a to="/wishlist" className="px-4 hover:text-green-400">
              Wishlist
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
