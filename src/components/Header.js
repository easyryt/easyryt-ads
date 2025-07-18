import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import {
  WhatsApp,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

const PremiumAppBar = styled(AppBar)(({ theme }) => ({
  background:
    "linear-gradient(to bottom, rgba(10, 15, 30, 0.95) 0%, rgba(5, 10, 20, 0.85) 100%)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
  padding: "0",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  zIndex: 1300,
  height: "80px",
  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(1.5),
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(0.8, 1.8),
  borderRadius: "30px",
  transition: "all 0.3s ease",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(138, 43, 226, 0.15)",
    borderColor: "rgba(138, 43, 226, 0.3)",
    boxShadow: "0 4px 15px rgba(138, 43, 226, 0.2)",
    transform: "translateY(-2px)",
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "0.9rem",
  color: "#e0e0ff",
  transition: "all 0.3s ease",
  fontFamily: '"Inter", sans-serif',
  letterSpacing: "0.3px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(138, 43, 226, 0.1)",
  borderRadius: "50%",
  padding: theme.spacing(1),
  border: "1px solid rgba(138, 43, 226, 0.2)",
  boxShadow: "0 0 15px rgba(138, 43, 226, 0.15)",
}));

const WhatsAppButton = styled(IconButton)({
  background:
    "linear-gradient(45deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.25) 100%)",
  color: "#25D366",
  padding: "10px",
  borderRadius: "50%",
  border: "1px solid rgba(37, 211, 102, 0.25)",
  transition: "all 0.3s ease",
  backdropFilter: "blur(4px)",
  boxShadow: "0 0 15px rgba(37, 211, 102, 0.2)",
  "&:hover": {
    background:
      "linear-gradient(45deg, rgba(37, 211, 102, 0.25) 0%, rgba(37, 211, 102, 0.35) 100%)",
    transform: "scale(1.08)",
    boxShadow: "0 0 20px rgba(37, 211, 102, 0.3)",
  },
});

const CompanyName = styled(Typography)({
  fontWeight: 800,
  letterSpacing: "1.5px",
  background: "linear-gradient(45deg, #8a2be2 0%, #1e90ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textTransform: "uppercase",
  fontSize: "1.6rem",
  fontFamily: '"Montserrat", sans-serif',
  position: "relative",
  paddingLeft: "28px",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "linear-gradient(45deg, #8a2be2, #1e90ff)",
    boxShadow: "0 0 15px rgba(138, 43, 226, 0.6)",
    animation: "pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(138, 43, 226, 0.7)",
    },
    "70%": {
      boxShadow: "0 0 0 10px rgba(138, 43, 226, 0)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(138, 43, 226, 0)",
    },
  },
});

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: { xs: "flex", md: "none" },
  color: "#e0e0ff",
  marginLeft: theme.spacing(2),
}));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919958280709", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@easyryt.com";
  };

  const handleCall = () => {
    window.location.href = "tel:+919958280709";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PremiumAppBar
      sx={{
        height: scrolled ? "70px" : "80px",
        background: scrolled
          ? "rgba(8, 12, 25, 0.92)"
          : "linear-gradient(to bottom, rgba(10, 15, 30, 0.95) 0%, rgba(5, 10, 20, 0.85) 100%)",
        backdropFilter: scrolled ? "blur(15px)" : "blur(12px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "80px !important",
            py: 0,
            transition: "all 0.4s ease",
            height: scrolled ? "70px" : "80px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              paddingLeft: "12px",
            }}
          >
            <CompanyName variant="h4">EasyRyt</CompanyName>
          </Box>

          <ContactInfo>
            {/* Email - Hidden on mobile */}
            <ContactItem 
              onClick={handleEmail}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <IconWrapper>
                <MailOutline
                  fontSize="small"
                  sx={{ color: "#8a2be2", fontSize: "1.1rem" }}
                />
              </IconWrapper>
              <ContactText>info@easyryt.com</ContactText>
            </ContactItem>

            {/* Phone - Hidden on mobile */}
            <ContactItem 
              onClick={handleCall}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <IconWrapper>
                <Phone
                  fontSize="small"
                  sx={{ color: "#1e90ff", fontSize: "1.1rem" }}
                />
              </IconWrapper>
              <ContactText>+91 9958280709</ContactText>
            </ContactItem>

            {/* WhatsApp - Hidden on mobile */}
            <WhatsAppButton
              aria-label="WhatsApp"
              onClick={handleWhatsApp}
              size="medium"
              sx={{ 
                display: { xs: "none", md: "flex" },
                marginLeft: "6px"  
              }}
            >
              <WhatsApp fontSize="medium" />
            </WhatsAppButton>
          </ContactInfo>
        </Toolbar>
      </Container>
    </PremiumAppBar>
  );
};

export default Header;