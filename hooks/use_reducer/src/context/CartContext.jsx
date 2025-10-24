import { createContext, useReducer } from "react";

export const CartContext= createContext();

//initial State
const initialState=[];

//reducer function
function cartReducer(cart, action){
  switch(action.type){
    case "ADD_ITEM":
      return [...cart, action.payload];

    case "REMOVE_ITEM":
      return cart.filter((item)=> item.id!==action.payload);

    case "CLEAR_CART":
      return []

    default:
      return cart;
  }
}

//Provider
export function CartProvider({children}){
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return(
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}