import React, { useState } from "react";
import styles from "./InfTable.module.css";
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 5, cols = 3 }) => {
  const [tableData, setTableData] = useState([]);
  const [textareaFocus, setTextareaFocus] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeCell, setActiveCell] = useState(null);

  const colNames = [];
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
    const initialData = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: limitedColNames.length }, (_, colIndex) => ({
        name: `${limitedColNames[colIndex]}${rowIndex + 1}`,
        top: `${rowIndex * 50}px`,
        left: `${colIndex * 300}px`,
        text: "",
      }))
    ).flat();
    setTableData(initialData);
  };

  const handleMouseDown = (e) => {
    setDragging(e.target);
    setActiveCell(e.target.getAttribute("data-cell-name"));
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;
      dragging.style.left = `${parseInt(dragging.style.left) + dx}px`;
      dragging.style.top = `${parseInt(dragging.style.top) + dy}px`;
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      const updatedTableData = [...tableData];
      const cellName = dragging.getAttribute("data-cell-name");
      const cellData = updatedTableData.find((cell) => cell.name === cellName);
      if (cellData) {
        cellData.top = dragging.style.top;
        cellData.left = dragging.style.left;
      }
      setTableData(updatedTableData);
    }
    setDragging(null);
    setActiveCell(null);
  };

  const handleFocus = () => {
    setTextareaFocus(true);
  };

  const handleBlur = () => {
    setTextareaFocus(false);
  };

  return (
    <>
      <div
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {Array.from({ length: rows }, (_, rowIndex) =>
          Array.from({ length: limitedColNames.length }, (_, colIndex) => (
            <div
              data-cell-name={`${limitedColNames[colIndex]}${rowIndex + 1}`}
              key={`${limitedColNames[colIndex]}${rowIndex + 1}`}
              className={`${styles.cell} ${
                activeCell === `${limitedColNames[colIndex]}${rowIndex + 1}`
                  ? dragging
                    ? styles.cellFocused
                    : styles.cellReleased
                  : ""
              }`}
              style={{
                top: `${rowIndex * 50}px`,
                left: `${colIndex * 300}px`,
              }}
              onMouseDown={handleMouseDown}
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
