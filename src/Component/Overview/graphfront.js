// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import Graphtable from './graphtable';
// import Addgraph from './addgraph';
// Chart.register(...registerables);

// const Graphfront = () => {
//   const currentYear = new Date().getFullYear(); // Get the current year

//   const [data, setData] = useState({
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
//   });

//   const [showAddGraph, setShowAddGraph] = useState(false);

//   const handleAddGraph = (newSector, newCost) => {
//     setData((prevData) => ({
//       labels: [...prevData.labels, newSector],
//       datasets: [
//         {
//           ...prevData.datasets[0],
//           data: [...prevData.datasets[0].data, newCost],
//         },
//       ],
//     }));
//     setShowAddGraph(false);
//   };

//   const handleEdit = (index, newCost) => {
//     const newData = { ...data };
//     newData.datasets[0].data[index] = newCost;
//     setData(newData);
//   };

//   const handleDelete = (index) => {
//     const newLabels = data.labels.filter((_, i) => i !== index);
//     const newData = data.datasets[0].data.filter((_, i) => i !== index);
//     setData({
//       labels: newLabels,
//       datasets: [
//         {
//           ...data.datasets[0],
//           data: newData,
//         },
//       ],
//     });
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
//       <button
//         className="mb-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//         onClick={() => setShowAddGraph(true)}
//       >
//         Add Graph
//       </button>
//       <div className="h-96">
//         <Bar data={data} options={options} />
//       </div>
//       <Graphtable data={data} onEdit={handleEdit} onDelete={handleDelete} />
//       {showAddGraph && <Addgraph onAdd={handleAddGraph} onClose={() => setShowAddGraph(false)} />}
//     </div>
//   );
// };

// export default Graphfront;

// import React, { useState } from 'react';
// import GovernmentSpendingGraph from './graph';
// import GraphAddForm from './addgraph';

// const GraphFront = () => {
//   const [data, setData] = useState({
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
//   });

//   const [showAddForm, setShowAddForm] = useState(false);

//   // Function to handle adding a new sector
//   const handleAddSector = (newSector, newCost) => {
//     setData((prevData) => ({
//       labels: [...prevData.labels, newSector],
//       datasets: [
//         {
//           ...prevData.datasets[0],
//           data: [...prevData.datasets[0].data, parseFloat(newCost)],
//         },
//       ],
//     }));
//     setShowAddForm(false); // Close the form after adding
//   };

//   // Function to handle editing a sector's cost
//   const handleEditSector = (index) => {
//     const newCost = prompt('Enter new cost:', data.datasets[0].data[index]);
//     if (newCost !== null) {
//       const newData = { ...data };
//       newData.datasets[0].data[index] = parseFloat(newCost);
//       setData(newData);
//     }
//   };

//   // Function to handle deleting a sector
//   const handleDeleteSector = (index) => {
//     const newLabels = data.labels.filter((_, i) => i !== index);
//     const newData = data.datasets[0].data.filter((_, i) => i !== index);
//     setData({
//       labels: newLabels,
//       datasets: [
//         {
//           ...data.datasets[0],
//           data: newData,
//         },
//       ],
//     });
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
//       {/* Graph */}
//       <GovernmentSpendingGraph data={data} />

//       {/* Add Sector Button */}
//       <button
//         className="mb-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//         onClick={() => setShowAddForm(true)}
//       >
//         Add Sector
//       </button>

//       {/* Table */}
//       <div className="mt-6">
//         <table className="w-full border-collapse text-white">
//           <thead>
//             <tr>
//               <th className="p-3 border-b border-gray-700">Sector</th>
//               <th className="p-3 border-b border-gray-700">Cost (in billions)</th>
//               <th className="p-3 border-b border-gray-700">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.labels.map((label, index) => (
//               <tr key={index} className="hover:bg-gray-700 transition duration-300">
//                 <td className="p-3 border-b border-gray-700">{label}</td>
//                 <td className="p-3 border-b border-gray-700">{data.datasets[0].data[index]}</td>
//                 <td className="p-3 border-b border-gray-700">
//                   <button
//                     className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//                     onClick={() => handleEditSector(index)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
//                     onClick={() => handleDeleteSector(index)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Form */}
//       {showAddForm && <GraphAddForm onAdd={handleAddSector} onClose={() => setShowAddForm(false)} />}
//     </div>
//   );
// };

// export default GraphFront;


import React from 'react'
import GraphTable from './graphtable'

import { ChevronLeft, ChevronRight, Filter, X, Search, Edit, Trash2, ArrowUpDown } from "lucide-react";


const graphfront = () => {
  return (
   <>
   
   <GraphTable/>
   </>
  )
}

export default graphfront