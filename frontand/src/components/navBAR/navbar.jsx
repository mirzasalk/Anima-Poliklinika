import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
    fontSize: "larger",
  };
  return (
    <div id="navbar">
      <h1 className="logo">Anima</h1>
      <div className="meni">
        <div className="linkRoute">
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link style={linkStyle} to="/login">
            Prijavi se
          </Link>
        </div>
        <div>
          <Link style={linkStyle} to="/register">
            Registruj se
          </Link>
        </div>
      </div>
      <div className="kontakt">Kontakt</div>
    </div>
  );
};

export default NavBar;
