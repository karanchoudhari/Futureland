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











import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Edit, Trash, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Addblogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    readTime: '',
    date: '',
    imageFile: null,
    link: '',
  });
  const [errors, setErrors] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData((prevData) => ({ ...prevData, imageFile: file }));
      setErrors((prevErrors) => ({ ...prevErrors, imageFile: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, imageFile: 'Please select a valid image file.' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    ['title', 'readTime', 'date', 'imageFile', 'link'].forEach((field) => {
      if (!formData[field]) newErrors[field] = true;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length) return;

    const blog = { ...formData, image: URL.createObjectURL(formData.imageFile) };
    const updatedBlogs = editIndex !== null ? blogs.map((b, i) => (i === editIndex ? blog : b)) : [...blogs, blog];

    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setFormData({ title: '', readTime: '', date: '', imageFile: null, link: '' });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const blog = blogs[index];
    setFormData(blog);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">

      <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 px-4 py-2 text-gray-700 bg-white rounded-lg shadow hover:bg-gray-100 transition"
      >
        <ArrowLeft className="mr-2" /> Back
      </button>
        <h2 className="text-2xl font-bold text-center mb-4">{editIndex !== null ? 'Edit Blog' : 'Add Blog'}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />

          <input
            type="text"
            placeholder="Read Time"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-md"
          />

          {formData.imageFile && (
            <p className="text-sm text-gray-600">Selected File: {formData.imageFile.name}</p>
          )}

          <input
            type="text"
            placeholder="Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {editIndex !== null ? 'Update Blog' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Blog Table */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-center mb-4">Blog List</h3>
        <ul className="divide-y divide-gray-200">
          {blogs.map((blog, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold">{blog.title}</p>
                <p className="text-sm text-gray-500">{blog.readTime} - {blog.date}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {blog.link}
                </a>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(index)} className="text-green-500">
                  <Edit />
                </button>
                <button onClick={() => handleDelete(index)} className="text-red-500">
                  <Trash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Addblogs;
