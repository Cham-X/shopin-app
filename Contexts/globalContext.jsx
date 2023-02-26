import React, { useContext, useEffect, useReducer, useState } from "react";
import SHOP_DATA from "../data/shoppingData";
import categories from "../data/categoriesData";
import reducer, { State } from "../Reducer/Reducer";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";


export const AppContext = React.createContext();


export let shopItems = [];
SHOP_DATA.forEach((item) => {
  shopItems.push(item);
});
const initialState = {
  shopItems,
  cartItems: [],
};

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState({ email: null, uid: null });
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);


  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    setUser({ email: null, password: null });
    await signOut(auth);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state"))) {
      dispatch({ type: "INIT_STORE", initialState: JSON.parse(localStorage.getItem("state")) });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("state", JSON.stringify(state));
    };
  }, [state]);

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
    console.log(state);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <AppContext.Provider
      value={ {
        ...state,
        user,
        signUp,
        logOut,
        logIn,
        clearCart,
        removeFromCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        categories,
        SHOP_DATA,

      } }>
      { children }
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};


