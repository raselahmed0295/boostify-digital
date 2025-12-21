import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
