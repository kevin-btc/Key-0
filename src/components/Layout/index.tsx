import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex flex-column flex-fill wrapper">
      <Header />
      <main className="d-flex flex-column flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
