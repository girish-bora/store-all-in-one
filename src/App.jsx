import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import {
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      Typography,
      Button,
    } from "@material-tailwind/react";
import SingleProduct from "./components/FilteredProducts/SingleProduct";

function App() {
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
