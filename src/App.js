import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PremiumLanding from "./components/PremiumLanding";
import AdsAgencySection from "./components/AdsAgencySection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GoogleAdsExpertSection from "./components/GoogleAdsExpertSection";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      className="App"
      sx={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 15% 50%, rgba(38, 132, 255, 0.15) 0%, transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(249, 224, 118, 0.2) 0%, transparent 25%),
          radial-gradient(circle at 50% 80%, rgba(182, 140, 58, 0.15) 0%, transparent 30%),
          linear-gradient(135deg, #0c1224 0%, #020714 100%)
        `,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 80% 10%, rgba(26, 115, 232, 0.1) 0%, transparent 15%),
            radial-gradient(circle at 20% 90%, rgba(182, 140, 58, 0.1) 0%, transparent 15%)
          `,
          zIndex: 0,
          pointerEvents: 'none',
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Header />
        <br/>
        <br/>
        <PremiumLanding />
        <AdsAgencySection />
        <StatsSection />
        <TestimonialsSection />
        <GoogleAdsExpertSection />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;