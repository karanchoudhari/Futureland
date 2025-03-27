// import React, { useEffect } from 'react'
// import { Edit, Trash, X } from 'lucide-react'; // Icons for edit and delete
// import { useDispatch } from 'react-redux';
// import { deleteCompany } from '../../../FeatureRedux/CompanyReducer/deleteCompany'
// import { allcompanylist } from '../../../FeatureRedux/CompanyReducer/getCompanylist'


// function CompanyDeleteButton({ id }) {
//   const dispatch = useDispatch();

//   const handledelete = async () => {
//     await dispatch(deleteCompany(id))
//     dispatch(allcompanylist())
//   }

//   //  useEffect(()=>{
//   //   dispatch(allcompanylist())
//   // dispatch(deleteCompany(id))
//   //  },[])

//   return (
//     <div>
//       <button
//         onClick={() => handledelete()}
//         className="text-red-500 hover:text-red-600"
//       >
//         <Trash size={16} />
//       </button>
//     </div>
//   )
// }

// export default CompanyDeleteButton;






// karan edited code start here 
import React, { useState } from 'react'
import { Edit, Trash, X } from 'lucide-react'; // Icons for edit and delete
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../../FeatureRedux/CompanyReducer/deleteCompany'
import { allcompanylist } from '../../../FeatureRedux/CompanyReducer/getCompanylist'


function CompanyDeleteButton({ id }) {
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handledelete = async () => {
    await dispatch(deleteCompany(id))
    dispatch(allcompanylist())
    setShowConfirmation(false)
  }

  return (
    <div>
      <button
        onClick={() => setShowConfirmation(true)}
        className="text-red-500 hover:text-red-600"
      >
        <Trash size={16} />
      </button>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Confirm Deletion</h3>
              <button 
                onClick={() => setShowConfirmation(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mb-6">Are you sure you want to delete this company? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handledelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompanyDeleteButton;