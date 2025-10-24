import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
}

const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state, action) => {
            state.cartItems.push({...action.payload, cartQuantity:1})
            console.log("Updated cart:", JSON.parse(JSON.stringify(state.cartItems)));
        },

        removeFromCart:(state, action) => {
            state.cartItems=state.cartItems.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addToCart, removeFromCart}=cartSlice.actions;

export default cartSlice.reducer;