import React, { createContext, useState } from "react";

export const GetProduct = createContext();

const Product = ({ children }) => {
  const [product, setProduct] = useState({});
  return (
    <GetProduct.Provider value={[product, setProduct]}>
      {children}
    </GetProduct.Provider>
  );
};

export default Product;
