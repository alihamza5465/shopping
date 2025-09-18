import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context";

const CartModal = ({ onClose, cartProduct }) => {
  // const [cartItem, setCartItem] = useState([]);
  // const [modal, setModal] = useState(false);
  // setCartItem(cartProduct);
  // console.log("cart items:", cartItem);\
  const { cartItem } = useContext(Context);
  console.log(cartItem);
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

          {cartItem.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold text-blue-600">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  <button
                    className="text-red-500 hover:text-red-700 text-sm"
                    // onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
