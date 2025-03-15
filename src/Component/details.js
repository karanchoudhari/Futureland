// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const Details = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const item = location.state;

//   if (!item) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl text-gray-600">No details available</p>
//       </div>
//     );
//   }

//   // Format cost to Indian Rupees
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 2,
//     }).format(amount);
//   };

//   return (
//     <div className="min-h-screen bg-white p-6">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
//         >
//           <FontAwesomeIcon icon={faArrowLeft} />
//           <span>Back</span>
//         </button>
        
//         {/* Project Title */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           {item.project_name}
//         </h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[
//             { label: 'Sector', value: item.sector },
//             { label: 'Cost', value: formatCurrency(item.cost) }, // 🆕 Updated cost formatting
//             { label: 'Stage', value: item.stage },
//             { label: 'State', value: item.state },
//             { label: 'City', value: item.city },
//             { label: 'Start Date', value: item.start },
//             { label: 'Finish Date', value: item.finish },
//             { label: 'Contractor', value: item.contractor },
//           ].map((field, index) => (
//             <div
//               key={index}
//               className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <h2 className="font-semibold text-gray-600">{field.label}</h2>
//               <p className="text-lg text-gray-800">{field.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;import React from 'react';
import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  // Create a ref for the root element
  const rootRef = useRef(null);

  // Apply the 'text-white' class to the root element on mount
  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.classList.add('text-white');
      console.log('Class added to root element:', rootRef.current.classList); // Debugging
    } else {
      console.error('Root element not found!'); // Debugging
    }
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <p className="text-xl text-white">No details available</p>
      </div>
    );
  }

  // Format cost to Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div
      ref={rootRef} // Attach the ref to the root element
      className="bg-gray-900 min-h-screen p-4"
    >
      <div className="bg-gray-400 max-w-3xl mx-auto p-6 rounded-2xl shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Project Title */}
        <h1 className="text-3xl font-bold mb-6">{project.project_name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Sector', value: project.sector },
            // { label: 'Cost', value: formatCurrency(project.cost) },
            // { label: 'Stage', value: project.stage },
            // { label: 'State', value: project.state },
            // { label: 'City', value: project.city },
            // { label: 'Start Date', value: project.start },
            { label: 'Finish Date', value: project.finish },
            { label: 'Contractor', value: project.contractor },
          ].map((field, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-md p-4">
              <p className="text-sm">{field.label}</p>
              <p className="text-lg font-medium">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;