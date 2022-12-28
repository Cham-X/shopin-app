const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cartItems: [],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "ADD_TO_CART") {
    let itemToAdd = state.shopItems.find((item) => item.id === action.payload);
    let existedItem = state.cartItems.find((item) => action.payload === item.id);

    if (existedItem) {
      itemToAdd.quantity += 1;
      return {
        ...state,
      };
    } else {
      itemToAdd.quantity = 1;
      return {
        ...state,
        cartItems: [...state.cartItems, itemToAdd],
      };
    }
  }
  if (action.type === "INCREASE_QUANTITY") {
    let termCart = state.cartItems.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cartItems: termCart,
    };
  }
  if (action.type === "DECREASE_QUANTITY") {
    let termCart = state.cartItems
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity !== 0);
    return {
      ...state,
      cartItems: termCart,
    };
  }
};

 
export default reducer;
