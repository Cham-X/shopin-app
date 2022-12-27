import React, { useContext, useEffect, useReducer, useState } from "react";
import SHOP_DATA from "../data/shoppingData";
import categories from "../data/categoriesData";
import reducer from "../Reducer/Reducer";

export const AppContext = React.createContext();

const allCategories = ["products", ...new Set(SHOP_DATA.map((item) => item.category))];

export let shopItems = [];
SHOP_DATA.forEach((item) => {
  shopItems.push(item);
});
const initaialState = {
  shopItems,
  cartItems: [],
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [category, setCategory] = useState(allCategories);
  const [product, setProduct] = useState(SHOP_DATA);
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

  // useEffect(() => {
  //   dispatch({ type: "GET_TOTAL" });
  // }, [state.cartItems]);

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
        filterItems,
        categories,
        category,
        product,
        SHOP_DATA,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
