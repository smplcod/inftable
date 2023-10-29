import React, { useState } from "react";
import styles from "./InfTable.module.css"; // Импортируем стили
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 5, cols = 2 }) => {
  const [tableData, setTableData] = useState({}); // Для хранения данных таблицы
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
    localStorage.setItem("tableData", JSON.stringify(tableData));
  };

  const handleLoad = () => {
    const loadedData = localStorage.getItem("tableData");
    if (loadedData) {
      setTableData(JSON.parse(loadedData));
    }
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
          <button onClick={handleLoad}>Load</button>
        </div>
        <textarea
          className={styles.textarea}
          rows="4"
          cols="50"
          readOnly
          value={JSON.stringify(tableData, null, 2)}
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
