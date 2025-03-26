import React, { useEffect } from 'react'
import { Edit, Trash, X } from 'lucide-react'; // Icons for edit and delete
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../../FeatureRedux/CompanyReducer/deleteCompany'
import { allcompanylist } from '../../../FeatureRedux/CompanyReducer/getCompanylist'


function CompanyDeleteButton({ id }) {
  const dispatch = useDispatch();

  const handledelete = async () => {
    await dispatch(deleteCompany(id))
    dispatch(allcompanylist())
  }

  //  useEffect(()=>{
  //   dispatch(allcompanylist())
  // dispatch(deleteCompany(id))
  //  },[])

  return (
    <div>
      <button
        onClick={() => handledelete()}
        className="text-red-500 hover:text-red-600"
      >
        <Trash size={16} />
      </button>
    </div>
  )
}

export default CompanyDeleteButton
