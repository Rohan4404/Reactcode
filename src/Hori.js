import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = () => {
  useEffect(() => {
    const options = {
      chart: {
        type: "bar",
      },
      title: {
        text: "Power Consumption Profile",
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
        ],
        // title: {
        //   text: "left",
        // },
        gridLineWidth: 0,
        lineWidth: 2,
      },
      yAxis: {
        title: {
          text: "Power (KW)",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
        gridLineWidth: 0,
        tickPositions: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2.0],
      },
      tooltip: {
        valueSuffix: " millions",
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      legend: {
        layout: "horizontal", // Change layout to horizontal
        align: "center", // Center the legend
        verticalAlign: "bottom", // Position below the chart
        y: 10, // Adjust the vertical position
        floating: false,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Genset",
          data: [1.4, 1.3, 1.2, 1.4, 1.3, 1.5, 1.3, 1.75, 1.4, 1.85, 1.4, 1.5],
        },
      ],
    };

    Highcharts.chart("container", options);
  }, []);

  return <div id="container" style={{ width: "40%", height: "300px" }}></div>;
};

export default BarChart;
