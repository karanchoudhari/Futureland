// import React from "react";

// const articles = [
//   {
//     title: "Low private investor interest may lead to fewer BoT-toll highway awards",
//     readTime: "3 min read",
//     date: "28 Feb 2025",
//     image: "https://www.livemint.com/lm-img/img/2025/02/28/90x90/National-Highways-Authority-of-India--NHAI--has-te_1740725290890_1740725303604.jpg", // Replace with actual image URL
//   },
//   {
//     title: "How small town Jewar became a booming real estate market",
//     readTime: "11 min read",
//     date: "24 Feb 2025",
//     image: "https://www.livemint.com/lm-img/img/2025/02/24/90x90/Lead_IMG_2_1740401947884_1740404974657.jpg", // Replace with actual image URL
//   },
//   {
//     title: "Smoother rides ahead as highway maintenance in ministry's crosshairs",
//     readTime: "3 min read",
//     date: "18 Feb 2025",
//     image: "https://www.livemint.com/lm-img/img/2025/02/17/90x90/-Mint-_1691428237233_1739786722956.jpg", // Replace with actual image URL
//   },
//   {
//     title: "After a strong Q3, top hotels see room for further growth",
//     readTime: "4 min read",
//     date: "05 Feb 2025",
//     image: "https://www.livemint.com/lm-img/img/2025/02/05/90x90/aurika_1717576223183_1738756869338.jpg", // Replace with actual image URL
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="bg-gray-900 p-6 pt-0 rounded-lg shadow-lg w-full max-w-2xl">
//       <h2 className="text-lg font-bold text-gray-900 mb-4 text-white uppercase">Infrastructure</h2>
//       {/* sample document */}
//       <div className="flex flex-col gap-4">
//         {articles.map((article, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
//           >
//             <div className="flex-1 pr-4">
//               <h3 className="text-md font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
//                 {article.title}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 {article.readTime} • {article.date}
//               </p>
//             </div>
//             <img
//               src={article.image}
//               alt="Thumbnail"
//               className="w-20 h-16 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

// new edited code 
import React, { useState } from "react";
import {DownloadIcon,Upload} from 'lucide-react';

const articles = [
  {
    title: "Low private investor interest may lead to fewer BoT-toll highway awards",
    readTime: "3 min read",
    date: "28 Feb 2025",
    image: "https://www.livemint.com/lm-img/img/2025/02/28/90x90/National-Highways-Authority-of-India--NHAI--has-te_1740725290890_1740725303604.jpg", // Replace with actual image URL
  },
  {
    title: "How small town Jewar became a booming real estate market",
    readTime: "11 min read",
    date: "24 Feb 2025",
    image: "https://www.livemint.com/lm-img/img/2025/02/24/90x90/Lead_IMG_2_1740401947884_1740404974657.jpg", // Replace with actual image URL
  },
  {
    title: "Smoother rides ahead as highway maintenance in ministry's crosshairs",
    readTime: "3 min read",
    date: "18 Feb 2025",
    image: "https://www.livemint.com/lm-img/img/2025/02/17/90x90/-Mint-_1691428237233_1739786722956.jpg", // Replace with actual image URL
  },
  {
    title: "After a strong Q3, top hotels see room for further growth",
    readTime: "4 min read",
    date: "05 Feb 2025",
    image: "https://www.livemint.com/lm-img/img/2025/02/05/90x90/aurika_1717576223183_1738756869338.jpg", // Replace with actual image URL
  },
];

const Blog = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
      // Generate a URL for the uploaded file
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      alert("PDF uploaded successfully!");
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="bg-gray-900 p-6 pt-0 rounded-lg shadow-lg w-full max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 text-white uppercase">Infrastructure</h2>
        <div className="flex items-center gap-2 mt-2">
          {uploadedFile && (
            <span className="text-sm text-white flex bg-green-500 px-4 py-2  rounded">
              <a
                href={fileUrl} // Link to the uploaded file
                download={uploadedFile.name} // Set the file name for download
                className="text-white hover:text-gray-200 flex justify-between "
              >
                Download Doc  <DownloadIcon size={20} />
              </a>
            </span>
          )}
          <label className="cursor-pointer flex justify-between  align-center bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          <Upload size={20} /> Upload Doc  
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <div className="flex-1 pr-4">
              <h3 className="text-md font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {article.readTime} • {article.date}
              </p>
            </div>
            <img
              src={article.image}
              alt="Thumbnail"
              className="w-20 h-16 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;