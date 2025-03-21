// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { X } from 'lucide-react';
// import CompanyManageTable from './CompanyManageTable';

// const CompanyManagementAdd = ({ companyData, setCompanyData }) => {
//   const [companyName, setCompanyName] = useState('');
//   const [companyEmail, setCompanyEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [newSector, setNewSector] = useState('');
//   const [sectorError, setSectorError] = useState('');

//   const [sectors] = useState([
//     { id: 1, company_name: 'Tech Solutions' },
//     { id: 2, company_name: 'Global Innovations' },
//     { id: 3, company_name: 'NextGen Enterprises' },
//     { id: 4, company_name: 'Smart Systems' },
//     { id: 5, company_name: 'Smart Systems' },
//   ]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       _id: companyData.length + 1,
//       companyName,
//       companyEmail,
//       password,
//       country,
//       state,
//       city,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData)); // Save to localStorage
//     handleReset();
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setPassword('');
//     setCountry('');
//     setState('');
//     setCity('');
//   };

//   // Handle adding a new sector
//   const handleAddSector = () => {
//     if (!newSector) {
//       setSectorError('Sector name is required');
//       return;
//     }
//     if (sectors.some((sector) => sector.company_name === newSector)) {
//       setSectorError('Sector already exists');
//       return;
//     }
//     sectors.push({ id: sectors.length + 1, company_name: newSector });
//     setNewSector('');
//     setShowModal(false);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">Company Management</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
//         {/* Company Name */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Name:</label>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company name"
//             required
//           />
//         </div>

//         {/* Company Email */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Email:</label>
//           <input
//             type="email"
//             value={companyEmail}
//             onChange={(e) => setCompanyEmail(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company email"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         {/* Country */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Country:</label>
//           <input
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter country"
//             required
//           />
//         </div>

//         {/* State */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">State:</label>
//           <input
//             type="text"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter state"
//             required
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">City:</label>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         {/* Form Buttons */}
//         <div className="col-span-1 md:col-span-2 flex justify-between mt-6">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

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

// export default CompanyManagementAdd;

// import React, { useState, useEffect } from 'react';
// import CompanyManageTable from './CompanyManageTable'; // Import the table component

// const CompanyManagementAdd = () => {
//   const [company_Name, setCompanyName] = useState('');
//   const [company_email, setCompanyEmail] = useState('');
//   const [company_expiry, setCompanyExpiryDate] = useState('');
//   const [password, setPassword] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [companyData, setCompanyData] = useState([]);

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       company_Name,
//       company_email,
//       company_expiry,
//       password,
//       country,
//       state,
//       city,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData)); // Save to localStorage
//     handleReset();
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setCompanyExpiryDate('');
//     setPassword('');
//     setCountry('');
//     setState('');
//     setCity('');
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">Company Management</h1>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off">
//         {/* Company Name */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Name:</label>
//           <input
//             type="text"
//             value={company_Name}
//             onChange={(e) => setCompanyName(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company name"
//             required
//           />
//         </div>

//         {/* Company Email */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Email:</label>
//           <input
//             type="email"
//             value={company_email}
//             onChange={(e) => setCompanyEmail(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company email"
//             required
//           />
//         </div>

//         {/* Company Expiry date  */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Company Expiry date:</label>
//           <input
//             type="date"
//             value={company_expiry}
//             onChange={(e) => setCompanyExpiryDate(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter company email"
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         {/* Country */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">Country:</label>
//           <input
//             type="text"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter country"
//             required
//           />
//         </div>

//         {/* State */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">State:</label>
//           <input
//             type="text"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter state"
//             required
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold mb-1">City:</label>
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         {/* Form Buttons */}
//         <div className="col-span-1 md:col-span-2 flex justify-between mt-3">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Render the CompanyManageTable component */}
//       <CompanyManageTable companyData={companyData} setCompanyData={setCompanyData} />
//     </div>
//   );
// };

// export default CompanyManagementAdd;

// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select'; // For multi-select dropdown
// import { Plus, Check } from 'lucide-react'; // Icons from lucide-react
// import CompanyManageTable from './CompanyManageTable';

// const CompanyManagementAdd = () => {
//   const [company_Name, setCompanyName] = useState('');
//   const [company_email, setCompanyEmail] = useState('');
//   const [company_expiry, setCompanyExpiryDate] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [temporarySelections, setTemporarySelections] = useState([]);
//   const [companyData, setCompanyData] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Get all countries
//   const countries = Country.getAllCountries();

//   // Get states based on selected country
//   const states = selectedCountry ? State.getStatesOfCountry(selectedCountry) : [];

//   // Get cities based on selected state
//   const cities = selectedState ? City.getCitiesOfState(selectedCountry, selectedState) : [];

//   // Format cities for react-select
//   const cityOptions = cities.map((city) => ({
//     value: city.name,
//     label: city.name,
//   }));

//   // Handle country selection
//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     setSelectedState('');
//     setSelectedCities([]);
//   };

//   // Handle state selection
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//     setSelectedCities([]);
//   };

//   // Handle city selection (multi-select)
//   const handleCityChange = (selectedOptions) => {
//     setSelectedCities(selectedOptions.map((option) => option.value));
//   };

//   // Add temporary selection
//   const handleAddSelection = () => {
//     if (selectedCountry && selectedState && selectedCities.length > 0) {
//       const newSelection = {
//         country: selectedCountry,
//         state: selectedState,
//         cities: selectedCities,
//       };
//       setTemporarySelections([...temporarySelections, newSelection]);
//       resetFields();
//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
//     }
//   };

//   // Reset fields after adding to temporary selections
//   const resetFields = () => {
//     setSelectedCountry('');
//     setSelectedState('');
//     setSelectedCities([]);
//   };

//   // Handle final submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCompany = {
//       company_Name,
//       company_email,
//       company_expiry,
//       password,
//       locations: temporarySelections,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//     handleReset();
//     alert('Data submitted successfully!');
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setCompanyExpiryDate('');
//     setPassword('');
//     setSelectedCountry('');
//     setSelectedState('');
//     setSelectedCities([]);
//     setTemporarySelections([]);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Company Management</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Company Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Company Name */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Name:</label>
//             <input
//               type="text"
//               value={company_Name}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company name"
//               required
//             />
//           </div>

//           {/* Company Email */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Email:</label>
//             <input
//               type="email"
//               value={company_email}
//               onChange={(e) => setCompanyEmail(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company email"
//               required
//             />
//           </div>

//           {/* Company Expiry Date */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date:</label>
//             <input
//               type="date"
//               value={company_expiry}
//               onChange={(e) => setCompanyExpiryDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//         </div>

//         {/* Location Selection */}
//         <div className="space-y-6">
//           {/* Country */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Country:</label>
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Country</option>
//               {countries.map((country) => (
//                 <option key={country.isoCode} value={country.isoCode}>
//                   {country.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* State */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">State:</label>
//             <select
//               value={selectedState}
//               onChange={handleStateChange}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state.isoCode} value={state.isoCode}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* City (Multi-Select Dropdown) */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">City:</label>
//             <Select
//               options={cityOptions}
//               isMulti
//               value={cityOptions.filter((option) => selectedCities.includes(option.value))}
//               onChange={handleCityChange}
//               className="react-select-container"
//               classNamePrefix="react-select"
//               placeholder="Select cities..."
//             />
//           </div>
//         </div>

//         {/* Add Button */}
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={handleAddSelection}
//             className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
//           >
//             <Plus className="mr-2" size={16} /> Add Selection
//           </button>
//         </div>

//         {/* Success Message */}
//         {showSuccess && (
//           <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
//             <Check className="mr-2" size={16} /> Selection added successfully!
//           </div>
//         )}

//         {/* Temporary Selections */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
//           {temporarySelections.map((selection, index) => (
//             <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm">
//               <p>
//                 <strong>Country:</strong> {Country.getCountryByCode(selection.country).name}
//               </p>
//               <p>
//                 <strong>State:</strong> {State.getStateByCodeAndCountry(selection.state, selection.country).name}
//               </p>
//               <p>
//                 <strong>Cities:</strong> {selection.cities.join(', ')}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Form Buttons */}
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Render the CompanyManageTable component */}
//       <CompanyManageTable companyData={companyData} setCompanyData={setCompanyData} />
//     </div>
//   );
// };

// export default CompanyManagementAdd;



// upside code is also good 
// import React, { useState, useEffect, useRef } from 'react';
// import { Country, State, City } from 'country-state-city';
// import { Plus, Check } from 'lucide-react'; // Icons from lucide-react
// import Select from 'react-select'; // Import Select from react-select
// import CompanyManageTable from './CompanyManageTable';

// const CompanyManagementAdd = () => {
//   const [company_Name, setCompanyName] = useState('');
//   const [company_email, setCompanyEmail] = useState('');
//   const [company_expiry, setCompanyExpiryDate] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [temporarySelections, setTemporarySelections] = useState([]);
//   const [companyData, setCompanyData] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const cityDropdownRef = useRef(null);

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Close city dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
//         setIsCityDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Get all countries
//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   // Get states based on selected country
//   const states = selectedCountry
//     ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
//         value: state.isoCode,
//         label: state.name,
//       }))
//     : [];

//   // Get cities based on selected state
//   const cities = selectedState
//     ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
//         value: city.name,
//         label: city.name,
//       }))
//     : [];

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle state selection
//   const handleStateChange = (selectedOption) => {
//     setSelectedState(selectedOption);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle city selection (add city to selectedCities)
//   const handleAddCity = (city) => {
//     if (!selectedCities.some((c) => c.value === city.value)) {
//       setSelectedCities([...selectedCities, city]);
//       setError('');
//     }
//   };

//   // Add temporary selection
//   const handleAddSelection = () => {
//     if (!selectedCountry || !selectedState || selectedCities.length === 0) {
//       setError('Please select a country, state, and at least one city.');
//       return;
//     }

//     const newSelection = {
//       country: selectedCountry,
//       state: selectedState,
//       cities: selectedCities,
//     };
//     setTemporarySelections([...temporarySelections, newSelection]);
//     resetFields();
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
//   };

//   // Reset fields after adding to temporary selections
//   const resetFields = () => {
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle final submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (temporarySelections.length === 0) {
//       setError('Please add at least one location before submitting.');
//       return;
//     }

//     const newCompany = {
//       company_Name,
//       company_email,
//       company_expiry,
//       password,
//       locations: temporarySelections,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//     handleReset();
//     alert('Data submitted successfully!');
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setCompanyExpiryDate('');
//     setPassword('');
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setTemporarySelections([]);
//     setError('');
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto overflow-y-auto max-h-screen">
//       <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Company Management</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Company Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Company Name */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Name</label>
//             <input
//               type="text"
//               value={company_Name}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company name"
//               required
//             />
//           </div>

//           {/* Company Email */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Email</label>
//             <input
//               type="email"
//               value={company_email}
//               onChange={(e) => setCompanyEmail(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company email"
//               required
//             />
//           </div>

//           {/* Company Expiry Date */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date</label>
//             <input
//               type="date"
//               value={company_expiry}
//               onChange={(e) => setCompanyExpiryDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//         </div>

//         {/* Location Selection */}
//         <div className="space-y-6">
//           {/* Country */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>

//           {/* State */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//             <Select
//               options={states}
//               value={selectedState}
//               onChange={handleStateChange}
//               placeholder="Select state..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isDisabled={!selectedCountry}
//               isClearable
//             />
//           </div>

//           {/* City Dropdown */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//             <div className="relative" ref={cityDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedCities.map((city) => city.label).join(', ')}
//                 readOnly
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder="Select cities..."
//               />
//               {isCityDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {cities.map((city) => (
//                     <div
//                       key={city.value}
//                       className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                       onClick={() => handleAddCity(city)}
//                     >
//                       <span>{city.label}</span>
//                       <Plus className="text-blue-500" size={16} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Add Button */}
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={handleAddSelection}
//             className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
//           >
//             <Plus className="mr-2" size={16} /> Add Selection
//           </button>
//         </div>

//         {/* Success and Error Messages */}
//         {showSuccess && (
//           <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
//             <Check className="mr-2" size={16} /> Selection added successfully!
//           </div>
//         )}
//         {error && (
//           <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//             {error}
//           </div>
//         )}

//         {/* Temporary Selections */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
//           {temporarySelections.length === 0 ? (
//             <p className="text-gray-500">No selections added yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {temporarySelections.map((selection, index) => (
//                 <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
//                   <p className="font-semibold text-gray-800">
//                     {selection.country.label}, {selection.state.label}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <strong>Cities:</strong> {selection.cities.map((city) => city.label).join(', ')}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Form Buttons */}
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>

//       {/* Render the CompanyManageTable component */}
//       <CompanyManageTable companyData={companyData} setCompanyData={setCompanyData} />
//     </div>
//   );
// };

// export default CompanyManagementAdd;



// import React, { useState, useEffect, useRef } from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select'; // Import Select from react-select
// import { Plus, Check } from 'lucide-react'; // Icons from lucide-react

// const CompanyManagementAdd = () => {
//   const [company_Name, setCompanyName] = useState('');
//   const [company_email, setCompanyEmail] = useState('');
//   const [company_expiry, setCompanyExpiryDate] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [temporarySelections, setTemporarySelections] = useState([]);
//   const [companyData, setCompanyData] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const cityDropdownRef = useRef(null);

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Close city dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
//         setIsCityDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Get all countries
//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   // Get states based on selected country
//   const states = selectedCountry
//     ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
//         value: state.isoCode,
//         label: state.name,
//       }))
//     : [];

//   // Get cities based on selected state
//   const cities = selectedState
//     ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
//         value: city.name,
//         label: city.name,
//       }))
//     : [];

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle state selection
//   const handleStateChange = (selectedOption) => {
//     setSelectedState(selectedOption);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle city selection (add city to selectedCities)
//   const handleAddCity = (city) => {
//     if (!selectedCities.some((c) => c.value === city.value)) {
//       setSelectedCities([...selectedCities, city]);
//       setError('');
//     }
//   };

//   // Add temporary selection
//   const handleAddSelection = () => {
//     if (!selectedCountry || !selectedState || selectedCities.length === 0) {
//       setError('Please select a country, state, and at least one city.');
//       return;
//     }

//     const newSelection = {
//       country: selectedCountry,
//       state: selectedState,
//       cities: selectedCities,
//     };
//     setTemporarySelections([...temporarySelections, newSelection]);
//     resetFields();
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
//   };

//   // Reset fields after adding to temporary selections
//   const resetFields = () => {
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle final submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (temporarySelections.length === 0) {
//       setError('Please add at least one location before submitting.');
//       return;
//     }

//     const newCompany = {
//       company_Name,
//       company_email,
//       company_expiry,
//       password,
//       locations: temporarySelections,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//     handleReset();
//     alert('Data submitted successfully!');
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setCompanyExpiryDate('');
//     setPassword('');
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setTemporarySelections([]);
//     setError('');
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Add Company</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Company Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Company Name */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Name</label>
//             <input
//               type="text"
//               value={company_Name}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company name"
//               required
//             />
//           </div>

//           {/* Company Email */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Email</label>
//             <input
//               type="email"
//               value={company_email}
//               onChange={(e) => setCompanyEmail(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company email"
//               required
//             />
//           </div>

//           {/* Company Expiry Date */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date</label>
//             <input
//               type="date"
//               value={company_expiry}
//               onChange={(e) => setCompanyExpiryDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//         </div>

//         {/* Location Selection */}
//         <div className="space-y-6">
//           {/* Country */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>

//           {/* State */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//             <Select
//               options={states}
//               value={selectedState}
//               onChange={handleStateChange}
//               placeholder="Select state..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isDisabled={!selectedCountry}
//               isClearable
//             />
//           </div>

//           {/* City Dropdown */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//             <div className="relative" ref={cityDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedCities.map((city) => city.label).join(', ')}
//                 readOnly
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder="Select cities..."
//               />
//               {isCityDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {cities.map((city) => (
//                     <div
//                       key={city.value}
//                       className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                       onClick={() => handleAddCity(city)}
//                     >
//                       <span>{city.label}</span>
//                       <Plus className="text-blue-500" size={16} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Add Button */}
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={handleAddSelection}
//             className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
//           >
//             <Plus className="mr-2" size={16} /> Add Selection
//           </button>
//         </div>

//         {/* Success and Error Messages */}
//         {showSuccess && (
//           <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
//             <Check className="mr-2" size={16} /> Selection added successfully!
//           </div>
//         )}
//         {error && (
//           <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//             {error}
//           </div>
//         )}

//         {/* Temporary Selections */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
//           {temporarySelections.length === 0 ? (
//             <p className="text-gray-500">No selections added yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {temporarySelections.map((selection, index) => (
//                 <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
//                   <p className="font-semibold text-gray-800">
//                     {selection.country.label}, {selection.state.label}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <strong>Cities:</strong> {selection.cities.map((city) => city.label).join(', ')}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Form Buttons */}
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CompanyManagementAdd;




// import React, { useState, useEffect, useRef } from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select'; // Import Select from react-select
// import { Plus, Check } from 'lucide-react'; // Icons from lucide-react

// const CompanyManagementAdd = ({ onClose }) => {
//   const [company_Name, setCompanyName] = useState('');
//   const [company_email, setCompanyEmail] = useState('');
//   const [company_expiry, setCompanyExpiryDate] = useState('');
//   const [password, setPassword] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [temporarySelections, setTemporarySelections] = useState([]);
//   const [companyData, setCompanyData] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
//   const cityDropdownRef = useRef(null);

//   // Load company data from localStorage on component mount
//   useEffect(() => {
//     const storedCompanyData = JSON.parse(localStorage.getItem('companyData')) || [];
//     setCompanyData(storedCompanyData);
//   }, []);

//   // Close city dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
//         setIsCityDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Get all countries
//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   // Get states based on selected country
//   const states = selectedCountry
//     ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
//         value: state.isoCode,
//         label: state.name,
//       }))
//     : [];

//   // Get cities based on selected state
//   const cities = selectedState
//     ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
//         value: city.name,
//         label: city.name,
//       }))
//     : [];

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle state selection
//   const handleStateChange = (selectedOption) => {
//     setSelectedState(selectedOption);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle city selection (add city to selectedCities)
//   const handleAddCity = (city) => {
//     if (!selectedCities.some((c) => c.value === city.value)) {
//       setSelectedCities([...selectedCities, city]);
//       setError('');
//     }
//   };

//   // Add temporary selection
//   const handleAddSelection = () => {
//     if (!selectedCountry || !selectedState || selectedCities.length === 0) {
//       setError('Please select a country, state, and at least one city.');
//       return;
//     }

//     const newSelection = {
//       country: selectedCountry,
//       state: selectedState,
//       cities: selectedCities,
//     };
//     setTemporarySelections([...temporarySelections, newSelection]);
//     resetFields();
//     setShowSuccess(true);
//     setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
//   };

//   // Reset fields after adding to temporary selections
//   const resetFields = () => {
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle final submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (temporarySelections.length === 0) {
//       setError('Please add at least one location before submitting.');
//       return;
//     }

//     const newCompany = {
//       company_Name,
//       company_email,
//       company_expiry,
//       password,
//       locations: temporarySelections,
//     };

//     const updatedCompanyData = [...companyData, newCompany];
//     setCompanyData(updatedCompanyData);
//     localStorage.setItem('companyData', JSON.stringify(updatedCompanyData));
//     handleReset();
//     alert('Data submitted successfully!');
//     onClose(); // Close the modal after submission
//   };

//   // Reset form fields
//   const handleReset = () => {
//     setCompanyName('');
//     setCompanyEmail('');
//     setCompanyExpiryDate('');
//     setPassword('');
//     setSelectedCountry(null);
//     setSelectedState(null);
//     setSelectedCities([]);
//     setTemporarySelections([]);
//     setError('');
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Add Company</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Company Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Company Name */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Name</label>
//             <input
//               type="text"
//               value={company_Name}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company name"
//               required
//             />
//           </div>

//           {/* Company Email */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Email</label>
//             <input
//               type="email"
//               value={company_email}
//               onChange={(e) => setCompanyEmail(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter company email"
//               required
//             />
//           </div>

//           {/* Company Expiry Date */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date</label>
//             <input
//               type="date"
//               value={company_expiry}
//               onChange={(e) => setCompanyExpiryDate(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//               required
//             />
//           </div>
//         </div>

//         {/* Location Selection */}
//         <div className="space-y-6">
//           {/* Country */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>

//           {/* State */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//             <Select
//               options={states}
//               value={selectedState}
//               onChange={handleStateChange}
//               placeholder="Select state..."
//               className="react-select-container"
//               classNamePrefix="react-select"
//               isDisabled={!selectedCountry}
//               isClearable
//             />
//           </div>

//           {/* City Dropdown */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//             <div className="relative" ref={cityDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedCities.map((city) => city.label).join(', ')}
//                 readOnly
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder="Select cities..."
//               />
//               {isCityDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {cities.map((city) => (
//                     <div
//                       key={city.value}
//                       className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                       onClick={() => handleAddCity(city)}
//                     >
//                       <span>{city.label}</span>
//                       <Plus className="text-blue-500" size={16} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Add Button */}
//         <div className="flex justify-end">
//           <button
//             type="button"
//             onClick={handleAddSelection}
//             className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
//           >
//             <Plus className="mr-2" size={16} /> Add Selection
//           </button>
//         </div>

//         {/* Success and Error Messages */}
//         {showSuccess && (
//           <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
//             <Check className="mr-2" size={16} /> Selection added successfully!
//           </div>
//         )}
//         {error && (
//           <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//             {error}
//           </div>
//         )}

//         {/* Temporary Selections */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
//           {temporarySelections.length === 0 ? (
//             <p className="text-gray-500">No selections added yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {temporarySelections.map((selection, index) => (
//                 <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
//                   <p className="font-semibold text-gray-800">
//                     {selection.country.label}, {selection.state.label}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <strong>Cities:</strong> {selection.cities.map((city) => city.label).join(', ')}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Form Buttons */}
//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={handleReset}
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CompanyManagementAdd;


import React, { useState, useEffect, useRef } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select'; // Import Select from react-select
import { Plus, Check } from 'lucide-react'; // Icons from lucide-react
import { useDispatch } from 'react-redux';
import {addCompany}  from '../../FeatureRedux/CompanyReducer/addCompany'

const CompanyManagementAdd = ({ onClose, addCompanyData }) => {
  const [form, setForm] = useState({
    company_name: '',
    company_email: '',
    company_expiry: '',
    password: '',
    permission_location: [{ country: '', state: '', city: '' }],
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [temporarySelections, setTemporarySelections] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef(null);


  const dispatch = useDispatch()

  // Close city dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get all countries
  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  // Get states based on selected country
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }))
    : [];

  // Get cities based on selected state
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
      value: city.name,
      label: city.name,
    }))
    : [];

  // Handle country selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCities([]);
    setError('');
  };

  // Handle state selection
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCities([]);
    setError('');
  };

  // Handle city selection (add city to selectedCities)
  const handleAddCity = (city) => {
    if (!selectedCities.some((c) => c.value === city.value)) {
      setSelectedCities([...selectedCities, city]);
      setError('');
    }
  };

  // Add temporary selection
  const handleAddSelection = () => {
    if (!selectedCountry || !selectedState || selectedCities.length === 0) {
      setError('Please select a country, state, and at least one city.');
      return;
    }

    // const newSelection = {
    //   country: selectedCountry.label,
    //   state: selectedState.label,
    //   city: selectedCities.map((city) => city.label).join(', '),
    // };

    const newSelection = {
      country: selectedCountry.label,
      state: selectedState.label,
      cities: selectedCities.map((city) => city.label), // Ensure this remains an array
    };



    setForm((prevForm) => ({
      ...prevForm,
      permission_location: [...prevForm.permission_location, newSelection],
    }));

    setTemporarySelections([...temporarySelections, newSelection]);
    resetFields();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
  };

  // Reset fields after adding to temporary selections
  const resetFields = () => {
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCities([]);
    setError('');
  };

  // Handle final submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (temporarySelections.length === 0) {
      setError('Please add at least one location before submitting.');
      return;
    }

    const newCompany = {
      id: Date.now(), // Generate a unique ID
      ...form,
    };
    

    console.log(JSON.stringify(newCompany, null, 2));

    dispatch(addCompany(newCompany))


    // addCompanyData(newCompany); // Add new company data
    // handleReset();
    // onClose(); // Close the modal after submission
  };

  // Reset form fields
  const handleReset = () => {
    setForm({
      company_name: '',
      company_email: '',
      company_expiry: '',
      password: '',
      permission_location: [{ country: '', state: '', city: '' }],
    });
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCities([]);
    setTemporarySelections([]);
    setError('');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Add Company</h1>
      <form onSubmit={handleSubmit} className="space-y-6" autoComplete='off'>
        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Name</label>
            <input
              type="text"
              value={form.company_name}
              onChange={(e) => setForm({ ...form, company_name: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"

            />
          </div>

          {/* Company Email */}
          <div className="flex flex-col ">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Email</label>
            <input
              type="email"
              value={form.company_email}
              onChange={(e) => setForm({ ...form, company_email: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company email"

            />
          </div>

          {/* Company Expiry Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date</label>
            <input
              type="date"
              value={form.company_expiry}
              onChange={(e) => setForm({ ...form, company_expiry: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"

            />
          </div>
        </div>

        {/* Location Selection */}
        <div className="space-y-6">
          {/* Country, State, City in Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Country */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
              <div className="flex items-center gap-2">
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select country..."
                  className="react-select-container flex-1"
                  classNamePrefix="react-select"
                  isClearable
                />
                {/* <button 
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddSelection}
        >
          <Plus size={16} />
        </button> */}
              </div>
            </div>

            {/* State */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
              <div className="flex items-center gap-2">
                <Select
                  options={states}
                  value={selectedState}
                  onChange={handleStateChange}
                  placeholder="Select state..."
                  className="react-select-container flex-1"
                  classNamePrefix="react-select"
                  isDisabled={!selectedCountry}
                  isClearable
                />
                {/* <button 
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleAddSelection}
        >
          <Plus size={16} />
        </button> */}
              </div>
            </div>

            {/* City */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1" ref={cityDropdownRef}>
                  <input
                    type="text"
                    value={selectedCities.map((city) => city.label).join(', ')}
                    readOnly
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
                    placeholder="Select cities..."
                  />
                  {isCityDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.value}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                          onClick={() => handleAddCity(city)}
                        >
                          <span>{city.label}</span>
                          {/* <Plus className="text-blue-500" size={16} /> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddSelection}
                  className=" bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-1"
                >
                  <Plus className="mr" size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Add Button */}
          {/* <div className="flex justify-end">
    <button
      type="button"
      onClick={handleAddSelection}
      className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
    >
      <Plus className="mr-2" size={16} /> Add Selection
    </button>
  </div> */}
        </div>

        {/* Success and Error Messages */}
        {showSuccess && (
          <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
            <Check className="mr-2" size={16} /> Selection added successfully!
          </div>
        )}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
            {error}
          </div>
        )}

        {/* Temporary Selections */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
          {temporarySelections.length === 0 ? (
            <p className="text-gray-500">No selections added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* {temporarySelections.map((selection, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
                  <p className="font-semibold text-gray-800">
                    {selection.country.label}, {selection.state.label}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cities:</strong> {selection.cities.map((city) => city.label).join(', ')}
                  </p>
                </div>
              ))} */}
              {temporarySelections.map((selection, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200">
                  <p className="font-semibold text-gray-800">
                    {selection.country}, {selection.state}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cities:</strong>
                    {Array.isArray(selection.cities)
                      ? selection.cities.map((city) => city.label).join(', ')
                      : 'N/A'}
                  </p>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Form Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyManagementAdd;