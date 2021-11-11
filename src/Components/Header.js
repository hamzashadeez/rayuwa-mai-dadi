import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ click }) {
  return (
    <div className="main__header fixed-top">
      <div className="logo">
        <h2>Rayuwa Mai Dadi</h2>
      </div>

      <ul className="main__links">
        <li>
          <Link to="/">Episodes</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="hambuger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
