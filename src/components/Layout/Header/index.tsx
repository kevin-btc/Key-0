import React from "react";

import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header id="header">
      {/* Navbar */}
      <nav
        data-aos="zoom-out"
        data-aos-delay={800}
        className="navbar navbar-expand"
      >
        <div className="container header">
          {/* Navbar Brand*/}
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-sticky"
              src="/img/logo-without-mv.png"
              alt="sticky brand-logo"
              width={120}
              height={30}
            />
          </a>
          <div className="ml-auto" />
          {/* Navbar */}
          <ul className="navbar-nav items">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
