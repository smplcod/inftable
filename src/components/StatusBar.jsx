import React from "react";
import styles from "./StatusBar.module.css";

const StatusBar = ({
  cmdctrl = false,
  optalt = false,
  shift = false,
  memory = false,
  size = false,
  saved = false,
  changed = false,
}) => {
  // Определяем операционную систему
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  // Устанавливаем названия клавиш в зависимости от ОС
  const cmdOrCtrl = isMac ? "Cmd" : "Ctrl";
  const optOrAlt = isMac ? "Opt" : "Alt";

  return (
    <div className={styles.statusbar}>
      <div className={cmdctrl ? "" : styles.hidden}>{cmdOrCtrl}</div>
      <div className={optalt ? "" : styles.hidden}>{optOrAlt}</div>
      <div className={shift ? "" : styles.hidden}>Shift</div>
      <div className={memory ? "" : styles.hidden}>Memory</div>
      <div className={size ? "" : styles.hidden}>Size</div>
      <div className={saved ? "" : styles.hidden}>Saved</div>
      <div className={changed ? "" : styles.hidden}>Changed</div>
      <div></div>
    </div>
  );
};

export default StatusBar;
