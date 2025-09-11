import React, { use } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token")) || null;
  console.log(token);
  const logoutFunction = () => {
    if (token) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  };
  return (
    <>
      <header className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="text-white text-2xl font-bold italic" href="#">
                  Flipkart
                </a>
                <p className="text-yellow-300 text-xs italic">
                  Explore <span className="text-white">Plus</span>
                  <span className="text-yellow-300 font-bold">+</span>
                </p>
              </div>
            </div>

            {/* Search bar (desktop) */}
            <div className="hidden md:flex flex-1 mx-4">
              <div className="relative w-full max-w-lg mx-auto">
                <input
                  className="w-full h-10 px-4 py-2 pr-10 text-sm bg-white rounded-sm focus:outline-none shadow-inner"
                  placeholder="Search for products, brands and more"
                  type="text"
                />
                <button
                  className="absolute top-1 right-0 mt-2 mr-3"
                  type="submit"
                >
                  <span className="material-icons text-blue-600">
                    <FaSearch />
                  </span>
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Link
                onClick={logoutFunction}
                className="hidden md:block bg-white text-blue-600 px-8 py-2 text-sm font-semibold rounded-sm"
                to="/signin"
              >
                {token ? "Logout" : "Login/Signup"}
              </Link>

              <a className="flex items-center text-white" href="#">
                <span className="material-icons">
                  <FaShoppingCart />
                </span>
                <span className="ml-1 font-semibold">Cart</span>
              </a>

              {/* Mobile menu button */}
            </div>
          </div>

          {/* Search bar (mobile) */}
          <div className="md:hidden py-2">
            <div className="relative w-full">
              <input
                className="w-full h-10 px-4 py-2 pr-10 text-sm bg-white rounded-sm focus:outline-none shadow-inner"
                placeholder="Search for products, brands and more"
                type="text"
              />
              <button
                className="absolute top-1 right-0 mt-2 mr-3"
                type="submit"
              >
                <span className="material-icons text-blue-600">
                  <FaSearch />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
