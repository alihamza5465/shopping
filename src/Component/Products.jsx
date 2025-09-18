import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

const Products = () => {
  const { categories } = useParams();
  const tokenID = JSON.parse(localStorage.getItem("token"));
  const userID = tokenID._id;
  const [products, setProducts] = useState([]);
  const { setCartItem } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products");
        if (!categories) {
          setProducts(res.data);
        } else {
          const filterProduct = res.data.filter(
            (item) => item.category === categories
          );
          setProducts(filterProduct);
        }
      } catch (error) {
        toast.error("Failed to fetch products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  const handleProduct = async (id) => {
    const productID = id;

    try {
      const res = await axios.post("http://localhost:4000/cartitem", {
        userID,
        productID,
      });
      1;
      const updatedCart = res.data.cart;
      const itemCart = products.filter((item) =>
        updatedCart.productID.includes(item._id)
      );

      setCartItem((prev) => [...prev, ...itemCart]);
      toast(res.data.message);
    } catch (error) {
      toast("Something went wrong", error);
    }
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="shadow-md rounded-xl w-[90%] m-auto   flex flex-wrap gap-6 justify-center">
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
        <div className="flex flex-wrap gap-3 justify-center   max-w-[90%]  m-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md hover:shadow-lg bg-gray-100 transition-shadow duration-300 w-75  p-4 flex flex-col items-center"
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-contain h-full w-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-3 text-center">
                {item.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-xl font-bold text-indigo-600">
                  ${item.price}
                </span>
                {item.price && (
                  <span className="text-sm text-gray-400 line-through">
                    ${item.price + 20}
                  </span>
                )}
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
                  onClick={() => handleProduct(item._id)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition">
                  <FaHeart /> Wishlist
                </button>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Products;
