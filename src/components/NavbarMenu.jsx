import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "MVP", url: "/mvp" },
  { name: "Lab🧪", url: "/lab" },
  { name: "Desktop", url: "/desktop" },
  { name: "File", url: "/file" },
  { name: "Edit", url: "/edit" },
  // { name: "View", url: "/view" },
  // { name: "Insert", url: "/insert" },
  // { name: "Format", url: "/format" },
  // { name: "Plugins", url: "/plugins" },
  // { name: "Help", url: "/help" },
];

function NavbarMenu() {
  return (
    <div className={styles.left}>
      {menuItems.map((item, index) => (
        <NavLink key={index} className={styles.link} to={item.url}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavbarMenu;
