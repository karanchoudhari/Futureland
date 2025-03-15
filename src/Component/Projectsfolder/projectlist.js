// import React from 'react';

// const ProjectList = ({ projectList }) => {
//   return (
//     <table style={{ width: "100%", borderCollapse: "collapse" }}>
//       <thead>
//         <tr>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Project Name</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sector</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Cost</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>State</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Start Date</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Finish Date</th>
//           <th style={{ border: "1px solid #ddd", padding: "8px" }}>Contractor</th>
//         </tr>
//       </thead>
//       <tbody>
//         {projectList.map((project, index) => (
//           <tr key={index}>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.project_name}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.sector}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.cost}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.status}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.state}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.city}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.start}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.finish}</td>
//             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{project.contractor}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ProjectList;



// import React, { useState } from 'react';

// const ProjectList = ({ projectList }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3;

//   // Calculate total pages
//   const totalPages = Math.ceil(projectList.length / projectsPerPage);

//   // Get current projects
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
//   const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

//   return (
//     <div className='container'>
//       <table style={{ width: '100%', borderCollapse: 'collapse', overflowY: 'auto',
//       scrollbarWidth: 'none', }} className='hide-scroll'>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Project Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sector</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Cost</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Finish Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Contractor</th>
      
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.map((project, index) => (
//             <tr key={index}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.project_name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.sector}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.cost}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.status}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.state}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.city}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.start}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.finish}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.contractor}</td>
        
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination Controls */}
//       <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             style={{
//               margin: '5px',
//               padding: '8px',
//               cursor: 'pointer',
//               backgroundColor: currentPage === index + 1 ? '#007bff' : '#ddd',
//               color: currentPage === index + 1 ? '#fff' : '#000',
//               border: 'none',
//               borderRadius: '4px',
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === totalPages ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectList;


// import React, { useState } from 'react';

// const ProjectList = ({ projectList }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3;

//   // Calculate total pages
//   const totalPages = Math.ceil(projectList.length / projectsPerPage);

//   // Get current projects
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   // Format cost in Indian Rupees (INR)
//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
//   const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

//   return (
//     <div className='container'>
//       <table style={{ width: '100%', borderCollapse: 'collapse', overflowY: 'auto', scrollbarWidth: 'none' }} className='hide-scroll'>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Project Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sector</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Cost</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Finish Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Contractor</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>KML File</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.map((project, index) => (
//             <tr key={index}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.project_name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.sector}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 {formatCost(project.cost)} {/* Format the cost */}
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.status}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.state}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.city}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.start}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.finish}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.contractor}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 {project.kmlFile ? project.kmlFile.name : "No KML file"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination Controls */}
//       <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             style={{
//               margin: '5px',
//               padding: '8px',
//               cursor: 'pointer',
//               backgroundColor: currentPage === index + 1 ? '#007bff' : '#ddd',
//               color: currentPage === index + 1 ? '#fff' : '#000',
//               border: 'none',
//               borderRadius: '4px',
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === totalPages ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectList;






// this code is use for main code 
// import React, { useState } from 'react';



// const ProjectList = ({ projectList }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3;

//   // Calculate total pages
//   const totalPages = Math.ceil(projectList.length / projectsPerPage);

//   // Get current projects
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   // Format cost in Indian Rupees (INR)
//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
//   const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));





//   return (
//     <div className='container'>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Project Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sector</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Cost</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Finish Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Contractor</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>KML File</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.map((project, index) => (
//             <tr key={index}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.project_name} </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.sector}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatCost(project.cost)}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.status}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.state}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.city}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.start}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.finish}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.contractor}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 {project.kmlFile ? project.kmlFile.name : "No KML file"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination Controls */}
//       <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             style={{
//               margin: '5px',
//               padding: '8px',
//               cursor: 'pointer',
//               backgroundColor: currentPage === index + 1 ? '#007bff' : '#ddd',
//               color: currentPage === index + 1 ? '#fff' : '#000',
//               border: 'none',
//               borderRadius: '4px',
//             }}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           style={{
//             margin: '5px',
//             padding: '8px',
//             cursor: 'pointer',
//             backgroundColor: currentPage === totalPages ? '#ccc' : '#007bff',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectList;

// import React, { useState } from 'react';

// const ProjectList = ({ projectList = [] }) => {  // Ensure projectList has a default empty array
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 3;

//   // Prevent errors if projectList is empty
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   // Get current projects
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   // Format cost in Indian Rupees (INR)
//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
//   const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

//   return (
//     <div className='container'>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Project Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sector</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Cost</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Country</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>City</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Finish Date</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Contractor</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>KML File</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProjects.length > 0 ? (
//             currentProjects.map((project, index) => (
//               <tr key={index}>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.project_name}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.sector}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatCost(project.cost)}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.status}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.country}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.state}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.city}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   {project.start ? new Date(project.start).toLocaleDateString() : "N/A"}
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   {project.finish ? new Date(project.finish).toLocaleDateString() : "N/A"}
//                 </td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{project.contractor}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                   {project.kmlFile ? project.kmlFile.name : "No KML file"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="11" style={{ textAlign: 'center', padding: '20px' }}>
//                 No projects available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
      
//       {/* Pagination Controls */}
//       {projectList.length > 0 && (
//         <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <button
//             onClick={prevPage}
//             disabled={currentPage === 1}
//             style={{
//               margin: '5px',
//               padding: '8px',
//               cursor: 'pointer',
//               backgroundColor: currentPage === 1 ? '#ccc' : '#007bff',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//             }}
//           >
//             Prev
//           </button>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               style={{
//                 margin: '5px',
//                 padding: '8px',
//                 cursor: 'pointer',
//                 backgroundColor: currentPage === index + 1 ? '#007bff' : '#ddd',
//                 color: currentPage === index + 1 ? '#fff' : '#000',
//                 border: 'none',
//                 borderRadius: '4px',
//               }}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={nextPage}
//             disabled={currentPage === totalPages}
//             style={{
//               margin: '5px',
//               padding: '8px',
//               cursor: 'pointer',
//               backgroundColor: currentPage === totalPages ? '#ccc' : '#007bff',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//             }}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectList;

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash, Save } from 'lucide-react';

// const ProjectList = ({ projectList = [] }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedProject, setEditedProject] = useState({});
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const projectsPerPage = 3;
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleEditClick = (index, project) => {
//     setEditingIndex(index);
//     setEditedProject({ ...project });
//   };

//   const handleSaveClick = (index) => {
//     projectList[indexOfFirstProject + index] = editedProject;
//     setEditingIndex(null);
//     setEditedProject({});
//   };

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     projectList.splice(deleteIndex, 1);
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   const handleInputChange = (e, field) => {
//     setEditedProject({ ...editedProject, [field]: e.target.value });
//   };

//   return (
//     <div className="container">
//       <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {editingIndex === index ? (
//                         <TextField
//                           value={editedProject[key] || ''}
//                           onChange={(e) => handleInputChange(e, key)}
//                         />
//                       ) : (
//                         key === 'cost' ? formatCost(project[key]) : 
//                         key === 'start' || key === 'finish' ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A') :
//                         project[key]
//                       )}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     {editingIndex === index ? (
//                       <IconButton color="primary" onClick={() => handleSaveClick(index)}>
//                         <Save size={20} />
//                       </IconButton>
//                     ) : (
//                       <IconButton color="primary" onClick={() => handleEditClick(index, project)}>
//                         <Pencil size={20} />
//                       </IconButton>
//                     )}
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {projectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           <Typography variant="h6" component="h2">
//             Are you sure you want to delete this project?
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
//             <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;



// use this code if get any error 
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash, Save } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const projectsPerPage = 3;
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     projectList.splice(deleteIndex, 1);
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="container">
//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {key === 'cost'
//                         ? formatCost(project[key])
//                         : key === 'start' || key === 'finish'
//                         ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A')
//                         : key === 'kmlFile' && project[key] instanceof File
//                         ? project[key].name
//                         : project[key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {projectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           <Typography variant="h6" component="h2">
//             Are you sure you want to delete this project?
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
//             <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
//             <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;
// use this code if get any error 





// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash, Save } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const projectsPerPage = 3;
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     projectList.splice(deleteIndex, 1);
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="container">
//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {key === 'cost'
//                         ? formatCost(project[key])
//                         : key === 'start' || key === 'finish'
//                         ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A')
//                         : key === 'kmlFile' && project[key] instanceof File
//                         ? project[key].name
//                         : project[key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {projectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => setDeleteModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               color="error"
//               onClick={handleDeleteConfirm}
//             >
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash, Save } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const projectsPerPage = 3;
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     projectList.splice(deleteIndex, 1);
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="container">
//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {key === 'cost'
//                         ? formatCost(project[key])
//                         : key === 'start' || key === 'finish'
//                         ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A')
//                         : key === 'kmlFile' && project[key] instanceof File
//                         ? project[key].name
//                         : project[key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {projectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => setDeleteModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               color="error"
//               onClick={handleDeleteConfirm}
//             >
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;



// api 
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash, Save } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const projectsPerPage = 3;
//   const totalPages = projectList.length > 0 ? Math.ceil(projectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);
//   };

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     projectList.splice(deleteIndex, 1);
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="container">
//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {key === 'cost'
//                         ? formatCost(project[key])
//                         : key === 'start' || key === 'finish'
//                         ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A')
//                         : key === 'kmlFile' && project[key] instanceof File
//                         ? project[key].name
//                         : project[key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {projectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => setDeleteModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               color="error"
//               onClick={handleDeleteConfirm}
//             >
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;




// test api 
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Pagination, TextField, Modal, Box, Button } from '@mui/material';
// import { Pencil, Trash } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject, onDeleteProject }) => {
//   const safeProjectList = Array.isArray(projectList) ? projectList : [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);

//   const projectsPerPage = 3;
//   const totalPages = safeProjectList.length > 0 ? Math.ceil(safeProjectList.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = safeProjectList.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) =>
//     new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (typeof onDeleteProject === 'function') {
//       onDeleteProject(deleteIndex);
//     }
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="container">
//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {['Project Name', 'Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Finish Date', 'Contractor', 'KML File', 'Action'].map((header) => (
//                 <TableCell key={header} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   {header}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {Object.keys(project).map((key) => (
//                     <TableCell key={key}>
//                       {key === 'cost'
//                         ? formatCost(project[key])
//                         : key === 'start' || key === 'finish'
//                         ? (project[key] ? new Date(project[key]).toLocaleDateString() : 'N/A')
//                         : key === 'kmlFile'
//                         ? (project[key] instanceof File ? project[key].name : project[key] || 'N/A')
//                         : project[key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={12} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {safeProjectList.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button variant="contained" color="primary" onClick={() => setDeleteModalOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectList;
// api end 

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Typography,
//   Pagination,
//   Modal,
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   TextField,
//   Chip,
// } from '@mui/material';
// import { Pencil, Trash, Filter, X } from 'lucide-react';

// const ProjectList = ({ projectList = [], onEditProject, onDeleteProject }) => {
//   const safeProjectList = Array.isArray(projectList) ? projectList : [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [activeFilterField, setActiveFilterField] = useState(null);
//   const [filters, setFilters] = useState({});
//   const [filteredProjects, setFilteredProjects] = useState(safeProjectList);
//   const [searchValue, setSearchValue] = useState('');

//   const projectsPerPage = 3;
//   const totalPages = filteredProjects.length > 0 ? Math.ceil(filteredProjects.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) =>
//     new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (typeof onDeleteProject === 'function') {
//       onDeleteProject(deleteIndex);
//     }
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   const handleFilterClick = (event, field) => {
//     setActiveFilterField(field);
//     setFilterAnchorEl(event.currentTarget);
//     setSearchValue(filters[field] || ''); // Populate search input with current filter value
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//     setActiveFilterField(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleFilter = (field, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [field]: value,
//     }));
//     setSearchValue(value); // Update search input with selected value
//   };

//   const removeFilter = (field) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       delete updatedFilters[field];
//       return updatedFilters;
//     });

//     // Reapply filters after removing one
//     const updatedFilters = { ...filters };
//     delete updatedFilters[field];

//     if (Object.keys(updatedFilters).length === 0) {
//       // If no filters are left, reset the table to show all projects
//       setFilteredProjects(safeProjectList);
//     } else {
//       // Apply the remaining filters
//       const filtered = safeProjectList.filter((project) => {
//         return Object.keys(updatedFilters).every((key) => {
//           if (!updatedFilters[key]) return true; // If no filter is applied, include the project
//           const projectValue = project[key];
//           if (typeof projectValue === 'number') {
//             return projectValue.toString().includes(updatedFilters[key]);
//           }
//           return String(projectValue).toLowerCase().includes(updatedFilters[key].toLowerCase());
//         });
//       });
//       setFilteredProjects(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const applyFilters = () => {
//     const filtered = safeProjectList.filter((project) => {
//       return Object.keys(filters).every((key) => {
//         if (!filters[key]) return true; // If no filter is applied, include the project
//         const projectValue = project[key];
//         if (typeof projectValue === 'number') {
//           return projectValue.toString().includes(filters[key]);
//         }
//         return String(projectValue).toLowerCase().includes(filters[key].toLowerCase());
//       });
//     });
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const clearFilters = () => {
//     setFilters({});
//     setFilteredProjects(safeProjectList);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const getUniqueValues = (field) => {
//     const uniqueValues = new Set();
//     safeProjectList.forEach((project) => {
//       const value = project[field];
//       if (value !== undefined && value !== null) {
//         uniqueValues.add(value);
//       }
//     });
//     return Array.from(uniqueValues).filter((value) => {
//       if (typeof value === 'number') {
//         return value.toString().includes(searchValue);
//       }
//       return String(value).toLowerCase().includes(searchValue.toLowerCase());
//     });
//   };

//   const columns = [
//     { key: 'project_name', label: 'Project Name' },
//     { key: 'sector', label: 'Sector' },
//     { key: 'cost', label: 'Cost (INR)' },
//     { key: 'stage', label: 'Stage' },
//     { key: 'country', label: 'Country' },
//     { key: 'state', label: 'State' },
//     { key: 'city', label: 'City' },
//     { key: 'start', label: 'Start' },
//     { key: 'finish', label: 'Finish' },
//     { key: 'contractor', label: 'Contractor' },
//   ];

//   return (
//     <div className="container">
//       {/* Filter Chips */}
//       <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
//         {Object.keys(filters).map((field) => (
//           <Chip
//             key={field}
//             label={filters[field]}
//             onDelete={() => removeFilter(field)}
//             sx={{ backgroundColor: '#e0e0e0', borderRadius: '16px' }}
//           />
//         ))}
//       </Box>

//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.key} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     {column.label}
//                     <IconButton size="small" onClick={(e) => handleFilterClick(e, column.key)}>
//                       <Filter size={16} />
//                     </IconButton>
//                   </Box>
//                 </TableCell>
//               ))}
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>KML File</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell key={column.key}>
//                       {column.key === 'cost'
//                         ? formatCost(project[column.key])
//                         : column.key === 'start' || column.key === 'finish'
//                         ? (project[column.key] ? new Date(project[column.key]).toLocaleDateString() : 'N/A')
//                         : project[column.key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     {project.kmlFile instanceof File ? project.kmlFile.name : project.kmlFile || 'N/A'}
//                   </TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length + 2} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {filteredProjects.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button variant="contained" color="primary" onClick={() => setDeleteModalOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={handleFilterClose}
//         sx={{ mt: 1 }}
//       >
//         <Box sx={{ p: 2, width: 300 }}>
//           <TextField
//             fullWidth
//             placeholder={`Search ${activeFilterField}`}
//             value={searchValue}
//             onChange={handleSearchChange}
//             size="small"
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
//             {getUniqueValues(activeFilterField).map((value, index) => (
//               <MenuItem
//                 key={index}
//                 onClick={() => handleFilter(activeFilterField, value)}
//                 sx={{ fontSize: '14px' }}
//               >
//                 {value}
//               </MenuItem>
//             ))}
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//             <Button variant="contained" size="small" onClick={applyFilters}>
//               Apply
//             </Button>
//             <Button variant="outlined" size="small" onClick={clearFilters}>
//               Clear
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </div>
//   );
// };

// export default ProjectList;





// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Typography,
//   Pagination,
//   Modal,
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   TextField,
//   Chip,
// } from '@mui/material';
// import { Pencil, Trash, Filter, X } from 'lucide-react';
// import axios from 'axios';

// const ProjectList = ({ projectList = [], onEditProject, onDeleteProject }) => {
//   const safeProjectList = Array.isArray(projectList) ? projectList : [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [activeFilterField, setActiveFilterField] = useState(null);
//   const [filters, setFilters] = useState({});
//   const [filteredProjects, setFilteredProjects] = useState(safeProjectList);
//   const [searchValue, setSearchValue] = useState('');

//   const projectsPerPage = 3;
//   const totalPages = filteredProjects.length > 0 ? Math.ceil(filteredProjects.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) =>
//     new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (typeof onDeleteProject === 'function') {
//       onDeleteProject(deleteIndex);
//     }
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };


//   const [projectlist , setProjectlist]=  useState(null);


//   useEffect( ()=>{
//    async function callapiforprojecta(){
//     try {
//       const response = await axios.get('http://localhost:3002/api/project/allProjects', {
//         headers: {
//           'x-company-id': '67ce66294f28f85e4ff91e2c'
//         }
//       });
//       setProjectlist(response.data.data);
//       // setTimeout(() => {
//       //   console.log("sgtate project data ",projectList)
//       // }, 2000);
//       console.log(`ye hai project show kane ka ${JSON.stringify(response)}`)
//     } catch (error) {
      
//     }
//    }



//    callapiforprojecta()
//   },[])





//   const handleFilterClick = (event, field) => {
//     setActiveFilterField(field);
//     setFilterAnchorEl(event.currentTarget);
//     setSearchValue(filters[field] || ''); // Populate search input with current filter value
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//     setActiveFilterField(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleFilter = (field, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [field]: value,
//     }));
//     setSearchValue(value); // Update search input with selected value
//   };

//   const removeFilter = (field) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       delete updatedFilters[field];
//       return updatedFilters;
//     });

//     // Reapply filters after removing one
//     const updatedFilters = { ...filters };
//     delete updatedFilters[field];

//     if (Object.keys(updatedFilters).length === 0) {
//       // If no filters are left, reset the table to show all projects
//       setFilteredProjects(safeProjectList);
//     } else {
//       // Apply the remaining filters
//       const filtered = safeProjectList.filter((project) => {
//         return Object.keys(updatedFilters).every((key) => {
//           if (!updatedFilters[key]) return true; // If no filter is applied, include the project
//           const projectValue = project[key];
//           if (typeof projectValue === 'number') {
//             return projectValue.toString().includes(updatedFilters[key]);
//           }
//           return String(projectValue).toLowerCase().includes(updatedFilters[key].toLowerCase());
//         });
//       });
//       setFilteredProjects(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const applyFilters = () => {
//     const filtered = safeProjectList.filter((project) => {
//       return Object.keys(filters).every((key) => {
//         if (!filters[key]) return true; // If no filter is applied, include the project
//         const projectValue = project[key];
//         if (typeof projectValue === 'number') {
//           return projectValue.toString().includes(filters[key]);
//         }
//         return String(projectValue).toLowerCase().includes(filters[key].toLowerCase());
//       });
//     });
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const clearFilters = () => {
//     setFilters({});
//     setFilteredProjects(safeProjectList);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const getUniqueValues = (field) => {
//     const uniqueValues = new Set();
//     safeProjectList.forEach((project) => {
//       const value = project[field];
//       if (value !== undefined && value !== null) {
//         uniqueValues.add(value);
//       }
//     });
//     return Array.from(uniqueValues).filter((value) => {
//       if (typeof value === 'number') {
//         return value.toString().includes(searchValue);
//       }
//       return String(value).toLowerCase().includes(searchValue.toLowerCase());
//     });
//   };

//   const columns = [
//     { key: 'project_name', label: 'Project Name' },
//     { key: 'sector', label: 'Sector' },
//     { key: 'cost', label: 'Cost (INR)' },
//     { key: 'stage', label: 'Stage' },
//     { key: 'country', label: 'Country' },
//     { key: 'state', label: 'State' },
//     { key: 'city', label: 'City' },
//     { key: 'start', label: 'Start' },
//     { key: 'finish', label: 'Finish' },
//     { key: 'contractor', label: 'Contractor' },
//   ];

//   return (
//     <div className="container">
//       {/* Filter Chips */}
//       <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
//         {Object.keys(filters).map((field) => (
//           <Chip
//             key={field}
//             label={filters[field]}
//             onDelete={() => removeFilter(field)}
//             sx={{ backgroundColor: '#e0e0e0', borderRadius: '16px' }}
//           />
//         ))}
//       </Box>

//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.key} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     {column.label}
//                     <IconButton size="small" onClick={(e) => handleFilterClick(e, column.key)}>
//                       <Filter size={16} />
//                     </IconButton>
//                   </Box>
//                 </TableCell>
//               ))}
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>KML File</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell key={column.key}>
//                       {column.key === 'cost'
//                         ? formatCost(project[column.key])
//                         : column.key === 'start' || column.key === 'finish'
//                         ? (project[column.key] ? new Date(project[column.key]).toLocaleDateString() : 'N/A')
//                         : project[column.key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     {project.kmlFile instanceof File ? project.kmlFile.name : project.kmlFile || 'N/A'}
//                   </TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length + 2} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {filteredProjects.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button variant="contained" color="primary" onClick={() => setDeleteModalOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={handleFilterClose}
//         sx={{ mt: 1 }}
//       >
//         <Box sx={{ p: 2, width: 300 }}>
//           <TextField
//             fullWidth
//             placeholder={`Search ${activeFilterField}`}
//             value={searchValue}
//             onChange={handleSearchChange}
//             size="small"
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
//             {getUniqueValues(activeFilterField).map((value, index) => (
//               <MenuItem
//                 key={index}
//                 onClick={() => handleFilter(activeFilterField, value)}
//                 sx={{ fontSize: '14px' }}
//               >
//                 {value}
//               </MenuItem>
//             ))}
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//             <Button variant="contained" size="small" onClick={applyFilters}>
//               Apply
//             </Button>
//             <Button variant="outlined" size="small" onClick={clearFilters}>
//               Clear
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </div>
//   );
// };

// export default ProjectList;







// import React, { useEffect, useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Typography,
//   Pagination,
//   Modal,
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   TextField,
//   Chip,
// } from '@mui/material';
// import { Pencil, Trash, Filter, X } from 'lucide-react';
// import axios from 'axios';

// const ProjectList = ({ projectList = [], onEditProject, onDeleteProject }) => {
//   const safeProjectList = Array.isArray(projectList) ? projectList : [];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [filterAnchorEl, setFilterAnchorEl] = useState(null);
//   const [activeFilterField, setActiveFilterField] = useState(null);
//   const [filters, setFilters] = useState({});
//   const [filteredProjects, setFilteredProjects] = useState(safeProjectList);
//   const [searchValue, setSearchValue] = useState('');

//   const projectsPerPage = 3;
//   const totalPages = filteredProjects.length > 0 ? Math.ceil(filteredProjects.length / projectsPerPage) : 1;

//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

//   const formatCost = (cost) =>
//     new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//     }).format(cost);

//   const paginate = (_, page) => setCurrentPage(page);

//   const handleDeleteClick = (index) => {
//     setDeleteIndex(indexOfFirstProject + index);
//     setDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (typeof onDeleteProject === 'function') {
//       onDeleteProject(deleteIndex);
//     }
//     setDeleteModalOpen(false);
//     setDeleteIndex(null);
//   };

//   const handleFilterClick = (event, field) => {
//     setActiveFilterField(field);
//     setFilterAnchorEl(event.currentTarget);
//     setSearchValue(filters[field] || ''); // Populate search input with current filter value
//   };

//   const handleFilterClose = () => {
//     setFilterAnchorEl(null);
//     setActiveFilterField(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const handleFilter = (field, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [field]: value,
//     }));
//     setSearchValue(value); // Update search input with selected value
//   };

//   const removeFilter = (field) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters };
//       delete updatedFilters[field];
//       return updatedFilters;
//     });

//     // Reapply filters after removing one
//     const updatedFilters = { ...filters };
//     delete updatedFilters[field];

//     if (Object.keys(updatedFilters).length === 0) {
//       // If no filters are left, reset the table to show all projects
//       setFilteredProjects(safeProjectList);
//     } else {
//       // Apply the remaining filters
//       const filtered = safeProjectList.filter((project) => {
//         return Object.keys(updatedFilters).every((key) => {
//           if (!updatedFilters[key]) return true; // If no filter is applied, include the project
//           const projectValue = project[key];
//           if (typeof projectValue === 'number') {
//             return projectValue.toString().includes(updatedFilters[key]);
//           }
//           return String(projectValue).toLowerCase().includes(updatedFilters[key].toLowerCase());
//         });
//       });
//       setFilteredProjects(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const applyFilters = () => {
//     const filtered = safeProjectList.filter((project) => {
//       return Object.keys(filters).every((key) => {
//         if (!filters[key]) return true; // If no filter is applied, include the project
//         const projectValue = project[key];
//         if (typeof projectValue === 'number') {
//           return projectValue.toString().includes(filters[key]);
//         }
//         return String(projectValue).toLowerCase().includes(filters[key].toLowerCase());
//       });
//     });
//     setFilteredProjects(filtered);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const clearFilters = () => {
//     setFilters({});
//     setFilteredProjects(safeProjectList);
//     setCurrentPage(1);
//     handleFilterClose();
//   };

//   const getUniqueValues = (field) => {
//     const uniqueValues = new Set();
//     safeProjectList.forEach((project) => {
//       const value = project[field];
//       if (value !== undefined && value !== null) {
//         uniqueValues.add(value);
//       }
//     });
//     return Array.from(uniqueValues).filter((value) => {
//       if (typeof value === 'number') {
//         return value.toString().includes(searchValue);
//       }
//       return String(value).toLowerCase().includes(searchValue.toLowerCase());
//     });
//   };

//   const columns = [
//     { key: 'project_name', label: 'Project Name' },
//     { key: 'sector', label: 'Sector' },
//     { key: 'cost', label: 'Cost (INR)' },
//     { key: 'stage', label: 'Stage' },
//     { key: 'country', label: 'Country' },
//     { key: 'state', label: 'State' },
//     { key: 'city', label: 'City' },
//     { key: 'start', label: 'Start' },
//     { key: 'finish', label: 'Finish' },
//     { key: 'contractor', label: 'Contractor' },
//   ];

//   return (
//     <div className="container">
//       {/* Filter Chips */}
//       <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
//         {Object.keys(filters).map((field) => (
//           <Chip
//             key={field}
//             label={filters[field]}
//             onDelete={() => removeFilter(field)}
//             sx={{ backgroundColor: '#e0e0e0', borderRadius: '16px' }}
//           />
//         ))}
//       </Box>

//       <TableContainer
//         component={Paper}
//         elevation={3}
//         sx={{
//           borderRadius: 2,
//           overflow: 'hidden',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//           '&::-webkit-scrollbar': { display: 'none' },
//           scrollbarWidth: 'none',
//         }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.key} sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                     {column.label}
//                     <IconButton size="small" onClick={(e) => handleFilterClick(e, column.key)}>
//                       <Filter size={16} />
//                     </IconButton>
//                   </Box>
//                 </TableCell>
//               ))}
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>KML File</TableCell>
//               <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {currentProjects.length > 0 ? (
//               currentProjects.map((project, index) => (
//                 <TableRow key={index}>
//                   {columns.map((column) => (
//                     <TableCell key={column.key}>
//                       {column.key === 'cost'
//                         ? formatCost(project[column.key])
//                         : column.key === 'start' || column.key === 'finish'
//                         ? (project[column.key] ? new Date(project[column.key]).toLocaleDateString() : 'N/A')
//                         : project[column.key]}
//                     </TableCell>
//                   ))}
//                   <TableCell>
//                     {project.kmlFile instanceof File ? project.kmlFile.name : project.kmlFile || 'N/A'}
//                   </TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => onEditProject(indexOfFirstProject + index)}>
//                       <Pencil size={20} />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDeleteClick(index)}>
//                       <Trash size={20} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length + 2} align="center">
//                   <Typography variant="body1" color="textSecondary">
//                     No projects available.
//                   </Typography>
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {filteredProjects.length > 0 && (
//         <Pagination
//           count={totalPages}
//           page={currentPage}
//           onChange={paginate}
//           color="primary"
//           sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
//         />
//       )}

//       <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 420,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <Typography variant="h5" component="h2" color="error" fontWeight="bold">
//             Confirm Deletion
//           </Typography>
//           <Typography variant="body1" textAlign="center">
//             Are you sure you want to delete this project? This action cannot be undone.
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
//             <Button variant="contained" color="primary" onClick={() => setDeleteModalOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="error" onClick={handleDeleteConfirm}>
//               Delete
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       <Menu
//         anchorEl={filterAnchorEl}
//         open={Boolean(filterAnchorEl)}
//         onClose={handleFilterClose}
//         sx={{ mt: 1 }}
//       >
//         <Box sx={{ p: 2, width: 300 }}>
//           <TextField
//             fullWidth
//             placeholder={`Search ${activeFilterField}`}
//             value={searchValue}
//             onChange={handleSearchChange}
//             size="small"
//             sx={{ mb: 2 }}
//           />
//           <Box sx={{ maxHeight: 200, overflowY: 'auto', mb: 2 }}>
//             {getUniqueValues(activeFilterField).map((value, index) => (
//               <MenuItem
//                 key={index}
//                 onClick={() => handleFilter(activeFilterField, value)}
//                 sx={{ fontSize: '14px' }}
//               >
//                 {value}
//               </MenuItem>
//             ))}
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
//             <Button variant="contained" size="small" onClick={applyFilters}>
//               Apply
//             </Button>
//             <Button variant="outlined" size="small" onClick={clearFilters}>
//               Clear
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </div>
//   );
// };

// export default ProjectList;
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Filter, X, Search, Edit, Trash2, ArrowUpDown } from "lucide-react"; // Using lucide-react icons
import { useNavigate } from "react-router-dom"; // For navigation

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [sectors, setSectors] = useState(["Construction", "Retail", "Infrastructure"]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(null); // Track which filter dropdown is open
  const [searchQuery, setSearchQuery] = useState(""); // Track search query in filter dropdown
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" }); // Track sorting configuration
  const itemsPerPage = 15;
  const navigate = useNavigate(); // Initialize navigate
  const dropdownRef = useRef(null); // Ref for the dropdown

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/project/allProjects', {
          headers: {
            'x-company-id': '67ce66294f28f85e4ff91e2c'
          }
        });
        setProjectList(response.data.projects); // Assuming the response contains a 'projects' array
      } catch (error) {
        console.error('Error fetching projects:', error.response?.data || error.message);
      }
    };

    fetchProjects();
  }, []);

  // Handle project click to navigate to detail page
  const handleProjectClick = (project) => {
    navigate('/detail', { state: { project } }); // Pass the entire project object
  };

  // Handle filtering
  const handleFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    setFilterDropdown(null); // Close dropdown after selecting a filter
    setSearchQuery(""); // Reset search query
  };

  // Remove a filter
  const removeFilter = (key) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      delete newFilters[key];
      return newFilters;
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({});
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Filtered and sorted data
  const filteredData = projectList.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // No filter applied for this key
      const itemValue = item[key];
      const filterValue = filters[key];
      if (typeof itemValue === "number") {
        return itemValue === parseFloat(filterValue); // Handle numeric comparison
      }
      return String(itemValue).toLowerCase().includes(filterValue.toLowerCase());
    });
  });

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  // Get unique values for a column (limited to 4 values)
  const getUniqueValues = (key) => {
    const values = projectList.map((item) => item[key]);
    const uniqueValues = [...new Set(values)].filter((value) => {
      if (typeof value === "number") {
        return value.toString().includes(searchQuery); // Handle numeric values
      }
      return value.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return uniqueValues.slice(0, 4); // Show only 4 values
  };

  // Function to get short name for country, state, and city
  const getShortName = (value) => {
    if (value === "India") return "IN";
    if (value === "United States") return "US";
    if (value === "United Kingdom") return "UK";
    if (value === "Maharashtra") return "MH";
    if (value === "California") return "CA";
    if (value === "New York") return "NY";
    if (value === "Mumbai") return "MUM";
    if (value === "Los Angeles") return "LA";
    return value; // Default to full name if no short name is defined
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterDropdown(null); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="overflow-auto w-full h-[100vh] bg-white shadow-md rounded-md">
      <ul className="border border-gray-300 rounded-md overflow-hidden">
        {/* Table Header */}
        <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
          {[
            "project_name",
            "sector",
            "cost",
            "status",
            "country",
            "state",
            "city",
            "start",
            "finish",
            "contractor",
            "action", // Action column
          ].map((header, index) => (
            <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start relative border-r border-gray-200">
              <div className="flex items-center w-full">
                <span className="text-xs font-semibold uppercase mr-2">
                  {header.replace(/_/g, " ")}
                </span>
                {header !== "action" && (
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setFilterDropdown(header === filterDropdown ? null : header)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Filter className="w-4 h-4 text-gray-500" />
                    </button>
                    <button
                      onClick={() => handleSort(header)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                )}
              </div>
              {filterDropdown === header && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48 max-h-48 overflow-y-auto"
                >
                  <div className="p-2">
                    {/* Search Bar */}
                    <div className="flex items-center border border-gray-300 rounded-md mb-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-1 text-sm outline-none"
                      />
                      <Search className="w-4 h-4 text-gray-500 mx-1" />
                    </div>
                    {/* Filter Options */}
                    {getUniqueValues(header).map((value) => (
                      <div
                        key={value}
                        onClick={() => handleFilter(header, value)}
                        className="p-1 hover:bg-gray-100 cursor-pointer"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </li>

        {/* Applied Filters */}
        {Object.keys(filters).length > 0 && (
          <li className="flex items-center p-2 bg-gray-50 border-b border-gray-200">
            <span className="text-sm text-gray-600 mr-2">Filters:</span>
            {Object.entries(filters).map(([key, value]) => (
              <div key={key} className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
                <span>{key}: {value}</span>
                <button
                  onClick={() => removeFilter(key)}
                  className="ml-2 p-1 hover:bg-gray-300 rounded-full"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button
              onClick={resetFilters}
              className="text-sm text-blue-500 hover:underline"
            >
              Clear All
            </button>
          </li>
        )}

        {/* Table Rows */}
        {currentData.length > 0 ? (
          currentData.map((item) => (
            <li
              key={item._id}
              className="flex border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all"
              onClick={() => handleProjectClick(item)} // Navigate to detail page on row click
            >
              {[
                item.project_name,
                item.sector,
                formatCurrency(item.cost),
                item.status,
                getShortName(item.country), // Short name for country
                getShortName(item.state), // Short name for state
                getShortName(item.city), // Short name for city
                item.start,
                item.finish,
                item.contractor,
                <div key="action" className="flex space-x-2 items-center justify-center">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>, // Action buttons (pencil and trash icons)
              ].map((value, index) => (
                <div key={index} className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">
                  {value}
                </div>
              ))}
            </li>
          ))
        ) : (
          <li className="text-center py-4 text-gray-500">No data available</li>
        )}
      </ul>

      {/* Pagination */}
      <div className="flex justify-between py-4 items-center px-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-2 px-4 py-2 rounded-md bg-blue-500 text-white flex items-center disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-2 px-4 py-2 rounded-md bg-blue-500 text-white flex items-center disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectList;