import React from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

const GlucoseChart = ({ labels, data, options }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Diabetes Risk',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(255, 0, 0, 1)',
        borderColor: 'rgba(255,100,40,1)',
        borderWidth: 2,
        data,
      },
    ],
  };

  return (
    <div className="w-full lg:w-1/2 xl:w-2/3"> {/* Responsive width */}
      <div className="aspect-w-4 aspect-h-3"> {/* Aspect ratio container */}
        <Line data={chartData} options={options} className=" flex justify-center w-full h-full" />
      </div>
    </div>
  );
};

export default GlucoseChart;
