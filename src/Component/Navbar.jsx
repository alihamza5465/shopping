import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto no-scrollbar">
            <nav className="flex items-center justify-between space-x-6 py-3 text-sm text-gray-600 whitespace-nowrap">
              <a className="font-medium text-gray-800" href="#">
                New Arrivals
              </a>
              <a className="font-medium text-gray-800" href="#">
                Jeans/Shirts
              </a>
              <a className="font-medium text-gray-800" href="#">
                Track-Suit
              </a>

              <a className="font-medium text-gray-800" href="#">
                Trousers
              </a>
              <a className="font-medium text-gray-800" href="#">
                Hoodies & Sweatshirts
              </a>
              <a className="font-medium text-gray-800" href="#">
                Sale / Offers
              </a>
              <a className="font-medium text-gray-800" href="#">
                Summer Collection
              </a>
              <a className="font-medium text-gray-800" href="#">
                Winter Collection
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
