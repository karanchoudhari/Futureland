import React, { useState } from 'react';
// import Graphtable from './Graphtable';
// import Addgraph from './Addgraph';
import Graphtable from './graphtable';
import Addgraph from './addgraph';
import GovernmentSpendingGraph from './GovernmentSpendingGraph';

const Graphfront = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);
  const [sectors, setSectors] = useState([
    { id: 1, sector: 'Railway', cost: 120 },
    { id: 2, sector: 'Education', cost: 90 },
    { id: 3, sector: 'Healthcare', cost: 80 },
  ]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleAddSector = () => {
    setShowForm(true);
    setFormData(null); // Reset form data for adding new sector
  };

  const handleSubmit = (data) => {
    if (data.id) {
      // Update existing sector
      setSectors((prev) =>
        prev.map((sector) => (sector.id === data.id ? data : sector))
      );
      setShowUpdateModal(true);
    } else {
      // Add new sector
      const newSector = { ...data, id: sectors.length + 1 };
      setSectors((prev) => [...prev, newSector]);
      setShowSuccessModal(true);
    }
    setShowForm(false);
  };

  const handleEdit = (sector) => {
    setFormData(sector);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setSectors((prev) => prev.filter((sector) => sector.id !== id));
  };

  const closeSuccessModal = () => setShowSuccessModal(false);
  const closeUpdateModal = () => setShowUpdateModal(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Government Spending Sectors</h1>
        <button
          onClick={handleAddSector}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Sector
        </button>
      </div>

      <div className="flex gap-8">
        <div className={`flex-1 ${showForm ? 'w-2/3' : 'w-full'}`}>
          {/* Pass sectors to the GovernmentSpendingGraph component */}
          <GovernmentSpendingGraph sectors={sectors} />
          <Graphtable sectors={sectors} onEdit={handleEdit} onDelete={handleDelete} />
        </div>

        {showForm && (
          <div className="w-1/3">
            <Addgraph onSubmit={handleSubmit} formData={formData} onCancel={() => setShowForm(false)} />
          </div>
        )}
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
              <p className="text-gray-600 text-center">Your project has been successfully submitted.</p>
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
              <p className="text-gray-600 text-center">Your project has been successfully updated.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphfront;