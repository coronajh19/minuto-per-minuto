import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarInteres from "../components/SidebarInteres";

function Layout({ children, hideSidebar }) {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="main-content">{children}</section>
        {/* Si hideSidebar es true, se omite el sidebar */}
        {!hideSidebar && (
          <aside className="sidebar-content">
            <SidebarInteres />
          </aside>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
