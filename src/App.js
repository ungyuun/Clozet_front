
import React from "react"
import Home from "./pages/common/Home"
import About from "./pages/common/About"
import ProductForm from "./pages/product/addProduct/ProductForm"
import Header from "./components/layout/Header";
import UserRouter from "./pages/user/UserRouter";
import ProductRouter from "./pages/product/ProductRouter";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      
      
      <div class="container">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/productform" element={<ProductForm />} />
            <Route path="/user/*" element={<UserRouter />} />
            <Route path="/product/*" element={<ProductRouter />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}


export default App;
