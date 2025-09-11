import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import Products from "./Products";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      {/* Common Layout Parts */}
      <Header />
      <Navbar />
      <Banner />

      {/* Page Specific Content */}
      <div className="container mx-auto p-6">
        <Outlet />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
