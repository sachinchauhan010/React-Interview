import {createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

  const [cartItems, setCartItems]= useState([]);

  // Add to cart
  const addToCart= (item)=>{
    setCartItems((prevItems)=>[...prevItems, item])
  }

  //Remove from cart
  const removeFromCart=(id)=>{
    setCartItems((prevItems)=> prevItems.filter((item)=> item.id!==id))
  }

  const clearCart=()=>{
    setCartItems([]);
  }

  return(
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}