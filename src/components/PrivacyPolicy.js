import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4285F4",
    },
    secondary: {
      main: "#34A853",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.4rem",
      marginTop: "1.5rem",
      marginBottom: "0.8rem",
    },
    body1: {
      lineHeight: 1.7,
      marginBottom: "1rem",
    },
  },
});

const PrivacyPolicy = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          background: "linear-gradient(to bottom, #0a1929 0%, #121212 100%)",
        }}
      >
        {/* Header */}
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Hero Section */}
        <Box
          sx={{
            pt: 8,
            pb: 8,
            textAlign: "center",
            background:
              'linear-gradient(rgba(10, 25, 41, 0.9), rgba(10, 25, 41, 0.9)), url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Privacy Policy
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#e0e0e0", maxWidth: 700, mx: "auto" }}
            >
              At Easyryt, we prioritize your privacy. This policy outlines how
              we handle your data when you use our Google Ads services.
            </Typography>
            <Box
              sx={{
                mt: 3,
                p: 2,
                bgcolor: "rgba(0,0,0,0.3)",
                borderRadius: 2,
                display: "inline-block",
              }}
            >
              <Typography variant="body2">
                <strong>Last Updated:</strong> June 15, 2025 |{" "}
                <strong>Effective Date:</strong> June 15, 2025
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 } }}>
            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to Easyryt's Privacy Policy. As a Google Ads agency, we
                specialize in helping businesses maximize their advertising ROI.
                This document explains how we collect, use, and protect your
                information when you use our services.
              </Typography>
              <Typography variant="body1" paragraph>
                We respect your privacy and are committed to protecting your
                personal data in compliance with applicable laws, including GDPR
                and CCPA.
              </Typography>
              <Typography variant="body1" paragraph>
                By using our services, you consent to the practices described in
                this policy. If you do not agree with these terms, please
                refrain from using our services.
              </Typography>
            </Box>

            {/* Information Collection */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Information Collection
              </Typography>
              <Typography variant="body1" paragraph>
                We collect information necessary to provide our Google Ads
                services effectively:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2, mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "rgba(234, 67, 53, 0.1)",
                      borderRadius: 1,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#EA4335" }}>
                      Personal Information
                    </Typography>
                    <Typography variant="body2">
                      Name, email, phone number, business details, payment
                      information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "rgba(251, 188, 5, 0.1)",
                      borderRadius: 1,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#FBBC05" }}>
                      Technical Data
                    </Typography>
                    <Typography variant="body2">
                      IP address, browser type, device information, usage
                      patterns
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "rgba(52, 168, 83, 0.1)",
                      borderRadius: 1,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#34A853" }}>
                      Advertising Data
                    </Typography>
                    <Typography variant="body2">
                      Campaign performance, conversion data, audience insights
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "rgba(66, 133, 244, 0.1)",
                      borderRadius: 1,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#4285F4" }}>
                      Third-Party Data
                    </Typography>
                    <Typography variant="body2">
                      Information from Google Analytics, Ads platforms, and
                      partners
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" paragraph>
                We collect this information when you register, use our services,
                or interact with our website.
              </Typography>
            </Box>

            {/* Use of Information */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Use of Information
              </Typography>
              <Typography variant="body1" paragraph>
                We use your information to deliver and improve our Google Ads
                services:
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {[
                  "To create and manage Google Ads campaigns",
                  "To analyze campaign performance and optimize results",
                  "To provide customer support and service updates",
                  "To process payments and manage accounts",
                  "To send marketing communications (with consent)",
                  "To comply with legal obligations and prevent fraud",
                ].map((item, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{ py: 1, display: "flex", alignItems: "flex-start" }}
                  >
                    <Box
                      sx={{
                        minWidth: 24,
                        height: 24,
                        bgcolor: "#34A853",
                        borderRadius: "50%",
                        mr: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "white", fontSize: "0.8rem" }}
                      >
                        {index + 1}
                      </Typography>
                    </Box>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="body1" paragraph>
                We do not sell your personal information to third parties. We
                may share data with service providers who assist in delivering
                our services under strict confidentiality agreements.
              </Typography>
            </Box>

            {/* Data Protection */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Data Protection
              </Typography>
              <Typography variant="body1" paragraph>
                We implement robust security measures to protect your
                information:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2, mb: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: "center", p: 2, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#4285F4", mb: 1 }}>
                      🔒
                    </Box>
                    <Typography variant="h6">Encryption</Typography>
                    <Typography variant="body2">
                      Data encrypted in transit and at rest
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: "center", p: 2, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#34A853", mb: 1 }}>
                      🛡️
                    </Box>
                    <Typography variant="h6">Access Controls</Typography>
                    <Typography variant="body2">
                      Role-based access restrictions
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: "center", p: 2, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#FBBC05", mb: 1 }}>
                      🔍
                    </Box>
                    <Typography variant="h6">Audits</Typography>
                    <Typography variant="body2">
                      Regular security assessments
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ textAlign: "center", p: 2, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#EA4335", mb: 1 }}>
                      📋
                    </Box>
                    <Typography variant="h6">Compliance</Typography>
                    <Typography variant="body2">
                      Adherence to privacy regulations
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" paragraph>
                Despite our security measures, no method of transmission over
                the internet is 100% secure. We cannot guarantee absolute
                security but continually work to protect your data.
              </Typography>
            </Box>

            {/* Cookies */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Cookies & Tracking Technologies
              </Typography>
              <Typography variant="body1" paragraph>
                We use cookies to enhance your experience and analyze service
                usage:
              </Typography>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Essential Cookies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Necessary for website functionality. These include session
                    cookies for authentication and security.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Analytics Cookies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Help us understand how visitors interact with our website.
                    We use Google Analytics to collect anonymous data.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Advertising Cookies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Used to deliver relevant ads through Google Ads and measure
                    ad campaign performance.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Box
                sx={{ mt: 3, p: 2, bgcolor: "primary.dark", borderRadius: 1 }}
              >
                <Typography variant="body1">
                  You can manage cookie preferences through your browser
                  settings. Note that disabling cookies may affect website
                  functionality.
                </Typography>
              </Box>
            </Box>

            {/* Your Rights */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Your Rights
              </Typography>
              <Typography variant="body1" paragraph>
                Depending on your location, you may have rights regarding your
                personal data:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      height: "100%",
                      borderLeft: "4px solid #34A853",
                      bgcolor: "rgba(52, 168, 83, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Access & Correction
                    </Typography>
                    <Typography>
                      Request access to or correction of your personal
                      information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      height: "100%",
                      borderLeft: "4px solid #4285F4",
                      bgcolor: "rgba(66, 133, 244, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Data Portability
                    </Typography>
                    <Typography>
                      Request a copy of your data in a machine-readable format
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      height: "100%",
                      borderLeft: "4px solid #FBBC05",
                      bgcolor: "rgba(251, 188, 5, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Deletion
                    </Typography>
                    <Typography>
                      Request deletion of your personal information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      height: "100%",
                      borderLeft: "4px solid #EA4335",
                      bgcolor: "rgba(234, 67, 53, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Opt-Out
                    </Typography>
                    <Typography>
                      Opt out of marketing communications at any time
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mt: 3 }}>
                To exercise these rights, please contact us using the
                information below.
              </Typography>
            </Box>

            {/* Policy Updates */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Policy Updates
              </Typography>
              <Typography variant="body1" paragraph>
                We may update this policy periodically. Significant changes will
                be communicated through our website or email.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Recent Updates:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li">
                    <Typography variant="body1">
                      June 15, 2025: Added GDPR compliance details
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography variant="body1">
                      January 10, 2025: Revised cookie policy
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography variant="body1">
                      March 5, 2024: Initial policy implementation
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Contact Us */}
            <Box>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                For privacy-related inquiries or to exercise your rights:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon color="primary" sx={{ mr: 2 }} />
                    <div>
                      <Typography variant="body2">Email</Typography>
                      <Typography>info@easyryt.com</Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon color="primary" sx={{ mr: 2 }} />
                    <div>
                      <Typography variant="body2">Phone</Typography>
                      <Typography>+91 9958280709</Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocationIcon color="primary" sx={{ mr: 2 }} />
                    <div>
                      <Typography variant="body2">Address</Typography>
                      <Typography>1/3 East Patel Nagar, Delhi</Typography>
                    </div>
                  </Box>
                </Grid>
              </Grid>

              <Box
                sx={{ mt: 4, p: 3, bgcolor: "primary.dark", borderRadius: 1 }}
              >
                <Typography variant="h6" gutterBottom>
                  Data Protection Officer
                </Typography>
                <Typography>
                  dpo@easyryt.com
                  <br />
                  +91 9958280709
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;