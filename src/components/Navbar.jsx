import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Games", path: "/games" },
    { label: "Collections", path: "/collections" },
    { label: "Wishlist", path: "/wishlist" },
  ];

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 container mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src="Logo.png"
          alt="logo"
          className="logo text-lg font-bold mt-2"
        />

        {/* Navigation links (hidden on mobile) */}
        <ul className="hidden lg:flex space-x-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-4 hover:text-red-600 ${
                  location.pathname === link.path ? "text-red-600" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile menu (dropdown) */}
      {showLinks && (
        <ul className="lg:hidden mt-4 space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block px-4 py-2 hover:text-red-600"
                onClick={() => setShowLinks(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
