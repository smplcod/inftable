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
      <div className={cmdctrl ? styles.active : ""}>
        Cmd/Ctrl: {cmdctrl ? "On" : "Off"}
      </div>
      <div className={optalt ? styles.active : ""}>
        Opt/Alt: {optalt ? "On" : "Off"}
      </div>
      <div className={shift ? styles.active : ""}>
        Shift: {shift ? "On" : "Off"}
      </div>
      <div className={saved ? styles.active : ""}>
        Saved: {saved ? "Yes" : "No"}
      </div>
      <div className={changed ? styles.active : ""}>
        Changed: {changed ? "Yes" : "No"}
      </div>
      <div className={memory ? styles.active : ""}>
        Memory: {memory ? "Used" : "Free"}
      </div>
      <div className={size ? styles.active : ""}>
        Size: {size ? "Big" : "Small"}
      </div>
      <div></div>
    </div>
  );
};

export default StatusBar;
