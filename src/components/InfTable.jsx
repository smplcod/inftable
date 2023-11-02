import React, { useState, useEffect, useRef } from "react";
import styles from "./InfTable.module.css";
import StatusBar from "./StatusBar";

const InfTable = ({ rows = 5, cols = 3 }) => {
  const [tableData, setTableData] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeCell, setActiveCell] = useState(null);
  const [editingCell, setEditingCell] = useState(null);
  const [editingText, setEditingText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const initialData = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => ({
        name: `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`,
        top: `${rowIndex * 50}px`,
        left: `${colIndex * 300}px`,
        text: "Hello!",
      }))
    ).flat();
    setTableData(initialData);
  }, [rows, cols]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [editingCell]);

  const handleSave = () => {
    console.log("Saved data:", tableData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (editingCell) {
        const updatedTableData = [...tableData];
        const cellData = updatedTableData.find(
          (cell) => cell.name === editingCell
        );
        if (cellData) {
          cellData.text = editingText;
        }
        setTableData(updatedTableData);
        setEditingCell(null);
        setActiveCell(editingCell);
      } else if (activeCell) {
        const cellData = tableData.find((cell) => cell.name === activeCell);
        if (cellData) {
          setEditingText(cellData.text);
          setEditingCell(cellData.name);
          setActiveCell(null);
        }
      }
    } else if (e.key === "Escape") {
      if (editingCell) {
        setEditingText("");
        setEditingCell(null);
        setActiveCell(editingCell);
      }
    }
  };

  const handleMouseDown = (e) => {
    const cellName = e.target.getAttribute("data-cell-name");
    setDragging(e.target);
    setActiveCell(cellName);
    setPosition({ x: e.clientX, y: e.clientY });

    const cellData = tableData.find((cell) => cell.name === cellName);
    if (cellData) {
      console.log(cellData.text);
    }
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
  };

  const handleBlur = () => {
    if (editingCell) {
      const updatedTableData = [...tableData];
      const cellData = updatedTableData.find(
        (cell) => cell.name === editingCell
      );
      if (cellData) {
        cellData.text = editingText;
      }
      setTableData(updatedTableData);
      setEditingCell(null);
      setActiveCell(editingCell);
    }
  };

  const handleDoubleClick = (e) => {
    const cellName = e.target.getAttribute("data-cell-name");
    const cellData = tableData.find((cell) => cell.name === cellName);
    if (cellData) {
      setEditingText(cellData.text);
      setEditingCell(cellData.name);
      setActiveCell(null);
    }
  };

  return (
    <>
      <div
        className={styles.container}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        {tableData.map((cell, index) => (
          <div
            data-cell-name={cell.name}
            key={index}
            className={`${styles.cell} ${
              activeCell === cell.name ? styles.cellFocused : ""
            }`}
            style={{
              top: cell.top,
              left: cell.left,
            }}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
          >
            {editingCell === cell.name ? (
              <textarea
                ref={textareaRef}
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onBlur={handleBlur}
              ></textarea>
            ) : (
              cell.text
            )}
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
