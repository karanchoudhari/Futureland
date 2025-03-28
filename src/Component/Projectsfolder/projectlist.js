


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { ChevronLeft, ChevronRight, Filter, X, Search, Edit, Trash2, ArrowUpDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteProject } from "../../FeatureRedux/project/deleteProject";

// const ProjectList = ({ onEditProject }) => {
//   const [projectList, setProjectList] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filterDropdown, setFilterDropdown] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const itemsPerPage = 10;
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const dispatch = useDispatch();
//   const { isLoading, isError, errorMessage } = useSelector((state) => state.deleteProject);

//   // Fetch projects from the backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/project/allProjects', {
//           headers: {
//             'x-company-id': '67ce66294f28f85e4ff91e2c'
//           }
//         });
//         setProjectList(response.data.projects); // Assuming the response contains a 'projects' array
//       } catch (error) {
//         console.error('Error fetching projects:', error.response?.data || error.message);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Handle project click to navigate to detail page
//   const handleProjectClick = (project) => {
//     navigate('/detail', { state: { project } });
//   };

//   // Handle edit icon click
//   const handleEditClick = (project, e) => {
//     e.stopPropagation(); // Prevent row click event from firing
//     onEditProject(project); // Trigger the edit functionality
//   };

//   // Handle filtering
//   const handleFilter = (key, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//     setFilterDropdown(null); // Close dropdown after selecting a filter
//   };

//   // Remove a filter
//   const removeFilter = (key) => {
//     setFilters((prevFilters) => {
//       const newFilters = { ...prevFilters };
//       delete newFilters[key];
//       return newFilters;
//     });
//   };

//   // Reset all filters
//   const resetFilters = () => {
//     setFilters({});
//   };

//   // Handle sorting
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Filtered and sorted data
//   const filteredData = projectList.filter((item) => {
//     return Object.keys(filters).every((key) => {
//       if (!filters[key]) return true; // No filter applied for this key
//       const itemValue = item[key];
//       const filterValue = filters[key];
//       if (typeof itemValue === "number") {
//         return itemValue === parseFloat(filterValue); // Handle numeric comparison
//       }
//       return String(itemValue).toLowerCase().includes(filterValue.toLowerCase());
//     });
//   });

//   // Sort data
//   const sortedData = [...filteredData].sort((a, b) => {
//     if (sortConfig.key) {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];
//       if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   const currentData = sortedData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Format currency
//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//     }).format(value);
//   };

//   // Get unique values for a column (limited to 4 values)
//   // const getUniqueValues = (key) => {
//   //   const values = projectList.map((item) => item[key]);
//   //   const uniqueValues = [...new Set(values)].filter((value) => {
//   //     if (typeof value === "number") {
//   //       return value.toString().includes(searchQuery); // Handle numeric values
//   //     }
//   //     return value.toLowerCase().includes(searchQuery.toLowerCase());
//   //   });
//   //   return uniqueValues.slice(0, 4); // Show only 4 values
//   // };


//   const getUniqueValues = (key) => {
//     const values = projectList.map((item) => item[key]);
//     const uniqueValues = [...new Set(values)].filter((value) => {
//       if (value === undefined || value === null) return false; // Skip undefined or null values
//       if (typeof value === "number") {
//         return value.toString().includes(searchQuery); // Handle numeric values
//       }
//       return String(value).toLowerCase().includes(searchQuery.toLowerCase());
//     });
//     return uniqueValues.slice(0, 4); // Show only 4 values
//   };

//   // Function to get short name for country, state, and city
//   const getShortName = (value) => {
//     if (value === "India") return "IN";
//     if (value === "United States") return "US";
//     if (value === "United Kingdom") return "UK";
//     if (value === "Maharashtra") return "MH";
//     if (value === "California") return "CA";
//     if (value === "New York") return "NY";
//     if (value === "Mumbai") return "MUM";
//     if (value === "Los Angeles") return "LA";
//     return value; // Default to full name if no short name is defined
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB"); // 'en-GB' formats as DD/MM/YYYY
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setFilterDropdown(null); // Close dropdown
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handledelete = async (e, id) => {
//     e.stopPropagation();
//     dispatch(deleteProject(id));
//   };

//   return (
//     <div className="overflow-hidden w-full h-[100vh] bg-white shadow-md rounded-md">
//       <ul className="border border-gray-300 rounded-md overflow-hidden">
//         {/* Table Header */}
//         <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
//           {[
//             "project_name",
//             "sector",
//             "cost",
//             "status",
//             "country",
//             "state",
//             "city",
//             "startDate",
//             "endDate",
//             "contractor",
//             "action", // Action column
//           ].map((header, index) => (
//             <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start relative border-r border-gray-200">
//               <div className="flex items-center w-full">
//                 <span className="text-xs font-semibold uppercase mr-2">
//                   {header.replace(/_/g, " ")}
//                 </span>
//                 {header !== "action" && (
//                   <div className="flex items-center space-x-1">
//                     <button
//                       onClick={() => setFilterDropdown(header === filterDropdown ? null : header)}
//                       className="p-1 hover:bg-gray-200 rounded"
//                     >
//                       <Filter className="w-4 h-4 text-gray-500" />
//                     </button>
//                     {/* Render sorting button only for the "cost" column */}
//                     {header === "cost" && (
//                       <button
//                         onClick={() => handleSort(header)}
//                         className="p-1 hover:bg-gray-200 rounded"
//                       >
//                         <ArrowUpDown className="w-4 h-4 text-gray-500" />
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>
//               {filterDropdown === header && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48 max-h-48 overflow-y-auto"
//                 >
//                   <div className="p-2">
//                     {/* Search Bar */}
//                     <div className="flex items-center border border-gray-300 rounded-md mb-2">
//                       <input
//                         type="text"
//                         placeholder="Search..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full p-1 text-sm outline-none"
//                       />
//                       <Search className="w-4 h-4 text-gray-500 mx-1" />
//                     </div>
//                     {/* Filter Options */}
//                     {getUniqueValues(header).map((value) => (
//                       <div
//                         key={value}
//                         onClick={() => handleFilter(header, value)}
//                         className="p-1 hover:bg-gray-100 cursor-pointer"
//                       >
//                         {value}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </li>

//         {/* Applied Filters */}
//         {Object.keys(filters).length > 0 && (
//           <li className="flex items-center p-2 bg-gray-50 border-b border-gray-200">
//             <span className="text-sm text-gray-600 mr-2">Filters:</span>
//             {Object.entries(filters).map(([key, value]) => (
//               <div key={key} className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
//                 <span>{key}: {value}</span>
//                 <button
//                   onClick={() => removeFilter(key)}
//                   className="ml-2 p-1 hover:bg-gray-300 rounded-full"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={resetFilters}
//               className="text-sm text-blue-500 hover:underline"
//             >
//               Clear All
//             </button>
//           </li>
//         )}

//         {/* Table Rows */}
//         {currentData.length > 0 ? (
//           currentData.map((item) => (
//             <li
//               key={item._id}
//               className="flex border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all"
//               onClick={() => handleProjectClick(item)} // Navigate to detail page on row click
//             >
//               {[
//                 item.project_name,
//                 item.sector,
//                 formatCurrency(item.cost),
//                 item.status,
//                 getShortName(item.country), // Short name for country
//                 getShortName(item.state), // Short name for state
//                 getShortName(item.city), // Short name for city
//                 // item.startDate,
//                 formatDate(item.startDate),
//                 formatDate(item.endDate),
//                 // item.endDate,
//                 item.contractor,
//                 <div key="action" className="flex space-x-2 items-center justify-center">
//                   <button
//                     onClick={(e) => handleEditClick(item, e)} // Handle edit icon click
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <Edit className="w-4 h-4" />
//                   </button>
//                   <button className="text-red-500 hover:text-red-700" onClick={(e) => handledelete(e, item._id)}>
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>, // Action buttons (pencil and trash icons)
//               ].map((value, index) => (
//                 <div key={index} className="flex-1 px-4 py-2 text-sm text-gray-800 border-r border-gray-200">
//                   {value}
//                 </div>
//               ))}
//             </li>
//           ))
//         ) : (
//           <li className="text-center py-4 text-gray-500">No data available</li>
//         )}
//       </ul>

//       {/* Pagination */}
//       <div className="flex justify-between py-4 items-center px-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="mx-2 px-4 py-2 rounded-md bg-blue-500 text-white flex items-center disabled:opacity-50"
//           disabled={currentPage === 1}
//         >
//           <ChevronLeft className="w-4 h-4 mr-1" /> Previous
//         </button>
//         <div className="flex space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="mx-2 px-4 py-2 rounded-md bg-blue-500 text-white flex items-center disabled:opacity-50"
//           disabled={currentPage === totalPages}
//         >
//           Next <ChevronRight className="w-4 h-4 ml-1" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectList;


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Filter, X, Search, Edit, Trash2, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../../FeatureRedux/project/deleteProject";

const ProjectList = ({ onEditProject }) => {
  const [projectList, setProjectList] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdown, setFilterDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector((state) => state.deleteProject);

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
    navigate('/detail', { state: { project } });
  };

  // Handle edit icon click
  const handleEditClick = (project, e) => {
    e.stopPropagation(); // Prevent row click event from firing
    onEditProject(project); // Trigger the edit functionality
  };

  // Handle filtering
  const handleFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
    setFilterDropdown(null); // Close dropdown after selecting a filter
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

  const getUniqueValues = (key) => {
    const values = projectList.map((item) => item[key]);
    const uniqueValues = [...new Set(values)].filter((value) => {
      if (value === undefined || value === null) return false; // Skip undefined or null values
      if (typeof value === "number") {
        return value.toString().includes(searchQuery); // Handle numeric values
      }
      return String(value).toLowerCase().includes(searchQuery.toLowerCase());
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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // 'en-GB' formats as DD/MM/YYYY
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

  const handledelete = async (e, id) => {
    e.stopPropagation();
    dispatch(deleteProject(id));
  };

  return (
    <div className="overflow-auto w-full h-[75vh] bg-white shadow-md rounded-md  border-gray-300">
      <table className="w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
          <tr>
            {[
              "project_name",
              "sector",
              "cost",
              "status",
              "country",
              "state",
              "city",
              "startDate",
              "endDate",
              "contractor",
              "action",
            ].map((header) => (
              <th key={header} className="p-2 border-r border-gray-300 text-left relative">
                <div className="flex items-center">
                  <span className="uppercase mr-2">{header.replace(/_/g, " ")}</span>
                  {header !== "action" && (
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setFilterDropdown(header === filterDropdown ? null : header)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Filter className="w-4 h-4 text-gray-500" />
                      </button>
                      {header === "cost" && (
                        <button
                          onClick={() => handleSort(header)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <ArrowUpDown className="w-4 h-4 text-gray-500" />
                        </button>
                      )}
                    </div>
                  )}
                  {filterDropdown === header && (
                    <div ref={dropdownRef} className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48 max-h-48 overflow-y-auto">
                      <div className="p-2">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="w-full p-1 border border-gray-300 rounded-md"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {getUniqueValues(header).map((value) => (
                          <div
                            key={value}
                            className="p-1 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleFilter(header, value)}
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-50 cursor-pointer transition-all"
                onClick={() => handleProjectClick(item)}
              >
                {[
                  item.project_name,
                  item.sector,
                  formatCurrency(item.cost),
                  item.status,
                  getShortName(item.country),
                  getShortName(item.state),
                  getShortName(item.city),
                  formatDate(item.startDate),
                  formatDate(item.endDate),
                  item.contractor,
                  <div key="action" className="flex space-x-2 items-center justify-center">
                    <button
                      onClick={(e) => handleEditClick(item, e)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={(e) => handledelete(e, item._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>,
                ].map((value, index) => (
                  <td key={index} className="p-3 border border-gray-300 text-sm text-gray-800">
                    {value}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={11} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

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
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
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