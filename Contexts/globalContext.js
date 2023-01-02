import React, { useContext, useEffect, useReducer, useState } from "react";
import SHOP_DATA from "../data/shoppingData";
import categories from "../data/categoriesData";
import reducer from "../Reducer/Reducer";

export const AppContext = React.createContext();


export let shopItems = [];
SHOP_DATA.forEach((item) => {
  shopItems.push(item);
});
const initaialState = {
  shopItems,
  cartItems: [],
};

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const [product, setProduct] = useState(SHOP_DATA);
  const [state, dispatch] = useReducer(reducer, initaialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: parseInt(id) });
  };

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: parseInt(id) });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: parseInt(id) });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: parseInt(id) });
  };

  const openSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeFromCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        categories,
        // product,
        SHOP_DATA,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
