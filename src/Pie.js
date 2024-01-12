import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ data }) => {
  useEffect(() => {
    const options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Distribution of Power',
        align: 'center'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Data',
          colorByPoint: true,
          data: data,
        },
      ],
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -50,
        y: 80,
        floating: false,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
    };

    Highcharts.chart('pieContainer', options);
  }, [data]);

  return (
    <div id="pieContainer" style={{ width: '100%', height: '300px' }}></div>
  );
};

export default PieChart;
