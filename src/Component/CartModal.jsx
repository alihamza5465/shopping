import React, { useState } from "react";

const CartModal = ({ onClose }) => {
  //   if (!isOpen) return null; // Hide when modal is closed

  const [cartItems, setCartItem] = useState([]);

  return (
    <div className="fixed top-20  flex right-10 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] max-h-[500px] overflow-y-auto p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        If cart is empty
        {/* {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : ( */}
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center gap-3">
                {item.imageUrl && (
                  <img
                    //   src={item.imageUrl}
                    //   alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="font-medium">Hood</h3>
                  <p className="text-sm text-gray-500">
                    {/* Qty: {item.quantity} */}2
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {/* ${item.price * item.quantity}
                     */}
                    200
                  </p>
                </div>
              </div>

              <button
                //   onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Checkout button */}
          <button
            className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
            //   onClick={() => alert("Proceeding to checkout...")}
          >
            Checkout
          </button>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default CartModal;
