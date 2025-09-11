import React from "react";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Products from "./Component/Products";
import Dashboard from "./Admin/Dashboard";
import ProductForm from "./Admin/ProductForm";
import AddproductPage from "./Admin/AddproductPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route
            path="/admin/add-product/:title"
            element={<AddproductPage />}
          />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
