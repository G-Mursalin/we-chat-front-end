import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="menu">
      <div className="menu-item">
        <Link to="/inbox">Inbox</Link>
      </div>
      <div className="menu-item">
        <Link to="/users">Users</Link>
      </div>
      <div className="menu-item">
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
