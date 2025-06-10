import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  styled,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart,
  TrendingUp,
  Group,
  Settings,
  Star,
  ShowChart,
  MonetizationOn,
  InsertChart,
  ArrowUpward,
} from "@mui/icons-material";

const AdsAgencySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const services = [
    "Search Network Campaigns",
    "Display Network Advertising",
    "Shopping Campaigns",
    "Video Advertising",
    "Remarketing",
    "Conversion Optimization",
    "Audience Segmentation",
    "Competitor Analysis",
  ];

  // Enhanced Glassmorphism Card
  const GlassCard = styled(Box)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    padding: theme.spacing(3.5),
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 16px 50px rgba(0, 0, 0, 0.35)",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)",
      opacity: 0,
      transition: "opacity 0.5s ease",
    },
    "&:hover:before": {
      opacity: 1,
    },
  }));

  return (
    <Box
      sx={{
        py: 12,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)!important",
        position: "relative",
        overflow: "hidden",
        maxWidth: "1800px",
        margin: "0 auto",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-300px",
          right: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(38, 132, 255, 0.1) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          filter: "blur(40px)",
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
            "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          filter: "blur(40px)",
        },
        backgroundImage:
          "radial-gradient(circle at 15% 50%, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0) 50%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={6}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Dashboard Section - Shown first on mobile */}
          <Grid
            item
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: isMobile ? "350px" : "500px",
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
                    maxWidth: "650px",
                    height: "100%",
                    minHeight: isMobile ? "350px" : "500px",
                    borderRadius: "28px",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    background: "linear-gradient(145deg, #121c36, #182848)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 3.5,
                  }}
                >
                  {/* Dashboard header */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "70px",
                      background:
                        "linear-gradient(90deg, rgba(38, 132, 255, 0.2), rgba(56, 189, 248, 0.15))",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      px: 3.5,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        mr: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#EF4444",
                          mr: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#F59E0B",
                          mr: 1,
                        }}
                      />
                      <Box
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#10B981",
                          mr: 2,
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#93C5FD",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Google Ads Performance Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#CBD5E1",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        Last 30 Days
                      </Typography>
                      <Settings
                        sx={{
                          color: "#CBD5E1",
                          fontSize: "1.1rem",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Chart area */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "240px",
                      background: "rgba(30, 41, 59, 0.4)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      mb: 3.5,
                      position: "relative",
                      overflow: "hidden",
                      mt: "70px",
                    }}
                  >
                    {/* Chart grid */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        gridTemplateRows: "repeat(5, 1fr)",
                        zIndex: 1,
                      }}
                    >
                      {Array.from({ length: 30 }).map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            borderRight:
                              i % 6 !== 5
                                ? "1px solid rgba(100, 116, 139, 0.15)"
                                : "none",
                            borderBottom:
                              i < 24
                                ? "1px solid rgba(100, 116, 139, 0.15)"
                                : "none",
                          }}
                        />
                      ))}
                    </Box>

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
                        px: 3,
                        gap: 2.5,
                        zIndex: 2,
                      }}
                    >
                      {[40, 70, 100, 85, 120, 95, 140, 110, 130, 150].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}px` }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              duration: 0.8,
                            }}
                            style={{
                              width: "24px",
                              background:
                                "linear-gradient(to top, #3B82F6, #60A5FA)",
                              borderRadius: "6px 6px 0 0",
                              position: "relative",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: "-24px",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                color: "#CBD5E1",
                                fontSize: "0.7rem",
                                fontWeight: 500,
                              }}
                            >
                              {height}%
                            </Box>
                          </motion.div>
                        )
                      )}
                    </Box>

                    {/* Chart labels */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "-30px",
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        px: 3,
                        color: "#94A3B8",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                    </Box>
                  </Box>

                  {/* Metrics grid */}
                  <Grid container spacing={2.5}>
                    {[
                      {
                        label: "Impressions",
                        value: "124K",
                        change: "+12%",
                        icon: <InsertChart />,
                      },
                      {
                        label: "Clicks",
                        value: "8.2K",
                        change: "+18%",
                        icon: <ShowChart />,
                      },
                      {
                        label: "CTR",
                        value: "6.6%",
                        change: "+3%",
                        icon: <TrendingUp />,
                      },
                      {
                        label: "Conv. Rate",
                        value: "9.4%",
                        change: "+7%",
                        icon: <BarChart />,
                      },
                    ].map((metric, index) => (
                      <Grid item xs={6} key={index}>
                        <GlassCard
                          sx={{
                            height: "100%",
                            p: 2.5,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              mb: 0.5,
                            }}
                          >
                            <Box
                              sx={{
                                background: "rgba(56, 189, 248, 0.15)",
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#38BDF8",
                              }}
                            >
                              {metric.icon}
                            </Box>
                            <Typography
                              sx={{
                                color: "#CBD5E1",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                              }}
                            >
                              {metric.label}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "1.8rem",
                                fontWeight: 700,
                                color: "white",
                                lineHeight: 1,
                              }}
                            >
                              {metric.value}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#10B981",
                                fontWeight: 700,
                                display: "flex",
                                alignItems: "center",
                                fontSize: "0.9rem",
                                background: "rgba(16, 185, 129, 0.15)",
                                px: 1.2,
                                py: 0.3,
                                borderRadius: "12px",
                              }}
                            >
                              <ArrowUpward sx={{ fontSize: "1rem", mr: 0.5 }} />
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
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      top: "15%",
                      right: "30px",
                      zIndex: 3,
                    }}
                  >
                    <GlassCard
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        width: "180px",
                        background: "rgba(16, 185, 129, 0.1)",
                        borderColor: "rgba(16, 185, 129, 0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#10B981",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Star sx={{ fontSize: "1.2rem" }} />
                        Performance +87%
                      </Typography>
                    </GlassCard>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    style={{
                      position: "absolute",
                      bottom: "10%",
                      left: "30px",
                      zIndex: 3,
                    }}
                  >
                    <GlassCard
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        width: "200px",
                        background: "rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#3B82F6",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <MonetizationOn sx={{ fontSize: "1.2rem" }} />
                        ROI Increased 3.2x
                      </Typography>
                    </GlassCard>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Content Section - Shown second on mobile */}
          <Grid
            item
            sx={{
              order: { xs: 2, md: 1 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              pr: { md: 4, lg: 6 },
            }}
          >
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
                    px: 2.5,
                    py: 1.2,
                    background:
                      "linear-gradient(90deg, rgba(56, 189, 248, 0.15), rgba(14, 165, 233, 0.15))",
                    color: "#38BDF8",
                    borderRadius: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    mb: 3.5,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    alignItems: "center",
                    gap: 1.2,
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(56, 189, 248, 0.15)",
                  }}
                >
                  <Star sx={{ fontSize: "1.1rem" }} />
                  Certified Google Ads Partner
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
                    fontSize: "3.25rem",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    mb: 3,
                    color: "white",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "2.5rem",
                    },
                  }}
                >
                  Premium Google Ads Management
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(90deg, #38BDF8, #0EA5E9)",
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
                        background: "linear-gradient(90deg, #38BDF8, #0EA5E9)",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    That Drives Results
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
                    fontSize: "1.15rem",
                    lineHeight: 1.75,
                    mb: 4,
                    color: "#CBD5E1",
                  }}
                >
                  Our certified Google Ads specialists have managed over{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#38BDF8",
                      fontWeight: 700,
                      background: "rgba(56, 189, 248, 0.1)",
                      px: 1,
                      py: 0.2,
                      borderRadius: "6px",
                    }}
                  >
                    $1M
                  </Box>{" "}
                  in ad spend, generating{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#38BDF8",
                      fontWeight: 700,
                      background: "rgba(56, 189, 248, 0.1)",
                      px: 1,
                      py: 0.2,
                      borderRadius: "6px",
                    }}
                  >
                    50,000+ qualified leads
                  </Box>{" "}
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
                      fontSize: "1.3rem",
                    }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(135deg, #3B82F6, #0EA5E9)",
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Star sx={{ color: "white", fontSize: "1.5rem" }} />
                    </Box>
                    Premium Google Ads Services
                  </Typography>
                  <Grid container spacing={2}>
                    {services.map((service, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            py: "8px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          <CheckCircle
                            sx={{
                              color: "#38BDF8",
                              fontSize: "1.4rem",
                              mr: 2,
                              minWidth: "30px",
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#E2E8F0",
                              fontWeight: 500,
                              fontSize: "1.05rem",
                            }}
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
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    background: "linear-gradient(90deg, #0EA5E9, #0284C7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    py: 2,
                    px: 5,
                    borderRadius: "16px",
                    mt: 5,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    textTransform: "none",
                    background: "linear-gradient(90deg, #38BDF8, #0EA5E9)",
                    boxShadow: "0 8px 25px rgba(14, 165, 233, 0.4)",
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
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)",
                      transform: "translateX(-100%)",
                    },
                    "&:hover:before": {
                      transform: "translateX(100%)",
                      transition: "transform 0.7s ease",
                    },
                  }}
                >
                  Get Your Free Strategy Session
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "12px" }}
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

export default AdsAgencySection;
