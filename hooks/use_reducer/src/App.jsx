import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import CartDisplay from "./components/CartDisplay";
import "./App.css";

function App() {
  const { dispatch } = useContext(CartContext);

  const dummyProducts = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 1500 },
  ];

  return (
    <div>
      <CartDisplay />
      <div className="products-container">
        <h1>Products</h1>
        {dummyProducts.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
