import React from "react";

const InfTable = ({ rows = 30, cols = 4 }) => {
  // Рассчитываем минимальную ширину для внутреннего div
  const minWidth = 300 * cols; // 300px - ширина каждой ячейки

  return (
    <div
      style={{
        overflow: "auto",
        width: "50%",
        height: "50%",
        position: "relative",
      }}
    >
      <div style={{ minWidth: `${minWidth}px`, position: "absolute" }}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {Array.from({ length: cols }, (_, colIndex) => (
              <div
                key={colIndex}
                style={{
                  border: "1px solid black",
                  width: "300px",
                  height: "50px",
                  display: "inline-block",
                }}
              >
                {/* <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid grey",
                  }}
                /> */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfTable;
