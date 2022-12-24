import React, { useContext, useReducer, useState } from "react";
import SHOP_DATA from "../data/shoppingData";
import categories from "../data/categoriesData";
import reducer from "../Reducer/Reducer";

export const AppContext = React.createContext();

const allCategories = ["products", ...new Set(SHOP_DATA.map((item) => item.category))];

const initaialState = {
  cart: SHOP_DATA,
  total: 0,
  amount: 5,
};

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState(allCategories);
  const [product, setProduct] = useState(SHOP_DATA);
  const [state, dispatch] = useReducer(reducer, initaialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const add = (id) => {
    dispatch({ type: "ADD", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    console.log('add')
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

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
    }

    const newItem = SHOP_DATA.filter((item) => {
      return item.category === category;
    });
    setCategory(newItem);
    setProduct();
  };

  return <AppContext.Provider value={{ ...state, clearCart, remove,add, increase, decrease, isSidebarOpen, openSidebar, closeSidebar, filterItems, categories, category, product, SHOP_DATA }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
