import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../helpers/FirebaseConfig";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function NavbarAccount() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.right}>
      {!loading &&
        (user ? (
          <>
            Hello,{user.email.split("@")[0]}&nbsp;
            <button onClick={() => signOut(auth)}>Sign Out</button>
          </>
        ) : (
          <NavLink to="/auth">Hi! Login to work</NavLink>
        ))}
    </div>
  );
}

export default NavbarAccount;
