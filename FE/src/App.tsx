import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import FootballShoes from "./pages/FootballShoes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products/:id" element={<Products></Products>}></Route>
        <Route path="/category" element={<Category></Category>}></Route>
        <Route path="/category/football-shoes" element={<FootballShoes></FootballShoes>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default App;
