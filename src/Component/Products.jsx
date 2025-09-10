import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";
import first from "../assets/product.jpeg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Products = () => {
  // Try with [] to test skeletons
  const product = [
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
    {
      image: first,
      title: "Niker",
      price: 2000,
      originalPrice: 4000,
    },
  ];

  return (
    <>
      {product.length === 0 ? (
        <div className="shadow-md rounded-xl w-[80%] m-auto my-10 flex flex-wrap gap-6 justify-center">
          {Array(5)
            .fill()
            .map((_, i) => (
              <Skeleton
                key={i}
                width={250} // Card width
                height={300} // Card height
                baseColor="#e0e0e0"
                highlightColor="#f5f5f5"
                borderRadius={12}
                className="shadow-md rounded-xl"
              />
            ))}
        </div>
      ) : (
        // ✅ Show real products
        <div className="flex flex-wrap gap-6 justify-center my-10 max-w-[80%] shadow-md rounded-xl bg-gray-400 m-auto">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-75 m-4 p-4 flex flex-col items-center"
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain h-full w-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-3 text-center">
                {item.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl font-bold text-indigo-600">
                  ${item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${item.originalPrice}
                  </span>
                )}
              </div>

              <div className="mt-4 flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition">
                  <FaHeart /> Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
