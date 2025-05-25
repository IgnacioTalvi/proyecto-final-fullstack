import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ProductDetail from "./ProductDetail";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proiders" element={<ProductDetail />} />
      </Routes>
    </main>
  );
};

export default Main;