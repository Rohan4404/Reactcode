import React from "react";

const Table = () => {
  const tableStyle = {
    color: "white",
    width: "100%",
    height: "300px",
  };

  const headerCellStyle = {
    color: "White",
    padding: "10px",
    textAlign: "start",
    fontWeight: "bold", // Add this line to make the text bold
  };

  const cellStyle = {
    padding: "10px",
    textAlign: "start",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>OT Description</th>
            <th style={headerCellStyle}>Maintenance Due</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>1. Fuel Tank</td>
            <td style={cellStyle}>01-Nov-2023</td>
          </tr>
          <tr>
            <td style={cellStyle}>2. Cat Converter</td>
            <td style={cellStyle}>12-Nov-2023</td>
          </tr>
          <tr>
            <td style={cellStyle}>3. Lubrication</td>
            <td style={cellStyle}>15-Nov-2023</td>
          </tr>
          <tr>
            <td style={cellStyle}>4. Cooling System</td>
            <td style={cellStyle}>21-Nov-2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
