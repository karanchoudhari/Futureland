// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Home, Settings, MapPinIcon, LucidePlus } from 'lucide-react';
// // import Addprojectmodal from '../addprojectmodal';
// import Management from '../Management/management';



// // Mock API function to generate more demo data
// const fakeApi = () => {


//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           _id: '1',
//           project_name: 'Site Development',
//           sector: 'Construction',
//           cost: '500000',
//           status: 'Ongoing',
//           state: 'California',
//           city: 'Los Angeles',
//           start: '2023-01-01',
//           finish: '2023-12-31',
//           contractor: 'BuildCo'
//         },
//         {
//           _id: '2',
//           project_name: 'Mall Renovation',
//           sector: 'Retail',
//           cost: '1200000',
//           status: 'Completed',
//           state: 'New York',
//           city: 'New York City',
//           start: '2022-03-01',
//           finish: '2023-01-15',
//           contractor: 'UrbanConstruct'
//         },
//         {
//           _id: '3',
//           project_name: 'Bridge ',
//           sector: 'Infrastructure',
//           cost: '800000',
//           status: 'Pending',
//           state: 'Texas',
//           city: 'Houston',
//           start: '2024-05-10',
//           finish: '2025-05-10',
//           contractor: 'BridgeMasters'
//         },
//         {
//           _id: '4',
//           project_name: 'School Building',
//           sector: 'Education',
//           cost: '450000',
//           status: 'Ongoing',
//           state: 'Florida',
//           city: 'Miami',
//           start: '2023-06-01',
//           finish: '2024-06-01',
//           contractor: 'EduBuild'
//         },
//         {
//           _id: '5',
//           project_name: 'Office Expansion',
//           sector: 'Commercial',
//           cost: '750000',
//           status: 'Ongoing',
//           state: 'Illinois',
//           city: 'Chicago',
//           start: '2023-07-01',
//           finish: '2024-07-01',
//           contractor: 'OfficePro'
//         },
//         {
//           _id: '6',
//           project_name: 'Highway Repair',
//           sector: 'Infrastructure',
//           cost: '2000000',
//           status: 'Pending',
//           state: 'Nevada',
//           city: 'Las Vegas',
//           start: '2024-09-01',
//           finish: '2025-09-01',
//           contractor: 'RoadFixers'
//         }
//       ]);
//     }, 1000);
//   });
// };
// const Table = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({});
//   const itemsPerPage = 4;
//   const [sortConfig, setSortConfig] = useState({ field: '', direction: 'asc' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fakeApi().then((mockData) => {
//       setData(mockData);
//       setFilteredData(mockData);
//     });
//   }, []);

//   useEffect(() => {
//     // Remove the fakeApi call if not needed
//     setData([]); // Initialize with empty data if form is the only input
//     setFilteredData([]);
// }, []);

//   const sectors = Array.from(new Set(data.map((item) => item.sector)));

//   const handleItemClick = (item) => {
//     navigate(`/details/${item._id}`, { state: item });
//   };

//   const handleFilter = (field, value) => {
//     const updatedFilters = { ...filters, [field]: value };
//     setFilters(updatedFilters);
//     const filtered = data.filter((item) => {
//       return Object.keys(updatedFilters).every((key) => {
//         return (
//           !updatedFilters[key] ||
//           item[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase())
//         );
//       });
//     });
//     setFilteredData(filtered);
//     setCurrentPage(1);
//   };

//   const handleSort = (field) => {
//     const direction =
//       sortConfig.field === field && sortConfig.direction === 'asc' ? 'desc' : 'asc';
//     setSortConfig({ field, direction });
//     const sortedData = [...filteredData].sort((a, b) => {
//       if (field === 'cost') {
//         return direction === 'asc'
//           ? parseInt(a[field]) - parseInt(b[field])
//           : parseInt(b[field]) - parseInt(a[field]);
//       } else {
//         return direction === 'asc'
//           ? new Date(a[field]) - new Date(b[field])
//           : new Date(b[field]) - new Date(a[field]);
//       }
//     });
//     setFilteredData(sortedData);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

  
//   const getUniqueValues = (field) => {
//     return Array.from(new Set(data.map((item) => item[field])));
//   };


//   return (
//     <div className="overflow-auto w-full h-auto sticky top-0">
//       <ul className="border border-gray-100 rounded">
//         <li className="flex bg-gray-200">
//           {['Project Name', 'Sector', 'Cost', 'Status', 'State', 'City', 'Start', 'Finish', 'Contractor'].map((header, index) => (
//             <div key={index} className="flex-1 px-3 py-1 text-start">
//               {header === 'Sector' ? (
//                 <select
//                   className="mb-1 w-full text-xs p-1 border rounded"
//                   onChange={(e) => handleFilter('sector', e.target.value)}
//                 >
//                   <option value="">All Sectors</option>
//                   {sectors.map((sector) => (
//                     <option key={sector} value={sector}>{sector}</option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type="text"
//                   placeholder={`Filter ${header}`}
//                   className="mb-1 w-full text-xs p-1 text-start border rounded"
//                   onChange={(e) => handleFilter(header.toLowerCase().replace(/ /g, '_'), e.target.value)}
//                 />

//               )}
//               <span className="text-xs font-semibold uppercase">{header}</span>
//             </div>
//           ))}
//         </li>

//         {currentData.length > 0 ? (
//           currentData.map((item) => (
//             <li
//               key={item._id}
//               className="flex border-b border-gray-300 hover:bg-gray-300 cursor-pointer"

//               onClick={() => handleItemClick(item)}
//             >
//               <div className="flex-1 px-3 py-2 text-start">{item.project_name}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.sector}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.cost}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.status}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.state}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.city}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.start}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.finish}</div>
//               <div className="flex-1 px-3 py-2 text-start">{item.contractor}</div>
//             </li>
//           ))
//         ) : (
//           <li className="text-center py-4">No data available</li>
//         )}
//       </ul>

//       <div className="flex justify-between py-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="mx-2 px-3 py-1 rounded bg-blue-500 text-white"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <div className="flex">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="mx-2 px-3 py-1 rounded bg-blue-500 text-white"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Table;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Settings, MapPinIcon, LucidePlus } from 'lucide-react';
import { ChevronDown, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// import Addprojectmodal from '../addprojectmodal';
import Management from '../Management/management';



// Mock API function to generate more demo data
const fakeApi = () => {



  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: '1',
          project_name: 'Site Development',
          sector: 'Construction',
          cost: '500000',
          stage: 'Conceptual',
          country:'USA',
          state: 'California',
          city: 'Los Angeles',
          start: '2023-01-01',
          finish: '2023-12-31',
          contractor: 'BuildCo'
        },
        {
          _id: '2',
          project_name: 'Mall Renovation',
          sector: 'Retail',
          cost: '1200000',
          stage: 'DPR',
          country:'USA',
          state: 'New York',
          city: 'New York City',
          start: '2022-03-01',
          finish: '2023-01-15',
          contractor: 'UrbanConstruct'
        },
        {
          _id: '3',
          project_name: 'Bridge ',
          sector: 'Infrastructure',
          cost: '800000',
          stage: 'DPR',
          country:'USA',
          state: 'Texas',
          city: 'Houston',
          start: '2024-05-10',
          finish: '2025-05-10',
          contractor: 'BridgeMasters'
        },
        {
          _id: '4',
          project_name: 'School Building',
          sector: 'Education',
          cost: '450000',
          stage: 'Conceptual',
          country:'USA',
          state: 'Florida',
          city: 'Miami',
          start: '2023-06-01',
          finish: '2024-06-01',
          contractor: 'EduBuild'
        },
        {
          _id: '5',
          project_name: 'Office Expansion',
          sector: 'Commercial',
          cost: '750000',
          stage: 'Tender',
          country:'USA',
          state: 'Illinois',
          city: 'Chicago',
          start: '2023-07-01',
          finish: '2024-07-01',
          contractor: 'OfficePro'
        },
        {
          _id: '6',
          project_name: 'Highway Repair',
          sector: 'Infrastructure',
          cost: '2000000',
          stage: 'Under Construction',
          country:'USA',
          state: 'Nevada',
          city: 'Las Vegas',
          start: '2024-09-01',
          finish: '2025-09-01',
          contractor: 'RoadFixers'
        },
        {
          _id: '7',
          project_name: 'Office Expansion',
          sector: 'Commercial',
          cost: '750000',
          stage: 'Tender',
          country:'USA',
          state: 'Illinois',
          city: 'Chicago',
          start: '2023-07-01',
          finish: '2024-07-01',
          contractor: 'OfficePro'
        },
      ]);
    }, 1000);
  });
};
const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const itemsPerPage = 5;
  const [sortConfig, setSortConfig] = useState({ field: '', direction: 'asc' });
  const navigate = useNavigate();

  useEffect(() => {
    fakeApi().then((mockData) => {
      setData(mockData);
      setFilteredData(mockData);
    });
  }, []);

  useEffect(() => {
    // Remove the fakeApi call if not needed
    setData([]); // Initialize with empty data if form is the only input
    setFilteredData([]);
}, []);

  const sectors = Array.from(new Set(data.map((item) => item.sector)));

  const handleItemClick = (item) => {
    navigate(`/detail/${item._id}`, { state: item });
  };

  const handleFilter = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);
    const filtered = data.filter((item) => {
      return Object.keys(updatedFilters).every((key) => {
        return (
          !updatedFilters[key] ||
          item[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase())
        );
      });
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    const direction = sortConfig.field === field && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ field, direction });
    const sortedData = [...filteredData].sort((a, b) => {
      return direction === 'asc' ? a[field] - b[field] : b[field] - a[field];
    });
    setFilteredData(sortedData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };


  return (
    <div className=" overflow-auto w-full h-[363px] sticky fixed top-0  bg-dark shadow-md rounded-md">
    <ul className="border border-gray-300 rounded-md overflow-hidden">
      <li className="flex bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
        {[
          "Project Name",
          "Sector",
          "Cost (INR)",
          "stage",
          "Country",
          "State",
          "City",
          "Start",
          "Finish",
          "Contractor",
        ].map((header, index) => (
          <div key={index} className="flex-1 px-4 py-2 flex flex-col items-start">
            {header === "Sector" ? (
              <div className="relative w-full">
                <select
                  className="w-full text-xs p-2 border rounded-md  focus:ring-blue-400"
                  onChange={(e) => handleFilter("sector", e.target.value)}
                >
                  <option value="">All Sectors</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
                {/* <ChevronDown className="absolute right-2 top-3 text-gray-500 w-4 h-4 pointer-events-none" /> */}
              </div>
            ) : (
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={`Filter ${header}`}
                  className="w-full text-xs p-2 border rounded-md  focus:ring-blue-400"
                  onChange={(e) =>
                    handleFilter(header.toLowerCase().replace(/ /g, "_"), e.target.value)
                  }
                />
                {/* <Filter className="absolute right-2 top-3 text-gray-500 w-4 h-4" /> */}
              </div>
            )}
            <span className="text-xs font-semibold uppercase mt-1">{header}</span>
          </div>
        ))}
      </li>

      {currentData.length > 0 ? (
        currentData.map((item) => (
          <li
            key={item._id}
            className="flex border-b border-gray-200 hover:bg-gray-200 cursor-pointer transition-all"
            onClick={() => handleItemClick(item)}
          >
            {[item.project_name, item.sector, formatCurrency(item.cost), item.stage,item.country, item.state, item.city, item.start, item.finish, item.contractor].map((value, index) => (
              <div key={index} className="flex-1 px-4 py-2 text-sm text-gray-800">
                {value}
              </div>
            ))}
          </li>
        ))
      ) : (
        <li className="text-center py-4 text-gray-500">No data available</li>
      )}
    </ul>

    <div className="flex justify-between py-4 items-center">
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

export default Table;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Home, Settings, MapPinIcon, LucidePlus } from 'lucide-react';
// import { ChevronDown, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// import Management from '../Management/management';

// const fakeApi = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           _id: '1',
//           project_name: 'Site Development',
//           sector: 'Construction',
//           cost: '500000',
//           status: 'Ongoing',
//           country: 'USA',
//           state: 'California',
//           city: 'Los Angeles',
//           start: '2023-01-01',
//           finish: '2023-12-31',
//           contractor: 'BuildCo'
//         },
//         {
//           _id: '2',
//           project_name: 'Mall Renovation',
//           sector: 'Retail',
//           cost: '1200000',
//           status: 'Completed',
//           country: 'USA',
//           state: 'New York',
//           city: 'New York City',
//           start: '2022-03-01',
//           finish: '2023-01-15',
//           contractor: 'UrbanConstruct'
//         },
//         {
//           _id: '3',
//           project_name: 'Bridge ',
//           sector: 'Infrastructure',
//           cost: '800000',
//           status: 'Pending',
//           country: 'USA',
//           state: 'Texas',
//           city: 'Houston',
//           start: '2024-05-10',
//           finish: '2025-05-10',
//           contractor: 'BridgeMasters'
//         },
//         {
//           _id: '4',
//           project_name: 'School Building',
//           sector: 'Education',
//           cost: '450000',
//           status: 'Ongoing',
//           country: 'USA',
//           state: 'Florida',
//           city: 'Miami',
//           start: '2023-06-01',
//           finish: '2024-06-01',
//           contractor: 'EduBuild'
//         },
//         {
//           _id: '5',
//           project_name: 'Office Expansion',
//           sector: 'Commercial',
//           cost: '750000',
//           status: 'Ongoing',
//           country: 'USA',
//           state: 'Illinois',
//           city: 'Chicago',
//           start: '2023-07-01',
//           finish: '2024-07-01',
//           contractor: 'OfficePro'
//         },
//         {
//           _id: '6',
//           project_name: 'Highway Repair',
//           sector: 'Infrastructure',
//           cost: '2000000',
//           status: 'Pending',
//           country: 'USA',
//           state: 'Nevada',
//           city: 'Las Vegas',
//           start: '2024-09-01',
//           finish: '2025-09-01',
//           contractor: 'RoadFixers'
//         }
//       ]);
//     }, 1000);
//   });
// };

// const Table = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({});
//   const itemsPerPage = 5;
//   const [sortConfig, setSortConfig] = useState({ field: '', direction: 'asc' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fakeApi().then((mockData) => {
//       setData(mockData);
//       setFilteredData(mockData);
//     });
//   }, []);

//   const sectors = Array.from(new Set(data.map((item) => item.sector)));

//   const handleItemClick = (item) => {
//     navigate(`/details/${item._id}`, { state: item });
//   };

//   const handleFilter = (field, value) => {
//     const updatedFilters = { ...filters, [field]: value };
//     setFilters(updatedFilters);
//     const filtered = data.filter((item) => {
//       return Object.keys(updatedFilters).every((key) => {
//         return (
//           !updatedFilters[key] ||
//           item[key]?.toString().toLowerCase().includes(updatedFilters[key].toLowerCase())
//         );
//       });
//     });
//     setFilteredData(filtered);
//     setCurrentPage(1);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className="container overflow-hidden w-full h-[400px]  sticky top-0 bg-white shadow-md rounded-md p-4">
//       <ul className="border border-gray-300 rounded-md overflow-hidden">
//         <li className="flex flex-wrap bg-gray-100 font-semibold text-sm text-gray-700 border-b border-gray-300">
//           {["Project Name", "Sector", "Cost", "Status", "Country", "State", "City", "Start", "Finish", "Contractor"].map((header, index) => (
//             <div key={index} className="flex-1 min-w-[150px] px-4 py-2 text-left">{header}</div>
//           ))}
//         </li>
//         {currentData.map((item) => (
//           <li key={item._id} className="flex flex-wrap border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
//             {[item.project_name, item.sector, item.cost, item.status, item.country, item.state, item.city, item.start, item.finish, item.contractor].map((value, index) => (
//               <div key={index} className="flex-1 min-w-[150px] px-4 py-3 text-sm text-gray-800">{value}</div>
//             ))}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Table;