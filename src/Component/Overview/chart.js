import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = () => {
  // Data for Sectors
  const sectorsData = {
    labels: ['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Data for Indian States
  const statesData = {
    labels: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi', 'Gujarat'],
    datasets: [
      {
        data: [25, 20, 15, 30, 10],
        backgroundColor: ['#4BC0C0', '#FF6384', '#9966FF', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#4BC0C0', '#FF6384', '#9966FF', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Data for Monetary Ranges
  const moneyData = {
    labels: ['100-200cr', '200-300cr', '300-400cr', '400-500cr', '500-1000cr', '1000-5000cr', '5000-10000cr'],
    datasets: [
      {
        data: [10, 15, 20, 25, 10, 15, 5],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'],
        hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'],
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents shrinking issues
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Doughnut Chart',
      },
    },
  };

  return (
    <div className="flex flex-wrap gap-16 justify-center p-10">
      {/* Sectors Pie Chart */}
      <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Sectors Data</h2>
        <Doughnut data={sectorsData} options={options} />
      </div>

      {/* Indian States Pie Chart */}
      <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Indian States Data</h2>
        <Doughnut data={statesData} options={options} />
      </div>

      {/* Monetary Ranges Pie Chart */}
      <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Monetary Ranges</h2>
        <Doughnut data={moneyData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
