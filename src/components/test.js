import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useTheme,
  styled
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart,
  TrendingUp,
  Group,
  Settings,
  Star
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
        py: { xs: 6, md: 10 },
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
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Content Section */}
          <Grid item xs={12} md={6}>
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
                <Box
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
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    textTransform: "uppercase",
                    alignItems: "center",
                    gap: 1,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <Star sx={{ fontSize: "1rem" }} />
                  Premium Google Ads Partner
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 3,
                    color: "white",
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
                    fontSize: { xs: "1rem", sm: "1.1rem" },
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
                      fontSize: { xs: "1rem", sm: "1.1rem" }
                    }}
                  >
                    <Star sx={{ color: "#4dabf5" }} />
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
                            sx={{ color: "#dbe4ff", fontSize: { xs: "0.9rem", sm: "1rem" } }}
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
                              width: { xs: "44px", sm: "56px" },
                              height: { xs: "44px", sm: "56px" },
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
                                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                                fontWeight: 800,
                                color: "white",
                                lineHeight: 1.2,
                              }}
                            >
                              {stat.value}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.8rem", sm: "0.9rem" },
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
                    py: { xs: 1.5, sm: 1.8 },
                    px: { xs: 4, sm: 5 },
                    borderRadius: "14px",
                    mt: 4,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
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
          </Grid>


        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumAdsAgencySection;