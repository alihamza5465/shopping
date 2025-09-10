import React from "react";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Products from "./Component/Products";
import Dashboard from "./Admin/Dashboard";
import ProductForm from "./Admin/ProductForm";
import AddproductPage from "./Admin/AddproductPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Header />
      <Navbar />
      <Banner />
      <Products /> */}
      {/* <Dashboard /> */}
      {/* <AddproductPage /> */}
      {/* <ProductForm /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route
            path="/admin/add-product/:title"
            element={<AddproductPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
