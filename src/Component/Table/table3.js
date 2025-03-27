


// add new feature
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API calls
// import Speedmetre from './nestedcomponent/speedmetre';
// import Worldmapcard from './worldmapcard';
// import Locationselect from './locationselect';
// import Graph from '../Overview/graph';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});
//   const [projects, setProjects] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [sections, setSections] = useState([]); // State to store dynamic sections
//   const navigate = useNavigate();

//   // Fetch projects from the API
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/project/allProjects', {
//           headers: {
//             'x-company-id': '67ce66294f28f85e4ff91e2c'
//           }
//         });

//         // Log the API response to debug
//         console.log('API Response:', response.data);

//         // Access the `projects` array from the response
//         const projectsData = response.data.projects;

//         // Transform the API data into the required format for sections
//         const totalProjects = {
//           title: "Total Projects",
//           data: [
//             {
//               count: `${projectsData.length}+`,
//               details: projectsData.map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
//             }
//           ]
//         };

//         // Dynamically generate sectors based on the data
//         const sectorCounts = projectsData.reduce((acc, project) => {
//           acc[project.sector] = (acc[project.sector] || 0) + 1;
//           return acc;
//         }, {});

//         const sectors = {
//           title: "SECTORS",
//           data: Object.keys(sectorCounts).map(sector => ({
//             name: sector,
//             count: sectorCounts[sector],
//             details: projectsData
//               .filter(project => project.sector === sector)
//               .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
//           }))
//         };

//         // Sort projects by cost to get the biggest projects
//         const sortedByCost = projectsData.sort((a, b) => b.cost - a.cost);
//         const biggestProjects = {
//           title: "BIGGEST PROJECTS",
//           data: sortedByCost.slice(0, 5).map(project => ({
//             // name: project.project_name,
//             count: `${project.project_name} (${project.sector}-${project.state}) - $${project.cost}`, // Display project name, sector, state, and cost

//             details: [project] // Pass the entire project object
//           }))
//         };

//         // Set the sections with dynamic data
//         setSections([totalProjects, sectors, biggestProjects]);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } }); // Pass the entire project object
//   };

//   return (
//     <div
//       className="container-fluid p-3 flex-col lg:flex-row gap-5"
//       style={{
//         overflowY: 'auto',
//         height: '100%',
//         width: '100%',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none'
//       }}
//     >
//       <div style={{ width: '100%', height: 'auto' }}>
//         <div className="w-full flex flex-col gap-3">

//           {/* Total Projects Section */}
//           {sections.some(section => section.title === "Total Projects") && (
//             <div>
//               <h2 className="text-xl font-semibold mb-4 text-white uppercase">Total Projects</h2>
//               <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//                 {sections
//                   .find(section => section.title === "Total Projects")
//                   ?.data.map((item, index) => (
//                     <div key={index} className="mb-1">
//                       <button
//                         className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                         onClick={() => toggleSection("Total Projects", index)}
//                       >
//                         Total Projects - <span className="text-2xl font-bold">{item.count}</span>
//                       </button>
//                       <div
//                         style={{
//                           maxHeight: openIndex["Total Projects"] === index ? "500px" : "0px",
//                           overflow: 'hidden',
//                           transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                           background: "#f3f4f6",
//                           padding: openIndex["Total Projects"] === index ? "12px" : "0px",
//                           borderRadius: "8px",
//                           marginTop: "8px",
//                         }}
//                       >
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="border-b">
//                               <th className="text-left p-2">Project Name</th>
//                             </tr>
//                           </thead>
//                           <div className="max-h-96 overflow-y-auto">
//                             <tbody>
//                               {item.details.map((detail, idx) => (
//                                 <tr
//                                   key={idx}
//                                   className="border-b hover:bg-gray-100 cursor-pointer"
//                                   onClick={() => handleProjectClick(detail)}
//                                 >
//                                   <td className="p-2">{detail.project}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </div>
//                         </table>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//           {/* Speedometer Section */}
//           <Speedmetre />

//           {/* Location Selector Component */}
//           {/* <Locationselect onProjectsUpdate={setProjects} onCityUpdate={setSelectedCity} /> */}
//           <Graph/>

//           {/* Other Sections (excluding Total Projects) */}
//           {sections
//             .filter(section => section.title !== "Total Projects")
//             .map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//                 <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//                   {section.data.map((item, index) => (
//                     <div key={index} className="mb-1">
//                       <button
//                         className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                         onClick={() => toggleSection(section.title, index)}
//                       >
//                         {item.name} - {item.count} 
//                       </button>
//                       <div
//                         style={{
//                           maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                           overflow: 'hidden',
//                           transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                           background: "#f3f4f6",
//                           padding: openIndex[section.title] === index ? "12px" : "0px",
//                           borderRadius: "8px",
//                           marginTop: "8px",
//                         }}
//                       >
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="border-b">
//                               <th className="text-left p-2">Project Name</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
//                                 <td className="p-2">{detail.project_name}</td>
//                                 {/* <td className="p-2">{detail.sector}</td> */}
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//           {/* World Map Card */}
//           {/* <Worldmapcard /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table3;
// // add new feature


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios for API calls
// import Speedmetre from './nestedcomponent/speedmetre'; // Ensure this path is correct
// import Worldmapcard from './worldmapcard'; // Ensure this path is correct
// import Locationselect from './locationselect'; // Ensure this path is correct
// import Graph from '../Overview/graph'; // Ensure this path is correct

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});
//   const [projects, setProjects] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [sections, setSections] = useState([]); // State to store dynamic sections
//   const navigate = useNavigate();

//   // Fetch projects from the API
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/project/allProjects', {
//           headers: {
//             'x-company-id': '67ce66294f28f85e4ff91e2c'
//           }
//         });

//         // Log the API response to debug
//         console.log('API Response:', response.data);

//         // Access the `projects` array from the response
//         const projectsData = response.data.projects;

//         // Transform the API data into the required format for sections
//         const totalProjects = {
//           title: "Total Projects",
//           data: [
//             {
//               count: `${projectsData.length}+`,
//               details: projectsData.map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
//             }
//           ]
//         };

//         // Dynamically generate sectors based on the data
//         const sectorCounts = projectsData.reduce((acc, project) => {
//           acc[project.sector] = (acc[project.sector] || 0) + 1;
//           return acc;
//         }, {});

//         const sectors = {
//           title: "SECTORS",
//           data: Object.keys(sectorCounts).map(sector => ({
//             name: sector,
//             count: sectorCounts[sector],
//             details: projectsData
//               .filter(project => project.sector === sector)
//               .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
//           }))
//         };

//         // Sort projects by cost to get the biggest projects
//         const sortedByCost = projectsData.sort((a, b) => b.cost - a.cost);
//         const biggestProjects = {
//           title: "BIGGEST PROJECTS",
//           data: sortedByCost.slice(0, 5).map(project => ({
//             // Remove the hyphen from the project name
//             count: `${project.project_name} (${project.sector}-${project.state}) $${project.cost}`,
//             details: projectsData
//               .filter(p => p.project_name === project.project_name) // Include all matching projects
//               .map(p => ({ ...p, project: p.project_name })) // Pass the entire project object
//           }))
//         };

//         // Set the sections with dynamic data
//         setSections([totalProjects, sectors, biggestProjects]);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } }); // Pass the entire project object
//   };

//   return (
//     <div
//       className="container-fluid p-3 flex-col lg:flex-row gap-5"
//       style={{
//         overflowY: 'auto',
//         height: '100%',
//         width: '100%',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none'
//       }}
//     >
//       <div style={{ width: '100%', height: 'auto' }}>
//         <div className="w-full flex flex-col gap-3">

//           {/* Total Projects Section */}
//           {sections.some(section => section.title === "Total Projects") && (
//             <div>
//               <h2 className="text-xl font-semibold mb-4 text-white uppercase">Total Projects</h2>
//               <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//                 {sections
//                   .find(section => section.title === "Total Projects")
//                   ?.data.map((item, index) => (
//                     <div key={index} className="mb-1">
//                       <button
//                         className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                         onClick={() => toggleSection("Total Projects", index)}
//                       >
//                         Total Projects - <span className="text-2xl font-bold">{item.count}</span>
//                       </button>
//                       <div
//                         style={{
//                           maxHeight: openIndex["Total Projects"] === index ? "500px" : "0px",
//                           overflow: 'hidden',
//                           transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                           background: "#f3f4f6",
//                           padding: openIndex["Total Projects"] === index ? "12px" : "0px",
//                           borderRadius: "8px",
//                           marginTop: "8px",
//                         }}
//                       >
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="border-b">
//                               <th className="text-left p-2">Project Name</th>
//                             </tr>
//                           </thead>
//                           <div className="max-h-96 overflow-y-auto">
//                             <tbody>
//                               {item.details.map((detail, idx) => (
//                                 <tr
//                                   key={idx}
//                                   className="border-b hover:bg-gray-100 cursor-pointer"
//                                   onClick={() => handleProjectClick(detail)}
//                                 >
//                                   <td className="p-2">{detail.project}</td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </div>
//                         </table>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//           {/* Speedometer Section */}
//           <Speedmetre />

//           {/* Location Selector Component */}
//           {/* <Locationselect onProjectsUpdate={setProjects} onCityUpdate={setSelectedCity} /> */}
//           <Graph/>

//           {/* Other Sections (excluding Total Projects) */}
//           {sections
//             .filter(section => section.title !== "Total Projects")
//             .map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//                 <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//                   {section.data.map((item, index) => (
//                     <div key={index} className="mb-1">
//                       <button
//                         className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                         onClick={() => toggleSection(section.title, index)}
//                       >
//                         {item.name} - {item.count} 
//                       </button>
//                       <div
//                         style={{
//                           maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                           overflow: 'hidden',
//                           transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                           background: "#f3f4f6",
//                           padding: openIndex[section.title] === index ? "12px" : "0px",
//                           borderRadius: "8px",
//                           marginTop: "8px",
//                         }}
//                       >
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="border-b">
//                               <th className="text-left p-2">Project Name</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
//                                 <td className="p-2">{detail.project_name}</td>
//                                 {/* <td className="p-2">{detail.sector}</td> */}
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//           {/* World Map Card */}
//           {/* <Worldmapcard /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table3;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import Speedmetre from './nestedcomponent/speedmetre'; // Ensure this path is correct
import Graph from '../Overview/graph'; // Ensure this path is correct
import * as LucideIcons from 'lucide-react'; // Import all icons from lucide-react

const Table3 = () => {
  // State to manage which section is open
  const [openIndex, setOpenIndex] = useState({});
  
  // State to store the list of projects
  const [projects, setProjects] = useState([]);
  
  // State to store the selected city (currently unused)
  const [selectedCity, setSelectedCity] = useState('');
  
  // State to store dynamic sections for the table
  const [sections, setSections] = useState([]);
  
  // Hook to navigate between routes
  const navigate = useNavigate();

  // Mapping of sector names to Lucide icon names
  const sectorIconMapping = {
    construction: 'HardHat',
    railway: 'Train',
    infrastructure: 'Building',
    retail: 'ShoppingCart',
    commercial: 'Briefcase',
    textiles: 'Spool',
    furniture: 'Chair',
    // Add more mappings as needed
  };

  // Function to normalize sector names (remove special characters and convert to lowercase)
  const normalizeSectorName = (sector) => {
    return sector
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-zA-Z0-9]/g, '') // Remove special characters
      .replace(/\s+/g, ''); // Remove spaces
  };

  // Function to dynamically fetch an icon based on the sector name
  const getSectorIcon = (sector) => {
    // Normalize the sector name
    const normalizedSector = normalizeSectorName(sector);

    // Log the normalized sector name for debugging
    console.log('Normalized Sector:', normalizedSector);

    // Get the corresponding Lucide icon name from the mapping
    const iconName = sectorIconMapping[normalizedSector] || 'Circle'; // Fallback to 'Circle' if no mapping exists

    // Log the icon name for debugging
    console.log('Icon Name:', iconName);

    // Get the icon component from LucideIcons
    const IconComponent = LucideIcons[iconName];

    // Return the icon component with a default size of 20
    return IconComponent ? <IconComponent size={20} /> : <LucideIcons.Circle size={20} />;
  };

  // Fetch projects from the API on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch all projects from the API
        const response = await axios.get('http://localhost:3002/api/project/allProjects', {
          headers: {
            'x-company-id': '67ce66294f28f85e4ff91e2c'
          }
        });

        // Log the API response for debugging
        console.log('API Response:', response.data);

        // Access the `projects` array from the response
        const projectsData = response.data.projects;

        // Transform the API data into the required format for sections

        // Total Projects Section
        const totalProjects = {
          title: "Total Projects",
          data: [
            {
              count: `${projectsData.length}+`,
              details: projectsData.map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            }
          ]
        };

        // Dynamically generate sectors based on the data
        const sectorCounts = projectsData.reduce((acc, project) => {
          acc[project.sector] = (acc[project.sector] || 0) + 1;
          return acc;
        }, {});

        // Log the sector counts for debugging
        console.log('Sector Counts:', sectorCounts);

        // Sectors Section
        const sectors = {
          title: "SECTORS",
          data: Object.keys(sectorCounts).map(sector => ({
            name: sector,
            count: sectorCounts[sector],
            icon: getSectorIcon(sector), // Dynamically fetch icon for the sector
            details: projectsData
              .filter(project => project.sector === sector)
              .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
          }))
        };

        // Sort projects by cost to get the biggest projects
        const sortedByCost = projectsData.sort((a, b) => b.cost - a.cost);
        
        // Biggest Projects Section
        const biggestProjects = {
          title: "BIGGEST PROJECTS",
          data: sortedByCost.slice(0, 5).map(project => {
            // Log the original project name for debugging
            console.log('Original Project Name:', project.project_name);

            // Remove the hyphen from the project name
            const cleanedProjectName = project.project_name.replace(/^-/, '');

            // Log the cleaned project name for debugging
            console.log('Cleaned Project Name:', cleanedProjectName);

            return {
              // Use the cleaned project name and convert cost to Indian Rupees
              count: `${cleanedProjectName} (${project.sector}-${project.state}) ₹${(project.cost * 75).toLocaleString()}`, // Assuming 1 USD = 75 INR
              details: projectsData
                .filter(p => p.project_name === project.project_name) // Include all matching projects
                .map(p => ({ 
                  ...p, 
                  project: p.project_name.replace(/^-/, '') // Pass the entire project object with hyphen removed
                }))
            };
          })
        };

        // Log the biggestProjects data for debugging
        console.log('Biggest Projects Data:', biggestProjects);

        // Set the sections with dynamic data
        setSections([totalProjects, sectors, biggestProjects]);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Function to toggle the visibility of a section
  const toggleSection = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  // Function to handle project click and navigate to the detail page
  const handleProjectClick = (project) => {
    navigate('/detail', { state: { project } }); // Pass the entire project object
  };

  return (
    <div
      className="container-fluid p-3 flex-col lg:flex-row gap-5"
      style={{
        overflowY: 'auto',
        height: '100%',
        width: '100%',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <div style={{ width: '100%', height: 'auto' }}>
        <div className="w-full flex flex-col gap-3">

          {/* Total Projects Section */}
          {sections.some(section => section.title === "Total Projects") && (
            <div>
              {/* <h2 className="text-xl font-semibold mb-4 text-white uppercase">Total Projects</h2> */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
                {sections
                  .find(section => section.title === "Total Projects")
                  ?.data.map((item, index) => (
                    <div key={index} className="mb-1">
                      <button
                        className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
                        onClick={() => toggleSection("Total Projects", index)}
                      >
                        Total Projects - <span className="text-2xl font-bold">{item.count}</span>
                      </button>
                      <div
                        style={{
                          maxHeight: openIndex["Total Projects"] === index ? "500px" : "0px",
                          overflow: 'hidden',
                          transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
                          background: "#f3f4f6",
                          padding: openIndex["Total Projects"] === index ? "12px" : "0px",
                          borderRadius: "8px",
                          marginTop: "8px",
                        }}
                      >
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Project Name</th>
                            </tr>
                          </thead>
                          <div className="max-h-96 overflow-y-auto">
                            <tbody>
                              {item.details.map((detail, idx) => (
                                <tr
                                  key={idx}
                                  className="border-b hover:bg-gray-100 cursor-pointer"
                                  onClick={() => handleProjectClick(detail)}
                                >
                                  <td className="p-2">{detail.project}</td>
                                </tr>
                              ))}
                            </tbody>
                          </div>
                        </table>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Speedometer Section */}
          <Speedmetre />

          {/* Graph Component */}
          <Graph/>

          {/* Other Sections (excluding Total Projects) */}
          {sections
            .filter(section => section.title !== "Total Projects")
            .map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
                  {section.data.map((item, index) => (
                    <div key={index} className="mb-1">
                      <button
                        className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium flex items-center gap-2"
                        onClick={() => toggleSection(section.title, index)}
                      >
                        {item.icon} {/* Display the dynamically fetched icon */}
                        {item.name} - {item.count} 
                      </button>
                      <div
                        style={{
                          maxHeight: openIndex[section.title] === index ? "500px" : "0px",
                          overflow: 'hidden',
                          transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
                          background: "#f3f4f6",
                          padding: openIndex[section.title] === index ? "12px" : "0px",
                          borderRadius: "8px",
                          marginTop: "8px",
                        }}
                      >
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Project Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.details.map((detail, idx) => (
                              <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
                                <td className="p-2">{detail.project_name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table3;