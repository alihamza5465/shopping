import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Store navbar items in an array
  const navItems = [
    "New Arrivals",
    "Jeans-Shirts",
    "Track-Suit",
    "Trousers",
    "Hoodies & Sweatshirts",
    "Sale / Offers",
    "Summer Collection",
    "Winter Collection",
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto no-scrollbar">
          <nav className="flex items-center justify-between space-x-6 py-3 text-sm text-gray-600 whitespace-nowrap">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="font-medium text-gray-800"
                to={`/products/${encodeURIComponent(item)}`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
