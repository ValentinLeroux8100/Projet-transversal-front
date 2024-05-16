import React from "react";
import Navbar from "layouts/navbar/navbar";
import Footer from "layouts/footer/footer";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
