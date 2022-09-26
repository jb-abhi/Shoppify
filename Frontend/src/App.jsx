import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CheckoutSuccess from "./components/CheckoutSuccess";


const App = () => {
  let user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate replace to="/"  /> : (<Login/>)  }></Route> 
        <Route path="/register" element={user ? <Navigate replace to="/"  /> : (<Register/>)  }></Route>
        <Route path="/checkout-success" element={<CheckoutSuccess/>} />
        {/* <Route path="*" element={<CheckoutSuccess/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
