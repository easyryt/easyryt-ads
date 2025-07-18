import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { Send, Phone, Email, LocationOn } from "@mui/icons-material";
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "./firebase";
import { useNavigate } from "react-router-dom";

const PremiumLanding = () => {
  const db = getDatabase(app);
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
  });

  // UI feedback state
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
      setPhoneError(cleanedValue.length < 10);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    const isPhoneValid = validatePhone(formData.phone);
    setPhoneError(!isPhoneValid);
    
    // Check all required fields
    if (!formData.name || !formData.email || !formData.serviceInterest || !isPhoneValid) {
      setSnackbarMessage("Please fill all required fields correctly");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      // Push data to Firebase
      const franchiseRef = ref(db, "franchiseApplications");
      const newApplicationRef = push(franchiseRef);
      await set(newApplicationRef, formData);

      // Show success message
      setSnackbarMessage("Data submitted successfully! Redirecting...");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceInterest: "",
      });

      // Delay navigation to allow user to see success message
      setTimeout(() => {
        navigate("/thankyou");
      }, 2000);
    } catch (error) {
      console.error("Firebase submit error: ", error);
      setSnackbarMessage(`Submission failed: ${error.message || "Please try again later"}`);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 1,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            EasyRyt Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Premium Google Ads Agency | Driving Results Since 2015
          </Typography>
        </Box>

        {/* Split Section - 60/40 layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          {/* Left Section - 60% width */}
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              p: { xs: 3, md: 6 },
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "white",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              Maximize Your{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(45deg, #64ffda 30%, #00e5ff 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                }}
              >
                ROI
              </Box>{" "}
              With Expert Google Ads Management
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
                fontSize: "1.2rem",
                fontWeight: 400,
              }}
            >
              We create data-driven campaigns that deliver measurable results
              and maximize your advertising budget.
            </Typography>

            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                p: 3,
                borderRadius: 2,
                borderLeft: "4px solid #64ffda",
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#64ffda",
                    borderRadius: "50%",
                    mr: 2,
                    boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: 500 }}
                >
                  Average 3.5x ROI for our clients in 2023
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#64ffda",
                    borderRadius: "50%",
                    mr: 2,
                    boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: 500 }}
                >
                  97% client retention rate
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#64ffda",
                    borderRadius: "50%",
                    mr: 2,
                    boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: 500 }}
                >
                  Google Premier Partner with 8+ years experience
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Form - 40% width */}
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              backgroundColor: "white",
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              position: "relative",
              overflow: "hidden",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 8,
                background: "linear-gradient(90deg, #00e5ff, #64ffda)",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: "linear-gradient(90deg, #1a2a6c, #3a6cb0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Request a Free Consultation
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#5f6368",
                mb: 4,
                fontSize: "1.1rem",
              }}
            >
              Get a personalized strategy session with our Google Ads experts
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="name"
                label="Your Name *"
                variant="outlined"
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "rgba(245, 247, 255, 0.7)",
                  },
                }}
              />

              <TextField
                fullWidth
                name="email"
                label="Email Address *"
                variant="outlined"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "rgba(245, 247, 255, 0.7)",
                  },
                }}
              />

              <TextField
                fullWidth
                name="phone"
                label="Phone Number * (10 digits)"
                variant="outlined"
                margin="normal"
                value={formData.phone}
                onChange={handleChange}
                required
                error={phoneError}
                helperText={phoneError ? "Must be 10 digits" : ""}
                inputProps={{
                  maxLength: 10,
                  inputMode: "numeric",
                  pattern: "[0-9]*"
                }}
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "rgba(245, 247, 255, 0.7)",
                  },
                }}
              />

              <FormControl fullWidth margin="normal" required>
                <InputLabel>Service Interest *</InputLabel>
                <Select
                  name="serviceInterest"
                  label="Service Interest *"
                  variant="outlined"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "rgba(245, 247, 255, 0.7)",
                  }}
                >
                  <MenuItem value="search">Search Campaigns</MenuItem>
                  <MenuItem value="display">Display Network</MenuItem>
                  <MenuItem value="video">Video Ads</MenuItem>
                  <MenuItem value="shopping">Shopping Campaigns</MenuItem>
                  <MenuItem value="app">App Promotion</MenuItem>
                  <MenuItem value="performance">Performance Max</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                endIcon={<Send />}
                disabled={loading}
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #1a2a6c, #3a6cb0)",
                  boxShadow: "0 4px 20px rgba(26, 115, 232, 0.4)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 7px 20px rgba(26, 115, 232, 0.6)",
                    background: "linear-gradient(90deg, #3a6cb0, #1a2a6c)",
                  },
                  "&:disabled": {
                    opacity: 0.7,
                  },
                }}
              >
                {loading ? "Submitting..." : "Get Free Strategy Session"}
              </Button>
            </form>
          </Box>
        </Box>

        {/* Contact Info Section */}
        <Grid
          container
          spacing={3}
          sx={{
            mt: 6,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Grid item sx={{ display: "flex", width: "340px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                transition: "all 0.3s",
                flex: 1,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "rgba(100, 255, 218, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 3,
                  flexShrink: 0,
                }}
              >
                <Phone sx={{ fontSize: 30, color: "#64ffda" }} />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Call Us
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  +91 9958280709
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ display: "flex", width: "340px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                transition: "all 0.3s",
                flex: 1,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "rgba(100, 255, 218, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 3,
                  flexShrink: 0,
                }}
              >
                <Email sx={{ fontSize: 30, color: "#64ffda" }} />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Email Us
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  info@easyryt.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ display: "flex", width: "340px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                transition: "all 0.3s",
                flex: 1,
                "&:hover": {
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  borderColor: "rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "rgba(100, 255, 218, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 3,
                  flexShrink: 0,
                }}
              >
                <LocationOn sx={{ fontSize: 30, color: "#64ffda" }} />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Our Location
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  Delhi, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PremiumLanding;