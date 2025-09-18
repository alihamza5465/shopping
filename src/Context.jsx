import React, { createContext, useState } from "react";

export const Context = createContext({});

const Provider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <Context.Provider
      value={{
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
