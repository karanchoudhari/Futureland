import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Country, State, City } from "country-state-city";
import { Plus, Upload, X, CheckCircle, Trash, Edit, FilePlus, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button, Box, Typography, Grid, Paper, Divider, IconButton, InputAdornment } from '@mui/material';
import axiosInstance from "../axiosInstance";

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
    districtMagistrate: '',
    population: '',
    registrarOffice: '',
    circleRate: '',
    kmlFile: null,
    documentFile: null,
  });

  const [sectors, setSectors] = useState(["Commercial", "Construction", "Education", "Factory", "Highways", "Infrastructure", "Mall", "Railways", "Residential", "Retail"]);

  const [newSector, setNewSector] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [shakeFields, setShakeFields] = useState([]);
  const [sectorError, setSectorError] = useState("");
  const [fileName, setFileName] = useState('');
  const [kmlFileName, setKmlFileName] = useState(''); // New state for KML file name
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [kmlFiles, setKmlFiles] = useState([]);

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
      if (editingProject.kmlFile) {
        setKmlFileName(editingProject.kmlFile.name || 'KML file uploaded');
      }
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

  const [document, setDocument] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "kmlFile") {
      const selectedFiles = Array.from(files);
      setKmlFiles(selectedFiles);
      setFormData({
        ...formData,
        [name]: selectedFiles[0],
      });
      // Set KML file name for display
      if (selectedFiles.length > 0) {
        setKmlFileName(
          selectedFiles.length > 1
            ? `${selectedFiles.length} files selected`
            : selectedFiles[0].name
        );
      } else {
        setKmlFileName('');
      }
    } else if (name === "documentFile") {
      const file = files[0];
      setDocument(file)
      setFormData({
        ...formData,
        [name]: file,
      });
      setFileName(file ? file.name : '');
      // console.log(fileName)
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

  const handleSubmit = async (payloadurl) => {
    console.log("upload kml s", JSON.stringify(formData, null, " "))
    console.log("upload kml s", JSON.stringify(payloadurl, null, " "))
    // return ;
    try {
      const payload = {
        project_name: formData.project_name,
        sector: formData.sector,
        cost: formData.cost,
        status: formData.status,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        startDate: formData.startDate?.toISOString().split("T")[0],
        endDate: formData.endDate?.toISOString().split("T")[0],
        contractor: formData.contractor,
        districtMagistrate: formData.districtMagistrate,
        population: formData.population,
        registrarOffice: formData.registrarOffice,
        circleRate: formData.circleRate,
        kml: payloadurl.kmlUrls ? payloadurl.kmlUrls : [],
        documentFile: payloadurl.documentUrl ? payloadurl.documentUrl : [],
      };

      if (editingProject) {
        const response = await axiosInstance.put(
          `/project/updateProject`,
          payload,
          {
            headers: {
              'x-company-id': companyId,
              'Content-Type': 'application/json',
              'x-project-id': editingProject._id
            },
          }
        );
        console.log('Project updated successfully:', response.data);
        setShowUpdateModal(true);
      } else {
        const response = await axiosInstance.post(
          '/project/createProject',
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
    onClose();
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    onClose();
  };

  const shouldShake = (fieldName) => {
    return shakeFields.includes(fieldName) ? "animate-shake" : "";
  };

  // const handleKmlUpload = async (e) => {
  //   e.preventDefault()
  //   // handleSubmit()
  //   console.log(` this is kmlk file ${kmlFiles}`)
  //   console.log(`this is document file ${JSON.stringify(document.name)}`)

  //   if (kmlFiles.length === 0 && document === '') {
  //     setMessage("No KML files selected!");
  //     console.log("No kml uploaded")
  //     await handleSubmit()
  //     return;
  //   }

  //   setIsUploading(true);
  //   setMessage("Uploading files...");

  //   try {
  //     for (const file of kmlFiles) {
  //       const formData = new FormData();
  //       formData.append("file", file);
  //       formData.append("upload_preset", "ml_default");

  //       const response = await axios.post(
  //         "https://api.cloudinary.com/v1_1/dnqrumfwn/upload",
  //         formData
  //       );

  //       await handleSubmit(response.data.secure_url);
  //     }
  //     setMessage("All files uploaded and stored successfully!");
  //   } catch (error) {
  //     setMessage("Upload failed. Please try again.");
  //     console.error("Upload Error:", error);
  //   } finally {
  //     setIsUploading(false);
  //     setKmlFiles([]);
  //   }
  // };

  const handleKmlUpload = async (e) => {
    e.preventDefault();
    console.log(`KML files: ${kmlFiles}`);
    console.log(`Document file: ${document?.name || "No document uploaded"}`);

    if (kmlFiles.length === 0 && !document) {
      setMessage("No files selected!");
      console.log("No files uploaded");
      await handleSubmit();
      return;
    }

    setIsUploading(true);
    setMessage("Uploading files...");

    try {
      let uploadedKmlUrls = [];
      let documentUrl = null;

      // Upload KML files if present
      if (kmlFiles.length > 0) {
        for (const file of kmlFiles) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "ml_default");

          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dnqrumfwn/upload",
            formData
          );

          uploadedKmlUrls.push(response.data.secure_url);
        }
      }

      // Upload document if present
      if (document) {
        const formData = new FormData();
        formData.append("file", document);
        formData.append("upload_preset", "ml_default");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dnqrumfwn/upload",
          formData
        );

        documentUrl = response.data.secure_url;
        console.log("Uploaded PDF URL:", documentUrl);
      }




      // Prepare data to submit
      const payload = {
        kmlUrls: uploadedKmlUrls.length > 0 ? uploadedKmlUrls : null,
        documentUrl: documentUrl || null,
      };

      await handleSubmit(payload);

      setMessage("Files uploaded and stored successfully!");
    } catch (error) {
      setMessage("Upload failed. Please try again.");
      console.error("Upload Error:", error);
    } finally {
      setIsUploading(false);
      setKmlFiles([]);
    }
  };



  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={2} ref={formRef}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4, maxWidth: 750, width: '100%', background: '#fff', mt: 0, position: 'relative' }}>
        <button
          className="absolute -top-2 -right-2 bg-white w-6 h-6 border border-gray-300 shadow-sm flex items-center justify-center rounded-full"
          onClick={onClose}
        >
          <X size={14} />
        </button>

        <Typography variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
          {editingProject ? "Edit Project" : "Add Project"}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <form onSubmit={(e) => handleKmlUpload(e)} autoComplete="off">
          <Grid container spacing={2}>
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
                SelectProps={{
                  renderValue: (selected) => selected,
                }}
              >
                <MenuItem value="">Select Sector</MenuItem>
                {sectors.map((sector, index) => (
                  <MenuItem key={index} value={sector}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                      {sector}
                      {formData.sector !== sector && (
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteSector(sector);
                          }}
                          size="small"
                        >
                          <X size={14} />
                        </IconButton>
                      )}
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              {/* <IconButton
                sx={{
                  position: 'absolute',
                  top: '4px',
                  right: '-12px',
                  backgroundColor: 'white',
                  width: 24,
                  height: 24,
                  boxShadow: 1,
                }}
                onClick={() => setShowModal(true)}
              >
                <Plus size={14} />
              </IconButton> */}

              <button
                className="absolute top-1 -right-3 bg-white w-6 h-6 border border-gray-300 shadow-sm flex items-center justify-center rounded-full"
                onClick={() => setShowModal(true)}
              >
                <Plus size={18} />
              </button>
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
              <TextField label="Contractor" fullWidth size="small" name="contractor" value={formData.contractor} onChange={handleChange} variant="outlined" />
            </Grid>

            {/* districtMagistrate */}
            <Grid item xs={12} md={6}>
              <TextField
                label="District Magistrate"
                fullWidth
                size="small"
                name="districtMagistrate"
                value={formData.districtMagistrate}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("districtMagistrate")}
              />
            </Grid>

            {/* population */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Population"
                fullWidth
                size="small"
                type="number"
                name="population"
                value={formData.population}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("population")}
              />
            </Grid>

            {/* registrarOffice */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Registrar Office"
                fullWidth
                size="small"
                name="registrarOffice"
                value={formData.registrarOffice}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("registrarOffice")}
              />
            </Grid>

            {/* circleRate */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Circle Rate (INR)"
                fullWidth
                size="small"
                name="circleRate"
                type="number"
                value={formData.circleRate}
                onChange={handleChange}
                variant="outlined"
                className={shouldShake("circleRate")}
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
              />
            </Grid>

            {/* KML File Upload */}
            <Grid item xs={12}>
              <Button
                component="label"
                fullWidth
                variant="outlined"
                sx={{ py: 1, border: '1px dashed #3b82f6', color: '#3b82f6', fontWeight: 'bold', borderRadius: 2, position: 'relative', }}
              >
                <MapPinned size={18} style={{ marginRight: '6px' }} />
                Upload KML
                <input type="file" name="kmlFile" accept=".kml, .kmz" multiple onChange={handleChange} disabled={isUploading} className="absolute inset-0 opacity-0 cursor-pointer" />
              </Button>
              {formData.kmlFile && (
                <Typography sx={{ color: '#3b82f6', fontWeight: 'medium', textAlign: 'center', mt: 1 }}>
                  {formData.kmlFile.name}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                component="label"
                fullWidth
                variant="outlined"
                sx={{
                  py: 1,
                  border: '1px dashed #3b82f6',
                  color: '#3b82f6',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  position: 'relative',
                }}
              >
                <FilePlus size={18} style={{ marginRight: '6px' }} />
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
                <Typography sx={{ color: '#3b82f6', fontWeight: 'medium', textAlign: 'center', mt: 1 }}>
                  {fileName}
                </Typography>
              )}
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 1, background: 'linear-gradient(135deg, #3b82f6, #6d28d9)', color: '#fff', fontWeight: 'bold', borderRadius: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Add Sector Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-lg p-6 w-80 relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-2 -right-2 bg-white w-6 h-6 border border-gray-300 shadow-sm flex items-center justify-center rounded-full"
                onClick={() => setShowModal(false)}
              >
                <X size={14} />
              </button>
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold mb-3">Add New Sector</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleAddSector();
                }} className="w-full">
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
                    sx={{ mb: 2 }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSector();
                      }
                    }}
                  />
                  <div className="flex justify-center w-full">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        py: 1,
                        background: 'linear-gradient(135deg, #3b82f6, #6d28d9)',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: 2,
                        width: '100%',
                        maxWidth: '120px'
                      }}
                      onClick={handleAddSector}
                    >
                      Add
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-md p-6 w-80 relative">
              <button onClick={closeSuccessModal} className="absolute top-1 right-1 p-1 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
                <h2 className="text-xl font-bold mb-1">Congratulations!</h2>
                <p className="text-gray-600 text-center text-sm">
                  Your project has been successfully submitted.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Update Modal */}
        {showUpdateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 relative">
              <button onClick={closeUpdateModal} className="absolute top-1 right-1 p-1 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col items-center">
                <Edit className="w-10 h-10 text-blue-500 mb-3" />
                <h2 className="text-xl font-bold mb-1">Successfully Updated!</h2>
                <p className="text-gray-600 text-center text-sm">Your project has been successfully updated.</p>
              </div>
            </div>
          </div>
        )}
      </Paper>
    </Box>
  );
};

export default AddProject1;