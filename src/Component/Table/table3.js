// import React, { useState } from 'react';
// import Mapbox from '../Map/mapbox';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const sections = [
//     { title: "Sectors", data: [
//       { name: "Railway", count: 5, details: [
//         { project: "Express Line" },
//         { project: "Metro Expansion" },
//         { project: "Freight Corridor" },
//         { project: "Bullet Train" },
//         { project: "City Rail" }
//       ]},
//       { name: "Highways", count: 7, details: [
//         { project: "Golden Highway" },
//         { project: "Express Route" },
//         { project: "Ring Road" },
//         { project: "High Speed Highway" },
//         { project: "Tunnel Pass" }
//       ]}
//     ]},
//     { title: "States", data: [
//       { name: "Rajasthan", count: 5, details: [
//         { project: "Solar Park" },
//         { project: "Smart City" },
//         { project: "Wind Farm" },
//         { project: "Desert Road" },
//         { project: "Water Conservation" }
//       ]},
//       { name: "Mumbai", count: 5, details: [
//         { project: "Solar Park" },
//         { project: "Smart City" },
//         { project: "Wind Farm" },
//         { project: "Desert Road" },
//         { project: "Water Conservation" }
//       ]}
//     ]},
//     { title: "Biggest Projects", data: [
//       { name: "Mega Dam", count: 3, details: [
//         { project: "Blue River Dam" },
//         { project: "Hydro Power Plant" },
//         { project: "Irrigation Project" }
//       ]}
//     ]}
//   ];

//   return (
//     <div className="container-fluid  bg-gray-700 p-8 flex flex-col lg:flex-row gap-5" style={{overflowY:'scroll',height:'100%'}}>

//       {/* Left Section */}
//       <div style={{ width: '25%', height: 'auto' }}>
//         <div className="w-full flex flex-col gap-5">
//           {/* Collapsible Sections */}
//           {sections.map((section, sectionIdx) => (
//             <div key={sectionIdx} className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//               <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//               {section.data.map((item, index) => (
//                 <div key={index} className="mb-1">
//                   <button
//                     className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                     onClick={() => toggleSection(section.title, index)}
//                   >
//                     {item.name} - {item.count}
//                   </button>
//                   <div
//                     style={{
//                       maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                       overflow: 'hidden',
//                       transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                       background: "#f3f4f6",
//                       padding: openIndex[section.title] === index ? "12px" : "0px",
//                       borderRadius: "8px",
//                       marginTop: "8px",
//                     }}
//                   >
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Project Name</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {item.details.map((detail, idx) => (
//                           <tr key={idx} className="border-b">
//                             <td className="p-2">{detail.project}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Map */}
//       <div className="w-full lg:w-3/3 bg-gray-800 p- rounded-2xl shadow-lg  items-center justify-center h-[400px] lg:h-[400px]">
//       <Mapbox />
//       </div>
//     </div>
//   );
// };

// export default Table3;


// import React, { useState } from 'react';
// import Mapbox from '../Map/mapbox';
// import Blog from '../blog';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };


//   const Sectors = {
//       name: "Railway", count: 5, details: [
//         { project: "Express Line" },
//         { project: "Metro Expansion" },
//         { project: "Freight Corridor" },
//         { project: "Bullet Train" },
//         { project: "City Rail" }
//       ]
//   }


//   const sections = [
//     {
//       title: "Total Projects", data: [
//         {
//         count: 3, details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Sectors", data: [
//         {
//           name: "Railway", count: 5, details: [
//             { project: "Express Line" },
//             { project: "Metro Expansion" },
//             { project: "Freight Corridor" },
//             { project: "Bullet Train" },
//             { project: "City Rail" }
//           ]
//         },
//         {
//           name: "Highways", count: 7, details: [
//             { project: "Golden Highway" },
//             { project: "Express Route" },
//             { project: "Ring Road" },
//             { project: "High Speed Highway" },
//             { project: "Tunnel Pass" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "States", data: [
//         {
//           name: "Rajasthan", count: 5, details: [
//             { project: "Solar Park" },
//             { project: "Smart City" },
//             { project: "Wind Farm" },
//             { project: "Desert Road" },
//             { project: "Water Conservation" }
//           ]
//         },
//         {
//           name: "Mumbai", count: 5, details: [
//             { project: "Solar Park" },
//             { project: "Smart City" },
//             { project: "Wind Farm" },
//             { project: "Desert Road" },
//             { project: "Water Conservation" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Biggest Projects", data: [
//         {
//           name: "Mega Dam", count: 3, details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" }
//           ]
//         }
//       ]
//     },
    
//   ];

//   return (
//     <div className="container-fluid  bg-gray-700 p-8 flex flex-col lg:flex-row gap-5" style={{ overflowY: '', height: '100%' }}>

//       {/* Left Section */}
//       <div style={{ width: '25%', height: 'auto' }}>
//         <div className="w-full flex flex-col gap-3">
//           {/* Collapsible Sections */}
//           {/* <h2 className="text-xl font-semibold  text-white">Sectors</h2> */}
//           {sections.map((section, sectionIdx) => (
//             <div>
//               <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//               <div key={sectionIdx} className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">

//                 {section.data.map((item, index) => (
//                   <div key={index} className="mb-1">
//                     <button
//                       className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                       onClick={() => toggleSection(section.title, index)}
//                     >
//                       {item.name} - {item.count}
//                     </button>
//                     <div
//                       style={{
//                         maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                         overflow: 'hidden',
//                         transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                         background: "#f3f4f6",
//                         padding: openIndex[section.title] === index ? "12px" : "0px",
//                         borderRadius: "8px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       <table className="w-full text-sm">
//                         <thead>
//                           <tr className="border-b">
//                             <th className="text-left p-2">Project Name</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {item.details.map((detail, idx) => (
//                             <tr key={idx} className="border-b">
//                               <td className="p-2">{detail.project}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Map */}
//       <div className="w-full lg:w-3/3 bg-gray-800 p- rounded-2xl shadow-lg  items-center justify-center h-[400px] lg:h-[400px]">
//         <Mapbox />
//       </div>
//       {/* Right Section - Map */}
//       <div className="">
//       {/* <Blog/> */}
//       </div>

     
//     </div>
//   );
// };

// export default Table3;

// import React, { useState } from 'react';
// import Mapbox from '../Map/mapbox';
// import Blog from '../blog';
// import Speedmetre from './nestedcomponent/speedmetre';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };


//   const sections = [
//     {
//       title: "Total Projects", data: [
//         {
//           count: 3, details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Sectors", data: [
//         {
//           name: "Railway", count: 5, details: [
//             { project: "Express Line" },
//             { project: "Metro Expansion" },
//             { project: "Freight Corridor" },
//             { project: "Bullet Train" },
//             { project: "City Rail" }
//           ]
//         },
//         {
//           name: "Highways", count: 7, details: [
//             { project: "Golden Highway" },
//             { project: "Express Route" },
//             { project: "Ring Road" },
//             { project: "High Speed Highway" },
//             { project: "Tunnel Pass" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "States", data: [
//         {
//           name: "Rajasthan", count: 5, details: [
//             { project: "Solar Park" },
//             { project: "Smart City" },
//             { project: "Wind Farm" },
//             { project: "Desert Road" },
//             { project: "Water Conservation" }
//           ]
//         },
//         {
//           name: "Mumbai", count: 5, details: [
//             { project: "Solar Park" },
//             { project: "Smart City" },
//             { project: "Wind Farm" },
//             { project: "Desert Road" },
//             { project: "Water Conservation" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Biggest Projects", data: [
//         {
//           name: "Mega Dam", count: 3, details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" }
//           ]
//         }
//       ]
//     },
    
//   ];

//   return (
//     <div className="container-fluid border-l p-3  flex-col lg:flex-row gap-5" style={{ overflowY: 'scroll', height: '100%', width:'100%' }}>

//       {/* Left Section */}
//       <div style={{width:'100%',  height: 'auto' }}>
//         <div className="w-full flex flex-col gap-3">
//           {/* <span>hello</span> */}
//           {/* Collapsible Sections */}
//           {/* <h2 className="text-xl font-semibold  text-white">Sectors</h2> */}
//           <Speedmetre/>
//           {sections.map((section, sectionIdx) => (
//             <div>
//               <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//               <div key={sectionIdx} className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">

//                 {section.data.map((item, index) => (
//                   <div key={index} className="mb-1">
//                     <button
//                       className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                       onClick={() => toggleSection(section.title, index)}
//                     >
//                       {item.name} - {item.count}
//                     </button>
//                     <div
//                       style={{
//                         maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                         overflow: 'hidden',
//                         transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                         background: "#f3f4f6",
//                         padding: openIndex[section.title] === index ? "12px" : "0px",
//                         borderRadius: "8px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       <table className="w-full text-sm">
//                         <thead>
//                           <tr className="border-b">
//                             <th className="text-left p-2">Project Name</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {item.details.map((detail, idx) => (
//                             <tr key={idx} className="border-b">
//                               <td className="p-2">{detail.project}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

   
      


     
//     </div>
//   );
// };

// export default Table3;
// edited
// import React, { useState } from 'react';
// import Speedmetre from './nestedcomponent/speedmetre';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const sections = [
//     {
//       title: "Total Projects", data: [
//         { count: "540+", details: [{ project: "Blue River Dam" }, { project: "Hydro Power Plant" }, { project: "Irrigation Project" }] }
//       ]
//     },
//     {
//       title: "SECTORS", data: [
//         {
//           name: "Railway", count: 5, details: [
//             { project: "Express Line" }, { project: "Metro Expansion" },
//             { project: "Freight Corridor" }, { project: "Bullet Train" }, { project: "City Rail" }
//           ]
//         },
//         {
//           name: "Highways", count: 7, details: [
//             { project: "Golden Highway" }, { project: "Express Route" },
//             { project: "Ring Road" }, { project: "High Speed Highway" }, { project: "Tunnel Pass" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "STATES", data: [
//         {
//           name: "Rajasthan", count: 5, details: [
//             { project: "Solar Park" }, { project: "Smart City" },
//             { project: "Wind Farm" }, { project: "Desert Road" }, { project: "Water Conservation" }
//           ]
//         },
//         {
//           name: "Maharashtra", count: 5, details: [
//             { project: "Coastal Road" }, { project: "Smart City Project" },
//             { project: "Urban Metro" }, { project: "Sewage Treatment" }, { project: "Green Energy Park" }
//           ]
//         },
//         {
//           name: "Karnataka", count: 4, details: [
//             { project: "Bangalore Metro" }, { project: "Tech Park Expansion" },
//             { project: "Renewable Energy Hub" }, { project: "Airport Expansion" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "BIGGEST PROJECTS", data: [
//         {
//           name: "Mega Dam", count: 3, details: [
//             { project: "Blue River Dam" }, { project: "Hydro Power Plant" }, { project: "Irrigation Project" }
//           ]
//         },
//         {
//           name: "Smart City Development", count: 4, details: [
//             { project: "Delhi Smart City" }, { project: "Mumbai Future Hub" },
//             { project: "Chennai Green Tech" }, { project: "Bangalore AI City" }
//           ]
//         },
//         {
//           name: "Industrial Corridors", count: 5, details: [
//             { project: "Delhi-Mumbai Corridor" }, { project: "Bangalore-Chennai Corridor" },
//             { project: "Hyderabad-Warangal Corridor" }, { project: "Pune-Nashik Corridor" }, { project: "Kolkata Industrial Belt" }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div 
//     className="container-fluid border-l p-3 flex-col lg:flex-row gap-5"
//     style={{
//       overflowY: 'auto',
//       height: '100%', 
//       width: '100%',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none'
//     }}
//   >
//     <div style={{ width: '100%', height: 'auto' }}>
//       <div className="w-full flex flex-col gap-3">
        
//         {/* Total Projects Section (Extracted) */}
//         {sections.some(section => section.title === "Total Projects") && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4 text-white uppercase">Total Projects</h2>
//             <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//               {sections
//                 .find(section => section.title === "Total Projects")
//                 ?.data.map((item, index) => (
//                   <div key={index} className="mb-1">
//                 <button
//                   className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                       onClick={() => toggleSection("Total Projects", index)}>Total Projects - <span className="text-2xl font-bold">{item.count}</span></button>
//                     <div
//                       style={{
//                         maxHeight: openIndex["Total Projects"] === index ? "500px" : "0px",
//                         overflow: 'hidden',
//                         transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                         background: "#f3f4f6",
//                         padding: openIndex["Total Projects"] === index ? "12px" : "0px",
//                         borderRadius: "8px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       <table className="w-full text-sm">
//                         <thead>
//                           <tr className="border-b">
//                             <th className="text-left p-2">Project Name</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {item.details.map((detail, idx) => (
//                             <tr key={idx} className="border-b">
//                               <td className="p-2">{detail.project}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//               ))}
//             </div>
//           </div>
//         )}
  
//         {/* Speedometer Section */}
//         <Speedmetre />
  
//         {/* Other Sections (excluding Total Projects) */}
//         {sections
//           .filter(section => section.title !== "Total Projects")
//           .map((section, sectionIdx) => (
//             <div key={sectionIdx}>
//               <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
//               <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//                 {section.data.map((item, index) => (
//                   <div key={index} className="mb-1">
//                     <button
//                       className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                       onClick={() => toggleSection(section.title, index)}
//                     >
//                       {item.name} - {item.count}
//                     </button>
//                     <div
//                       style={{
//                         maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                         overflow: 'hidden',
//                         transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                         background: "#f3f4f6",
//                         padding: openIndex[section.title] === index ? "12px" : "0px",
//                         borderRadius: "8px",
//                         marginTop: "8px",
//                       }}
//                     >
//                       <table className="w-full text-sm">
//                         <thead>
//                           <tr className="border-b">
//                             <th className="text-left p-2">Project Name</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {item.details.map((detail, idx) => (
//                             <tr key={idx} className="border-b">
//                               <td className="p-2">{detail.project}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default Table3;


// edited


// new updated edited 
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Speedmetre from './nestedcomponent/speedmetre';
// import Worldmapcard from './worldmapcard'; 
// import Locationselect from './locationselect';

// // import LocationSelector from './LocationSelector';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});
//   const [projects, setProjects] = useState([]);
//   const [selectedCity, setSelectedCity] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } });
//   };

//   const sections = [
//     {
//       title: "Total Projects", data: [
//         { count: "540+", details: [{ project: "Blue River Dam" }, { project: "Hydro Power Plant" }, { project: "Irrigation Project" }] }
//       ]
//     },
//     {
//       title: "SECTORS", data: [
//         {
//           name: "Railway", count: 5, details: [
//             { project: "Express Line" }, { project: "Metro Expansion" },
//             { project: "Freight Corridor" }, { project: "Bullet Train" }, { project: "City Rail" }
//           ]
//         },
//         {
//           name: "Highways", count: 7, details: [
//             { project: "Golden Highway" }, { project: "Express Route" },
//             { project: "Ring Road" }, { project: "High Speed Highway" }, { project: "Tunnel Pass" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "BIGGEST PROJECTS", data: [
//         {
//           name: "Mega Dam", count: 3, details: [
//             { project: "Blue River Dam" }, { project: "Hydro Power Plant" }, { project: "Irrigation Project" }
//           ]
//         },
//         {
//           name: "Smart City Development", count: 4, details: [
//             { project: "Delhi Smart City" }, { project: "Mumbai Future Hub" },
//             { project: "Chennai Green Tech" }, { project: "Bangalore AI City" }
//           ]
//         },
//         {
//           name: "Industrial Corridors", count: 5, details: [
//             { project: "Delhi-Mumbai Corridor" }, { project: "Bangalore-Chennai Corridor" },
//             { project: "Hyderabad-Warangal Corridor" }, { project: "Pune-Nashik Corridor" }, { project: "Kolkata Industrial Belt" }
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div
//       className="container-fluid  p-3 flex-col lg:flex-row gap-5"
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
//                         onClick={() => toggleSection("Total Projects", index)}>Total Projects - <span className="text-2xl font-bold">{item.count}</span></button>
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
//                           <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b">
//                                 <td className="p-2">{detail.project}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                                {/* <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
//                                 <td className="p-2">{detail.project}</td>
//                               </tr>
//                             ))}
//                           </tbody> */}
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
//           <Locationselect onProjectsUpdate={setProjects}
//            onCityUpdate={setSelectedCity} />

         



//           {/* Display Projects */}
//           {/* {projects.length > 0 && (
//             <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full">
//               <h2 className="text-xl font-semibold mb-4 text-white">Projects in {selectedCity}</h2>
//               <ul>
//                 {projects.map((project) => (
//                   <li key={project.id} className="text-white">
//                     <strong>{project.name}</strong> - {project.location}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )} */}

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
//                               <th className="text-left p-2">Project Names</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b">
//                                 <td className="p-2">{detail.project}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           {/* <tbody>
//                             {item.details.map((detail, idx) => (
//                               <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
//                                 <td className="p-2">{detail.project}</td>
//                               </tr>
//                             ))}
//                           </tbody> */}
//                         </table>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//           {/* World Map Card */}
//           <Worldmapcard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table3;



// new updated edited 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import Speedmetre from './nestedcomponent/speedmetre';
import Worldmapcard from './worldmapcard';
import Locationselect from './locationselect';
import Graph from '../Overview/graph';

const Table3 = () => {
  const [openIndex, setOpenIndex] = useState({});
  const [projects, setProjects] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [sections, setSections] = useState([]); // State to store dynamic sections
  const navigate = useNavigate();

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/project/allProjects', {
          headers: {
            'x-company-id': '67ce66294f28f85e4ff91e2c'
          }
        });

        // Log the API response to debug
        console.log('API Response:', response.data);

        // Access the `projects` array from the response
        const projectsData = response.data.projects;

        // Transform the API data into the required format for sections
        const totalProjects = {
          title: "Total Projects",
          data: [
            {
              count: `${projectsData.length}+`,
              details: projectsData.map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            }
          ]
        };

        const sectors = {
          title: "SECTORS",
          data: [
            {
              name: "Railway",
              count: projectsData.filter(project => project.sector === "Railway").length,
              details: projectsData
                .filter(project => project.sector === "Railway")
                .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            },
            {
              name: "Highways",
              count: projectsData.filter(project => project.sector === "Highways").length,
              details: projectsData
                .filter(project => project.sector === "Highways")
                .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            }
          ]
        };

        const biggestProjects = {
          title: "BIGGEST PROJECTS",
          data: [
            {
              name: "Mega Dam",
              count: projectsData.filter(project => project.sector === "Mega Dam").length,
              details: projectsData
                .filter(project => project.sector === "Mega Dam")
                .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            },
            {
              name: "Smart City Development",
              count: projectsData.filter(project => project.sector === "Smart City Development").length,
              details: projectsData
                .filter(project => project.sector === "Smart City Development")
                .map(project => ({ ...project, project: project.project_name })) // Pass the entire project object
            }
          ]
        };

        // Set the sections with dynamic data
        setSections([totalProjects, sectors, biggestProjects]);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const toggleSection = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

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
              <h2 className="text-xl font-semibold mb-4 text-white uppercase">Total Projects</h2>
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
                          // color:'white',
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
                          {/* <tbody>
                            {item.details.map((detail, idx) => (
                              <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
                                <td className="p-2">{detail.project}</td>
                              </tr>
                            ))}
                          </tbody> */}
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

          {/* Location Selector Component */}
          {/* <Locationselect onProjectsUpdate={setProjects} onCityUpdate={setSelectedCity} /> */}
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
                        className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
                        onClick={() => toggleSection(section.title, index)}
                      >
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
                              <th className="text-left p-2">Project Names</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.details.map((detail, idx) => (
                              <tr key={idx} className="border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleProjectClick(detail)}>
                                <td className="p-2">{detail.project}</td>
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

          {/* World Map Card */}
          {/* <Worldmapcard /> */}
        </div>
      </div>
    </div>
  );
};

export default Table3;
// new updated edited 















// import React, { useState } from 'react';
// import Mapbox from '../Map/mapbox';

// const Table3 = () => {
//   const [openIndex, setOpenIndex] = useState({});

//   const toggleSection = (category, index) => {
//     setOpenIndex((prev) => ({
//       ...prev,
//       [category]: prev[category] === index ? null : index,
//     }));
//   };

//   const sections = [
//     {
//       title: "Sectors",
//       data: [
//         {
//           name: "Railway",
//           count: 5,
//           details: [
//             { project: "Express Line" },
//             { project: "Metro Expansion" },
//             { project: "Freight Corridor" },
//             { project: "Bullet Train" },
//             { project: "City Rail" },
//           ],
//         },
//         {
//           name: "Highways",
//           count: 7,
//           details: [
//             { project: "Golden Highway" },
//             { project: "Express Route" },
//             { project: "Ring Road" },
//             { project: "High Speed Highway" },
//             { project: "Tunnel Pass" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "States",
//       data: [
//         {
//           name: "Rajasthan",
//           count: 5,
//           details: [
//             { project: "Solar Park" },
//             { project: "Smart City" },
//             { project: "Wind Farm" },
//             { project: "Desert Road" },
//             { project: "Water Conservation" },
//           ],
//         },
//         {
//           name: "Mumbai",
//           count: 5,
//           details: [
//             { project: "Metro Expansion" },
//             { project: "Harbor Redevelopment" },
//             { project: "Coastal Road" },
//             { project: "Suburban Railway" },
//             { project: "Water Management Project" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Biggest Projects",
//       data: [
//         {
//           name: "Mega Dam",
//           count: 3,
//           details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" },
//           ],
//         },
//         {
//           name: "Smart City",
//           count: 4,
//           details: [
//             { project: "Green Energy Grid" },
//             { project: "Autonomous Transport" },
//             { project: "AI Traffic Management" },
//             { project: "Underground Logistics" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Projects",
//       data: [
//         {
//           name: "Mega Dam",
//           count: 3,
//           details: [
//             { project: "Blue River Dam" },
//             { project: "Hydro Power Plant" },
//             { project: "Irrigation Project" },
//           ],
//         },
//         {
//           name: "Smart City",
//           count: 4,
//           details: [
//             { project: "Green Energy Grid" },
//             { project: "Autonomous Transport" },
//             { project: "AI Traffic Management" },
//             { project: "Underground Logistics" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="container-fluid bg-gray-700 p-8 flex flex-col lg:flex-row gap-5 min-h-screen">
      
//       {/* Left Side: Sections (Sectors, States, Biggest Projects) */}
//       <div className="w-full lg:w-1/5 flex flex-col gap-5">
//         {sections.map((section, sectionIdx) => (
//           <div key={sectionIdx} className="w-full">
            
//             {/* Section Title (Outside Box) */}
//             <h2 className="text-2xl font-semibold text-white mb-2">{section.title}</h2>
            
//             {/* Section Card */}
//             <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              
//               {section.data.map((item, index) => (
//                 <div key={index} className="mb-4">
                  
//                   {/* Collapsible Button */}
//                   <button
//                     className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
//                     onClick={() => toggleSection(section.title, index)}
//                   >
//                     {item.name} - {item.count}
//                   </button>

//                   {/* Collapsible Content */}
//                   <div
//                     style={{
//                       maxHeight: openIndex[section.title] === index ? "500px" : "0px",
//                       overflow: 'hidden',
//                       transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
//                       background: "#f3f4f6",
//                       padding: openIndex[section.title] === index ? "12px" : "0px",
//                       borderRadius: "8px",
//                       marginTop: "8px",
//                     }}
//                   >
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="text-left p-2">Project Name</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {item.details.map((detail, idx) => (
//                           <tr key={idx} className="border-b">
//                             <td className="p-2">{detail.project}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Side: Main Map (Always Visible) */}
//         {/* Right Section - Map */}
//        <div className="w-full lg:w-3/3 bg-gray-800 p- rounded-2xl shadow-lg  items-center justify-center h-[400px] lg:h-[400px]">
//          <Mapbox />
//        </div>
      
//     </div>
//   );
// };

// export default Table3;


