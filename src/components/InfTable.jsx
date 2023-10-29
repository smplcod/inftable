import React, { useState } from "react";
import styles from "./InfTable.module.css"; // Import styles
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 5, cols = 3 }) => {
  const [tableData, setTableData] = useState({});
  const [textareaFocus, setTextareaFocus] = useState(false);
  const colNames = []; // A to ZZ

  for (let i = 65; i <= 90; i++) {
    colNames.push(String.fromCharCode(i));
  }
  for (let i = 65; i <= 90; i++) {
    for (let j = 65; j <= 90; j++) {
      colNames.push(String.fromCharCode(i) + String.fromCharCode(j));
    }
  }

  const limitedColNames = colNames.slice(0, cols);

  const handleSave = () => {
    setTableData(
      Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: limitedColNames.length }, (_, colIndex) => ({
          name: `${limitedColNames[colIndex]}${rowIndex + 1}`,
          top: `${rowIndex * 50}px`,
          left: `${colIndex * 300}px`,
          text: "",
        }))
      ).flat()
    );
  };

  const handleFocus = () => {
    setTextareaFocus(true);
  };

  const handleBlur = () => {
    setTextareaFocus(false);
  };

  return (
    <>
      <div className={styles.container}>
        {Array.from({ length: rows }, (_, rowIndex) =>
          Array.from({ length: limitedColNames.length }, (_, colIndex) => (
            <div
              key={`${limitedColNames[colIndex]}${rowIndex + 1}`}
              className={styles.cell}
              style={{
                top: `${rowIndex * 50}px`,
                left: `${colIndex * 300}px`,
              }}
            >
              {`${limitedColNames[colIndex]}${rowIndex + 1}`}
            </div>
          ))
        )}
      </div>
      <div className={styles.controlPanel}>
        <div className={styles.buttons}>
          <button onClick={handleSave}>Save</button>
          <button>Load</button>
        </div>
        <textarea
          className={`${styles.textarea} ${
            textareaFocus ? styles.textareaFocused : ""
          }`}
          rows="4"
          cols="50"
          readOnly
          value={JSON.stringify(tableData, null, 2)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
      </div>
      <StatusBar
        cmdctrl={true}
        optalt={true}
        shift={false}
        memory={true}
        size={true}
        saved={true}
        changed={true}
      />
    </>
  );
};

export default InfTable;
