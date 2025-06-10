import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import ImageIcon from "@mui/icons-material/Image";
import { motion } from "framer-motion";
import proofAnalytics from "./images/proof-analytics.png";

const StatBox = ({ label, clicks, conversions, costPerConv, roas, color }) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.35)" }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        p: 3,
        minWidth: 180,
        background:
          "linear-gradient(145deg, rgba(20, 25, 45, 0.8), rgba(15, 20, 40, 0.95))",
        backdropFilter: "blur(14px)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(76, 95, 172, 0.3)",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: color,
        },
      }}
    >
      <Typography
        variant="button"
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          color: color,
          mb: 1.5,
          display: "block",
          textShadow: "0 0 8px rgba(255,255,255,0.1)",
        }}
      >
        {label}
      </Typography>
      <Box>
        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography variant="body2" fontWeight={500} color="#a0b0e0">
            Clicks:
          </Typography>
          <Typography variant="body2" fontWeight={800} color="#4dabf5">
            {clicks}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography variant="body2" fontWeight={500} color="#a0b0e0">
            Conversions:
          </Typography>
          <Typography variant="body2" fontWeight={800} color="#ff6b6b">
            {conversions}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1.5}>
          <Typography variant="body2" fontWeight={500} color="#a0b0e0">
            Cost/Conv:
          </Typography>
          <Typography variant="body2" fontWeight={800} color="#fff">
            ₹{costPerConv}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" fontWeight={500} color="#a0b0e0">
            Actual ROAS:
          </Typography>
          <Typography variant="body2" fontWeight={800} color="#51cf66">
            {roas}%
          </Typography>
        </Box>
      </Box>
    </Paper>
  </motion.div>
);

const ProofImageCard = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    style={{ width: "100%" }}
  >
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        height: { xs: 300, sm: 400 },
        position: "relative",
        background:
          "linear-gradient(145deg, rgba(25, 30, 50, 0.9), rgba(20, 25, 45, 0.95))",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(76, 95, 172, 0.3)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={proofAnalytics}
        alt="Campaign Performance Proof"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 0.5s ease",
          filter: "brightness(0.9) contrast(1.1)",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "rgba(28, 52, 121, 0.9)",
            color: "#fff",
            px: 2,
            py: 1,
            borderRadius: 2,
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 1,
            backdropFilter: "blur(4px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            border: "1px solid rgba(100, 120, 220, 0.3)",
          }}
        >
          PERFORMANCE PROOF
        </Box>
      </motion.div>
    </Paper>
  </motion.div>
);

const GoogleAdsExpertSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(rgba(56, 142, 60, 0.12), transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="center"
          position="relative"
          zIndex={1}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                  background:
                    "linear-gradient(90deg, #4dabf5, #51cf66, #ffd43b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.5px",
                  textShadow: "0 0 20px rgba(77, 171, 245, 0.2)",
                }}
              >
                Premium Google Ads Expertise
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: "#c0c8e0",
                  fontWeight: 400,
                  fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  lineHeight: 1.7,
                }}
              >
                Drive more leads, boost sales, and maximize ROI with
                performance-driven strategies tailored for your business growth
              </Typography>

              <Box
                sx={{
                  background:
                    "linear-gradient(145deg, rgba(25, 30, 50, 0.8), rgba(20, 25, 45, 0.9))",
                  p: 3,
                  borderRadius: 4,
                  mb: 4,
                  borderLeft: "4px solid #4dabf5",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(76, 95, 172, 0.2)",
                }}
              >
                <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ mb: 1.5, fontSize: "1.1rem", color: "#e0e6ff" }}
                    >
                      <Box
                        component="span"
                        sx={{ fontWeight: 800, color: "#4dabf5" }}
                      >
                        Increase Sales by 120%
                      </Box>
                      - E-commerce Case Study
                    </Typography>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ mb: 1.5, fontSize: "1.1rem", color: "#e0e6ff" }}
                    >
                      <Box
                        component="span"
                        sx={{ fontWeight: 800, color: "#4dabf5" }}
                      >
                        Increase Leads by 210%
                      </Box>
                      - SaaS Company Case Study
                    </Typography>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1.1rem", color: "#e0e6ff" }}
                    >
                      <Box
                        component="span"
                        sx={{ fontWeight: 800, color: "#4dabf5" }}
                      >
                        Increase Conversion by 535%
                      </Box>
                      - Local Service Business
                    </Typography>
                  </motion.li>
                </ul>
              </Box>

              <Box mt={4} display="flex" flexDirection="column" gap={3}>
                <Box display="flex" flexWrap="wrap" alignItems="center" gap={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    sx={{ color: "#4dabf5" }}
                  >
                    <CallIcon fontSize="medium" sx={{ color: "#4dabf5" }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#e0e6ff",
                      }}
                    >
                      +91 9958280709
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    sx={{ color: "#ff6b6b" }}
                  >
                    <MailIcon fontSize="medium" sx={{ color: "#ff6b6b" }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#e0e6ff",
                      }}
                    >
                      info@easyryt.com
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" flexWrap="wrap" alignItems="center" gap={3}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    sx={{ color: "#ffd43b" }}
                  >
                    <LanguageIcon fontSize="medium" sx={{ color: "#ffd43b" }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#e0e6ff",
                      }}
                    >
                      easyryt.com
                    </Typography>
                  </Box>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(37, 211, 102, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                      size="medium"
                      href="https://wa.me/919958280709"
                      target="_blank"
                      sx={{
                        backgroundColor: "#25D366",
                        borderRadius: "12px",
                        px: 4,
                        py: 1.4,
                        fontWeight: 700,
                        fontSize: "1rem",
                        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)",
                        "&:hover": {
                          backgroundColor: "#128C7E",
                          boxShadow: "0 15px 35px rgba(37, 211, 102, 0.6)",
                        },
                      }}
                    >
                      WhatsApp Now
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <StatBox
                      label="BEFORE"
                      clicks="14.9K"
                      conversions="324.49"
                      costPerConv="180"
                      roas="583.52"
                      color="#ff6b6b"
                    />
                  </motion.div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: isMobile ? "row" : "column",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ArrowDownwardIcon
                      sx={{
                        fontSize: 48,
                        color: "#51cf66",
                        mx: isMobile ? 2 : 0,
                        my: isMobile ? 0 : 2,
                        transform: isMobile ? "rotate(90deg)" : "none",
                        filter: "drop-shadow(0 0 8px rgba(81, 207, 102, 0.4))",
                      }}
                    />
                  </motion.div>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: "#51cf66",
                      textAlign: "center",
                      fontSize: "0.95rem",
                      letterSpacing: 0.5,
                      textShadow: "0 0 8px rgba(81, 207, 102, 0.2)",
                    }}
                  >
                    3 Months Results
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <StatBox
                      label="AFTER"
                      clicks="12.6K"
                      conversions="496.60"
                      costPerConv="70.40"
                      roas="1489.19"
                      color="#51cf66"
                    />
                  </motion.div>
                </Grid>
              </Grid>

              {/* Single Proof Image Section */}
              <Box mt={8}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "#e0e6ff",
                      letterSpacing: 0.5,
                    }}
                  >
                    <ImageIcon sx={{ fontSize: 32, color: "#ffd43b" }} />{" "}
                    Campaign Performance Proof
                  </Typography>

                  <ProofImageCard />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Contact Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          gap: 2,
          zIndex: 1000,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <Avatar
            component="a"
            href="tel:+919958280709"
            sx={{
              background: "linear-gradient(135deg, #2196F3, #0d47a1)",
              width: 64,
              height: 64,
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(33, 150, 243, 0.5)",
              border: "1px solid rgba(100, 150, 255, 0.3)",
            }}
          >
            <CallIcon sx={{ fontSize: 32 }} />
          </Avatar>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
        >
          <Avatar
            component="a"
            href="https://wa.me/919958280709"
            target="_blank"
            sx={{
              background: "linear-gradient(135deg, #25D366, #1b5e20)",
              width: 64,
              height: 64,
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(37, 211, 102, 0.5)",
              border: "1px solid rgba(100, 255, 150, 0.3)",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </Avatar>
        </motion.div>
      </Box>
    </Box>
  );
};

export default GoogleAdsExpertSection;
