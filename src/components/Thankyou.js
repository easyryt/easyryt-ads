import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CelebrationIcon from "@mui/icons-material/Celebration";

const ThankYou = () => {
  useEffect(() => {
    // Initialize dataLayer if not exists
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Set current gtag function
    window.gtag = window.gtag || gtag;

    // Only initialize if not already done
    if (!window.gtag_initalized) {
      window.gtag("js", new Date());
      window.gtag("config", "G-N0QJD7JV9V");
      window.gtag_initialized = true;

      // Create and append script element
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-N0QJD7JV9V";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [0.8, 1.1, 1],
        opacity: [0, 1],
        transition: { duration: 0.8 },
      });
      await controls.start({
        rotate: [0, 10, -10, 5, 0],
        transition: { duration: 0.5 },
      });
    };
    sequence();
  }, [controls]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top right, rgba(25, 50, 100, 0.3), transparent 400px), radial-gradient(circle at bottom left, rgba(20, 80, 120, 0.2), transparent 400px), #0e1324",
        position: "relative",
        overflow: "hidden",
        py: 8,
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, rgba(77, 171, 245, 0.1) 0%, transparent 70%)",
          transform: "rotate(30deg)",
          zIndex: 0,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-30%",
          right: "-30%",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(81, 207, 102, 0.15) 0%, transparent 70%)",
          zIndex: 0,
        },
      }}
    >
      {/* Animated floating elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <StarBorderIcon
          sx={{ fontSize: 36, color: "rgba(255, 212, 59, 0.7)" }}
        />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          zIndex: 1,
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <CelebrationIcon
          sx={{ fontSize: 42, color: "rgba(77, 171, 245, 0.7)" }}
        />
      </motion.div>

      <Container maxWidth="md">
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            p: isMobile ? 3 : 6,
            borderRadius: 4,
            background: "rgba(20, 25, 45, 0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(76, 95, 172, 0.3)",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          }}
        >
          <motion.div animate={controls} initial={{ scale: 0.8, opacity: 0 }}>
            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: 120,
                height: 120,
                borderRadius: "50%",
                bgcolor: "rgba(81, 207, 102, 0.1)",
                border: "2px solid rgba(81, 207, 102, 0.3)",
                mb: 4,
                position: "relative",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "2px solid rgba(81, 207, 102, 0.2)",
                  animation: "ripple 2s infinite",
                  "@keyframes ripple": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "100%": { transform: "scale(1.8)", opacity: 0 },
                  },
                },
              }}
            >
              <CheckCircleOutlineIcon
                sx={{
                  fontSize: 60,
                  color: "#51cf66",
                  filter: "drop-shadow(0 0 8px rgba(81, 207, 102, 0.5))",
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: "#e0e6ff",
                fontSize: isMobile ? "2.2rem" : "3rem",
                lineHeight: 1.2,
                background: "linear-gradient(90deg, #e0e6ff, #4dabf5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Thank You!
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: "#a0b0e0",
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                lineHeight: 1.6,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Your message has been received. We'll review your information and
              get back to you shortly.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                p: isMobile ? 2 : 4,
                mt: 4,
                mb: 5,
                borderRadius: 3,
                background:
                  "linear-gradient(145deg, rgba(30, 40, 70, 0.7), rgba(20, 30, 60, 0.7))",
                border: "1px solid rgba(76, 95, 172, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 4,
                  background: "linear-gradient(90deg, #4dabf5, #51cf66)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#a0b0e0",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  lineHeight: 1.7,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Tell us about your project and we'll get back to you with a
                quote. Let's build something amazing together!
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 4 }}
            >
              <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                  bgcolor: "#4dabf5",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "#3d9be0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 5px 15px rgba(77, 171, 245, 0.4)",
                  },
                }}
              >
                Return Home
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ThankYou;
