import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/SignIn">
              Sign In
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link" to="/SignUp">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
