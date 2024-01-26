// Layout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import Header from "../NavBar/Header/ComponentHead";
import { TitleProvider } from "./TitleContext";

const Layout = () => {
  const location = useLocation();

  // Function to check if the current route is the homepage
  const isHomePage = () => {
    return location.pathname === "/";
  };

  return (
    <TitleProvider>
      <Navbar />
      {!isHomePage() && <Header />}
      <Outlet />
      <Footer />
    </TitleProvider>
  );
};

export default Layout;
