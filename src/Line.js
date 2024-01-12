import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TemperatureProfileChart = () => {
  useEffect(() => {
    const options = {
      title: {
        text: "Temperature Profile",
        align: "center",
      },
      xAxis: {
        categories: [
          "00:00",
          "02:00",
          "04:00",
          "06:00",
          "08:00",
          "10:00",
          "12:00",
          "14:00",
          "16:00",
          "18:00",
          "20:00",
          "22:00",
        ], // Adjust x-axis categories for time
        accessibility: {
          rangeDescription: "Range: 00:00 to 05:00", // Adjust the range description
        },
      },
      yAxis: {
        title: {
          text: "Temperature (C)",
        },
        tickPositions: [150, 175, 200, 225, 250, 275],
      },
      legend: {
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom",
        y: 10,
      },
      series: [
        {
          name: "Genset",
          data: [174, 222, 188, 251, 203, 200, 180, 190, 180, 207, 250], // Sample temperature data
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    };

    Highcharts.chart("temperature-profile-container", options);
  }, []);

  return (
    <div
      id="temperature-profile-container"
      style={{ width: "40%", height: "300px" }}
    ></div>
  );
};

export default TemperatureProfileChart;
