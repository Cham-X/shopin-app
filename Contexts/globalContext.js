import React, { useContext, useState } from "react";
import SHOP_DATA from "../data/shoppingData";
import categories from "../data/categoriesData";

export const AppContext = React.createContext();

const allCategories = ["products", ...new Set(SHOP_DATA.map((item) => item.category))];

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState(allCategories);
  const [product, setProduct] = useState(SHOP_DATA)

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const filterItems = (category) => {
    if (category === "Products") {
      setProduct(SHOP_DATA);
      return;
    };
    
    const newItem = SHOP_DATA.filter((item) => {
      return item.category === category;
    });
    setCategory(newItem);
    setProduct()
  };

  return <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, filterItems, categories, category, product,SHOP_DATA }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
