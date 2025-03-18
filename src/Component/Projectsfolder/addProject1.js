// new edit code here if it not work use upside code 
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";
import { Plus, Upload, X, CheckCircle, Trash, Edit, FilePlus, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Box, Typography, Grid, Paper, Divider, IconButton } from '@mui/material';

const AddProject1 = ({ editingProject, onClose }) => {
  const [formData, setFormData] = useState({
    project_name: "",
    sector: "",
    cost: "",
    status: "",
    country: "",
    state: "",
    city: "",
    startDate: null,
    endDate: null,
    contractor: "",
    kmlFile: null,
    documentFile: null,
  });

  const [sectors, setSectors] = useState(["Construction", "Retail", "Infrastructure", "Education", "Commercial"]);
  const [newSector, setNewSector] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [shakeFields, setShakeFields] = useState([]);
  const [sectorError, setSectorError] = useState("");
  const [fileName, setFileName] = useState('');

  const companyId = '67ce66294f28f85e4ff91e2c';
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    if (editingProject) {
      setFormData({
        ...editingProject,
        startDate: editingProject.startDate ? new Date(editingProject.startDate) : null,
        endDate: editingProject.endDate ? new Date(editingProject.endDate) : null,
      });
    }
  }, [editingProject]);

  const handleAddSector = () => {
    if (newSector.trim() && !sectors.includes(newSector.trim())) {
      setSectors((prev) => [...prev, newSector.trim()]);
      setNewSector("");
      setShowModal(false);
      setSectorError("");
    } else {
      setSectorError("Sector already exists or invalid input!");
      setShakeFields(["sector"]);
    }
  };

  const handleDeleteSector = (sectorToDelete) => {
    setSectors((prev) => prev.filter((sector) => sector !== sectorToDelete));
    if (formData.sector === sectorToDelete) {
      setFormData({ ...formData, sector: "" });
    }
  };

  const getCountryCode = (countryName) => {
    const country = Country.getAllCountries().find((c) => c.name === countryName);
    return country ? country.isoCode : "";
  };

  const getStateCode = (stateName, countryCode) => {
    const state = State.getStatesOfCountry(countryCode).find((s) => s.name === stateName);
    return state ? state.isoCode : "";
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "kmlFile") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (name === "documentFile") {
      const file = files[0];
      if (file) setFileName(file.name);
    } else if (name === "country") {
      setFormData({
        ...formData,
        [name]: value,
        state: "",
        city: "",
      });
    } else if (name === "state") {
      setFormData({
        ...formData,
        [name]: value,
        city: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date, field) => {
    setFormData({
      ...formData,
      [field]: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for empty fields
    const emptyFields = Object.entries(formData)
      .filter(([key, value]) => {
        if (key === "startDate" || key === "endDate") {
          return value === null;
        }
        return value === "";
      })
      .map(([key]) => key);
  
    if (emptyFields.length > 0) {
      setShakeFields(emptyFields); // Set fields to shake
      setTimeout(() => setShakeFields([]), 500); // Reset shake after 500ms
      return;
    }
  
    try {
      const payload = {
        projectname: formData.project_name, // Map project_name to projectname
        sector: formData.sector,
        cost: formData.cost,
        stages: formData.status, // Map status to stages
        country: formData.country,
        state: formData.state,
        city: formData.city,
        startDate: formData.startDate?.toISOString().split("T")[0],
        endDate: formData.endDate?.toISOString().split("T")[0],
        contractor: formData.contractor,
        kml: formData.kmlFile ? [{ url: "https://example.com/kml-file-url" }] : [], // Mock URL for testing
      };
  
      if (editingProject) {
        // Update project
        const response = await axios.put(
          `http://localhost:3002/api/project/updateProject/${editingProject._id}`,
          payload,
          {
            headers: {
              'x-company-id': companyId,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Project updated successfully:', response.data);
        setShowUpdateModal(true);
      } else {
        // Create new project
        const response = await axios.post(
          'http://localhost:3002/api/project/createProject',
          payload,
          {
            headers: {
              'x-company-id': companyId,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Project created successfully:', response.data);
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error submitting project:', error.response?.data || error.message);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    onClose(); // Close the form after success
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    onClose(); // Close the form after update
  };

  const shouldShake = (fieldName) => {
    return shakeFields.includes(fieldName) ? "animate-shake" : "";
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={4} ref={formRef}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
          {editingProject ? "Edit Project" : "Add Project"}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <Grid container spacing={2.5}>
            {/* Project Name */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Project Name"
                fullWidth
                size="small"
                name="project_name"
                value={formData.project_name}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("project_name")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("project_name"),
                }}
              />
            </Grid>

            {/* Sector */}
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
              <TextField
                label="Sector"
                select
                fullWidth
                size="small"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("sector")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("sector"),
                }}
                SelectProps={{
                  renderValue: (selected) => selected, // Only show the selected value, no cross icon
                }}
              >
                <MenuItem value="">Select Sector</MenuItem>
                {sectors.map((sector, index) => (
                  <MenuItem key={index} value={sector}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                      {sector}
                      {formData.sector !== sector && ( // Show cross icon only if the sector is not selected
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSector(sector);
                          }}
                          size="small"
                        >
                          <X size={16} />
                        </IconButton>
                      )}
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '5px',
                  right: '-15px',
                  backgroundColor: 'white',
                  width: 28,
                  height: 28,
                  boxShadow: 2,
                }}
                onClick={() => setShowModal(true)}
              >
                <Plus size={16} />
              </IconButton>
            </Grid>

            {/* Cost */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Cost (INR)"
                type="number"
                fullWidth
                size="small"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("cost")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("cost"),
                }}
              />
            </Grid>

            {/* Status */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Status"
                select
                fullWidth
                size="small"
                name="status"
                value={formData.status}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("status")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("status"),
                }}
              >
                <MenuItem value="">Select Status</MenuItem>
                <MenuItem value="Conceptual">Conceptual</MenuItem>
                <MenuItem value="DPR">DPR</MenuItem>
                <MenuItem value="Tender">Tender</MenuItem>
                <MenuItem value="Under-Construction">Under-Construction</MenuItem>
                <MenuItem value="Constructed">Constructed</MenuItem>
              </TextField>
            </Grid>

            {/* Country */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Country"
                select
                fullWidth
                size="small"
                name="country"
                value={formData.country}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("country")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("country"),
                }}
              >
                <MenuItem value="">Select Country</MenuItem>
                {Country.getAllCountries().map((country) => (
                  <MenuItem key={country.isoCode} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* State */}
            <Grid item xs={12} md={6}>
              <TextField
                label="State"
                select
                fullWidth
                size="small"
                name="state"
                value={formData.state}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("state")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("state"),
                }}
              >
                <MenuItem value="">Select State</MenuItem>
                {State.getStatesOfCountry(getCountryCode(formData.country)).map((state) => (
                  <MenuItem key={state.isoCode} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* City */}
            <Grid item xs={12} md={6}>
              <TextField
                label="City"
                select
                fullWidth
                size="small"
                name="city"
                value={formData.city}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("city")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("city"),
                }}
              >
                <MenuItem value="">Select City</MenuItem>
                {City.getCitiesOfState(getCountryCode(formData.country), getStateCode(formData.state, getCountryCode(formData.country))).map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Contractor */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Contractor"
                fullWidth
                size="small"
                name="contractor"
                value={formData.contractor}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("contractor")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("contractor"),
                }}
              />
            </Grid>

            {/* Start Date */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                name="startDate"
                value={formData.startDate ? formData.startDate.toISOString().split('T')[0] : ""}
                onChange={(e) => handleDateChange(new Date(e.target.value), "startDate")}
                variant="outlined"
                className={shouldShake("start")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("start"),
                }}
              />
            </Grid>

            {/* Finish Date */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Finish Date"
                type="date"
                fullWidth
                size="small"
                InputLabelProps={{ shrink: true }}
                name="endDate"
                value={formData.endDate ? formData.endDate.toISOString().split('T')[0] : ""}
                onChange={(e) => handleDateChange(new Date(e.target.value), "endDate")}
                variant="outlined"
                className={shouldShake("finish")}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.animate-shake fieldset': {
                      borderColor: 'red',
                    },
                  },
                }}
                InputProps={{
                  className: shouldShake("finish"),
                }}
              />
            </Grid>

            {/* KML File Upload */}
            <Grid item xs={12}>
              <Button
                component="label"
                fullWidth
                variant="outlined"
                sx={{ mt: 2, py: 1, border: '1px dashed #3b82f6', color: '#3b82f6', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, position: 'relative' }}
              >
                <MapPinned size={20} style={{ marginRight: '8px' }} />
                Upload KML File
                <input
                  type="file"
                  name="kmlFile"
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  accept=".kml"
                />
              </Button>
            </Grid>

            {/* Document File Upload */}
            <Grid item xs={12}>
              <Button
                component="label"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                  py: 1,
                  border: '1px dashed #3b82f6',
                  color: '#3b82f6',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  borderRadius: 3,
                  position: 'relative',
                }}
              >
                <FilePlus size={20} style={{ marginRight: '8px' }} />
                Upload Document
                <input
                  type="file"
                  name="documentFile"
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  accept=".pdf,.doc,.docx"
                />
              </Button>
              {fileName && (
                <div className="flex justify-center items-center">
                  <Typography sx={{ color: '#3b82f6', fontWeight: 'medium' }}>
                    {fileName}
                  </Typography>
                </div>
              )}
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Add Sector Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white rounded-lg p-8 w-96 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Add New Sector</h2>
                <TextField
                  autoComplete="off"
                  label="New Sector"
                  fullWidth
                  size="small"
                  value={newSector}
                  onChange={(e) => setNewSector(e.target.value)}
                  variant="outlined"
                  className={shouldShake("sector")}
                  error={!!sectorError}
                  helperText={sectorError}
                />
                <Button
                  variant="contained"
                  sx={{ mt: 3, py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', fontSize: '1rem', borderRadius: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
                  onClick={handleAddSector}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        )}

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
                <p className="text-gray-600 text-center">Your project has been successfully submitted.</p>
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
                <p className="text-gray-600 text-center">Your project has been successfully updated.</p>
              </div>
            </div>
          </div>
        )}
      </Paper>
    </Box>
  );
};

export default AddProject1;