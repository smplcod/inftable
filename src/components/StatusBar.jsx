import React, { useState, useEffect } from "react";
import styles from "./StatusBar.module.css";

const StatusBar = ({
  size = false,
  memory = false,
  saved = false,
  changed = false,
}) => {
  const [cmdctrl, setCmdCtrl] = useState(false);
  const [optalt, setOptAlt] = useState(false);
  const [shift, setShift] = useState(false);

  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const cmdOrCtrl = isMac ? "Cmd" : "Ctrl";
  const optOrAlt = isMac ? "Opt" : "Alt";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Control" || (isMac && e.key === "Meta")) {
        setCmdCtrl(true);
      }
      if (e.key === "Alt" || (isMac && e.key === "Alt")) {
        setOptAlt(true);
      }
      if (e.key === "Shift") {
        setShift(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Control" || (isMac && e.key === "Meta")) {
        setCmdCtrl(false);
      }
      if (e.key === "Alt" || (isMac && e.key === "Alt")) {
        setOptAlt(false);
      }
      if (e.key === "Shift") {
        setShift(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isMac]);

  return (
    <div className={styles.statusbar}>
      <div className={cmdctrl ? "" : styles.hidden}>{cmdOrCtrl}</div>
      <div className={optalt ? "" : styles.hidden}>{optOrAlt}</div>
      <div className={shift ? "" : styles.hidden}>Shift</div>
      <div className={size ? "" : styles.hidden}>Size</div>
      <div className={memory ? "" : styles.hidden}>Memory</div>
      <div className={saved ? "" : styles.hidden}>Saved</div>
      <div className={changed ? "" : styles.hidden}>Changed</div>
      <div></div>
    </div>
  );
};

export default StatusBar;
