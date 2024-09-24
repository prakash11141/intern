import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/category/:categoryId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
