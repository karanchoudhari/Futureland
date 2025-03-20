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

import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

function CompanyManageTable({ companyData, setCompanyData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 4 items per page

  // Calculate total pages
  const totalPages = Math.ceil(companyData.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = companyData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle deleting a company
  const handleDelete = (id) => {
    const updatedCompanyData = companyData.filter((company) => company._id !== id);
    setCompanyData(updatedCompanyData);
    localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
  };

  return (
    <div className="overflow-hidden w-full bg-white shadow-md rounded-md mt-6">
      <ul className="border border-gray-300 rounded-md overflow-hidden">
        {/* Table Header */}
        <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
          {['Company Name', 'Email', 'Password', 'Country', 'State', 'City', 'Action'].map((header, index) => (
            <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start relative border-r border-gray-200">
              <div className="flex items-center w-full">
                <span className="text-xs font-semibold uppercase mr-2">
                  {header.replace(/_/g, " ")}
                </span>
              </div>
            </div>
          ))}
        </li>

        {/* Table Rows */}
        {currentItems.map((company) => (
          <li key={company._id} className="flex border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all">
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.companyName}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.companyEmail}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.password}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.country}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.state}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">{company.city}</div>
            <div className="flex-1 px-4 py-2 text-sm text-gray-800 flex items-start justify-start space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(company._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between py-4 items-center px-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CompanyManageTable;