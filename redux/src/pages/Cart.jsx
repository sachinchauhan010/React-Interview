import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
    const { cartItems } = useSelector((state) => state.cart);



    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart {cartItems.length}</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty 🛒</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b py-3">
                            <h4>{item.name}</h4>
                            <p>Qty: {item.cartQuantity}</p>
                            <p>₹{item.price * item.cartQuantity}</p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}

export default Cart;
