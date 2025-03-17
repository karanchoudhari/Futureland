import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography, Paper, Grid, Divider, Modal } from '@mui/material';

const AddBlogs = () => {
  const [formData, setFormData] = useState({
    title: '',
    readTime: '',
    date: '',
    imageFile: null,
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFormData((prevData) => ({
          ...prevData,
          imageFile: file,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, imageFile: '' }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          imageFile: 'Please select a valid image file.',
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title) newErrors.title = true;
    if (!formData.readTime) newErrors.readTime = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.imageFile) newErrors.imageFile = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => setErrors({}), 500);
      return;
    }

    console.log('Form Data:', formData);
    setFormData({ title: '', readTime: '', date: '', imageFile: null });
    setShowSuccessModal(true);
  };

  const shakeEffect = {
    border: '2px solid red',
    borderRadius: '8px',
    animation: 'shake 0.3s ease-in-out',
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" p={4}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 6, maxWidth: 850, width: '100%', background: '#fff', mt: 0 }}>
        <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
          Add Blog
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
            `}
          </style>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Title"
                fullWidth
                size="small"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
                sx={errors.title ? shakeEffect : {}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Read Time"
                fullWidth
                size="small"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                variant="outlined"
                sx={errors.readTime ? shakeEffect : {}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Publication Date"
                type="date"
                fullWidth
                size="small"
                name="date"
                value={formData.date}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={errors.date ? shakeEffect : {}}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                fullWidth
                size="small"
                variant="outlined"
                sx={errors.imageFile ? shakeEffect : {}}
              />
              {formData.imageFile && (
                <Typography variant="body2" color="textSecondary" mt={1}>
                  Selected File: {formData.imageFile.name}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}>
          <Typography variant="h6" align="center" gutterBottom>
            Blog submitted successfully!
          </Typography>
          <Button fullWidth variant="contained" onClick={() => setShowSuccessModal(false)}>
            OK
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddBlogs;
