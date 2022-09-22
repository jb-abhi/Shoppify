import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/* <Route path="/register" element={user ? <Navigate replace to="/"  /> : (<Login/>)  }></Route> */