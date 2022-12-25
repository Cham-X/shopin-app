const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if(action.type === "ADD_TO_CART"){
    return{
      ...state,
      cart:state.cart.push()
    }
  }
  if (action.type === "INCREASE_QUANTITY") {
    let termCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return {
          ...cartItem,
          amount: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: termCart,
    };
  }
  if (action.type === "DECREASE_QUANTITY") {
    let termCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return {
      ...state,
      cart: termCart,
    };
  }
};

export default reducer;
