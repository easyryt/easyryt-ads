import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Link,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
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

const TermsAndConditions = () => {
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
              Terms and Conditions
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#e0e0e0", maxWidth: 700, mx: "auto" }}
            >
              These terms govern your use of Easyryt's Google Ads services.
              Please read them carefully.
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
                Welcome to Easyryt's Terms and Conditions. These terms outline
                the rules and regulations for the use of our Google Ads
                services.
              </Typography>
              <Typography variant="body1" paragraph>
                By accessing or using our services, you agree to be bound by
                these Terms. If you disagree with any part of these terms, you
                may not access the service.
              </Typography>
              <Typography variant="body1" paragraph>
                Our services are designed to help businesses maximize their
                advertising ROI through Google Ads campaigns.
              </Typography>
            </Box>

            {/* Acceptance of Terms */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Acceptance of Terms
              </Typography>
              <Typography variant="body1" paragraph>
                By using our services, you confirm that:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2, mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "rgba(66, 133, 244, 0.1)",
                      borderRadius: 2,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#4285F4" }}>
                      Legal Capacity
                    </Typography>
                    <Typography variant="body2">
                      You have the legal capacity to enter into a binding
                      agreement
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "rgba(52, 168, 83, 0.1)",
                      borderRadius: 2,
                      height: "100%",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "#34A853" }}>
                      Accurate Information
                    </Typography>
                    <Typography variant="body2">
                      All information provided is accurate and complete
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" paragraph>
                Your continued use of our services constitutes ongoing
                acceptance of these terms.
              </Typography>
            </Box>

            {/* Services */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Our Services
              </Typography>
              <Typography variant="body1" paragraph>
                Easyryt provides professional Google Ads management services
                including:
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {[
                  "Campaign strategy development and implementation",
                  "Keyword research and selection",
                  "Ad creation and optimization",
                  "Performance monitoring and reporting",
                  "Conversion tracking setup",
                  "Budget management and optimization",
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
                        bgcolor: "#4285F4",
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
                We reserve the right to modify or discontinue our services at
                any time without notice.
              </Typography>
            </Box>

            {/* User Obligations */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                User Obligations
              </Typography>
              <Typography variant="body1" paragraph>
                As a user of our services, you agree to:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2, mb: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "center", p: 3, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#EA4335", mb: 1 }}>
                      🔐
                    </Box>
                    <Typography variant="h6">Provide Access</Typography>
                    <Typography variant="body2">
                      Grant necessary access to your Google Ads account
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "center", p: 3, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#FBBC05", mb: 1 }}>
                      💳
                    </Box>
                    <Typography variant="h6">Timely Payments</Typography>
                    <Typography variant="body2">
                      Make payments according to agreed schedules
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ textAlign: "center", p: 3, mb: 2 }}>
                    <Box sx={{ fontSize: "2rem", color: "#34A853", mb: 1 }}>
                      📈
                    </Box>
                    <Typography variant="h6">Collaborate</Typography>
                    <Typography variant="body2">
                      Provide feedback and collaborate on campaign strategies
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" paragraph>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account.
              </Typography>
            </Box>

            {/* Payments */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Payments and Billing
              </Typography>
              <Typography variant="body1" paragraph>
                Our fees are based on the services selected. Payment terms are
                as follows:
              </Typography>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Service Fees</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Fees are charged monthly in advance. We offer different
                    pricing tiers based on campaign complexity and budget size.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Payment Methods</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We accept credit cards, bank transfers, and online payment
                    platforms. All payments are processed securely.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Late Payments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Late payments may result in service suspension. A late fee
                    of 1.5% per month may be applied to overdue balances.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>

            {/* Intellectual Property */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Intellectual Property
              </Typography>
              <Typography variant="body1" paragraph>
                Ownership of intellectual property is defined as follows:
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      height: "100%",
                      borderLeft: "4px solid #4285F4",
                      bgcolor: "rgba(66, 133, 244, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Client Materials
                    </Typography>
                    <Typography>
                      You retain ownership of all materials, content, and data
                      you provide to us.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      height: "100%",
                      borderLeft: "4px solid #34A853",
                      bgcolor: "rgba(52, 168, 83, 0.05)",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Easyryt Materials
                    </Typography>
                    <Typography>
                      We retain ownership of our methodologies, processes,
                      templates, and proprietary tools.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mt: 3 }}>
                We grant you a limited license to use campaign materials
                specifically created for your account during the term of our
                agreement.
              </Typography>
            </Box>

            {/* Termination */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Termination
              </Typography>
              <Typography variant="body1" paragraph>
                Either party may terminate this agreement:
              </Typography>

              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {[
                  "With 30 days written notice for any reason",
                  "Immediately for material breach of these terms",
                  "If either party becomes insolvent or declares bankruptcy",
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
                        bgcolor: "#EA4335",
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
                Upon termination, you will pay all outstanding fees, and we will
                provide a final campaign report and transfer account access.
              </Typography>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Limitation of Liability
              </Typography>
              <Typography variant="body1" paragraph>
                To the maximum extent permitted by law:
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  bgcolor: "rgba(234, 67, 53, 0.1)",
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1" paragraph>
                  In no event shall Easyryt be liable for any indirect,
                  incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use,
                  goodwill, or other intangible losses, resulting from:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li">
                    <Typography>
                      Your access to or use of or inability to access or use the
                      services
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography>
                      Any conduct or content of any third party on the services
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography>
                      Unauthorized access, use or alteration of your
                      transmissions or content
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Governing Law */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Governing Law
              </Typography>
              <Typography variant="body1" paragraph>
                These Terms shall be governed and construed in accordance with
                the laws of India, without regard to its conflict of law
                provisions.
              </Typography>
              <Typography variant="body1" paragraph>
                Any disputes arising under or in connection with these Terms
                shall be subject to the exclusive jurisdiction of the courts
                located in Delhi, India.
              </Typography>
            </Box>

            {/* Changes to Terms */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 700, color: "#4285F4" }}
              >
                Changes to Terms
              </Typography>
              <Typography variant="body1" paragraph>
                We reserve the right to modify these Terms at any time. We will
                provide notice of material changes through our website or via
                email.
              </Typography>
              <Typography variant="body1" paragraph>
                Your continued use of our services after any such changes
                constitutes your acceptance of the new Terms.
              </Typography>
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
                For questions about these Terms:
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
            </Box>
          </Paper>
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default TermsAndConditions;
