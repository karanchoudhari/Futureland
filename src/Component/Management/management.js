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
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Usermanagetable from './usermanagetable';

const Management = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userExpiryDate, setUserExpiryDate] = useState(null);
  const [userData, setUserData] = useState([
    { _id: 1, name: 'John Doe', email: 'john@example.com', password: '123456', company_name: 'Tech Solutions', user_role: 'Admin', user_creted_by: 'Super Admin', user_expiry_date: '2025-12-31' },
    { _id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'abcdef', company_name: 'Global Innovations', user_role: 'User', user_creted_by: 'Admin', user_expiry_date: '2024-09-15' },
    { _id: 3, name: 'Mike Johnson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
    { _id: 4, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
    { _id: 5, name: 'Mike Tyson', email: 'mike@example.com', password: 'password', company_name: 'NextGen Enterprises', user_role: 'Super Admin', user_creted_by: 'System', user_expiry_date: '2026-06-10' },
  ]);

  const [companyData] = useState([
    { id: 1, company_name: 'Tech Solutions' },
    { id: 2, company_name: 'Global Innovations' },
    { id: 3, company_name: 'NextGen Enterprises' },
    { id: 4, company_name: 'Smart Systems' },
    { id: 5, company_name: 'Smart Systems' }
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      _id: userData.length + 1,
      name,
      email,
      password,
      company_name: companyName,
      user_role: userRole,
      user_creted_by: 'Admin',
      user_expiry_date: userExpiryDate ? userExpiryDate.toISOString().split('T')[0] : 'N/A',
    };

    setUserData((prevData) => [...prevData, newUser]); // Update userData state
    handleReset();
  };

  // Reset form fields
  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setCompanyName('');
    setUserRole('');
    setUserExpiryDate(null);
  };

  return (
    <div className='p-[0px] bg-gray-900 border-l sticky
'>
      <div style={{ maxWidth: '100%', padding: '10px', margin: 'auto', borderRadius: '10px' }}>
        <div style={{ padding: '50px', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)' }}>
          <h1 className="text-[35px] font-semibold mb-6 text-center text-white">User Management</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 rounded-lg shadow-xl">
            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
                placeholder="Enter name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">Company:</label>
              <select
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
                required
              >
                <option value="">Please Select</option>
                {companyData.map((company) => (
                  <option key={company.id} value={company.company_name}>
                    {company.company_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">User Role:</label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="p-3 bg-gray-950 border border-gray-600 rounded-md text-white"
                required
              >
                <option value="">Please Select</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white font-semibold mb-1">Expiry Date</label>
              <DatePicker
                selected={userExpiryDate}
                onChange={(date) => setUserExpiryDate(date)}
                className="w-full bg-transparent text-white border border-gray-600 rounded-md h-12 px-4"
                placeholderText="Select Expiry Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
              <button type="button" onClick={handleReset} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md">
                Reset
              </button>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>

        <Usermanagetable userData={userData} />
      </div>
    </div>
  );
};

export default Management;

