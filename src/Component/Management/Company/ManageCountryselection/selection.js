// import React, { useState } from 'react';
// import { Country, State, City } from 'country-state-city';
// import {  X } from 'lucide-react';
// import Select from 'react-select';

// const Selection = ({
//   selectedCountry,
//   setSelectedCountry,
//   selectedState,
//   setSelectedState,
//   selectedCities,
//   setSelectedCities,
//   isCityDropdownOpen,
//   setIsCityDropdownOpen,
//   cityDropdownRef,
//   handleAddCity,
//   handleRemoveCity,
// }) => {
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
//     ? City.getCitiesOfState(selectedCountry?.value, selectedState?.value).map((city) => ({
//         value: city.name,
//         label: city.name,
//       }))
//     : [];

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedState(null);
//     setSelectedCities([]);
//   };

//   // Handle state selection
//   const handleStateChange = (selectedOption) => {
//     setSelectedState(selectedOption);
//     setSelectedCities([]);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* Country */}
//       <div className="flex flex-col relative">
//         <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//         <div className="flex items-center gap-2">
//           <Select
//             options={countries}
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             placeholder="Select country..."
//             className="react-select-container flex-1"
//             classNamePrefix="react-select"
//             isClearable
//           />
//         </div>
//       </div>

//       {/* State */}
//       <div className="flex flex-col relative">
//         <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//         <div className="flex items-center gap-2">
//           <Select
//             options={states}
//             value={selectedState}
//             onChange={handleStateChange}
//             placeholder="Select state..."
//             className="react-select-container flex-1"
//             classNamePrefix="react-select"
//             isDisabled={!selectedCountry}
//             isClearable
//           />
//         </div>
//       </div>

//       {/* City */}
//       <div className="flex flex-col relative">
//         <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//         <div className="flex items-center gap-2">
//           <div className="relative flex-1" ref={cityDropdownRef}>
//             <input
//               type="text"
//               value={selectedCities.map((city) => city.label).join(', ')}
//               readOnly
//               onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//               className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//               placeholder="Select cities..."
//             />
//             {isCityDropdownOpen && (
//               <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                 {cities.map((city) => (
//                   <div
//                     key={city.value}
//                     className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                     onClick={() => handleAddCity(city)}
//                   >
//                     <span>{city.label}</span>
//                     {selectedCities.some((c) => c.value === city.value) && (
//                       <X
//                         className="text-red-500 hover:text-red-700"
//                         size={16}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleRemoveCity(city);
//                         }}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Selection;

// import React from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select';
// import { Plus, X } from 'lucide-react';

// const Selection = ({
//   selectedCountry,
//   setSelectedCountry,
//   selectedState,
//   setSelectedState,
//   selectedCities,
//   setSelectedCities,
//   isCityDropdownOpen,
//   setIsCityDropdownOpen,
//   cityDropdownRef,
//   handleAddSelection,
//   error,
//   setError,
//   editingIndex,
// }) => {
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
//     ? City.getCitiesOfState(selectedCountry?.value, selectedState?.value).map((city) => ({
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

//   // Handle city removal
//   const handleRemoveCity = (city) => {
//     setSelectedCities(selectedCities.filter((c) => c.value !== city.value));
//   };

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Country */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//           <div className="flex items-center gap-2">
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container flex-1"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>
//         </div>

//         {/* State */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//           <div className="flex items-center gap-2">
//             <Select
//               options={states}
//               value={selectedState}
//               onChange={handleStateChange}
//               placeholder="Select state..."
//               className="react-select-container flex-1"
//               classNamePrefix="react-select"
//               isDisabled={!selectedCountry}
//               isClearable
//             />
//           </div>
//         </div>

//         {/* City */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//           <div className="flex items-center gap-2">
//             <div className="relative flex-1" ref={cityDropdownRef}>
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
//                       {selectedCities.some((c) => c.value === city.value) && (
//                         <X
//                           className="text-red-500 hover:text-red-700"
//                           size={16}
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveCity(city);
//                           }}
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button
//               type="button"
//               onClick={handleAddSelection}
//               className="bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-2"
//             >
//               <Plus size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {error && (
//         <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Selection;



// import React from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select';
// import { Plus, X } from 'lucide-react';

// const Selection = ({
//   selectedCountry,
//   setSelectedCountry,
//   selectedStates,
//   setSelectedStates,
//   selectedCities,
//   setSelectedCities,
//   isCityDropdownOpen,
//   setIsCityDropdownOpen,
//   cityDropdownRef,
//   handleAddSelection,
//   error,
//   setError,
//   editingIndex,
// }) => {
//   // Get all countries
//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   // Get states based on selected country
//   const stateOptions = selectedCountry
//     ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
//         value: state.isoCode,
//         label: state.name,
//       }))
//     : [];

//   // Get all cities for selected states
//   const getAllCities = () => {
//     if (!selectedCountry || selectedStates.length === 0) return [];

//     let allCities = [];
//     selectedStates.forEach(state => {
//       const cities = City.getCitiesOfState(selectedCountry.value, state.value) || [];
//       allCities = [...allCities, ...cities.map(city => ({
//         value: city.name,
//         label: city.name,
//         state: state.label
//       }))];
//     });
//     return allCities;
//   };

//   const cityOptions = getAllCities();

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedStates([]);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Handle state selection - now supports multiple states
//   const handleStateChange = (selectedOptions) => {
//     setSelectedStates(selectedOptions || []);
//     // Automatically select all cities for selected states
//     const newCities = getAllCities();
//     setSelectedCities(newCities);
//     setError('');
//   };

//   // Handle city selection (add/remove city)
//   const handleCityToggle = (city) => {
//     if (selectedCities.some(c => c.value === city.value)) {
//       setSelectedCities(selectedCities.filter(c => c.value !== city.value));
//     } else {
//       setSelectedCities([...selectedCities, city]);
//     }
//   };

//   // Check if a city is selected
//   const isCitySelected = (city) => {
//     return selectedCities.some(c => c.value === city.value);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Country */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//           <div className="flex items-center gap-2">
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container flex-1"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>
//         </div>

//         {/* State - now multi-select */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//           <div className="flex items-center gap-2">
//             <Select
//               options={stateOptions}
//               value={selectedStates}
//               onChange={handleStateChange}
//               placeholder="Select states..."
//               className="react-select-container flex-1"
//               classNamePrefix="react-select"
//               isDisabled={!selectedCountry}
//               isMulti
//               isClearable
//             />
//           </div>
//         </div>

//         {/* City */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//           <div className="flex items-center gap-2">
//             <div className="relative flex-1" ref={cityDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedCities.length > 0 
//                   ? `${selectedCities.slice(0, 4).map(c => c.label).join(', ')}${selectedCities.length > 4 ? '...' : ''}` 
//                   : ''}
//                 readOnly
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder={selectedStates.length > 0 ? "All cities selected" : "Select states first"}
//               />
//               {isCityDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {cityOptions.length > 0 ? (
//                     cityOptions.map((city) => (
//                       <div
//                         key={`${city.value}-${city.state}`}
//                         className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                         onClick={() => handleCityToggle(city)}
//                       >
//                         <span>{city.label} ({city.state})</span>
//                         {isCitySelected(city) ? (
//                           <X
//                             className="text-red-500 hover:text-red-700"
//                             size={16}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleCityToggle(city);
//                             }}
//                           />
//                         ) : (
//                           <Plus className="text-green-500" size={16} />
//                         )}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-2 text-gray-500">
//                       {selectedStates.length === 0 ? "Select states first" : "No cities found"}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//             <button
//               type="button"
//               onClick={handleAddSelection}
//               className="bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-2"
//               disabled={selectedCities.length === 0}
//             >
//               <Plus size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {error && (
//         <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Selection;


// import React, { useState,useRef,useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';
// import Select from 'react-select';
// import { Plus, X } from 'lucide-react';

// const Selection = ({
//   selectedCountry,
//   setSelectedCountry,
//   selectedStates,
//   setSelectedStates,
//   selectedCities,
//   setSelectedCities,
//   isCityDropdownOpen,
//   setIsCityDropdownOpen,
//   cityDropdownRef,
//   handleAddSelection,
//   error,
//   setError,
//   editingIndex,
// }) => {
//   const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
//   const stateDropdownRef = useRef(null);

//   // Get all countries
//   const countries = Country.getAllCountries().map((country) => ({
//     value: country.isoCode,
//     label: country.name,
//   }));

//   // Get states based on selected country
//   const stateOptions = selectedCountry
//     ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
//         value: state.isoCode,
//         label: state.name,
//       }))
//     : [];

//   // Get all cities for selected states
//   const getAllCities = () => {
//     if (!selectedCountry || selectedStates.length === 0) return [];

//     let allCities = [];
//     selectedStates.forEach(state => {
//       const cities = City.getCitiesOfState(selectedCountry.value, state.value) || [];
//       allCities = [...allCities, ...cities.map(city => ({
//         value: city.name,
//         label: city.name,
//         state: state.label
//       }))];
//     });
//     return allCities;
//   };

//   const cityOptions = getAllCities();

//   // Handle country selection
//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedStates([]);
//     setSelectedCities([]);
//     setError('');
//   };

//   // Toggle state selection
//   const handleStateToggle = (state) => {
//     if (selectedStates.some(s => s.value === state.value)) {
//       setSelectedStates(selectedStates.filter(s => s.value !== state.value));
//       // Remove cities from the removed state
//       setSelectedCities(selectedCities.filter(city => {
//         const cityState = stateOptions.find(s => s.label === city.state);
//         return cityState?.value !== state.value;
//       }));
//     } else {
//       setSelectedStates([...selectedStates, state]);
//       // Add all cities from the new state
//       const newCities = City.getCitiesOfState(selectedCountry.value, state.value) || [];
//       const citiesToAdd = newCities.map(city => ({
//         value: city.name,
//         label: city.name,
//         state: state.label
//       }));
//       setSelectedCities([...selectedCities, ...citiesToAdd]);
//     }
//   };

//   // Toggle city selection
//   const handleCityToggle = (city) => {
//     if (selectedCities.some(c => c.value === city.value)) {
//       setSelectedCities(selectedCities.filter(c => c.value !== city.value));
//     } else {
//       setSelectedCities([...selectedCities, city]);
//     }
//   };

//   // Check if a state is selected
//   const isStateSelected = (state) => {
//     return selectedStates.some(s => s.value === state.value);
//   };

//   // Check if a city is selected
//   const isCitySelected = (city) => {
//     return selectedCities.some(c => c.value === city.value);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
//         setIsStateDropdownOpen(false);
//       }
//       if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
//         setIsCityDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Country */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
//           <div className="flex items-center gap-2">
//             <Select
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select country..."
//               className="react-select-container flex-1"
//               classNamePrefix="react-select"
//               isClearable
//             />
//           </div>
//         </div>

//         {/* State - Custom Multi-Select */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
//           <div className="flex items-center gap-2">
//             <div className="relative flex-1" ref={stateDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedStates.map(s => s.label).join(', ')}
//                 readOnly
//                 onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder="Select states..."
//               />
//               {isStateDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {stateOptions.length > 0 ? (
//                     stateOptions.map((state) => (
//                       <div
//                         key={state.value}
//                         className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                         onClick={() => handleStateToggle(state)}
//                       >
//                         <span>{state.label}</span>
//                         {isStateSelected(state) ? (
//                           <X
//                             className="text-red-500 hover:text-red-700"
//                             size={16}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleStateToggle(state);
//                             }}
//                           />
//                         ) : (
//                           <Plus className="text-green-500" size={16} />
//                         )}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-2 text-gray-500">
//                       {!selectedCountry ? "Select country first" : "No states found"}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* City */}
//         <div className="flex flex-col relative">
//           <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
//           <div className="flex items-center gap-2">
//             <div className="relative flex-1" ref={cityDropdownRef}>
//               <input
//                 type="text"
//                 value={selectedCities.length > 0 
//                   ? `${selectedCities.slice(0, 4).map(c => c.label).join(', ')}${selectedCities.length > 4 ? '...' : ''}` 
//                   : ''}
//                 readOnly
//                 onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
//                 placeholder={selectedStates.length > 0 ? "All cities selected" : "Select states first"}
//               />
//               {isCityDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                   {cityOptions.length > 0 ? (
//                     cityOptions.map((city) => (
//                       <div
//                         key={`${city.value}-${city.state}`}
//                         className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
//                         onClick={() => handleCityToggle(city)}
//                       >
//                         <span>{city.label} ({city.state})</span>
//                         {isCitySelected(city) ? (
//                           <X
//                             className="text-red-500 hover:text-red-700"
//                             size={16}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleCityToggle(city);
//                             }}
//                           />
//                         ) : (
//                           <Plus className="text-green-500" size={16} />
//                         )}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-2 text-gray-500">
//                       {selectedStates.length === 0 ? "Select states first" : "No cities found"}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//             <button
//               type="button"
//               onClick={handleAddSelection}
//               className="bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-2"
//               disabled={selectedCities.length === 0}
//             >
//               <Plus size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {error && (
//         <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Selection;






// new code start here 
import React, { useState, useRef, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';
import { Plus, X } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selection = ({
  selectedCountry,
  setSelectedCountry,
  selectedStates,
  setSelectedStates,
  selectedCities,
  setSelectedCities,
  isCityDropdownOpen,
  setIsCityDropdownOpen,
  cityDropdownRef,
  handleAddSelection,
  editingIndex,
}) => {
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const stateDropdownRef = useRef(null);

  // Get all countries
  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  // Get states based on selected country
  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  // Get all cities for selected states
  const getAllCities = () => {
    if (!selectedCountry || selectedStates.length === 0) return [];
    
    let allCities = [];
    selectedStates.forEach(state => {
      const cities = City.getCitiesOfState(selectedCountry.value, state.value) || [];
      allCities = [...allCities, ...cities.map(city => ({
        value: city.name,
        label: city.name,
        state: state.label
      }))];
    });
    return allCities;
  };

  const cityOptions = getAllCities();

  // Handle country selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedStates([]);
    setSelectedCities([]);
  };

  // Toggle state selection
  const handleStateToggle = (state) => {
    if (selectedStates.some(s => s.value === state.value)) {
      setSelectedStates(selectedStates.filter(s => s.value !== state.value));
      // Remove cities from the removed state
      setSelectedCities(selectedCities.filter(city => {
        const cityState = stateOptions.find(s => s.label === city.state);
        return cityState?.value !== state.value;
      }));
    } else {
      setSelectedStates([...selectedStates, state]);
      // Add all cities from the new state
      const newCities = City.getCitiesOfState(selectedCountry.value, state.value) || [];
      const citiesToAdd = newCities.map(city => ({
        value: city.name,
        label: city.name,
        state: state.label
      }));
      setSelectedCities([...selectedCities, ...citiesToAdd]);
    }
  };

  // Toggle city selection
  const handleCityToggle = (city) => {
    if (selectedCities.some(c => c.value === city.value)) {
      setSelectedCities(selectedCities.filter(c => c.value !== city.value));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  // Check if a state is selected
  const isStateSelected = (state) => {
    return selectedStates.some(s => s.value === state.value);
  };

  // Check if a city is selected
  const isCitySelected = (city) => {
    return selectedCities.some(c => c.value === city.value);
  };

  // Handle add selection with toast notifications
  const handleAddSelectionWithToast = () => {
    if (!selectedCountry) {
      toast.error('Please select a country first');
      return;
    }
    if (selectedStates.length === 0) {
      toast.error('Please select at least one state');
      return;
    }
    if (selectedCities.length === 0) {
      toast.error('Please select at least one city');
      return;
    }

    handleAddSelection();
    toast.success(editingIndex !== null 
      ? 'Selection updated successfully!' 
      : 'Temporary Selection added successfully!');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setIsStateDropdownOpen(false);
      }
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6">
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
          </div>
        </div>

        {/* State - Custom Multi-Select */}
        <div className="flex flex-col relative">
          <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1" ref={stateDropdownRef}>
              <input
                type="text"
                value={selectedStates.map(s => s.label).join(', ')}
                readOnly
                onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
                placeholder="Select states..."
              />
              {isStateDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {stateOptions.length > 0 ? (
                    stateOptions.map((state) => (
                      <div
                        key={state.value}
                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                        onClick={() => handleStateToggle(state)}
                      >
                        <span>{state.label}</span>
                        {isStateSelected(state) ? (
                          <X
                            className="text-red-500 hover:text-red-700"
                            size={16}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStateToggle(state);
                            }}
                          />
                        ) : (
                          <Plus className="text-green-500" size={16} />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">
                      {!selectedCountry ? "Select country first" : "No states found"}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* City */}
        <div className="flex flex-col relative">
          <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1" ref={cityDropdownRef}>
              <input
                type="text"
                value={selectedCities.length > 0 
                  ? `${selectedCities.slice(0, 4).map(c => c.label).join(', ')}${selectedCities.length > 4 ? '...' : ''}` 
                  : ''}
                readOnly
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
                placeholder={selectedStates.length > 0 ? "All cities selected" : "Select states first"}
              />
              {isCityDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {cityOptions.length > 0 ? (
                    cityOptions.map((city) => (
                      <div
                        key={`${city.value}-${city.state}`}
                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                        onClick={() => handleCityToggle(city)}
                      >
                        <span>{city.label} ({city.state})</span>
                        {isCitySelected(city) ? (
                          <X
                            className="text-red-500 hover:text-red-700"
                            size={16}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCityToggle(city);
                            }}
                          />
                        ) : (
                          <Plus className="text-green-500" size={16} />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">
                      {selectedStates.length === 0 ? "Select states first" : "No cities found"}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={handleAddSelectionWithToast}
              className="bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-2"
              disabled={selectedCities.length === 0}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;