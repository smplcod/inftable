import React from "react";

const InfTable = ({ rows = 100, cols = 50 }) => {
  return (
    <div style={{ overflow: "auto", width: "100%", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              whiteSpace: "nowrap", // оставляем только это свойство
            }}
          >
            {Array.from({ length: cols }, (_, colIndex) => (
              <div
                key={colIndex}
                style={{
                  border: "1px solid black",
                  width: "300px",
                  height: "50px",
                  display: "inline-block", // изменяем на inline-block
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid grey",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfTable;
