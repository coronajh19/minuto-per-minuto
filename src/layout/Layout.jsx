import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content slide-fade-in">{children}</main>
    </div>
  );
}

export default Layout;
