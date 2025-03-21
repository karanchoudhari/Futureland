// import React, { useState } from 'react';

// function Usermanagetable({ userData }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;

//   // Calculate total pages
//   const totalPages = Math.ceil(userData.length / itemsPerPage);

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle pagination
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <div style={{ padding: '10px', borderRadius: '8px', marginTop: '8px', height: '230px' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#ffffff' }}>User List</h2>
//         <table className="min-w-full bg-[#1e1e1e] text-white rounded-lg shadow-md">
//           <thead className="bg-gray-800">
//             <tr>
//               {['Name', 'Email', 'Company', 'Role', 'Created By', 'Expiry'].map((header) => (
//                 <th key={header} className="px-6 py-3 text-lg font-semibold text-center border-b border-gray-700">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((user) => (
//               <tr key={user._id}>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.name}</td>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.email}</td>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.company_name}</td>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_role}</td>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_creted_by}</td>
//                 <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_expiry_date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 mx-2 text-white bg-gray-700 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-white px-4">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 mx-2 text-white bg-gray-700 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>



//     </>
//   );
// }

// export default Usermanagetable;














// import React, { useState } from 'react';
// import { Edit, Trash2 } from 'lucide-react';

// function Usermanagetable({ userData }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Calculate total pages
//   const totalPages = Math.ceil(userData.length / itemsPerPage);

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle pagination
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="overflow-hidden w-full bg-white shadow-md rounded-md">
//       <ul className="border border-gray-300 rounded-md overflow-hidden">
//         {/* Table Header */}
//         <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
//           {['Name', 'Email', 'Company', 'Role', 'Created By', 'Expiry', 'Action'].map((header, index) => (
//             <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start relative border-r border-gray-200">
//               <div className="flex items-center w-full">
//                 <span className="text-xs font-semibold uppercase mr-2">
//                   {header.replace(/_/g, " ")}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </li>

//         {/* Table Rows */}
//         {currentItems.map((user) => (
//           <li key={user._id} className="flex border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all">
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.name}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.email}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.company_name}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.user_role}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.user_creted_by}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{user.user_expiry_date}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 flex items-center justify-center space-x-2">
//               <button className="text-blue-500 hover:text-blue-700">
//                 <Edit className="w-4 h-4" />
//               </button>
//               <button className="text-red-500 hover:text-red-700">
//                 <Trash2 className="w-4 h-4" />
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="flex justify-between py-4 items-center px-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Usermanagetable;

// import React, { useState } from 'react';
// import { Edit, Trash2 } from 'lucide-react';

// function CompanyManageTable({ companyData, setCompanyData }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4; // 4 items per page

//   // Calculate total pages
//   const totalPages = Math.ceil(companyData.length / itemsPerPage);

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = companyData.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle pagination
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Handle deleting a company
//   const handleDelete = (id) => {
//     const updatedCompanyData = companyData.filter((company) => company._id !== id);
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//   };

//   return (
//     <div className="overflow-hidden w-full bg-white shadow-md rounded-md mt-6">
//       <ul className="border border-gray-300 rounded-md overflow-hidden">
//         {/* Table Header */}
//         <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
//           {['Company Name', 'Company Email','Expiry-Date', 'Password', 'Country', 'State', 'City', 'Action'].map((header, index) => (
//             <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start relative border-r border-gray-200">
//               <div className="flex items-center w-full">
//                 <span className="text-xs font-semibold uppercase mr-2">
//                   {header.replace(/_/g, " ")}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </li>

//         {/* Table Rows */}
//         {currentItems.map((company) => (
//           <li key={company._id} className="flex border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all">
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.company_Name}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.company_Email}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.company_ExpiryDate}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.password}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.country}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.state}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.city}</div>
//             <div className="flex-1 px-4 py-2 text-sm text-gray-800 flex items-start justify-start space-x-2">
//               <button className="text-blue-500 hover:text-blue-700">
//                 <Edit className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => handleDelete(company._id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <Trash2 className="w-4 h-4" />
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="flex justify-between py-4 items-center px-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CompanyManageTable;








// import React, { useState } from 'react';
// import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component

// const CompanyManageTable = () => {
//   const [showAddForm, setShowAddForm] = useState(false); // State to toggle the form visibility

//   // Dummy data for the table
//   const companyData = [
//     {
//       id: 1,
//       name: 'Company A',
//       email: 'companyA@example.com',
//       expiryDate: '2023-12-31',
//       locations: [
//         {
//           country: 'India',
//           state: 'Delhi',
//           cities: ['Rohini', 'Pritampura'],
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Company B',
//       email: 'companyB@example.com',
//       expiryDate: '2024-01-15',
//       locations: [
//         {
//           country: 'USA',
//           state: 'California',
//           cities: ['Los Angeles', 'San Francisco'],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Add Company Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={() => setShowAddForm(!showAddForm)}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
//         >
//           <span>{showAddForm ? 'Close Form' : 'Add Company Management'}</span>
//         </button>
//       </div>

//       {/* Conditionally Render the Form */}
//       {showAddForm && <CompanyManagementAdd />}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3 text-left">Company Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Expiry Date</th>
//               <th className="p-3 text-left">Locations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companyData.map((company) => (
//               <tr key={company.id} className="border-b border-gray-200 hover:bg-gray-50">
//                 <td className="p-3">{company.name}</td>
//                 <td className="p-3">{company.email}</td>
//                 <td className="p-3">{company.expiryDate}</td>
//                 <td className="p-3">
//                   {company.locations.map((location, index) => (
//                     <div key={index}>
//                       <strong>{location.country}</strong>, {location.state}: {location.cities.join(', ')}
//                     </div>
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CompanyManageTable;









// import React, { useState } from 'react';
// import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component

// const CompanyManageTable = () => {
//   const [showAddForm, setShowAddForm] = useState(false); // State to toggle the form visibility

//   // Dummy data for the table
//   const companyData = [
//     {
//       id: 1,
//       name: 'Company A',
//       email: 'companyA@example.com',
//       expiryDate: '2023-12-31',
//       password: 'password123',
//       locations: [
//         {
//           country: 'India',
//           state: 'Delhi',
//           cities: ['Rohini', 'Pritampura'],
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Company B',
//       email: 'companyB@example.com',
//       expiryDate: '2024-01-15',
//       password: 'password456',
//       locations: [
//         {
//           country: 'USA',
//           state: 'California',
//           cities: ['Los Angeles', 'San Francisco'],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Add Company Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={() => setShowAddForm(true)}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
//         >
//           <span>Add Company Management</span>
//         </button>
//       </div>

//       {/* Modal for Add Company Form */}
//       {showAddForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6">
//             <CompanyManagementAdd onClose={() => setShowAddForm(false)} />
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3 text-left">Company Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Expiry Date</th>
//               <th className="p-3 text-left">Password</th>
//               <th className="p-3 text-left">Locations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companyData.map((company) => (
//               <tr key={company.id} className="border-b border-gray-200 hover:bg-gray-50">
//                 <td className="p-3">{company.name}</td>
//                 <td className="p-3">{company.email}</td>
//                 <td className="p-3">{company.expiryDate}</td>
//                 <td className="p-3">{company.password}</td>
//                 <td className="p-3">
//                   {company.locations.map((location, index) => (
//                     <div key={index}>
//                       <strong>{location.country}</strong>, {location.state}: {location.cities.join(', ')}
//                     </div>
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CompanyManageTable;


// import React, { useState, useEffect } from 'react';
// import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component

// const CompanyManageTable = () => {
//   const [showAddForm, setShowAddForm] = useState(false); // State to toggle the form visibility
//   const [companyData, setCompanyData] = useState([]); // State to manage company data
//   const [showSuccessModal, setShowSuccessModal] = useState(false); // State to toggle success modal

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Add new company data
//   const addCompanyData = (newCompany) => {
//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//     setShowSuccessModal(true); // Show success modal
//   };

//   return (
//     <div className="space-y-6">
//       {/* Add Company Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={() => setShowAddForm(true)}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
//         >
//           <span>Add Company Management</span>
//         </button>
//       </div>

//       {/* Modal for Add Company Form */}
//       {showAddForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6">
//             <CompanyManagementAdd
//               onClose={() => setShowAddForm(false)}
//               addCompanyData={addCompanyData}
//             />
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
//             <p className="text-gray-700">Company data has been successfully added.</p>
//             <button
//               onClick={() => setShowSuccessModal(false)}
//               className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3 text-left">Company Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Expiry Date</th>
//               <th className="p-3 text-left">Password</th>
//               <th className="p-3 text-left">Locations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {companyData && companyData.length > 0 ? (
//               companyData.map((company, index) => (
//                 <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="p-3">{company.company_Name}</td>
//                   <td className="p-3">{company.company_Email}</td>
//                   <td className="p-3">{company.company_ExpiryDate}</td>
//                   <td className="p-3">{company.password}</td>
//                   <td className="p-3">
//                     {company.locations && company.locations.map((location, idx) => (
//                       <div key={idx}>
//                         <strong>{location.country.label}</strong>, {location.state.label}:{' '}
//                         {location.cities.map((city) => city.label).join(', ')}
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-3 text-center text-gray-500">
//                   No company data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CompanyManageTable;

import React, { useState, useEffect } from 'react';
import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component
import { Edit, Trash, X, } from 'lucide-react'; // Icons for edit and delete

const CompanyManageTable = () => {
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle the form visibility
  const [companyData, setCompanyData] = useState([]); // State to manage company data
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to toggle success modal
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const entriesPerPage = 5; // Number of entries per page

  // Load company data from localStorage on component mount
  useEffect(() => {
    const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
    setCompanyData(storedCompanyData);
  }, []);

  // Add new company data
  const addCompanyData = (newCompany) => {
    const updatedCompanyData = [...companyData, newCompany];
    setCompanyData(updatedCompanyData);
    localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
    setShowSuccessModal(true); // Show success modal
  };

  // Handle edit action
  const handleEdit = (id) => {
    console.log('Edit company with ID:', id);
    // Add your edit logic here
  };

  // Handle delete action
  const handleDelete = (id) => {
    const updatedCompanyData = companyData.filter((company) => company.id !== id);
    setCompanyData(updatedCompanyData);
    localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
  };

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = companyData.slice(indexOfFirstEntry, indexOfLastEntry);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      {/* Add Company Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddForm(true)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
        >
          <span>Add Company Management</span>
        </button>
      </div>

      {/* Modal for Add Company Form */}
      {showAddForm && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-10/12 md:w-3/4 lg:w-1/2 p-6 relative">
          
            <button
              className="
                absolute 
                -top-3 
                -right-3 
                bg-white 
                w-[30px] 
                h-[30px] 
                border 
                border-gray-300 
                shadow-md 
                flex 
                items-center 
                justify-center
                rounded-full
              "
              onClick={() => setShowAddForm(false)}
            >
              <X size={16} />
            </button>
            <CompanyManagementAdd
              onClose={() => setShowAddForm(false)}
              addCompanyData={addCompanyData}
            />
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700">Company data has been successfully added.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left ">Company Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Expiry Date</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">Locations</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((company) => (
              <tr key={company.id} className="border-b  border-gray-200 hover:bg-gray-50">
                <td className="p-3 border">{company.company_name}</td>
                <td className="p-3 border">{company.company_Email}</td>
                <td className="p-3 border">{company.company_ExpiryDate}</td>
                <td className="p-3 border">{company.password}</td>

                <td className="p-3 border">
                  {Array.isArray(company.permission_location) ? (
                    company.permission_location
                      .filter(location => Array.isArray(location.cities) && location.cities.length > 0) // Filter out empty entries
                      .map((location, idx) => (
                        <div key={idx}>
                          <strong>{location.country}</strong> - {location.state} :{' '}
                          {location.cities.join(', ')}
                        </div>
                      ))
                  ) : (
                    <div>No locations available</div>
                  )}
                </td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(company.id)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(company.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(companyData.length / entriesPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyManageTable;