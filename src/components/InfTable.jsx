import React from "react";

const InfTable = ({ rows = 100, cols = 50 }) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: cols }, (_, colIndex) => (
              <td
                key={colIndex}
                style={{
                  border: "1px solid black",
                  width: "400px",
                  height: "10px",
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
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfTable;
