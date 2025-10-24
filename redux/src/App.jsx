import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/products"} element={<Products />} />
            <Route path={"/cart"} element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
