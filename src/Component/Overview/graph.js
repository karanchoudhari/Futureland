import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const GovernmentSpendingGraph = () => {
  const currentYear = new Date().getFullYear();
  const [graphData, setGraphData] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('graphData');
    if (savedData) {
      setGraphData(JSON.parse(savedData));
    }
  }, []);

  const data = {
    labels: graphData.map((item) => item.sector),
    datasets: [
      {
        label: 'Costs (in billions)',
        data: graphData.map((item) => item.cost),
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#374151' },
        ticks: { color: '#f3f4f6', font: { size: 12 } },
        title: {
          display: true,
          text: 'Costs (in billions)',
          color: '#f3f4f6',
          font: { size: 14, weight: 'bold' },
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#f3f4f6', font: { size: 12 } },
        title: {
          display: true,
          text: 'Sector',
          color: '#f3f4f6',
          font: { size: 14, weight: 'bold' },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#111827',
        titleColor: '#f3f4f6',
        bodyColor: '#f3f4f6',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 6,
      },
    },
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '900px', 
      margin: 'auto', 
      padding: '20px', 
      borderRadius: '12px', 
      backgroundColor: '#1f2937', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#f3f4f6', 
      }}>
        Government Spending Sectors ({currentYear})
      </h2>
      <div style={{ height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default GovernmentSpendingGraph;


// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const GovernmentSpendingGraph = () => {
//   const currentYear = new Date().getFullYear(); // Get the current year

//   const data = {
//     labels: ['Railway', 'Education', 'Healthcare', 'Defense', 'Infrastructure', 'Agriculture', 'Technology', 'Energy', 'Environment'],
//     datasets: [
//       {
//         label: 'Costs (in billions)',
//         data: [120, 90, 80, 70, 60, 50, 40, 30, 20], // Example realistic data
//         backgroundColor: '#3b82f6', // Solid blue color for bars
//         borderColor: '#3b82f6', // Border color
//         borderWidth: 1,
//         borderRadius: 8, // Rounded corners for bars
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: '#374151', // Grid line color
//         },
//         ticks: {
//           color: '#f3f4f6', // Y-axis text color
//           font: {
//             size: 12,
//           },
//         },
//         title: {
//           display: true,
//           text: 'Costs (in billions)',
//           color: '#f3f4f6', // Y-axis title color
//           font: {
//             size: 14,
//             weight: 'bold',
//           },
//         },
//       },
//       x: {
//         grid: {
//           display: false, // Hide x-axis grid lines
//         },
//         ticks: {
//           color: '#f3f4f6', // X-axis text color
//           font: {
//             size: 12,
//           },
//         },
//         title: {
//           display: true,
//           text: 'Sector',
//           color: '#f3f4f6', // X-axis title color
//           font: {
//             size: 14,
//             weight: 'bold',
//           },
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//         backgroundColor: '#111827', // Tooltip background
//         titleColor: '#f3f4f6', // Tooltip title color
//         bodyColor: '#f3f4f6', // Tooltip body color
//         titleFont: { size: 14 },
//         bodyFont: { size: 12 },
//         padding: 10,
//         cornerRadius: 6,
//       },
//     },
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
//       <h2 className="text-center text-2xl font-bold text-white mb-6">
//         Government Spending Sectors ({currentYear})
//       </h2>
//       <div className="h-96">
//         <Bar data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default GovernmentSpendingGraph ;