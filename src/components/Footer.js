import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";

const Footer = () => {
    const handleWhatsApp = () => {
    window.open('https://wa.me/919958280709', '_blank');
  };
  return (
    <Box
      component="footer"
      sx={{
        color: "#e0e0e0",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        pt: 4,
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "linear-gradient(90deg, #ff416c, #ff4b2b, #ff8a00)",
          zIndex: 1,
        },
      }}
    >
      {/* Animated background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            backgroundColor: "#ff8a00",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 },
          pb: 4,
        }}
      >
        {/* Main content grid - Modified to have 3 equal columns */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Offices section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#fff",
                  position: "relative",
                  display: "inline-block",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "60px",
                    height: "3px",
                    background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                    borderRadius: "3px",
                  },
                }}
              >
                Our Offices
              </Typography>

              <Box
                mb={3}
                component={motion.div}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  p: 3,
                  borderRadius: "8px",
                  borderLeft: "3px solid #ff4b2b",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <LocationCityIcon sx={{ mr: 1.5, color: "#ff8a00" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#fff" }}
                  >
                    Delhi Office
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 4.5, color: "#e0e0e0" }}>
                  F 298, Sec 63, Noida, 201301
                </Typography>
              </Box>

              <Box
                component={motion.div}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  p: 3,
                  borderRadius: "8px",
                  borderLeft: "3px solid #ff416c",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <LocationCityIcon sx={{ mr: 1.5, color: "#ff8a00" }} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#fff" }}
                  >
                    Headquarters
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 4.5, color: "#e0e0e0" }}>
                  1/3 East Patel Nagar, Delhi 110008
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#fff",
                  position: "relative",
                  display: "inline-block",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: "60px",
                    height: "3px",
                    background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                    borderRadius: "3px",
                  },
                }}
              >
                Contact Us
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: "#ff8a00" }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: "#aaa" }}>
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      info@easyryt.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: "#ff8a00" }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: "#aaa" }}>
                      Phone
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      +91 9958280709
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PlaceIcon sx={{ mr: 2, color: "#ff8a00" }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: "#aaa" }}>
                      Visit Us
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      1/3 East Patel Nagar, Delhi
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* CTA Section - Fixed to take 4 columns */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  p: 4,
                  borderRadius: "12px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#fff",
                  }}
                >
                  Expand Your Digital Reach
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0" , width:"300px"}}>
                  Partner with our marketing wizards to elevate your brand and
                  reach new audiences. Let's create something extraordinary
                  together.
                </Typography>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                      color: "#fff",
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: "8px",
                      boxShadow: "0 4px 20px rgba(255, 75, 43, 0.4)",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                        boxShadow: "0 6px 24px rgba(255, 75, 43, 0.6)",
                      },
                    }}
                    onClick={handleWhatsApp}
                  >
                    GET IN TOUCH
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <br />
        <br />

        {/* Bottom Footer */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            color: "#aaa",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="body2">
            © Copyright 2024 Tangence. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookies", "Sitemap"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    sx={{
                      color: "#aaa",
                      textDecoration: "none",
                      position: "relative",
                      fontSize: "0.9rem",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        width: 0,
                        height: "1px",
                        bottom: -2,
                        left: 0,
                        backgroundColor: "#ff8a00",
                        transition: "width 0.3s",
                      },
                      "&:hover": {
                        color: "#fff",
                        "&:after": {
                          width: "100%",
                        },
                      },
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
