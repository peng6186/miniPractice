import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export const appContext = createContext(null);

export interface Item {
  id: number;
  price: number;
  quantity: number;
  title: string;
  description: string;
}

function App() {
  const [itemsInCart, SetItemsInCart] = useState<Item[] | null>([]);
  return (
    <div>
      <appContext.Provider value={{ itemsInCart, SetItemsInCart }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </appContext.Provider>
    </div>
  );
}

export default App;
