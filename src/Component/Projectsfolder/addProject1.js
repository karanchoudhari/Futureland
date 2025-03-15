
// import React, { useState, useEffect, useRef } from "react";
// import axios from 'axios'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Country, State, City } from "country-state-city";
// import ProjectList from "./projectlist";
// import { Plus, Upload, X, CheckCircle, Trash, Edit,FilePlus,MapPinned } from "lucide-react"; // Added Edit icon
// import { useNavigate } from "react-router-dom";
// import { TextField, MenuItem, Button, Box, Typography, Grid, Paper, Divider, IconButton } from '@mui/material';

// const AddProject1 = () => {
//   const [formData, setFormData] = useState({
//     project_name: "",
//     sector: "",
//     cost: "",
//     status: "",
//     country: "",
//     state: "",
//     city: "",
//     start: null,
//     finish: null,
//     contractor: "",
//     kmlFile: null,
//   });

//   const [projectList, setProjectList] = useState([
//     {
//       project_name: "Project A",
//       sector: "Construction",
//       cost: 1000000,
//       status: "Under-Construction",
//       country: "United States",
//       state: "California",
//       city: "Los Angeles",
//       start: "2023-01-01",
//       finish: "2024-01-01",
//       contractor: "ABC Contractors",
//       kmlFile: null,
//     },
//     {
//       project_name: "Project B",
//       sector: "Retail",
//       cost: 500000,
//       status: "Constructed",
//       country: "United States",
//       state: "Texas",
//       city: "Houston",
//       start: "2022-06-01",
//       finish: "2023-06-01",
//       contractor: "XYZ Builders",
//       kmlFile: null,
//     },
//   ]);

//   const [sectors, setSectors] = useState(["Construction", "Retail", "Infrastructure", "Education", "Commercial"]);
//   const [newSector, setNewSector] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false); // New state for update modal
//   const [shakeFields, setShakeFields] = useState([]);
//   const [sectorError, setSectorError] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [fileName, setFileName] = useState(''); // Track the index of the project being edited
//   const navigate = useNavigate();

//   // Ref for the form
//   const formRef = useRef(null);

//   // Shake animation cleanup
//   useEffect(() => {
//     if (shakeFields.length > 0) {
//       const timer = setTimeout(() => setShakeFields([]), 500);
//       return () => clearTimeout(timer);
//     }
//   }, [shakeFields]);

//   const handleAddSector = () => {
//     if (newSector.trim() && !sectors.includes(newSector.trim())) {
//       setSectors((prev) => [...prev, newSector.trim()]);
//       setNewSector("");
//       setShowModal(false);
//       setSectorError("");
//     } else {
//       setSectorError("Sector already exists or invalid input!");
//       setShakeFields(["sector"]);
//     }
//   };

//   const handleDeleteSector = (sectorToDelete) => {
//     setSectors((prev) => prev.filter((sector) => sector !== sectorToDelete));
//     if (formData.sector === sectorToDelete) {
//       setFormData({ ...formData, sector: "" }); // Clear the selected sector if it's deleted
//     }
//   };

//   const companyId = '67ce66294f28f85e4ff91e2c'


//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "kmlFile") {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else if (name === "documentFile") {
//       const file = files[0];
//       if (file) setFileName(file.name); // Display uploaded file name
//     } else if (name === "country") {
//       setFormData({
//         ...formData,
//         [name]: value,
//         state: "",
//         city: "",
//       });
//     } else if (name === "state") {
//       setFormData({
//         ...formData,
//         [name]: value,
//         city: "",
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleDateChange = (date, field) => {
//     setFormData({
//       ...formData,
//       [field]: date,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check for empty fields
//     const emptyFields = Object.entries(formData)
//         .filter(([key, value]) => {
//             if (key === "start" || key === "finish") {
//                 return value === null;
//             }
//             return value === "";
//         })
//         .map(([key]) => key);

//     if (emptyFields.length > 0) {
//         setShakeFields(emptyFields);
//         return;
//     }

//     try {
//         const payload = {
//             ...formData,
//             start: formData.start?.toISOString().split("T")[0],  // Convert date to proper format
//             finish: formData.finish?.toISOString().split("T")[0] // Convert date to proper format
//         };

//         const response = await axios.post(
//             'http://localhost:3002/api/project/createProject',
//             payload, // Ensure form data is passed
//             {
//                 headers: {
//                     'x-company-id': companyId,
//                     'Content-Type': 'application/json', // Important for JSON data
//                 }
//             }
//         );

//         console.log('Project created successfully:', response.data);
//         setProjectList([...projectList, response.data.project]);
//         setShowSuccessModal(true);

//     } catch (error) {
//         console.error('Error submitting project:', error.response?.data || error.message);
//     }

//     // Reset form
//     setFormData({
//         project_name: "",
//         sector: "",
//         cost: "",
//         status: "",
//         country: "",
//         state: "",
//         city: "",
//         start: null,
//         finish: null,
//         contractor: "",
//         kmlFile: null,

//     });
// };


//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   const closeUpdateModal = () => {
//     setShowUpdateModal(false);
//   };

//   const shouldShake = (fieldName) => {
//     return shakeFields.includes(fieldName) ? "animate-shake" : "";
//   };

//   const getCountryCode = (countryName) => {
//     const country = Country.getAllCountries().find((c) => c.name === countryName);
//     return country ? country.isoCode : "";
//   };

//   const getStateCode = (stateName, countryCode) => {
//     const state = State.getStatesOfCountry(countryCode).find((s) => s.name === stateName);
//     return state ? state.isoCode : "";
//   };

//   const handleViewProjectList = () => {
//     localStorage.setItem("projectList", JSON.stringify(projectList));
//     navigate('/projectlist');
//   };

//   const handleEditProject = (index) => {
//     const projectToEdit = projectList[index];
//     setFormData({
//       ...projectToEdit,
//       start: projectToEdit.start ? new Date(projectToEdit.start) : null,
//       finish: projectToEdit.finish ? new Date(projectToEdit.finish) : null,
//     });
//     setEditingIndex(index); // Set the index of the project being edited

//     // Scroll to the form when edit is clicked
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <>
//       <div className="containerr" 
//         style={{
//           width: '100%',
//           height: '100vh',
//           overflowY: 'scroll',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none'
//         }}>

//         <div className="p-6 max-w-3xl mx-auto font-sans bg-gray-100 min-h-screen">
//           <style>
//             {`
//               @keyframes shake {
//                 0% { transform: translateX(0); }
//                 25% { transform: translateX(-5px); }
//                 50% { transform: translateX(5px); }
//                 75% { transform: translateX(-5px); }
//                 100% { transform: translateX(0); }
//               }
//               .animate-shake {
//                 animation: shake 0.3s ease-in-out;
//               }
//             `}
//           </style>
//           <Box display="flex" justifyContent="center" alignItems="flex-start"  p={4} ref={formRef}>
//             <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
//               <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
//                 Add Project
//               </Typography>
//               <Divider sx={{ my: 3 }} />
//               <form onSubmit={handleSubmit} autoComplete="off" >
//                 <Grid container spacing={2.5}>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Project Name"
//                       fullWidth
//                       size="small"
//                       name="project_name"
//                       value={formData.project_name}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("project_name")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("project_name"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
//                     <TextField
//                       label="Sector"
//                       select
//                       fullWidth
//                       size="small"
//                       name="sector"
//                       value={formData.sector}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("sector")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("sector"),
//                       }}
//                       SelectProps={{
//                         renderValue: (selected) => selected, // Only show the selected value, no cross icon
//                       }}
//                     >
//                       <MenuItem value="">Select Sector</MenuItem>
//                       {sectors.map((sector, index) => (
//                         <MenuItem key={index} value={sector}>
//                           <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
//                             {sector}
//                             <IconButton
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDeleteSector(sector);
//                               }}
//                               size="small"
//                             >
//                               <X size={16} />
//                             </IconButton>
//                           </Box>
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                     <IconButton
//                       sx={{
//                         position: 'absolute',
//                         top: '12px',
//                         right: '-12px',
//                         backgroundColor: 'white',
//                         width: 28,
//                         height: 28,
//                         boxShadow: 2,
//                       }}
//                       onClick={() => setShowModal(true)}
//                     >
//                       <Plus size={16} />
//                     </IconButton>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Cost (INR)"
//                       type="number"
//                       fullWidth
//                       size="small"
//                       name="cost"
//                       value={formData.cost}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("cost")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("cost"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Status"
//                       select
//                       fullWidth
//                       size="small"
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("status")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("status"),
//                       }}
//                     >
//                       <MenuItem value="">Select Status</MenuItem>
//                       <MenuItem value="Conceptual">Conceptual</MenuItem>
//                       <MenuItem value="DPR">DPR</MenuItem>
//                       <MenuItem value="Tender">Tender</MenuItem>
//                       <MenuItem value="Under-Construction">Under-Construction</MenuItem>
//                       <MenuItem value="Constructed">Constructed</MenuItem>
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Country"
//                       select
//                       fullWidth
//                       size="small"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("country")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("country"),
//                       }}
//                     >
//                       <MenuItem value="">Select Country</MenuItem>
//                       {Country.getAllCountries().map((country) => (
//                         <MenuItem key={country.isoCode} value={country.name}>
//                           {country.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="State"
//                       select
//                       fullWidth
//                       size="small"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("state")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("state"),
//                       }}
//                     >
//                       <MenuItem value="">Select State</MenuItem>
//                       {State.getStatesOfCountry(getCountryCode(formData.country)).map((state) => (
//                         <MenuItem key={state.isoCode} value={state.name}>
//                           {state.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="City"
//                       select
//                       fullWidth
//                       size="small"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("city")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("city"),
//                       }}
//                     >
//                       <MenuItem value="">Select City</MenuItem>
//                       {City.getCitiesOfState(getCountryCode(formData.country), getStateCode(formData.state, getCountryCode(formData.country))).map((city) => (
//                         <MenuItem key={city.name} value={city.name}>
//                           {city.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Contractor"
//                       fullWidth
//                       size="small"
//                       name="contractor"
//                       value={formData.contractor}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("contractor")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("contractor"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Start Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       InputLabelProps={{ shrink: true }}
//                       name="start"
//                       value={formData.start ? formData.start.toISOString().split('T')[0] : ""}
//                       onChange={(e) => handleDateChange(new Date(e.target.value), "start")}
//                       variant="outlined"
//                       className={shouldShake("start")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("start"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Finish Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       InputLabelProps={{ shrink: true }}
//                       name="finish"
//                       value={formData.finish ? formData.finish.toISOString().split('T')[0] : ""}
//                       onChange={(e) => handleDateChange(new Date(e.target.value), "finish")}
//                       variant="outlined"
//                       className={shouldShake("finish")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("finish"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       component="label"
//                       fullWidth
//                       variant="outlined"
//                       sx={{ mt: 2, py: 1, border: '1px dashed #3b82f6', color: '#3b82f6', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, position: 'relative' }}
//                     >
//                       <MapPinned size={20} style={{ marginRight: '8px' }} />
//                       Upload KML File
//                       <input
//                         type="file"
//                         name="kmlFile"
//                         onChange={handleChange}
//                         style={{ display: 'none' }}
//                         accept=".kml"
//                       />
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12}>
//   <Button
//     component="label"
//     fullWidth
//     variant="outlined"
//     sx={{
//       mt: 2,
//       py: 1,
//       border: '1px dashed #3b82f6',
//       color: '#3b82f6',
//       fontWeight: 'bold',
//       fontSize: '1rem',
//       borderRadius: 3,
//       position: 'relative',
//     }}
//   >
//     <FilePlus size={20} style={{ marginRight: '8px' }} />
//     Upload Document
//     <input
//       type="file"
//       name="documentFile"
//       onChange={handleChange}
//       style={{ display: 'none' }}
//       accept=".pdf,.doc,.docx"
//     />
//   </Button>
//   {fileName && (
//   <div className="flex justify-center items-center">
//   <Typography sx={{ color: '#3b82f6', fontWeight: 'medium' }}>
//     {fileName}
//   </Typography>
// </div>

//   )}
// </Grid>

//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Paper>
//           </Box>

//           {/* Success Modal */}
//           {showSuccessModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={closeSuccessModal}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={closeSuccessModal}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
//                   <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
//                   <p className="text-gray-600 text-center">
//                     Your project has been successfully submitted.
//                   </p>
//                   <p className="text-gray-600 text-center mt-2">
//                     If you want to see the project list, click on the "View Project List" button below.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Update Modal */}
//           {showUpdateModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={closeUpdateModal}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={closeUpdateModal}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <Edit className="w-12 h-12 text-blue-500 mb-4" /> {/* Update icon */}
//                   <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
//                   <p className="text-gray-600 text-center">
//                     Your project has been successfully updated.
//                   </p>
//                   <p className="text-gray-600 text-center mt-2">
//                     If you want to see the project list, click on the "View Project List" button below.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Add Sector Modal */}
//           {showModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={() => setShowModal(false)}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <h2 className="text-2xl font-bold mb-4">Add New Sector</h2>
//                   <TextField
//                   autoComplete="off"
//                     label="New Sector"
//                     fullWidth
//                     size="small"
//                     value={newSector}
//                     onChange={(e) => setNewSector(e.target.value)}
//                     variant="outlined"
//                     className={shouldShake("sector")}
//                     error={!!sectorError}
//                     helperText={sectorError}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         '&.animate-shake fieldset': {
//                           borderColor: 'red',
//                         },
//                       },
//                     }}
//                     InputProps={{
//                       className: shouldShake("sector"),
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
//                     onClick={handleAddSector}
//                   >
//                     Add
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* View Project List Button */}
//           <div className="flex justify-center mt-2">
//             <button
//               onClick={handleViewProjectList}
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             >
//               View Project List
//             </button>
//           </div>

//         </div>
//         <div className="container px-2">
//           <h2 className="text-2xl font-bold text-gray-900 mt-0 text-center">Project List</h2>
//           <ProjectList projectList={projectList} onEditProject={handleEditProject} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddProject1;






















// import React, { useState, useEffect, useRef } from "react";
// import axios from 'axios'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Country, State, City } from "country-state-city";
// import ProjectList from "./projectlist";
// import { Plus, Upload, X, CheckCircle, Trash, Edit, FilePlus, MapPinned } from "lucide-react"; // Added Edit icon
// import { useNavigate } from "react-router-dom";
// import { TextField, MenuItem, Button, Box, Typography, Grid, Paper, Divider, IconButton } from '@mui/material';
// import Table from "../Table/table";

// const AddProject1 = () => {
//   const [formData, setFormData] = useState({
//     project_name: "",
//     sector: "",
//     cost: "",
//     status: "",
//     country: "",
//     state: "",
//     city: "",
//     start: null,
//     finish: null,
//     contractor: "",
//     kmlFile: null,
//     documentFile: null,
    
//   });

//   const [projectList, setProjectList] = useState([
//     {
//       project_name: "Project A",
//       sector: "Construction",
//       cost: 1000000,
//       status: "Under-Construction",
//       country: "United States",
//       state: "California",
//       city: "Los Angeles",
//       start: "2023-01-01",
//       finish: "2024-01-01",
//       contractor: "ABC Contractors",
//       kmlFile: null,
//     },
//     {
//       project_name: "Project B",
//       sector: "Retail",
//       cost: 500000,
//       status: "Constructed",
//       country: "United States",
//       state: "Texas",
//       city: "Houston",
//       start: "2022-06-01",
//       finish: "2023-06-01",
//       contractor: "XYZ Builders",
//       kmlFile: null,
//     },
//   ]);

//   const [sectors, setSectors] = useState(["Construction", "Retail", "Infrastructure", "Education", "Commercial"]);
//   const [newSector, setNewSector] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false); // New state for update modal
//   const [shakeFields, setShakeFields] = useState([]);
//   const [sectorError, setSectorError] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [fileName, setFileName] = useState(''); // Track the index of the project being edited
//   const navigate = useNavigate();


//   // Ref for the form
//   const formRef = useRef(null);

//   // Shake animation cleanup
//   useEffect(() => {
//     if (shakeFields.length > 0) {
//       const timer = setTimeout(() => setShakeFields([]), 500);
//       return () => clearTimeout(timer);
//     }
//   }, [shakeFields]);

//   const handleAddSector = () => {
//     if (newSector.trim() && !sectors.includes(newSector.trim())) {
//       setSectors((prev) => [...prev, newSector.trim()]);
//       setNewSector("");
//       setShowModal(false);
//       setSectorError("");
//     } else {
//       setSectorError("Sector already exists or invalid input!");
//       setShakeFields(["sector"]);
//     }
//   };

//   const handleDeleteSector = (sectorToDelete) => {
//     setSectors((prev) => prev.filter((sector) => sector !== sectorToDelete));
//     if (formData.sector === sectorToDelete) {
//       setFormData({ ...formData, sector: "" }); // Clear the selected sector if it's deleted
//     }
//   };

//   const companyId = '67ce66294f28f85e4ff91e2c'


//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "kmlFile") {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else if (name === "documentFile") {
//       const file = files[0];
//       if (file) setFileName(file.name); // Display uploaded file name
//     } else if (name === "country") {
//       setFormData({
//         ...formData,
//         [name]: value,
//         state: "",
//         city: "",
//       });
//     } else if (name === "state") {
//       setFormData({
//         ...formData,
//         [name]: value,
//         city: "",
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleDateChange = (date, field) => {
//     setFormData({
//       ...formData,
//       [field]: date,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check for empty fields
//     const emptyFields = Object.entries(formData)
//       .filter(([key, value]) => {
//         if (key === "start" || key === "finish") {
//           return value === null;
//         }
//         return value === "";
//       })
//       .map(([key]) => key);

//     if (emptyFields.length > 0) {
//       setShakeFields(emptyFields);
//       return;
//     }

//     try {
//       const payload = {
//         ...formData,
//         start: formData.start?.toISOString().split("T")[0],  // Convert date to proper format
//         finish: formData.finish?.toISOString().split("T")[0] // Convert date to proper format
//       };

//       const response = await axios.post(
//         'http://localhost:3002/api/project/createProject',
//         payload, // Ensure form data is passed
//         {
//           headers: {
//             'x-company-id': companyId,
//             'Content-Type': 'application/json', // Important for JSON data
//           }
//         }
//       );

//       console.log('Project created successfully:', response.data);
//       setProjectList([...projectList, response.data.project]);
//       setShowSuccessModal(true);

//     } catch (error) {
//       console.error('Error submitting project:', error.response?.data || error.message);
//     }

//     // Reset form
//     setFormData({
//       project_name: "",
//       sector: "",
//       cost: "",
//       status: "",
//       country: "",
//       state: "",
//       city: "",
//       start: null,
//       finish: null,
//       contractor: "",
//       kmlFile: null,
//       documentFile: null,
//     });
//   };


//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   const closeUpdateModal = () => {
//     setShowUpdateModal(false);
//   };

//   const shouldShake = (fieldName) => {
//     return shakeFields.includes(fieldName) ? "animate-shake" : "";
//   };

//   const getCountryCode = (countryName) => {
//     const country = Country.getAllCountries().find((c) => c.name === countryName);
//     return country ? country.isoCode : "";
//   };

//   const getStateCode = (stateName, countryCode) => {
//     const state = State.getStatesOfCountry(countryCode).find((s) => s.name === stateName);
//     return state ? state.isoCode : "";
//   };

//   const handleViewProjectList = () => {
//     localStorage.setItem("projectList", JSON.stringify(projectList));
//     navigate('/projectlist');
//   };

//   const handleEditProject = (index) => {
//     const projectToEdit = projectList[index];
//     setFormData({
//       ...projectToEdit,
//       start: projectToEdit.start ? new Date(projectToEdit.start) : null,
//       finish: projectToEdit.finish ? new Date(projectToEdit.finish) : null,
//     });
//     setEditingIndex(index); // Set the index of the project being edited

//     // Scroll to the form when edit is clicked
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <>
//       <div className="containerr"
//         style={{
//           width: '100%',
//           height: '100vh',
//           overflowY: 'scroll',
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none'
//         }}>

//         <div className="p-6 max-w-3xl mx-auto font-sans bg-gray-100 min-h-screen">
//           <style>
//             {`
//               @keyframes shake {
//                 0% { transform: translateX(0); }
//                 25% { transform: translateX(-5px); }
//                 50% { transform: translateX(5px); }
//                 75% { transform: translateX(-5px); }
//                 100% { transform: translateX(0); }
//               }
//               .animate-shake {
//                 animation: shake 0.3s ease-in-out;
//               }
//             `}
//           </style>
//           <Box display="flex" justifyContent="center" alignItems="flex-start" p={4} ref={formRef}>
//             <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
//               <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
//                 Add Project
//               </Typography>
//               <Divider sx={{ my: 3 }} />
//               <form onSubmit={handleSubmit} autoComplete="off" >
//                 <Grid container spacing={2.5}>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Project Name"
//                       fullWidth
//                       size="small"
//                       name="project_name"
//                       value={formData.project_name}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("project_name")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("project_name"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
//                     <TextField
//                       label="Sector"
//                       select
//                       fullWidth
//                       size="small"
//                       name="sector"
//                       value={formData.sector}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("sector")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("sector"),
//                       }}
//                       SelectProps={{
//                         renderValue: (selected) => selected, // Only show the selected value, no cross icon
//                       }}
//                     >
//                       <MenuItem value="">Select Sector</MenuItem>
//                       {sectors.map((sector, index) => (
//                         <MenuItem key={index} value={sector}>
//                           <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
//                             {sector}
//                             <IconButton
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleDeleteSector(sector);
//                               }}
//                               size="small"
//                             >
//                               <X size={16} />
//                             </IconButton>
//                           </Box>
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                     <IconButton
//                       sx={{
//                         position: 'absolute',
//                         top: '5px',
//                         right: '-15px',
//                         backgroundColor: 'white',
//                         width: 28,
//                         height: 28,
//                         boxShadow: 2,
//                       }}
//                       onClick={() => setShowModal(true)}
//                     >
//                       <Plus size={16} />
//                     </IconButton>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Cost (INR)"
//                       type="number"
//                       fullWidth
//                       size="small"
//                       name="cost"
//                       value={formData.cost}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("cost")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("cost"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Status"
//                       select
//                       fullWidth
//                       size="small"
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("status")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("status"),
//                       }}
//                     >
//                       <MenuItem value="">Select Status</MenuItem>
//                       <MenuItem value="Conceptual">Conceptual</MenuItem>
//                       <MenuItem value="DPR">DPR</MenuItem>
//                       <MenuItem value="Tender">Tender</MenuItem>
//                       <MenuItem value="Under-Construction">Under-Construction</MenuItem>
//                       <MenuItem value="Constructed">Constructed</MenuItem>
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Country"
//                       select
//                       fullWidth
//                       size="small"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("country")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("country"),
//                       }}
//                     >
//                       <MenuItem value="">Select Country</MenuItem>
//                       {Country.getAllCountries().map((country) => (
//                         <MenuItem key={country.isoCode} value={country.name}>
//                           {country.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="State"
//                       select
//                       fullWidth
//                       size="small"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("state")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("state"),
//                       }}
//                     >
//                       <MenuItem value="">Select State</MenuItem>
//                       {State.getStatesOfCountry(getCountryCode(formData.country)).map((state) => (
//                         <MenuItem key={state.isoCode} value={state.name}>
//                           {state.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="City"
//                       select
//                       fullWidth
//                       size="small"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("city")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("city"),
//                       }}
//                     >
//                       <MenuItem value="">Select City</MenuItem>
//                       {City.getCitiesOfState(getCountryCode(formData.country), getStateCode(formData.state, getCountryCode(formData.country))).map((city) => (
//                         <MenuItem key={city.name} value={city.name}>
//                           {city.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Contractor"
//                       fullWidth
//                       size="small"
//                       name="contractor"
//                       value={formData.contractor}
//                       onChange={handleChange}
//                       variant="outlined"
//                       className={shouldShake("contractor")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("contractor"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Start Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       InputLabelProps={{ shrink: true }}
//                       name="start"
//                       value={formData.start ? formData.start.toISOString().split('T')[0] : ""}
//                       onChange={(e) => handleDateChange(new Date(e.target.value), "start")}
//                       variant="outlined"
//                       className={shouldShake("start")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("start"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Finish Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       InputLabelProps={{ shrink: true }}
//                       name="finish"
//                       value={formData.finish ? formData.finish.toISOString().split('T')[0] : ""}
//                       onChange={(e) => handleDateChange(new Date(e.target.value), "finish")}
//                       variant="outlined"
//                       className={shouldShake("finish")}
//                       sx={{
//                         '& .MuiOutlinedInput-root': {
//                           '&.animate-shake fieldset': {
//                             borderColor: 'red',
//                           },
//                         },
//                       }}
//                       InputProps={{
//                         className: shouldShake("finish"),
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       component="label"
//                       fullWidth
//                       variant="outlined"
//                       sx={{ mt: 2, py: 1, border: '1px dashed #3b82f6', color: '#3b82f6', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, position: 'relative' }}
//                     >
//                       <MapPinned size={20} style={{ marginRight: '8px' }} />
//                       Upload KML File
//                       <input
//                         type="file"
//                         name="kmlFile"
//                         onChange={handleChange}
//                         style={{ display: 'none' }}
//                         accept=".kml"
//                       />
//                     </Button>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Button
//                       component="label"
//                       fullWidth
//                       variant="outlined"
//                       sx={{
//                         mt: 2,
//                         py: 1,
//                         border: '1px dashed #3b82f6',
//                         color: '#3b82f6',
//                         fontWeight: 'bold',
//                         fontSize: '1rem',
//                         borderRadius: 3,
//                         position: 'relative',
//                       }}
//                     >
//                       <FilePlus size={20} style={{ marginRight: '8px' }} />
//                       Upload Document
//                       <input
//                         type="file"
//                         name="documentFile"
//                         onChange={handleChange}
//                         style={{ display: 'none' }}
//                         accept=".pdf,.doc,.docx"
//                       />
//                     </Button>
//                     {fileName && (
//                       <div className="flex justify-center items-center">
//                         <Typography sx={{ color: '#3b82f6', fontWeight: 'medium' }}>
//                           {fileName}
//                         </Typography>
//                       </div>

//                     )}
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Paper>
//           </Box>

//           {/* Success Modal */}
//           {showSuccessModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={closeSuccessModal}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={closeSuccessModal}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
//                   <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
//                   <p className="text-gray-600 text-center">
//                     Your project has been successfully submitted.
//                   </p>
//                   <p className="text-gray-600 text-center mt-2">
//                     If you want to see the project list, click on the "View Project List" button below.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Update Modal */}
//           {showUpdateModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={closeUpdateModal}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={closeUpdateModal}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <Edit className="w-12 h-12 text-blue-500 mb-4" /> {/* Update icon */}
//                   <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
//                   <p className="text-gray-600 text-center">
//                     Your project has been successfully updated.
//                   </p>
//                   <p className="text-gray-600 text-center mt-2">
//                     If you want to see the project list, click on the "View Project List" button below.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Add Sector Modal */}
//           {showModal && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               onClick={() => setShowModal(false)}
//             >
//               <div
//                 className="bg-white rounded-lg p-8 w-96 relative"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//                 <div className="flex flex-col items-center">
//                   <h2 className="text-2xl font-bold mb-4">Add New Sector</h2>
//                   <TextField
//                     autoComplete="off"
//                     label="New Sector"
//                     fullWidth
//                     size="small"
//                     value={newSector}
//                     onChange={(e) => setNewSector(e.target.value)}
//                     variant="outlined"
//                     className={shouldShake("sector")}
//                     error={!!sectorError}
//                     helperText={sectorError}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         '&.animate-shake fieldset': {
//                           borderColor: 'red',
//                         },
//                       },
//                     }}
//                     InputProps={{
//                       className: shouldShake("sector"),
//                     }}
//                   />
//                   <Button
//                     variant="contained"
//                     sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
//                     onClick={handleAddSector}
//                   >
//                     Add
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* View Project List Button */}
//           <div className="flex justify-center mt-2">
//             <button
//               onClick={handleViewProjectList}
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             >
//               View Project List
//             </button>
//           </div>

//         </div>
//         <div className="container">
//           <h2 className="text-2xl font-bold text-gray-900 mt-0 text-center">Project List</h2>
//           <ProjectList projectList={setProjectList} onEditProject={handleEditProject} />
        
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddProject1;





// for edit 

import React, { useState, useEffect, useRef } from "react";
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";
import ProjectList from "./projectlist";
import { Plus, Upload, X, CheckCircle, Trash, Edit, FilePlus, MapPinned } from "lucide-react"; // Added Edit icon
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Box, Typography, Grid, Paper, Divider, IconButton } from '@mui/material';
import Table from "../Table/table";

const AddProject1 = () => {
  const [formData, setFormData] = useState({
    project_name: "",
    sector: "",
    cost: "",
    status: "",
    country: "",
    state: "",
    city: "",
    start: null,
    finish: null,
    contractor: "",
    kmlFile: null,
    documentFile: null,
    
  });

  const [projectList, setProjectList] = useState([
    {
      project_name: "Project A",
      sector: "Construction",
      cost: 1000000,
      status: "Under-Construction",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      start: "2023-01-01",
      finish: "2024-01-01",
      contractor: "ABC Contractors",
      kmlFile: null,
    },
    {
      project_name: "Project B",
      sector: "Retail",
      cost: 500000,
      status: "Constructed",
      country: "United States",
      state: "Texas",
      city: "Houston",
      start: "2022-06-01",
      finish: "2023-06-01",
      contractor: "XYZ Builders",
      kmlFile: null,
    },
  ]);

  const [sectors, setSectors] = useState(["Construction", "Retail", "Infrastructure", "Education", "Commercial"]);
  const [newSector, setNewSector] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); // New state for update modal
  const [shakeFields, setShakeFields] = useState([]);
  const [sectorError, setSectorError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [fileName, setFileName] = useState(''); // Track the index of the project being edited
  const navigate = useNavigate();


  // Ref for the form
  const formRef = useRef(null);

  // Shake animation cleanup
  useEffect(() => {
    if (shakeFields.length > 0) {
      const timer = setTimeout(() => setShakeFields([]), 500);
      return () => clearTimeout(timer);
    }
  }, [shakeFields]);

  const handleAddSector = () => {
    if (newSector.trim() && !sectors.includes(newSector.trim())) {
      setSectors((prev) => [...prev, newSector.trim()]);
      setNewSector("");
      setShowModal(false);
      setSectorError("");
    } else {
      setSectorError("Sector already exists or invalid input!");
      setShakeFields(["sector"]);
    }
  };

  const handleDeleteSector = (sectorToDelete) => {
    setSectors((prev) => prev.filter((sector) => sector !== sectorToDelete));
    if (formData.sector === sectorToDelete) {
      setFormData({ ...formData, sector: "" }); // Clear the selected sector if it's deleted
    }
  };

  const companyId = '67ce66294f28f85e4ff91e2c'


  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "kmlFile") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (name === "documentFile") {
      const file = files[0];
      if (file) setFileName(file.name); // Display uploaded file name
    } else if (name === "country") {
      setFormData({
        ...formData,
        [name]: value,
        state: "",
        city: "",
      });
    } else if (name === "state") {
      setFormData({
        ...formData,
        [name]: value,
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    const emptyFields = Object.entries(formData)
      .filter(([key, value]) => {
        if (key === "start" || key === "finish") {
          return value === null;
        }
        return value === "";
      })
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setShakeFields(emptyFields);
      return;
    }

    try {
      const payload = {
        ...formData,
        start: formData.start?.toISOString().split("T")[0],  // Convert date to proper format
        finish: formData.finish?.toISOString().split("T")[0] // Convert date to proper format
      };

      const response = await axios.post(
        'http://localhost:3002/api/project/createProject',
        payload, // Ensure form data is passed
        {
          headers: {
            'x-company-id': companyId,
            'Content-Type': 'application/json', // Important for JSON data
          }
        }
      );

      console.log('Project created successfully:', response.data);
      setProjectList([...projectList, response.data.project]);
      setShowSuccessModal(true);

    } catch (error) {
      console.error('Error submitting project:', error.response?.data || error.message);
    }

    // Reset form
    setFormData({
      project_name: "",
      sector: "",
      cost: "",
      status: "",
      country: "",
      state: "",
      city: "",
      start: null,
      finish: null,
      contractor: "",
      kmlFile: null,
      documentFile: null,
    });
  };


  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const shouldShake = (fieldName) => {
    return shakeFields.includes(fieldName) ? "animate-shake" : "";
  };

  const getCountryCode = (countryName) => {
    const country = Country.getAllCountries().find((c) => c.name === countryName);
    return country ? country.isoCode : "";
  };

  const getStateCode = (stateName, countryCode) => {
    const state = State.getStatesOfCountry(countryCode).find((s) => s.name === stateName);
    return state ? state.isoCode : "";
  };

  const handleViewProjectList = () => {
    localStorage.setItem("projectList", JSON.stringify(projectList));
    navigate('/projectlist');
  };

  const handleEditProject = (index) => {
    const projectToEdit = projectList[index];
    setFormData({
      ...projectToEdit,
      start: projectToEdit.start ? new Date(projectToEdit.start) : null,
      finish: projectToEdit.finish ? new Date(projectToEdit.finish) : null,
    });
    setEditingIndex(index); // Set the index of the project being edited

    // Scroll to the form when edit is clicked
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="containerr"
        style={{
          width: '100%',
          height: '100vh',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>

        <div className="p-6 max-w-3xl mx-auto font-sans bg-gray-100 min-h-screen">
          <style>
            {`
              @keyframes shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(5px); }
                75% { transform: translateX(-5px); }
                100% { transform: translateX(0); }
              }
              .animate-shake {
                animation: shake 0.3s ease-in-out;
              }
            `}
          </style>
          <Box display="flex" justifyContent="center" alignItems="flex-start" p={4} ref={formRef}>
            <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
              <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
                Add Project
              </Typography>
              <Divider sx={{ my: 3 }} />
              <form onSubmit={handleSubmit} autoComplete="off" >
                <Grid container spacing={2.5}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Project Name"
                      fullWidth
                      size="small"
                      name="project_name"
                      value={formData.project_name}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("project_name")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("project_name"),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                    <TextField
                      label="Sector"
                      select
                      fullWidth
                      size="small"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("sector")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("sector"),
                      }}
                      SelectProps={{
                        renderValue: (selected) => selected, // Only show the selected value, no cross icon
                      }}
                    >
                      <MenuItem value="">Select Sector</MenuItem>
                      {sectors.map((sector, index) => (
                        <MenuItem key={index} value={sector}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                            {sector}
                            <IconButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteSector(sector);
                              }}
                              size="small"
                            >
                              <X size={16} />
                            </IconButton>
                          </Box>
                        </MenuItem>
                      ))}
                    </TextField>
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: '5px',
                        right: '-15px',
                        backgroundColor: 'white',
                        width: 28,
                        height: 28,
                        boxShadow: 2,
                      }}
                      onClick={() => setShowModal(true)}
                    >
                      <Plus size={16} />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Cost (INR)"
                      type="number"
                      fullWidth
                      size="small"
                      name="cost"
                      value={formData.cost}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("cost")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("cost"),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Status"
                      select
                      fullWidth
                      size="small"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("status")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("status"),
                      }}
                    >
                      <MenuItem value="">Select Status</MenuItem>
                      <MenuItem value="Conceptual">Conceptual</MenuItem>
                      <MenuItem value="DPR">DPR</MenuItem>
                      <MenuItem value="Tender">Tender</MenuItem>
                      <MenuItem value="Under-Construction">Under-Construction</MenuItem>
                      <MenuItem value="Constructed">Constructed</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Country"
                      select
                      fullWidth
                      size="small"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("country")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("country"),
                      }}
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      {Country.getAllCountries().map((country) => (
                        <MenuItem key={country.isoCode} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="State"
                      select
                      fullWidth
                      size="small"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("state")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("state"),
                      }}
                    >
                      <MenuItem value="">Select State</MenuItem>
                      {State.getStatesOfCountry(getCountryCode(formData.country)).map((state) => (
                        <MenuItem key={state.isoCode} value={state.name}>
                          {state.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="City"
                      select
                      fullWidth
                      size="small"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("city")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("city"),
                      }}
                    >
                      <MenuItem value="">Select City</MenuItem>
                      {City.getCitiesOfState(getCountryCode(formData.country), getStateCode(formData.state, getCountryCode(formData.country))).map((city) => (
                        <MenuItem key={city.name} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Contractor"
                      fullWidth
                      size="small"
                      name="contractor"
                      value={formData.contractor}
                      onChange={handleChange}
                      variant="outlined"
                      className={shouldShake("contractor")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("contractor"),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Start Date"
                      type="date"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      name="start"
                      value={formData.start ? formData.start.toISOString().split('T')[0] : ""}
                      onChange={(e) => handleDateChange(new Date(e.target.value), "start")}
                      variant="outlined"
                      className={shouldShake("start")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("start"),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Finish Date"
                      type="date"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      name="finish"
                      value={formData.finish ? formData.finish.toISOString().split('T')[0] : ""}
                      onChange={(e) => handleDateChange(new Date(e.target.value), "finish")}
                      variant="outlined"
                      className={shouldShake("finish")}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.animate-shake fieldset': {
                            borderColor: 'red',
                          },
                        },
                      }}
                      InputProps={{
                        className: shouldShake("finish"),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      fullWidth
                      variant="outlined"
                      sx={{ mt: 2, py: 1, border: '1px dashed #3b82f6', color: '#3b82f6', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, position: 'relative' }}
                    >
                      <MapPinned size={20} style={{ marginRight: '8px' }} />
                      Upload KML File
                      <input
                        type="file"
                        name="kmlFile"
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        accept=".kml"
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      fullWidth
                      variant="outlined"
                      sx={{
                        mt: 2,
                        py: 1,
                        border: '1px dashed #3b82f6',
                        color: '#3b82f6',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        borderRadius: 3,
                        position: 'relative',
                      }}
                    >
                      <FilePlus size={20} style={{ marginRight: '8px' }} />
                      Upload Document
                      <input
                        type="file"
                        name="documentFile"
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        accept=".pdf,.doc,.docx"
                      />
                    </Button>
                    {fileName && (
                      <div className="flex justify-center items-center">
                        <Typography sx={{ color: '#3b82f6', fontWeight: 'medium' }}>
                          {fileName}
                        </Typography>
                      </div>

                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>

          {/* Success Modal */}
          {showSuccessModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeSuccessModal}
            >
              <div
                className="bg-white rounded-lg p-8 w-96 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeSuccessModal}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
                  <p className="text-gray-600 text-center">
                    Your project has been successfully submitted.
                  </p>
                  <p className="text-gray-600 text-center mt-2">
                    If you want to see the project list, click on the "View Project List" button below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Update Modal */}
          {showUpdateModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeUpdateModal}
            >
              <div
                className="bg-white rounded-lg p-8 w-96 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeUpdateModal}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center">
                  <Edit className="w-12 h-12 text-blue-500 mb-4" /> {/* Update icon */}
                  <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
                  <p className="text-gray-600 text-center">
                    Your project has been successfully updated.
                  </p>
                  <p className="text-gray-600 text-center mt-2">
                    If you want to see the project list, click on the "View Project List" button below.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Add Sector Modal */}
          {showModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowModal(false)}
            >
              <div
                className="bg-white rounded-lg p-8 w-96 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-4">Add New Sector</h2>
                  <TextField
                    autoComplete="off"
                    label="New Sector"
                    fullWidth
                    size="small"
                    value={newSector}
                    onChange={(e) => setNewSector(e.target.value)}
                    variant="outlined"
                    className={shouldShake("sector")}
                    error={!!sectorError}
                    helperText={sectorError}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.animate-shake fieldset': {
                          borderColor: 'red',
                        },
                      },
                    }}
                    InputProps={{
                      className: shouldShake("sector"),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                    onClick={handleAddSector}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* View Project List Button */}
          <div className="flex justify-center mt-2">
            <button
              onClick={handleViewProjectList}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              View Project List
            </button>
          </div>

        </div>
      
      </div>
    </>
  );
};

export default AddProject1;
