import React from 'react';
import { Box, Typography, Button, Grid, Avatar, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LanguageIcon from '@mui/icons-material/Language';
import MailIcon from '@mui/icons-material/Mail';
import ImageIcon from '@mui/icons-material/Image';
import { motion } from 'framer-motion';
import proofAnalytics from "./images/proof-analytics.png";

const StatBox = ({ label, clicks, conversions, costPerConv, roas, color }) => (
  <Paper
    elevation={4}
    sx={{
      borderRadius: 4,
      p: 3,
      minWidth: 180,
      background: 'linear-gradient(145deg, #ffffff, #f5f7ff)',
      border: '1px solid rgba(200, 200, 255, 0.3)',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
      backdropFilter: 'blur(4px)',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: color,
      }
    }}
  >
    <Typography 
      variant="button" 
      sx={{ 
        fontWeight: 'bold', 
        color: color,
        mb: 1.5,
        display: 'block'
      }}
    >
      {label}
    </Typography>
    <Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2">Clicks:</Typography>
        <Typography variant="body2" fontWeight={700} color="#1976d2">{clicks}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2">Conversions:</Typography>
        <Typography variant="body2" fontWeight={700} color="#d32f2f">{conversions}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2">Cost/Conv:</Typography>
        <Typography variant="body2" fontWeight={700}>₹{costPerConv}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body2">Actual ROAS:</Typography>
        <Typography variant="body2" fontWeight={700} color="#388e3c">{roas}%</Typography>
      </Box>
    </Box>
  </Paper>
);

const ProofImageCard = () => (
  <motion.div 
    whileHover={{ scale: 1.02 }} 
    whileTap={{ scale: 0.98 }}
    style={{ width: '100%' }}
  >
    <Paper
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: { xs: 300, sm: 400 },
        position: 'relative',
        background: 'linear-gradient(45deg, #f5f7ff, #e3eeff)',
        border: '1px solid rgba(200, 200, 255, 0.3)',
        boxShadow: '0 20px 40px -10px rgba(76, 123, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box 
        component="img"
        src={proofAnalytics}
        alt="Campaign Performance Proof"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          bgcolor: 'rgba(13, 71, 161, 0.9)',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: 2,
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 1,
          backdropFilter: 'blur(4px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        PERFORMANCE PROOF
      </Box>
    </Paper>
  </motion.div>
);

const GoogleAdsExpertSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ 
      py: 10,
      background: 'radial-gradient(circle at top, #f7f9ff, #e6f0ff)',
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), transparent)',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -150,
        left: -100,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(56, 142, 60, 0.1), transparent)',
        zIndex: 0
      }
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center" alignItems="center" position="relative" zIndex={1}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  background: 'linear-gradient(90deg, #1a237e, #1976d2, #388e3c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.3,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Premium Google Ads Expertise
              </Typography>
              
              <Typography variant="h6" sx={{ 
                mb: 3, 
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', sm: '1.2rem' }
              }}>
                Drive more leads, boost sales, and maximize ROI with performance-driven strategies
              </Typography>
              
              <Box sx={{ 
                background: 'rgba(25, 118, 210, 0.05)',
                p: 3,
                borderRadius: 4,
                mb: 3,
                borderLeft: '4px solid #1976d2',
                backdropFilter: 'blur(4px)'
              }}>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: '#1976d2' }}>Increase Sales by 120%</Box> 
                      - E-commerce Case Study
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: '#1976d2' }}>Increase Leads by 210%</Box> 
                      - SaaS Company Case Study
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: '#1976d2' }}>Increase Conversion by 535%</Box> 
                      - Local Service Business
                    </Typography>
                  </li>
                </ul>
              </Box>
              
              <Box mt={4} display="flex" flexDirection="column" gap={2}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    href="mailto:info@easyryt.com"
                    sx={{ 
                      borderRadius: '50px', 
                      background: 'linear-gradient(90deg, #0d1b3e, #1a237e)',
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 24px rgba(13, 27, 62, 0.3)',
                      width: 'fit-content'
                    }}
                  >
                    Contact Us Today
                  </Button>
                </motion.div>
                
                <Box display="flex" flexWrap="wrap" alignItems="center" gap={2}>
                  <Box display="flex" alignItems="center" gap={1} sx={{ color: '#1976d2' }}>
                    <CallIcon fontSize="medium" sx={{ color: '#1a237e' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>+91 9958280709</Typography>
                  </Box>
                  
                  <Box display="flex" alignItems="center" gap={1} sx={{ color: '#d32f2f' }}>
                    <MailIcon fontSize="medium" sx={{ color: '#d32f2f' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>info@easyryt.com</Typography>
                  </Box>
                </Box>

                <Box display="flex" flexWrap="wrap" alignItems="center" gap={2}>
                  <Box display="flex" alignItems="center" gap={1} sx={{ color: '#0d47a1' }}>
                    <LanguageIcon fontSize="medium" sx={{ color: '#0d47a1' }} />
                    <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>easyryt.com</Typography>
                  </Box>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                      size="medium"
                      href="https://wa.me/919958280709"
                      target="_blank"
                      sx={{ 
                        backgroundColor: '#25D366', 
                        borderRadius: '50px', 
                        px: 3,
                        py: 1.2,
                        fontWeight: 700,
                        fontSize: '1rem',
                        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
                        '&:hover': { backgroundColor: '#128C7E' }
                      }}
                    >
                      WhatsApp Now
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={5}>
                  <StatBox
                    label="BEFORE"
                    clicks="14.9K"
                    conversions="324.49"
                    costPerConv="180"
                    roas="583.52"
                    color="#d32f2f"
                  />
                </Grid>

                <Grid 
                  item 
                  xs={12} 
                  sm={2} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexDirection: isMobile ? 'row' : 'column'
                  }}
                >
                  <ArrowDownwardIcon sx={{ 
                    fontSize: 40, 
                    color: '#43a047',
                    mx: isMobile ? 2 : 0,
                    my: isMobile ? 0 : 2,
                    transform: isMobile ? 'rotate(90deg)' : 'none'
                  }} />
                  <Typography variant="caption" sx={{ 
                    fontWeight: 700, 
                    color: '#43a047',
                    textAlign: 'center',
                    fontSize: '0.9rem'
                  }}>
                    3 Months Results
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={5}>
                  <StatBox
                    label="AFTER"
                    clicks="12.6K"
                    conversions="496.60"
                    costPerConv="70.40"
                    roas="1489.19"
                    color="#388e3c"
                  />
                </Grid>
              </Grid>

              {/* Single Proof Image Section */}
              <Box mt={6}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  color: '#1a237e'
                }}>
                  <ImageIcon color="primary" sx={{ fontSize: 32 }} /> Campaign Performance Proof
                </Typography>
                
                <ProofImageCard />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Contact Buttons */}
      <Box sx={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', gap: 2, zIndex: 1000 }}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Avatar
            component="a"
            href="tel:+919958280709"
            sx={{
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              width: 60,
              height: 60,
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(33, 150, 243, 0.4)'
            }}
          >
            <CallIcon sx={{ fontSize: 30 }} />
          </Avatar>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Avatar
            component="a"
            href="https://wa.me/919958280709"
            target="_blank"
            sx={{
              background: 'linear-gradient(45deg, #25D366, #128C7E)',
              width: 60,
              height: 60,
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)'
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 30 }} />
          </Avatar>
        </motion.div>
      </Box>
    </Box>
  );
};

export default GoogleAdsExpertSection;