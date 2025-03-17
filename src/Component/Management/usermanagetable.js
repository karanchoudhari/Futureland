import React, { useState } from 'react';

function Usermanagetable({ userData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

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

  return (
    <>
      <div style={{ padding: '10px', borderRadius: '8px', marginTop: '8px', height: '230px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#ffffff' }}>User List</h2>
        <table className="min-w-full bg-[#1e1e1e] text-white rounded-lg shadow-md">
          <thead className="bg-gray-800">
            <tr>
              {['Name', 'Email', 'Company', 'Role', 'Created By', 'Expiry'].map((header) => (
                <th key={header} className="px-6 py-3 text-lg font-semibold text-center border-b border-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.name}</td>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.email}</td>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.company_name}</td>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_role}</td>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_creted_by}</td>
                <td className="px-6 py-3 border-b border-gray-700 text-center">{user.user_expiry_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 text-white bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white px-4">Page {currentPage} of {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 text-white bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>



    </>
  );
}

export default Usermanagetable;