import { Route, Routes } from "react-router-dom";
import Navbar from "./global/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="products/:id" element={<ItemDetail />} />
        </Route>
        <Route path="user/login" element={<Login />} />
        <Route path="user/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
