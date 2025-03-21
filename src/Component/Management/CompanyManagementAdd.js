// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { X } from 'lucide-react';
// import CompanyManageTable from './CompanyManageTable';

// const CompanyManagementAdd = ({ companyData, setCompanyData }) => {
//   const [companyName, setCompanyName] = useState('');
//   const [companyEmail, setCompanyEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [newSector, setNewSector] = useState('');
//   const [sectorError, setSectorError] = useState('');

//   const [sectors] = useState([
//     { id: 1, company_name: 'Tech Solutions' },
//     { id: 2, company_name: 'Global Innovations' },
//     { id: 3, company_name: 'NextGen Enterprises' },
//     { id: 4, company_name: 'Smart Systems' },
//     { id: 5, company_name: 'Smart Systems' },
//   ]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       _id: companyData.length + 1,
//       companyName,
//       companyEmail,
//       password,
//       country,
//       state,
//       city,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData)); // Save to localStorage
//     handleReset();
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setPassword('');
//     setCountry('');
//     setState('');
//     setCity('');
//   };

//   // Handle adding a new sector
//   const handleAddSector = () => {
//     if (!newSector) {
//       setSectorError('Sector name is required');
//       return;
//     }
//     if (sectors.some((sector) => sector.company_name === newSector)) {
//       setSectorError('Sector already exists');
//       return;
//     }
//     sectors.push({ id: sectors.length + 1, company_name: newSector });
//     setNewSector('');
//     setShowModal(false);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">Company Management</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
//         {/* Company Name */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Name:</label>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company name"
//             required
//           />
//         </div>

//         {/* Company Email */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Email:</label>
//           <input
//             type="email"
//             value={companyEmail}
//             onChange={(e) => setCompanyEmail(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company email"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         {/* Country */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Country:</label>
//           <input
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter country"
//             required
//           />
//         </div>

//         {/* State */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">State:</label>
//           <input
//             type="text"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter state"
//             required
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">City:</label>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         {/* Form Buttons */}
//         <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Add Sector Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h2 className="text-xl font-bold mb-4">Add New Sector</h2>
//             <input
//               type="text"
//               value={newSector}
//               onChange={(e) => setNewSector(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter sector name"
//             />
//             {sectorError && <p className="text-red-500 text-sm mt-2">{sectorError}</p>}
//             <button
//               onClick={handleAddSector}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyManagementAdd;
import React, { useState, useEffect } from 'react';
import CompanyManageTable from './CompanyManageTable'; // Import the table component

const CompanyManagementAdd = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [companyData, setCompanyData] = useState([]);

  // Load company data from localStorage on component mount
  useEffect(() => {
    const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
    setCompanyData(storedCompanyData);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCompany = {
       
      companyName,
      companyEmail,
      password,
      country,
      state,
      city,
    };

    const updatedCompanyData = [...companyData, newCompany];
    setCompanyData(updatedCompanyData);
    localStorage.setItem('companyData', JSON.stringify(updatedCompanyData)); // Save to localStorage
    handleReset();
  };

  // Reset form fields
  const handleReset = () => {
    setCompanyName('');
    setCompanyEmail('');
    setPassword('');
    setCountry('');
    setState('');
    setCity('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Company Management</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter company name"
            required
          />
        </div>

        {/* Company Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Company Email:</label>
          <input
            type="email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter company email"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter country"
            required
          />
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">State:</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter state"
            required
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Enter city"
            required
          />
        </div>

        {/* Form Buttons */}
        <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Render the CompanyManageTable component */}
      <CompanyManageTable companyData={companyData} setCompanyData={setCompanyData} />
    </div>
  );
};

export default CompanyManagementAdd;