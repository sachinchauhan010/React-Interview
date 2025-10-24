import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartDisplay() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)
  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  )
}


export default CartDisplay
