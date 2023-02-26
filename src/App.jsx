import { Route, Routes } from "react-router-dom"
import Navbar from "./global/Navbar"
import Home from "./pages/Home/Home"
import Item from "./pages/Item/Item"
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shoppingcart" element={<ShoppingCart />}/>
        <Route path="/:id" element={<Item />}/>
      </Routes>
    </div>
  )
}

export default App
