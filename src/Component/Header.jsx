import React, { use, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "./CartModal";

const Header = () => {
  const navigate = useNavigate();
  const [cartModal, setCartModal] = useState(false);
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const logoutFunction = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/signin");
    }
  };

  const carthandle = () => {
    setCartModal(!cartModal);
  };
  return (
    <>
      <header className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link className="text-white text-2xl font-bold italic" to="/">
                  Own-Shop
                </Link>
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

              <div
                className="flex items-center text-white cursor-pointer"
                onClick={carthandle}
              >
                <span className="material-icons">
                  <FaShoppingCart />
                </span>
                <span className="ml-1 font-semibold">Cart</span>
              </div>

              {cartModal && <CartModal onClose={() => setCartModal(false)} />}

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
