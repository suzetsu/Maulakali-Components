// TitleContext.js
import React, {useState} from 'react'
import { createContext, useContext } from "react";

const TitleContext = createContext();

export const useTitle = () => {
  return useContext(TitleContext);
};

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Hot Deals");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
