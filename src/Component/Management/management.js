import React, { useState } from 'react';
import Blogfront from '../Management/Blog/blogfront'; // Import Blogfront component
import Graphfront from '../Overview/graphfront'; // Import graphfront component
import CompanyManagementAdd from './CompanyManagementAdd'; // Import the CompanyManagementAdd component

const Management = () => {
  const [activeTab, setActiveTab] = useState('companyManagement'); // State to manage active tab

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'companyManagement':
        return <CompanyManagementAdd />;
      case 'blog':
        return <Blogfront />;
      case 'graph':
        return <Graphfront />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Buttons at the Top Center */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab('companyManagement')}
          className={`px-6 py-2 rounded-t-lg transition-all ${
            activeTab === 'companyManagement'
              ? 'bg-white text-blue-500 shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Company Management
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-6 py-2 rounded-t-lg transition-all ${
            activeTab === 'blog'
              ? 'bg-white text-green-500 shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Blog
        </button>
        <button
          onClick={() => setActiveTab('graph')}
          className={`px-6 py-2 rounded-t-lg transition-all ${
            activeTab === 'graph'
              ? 'bg-white text-purple-500 shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Graph
        </button>
      </div>

      {/* Render Content Based on Active Tab */}
      {renderContent()}
    </div>
  );
};

export default Management;




// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Usermanagetable from './usermanagetable';
// import Blogfront from '../Management/Blog/blogfront'; // Import Blogfront component
// import Graphfront from '../Overview/graphfront'; // Import graphfront component
// import { useNavigate } from 'react-router-dom';
// import { Plus, X, Edit, Trash2 } from 'lucide-react';
// import AddCompany from './Company/addCompany';

// const Management = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [userExpiryDate, setUserExpiryDate] = useState(null);
//   const [userData, setUserData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newSector, setNewSector] = useState('');
//   const [sectorError, setSectorError] = useState('');

//   const [companyData] = useState([
//     { id: 1, company_name: 'Tech Solutions' },
//     { id: 2, company_name: 'Global Innovations' },
//     { id: 3, company_name: 'NextGen Enterprises' },
//     { id: 4, company_name: 'Smart Systems' },
//     { id: 5, company_name: 'Smart Systems' }
//   ]);

//   const [activeTab, setActiveTab] = useState('userManagement'); // State to manage active tab

//   const navigate = useNavigate();

//   // Load user data from localStorage on component mount
//   useEffect(() => {
//     const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
//     setUserData(storedUserData);
//   }, []);

//   // Handle form submission



  
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUser = {
       
//       name,
//       email,
//       password,
//       company_name: companyName,
//       user_role: userRole,
//       user_creted_by: 'Admin',
//       user_expiry_date: userExpiryDate ? userExpiryDate.toISOString().split('T')[0] : 'N/A',
//     };

//     const updatedUserData = [...userData, newUser];
//     // setUserData(updatedUserData);
//     // localStorage.setItem('userData', JSON.stringify(updatedUserData)); // Save to localStorage
//     handleReset();
//   };






//   // Reset form fields
//   const handleReset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setCompanyName('');
//     setUserRole('');
//     setUserExpiryDate(null);
//   };

//   // Handle adding a new sector
//   const handleAddSector = () => {
//     if (!newSector) {
//       setSectorError('Sector name is required');
//       return;
//     }
//     if (companyData.some((sector) => sector.company_name === newSector)) {
//       setSectorError('Sector already exists');
//       return;
//     }
//     companyData.push({ id: companyData.length + 1, company_name: newSector });
//     setNewSector('');
//     setShowModal(false);
//   };

//   // Render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'userManagement':
//         return (
//           <div className="p-6 bg-white rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold text-center mb-6">Company Management</h1>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete='off'>
//               {/* Name */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">Name:</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter name"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">Email:</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter email"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">Password:</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-md"
//                   placeholder="Enter password"
//                   required
//                 />
//               </div>

//               {/* Company Name */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">Company:</label>
//                 <select
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-md"
//                   required
//                 >
//                   <option value="">Please Select</option>
//                   {companyData.map((company) => (
//                     <option key={company.id} value={company.company_name}>
//                       {company.company_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* User Role */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">User Role:</label>
//                 <select
//                   value={userRole}
//                   onChange={(e) => setUserRole(e.target.value)}
//                   className="p-2 border border-gray-300 rounded-md"
//                   required
//                 >
//                   <option value="">Please Select</option>
//                   <option value="Super Admin">Super Admin</option>
//                   <option value="Admin">Admin</option>
//                   <option value="User">User</option>
//                 </select>
//               </div>

//               {/* Expiry Date */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold mb-1">Expiry Date:</label>
//                 <DatePicker
//                   selected={userExpiryDate}
//                   onChange={(date) => setUserExpiryDate(date)}
//                   className="p-2 border border-gray-300 rounded-md w-full"
//                   placeholderText="Select Expiry Date"
//                   dateFormat="dd/MM/yyyy"
//                   required
//                 />
//               </div>

//               {/* Form Buttons */}
//               <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//             <Usermanagetable userData={userData} />
//           </div>
//         );
//       case 'blog':
//         return <Blogfront />;
//       case 'graph':
//         return <Graphfront />;
       
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Buttons at the Top Center */}
//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab('userManagement')}
//           className={`px-6 py-2 rounded-t-lg transition-all ${
//             activeTab === 'userManagement'
//               ? 'bg-white text-blue-500 shadow-lg'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//         >
//           Company Management
//         </button>
         
//         <button
//           onClick={() => setActiveTab('blog')}
//           className={`px-6 py-2 rounded-t-lg transition-all ${
//             activeTab === 'blog'
//               ? 'bg-white text-green-500 shadow-lg'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//         >
//           Blog
//         </button>
//         <button
//           onClick={() => setActiveTab('graph')}
//           className={`px-6 py-2 rounded-t-lg transition-all ${
//             activeTab === 'graph'
//               ? 'bg-white text-purple-500 shadow-lg'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//         >
//           Graph
//         </button>
//       </div>

//       {/* Render Content Based on Active Tab */}
//       {renderContent()}

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

// export default Management;


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Management = () => {
//   // State Variables
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [userExpiryDate, setUserExpiryDate] = useState(null);

//   const [noCompany, setNoCompany] = useState(false);
//   const [companyData, setCompanyData] = useState([]);

//   // Handle Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, email, password, companyName, userRole, userExpiryDate });
//   };

//   // Handle Reset
//   const handleReset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setCompanyName('');
//     setUserRole('');
//     setUserExpiryDate(null);
//   };

//   return (
//     <div className='p-[0px] bg-gray-900'>
//       <div style={{ maxWidth: '100%', padding: '10px', margin: 'auto', backgroundColor: '', borderRadius: '10px' }}>
//         <div style={{ backgroundColor: '', padding: '50px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' }}>
//           <h1 className="text-[35px] font-semibold mb-6 text-center text-white">User Management</h1>

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 rounded-lg shadow-xl"
//           >
//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition placeholder-gray-400"
//                 placeholder="Enter name"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition placeholder-gray-400"
//                 placeholder="Enter email"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition placeholder-gray-400"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Company:</label>
//               <select
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition placeholder-gray-400"
//                 required
//               >
//                 <option value="">Please Select</option>
//                 {noCompany ? (
//                   <option value="" disabled>No Company Available</option>
//                 ) : (
//                   companyData.map((company, index) => (
//                     <option key={index} value={company?.company_name || ''}>
//                       {company?.company_name || 'Unknown Company'}
//                     </option>
//                   ))
//                 )}
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">User Role:</label>
//               <select
//                 value={userRole}
//                 onChange={(e) => setUserRole(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 transition placeholder-gray-400"
//                 required
//               >
//                 <option value="">Please Select</option>
//                 <option value="Super Admin">Super Admin</option>
//                 <option value="Admin">Admin</option>
//                 <option value="User">User</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="block text-white text-lg font-semibold mb-2">Expiry Date</label>
//               <DatePicker
//                 selected={userExpiryDate}
//                 onChange={(date) => setUserExpiryDate(date)}
//                 className="w-full bg-transparent text-white border border-gray-600 rounded-md h-12 px-4 placeholder-gray-400 text-base shadow-sm transition-all focus:outline-none focus:border-blue-500 focus:shadow-md"
//                 placeholderText="Select Expiry Date"
//                 dateFormat="dd/MM/yyyy"
//                 popperPlacement="bottom-start"
//                 showPopperArrow={false}
//               />
//             </div>

//             <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition focus:outline-none"
//               >
//                 Reset
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition focus:outline-none"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         user table
//       </div>
//     </div>
//   );
// };

// export default Management;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Usermanagetable from './usermanagetable';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// const Management = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [userExpiryDate, setUserExpiryDate] = useState(null);
//   const [userData, setUserData] = useState([
//     { _id: 1, name: 'John Doe', email: 'john@example.com', password: '123456', company_name: 'Tech Solutions', user_role: 'Admin', user_creted_by: 'Super Admin', user_expiry_date: '2025-12-31' },
//     { _id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'abcdef', company_name: 'Global Innovations', user_role: 'User', user_creted_by: 'Admin', user_expiry_date: '2024-09-15' },
//     { _id: 3, name: 'Mike Johnson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//     { _id: 4, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//     { _id: 5, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//   ]);

//   const [companyData] = useState([
//     { id: 1, company_name: 'Tech Solutions' },
//     { id: 2, company_name: 'Global Innovations' },
//     { id: 3, company_name: 'NextGen Enterprises' },
//     { id: 4, company_name: 'Smart Systems' },
//     { id: 5, company_name: 'Smart Systems' }
//   ]);

//   const navigate = useNavigate(); // Initialize useNavigate

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       _id: userData.length + 1,
//       name,
//       email,
//       password,
//       company_name: companyName,
//       user_role: userRole,
//       user_creted_by: 'Admin',
//       user_expiry_date: userExpiryDate ? userExpiryDate.toISOString().split('T')[0] : 'N/A',
//     };

//     setUserData((prevData) => [...prevData, newCompany]); // Update userData state
//     handleReset();
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setCompanyName('');
//     setUserRole('');
//     setUserExpiryDate(null);
//   };

//   // Handle "Add Blogs" button click
//   const handleAddBlogsClick = () => {
//     navigate('/blogfront'); // Navigate to the Add Blogs page
//   };

//   // Handle "Graph Manage" button click
//   const handleGraphManageClick = () => {
//     navigate('/graphfront'); // Add your logic here
//   };

//   return (
//     <div className='p-[0px] bg-gray-900 border-l sticky'
//       style={{
//         overflowY: 'auto',
//         height: '100vh',
//         width: '100%',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none'
//       }}>
//       <div style={{ maxWidth: '100%', padding: '10px', margin: 'auto', borderRadius: '10px' }}>
//         {/* Add Buttons at the Top Center */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0px', gap: '10px' }}>
//           <button
//             onClick={handleAddBlogsClick}
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
//           >
//             Add Blog
//           </button>
//           <button
//             onClick={handleGraphManageClick}
//             className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
//           >
//             Graph Manage
//           </button>
//         </div>

//         <div style={{ padding: '50px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' }}>
//           <h1 className="text-[35px] font-semibold mb-6 text-center text-white">User Management</h1>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 rounded-lg shadow-xl">
//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 placeholder="Enter name"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 placeholder="Enter email"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Password:</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Company:</label>
//               <select
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 required
//               >
//                 <option value="">Please Select</option>
//                 {companyData.map((company) => (
//                   <option key={company.id} value={company.company_name}>
//                     {company.company_name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">User Role:</label>
//               <select
//                 value={userRole}
//                 onChange={(e) => setUserRole(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 required
//               >
//                 <option value="">Please Select</option>
//                 <option value="Super Admin">Super Admin</option>
//                 <option value="Admin">Admin</option>
//                 <option value="User">User</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="text-white font-semibold mb-1">Expiry Date</label>
//               {/* <DatePicker
//                 selected={userExpiryDate}
//                 onChange={(date) => setUserExpiryDate(date)}
//                 className="w-full bg-transparent text-white border border-gray-600 rounded-md h-12 px-4"
//                 placeholderText="Select Expiry Date"
//                 dateFormat="dd/MM/yyyy"
//               /> */}
//               {/* <input
//                 type="date"
//                 value={userExpiryDate}
//                 onChange={(e) => setUserExpiryDate(e.target.value)}
//                 className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                 placeholder="Enter password"
//                 required
//               /> */}
//             </div>

//             <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//               <button type="button" onClick={handleReset} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md">
//                 Reset
//               </button>
//               <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         <Usermanagetable userData={userData} />
//       </div>
//     </div>
//   );
// };

// export default Management;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Usermanagetable from './usermanagetable';
// import Blogfront from '../Management/Blog/blogfront'; // Import Blogfront component
// // import graphfront from '../Overview/graphfront'; // Import graphfront component
// import { useNavigate } from 'react-router-dom';
// import Graphfront from '../Overview/graphfront';

// const Management = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [userRole, setUserRole] = useState('');
//   const [userExpiryDate, setUserExpiryDate] = useState(null);
//   const [userData, setUserData] = useState([
//     { _id: 1, name: 'John Doe', email: 'john@example.com', password: '123456', company_name: 'Tech Solutions', user_role: 'Admin', user_creted_by: 'Super Admin', user_expiry_date: '2025-12-31' },
//     { _id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'abcdef', company_name: 'Global Innovations', user_role: 'User', user_creted_by: 'Admin', user_expiry_date: '2024-09-15' },
//     { _id: 3, name: 'Mike Johnson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//     { _id: 4, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//     { _id: 5, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
//   ]);

//   const [companyData] = useState([
//     { id: 1, company_name: 'Tech Solutions' },
//     { id: 2, company_name: 'Global Innovations' },
//     { id: 3, company_name: 'NextGen Enterprises' },
//     { id: 4, company_name: 'Smart Systems' },
//     { id: 5, company_name: 'Smart Systems' }
//   ]);

//   const [activeTab, setActiveTab] = useState('userManagement'); // State to manage active tab

//   const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       _id: userData.length + 1,
//       name,
//       email,
//       password,
//       company_name: companyName,
//       user_role: userRole,
//       user_creted_by: 'Admin',
//       user_expiry_date: userExpiryDate ? userExpiryDate.toISOString().split('T')[0] : 'N/A',
//     };

//     setUserData((prevData) => [...prevData, newCompany]);
//     handleReset();
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setCompanyName('');
//     setUserRole('');
//     setUserExpiryDate(null);
//   };

//   // Render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'userManagement':
//         return (
//           <div style={{ padding: '50px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' }}>
//             <h1 className="text-[35px] font-semibold mb-6 text-center text-white">User Management</h1>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 rounded-lg shadow-xl">
//               {/* Form fields for User Management */}
//               <div className="flex flex-col">
//                 <label className="text-white font-semibold mb-1">Name:</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
//                   placeholder="Enter name"
//                   required
//                 />
//               </div>
//               {/* Add other form fields here */}
//               <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//                 <button type="button" onClick={handleReset} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md">
//                   Reset
//                 </button>
//                 <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md">
//                   Submit
//                 </button>
//               </div>
//             </form>
//             <Usermanagetable userData={userData} />
//           </div>
//         );
//       case 'blog':
//         return <Blogfront />;
//       case 'graph':
//         return <Graphfront />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className='p-[0px] bg-gray-900 border-l sticky'
//       style={{
//         overflowY: 'auto',
//         height: '100vh',
//         width: '100%',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none'
//       }}>
//       <div style={{ maxWidth: '100%', padding: '10px', margin: 'auto', borderRadius: '10px' }}>
//         {/* Buttons at the Top Center */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '10px' }}>
//           <button
//             onClick={() => setActiveTab('userManagement')}
//             className={`px-6 py-3 ${activeTab === 'userManagement' ? 'bg-blue-700' : 'bg-blue-600'} text-white font-semibold rounded-md hover:bg-blue-700`}
//           >
//             User Management
//           </button>
//           <button
//             onClick={() => setActiveTab('blog')}
//             className={`px-6 py-3 ${activeTab === 'blog' ? 'bg-green-700' : 'bg-green-600'} text-white font-semibold rounded-md hover:bg-green-700`}
//           >
//             Blog
//           </button>
//           <button
//             onClick={() => setActiveTab('graph')}
//             className={`px-6 py-3 ${activeTab === 'graph' ? 'bg-purple-700' : 'bg-purple-600'} text-white font-semibold rounded-md hover:bg-purple-700`}
//           >
//             Graph
//           </button>
//         </div>

//         {/* Render Content Based on Active Tab */}
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Management;
