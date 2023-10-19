import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const menuItems = ["File", "Edit", "View", "Insert", "Format"];
// const menuItems = ["File", "Edit", "View", "Insert", "Format", "Plugins", "Help"];

function NavbarMenu() {
  return (
    <div className={styles.left}>
      {menuItems.map((item, index) => (
        <NavLink key={index} className={styles.link} to="/">
          {item}
        </NavLink>
      ))}
    </div>
  );
}

export default NavbarMenu;
