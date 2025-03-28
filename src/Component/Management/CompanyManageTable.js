import React, { useState, useEffect } from 'react';
import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component
import { Edit, Trash, X } from 'lucide-react'; // Icons for edit and delete
import CompanyDeleteButton from './ManagementButtons/companyDeleteButton';
import { useSelector, useDispatch } from 'react-redux';
import { allcompanylist } from '../../FeatureRedux/CompanyReducer/getCompanylist'
import {addCompany} from '../../FeatureRedux/CompanyReducer/addCompany'
import {updateCompany } from '../../FeatureRedux/CompanyReducer/updateCompany'

const CompanyManageTable = () => {
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle the form visibility
  const [companyData, setCompanyData] = useState([]); // State to manage company data
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State to toggle success modal
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const [editingCompany, setEditingCompany] = useState(null); // State to track the company being edited
  const entriesPerPage = 5; // Number of entries per page



  const dispatch = useDispatch();

  const componydata = useSelector((s) => s.allcompanylist);
  console.log("This is Company data", componydata);




  useEffect(() => {
    dispatch(allcompanylist())
    console.log("api dispatchcalled ")
    // const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
    // setCompanyData(storedCompanyData);
  }, []);

  // Add or update company data
  const addCompanyData =async (newCompany) => {

    if(editingCompany != null ){
      console.log("edit clicked");
      // console.log("This is company data",editingCompany._id , newCompany)
      await dispatch(updateCompany({ id: editingCompany._id, newCompany }))
      dispatch(allcompanylist())
      return ;
    }
     
    // console.log("This is company data",newCompany)
    await dispatch(addCompany(newCompany)) 
    dispatch(allcompanylist()) 
    // setCompanyData(updatedCompanyData);
    // localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
    setShowSuccessModal(true); // Show success modal
  };

  // Handle edit action
  const handleEdit = (id) => {
    const companyToEdit = componydata.data.find((company) => company._id === id);
    setEditingCompany(companyToEdit); // Set the company being edited
    
    

    setShowAddForm(true); 

  };

  // console.log(`editingCompany data ${JSON.stringify(editingCompany)}`)


  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries =  componydata.isSuccess ? componydata.data.slice(indexOfFirstEntry, indexOfLastEntry) : [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-gray-800">Company Management List</span>

        <button
          onClick={() => {
            setEditingCompany(null); // Reset editing company
            setShowAddForm(true);
          }}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
        >
          <span>Add Company Management</span>
        </button>
      </div>

      {/* Modal for Add Company Form */}
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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
              onClick={() => {
                setShowAddForm(false);
                setEditingCompany(null); // Reset editing company
              }}
            >
              <X size={16} />
            </button>
            <CompanyManagementAdd
              onClose={() => {
                setShowAddForm(false);
                setEditingCompany(null); // Reset editing company
              }}
              addCompanyData={addCompanyData}
              editingCompany={editingCompany} // Pass the company being edited
            />
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700">Company data has been successfully updated.</p>
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
              <th className="p-3 text-left">Company Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Expiry Date</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">Locations</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {componydata.isSuccess &&  componydata.data.length > 0 ? (
              componydata.data.map((company, index) => (
                
                <tr key={company._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 border">{company.company_name}</td>
                  <td className="p-3 border">{company.company_email}</td>
                  <td className="p-3 border">{company.company_expiry}</td>
                  <td className="p-3 border">{company.password || 'N/A'}</td>
                  <td className="p-3 border">
                    { Array.isArray(componydata.data) && Array.isArray(company.permission_location) ? (
                      company.permission_location
                        .filter((location) => Array.isArray(location.cities) && location.cities.length > 0) // Filter out empty entries
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
                      onClick={() => handleEdit(company._id)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <Edit size={16} />
                    </button>
                    <CompanyDeleteButton id={company._id}  />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-3">No data available</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(componydata.length / entriesPerPage) }, (_, i) => (
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