// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// const Detail = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const project = location.state?.project;

//     if (!project) {
//         return <div>No project data available.</div>;
//     }

//     return (
//         <div className="container-fluid p-3 bg-gray-900 border-l" style={{ height: '100vh' }}>
//             <div className="flex flex-col lg:flex-row gap-5">
//                 {/* Left Side - Project Details */}
//                 <div className="w-96">
//                     {/* Back Button */}
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="mb-6 flex items-center gap-2 text-white hover:text-gray-500 transition"
//                     >
//                         <FontAwesomeIcon icon={faArrowLeft} />
//                         <span>Back</span>
//                     </button>
//                     <h1 className="text-2xl font-bold mb-4 text-white">{project.name}</h1>
//                     <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
//                         <p><strong>Sector:</strong> {project.sector}</p>
//                         <p><strong>Cost:</strong> {project.cost}</p>
//                         <p><strong>Status:</strong> {project.status}</p>
//                         <p><strong>Country:</strong> {project.country}</p>
//                         <p><strong>State:</strong> {project.state}</p>
//                         <p><strong>City:</strong> {project.city}</p>
//                         <p><strong>Start Date:</strong> {project.startDate}</p>
//                         <p><strong>Completion Date:</strong> {project.completionDate}</p>
//                         <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
//                             Download Project Document
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Side - Map */}
//                 <div className="w-full lg:w-1/2">
//                     <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-white">
//                         <div style={{ height: '50vh' }}>
//                             {/* Map Component */}
//                             <p>Map Placeholder</p>
//                         </div>
//                         <div className="mt-4">
//                             <p><strong>Registered Office:</strong> Gurugram</p>
//                             <p><strong>Circle Rate:</strong> $100/sq.ft</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Detail;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import { Box, Button, Card, CardContent, Typography, Grid, Divider } from '@mui/material';

// const Detail = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const project = location.state?.project;

//     if (!project) {
//         return <Typography variant="h6" color="text.secondary">No project data available.</Typography>;
//     }

//     return (
//         <>
//             <div style={{
//                 width: '100%',
//                 height: '100vh',
//                 overflowY: 'scroll',
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//                 backgroundColor: '#f3f4f6', // Light gray background for the entire page
//             }}>
//                 <Box sx={{ p: 4 }}>
//                     <Grid container spacing={4}>
//                         {/* Left Side - Project Details */}
//                         <Grid item xs={12} lg={4}>
//                             <Button
//                                 startIcon={<ArrowLeft />}
//                                 onClick={() => navigate(-1)}
//                                 sx={{
//                                     mb: 3,
//                                     color: 'black',
//                                     textTransform: 'none',
//                                     fontWeight: 'bold',
//                                     '&:hover': {
//                                         backgroundColor: '#e5e7eb', // Light gray hover effect
//                                     },
//                                 }}
//                             >
//                                 Back
//                             </Button>

//                             <Typography variant="h4" fontWeight="bold" gutterBottom color="black">
//                                 {project.project_name}
//                             </Typography>

//                             <Card sx={{
//                                 bgcolor: 'white',
//                                 p: 3,
//                                 borderRadius: 2,
//                                 boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
//                             }}>
//                                 <CardContent>
//                                     {['Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Completion Date'].map((field, index) => (
//                                         <Box key={index} sx={{ mb: 2 }}>
//                                             <Typography variant="body1" color="text.secondary">
//                                                 <strong>{field}:</strong> {project[field.toLowerCase()]}
//                                             </Typography>
//                                             <Divider sx={{ bgcolor: 'grey.300', mt: 1 }} />
//                                         </Box>
//                                     ))}

//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         sx={{
//                                             mt: 3,
//                                             width: '100%',
//                                             bgcolor: '#3b82f6', // Blue button
//                                             color: 'white',
//                                             fontWeight: 'bold',
//                                             textTransform: 'none',
//                                             borderRadius: 1,
//                                             '&:hover': {
//                                                 bgcolor: '#2563eb', // Darker blue on hover
//                                             },
//                                         }}
//                                     >
//                                         Download Project Document
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>

//                         {/* Right Side - Map and Additional Info */}
//                         <Grid item xs={12} lg={8}>
//                             <Card sx={{
//                                 bgcolor: 'white',
//                                 p: 3,
//                                 borderRadius: 2,
//                                 boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
//                             }}>
//                                 <CardContent>
//                                     <Box sx={{
//                                         height: '50vh',
//                                         bgcolor: '#f9fafb', // Light gray background for map placeholder
//                                         borderRadius: 2,
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         color: 'gray.600',
//                                     }}>
//                                         <Typography variant="h6">Map Placeholder</Typography>
//                                     </Box>
//                                 </CardContent>
//                             </Card>

//                             <Box sx={{ mt: 4 }}>
//                                 <Card sx={{
//                                     width: '50%',
//                                     bgcolor: 'white',
//                                     p: 3,
//                                     borderRadius: 2,
//                                     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
//                                 }}>
//                                     <CardContent>
//                                         <Typography variant="body1" color="text.secondary">
//                                             <strong>Registered Office:</strong> Gurugram
//                                         </Typography>
//                                         <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
//                                             <strong>Circle Rate:</strong> $100/sq.ft
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </div>
//         </>
//     );
// };

// export default Detail;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;

    if (!project) {
        return <p className="text-xl text-gray-500">No project data available.</p>;
    }

    return (
        <div className="w-full h-screen overflow-y-scroll scrollbar-hide bg-gray-50">
            <div className="p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Side - Project Details */}
                    <div className="col-span-1">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center mb-6 px-4 py-2 text-gray-700 font-bold bg-white rounded-lg shadow-sm hover:bg-gray-100 hover:shadow-md transition-all"
                        >
                            <ArrowLeft className="mr-2" />
                            Back
                        </button>

                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            {project.project_name}
                        </h1>

                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                            {['Sector', 'Cost', 'Status', 'Country', 'State', 'City', 'Start Date', 'Completion Date'].map((field, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-gray-600 font-medium">
                                        <strong>{field}:</strong> {project[field.toLowerCase()]}
                                    </p>
                                    <div className="border-t border-gray-200 mt-2"></div>
                                </div>
                            ))}

                            <button
                                className="mt-6 w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-sm hover:bg-blue-600 hover:shadow-md transition-all"
                            >
                                View Document
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Map and Additional Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 sm:h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                                <p className="text-xl">Map Placeholder</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="w-full sm:w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Registrar Office:</strong> Sector 44, Gurugram
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Circle Rate:</strong> $100/sq.ft
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>District Magistrate:</strong> Mr. John Doe
                                </p>
                                <p className="text-gray-600 font-medium mt-2">
                                    <strong>Population of District:</strong> 1.2 million
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;