import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import NavbarTitle from "./NavbarTitle";
import NavbarAccount from "./NavbarAccount";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavbarMenu />
      <NavbarTitle />
      <NavbarAccount />
    </div>
  );
}

export default Navbar;
