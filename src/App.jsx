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
import Home from "./Component/Home";
import CartModal from "./Component/CartModal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:categories" element={<Products />} />
            {/* <Route path="/cartmodal" element={<CartModal />} /> */}
          </Route>
          {/* //AdminSide */}
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
