// import React, { useState } from 'react';
// import { Box, TextField, Button, Container, Typography, Paper, Grid, Divider, Modal } from '@mui/material';

// const AddBlogs = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     readTime: '',
//     date: '',
//     imageFile: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.type.startsWith('image/')) {
//         setFormData((prevData) => ({
//           ...prevData,
//           imageFile: file,
//         }));
//         setErrors((prevErrors) => ({ ...prevErrors, imageFile: '' }));
//       } else {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           imageFile: 'Please select a valid image file.',
//         }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.title) newErrors.title = true;
//     if (!formData.readTime) newErrors.readTime = true;
//     if (!formData.date) newErrors.date = true;
//     if (!formData.imageFile) newErrors.imageFile = true;

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       setTimeout(() => setErrors({}), 500);
//       return;
//     }

//     console.log('Form Data:', formData);
//     setFormData({ title: '', readTime: '', date: '', imageFile: null });
//     setShowSuccessModal(true);
//   };

//   const shakeEffect = {
//     border: '1px solid red',
//     borderRadius: '8px',
//     animation: 'shake 0.3s ease-in-out',
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="flex-start" p={4}>
//       <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
//         <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
//           Add Blog
//         </Typography>
//         <Divider sx={{ my: 3 }} />
//         <form onSubmit={handleSubmit} autoComplete="off">
//           <style>
//             {`
//               @keyframes shake {
//                 0% { transform: translateX(0); }
//                 25% { transform: translateX(-5px); }
//                 50% { transform: translateX(5px); }
//                 75% { transform: translateX(-5px); }
//                 100% { transform: translateX(0); }
//               }
//             `}
//           </style>
//           <Grid container spacing={2.5}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Title"
//                 fullWidth
//                 size="small"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 variant="outlined"
//                 sx={errors.title ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Read Time"
//                 fullWidth
//                 size="small"
//                 name="readTime"
//                 value={formData.readTime}
//                 onChange={handleChange}
//                 variant="outlined"
//                 sx={errors.readTime ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Publication Date"
//                 type="date"
//                 fullWidth
//                 size="small"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 variant="outlined"
//                 InputLabelProps={{ shrink: true }}
//                 sx={errors.date ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 fullWidth
//                 size="small"
//                 variant="outlined"
//                 sx={errors.imageFile ? shakeEffect : {}}
//               />
//               {formData.imageFile && (
//                 <Typography variant="body2" color="textSecondary" mt={1}>
//                   Selected File: {formData.imageFile.name}
//                 </Typography>
//               )}
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3 }}
//               >
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>

//       <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
//         <Box sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 300,
//           bgcolor: 'white',
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2
//         }}>
//           <Typography variant="h6" align="center" gutterBottom>
//             Blog submitted successfully!
//           </Typography>
//           <Button fullWidth variant="contained" onClick={() => setShowSuccessModal(false)}>
//             OK
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default AddBlogs;


// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Typography, Paper, Grid, Divider } from '@mui/material';
// import { ArrowLeft, CheckCircle, Edit, Trash, X } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import Blogtable from './blogtable';

// const Addblogs = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     readTime: '',
//     date: '',
//     imageFile: null,
//     link: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [blogs, setBlogs] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch blogs from localStorage
//     const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     setBlogs(storedBlogs);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.type.startsWith('image/')) {
//         setFormData((prevData) => ({
//           ...prevData,
//           imageFile: file,
//         }));
//         setErrors((prevErrors) => ({ ...prevErrors, imageFile: '' }));
//       } else {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           imageFile: 'Please select a valid image file.',
//         }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.title) newErrors.title = true;
//     if (!formData.readTime) newErrors.readTime = true;
//     if (!formData.date) newErrors.date = true;
//     if (!formData.imageFile) newErrors.imageFile = true;
//     if (!formData.link) newErrors.link = true;

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       setTimeout(() => setErrors({}), 500);
//       return;
//     }

//     const blog = {
//       title: formData.title,
//       readTime: formData.readTime,
//       date: formData.date,
//       image: URL.createObjectURL(formData.imageFile),
//       link: formData.link,
//     };

//     const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     if (editIndex !== null) {
//       // Update existing blog
//       existingBlogs[editIndex] = blog;
//       setShowUpdateModal(true);
//     } else {
//       // Add new blog
//       existingBlogs.push(blog);
//       setShowSuccessModal(true);
//     }

//     localStorage.setItem('blogs', JSON.stringify(existingBlogs));
//     setBlogs(existingBlogs);
//     setFormData({ title: '', readTime: '', date: '', imageFile: null, link: '' });
//     setEditIndex(null);
//   };

//   const handleEdit = (index) => {
//     const blog = blogs[index];
//     setFormData({
//       title: blog.title,
//       readTime: blog.readTime,
//       date: blog.date,
//       imageFile: blog.image,
//       link: blog.link,
//     });
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedBlogs = blogs.filter((_, i) => i !== index);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     setBlogs(updatedBlogs);
//   };

//   const closeSuccessModal = () => setShowSuccessModal(false);
//   const closeUpdateModal = () => setShowUpdateModal(false);

//   const shakeEffect = {
//     border: '1px solid red',
//     borderRadius: '8px',
//     animation: 'shake 0.3s ease-in-out',
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="flex-start" p={4}>
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center mb-6 px-4 py-2 text-gray-700 font-bold bg-white rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all"
//       >
//         <ArrowLeft className="mr-2" />
//         Back
//       </button>
//       <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
//         <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
//           {editIndex !== null ? 'Edit Blog' : 'Add Blog'}
//         </Typography>
//         <Divider sx={{ my: 3 }} />
//         <form onSubmit={handleSubmit} autoComplete="off">
//           <style>
//             {`
//               @keyframes shake {
//                 0% { transform: translateX(0); }
//                 25% { transform: translateX(-5px); }
//                 50% { transform: translateX(5px); }
//                 75% { transform: translateX(-5px); }
//                 100% { transform: translateX(0); }
//               }
//             `}
//           </style>
//           <Grid container spacing={2.5}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Title"
//                 fullWidth
//                 size="small"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 variant="outlined"
//                 sx={errors.title ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Read Time"
//                 fullWidth
//                 size="small"
//                 name="readTime"
//                 value={formData.readTime}
//                 onChange={handleChange}
//                 variant="outlined"
//                 sx={errors.readTime ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 label="Publication Date"
//                 type="date"
//                 fullWidth
//                 size="small"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 variant="outlined"
//                 InputLabelProps={{ shrink: true }}
//                 sx={errors.date ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 fullWidth
//                 size="small"
//                 variant="outlined"
//                 sx={errors.imageFile ? shakeEffect : {}}
//               />
//               {formData.imageFile && (
//                 <Typography variant="body2" color="textSecondary" mt={1}>
//                   Selected File: {formData.imageFile.name}
//                 </Typography>
//               )}
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Link"
//                 fullWidth
//                 size="small"
//                 name="link"
//                 value={formData.link}
//                 onChange={handleChange}
//                 variant="outlined"
//                 sx={errors.link ? shakeEffect : {}}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3 }}
//               >
//                 {editIndex !== null ? 'Update Blog' : 'Submit'}
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>

//       {/* Blog Table Component */}
//       <Blogtable
//         blogs={blogs}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//         showSuccessModal={showSuccessModal}
//         showUpdateModal={showUpdateModal}
//         closeSuccessModal={closeSuccessModal}
//         closeUpdateModal={closeUpdateModal}
//       />
//     </Box>
//   );
// };

// export default Addblogs;







// import React, { useState, useEffect } from 'react';
// import { CheckCircle, X } from 'lucide-react';

// const Addblogs = ({ onSubmit, onCancel, editIndex, blogs }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     readTime: '',
//     date: '',
//     imageFile: null,
//     link: '',
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (editIndex !== null) {
//       const blog = blogs[editIndex];
//       setFormData({
//         title: blog.title,
//         readTime: blog.readTime,
//         date: blog.date,
//         imageFile: blog.imageFile,
//         link: blog.link,
//       });
//     }
//   }, [editIndex, blogs]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       setFormData((prevData) => ({ ...prevData, imageFile: file }));
//       setErrors((prevErrors) => ({ ...prevErrors, imageFile: '' }));
//     } else {
//       setErrors((prevErrors) => ({ ...prevErrors, imageFile: 'Please select a valid image file.' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     if (!formData.title) newErrors.title = true;
//     if (!formData.readTime) newErrors.readTime = true;
//     if (!formData.date) newErrors.date = true;
//     if (!formData.imageFile) newErrors.imageFile = true;
//     if (!formData.link) newErrors.link = true;

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       setTimeout(() => setErrors({}), 500);
//       return;
//     }

//     const blog = {
//       title: formData.title,
//       readTime: formData.readTime,
//       date: formData.date,
//       image: URL.createObjectURL(formData.imageFile),
//       link: formData.link,
//     };

//     onSubmit(blog, editIndex !== null);
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4">{editIndex !== null ? 'Edit Blog' : 'Add Blog'}</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />

//           <input
//             type="text"
//             placeholder="Read Time"
//             name="readTime"
//             value={formData.readTime}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />

//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />

//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="w-full p-2 border rounded-md"
//           />

//           {formData.imageFile && (
//             <p className="text-sm text-gray-600">Selected File: {formData.imageFile.name}</p>
//           )}

//           <input
//             type="text"
//             placeholder="Link"
//             name="link"
//             value={formData.link}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md"
//           />

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             {editIndex !== null ? 'Update Blog' : 'Submit'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addblogs;








import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Addblogs = ({ onSubmit, onCancel, editIndex, blogs }) => {
  const [formData, setFormData] = useState({
    title: '',
    readTime: '',
    date: '',
    imageFile: null,
    link: '',
  });
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (editIndex !== null) {
      const blog = blogs[editIndex];
      setFormData({
        title: blog.title,
        readTime: blog.readTime,
        date: blog.date,
        imageFile: blog.image, // Use the existing image URL
        link: blog.link,
      });
    }
  }, [editIndex, blogs]);

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
    if (!formData.title) newErrors.title = true;
    if (!formData.readTime) newErrors.readTime = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.imageFile) newErrors.imageFile = true;
    if (!formData.link) newErrors.link = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 200); // Shake animation
      return;
    }
    
    


    // const blog = {
    //   title: formData.title,
    //   readTime: formData.readTime,
    //   date: formData.date,
    //   image: typeof formData.imageFile === 'string' ? formData.imageFile : URL.createObjectURL(formData.imageFile), // Handle existing image URL
    //   link: formData.link,
    //   imageFile: formData.imageFile, // Pass imageFile for future updates
    // };

    // onSubmit(blog, editIndex !== null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">{editIndex !== null ? 'Edit Blog' : 'Add Blog'}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.title ? 'border-red-500 animate-shake' : ''}`}
          />

          <input
            type="text"
            placeholder="Read Time"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.readTime ? 'border-red-500 animate-shake' : ''}`}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.date ? 'border-red-500 animate-shake' : ''}`}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={`w-full p-2 border rounded-md ${errors.imageFile ? 'border-red-500 animate-shake' : ''}`}
          />

          {formData.imageFile && (
            <p className="text-sm text-gray-600">Selected File: {formData.imageFile.name || 'Existing Image'}</p>
          )}

          <input
            type="text"
            placeholder="Link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.link ? 'border-red-500 animate-shake' : ''}`}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {editIndex !== null ? 'Update Blog' : 'Submit'}
          </button>
        </form>
      </div>
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
    </div>
  );
};

export default Addblogs;