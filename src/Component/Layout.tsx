import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import Products from "./Products";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow">
        <Header />
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-scroll container mx-auto p-6">
        <Banner />
        <Outlet />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
