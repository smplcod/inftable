import React from "react";
import styles from "./StatusBar.module.css";

const StatusBar = ({
  cmdctrl = false,
  optalt = false,
  shift = false,
  saved = false,
  changed = false,
  memory = false,
  size = false,
}) => {
  return (
    <div className={styles.statusbar}>
      <div className={cmdctrl ? "" : styles.hidden}>Cmd/Ctrl</div>
      <div className={optalt ? "" : styles.hidden}>Opt/Alt</div>
      <div className={shift ? "" : styles.hidden}>Shift</div>
      <div className={saved ? "" : styles.hidden}>Saved</div>
      <div className={changed ? "" : styles.hidden}>Changed</div>
      <div className={memory ? "" : styles.hidden}>Memory</div>
      <div className={size ? "" : styles.hidden}>Size</div>
      <div></div>
    </div>
  );
};

export default StatusBar;
