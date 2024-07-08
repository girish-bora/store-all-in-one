import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
