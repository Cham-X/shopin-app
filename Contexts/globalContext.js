import React, { useContext, useState } from "react";
import SHOP_DATA from "../data/shoppingData";

export const AppContext = React.createContext();

const allCategories = ["All Products", ...new Set(SHOP_DATA.map((item) => item.category))];
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState(allCategories);
  const [product, setProduct] = useState(SHOP_DATA)

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(category);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filterItems = () => {
    if (category === "All Products") {
      setCategory(allCategories);
      return;
    };
    
    const newItem = SHOP_DATA.filter((item) => {
      return item.category === category;
    });
    setCategory(newItem);
  };

  return <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, filterItems, category, product }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
