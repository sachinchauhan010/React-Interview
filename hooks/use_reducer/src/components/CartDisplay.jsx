import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartDisplay() {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>🛒 My Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
                Remove
              </button>
            </div>
          ))}
          <button
            className="clear-cart-btn"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default CartDisplay;
