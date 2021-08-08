import React from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";

function SideDrawer({ show, click }) {
  const DrawerClass = ["sidedrawer"];

  if (show) {
    DrawerClass.push("show");
  }
  return (
    <div className={DrawerClass.join(" ")}>
      <ul className="link_sideDrawer">
        <li onClick={click}>
          <Link to="/">Episodes</Link>
        </li>
        <li onClick={click}>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={click}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
