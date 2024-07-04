import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import { useSelector } from "react-redux";

function App() {
  // const cart = useSelector(state => state.cart.cart);
  // const totalAmount = useSelector(state => state.cart.totalAmount);
  // const totalPrice = useSelector(state => state.cart.totalPrice);

  // console.log(cart,totalAmount,totalPrice);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
