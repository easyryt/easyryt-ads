import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PremiumLanding from "./components/PremiumLanding";
import AdsAgencySection from "./components/AdsAgencySection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GoogleAdsExpertSection from "./components/GoogleAdsExpertSection";
import Footer from "./components/Footer";
import { Avatar, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";
import LogoSection from "./components/LogoSection";
import { useRef, useEffect } from "react";

function App() {
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
  // Create a ref for the background element
  const bgRef = useRef(null);

  // Optimize background on initial render
  useEffect(() => {
    if (bgRef.current) {
      // Promote to its own layer for GPU acceleration
      bgRef.current.style.transform = "translateZ(0)";
      bgRef.current.style.willChange = "transform";
    }
  }, []);

  return (
    <Box
      className="App"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden", // Only hide horizontal overflow
      }}
    >
      {/* Optimized Background Element */}
      <Box
        ref={bgRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background: `
            radial-gradient(circle at 15% 50%, rgba(38, 132, 255, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(249, 224, 118, 0.2) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(182, 140, 58, 0.15) 0%, transparent 30%),
            linear-gradient(135deg, #0c1224 0%, #020714 100%)
          `,
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(circle at 80% 10%, rgba(26, 115, 232, 0.1) 0%, transparent 15%),
              radial-gradient(circle at 20% 90%, rgba(182, 140, 58, 0.1) 0%, transparent 15%)
            `,
            pointerEvents: "none",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          },
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          // Enable smooth scrolling for entire content
          scrollBehavior: "smooth",
          // Allow vertical scrolling
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
        }}
      >
        <Header />
        <br />
        <Box component="main">
          <PremiumLanding />
          <AdsAgencySection />
          <GoogleAdsExpertSection />
          <LogoSection />
          <TestimonialsSection />
        </Box>
        <Footer />
      </Box>

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
}

export default App;
