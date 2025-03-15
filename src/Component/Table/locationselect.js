// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';

// const LocationSelect = ({ onProjectsUpdate }) => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');

//   // Load countries on component mount
//   useEffect(() => {
//     const allCountries = Country.getAllCountries();
//     setCountries(allCountries);
//   }, []);

//   // Load states when a country is selected
//   useEffect(() => {
//     if (selectedCountry) {
//       const countryStates = State.getStatesOfCountry(selectedCountry);
//       setStates(countryStates);
//       setSelectedState(''); // Reset state selection
//       setCities([]); // Reset cities
//       setSelectedCity(''); // Reset city selection
//     }
//   }, [selectedCountry]);

//   // Load cities when a state is selected
//   useEffect(() => {
//     if (selectedState) {
//       const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//       setCities(stateCities);
//       setSelectedCity(''); // Reset city selection
//     }
//   }, [selectedState]);

//   // Handle country selection
//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//   };

//   // Handle state selection
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   // Handle city selection
//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value);
//   };

//   // Show projects when all fields are selected
//   useEffect(() => {
//     if (selectedCountry && selectedState && selectedCity) {
//       // Fetch projects based on selected city (replace with your logic)
//       const fetchedProjects = [
//         { id: 1, name: 'Project 1', location: selectedCity },
//         { id: 2, name: 'Project 2', location: selectedCity },
//       ];
//       onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//     }
//   }, [selectedCity, onProjectsUpdate]);

//   return (
//     <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//       <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//       <div className="flex flex-col gap-3">
//         <div>
//           <label className="text-white">Country:</label>
//           <select
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country.isoCode} value={country.isoCode}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-white">State:</label>
//           <select
//             value={selectedState}
//             onChange={handleStateChange}
//             disabled={!selectedCountry}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select State</option>
//             {states.map((state) => (
//               <option key={state.isoCode} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-white">City:</label>
//           <select
//             value={selectedCity}
//             onChange={handleCityChange}
//             disabled={!selectedState}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select City</option>
//             {cities.map((city) => (
//               <option key={city.name} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationSelect;


// edited code 
// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';

// const Locationselect = ({ onProjectsUpdate, onCityUpdate }) => {
//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [states, setStates] = useState([]);
//     const [selectedState, setSelectedState] = useState('');
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
  
//     // Load countries on component mount
//     useEffect(() => {
//       const allCountries = Country.getAllCountries();
//       setCountries(allCountries);
//     }, []);
  
//     // Load states when a country is selected
//     useEffect(() => {
//       if (selectedCountry) {
//         const countryStates = State.getStatesOfCountry(selectedCountry);
//         setStates(countryStates);
//         setSelectedState(''); // Reset state selection
//         setCities([]); // Reset cities
//         setSelectedCity(''); // Reset city selection
//       }
//     }, [selectedCountry]);
  
//     // Load cities when a state is selected
//     useEffect(() => {
//       if (selectedState) {
//         const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//         setCities(stateCities);
//         setSelectedCity(''); // Reset city selection
//       }
//     }, [selectedState]);
  
//     // Handle country selection
//     const handleCountryChange = (e) => {
//       setSelectedCountry(e.target.value);
//     };
  
//     // Handle state selection
//     const handleStateChange = (e) => {
//       setSelectedState(e.target.value);
//     };
  
//     // Handle city selection
//     const handleCityChange = (e) => {
//       const city = e.target.value;
//       setSelectedCity(city);
//       onCityUpdate(city); // Pass the selected city to the parent component
//     };
  
//     // Show projects when all fields are selected
//     useEffect(() => {
//       if (selectedCountry && selectedState && selectedCity) {
//         // Fetch projects based on selected city (replace with your logic)
//         const fetchedProjects = [
//           { id: 1, name: 'Project 1', location: selectedCity },
//           { id: 2, name: 'Project 2', location: selectedCity },
//         ];
//         onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//       }
//     }, [selectedCity, onProjectsUpdate]);
  
//     return (
//       <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//         <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//         <div className="flex flex-col gap-3">
//           <div>
//             <label className="text-white">Country:</label>
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className="w-full p-2 rounded-lg"
//             >
//               <option value="">Select Country</option>
//               {countries.map((country) => (
//                 <option key={country.isoCode} value={country.isoCode}>
//                   {country.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="text-white">State:</label>
//             <select
//               value={selectedState}
//               onChange={handleStateChange}
//               disabled={!selectedCountry}
//               className="w-full p-2 rounded-lg"
//             >
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state.isoCode} value={state.isoCode}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="text-white">City:</label>
//             <select
//               value={selectedCity}
//               onChange={handleCityChange}
//               disabled={!selectedState}
//               className="w-full p-2 rounded-lg"
//             >
//               <option value="">Select City</option>
//               {cities.map((city) => (
//                 <option key={city.name} value={city.name}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
// export default Locationselect;




// get at a time list of projects 
// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';

// const Locationselect = ({ onProjectsUpdate, onCityUpdate }) => {
//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [states, setStates] = useState([]);
//     const [selectedState, setSelectedState] = useState('');
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [countryProjects, setCountryProjects] = useState([]);
//     const [stateProjects, setStateProjects] = useState([]);
//     const [cityProjects, setCityProjects] = useState([]);

//     // Load countries on component mount
//     useEffect(() => {
//         const allCountries = Country.getAllCountries();
//         setCountries(allCountries);
//     }, []);

//     // Load states when a country is selected
//     useEffect(() => {
//         if (selectedCountry) {
//             const countryStates = State.getStatesOfCountry(selectedCountry);
//             setStates(countryStates);
//             setSelectedState(''); // Reset state selection
//             setCities([]); // Reset cities
//             setSelectedCity(''); // Reset city selection
//             fetchCountryProjects(selectedCountry);
//         }
//     }, [selectedCountry]);

//     // Load cities when a state is selected
//     useEffect(() => {
//         if (selectedState) {
//             const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//             setCities(stateCities);
//             setSelectedCity(''); // Reset city selection
//             fetchStateProjects(selectedState);
//         }
//     }, [selectedState]);

//     // Handle country selection
//     const handleCountryChange = (e) => {
//         setSelectedCountry(e.target.value);
//     };

//     // Handle state selection
//     const handleStateChange = (e) => {
//         setSelectedState(e.target.value);
//     };

//     // Handle city selection
//     const handleCityChange = (e) => {
//         const city = e.target.value;
//         setSelectedCity(city);
//         onCityUpdate(city); // Pass the selected city to the parent component
//         fetchCityProjects(city);
//     };

//     // Fetch projects for the selected country
//     const fetchCountryProjects = (countryCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'Country Project 1', location: countryCode },
//             { id: 2, name: 'Country Project 2', location: countryCode },
//         ];
//         setCountryProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected state
//     const fetchStateProjects = (stateCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 3, name: 'State Project 1', location: stateCode },
//             { id: 4, name: 'State Project 2', location: stateCode },
//         ];
//         setStateProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected city
//     const fetchCityProjects = (cityName) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 5, name: 'City Project 1', location: cityName },
//             { id: 6, name: 'City Project 2', location: cityName },
//         ];
//         setCityProjects(fetchedProjects);
//         onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//     };

//     return (
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//             <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//             <div className="flex flex-col gap-3">
//                 <div>
//                     <label className="text-white">Country:</label>
//                     <select
//                         value={selectedCountry}
//                         onChange={handleCountryChange}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select Country</option>
//                         {countries.map((country) => (
//                             <option key={country.isoCode} value={country.isoCode}>
//                                 {country.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">State:</label>
//                     <select
//                         value={selectedState}
//                         onChange={handleStateChange}
//                         disabled={!selectedCountry}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select State</option>
//                         {states.map((state) => (
//                             <option key={state.isoCode} value={state.isoCode}>
//                                 {state.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">City:</label>
//                     <select
//                         value={selectedCity}
//                         onChange={handleCityChange}
//                         disabled={!selectedState}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select City</option>
//                         {cities.map((city) => (
//                             <option key={city.name} value={city.name}>
//                                 {city.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Display projects in a table format */}
//             <div className="mt-6">
//                 <h3 className="text-lg font-semibold mb-2 text-white">Projects</h3>
//                 <table className="w-full text-white">
//                     <thead>
//                         <tr>
//                             <th className="border p-2">ID</th>
//                             <th className="border p-2">Name</th>
//                             <th className="border p-2">Location</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {countryProjects.map((project) => (
//                             <tr key={project.id}>
//                                 <td className="border p-2">{project.id}</td>
//                                 <td className="border p-2">{project.name}</td>
//                                 <td className="border p-2">{project.location}</td>
//                             </tr>
//                         ))}
//                         {stateProjects.map((project) => (
//                             <tr key={project.id}>
//                                 <td className="border p-2">{project.id}</td>
//                                 <td className="border p-2">{project.name}</td>
//                                 <td className="border p-2">{project.location}</td>
//                             </tr>
//                         ))}
//                         {cityProjects.map((project) => (
//                             <tr key={project.id}>
//                                 <td className="border p-2">{project.id}</td>
//                                 <td className="border p-2">{project.name}</td>
//                                 <td className="border p-2">{project.location}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Locationselect;
// get at a time list of projects 


// one moer edited 
// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';
// import { useNavigate } from 'react-router-dom';


// const Locationselect = ({ onProjectsUpdate, onCityUpdate }) => {
//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [states, setStates] = useState([]);
//     const [selectedState, setSelectedState] = useState('');
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [countryProjects, setCountryProjects] = useState([]);
//     const [stateProjects, setStateProjects] = useState([]);
//     const [cityProjects, setCityProjects] = useState([]);

//   const navigate = useNavigate(); // Initialize useNavigate
//     // Function to handle project click and navigate to Detail page
//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } });
//   };

    

//     // Load countries on component mount
//     useEffect(() => {
//         const allCountries = Country.getAllCountries();
//         setCountries(allCountries);
//     }, []);

//     // Load states when a country is selected
//     useEffect(() => {
//         if (selectedCountry) {
//             const countryStates = State.getStatesOfCountry(selectedCountry);
//             setStates(countryStates);
//             setSelectedState(''); // Reset state selection
//             setCities([]); // Reset cities
//             setSelectedCity(''); // Reset city selection
//             fetchCountryProjects(selectedCountry); // Fetch projects for the selected country
//         }
//     }, [selectedCountry]);

//     // Load cities when a state is selected
//     useEffect(() => {
//         if (selectedState) {
//             const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//             setCities(stateCities);
//             setSelectedCity(''); // Reset city selection
//             fetchStateProjects(selectedState); // Fetch projects for the selected state
//         }
//     }, [selectedState]);

//     // Handle country selection
//     const handleCountryChange = (e) => {
//         setSelectedCountry(e.target.value);
//     };

//     // Handle state selection
//     const handleStateChange = (e) => {
//         setSelectedState(e.target.value);
//     };

//     // Handle city selection
//     const handleCityChange = (e) => {
//         const city = e.target.value;
//         setSelectedCity(city);
//         onCityUpdate(city); // Pass the selected city to the parent component
//         fetchCityProjects(city); // Fetch projects for the selected city
//     };

//     // Fetch projects for the selected country
//     const fetchCountryProjects = (countryCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'Country Project 1', location: countryCode },
//             { id: 2, name: 'Country Project 2', location: countryCode },
//         ];
//         setCountryProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected state
//     const fetchStateProjects = (stateCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'State Project 1', location: stateCode },
//             { id: 2, name: 'State Project 2', location: stateCode },
//         ];
//         setStateProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected city
//     const fetchCityProjects = (cityName) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'City Project 1', location: cityName },
//             { id: 2, name: 'City Project 2', location: cityName },
//         ];
//         setCityProjects(fetchedProjects);
//         onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//     };

//     return (
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//             <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//             <div className="flex flex-col gap-3">
//                 <div>
//                     <label className="text-white">Country:</label>
//                     <select
//                         value={selectedCountry}
//                         onChange={handleCountryChange}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select Country</option>
//                         {countries.map((country) => (
//                             <option key={country.isoCode} value={country.isoCode}>
//                                 {country.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">State:</label>
//                     <select
//                         value={selectedState}
//                         onChange={handleStateChange}
//                         disabled={!selectedCountry}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select State</option>
//                         {states.map((state) => (
//                             <option key={state.isoCode} value={state.isoCode}>
//                                 {state.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">City:</label>
//                     <select
//                         value={selectedCity}
//                         onChange={handleCityChange}
//                         disabled={!selectedState}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select City</option>
//                         {cities.map((city) => (
//                             <option key={city.name} value={city.name}>
//                                 {city.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Display projects in separate tables */}
//             <div className="mt-6">
//                 {/* Country Projects Table */}
//                 {selectedCountry && (
//                     <div className="mb-6">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Country Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {countryProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}

//                 {/* State Projects Table */}
//                 {selectedState && (
//                     <div className="mb-6">
//                         <h3 className="text-lg font-semibold mb-2 text-white">State Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {stateProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}

//                 {/* City Projects Table */}
//                 {selectedCity && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2 text-white">City Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             {/* onClick={() => handleProjectClick(project)} */}
//                             <tbody>
//                                 {cityProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Locationselect;
// one moer edited 

// api edited 

// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';
// import { useNavigate } from 'react-router-dom';


// const Locationselect = ({ onProjectsUpdate, onCityUpdate }) => {
//     const [countries, setCountries] = useState([]);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [states, setStates] = useState([]);
//     const [selectedState, setSelectedState] = useState('');
//     const [cities, setCities] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [countryProjects, setCountryProjects] = useState([]);
//     const [stateProjects, setStateProjects] = useState([]);
//     const [cityProjects, setCityProjects] = useState([]);

//   const navigate = useNavigate(); // Initialize useNavigate
//     // Function to handle project click and navigate to Detail page
//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } });
//   };

    

//     // Load countries on component mount
//     useEffect(() => {
//         const allCountries = Country.getAllCountries();
//         setCountries(allCountries);
//     }, []);

//     // Load states when a country is selected
//     useEffect(() => {
//         if (selectedCountry) {
//             const countryStates = State.getStatesOfCountry(selectedCountry);
//             setStates(countryStates);
//             setSelectedState(''); // Reset state selection
//             setCities([]); // Reset cities
//             setSelectedCity(''); // Reset city selection
//             fetchCountryProjects(selectedCountry); // Fetch projects for the selected country
//         }
//     }, [selectedCountry]);

//     // Load cities when a state is selected
//     useEffect(() => {
//         if (selectedState) {
//             const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//             setCities(stateCities);
//             setSelectedCity(''); // Reset city selection
//             fetchStateProjects(selectedState); // Fetch projects for the selected state
//         }
//     }, [selectedState]);

//     // Handle country selection
//     const handleCountryChange = (e) => {
//         setSelectedCountry(e.target.value);
//     };

//     // Handle state selection
//     const handleStateChange = (e) => {
//         setSelectedState(e.target.value);
//     };

//     // Handle city selection
//     const handleCityChange = (e) => {
//         const city = e.target.value;
//         setSelectedCity(city);
//         onCityUpdate(city); // Pass the selected city to the parent component
//         fetchCityProjects(city); // Fetch projects for the selected city
//     };

//     // Fetch projects for the selected country
//     const fetchCountryProjects = (countryCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'Country Project 1', location: countryCode },
//             { id: 2, name: 'Country Project 2', location: countryCode },
//         ];
//         setCountryProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected state
//     const fetchStateProjects = (stateCode) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'State Project 1', location: stateCode },
//             { id: 2, name: 'State Project 2', location: stateCode },
//         ];
//         setStateProjects(fetchedProjects);
//     };

//     // Fetch projects for the selected city
//     const fetchCityProjects = (cityName) => {
//         // Replace with your actual project fetching logic
//         const fetchedProjects = [
//             { id: 1, name: 'City Project 1', location: cityName },
//             { id: 2, name: 'City Project 2', location: cityName },
//         ];
//         setCityProjects(fetchedProjects);
//         onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//     };

//     return (
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//             <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//             <div className="flex flex-col gap-3">
//                 <div>
//                     <label className="text-white">Country:</label>
//                     <select
//                         value={selectedCountry}
//                         onChange={handleCountryChange}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select Country</option>
//                         {countries.map((country) => (
//                             <option key={country.isoCode} value={country.isoCode}>
//                                 {country.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">State:</label>
//                     <select
//                         value={selectedState}
//                         onChange={handleStateChange}
//                         disabled={!selectedCountry}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select State</option>
//                         {states.map((state) => (
//                             <option key={state.isoCode} value={state.isoCode}>
//                                 {state.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-white">City:</label>
//                     <select
//                         value={selectedCity}
//                         onChange={handleCityChange}
//                         disabled={!selectedState}
//                         className="w-full p-2 rounded-lg"
//                     >
//                         <option value="">Select City</option>
//                         {cities.map((city) => (
//                             <option key={city.name} value={city.name}>
//                                 {city.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             {/* Display projects in separate tables */}
//             <div className="mt-6">
//                 {/* Country Projects Table */}
//                 {selectedCountry && (
//                     <div className="mb-6">
//                         <h3 className="text-lg font-semibold mb-2 text-white">Country Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {countryProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}

//                 {/* State Projects Table */}
//                 {selectedState && (
//                     <div className="mb-6">
//                         <h3 className="text-lg font-semibold mb-2 text-white">State Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {stateProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}

//                 {/* City Projects Table */}
//                 {selectedCity && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2 text-white">City Projects</h3>
//                         <table className="w-full text-white">
//                             <thead>
//                                 <tr>
//                                     <th className="border p-2">ID</th>
//                                     <th className="border p-2">Name</th>
//                                     <th className="border p-2">Location</th>
//                                 </tr>
//                             </thead>
//                             {/* onClick={() => handleProjectClick(project)} */}
//                             <tbody>
//                                 {cityProjects.map((project) => (
//                                     <tr key={project.id}>
//                                         <td className="border p-2">{project.id}</td>
//                                         <td style={{cursor:'pointer'}} onClick={() => handleProjectClick(project)} className="border p-2 hover:bg-gray-500">{project.name}</td>
//                                         <td className="border p-2">{project.location}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Locationselect;
// api edited 




// edited 
import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

const Locationselect = ({ onProjectsUpdate }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [countryProjects, setCountryProjects] = useState([]);
    const [stateProjects, setStateProjects] = useState([]);
    const [cityProjects, setCityProjects] = useState([]);

    const navigate = useNavigate();

    // Load countries on component mount
    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    // Load states when a country is selected
    useEffect(() => {
        if (selectedCountry) {
            const countryStates = State.getStatesOfCountry(selectedCountry);
            setStates(countryStates);
            setSelectedState('');
            setCities([]);
            setSelectedCity('');
            fetchCountryProjects(selectedCountry);
        }
    }, [selectedCountry]);

    // Load cities when a state is selected
    useEffect(() => {
        if (selectedState) {
            const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
            setCities(stateCities);
            setSelectedCity('');
            fetchStateProjects(selectedState);
        }
    }, [selectedState]);

    // Handle country selection
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    // Handle state selection
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    // Handle city selection
    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        fetchCityProjects(city);
    };

    // Fetch projects for the selected country
    const fetchCountryProjects = (countryCode) => {
        const fetchedProjects = [
            { id: 1, name: 'Country Project 1', location: countryCode },
            { id: 2, name: 'Country Project 2', location: countryCode },
        ];
        setCountryProjects(fetchedProjects);
    };

    // Fetch projects for the selected state
    const fetchStateProjects = (stateCode) => {
        const fetchedProjects = [
            { id: 1, name: 'State Project 1', location: stateCode },
            { id: 2, name: 'State Project 2', location: stateCode },
        ];
        setStateProjects(fetchedProjects);
    };

    // Fetch projects for the selected city
    const fetchCityProjects = (cityName) => {
        const fetchedProjects = [
            { id: 1, name: 'City Project 1', location: cityName },
            { id: 2, name: 'City Project 2', location: cityName },
        ];
        setCityProjects(fetchedProjects);
        if (onProjectsUpdate && typeof onProjectsUpdate === 'function') {
            onProjectsUpdate(fetchedProjects); // Pass projects to parent component
        }
    };

    // Function to handle project click and navigate to Detail page
    const handleProjectClick = (project) => {
        navigate('/detail', { state: { project } });
    };

    return (
        <div className="p-2 bg-gray-800 rounded-2xl shadow-lg max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Select Location</h2>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Country Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Country</label>
                    <select
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {/* Country Projects */}
                    {selectedCountry && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Country Projects</h3>
                            <ul className="border border-gray-300 rounded-lg overflow-hidden">
                                {countryProjects.map((project) => (
                                    <li
                                        key={project.id}
                                        onClick={() => handleProjectClick(project)}
                                        className="p-3 border-b bg-white  border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors"
                                    >
                                        {project.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* State Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">State</label>
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        disabled={!selectedCountry}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    >
                        <option value="">Select State</option>
                        {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                    {/* State Projects */}
                    {selectedState && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">State Projects</h3>
                            <ul className="border border-gray-300 rounded-lg overflow-hidden">
                                {stateProjects.map((project) => (
                                    <li
                                        key={project.id}
                                        onClick={() => handleProjectClick(project)}
                                        className="p-3 border-b bg-white border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors"
                                    >
                                        {project.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* City Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-white mb-2">City</label>
                    <select
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedState}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    {/* City Projects */}
                    {selectedCity && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">City Projects</h3>
                            <ul className="border border-gray-300 rounded-lg overflow-hidden">
                                {cityProjects.map((project) => (
                                    <li
                                        key={project.id}
                                        onClick={() => handleProjectClick(project)}
                                        className="p-3 border-b bg-white border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors"
                                    >
                                        {project.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Locationselect;
// edited 


// new edited code here 
// import React, { useState, useEffect } from 'react';
// import { Country, State, City } from 'country-state-city';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Locationselect = ({ onProjectsUpdate, onCityUpdate }) => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Load countries on component mount
//   useEffect(() => {
//     const allCountries = Country.getAllCountries();
//     setCountries(allCountries);
//   }, []);

//   // Load states when a country is selected
//   useEffect(() => {
//     if (selectedCountry) {
//       const countryStates = State.getStatesOfCountry(selectedCountry);
//       setStates(countryStates);
//       setSelectedState(''); // Reset state selection
//       setCities([]); // Reset cities
//       setSelectedCity(''); // Reset city selection
//     }
//   }, [selectedCountry]);

//   // Load cities when a state is selected
//   useEffect(() => {
//     if (selectedState) {
//       const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
//       setCities(stateCities);
//       setSelectedCity(''); // Reset city selection
//     }
//   }, [selectedState]);

//   // Handle country selection
//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//   };

//   // Handle state selection
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   // Handle city selection
//   const handleCityChange = (e) => {
//     const city = e.target.value;
//     setSelectedCity(city);
//     onCityUpdate(city); // Pass the selected city to the parent component
//   };

//   // Function to handle project click and navigate to Detail page
//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } });
//   };

//   // Show projects when all fields are selected
//   useEffect(() => {
//     if (selectedCountry && selectedState && selectedCity) {
//       // Fetch projects based on selected city (replace with your logic)
//       const fetchedProjects = [
//         { id: 1, name: 'Project 1', location: selectedCity, sector: "Transport", cost: "$1B", status: "In Progress", country: "USA", state: "California", city: "Los Angeles", startDate: "2022-01-01", completionDate: "2025-12-31" },
//         { id: 2, name: 'Project 2', location: selectedCity, sector: "Energy", cost: "$500M", status: "Completed", country: "Canada", state: "Ontario", city: "Toronto", startDate: "2020-05-15", completionDate: "2023-10-30" },
//       ];
//       onProjectsUpdate(fetchedProjects); // Pass projects to parent component
//     }
//   }, [selectedCity, onProjectsUpdate]);

//   return (
//     <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//       <h2 className="text-xl font-semibold mb-4 text-white">Select Location</h2>
//       <div className="flex flex-col gap-3">
//         <div>
//           <label className="text-white">Country:</label>
//           <select
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country.isoCode} value={country.isoCode}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-white">State:</label>
//           <select
//             value={selectedState}
//             onChange={handleStateChange}
//             disabled={!selectedCountry}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select State</option>
//             {states.map((state) => (
//               <option key={state.isoCode} value={state.isoCode}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="text-white">City:</label>
//           <select
//             value={selectedCity}
//             onChange={handleCityChange}
//             disabled={!selectedState}
//             className="w-full p-2 rounded-lg"
//           >
//             <option value="">Select City</option>
//             {cities.map((city) => (
//               <option key={city.name} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Display Projects */}
//       {selectedCity && (
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-4 text-white">Projects in {selectedCity}</h2>
//           <ul>
//             {[
//               { id: 1, name: 'Project 1', location: selectedCity, sector: "Transport", cost: "$1B", status: "In Progress", country: "USA", state: "California", city: "Los Angeles", startDate: "2022-01-01", completionDate: "2025-12-31" },
//               { id: 2, name: 'Project 2', location: selectedCity, sector: "Energy", cost: "$500M", status: "Completed", country: "Canada", state: "Ontario", city: "Toronto", startDate: "2020-05-15", completionDate: "2023-10-30" },
//             ].map((project) => (
//               <li key={project.id} className="text-white hover:bg-gray-700 p-2 rounded-lg cursor-pointer" onClick={() => handleProjectClick(project)}>
//                 <strong>{project.name}</strong> - {project.location}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Locationselect;