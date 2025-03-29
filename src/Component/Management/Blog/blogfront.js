// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Addblogs from './blogadd';
// import Blogtable from './blogtable';

// AOS.init();

// const Blogfront = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || []);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);

//   const handleAddBlog = () => {
//     setShowForm(true);
//     setEditIndex(null);
//   };

//   const handleEdit = (index) => {
//     setShowForm(true);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updatedBlogs = blogs.filter((_, i) => i !== index);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     setBlogs(updatedBlogs);
//   };

//   const handleSubmit = (blog, isEdit) => {
//     const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//     if (isEdit) {
//       existingBlogs[editIndex] = blog;
//       setShowUpdateModal(true);
//     } else {
//       existingBlogs.push(blog);
//       setShowSuccessModal(true);
//     }
//     localStorage.setItem('blogs', JSON.stringify(existingBlogs));
//     setBlogs(existingBlogs);
//     setShowForm(false);
//   };

//   const closeSuccessModal = () => setShowSuccessModal(false);
//   const closeUpdateModal = () => setShowUpdateModal(false);

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 p-6">
//       {/* Header with Add Blog Button */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Blog List</h1>
//         <button
//           onClick={handleAddBlog}
//           className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
//         >
//           <Plus className="w-5 h-5 mr-2" />
//           Add Blog
//         </button>
//       </div>

//       {/* Blog Table */}
//       <div className="flex-1 overflow-auto bg-white shadow-md rounded-md">
//         <Blogtable
//           blogs={blogs}
//           handleEdit={handleEdit}
//           handleDelete={handleDelete}
//           showSuccessModal={showSuccessModal}
//           showUpdateModal={showUpdateModal}
//           closeSuccessModal={closeSuccessModal}
//           closeUpdateModal={closeUpdateModal}
//         />
//       </div>

//       {/* Add/Edit Blog Form */}
//       {showForm && (
//         <div
//           data-aos="fade-left"
//           className="fixed inset-y-0 left-0 w-96 bg-white shadow-lg p-6 overflow-y-auto"
//         >
//           <Addblogs
//             onSubmit={handleSubmit}
//             onCancel={() => setShowForm(false)}
//             editIndex={editIndex}
//             blogs={blogs}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Blogfront;



import React, { useState } from 'react';
import { Plus,X ,ChevronLeft} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Addblogs from './blogadd';
import Blogtable from './blogtable';

AOS.init();

const Blogfront = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || []);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleAddBlog = () => {
    setShowForm(true);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setShowForm(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleSubmit = (blog, isEdit) => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    if (isEdit) {
      existingBlogs[editIndex] = blog;
      setShowUpdateModal(true);
    } else {
      existingBlogs.push(blog);
      setShowSuccessModal(true);
    }
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
    setBlogs(existingBlogs);
    setShowForm(false);
  };

  const closeSuccessModal = () => setShowSuccessModal(false);
  const closeUpdateModal = () => setShowUpdateModal(false);

  return (
    <div className="flex flex-col h-auto bg-gray-100 p-6" 
    
    
    style={{
      overflow: 'auto',
      height: '80vh',
      width: '100%',
      scrollbarWidth: '1px',
      msOverflowStyle: 'none'
    }}>
      {/* Header with Add Blog Button */}
        <h1 className="text-2xl font-bold text-gray-800 text-center">Blog List</h1>
      <div className="flex justify-between items-center mb-6">
      <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
          
          </button>
        <button
          onClick={handleAddBlog}
          className="flex items-center text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Blog
        </button>
      </div>

      {/* Blog Table */}
      <div className="flex-1  bg-white shadow-md rounded-md">
        <Blogtable
          blogs={blogs}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          showSuccessModal={showSuccessModal}
          showUpdateModal={showUpdateModal}
          closeSuccessModal={closeSuccessModal}
          closeUpdateModal={closeUpdateModal}
        />
      </div>

      {/* Add/Edit Blog Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            data-aos="fade-up"
            className="bg-white w-11/12 max-w-2xl p-6 rounded-lg shadow-lg relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <Addblogs
              onSubmit={handleSubmit}
              onCancel={() => setShowForm(false)}
              editIndex={editIndex}
              blogs={blogs}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogfront;