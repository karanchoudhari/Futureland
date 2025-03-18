// import React, { useState } from 'react';
// import { Plus, X } from 'lucide-react';

// const AddGraph = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     Railway: 120,
//     Education: 90,
//     Healthcare: 80,
//     Defense: 70,
//     Infrastructure: 60,
//     Agriculture: 50,
//     Technology: 40,
//     Energy: 30,
//     Environment: 20,
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newSector, setNewSector] = useState('');
//   const [newCost, setNewCost] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: Number(value),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Form submitted successfully!');
//     onSubmit(formData);
//   };

//   const handleAddSector = () => {
//     if (newSector && newCost) {
//       setFormData((prevData) => ({
//         ...prevData,
//         [newSector]: Number(newCost),
//       }));
//       setIsModalOpen(false);
//       setNewSector('');
//       setNewCost('');
//       alert('Sector added successfully!');
//     }
//   };

//   const handleRemoveSector = (sector) => {
//     const updatedData = { ...formData };
//     delete updatedData[sector];
//     setFormData(updatedData);
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md">
//       <h2 className="text-center text-2xl font-bold mb-4">Add or Edit Graph Data</h2>

//       {/* Add Sector Button at the Top */}
//       <div className="flex items-center justify-center gap-4 mb-6">
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//         >
//           <Plus /> Add Sector
//         </button>
//       </div>

//       <form className="grid grid-cols-2 gap-4">
//         {Object.entries(formData).map(([sector, value]) => (
//           <div key={sector} className="relative flex flex-col border border-gray-600 rounded-md p-2">
//             <label className="font-medium">{sector}</label>
//             <input
//               type="number"
//               name={sector}
//               value={value}
//               onChange={handleChange}
//               className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="button"
//               onClick={() => handleRemoveSector(sector)}
//               className="absolute -top-3 -right-3 text-red-500 hover:text-red-600"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         ))}

//         {/* Submit Button at the Bottom Center */}
//         <div className="col-span-2 flex justify-center mt-6">
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Modal for Adding New Sector */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-gray-800 p-6 rounded-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Add New Sector</h3>
//             <input
//               type="text"
//               placeholder="Sector Name"
//               value={newSector}
//               onChange={(e) => setNewSector(e.target.value)}
//               className="w-full mb-3 p-2 rounded-md bg-gray-700 border border-gray-600"
//             />
//             <input
//               type="number"
//               placeholder="Cost (in billions)"
//               value={newCost}
//               onChange={(e) => setNewCost(e.target.value)}
//               className="w-full mb-3 p-2 rounded-md bg-gray-700 border border-gray-600"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddSector}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               >
//                 Add Sector
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddGraph;


// import React, { useState, useEffect } from 'react';

// const Addgraph = ({ onSubmit, formData, onCancel }) => {
//   const [sector, setSector] = useState('');
//   const [cost, setCost] = useState('');

//   useEffect(() => {
//     if (formData) {
//       setSector(formData.sector);
//       setCost(formData.cost);
//     }
//   }, [formData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ id: formData?.id, sector, cost: parseFloat(cost) });
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">{formData ? 'Edit Sector' : 'Add Sector'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Sector:</label>
//           <input
//             type="text"
//             value={sector}
//             onChange={(e) => setSector(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Cost (in billions):</label>
//           <input
//             type="number"
//             value={cost}
//             onChange={(e) => setCost(e.target.value)}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//         </div>
//         <div className="flex gap-2">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             {formData ? 'Update' : 'Submit'}
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Addgraph;








import React, { useState, useEffect } from 'react';

const Addgraph = ({ onSubmit, formData, onCancel }) => {
  const [sector, setSector] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    if (formData) {
      setSector(formData.sector);
      setCost(formData.cost);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: formData?.id, sector, cost: parseFloat(cost) });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{formData ? 'Edit Sector' : 'Add Sector'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sector:</label>
          <input
            type="text"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Cost (in billions):</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {formData ? 'Update' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addgraph;