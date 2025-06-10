import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  useTheme,
  Button,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

    const handleWhatsApp = () => {
    window.open('https://wa.me/919958280709', '_blank');
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  

  const stats = [
    { number: "750+", label: "Projects Managed" },
    { number: "15+", label: "Years of Experience" },
    { number: "25+", label: "Expert Team" },
    { number: "35%", label: "Minimum improvement assurance" },
    { number: "FREE", label: "Landing Pages" },
    { number: "24–HR", label: "Project Monitoring" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-300px",
          right: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          zIndex: 0,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-300px",
          left: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: "center",
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#f9e076",
              bgcolor: "rgba(182, 140, 58, 0.15)",
              px: 2,
              py: 1,
              borderRadius: "12px",
              display: "inline-block",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(182, 140, 58, 0.2)",
            }}
          >
            Our Achievements
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mt: 3,
              fontWeight: 800,
              color: "white",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              lineHeight: 1.2,
              px: { xs: 1, sm: 0 },
            }}
          >
            Driving{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #f9e076, #ffd166)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 10px rgba(249, 224, 118, 0.3)",
              }}
            >
              Exceptional Results
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              maxWidth: 600,
              mx: "auto",
              color: "#cbd5e8",
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Our track record speaks for itself. With years of expertise and a
            dedicated team, we consistently deliver outstanding outcomes for our
            clients.
          </Typography>
        </Box>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Grid
            container
            spacing={{ xs: 6, sm: 8, md: 10 }} // Increased spacing values
            justifyContent="center"
            sx={{
              px: { xs: 4, sm: 6, md: 8 }, // Increased horizontal padding
              py: { xs: 4, sm: 6, md: 8 }, // Added vertical padding if needed
              mx: "auto",
              maxWidth: 1400, // Increased maxWidth for more space on large screens
            }}
          >
            {stats.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  py: 1, // Added vertical padding to grid items
                }}
              >
                <motion.div
                  variants={itemVariants}
                  style={{
                    width: "100%",
                    maxWidth: 360,
                    height: "100%",
                    margin: { sm: "0 10px" },
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: "100%",
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(12px)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: `
                        0 10px 30px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(182, 140, 58, 0.1),
                        inset 0 0 20px rgba(182, 140, 58, 0.05)
                      `,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center",
                      transition:
                        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `
                          0 15px 35px rgba(0, 0, 0, 0.4),
                          0 0 0 1px rgba(182, 140, 58, 0.2),
                          inset 0 0 30px rgba(182, 140, 58, 0.1)
                        `,
                      },
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        background: "linear-gradient(90deg, #f9e076, #ffd166)",
                        zIndex: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "2.4rem", sm: "2.8rem", md: "3rem" },
                        mb: 1,
                        background: "linear-gradient(90deg, #f9e076, #ffd166)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 15px rgba(249, 224, 118, 0.3)",
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "white",
                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                        letterSpacing: "0.5px",
                        mt: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>

                    {/* Decorative element */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        width: "36px",
                        height: "36px",
                        background: "rgba(182, 140, 58, 0.1)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#f9e076",
                        border: "1px solid rgba(182, 140, 58, 0.2)",
                        backdropFilter: "blur(4px)",
                        opacity: 0.7,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                          opacity="0.8"
                        />
                      </svg>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to action */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            textAlign: "center",
            px: { xs: 2, sm: 0 },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#cbd5e8",
              maxWidth: 600,
              mx: "auto",
              mb: 4,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
            }}
          >
            Ready to achieve exceptional results for your business? Partner with
            us today.
          </Typography>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
            onClick={handleWhatsApp}
              variant="contained"
              sx={{
                py: { xs: 1.5, sm: 2 },
                px: { xs: 4, sm: 5 },
                borderRadius: "14px",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: 700,
                background: "linear-gradient(90deg, #f9e076 0%, #ffd166 100%)",
                color: "#0c1224",
                boxShadow: "0 6px 20px rgba(182, 140, 58, 0.5)",
                position: "relative",
                overflow: "hidden",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transform: "translateX(-100%)",
                  transition: "transform 0.6s ease",
                },
                "&:hover:after": {
                  transform: "translateX(100%)",
                },
                "&:hover": {
                  boxShadow: "0 8px 25px rgba(182, 140, 58, 0.7)",
                },
              }}
            >
              Schedule a Consultation
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginLeft: "8px", verticalAlign: "middle" }}
              >
                <path
                  d="M14 5L21 12M21 12L14 19M21 12H3"
                  stroke="#0c1224"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;
