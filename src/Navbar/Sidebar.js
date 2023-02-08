import React from "react";
import { push as Menu } from "react-burger-menu";
import "../Navbar/Sidebar.css";
export default function Sidebar() {
  return (
    <Menu width={250}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/gallery">
        Gallery
      </a>
      <a className="menu-item" href="/about">
        About me
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
}
