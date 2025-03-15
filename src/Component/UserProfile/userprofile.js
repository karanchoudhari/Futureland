// import React from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';

// const UserProfile = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//           User Profile
//         </Typography>

//         <Grid container spacing={3}>
//           {/* Company Name */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Company Name"
//               variant="outlined"
//               defaultValue="My Company Inc."
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           {/* Name */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               variant="outlined"
//               defaultValue="John Doe"
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               defaultValue="john.doe@example.com"
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           {/* Phone */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               variant="outlined"
//               defaultValue="+1 234 567 890"
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               defaultValue="********"
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           {/* Expiry Date */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Expiry Date"
//               variant="outlined"
//               defaultValue="2025-12-31"
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Forget Password Button */}
//         <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
//           <Button variant="contained" color="primary">
//             Forget Password
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UserProfile;







// tailwind 
import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label className="block text-gray-600 mb-1">Company Name</label>
          <input 
            type="text" 
            value="My Company Inc." 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input 
            type="text" 
            value="John Doe" 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input 
            type="email" 
            value="john.doe@example.com" 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 mb-1">Phone</label>
          <input 
            type="text" 
            value="+1 234 567 890" 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-600 mb-1">Password</label>
          <input 
            type="password" 
            value="********" 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block text-gray-600 mb-1">Expiry Date</label>
          <input 
            type="text" 
            value="2025-12-31" 
            readOnly 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>
      </div>

      {/* Forget Password Button */}
      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Forget Password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;













// import React from 'react';
// import { Building, User, Mail, Phone, Lock, Calendar } from 'lucide-react';

// const UserProfile = () => {

//     const UserProfile = "user"
//   return (
//     <div className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">{UserProfile}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Company Name */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <Building className="w-5 h-5" /> Company Name
//           </label>
//           <input 
//             type="text" 
//             value="My Company Inc." 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>

//         {/* Name */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <User className="w-5 h-5" /> Name
//           </label>
//           <input 
//             type="text" 
//             value="John Doe" 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <Mail className="w-5 h-5" /> Email
//           </label>
//           <input 
//             type="email" 
//             value="john.doe@example.com" 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <Phone className="w-5 h-5" /> Phone
//           </label>
//           <input 
//             type="text" 
//             value="+1 234 567 890" 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <Lock className="w-5 h-5" /> Password
//           </label>
//           <input 
//             type="password" 
//             value="********" 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>

//         {/* Expiry Date */}
//         <div>
//           <label className="flex items-center gap-2 text-gray-600 mb-1">
//             <Calendar className="w-5 h-5" /> Expiry Date
//           </label>
//           <input 
//             type="text" 
//             value="2025-12-31" 
//             readOnly 
//             className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
//           />
//         </div>
//       </div>

//       {/* Forget Password Button */}
//       <div className="mt-6 text-right">
//         <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//           Forget Password
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;




















// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper, Box, Avatar, IconButton } from '@mui/material';
// import { Pencil, Save } from 'lucide-react'; // Import Lucide icons

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     companyName: 'My Company Inc.',
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 234 567 890',
//     password: '********',
//     expiryDate: '2025-12-31',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Add logic to save data to backend
//     console.log('Saved:', userData);
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
//         {/* Header */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//             User Profile
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={isEditing ? <Save size={20} /> : <Pencil size={20} />} // Lucide icons
//             onClick={isEditing ? handleSave : () => setIsEditing(true)}
//           >
//             {isEditing ? 'Save' : 'Edit'}
//           </Button>
//         </Box>

//         {/* Profile Picture */}
//         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//           <IconButton sx={{ position: 'relative' }}>
//             <Avatar
//               alt="Profile Picture"
//               src="https://via.placeholder.com/150"
//               sx={{ width: 120, height: 120 }}
//             />
//             {isEditing && (
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: 0,
//                   right: 0,
//                   backgroundColor: 'primary.main',
//                   borderRadius: '50%',
//                   p: 1,
//                 }}
//               >
//                 <Pencil size={20} color="white" /> {/* Lucide icon */}
//               </Box>
//             )}
//           </IconButton>
//         </Box>

//         {/* Form Fields */}
//         <Grid container spacing={3}>
//           {/* Company Name */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Company Name"
//               name="companyName"
//               value={userData.companyName}
//               onChange={handleChange}
//               variant="outlined"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//             />
//           </Grid>

//           {/* Name */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={userData.name}
//               onChange={handleChange}
//               variant="outlined"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//               variant="outlined"
//               type="email"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//             />
//           </Grid>

//           {/* Phone */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={userData.phone}
//               onChange={handleChange}
//               variant="outlined"
//               type="tel"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//               variant="outlined"
//               type="password"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//             />
//           </Grid>

//           {/* Expiry Date */}
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Expiry Date"
//               name="expiryDate"
//               value={userData.expiryDate}
//               onChange={handleChange}
//               variant="outlined"
//               type="date"
//               InputProps={{
//                 readOnly: !isEditing,
//               }}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* Forget Password Button */}
//         <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
//           <Button variant="outlined" color="secondary">
//             Forget Password
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default UserProfile;