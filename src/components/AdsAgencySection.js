import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useTheme,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart,
  TrendingUp,
  Group,
  Settings,
} from "@mui/icons-material";

const PremiumAdsAgencySection = () => {
  const theme = useTheme();

  const stats = [
    {
      value: "$1M+",
      label: "Managed Ad Spend",
      icon: <BarChart fontSize="large" />,
    },
    {
      value: "50K+",
      label: "Leads Generated",
      icon: <TrendingUp fontSize="large" />,
    },
    {
      value: "98%",
      label: "Client Retention",
      icon: <Group fontSize="large" />,
    },
    {
      value: "24/7",
      label: "Campaign Monitoring",
      icon: <Settings fontSize="large" />,
    },
  ];

  const services = [
    "Search Network Campaigns",
    "Display Network Advertising",
    "Shopping Campaigns",
    "Video Advertising",
    "Remarketing",
    "Conversion Optimization",
  ];

  // Styled components for glassmorphism effect
  const GlassCard = styled(Box)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    padding: theme.spacing(3),
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.45)",
    },
  }));

  return (
    <Box
      sx={{
        py: 10,
        background:
          "radial-gradient(circle at top right, #0c1224 0%, #020714 70%)",
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
          background:
            "radial-gradient(circle, rgba(26, 115, 232, 0.15) 0%, rgba(255,255,255,0) 70%)",
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
          background:
            "radial-gradient(circle, rgba(15, 157, 88, 0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "stretch",
        }}
      >
        {/* FIXED GRID CONTAINER - Added direction prop */}
        <Grid
          spacing={4}
          style={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "stretch",
          }}
        >
          {/* Left Content Section - 50% width */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{width: "50%" }}
          >
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Typography
                    sx={{
                      display: "inline-flex",
                      px: 2,
                      py: 1,
                      bgcolor: "rgba(26, 115, 232, 0.15)",
                      color: "#4dabf5",
                      borderRadius: "12px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      mb: 3,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      alignItems: "center",
                      gap: 1,
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#4dabf5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Premium Google Ads Partner
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      mb: 3,
                      color: "white",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "2.2rem",
                      },
                    }}
                  >
                    Elite Google Ads Management
                    <br />
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(90deg, #4dabf5, #2e86de)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        position: "relative",
                        display: "inline-block",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-8px",
                          left: 0,
                          width: "100%",
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #4dabf5, #2e86de)",
                          borderRadius: "2px",
                        },
                      }}
                    >
                      That Converts
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                      mb: 4,
                      color: "#a3b1c6",
                    }}
                  >
                    Our certified Google Ads specialists have managed over{" "}
                    <strong style={{ color: "#4dabf5" }}>$1M</strong> in ad
                    spend, generating
                    <strong style={{ color: "#4dabf5" }}>
                      {" "}
                      50,000+ qualified leads
                    </strong>{" "}
                    for businesses worldwide. We focus on ROI-driven campaigns
                    that deliver measurable results.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <GlassCard>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        fontWeight: 700,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10M12 3L13.91 8.26L19.5 9.27L15.5 13.77L16.59 19.02L12 16.77L7.41 19.02L8.5 13.77L4.5 9.27L10.09 8.26L12 3Z"
                          stroke="#4dabf5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Our Premium Services
                    </Typography>
                    <Grid container spacing={2}>
                      {services.map((service, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: "8px",
                              transition: "transform 0.2s ease",
                              "&:hover": {
                                transform: "translateX(5px)",
                              },
                            }}
                          >
                            <CheckCircle
                              sx={{
                                color: "#4dabf5",
                                fontSize: "1.2rem",
                                mr: 2,
                                minWidth: "24px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{ color: "#dbe4ff" }}
                            >
                              {service}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </GlassCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Grid container spacing={2} sx={{ mt: 4 }}>
                    {stats.map((stat, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <GlassCard>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "12px",
                                background:
                                  "linear-gradient(135deg, rgba(26, 115, 232, 0.2), rgba(15, 157, 88, 0.2))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#4dabf5",
                                flexShrink: 0,
                              }}
                            >
                              {stat.icon}
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "1.8rem",
                                  fontWeight: 800,
                                  color: "white",
                                  lineHeight: 1.2,
                                }}
                              >
                                {stat.value}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "0.9rem",
                                  color: "#a3b1c6",
                                }}
                              >
                                {stat.label}
                              </Typography>
                            </Box>
                          </Box>
                        </GlassCard>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={motion.div}
                    whileHover={{
                      scale: 1.03,
                      background: "linear-gradient(90deg, #2e86de, #4dabf5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                      py: 1.8,
                      px: 5,
                      borderRadius: "14px",
                      mt: 4,
                      fontSize: "1rem",
                      fontWeight: 700,
                      textTransform: "none",
                      background: "linear-gradient(90deg, #4dabf5, #2e86de)",
                      boxShadow: "0 6px 20px rgba(26, 115, 232, 0.4)",
                      color: "white",
                      position: "relative",
                      overflow: "hidden",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                        transform: "translateX(-100%)",
                      },
                      "&:hover:before": {
                        transform: "translateX(100%)",
                        transition: "transform 0.6s ease",
                      },
                    }}
                  >
                    Request Free Strategy Session
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "8px" }}
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12H3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </motion.div>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Dashboard Section - 50% width */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "600px",
                    height: "100%",
                    minHeight: "450px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    background: "linear-gradient(135deg, #0f1b31, #152642)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 3,
                  }}
                >
                  {/* Dashboard header */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background: "rgba(26, 115, 232, 0.2)",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      px: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#f44336",
                        mr: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#ff9800",
                        mr: 1,
                      }}
                    />
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#4caf50",
                        mr: 2,
                      }}
                    />
                    <Typography sx={{ color: "#4dabf5", fontWeight: 500 }}>
                      Google Ads Dashboard
                    </Typography>
                  </Box>

                  {/* Chart area */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "200px",
                      background: "rgba(26, 115, 232, 0.1)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      mb: 3,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Chart lines */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "80%",
                        display: "flex",
                        alignItems: "flex-end",
                        px: 2,
                        gap: 2,
                      }}
                    >
                      {[40, 70, 100, 85, 120, 95, 140].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}px` }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.8,
                          }}
                          style={{
                            width: "30px",
                            background:
                              "linear-gradient(to top, #4dabf5, #2e86de)",
                            borderRadius: "4px 4px 0 0",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Metrics grid */}
                  <Grid container spacing={2}>
                    {[
                      { label: "Impressions", value: "124K", change: "+12%" },
                      { label: "Clicks", value: "8.2K", change: "+18%" },
                      { label: "CTR", value: "6.6%", change: "+3%" },
                      { label: "Conv. Rate", value: "9.4%", change: "+7%" },
                    ].map((metric, index) => (
                      <Grid item xs={6} key={index}>
                        <GlassCard sx={{ height: "100%" }}>
                          <Typography
                            sx={{ color: "#a3b1c6", fontSize: "0.9rem" }}
                          >
                            {metric.label}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              mt: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.8rem",
                                fontWeight: 700,
                                color: "white",
                                mr: 1,
                              }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#4caf50",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 19V5M12 5L5 12M12 5L19 12"
                                  stroke="#4caf50"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {metric.change}
                            </Typography>
                          </Box>
                        </GlassCard>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: "10%",
                      right: "20px",
                      zIndex: 2,
                    }}
                  >
                    <GlassCard
                      sx={{
                        p: 2,
                        borderRadius: "14px",
                        width: "160px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4dabf5",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M12 3L13.91 8.26L19.5 9.27L15.5 13.77L16.59 19.02L12 16.77L7.41 19.02L8.5 13.77L4.5 9.27L10.09 8.26L12 3Z"
                            stroke="#4dabf5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Performance +87%
                      </Typography>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      bottom: "20%",
                      left: "20px",
                      zIndex: 2,
                    }}
                  >
                    <GlassCard
                      sx={{
                        p: 2,
                        borderRadius: "14px",
                        width: "180px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#4caf50",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12M12 20C7.58172 20 4 16.4183 4 12M12 20V4M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12"
                            stroke="#4caf50"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        ROI Increased 3.2x
                      </Typography>
                    </GlassCard>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumAdsAgencySection;
