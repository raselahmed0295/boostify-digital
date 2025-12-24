import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Root = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Root;
