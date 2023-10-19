import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../helpers/FirebaseConfig";

function Navbar() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // useEffect(() => {
  // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  // setUser(currentUser);
  // });
  // Очистка подписки
  // return () => unsubscribe();
  // }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <NavLink to="/">Main Page</NavLink>
      </div>
      <div className={styles.center}></div>
      <div className={styles.right}>
        {user ? (
          <>
            {user.email}&nbsp;
            <button onClick={() => signOut(auth)}>Sign Out</button>
          </>
        ) : (
          <NavLink to="/auth">Login / Register</NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
