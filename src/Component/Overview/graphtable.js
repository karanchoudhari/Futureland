// import React from 'react';
// import { Pencil, Trash2 } from 'lucide-react';

// const Graphtable = ({ sectors, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
//       <table className="w-full">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4 text-left">Sector</th>
//             <th className="p-4 text-left">Cost (in billions)</th>
//             <th className="p-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sectors.map((sector) => (
//             <tr key={sector.id} className="border-b">
//               <td className="p-4">{sector.sector}</td>
//               <td className="p-4">{sector.cost}</td>
//               <td className="p-4 flex gap-2">
//                 <button
//                   onClick={() => onEdit(sector)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <Pencil className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => onDelete(sector.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Graphtable;







// import React from 'react';
// import { Pencil, Trash2 } from 'lucide-react';

// const Graphtable = ({ sectors, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
//       <table className="w-full">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4 text-left">Sector</th>
//             <th className="p-4 text-left">Cost (in billions)</th>
//             <th className="p-4 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sectors.map((sector) => (
//             <tr key={sector.id} className="border-b">
//               <td className="p-4">{sector.sector}</td>
//               <td className="p-4">{sector.cost}</td>
//               <td className="p-4 flex gap-2">
//                 <button
//                   onClick={() => onEdit(sector)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   <Pencil className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => onDelete(sector.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Graphtable;

// import React from 'react';

// const Graphtable = ({ data, onEdit, onDelete }) => {
//   return (
//     <div className="mt-6">
//       <table className="w-full border-collapse text-white">
//         <thead>
//           <tr>
//             <th className="p-3 border-b border-gray-700">Sector</th>
//             <th className="p-3 border-b border-gray-700">Cost (in billions)</th>
//             <th className="p-3 border-b border-gray-700">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.labels.map((label, index) => (
//             <tr key={index} className="hover:bg-gray-700 transition duration-300">
//               <td className="p-3 border-b border-gray-700">{label}</td>
//               <td className="p-3 border-b border-gray-700">{data.datasets[0].data[index]}</td>
//               <td className="p-3 border-b border-gray-700">
//                 <button
//                   className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//                   onClick={() => {
//                     const newCost = prompt('Enter new cost:', data.datasets[0].data[index]);
//                     if (newCost !== null) {
//                       onEdit(index, parseFloat(newCost));
//                     }
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
//                   onClick={() => onDelete(index)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Graphtable;

// import React from 'react';
// import { Pencil, Trash2 } from 'lucide-react';

// const GraphTable = () => {
//   const graphData = {
//     labels: ['Railway', 'Education', 'Healthcare', 'Defense', 'Infrastructure', 'Agriculture', 'Technology', 'Energy', 'Environment'],
//     data: [120, 90, 80, 70, 60, 50, 40, 30, 20],
//   };

//   const tableData = graphData.labels.map((label, index) => ({
//     sector: label,
//     cost: graphData.data[index],
//   }));

//   const handleEdit = (index) => {
//     console.log(`Edit item at index ${index}`);
//   };

//   const handleDelete = (index) => {
//     console.log(`Delete item at index ${index}`);
//   };

//   return (
//     <div className="flex justify-center p-6">
//       <div className="max-w-4xl w-full rounded-3xl shadow-lg bg-gray-100 overflow-hidden">
//         <h2 className="text-center text-xl font-bold text-gray-800 py-4 bg-gray-200">
//           Government Spending Sectors Table
//         </h2>
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-4 text-gray-800 font-bold">Sector</th>
//               <th className="p-4 text-gray-800 font-bold">Cost (in billions)</th>
//               <th className="p-4 text-gray-800 font-bold">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.map((row, index) => (
//               <tr key={index} className="border-b border-gray-300 last:border-none">
//                 <td className="p-4 text-gray-800">{row.sector}</td>
//                 <td className="p-4 text-gray-800">{row.cost}</td>
//                 <td className="p-4">
//                   <button 
//                     onClick={() => handleEdit(index)} 
//                     className="text-blue-500 mr-3"
//                   >
//                     <Pencil size={20} />
//                   </button>
//                   <button 
//                     onClick={() => handleDelete(index)} 
//                     className="text-red-500"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GraphTable;

import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, X, CheckCircle, Edit, ChevronLeft } from 'lucide-react';

const GraphTable = () => {
  const [graphData, setGraphData] = useState(() => {
    const savedData = localStorage.getItem('graphData');
    return savedData ? JSON.parse(savedData) : [
      { sector: 'Railway', cost: 120 },
      { sector: 'Education', cost: 90 },
      { sector: 'Healthcare', cost: 80 },
      { sector: 'Defense', cost: 70 },
      { sector: 'Infrastructure', cost: 60 },
      { sector: 'Agriculture', cost: 50 },
      { sector: 'Technology', cost: 40 },
      { sector: 'Energy', cost: 30 },
      { sector: 'Environment', cost: 20 },
    ];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newSector, setNewSector] = useState('');
  const [newCost, setNewCost] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Save data to localStorage whenever graphData changes
  useEffect(() => {
    localStorage.setItem('graphData', JSON.stringify(graphData));
  }, [graphData]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = graphData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(graphData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddSector = () => {
    if (newSector && newCost) {
      const updatedData = [...graphData, { sector: newSector, cost: parseFloat(newCost) }];
      setGraphData(updatedData);
      setIsFormOpen(false);
      setNewSector('');
      setNewCost('');
      setShowSuccessModal(true);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewSector(graphData[index].sector);
    setNewCost(graphData[index].cost.toString());
    setIsFormOpen(true);
  };

  const handleUpdateSector = () => {
    if (newSector && newCost && editIndex !== null) {
      const updatedData = [...graphData];
      updatedData[editIndex] = { sector: newSector, cost: parseFloat(newCost) };
      setGraphData(updatedData);
      setIsFormOpen(false);
      setNewSector('');
      setNewCost('');
      setEditIndex(null);
      setShowUpdateModal(true);
    }
  };

  const handleDelete = (index) => {
    const updatedData = graphData.filter((_, i) => i !== index);
    setGraphData(updatedData);
  };

  const closeSuccessModal = () => setShowSuccessModal(false);
  const closeUpdateModal = () => setShowUpdateModal(false);

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-4xl w-full rounded-3xl shadow-lg bg-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-200">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <ChevronLeft className="w-6 h-6 mr-2" />
            Back
          </button>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Sector
          </button>
        </div>
        <h2 className="text-center text-xl font-bold text-gray-800 py-4 bg-gray-200">
          Government Spending Sectors Table
        </h2>
        <div className="p-4">
          {isFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-96">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">{editIndex !== null ? 'Edit Sector' : 'Add Sector'}</h3>
                  <button onClick={() => setIsFormOpen(false)}>
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Sector"
                  value={newSector}
                  onChange={(e) => setNewSector(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <input
                  type="number"
                  placeholder="Cost (in billions)"
                  value={newCost}
                  onChange={(e) => setNewCost(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <button
                  onClick={editIndex !== null ? handleUpdateSector : handleAddSector}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  {editIndex !== null ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          )}
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-gray-800 font-bold">Sector</th>
              <th className="p-4 text-gray-800 font-bold">Cost (in billions)</th>
              <th className="p-4 text-gray-800 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 last:border-none">
                <td className="p-4 text-gray-800">{row.sector}</td>
                <td className="p-4 text-gray-800">{row.cost}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleEdit(indexOfFirstItem + index)}
                    className="text-blue-500 mr-3"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(indexOfFirstItem + index)}
                    className="text-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 bg-gray-200">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 relative">
            <button onClick={closeSuccessModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
              <p className="text-gray-600 text-center">Sector has been successfully Added.</p>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 relative">
            <button onClick={closeUpdateModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <Edit className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
              <p className="text-gray-600 text-center">Sector has been successfully updated.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphTable;