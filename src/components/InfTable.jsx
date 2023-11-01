import React, { useState, useEffect } from "react";
import styles from "./InfTable.module.css";
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 5, cols = 3 }) => {
  const [tableData, setTableData] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeCell, setActiveCell] = useState(null);

  useEffect(() => {
    const initialData = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => ({
        name: `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`,
        top: `${rowIndex * 50}px`,
        left: `${colIndex * 300}px`,
        text: "",
      }))
    ).flat();
    setTableData(initialData);
  }, [rows, cols]);

  const handleSave = () => {
    console.log("Saved data:", tableData);
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

  return (
    <>
      <div
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {tableData.map((cell, index) => (
          <div
            data-cell-name={cell.name}
            key={index}
            className={styles.cell}
            style={{
              top: cell.top,
              left: cell.left,
            }}
            onMouseDown={handleMouseDown}
          >
            {cell.name}
          </div>
        ))}
      </div>
      <div className={styles.controlPanel}>
        <div className={styles.buttons}>
          <button onClick={handleSave}>Save</button>
        </div>
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
