import React from 'react';
import Items from "../utils/Items.js";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/cartSlice.js";
import {ShoppingCart} from "lucide-react"

function Products() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems, "Cart Items in Products Page");

    function handleAddToCart(product) {
        console.log(product , "add called");
        dispatch(addToCart(product));
    }


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products</h1>

            <div>
                <p>{cartItems.length}</p>
                <ShoppingCart/>
                <div className="text-xl font-bold mb-6 flex flex-col items-start">
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="" className={"h-20 w-20"}/>
                        <p className={"text-"}>{item.name}</p>
                        <p className={"text-"}>{item.price}</p>
                        <p className={"text-"}>{item.quantity}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Items.products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-start hover:shadow-lg transition"
                    >
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-32 h-32 object-cover mb-4 rounded-lg"
                        />

                        {/* Product Info */}
                        <h4 className="text-lg font-semibold">{product.name}</h4>
                        <p className="text-sm text-gray-600 text-center mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-green-600">₹{product.price}</p>
                        <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
                        <p className="text-sm text-gray-700">Seller: {product.seller}</p>
                        <p className="text-yellow-500">⭐ {product.rating}</p>

                        {/* Buttons */}
                        <div className="flex gap-3 mt-4">
                            <button onClick={()=>handleAddToCart(product)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
