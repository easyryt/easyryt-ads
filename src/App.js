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

function App() {
  return (
    <Box
      className="App"
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 15% 50%, rgba(38, 132, 255, 0.15) 0%, transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(249, 224, 118, 0.2) 0%, transparent 25%),
          radial-gradient(circle at 50% 80%, rgba(182, 140, 58, 0.15) 0%, transparent 30%),
          linear-gradient(135deg, #0c1224 0%, #020714 100%)
        `,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
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
          zIndex: 0,
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
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Header />
        <br />
        <br />
        <PremiumLanding />
        <AdsAgencySection />
        <GoogleAdsExpertSection />
        <LogoSection />
        <TestimonialsSection />
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
