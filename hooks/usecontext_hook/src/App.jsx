import { useContext } from 'react';
import './App.css'
import CartDisplay from './component/CartDisplay'
import { CartContext } from './context/CartContext';

function App() {
  const {addToCart} =useContext(CartContext);

  const dummyProducts = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 1500 },
  ];
  return (
    <div>
      <CartDisplay/>
      <div>
        <h1>My Cart App</h1>
        <div className="products-container">
          {dummyProducts.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
