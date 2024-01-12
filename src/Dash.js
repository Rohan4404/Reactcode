import React from "react";
import PieChart from "./Pie.js";
import HorizontalBarChart from "./Hori";
import Line from "./Line.js";
import bg from "./bg.jpg";
import "./App.css";
import Table from "./Table.js";
import BarTable from "./BarTable.js";

const data1 = [
  { name: "Server Room", y: 40 },
  { name: "Data Bank", y: 30 },
  { name: "Control Room", y: 20 },
  { name: "MUX Room", y: 20 },
  { name: "Others", y: 20 },
];

const componentStyle = {
  width: "30%",
  marginRight: "5%",
};
const headingStyle = {
  marginRight: "200px",
};

const Dash = () => (
  <div className="App">
    <div className="upper">
      <div className="top">
        <Line />
        <HorizontalBarChart data={data1} />
      </div>
      <div className="pie">
        <hr style={{ borderTop: "2px solid skyblue", width: "100%" }} />
        <div className="text_all">
          <h4>Synopsis</h4>
          <h4 style={headingStyle}>KPIS</h4>
        </div>
        <hr style={{ borderTop: "2px solid skyblue", width: "100%" }} />
        <div className="down">
          <div style={componentStyle}>
            <Table />
          </div>
          <div style={componentStyle}>
            <BarTable />
          </div>
          <div style={componentStyle}>
            <PieChart data={data1} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dash;
