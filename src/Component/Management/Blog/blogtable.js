// import React from 'react';
// import { Typography, Button } from '@mui/material';
// import { Box, } from '@mui/material';
// import { Edit, Trash, X ,CheckCircle } from 'lucide-react';

// const Blogtable = ({ blogs, handleEdit, handleDelete, showSuccessModal, showUpdateModal, closeSuccessModal, closeUpdateModal }) => {
//   return (
//     <Box sx={{ mt: 4, width: '100%', maxWidth: 850 }}>
//       <Typography variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
//         Blog List
//       </Typography>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {blogs.map((blog, index) => (
//           <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
//             <div>
//               <Typography variant="h6">{blog.title}</Typography>
//               <Typography variant="body2">{blog.readTime} • {blog.date}</Typography>
//             </div>
//             <div>
//               <Button onClick={() => handleEdit(index)}>
//                 <Edit />
//               </Button>
//               <Button onClick={() => handleDelete(index)}>
//                 <Trash />
//               </Button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-96 relative">
//             <button onClick={closeSuccessModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
//               <X className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center">
//               <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
//               <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
//               <p className="text-gray-600 text-center">Your project has been successfully submitted.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Update Modal */}
//       {showUpdateModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-96 relative">
//             <button onClick={closeUpdateModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
//               <X className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center">
//               <Edit className="w-12 h-12 text-blue-500 mb-4" />
//               <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
//               <p className="text-gray-600 text-center">Your project has been successfully updated.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Blogtable;




// import React from 'react';
// import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
// import { Edit, Trash, X, CheckCircle } from 'lucide-react';

// const Blogtable = ({ blogs, handleEdit, handleDelete, showSuccessModal, showUpdateModal, closeSuccessModal, closeUpdateModal }) => {
//   return (
//     <Box sx={{ mt: 4, width: '100%', maxWidth: 850 }}>
//       <Typography variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
//         Blog List
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Title</TableCell>
//               <TableCell>Read Time</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Link</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {blogs.map((blog, index) => (
//               <TableRow key={index}>
//                 <TableCell>{blog.title}</TableCell>
//                 <TableCell>{blog.readTime}</TableCell>
//                 <TableCell>{blog.date}</TableCell>
//                 <TableCell>
//                   <a href={blog.link} target="_blank" rel="noopener noreferrer">
//                     {blog.link}
//                   </a>
//                 </TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleEdit(index)}>
//                     <Edit />
//                   </Button>
//                   <Button onClick={() => handleDelete(index)}>
//                     <Trash />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-96 relative">
//             <button onClick={closeSuccessModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
//               <X className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center">
//               <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
//               <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
//               <p className="text-gray-600 text-center">Your blog has been successfully submitted.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Update Modal */}
//       {showUpdateModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-96 relative">
//             <button onClick={closeUpdateModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
//               <X className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center">
//               <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
//               <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
//               <p className="text-gray-600 text-center">Your blog has been successfully updated.</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Blogtable;







// import React from 'react';
// import { Edit, Trash, CheckCircle, X } from 'lucide-react';

// const Blogtable = ({ blogs, handleEdit, handleDelete, showSuccessModal, showUpdateModal, closeSuccessModal, closeUpdateModal }) => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Blog List</h2>
//       <ul className="space-y-4">
//         {blogs.map((blog, index) => (
//           <li key={index} className="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
//             <div>
//               <h3 className="text-xl font-bold">{blog.title}</h3>
//               <p className="text-sm text-gray-600">{blog.readTime} - {blog.date}</p>
//               <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                 {blog.link}
//               </a>
//             </div>
//             <div className="flex space-x-4">
//               <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
//                 <Edit />
//               </button>
//               <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
//                 <Trash />
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex items-center space-x-2">
//               <CheckCircle className="text-green-500" />
//               <p className="text-lg font-bold">Blog Added Successfully!</p>
//             </div>
//             <button
//               onClick={closeSuccessModal}
//               className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Update Modal */}
//       {showUpdateModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex items-center space-x-2">
//               <CheckCircle className="text-green-500" />
//               <p className="text-lg font-bold">Blog Updated Successfully!</p>
//             </div>
//             <button
//               onClick={closeUpdateModal}
//               className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogtable;





import React from 'react';
import { Edit, Trash, CheckCircle, X } from 'lucide-react';

const Blogtable = ({ blogs, handleEdit, handleDelete, showSuccessModal, showUpdateModal, closeSuccessModal, closeUpdateModal }) => {
  return (
    <div className="p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Read Time</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Link</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {blog.title}
                </a>
              </td>
              <td className="p-3">{blog.readTime}</td>
              <td className="p-3">{blog.date}</td>
              <td className="p-3">
                <img src={blog.image} alt="Blog" className="w-20 h-16 object-cover rounded-lg" />
              </td>
              <td className="p-3">
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {blog.link}
                </a>
              </td>
              <td className="p-3">
                <div className="flex space-x-4">
                  <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 relative">
            <button onClick={closeSuccessModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
              <p className="text-gray-600 text-center">Your Blog has been successfully Added.</p>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 relative">
            <button onClick={closeUpdateModal} className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <Edit className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Successfully Updated!</h2>
              <p className="text-gray-600 text-center">Your Blog has been successfully updated.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogtable;