import React from "react";

const BarTable = () => {
  const tableStyle = {
    color: "white",
    width: "100%",
    height: "300px",
  };

  const cellStyle = {
    padding: "10px",
    textAlign: "start",
  };

  const cellStyle2 = {
    padding: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
  };

  const statusBarContainerStyle = {
    flex: 1,
    marginLeft: "10px",
  };

  const statusBarStyle = {
    height: "10px",
    width: "100%",
    backgroundColor: "#5cb85c",
  };

  const completedStatusBarStyle = {
    height: "100%",
    width: "40%",
    backgroundColor: "#f0ad4e",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead></thead>
        <tbody>
          <tr>
            <td style={cellStyle}>Inlet Avg Temp</td>
            <td style={cellStyle2}>
              28 C
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>Power</td>
            <td style={cellStyle2}>
              1.9KW
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Power A</td>
            <td style={cellStyle2}>
              0.9 kW
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Power B</td>
            <td style={cellStyle2}>
              1.0 kW
              <div style={statusBarContainerStyle}>
                <div style={statusBarStyle}>
                  <div style={completedStatusBarStyle}></div>
                </div>
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Component with Max Avg Temp</td>

            <td style={cellStyle}>Rotor Coils</td>
          </tr>{" "}
          <tr>
            <td style={cellStyle}>Genset components issues</td>
            <td style={cellStyle}>1645-56</td>
          </tr>{" "}
        </tbody>
      </table>
    </div>
  );
};

export default BarTable;
