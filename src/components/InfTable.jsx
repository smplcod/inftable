import React from "react";
import styles from "./InfTable.module.css"; // Импортируем стили
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 30, cols = 5 }) => {
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
      <StatusBar
        cmdctrl={true}
        optalt={true}
        shift={false}
        memory={false}
        size={true}
        saved={true}
        changed={true}
      />
    </>
  );
};

export default InfTable;
