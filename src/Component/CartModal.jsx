import React, { useState, useEffect } from "react";
// import { Context } from "../Context";
import axios from "axios";
import { toast } from "react-toastify";

const CartModal = ({ onClose, cartProduct }) => {
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(1);

  const token = JSON.parse(localStorage.getItem("token")) || null;
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:4000/getcart", {
          params: { userID: token._id }, // send userID as query param
        });
        // console.log(res.data.products);
        setCartItem(res.data.products);

        // toast(res.data.message);
      } catch (error) {
        toast("Something went wrong");
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  console.log(cartItem);

  const onRemove = async (id) => {
    console.log("Removing item with id:", id);

    try {
      const res = await axios.post("http://localhost:4000/removecart", {
        removeID: id,
        userID: token._id,
      });
      // console.log(res.data);
      const newCart = setCartItem((prev) =>
        prev.filter((item) => item._id !== id)
      );
      console.log(newCart);
      console.log(res.data); // check response
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const increment = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 } // increment only this product
          : item
      )
    );
    setCount((prev) => prev + 1);
  };
  const decrement = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } // decrement, min 1
          : item
      )
    );
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <>
      <div className="fixed top-20 flex right-10 z-50">
        <div className="bg-white rounded-lg shadow-lg w-[400px] max-h-[500px] overflow-y-auto p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>

          {!cartItem || cartItem.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  {/* Left: Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imageUrl} // show product image if available
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        ${item.price} each
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm font-semibold"
                          onClick={() => decrement(item._id)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border rounded text-sm bg-gray-50">
                          {item.quantity || 1}
                        </span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm font-semibold"
                          onClick={() => increment(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price and Remove */}
                  <div className="flex flex-col items-end justify-between h-full">
                    <p className="text-sm font-semibold text-blue-600">
                      ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </p>
                    <button
                      className="mt-2 text-red-500 hover:text-red-700 text-sm font-medium"
                      onClick={() => onRemove(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Checkout Button */}
              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
