import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
  Modal,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { motion } from "framer-motion";
import proof1 from "./images/proof1.png";
import proof2 from "./images/proof2.png";
import proof3 from "./images/proof3.png";
import proof4 from "./images/proof4.png";
import proof5 from "./images/proof5.png";
import proof6 from "./images/proof6.png";

const proofItems = [
  {
    img: proof1,
    title: "E-commerce Results",
    rows: 2,
    cols: 2,
    id: 1
  },
  {
    img: proof2,
    title: "Lead Generation Stats",
    rows: 1,
    cols: 1,
    id: 2
  },
  {
    img: proof3,
    title: "ROI Improvement",
    rows: 1,
    cols: 1,
    id: 3
  },
  {
    img: proof4,
    title: "Conversion Rate Growth",
    rows: 1,
    cols: 2,
    id: 4
  },
  {
    img: proof5,
    title: "Cost Per Acquisition",
    rows: 1,
    cols: 2,
    id: 5
  },
  {
    img: proof6,
    title: "Revenue Growth",
    rows: 1,
    cols: 1,
    id: 6
  },
];

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

const ProofGrid = ({ onImageClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <ImageList
      variant="quilted"
      cols={isMobile ? 2 : 4}
      rowHeight={isMobile ? 180 : 240}
      gap={16}
      sx={{
        margin: 0,
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      {proofItems.map((item) => (
        <ImageListItem 
          key={item.id} 
          cols={item.cols || 1} 
          rows={item.rows || 1}
          sx={{
            overflow: "hidden",
            borderRadius: 3,
            position: "relative",
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 25px 50px rgba(76, 95, 172, 0.5)",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * item.id }}
            whileHover={{ scale: 1.03 }}
            style={{ height: "100%" }}
          >
            <Paper
              elevation={0}
              onClick={() => onImageClick(item)}
              sx={{
                height: "100%",
                width: "100%",
                position: "relative",
                background: "#1a1f38",
                border: "1px solid rgba(76, 95, 172, 0.3)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.9)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "rgba(28, 52, 121, 0.9)",
                    color: "#fff",
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: 10,
                    fontWeight: 700,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(100, 120, 220, 0.3)",
                    zIndex: 2,
                  }}
                >
                  PROOF {item.id}
                </Box>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <ZoomInIcon sx={{ color: "#fff", fontSize: 40 }} />
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const GoogleAdsExpertSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0a0f25 0%, #131a35 100%)",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(rgba(56, 87, 200, 0.15), transparent 70%)",
          zIndex: 0,
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

              {/* Proof Images Grid */}
              <Box mt={6}>
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
                    <ZoomInIcon sx={{ fontSize: 32, color: "#ffd43b" }} />{" "}
                    Campaign Performance Proofs
                  </Typography>

                  <ProofGrid onImageClick={handleImageClick} />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        open={Boolean(selectedImage)}
        onClose={handleCloseLightbox}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(12px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            outline: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          {selectedImage && (
            <>
              <Box
                component="img"
                src={selectedImage.img}
                alt={selectedImage.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  borderRadius: 2,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                  objectFit: "contain",
                  backgroundColor: "#0a0f25",
                }}
              />
              <IconButton
                onClick={handleCloseLightbox}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.9)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontWeight: 600,
                }}
              >
                {selectedImage.title}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default GoogleAdsExpertSection;