import React from 'react';
import { Grid, Typography, TextField, Button, Box, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Send, Phone, Email, LocationOn } from '@mui/icons-material';

const PremiumLanding = () => {
  return (
    <Box sx={{
      minHeight: '100vh',
      py: 8,
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: 'white', 
            textTransform: 'uppercase',
            letterSpacing: 2,
            mb: 1,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            EasyRyt Solutions
          </Typography>
          <Typography variant="subtitle1" sx={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '1.1rem',
            maxWidth: 600,
            mx: 'auto'
          }}>
            Premium Google Ads Agency | Driving Results Since 2015
          </Typography>
        </Box>
        
        {/* Split Section - Fixed layout */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4,
          alignItems: 'stretch'
        }}>
          {/* Left Section */}
          <Box sx={{
            flex: 1,
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              color: 'white', 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}>
              Maximize Your <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #64ffda 30%, #00e5ff 90%)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
              }}>ROI</Box> With Expert Google Ads Management
            </Typography>
            
            <Typography variant="h6" sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              mb: 4,
              fontSize: '1.2rem',
              fontWeight: 400
            }}>
              We create data-driven campaigns that deliver measurable results and maximize your advertising budget.
            </Typography>
            
            <Box sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.12)', 
              p: 3, 
              borderRadius: 2,
              borderLeft: '4px solid #64ffda',
              mb: 4
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: 10, 
                  height: 10, 
                  backgroundColor: '#64ffda', 
                  borderRadius: '50%', 
                  mr: 2,
                  boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
                }} />
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                  Average 3.5x ROI for our clients in 2023
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: 10, 
                  height: 10, 
                  backgroundColor: '#64ffda', 
                  borderRadius: '50%', 
                  mr: 2,
                  boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
                }} />
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                  97% client retention rate
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ 
                  width: 10, 
                  height: 10, 
                  backgroundColor: '#64ffda', 
                  borderRadius: '50%', 
                  mr: 2,
                  boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
                }} />
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                  Google Premier Partner with 8+ years experience
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Right Section */}
          <Box sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backgroundColor: 'white',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 8,
              background: 'linear-gradient(90deg, #00e5ff, #64ffda)',
            }
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 800, 
              mb: 3,
              background: 'linear-gradient(90deg, #1a2a6c, #3a6cb0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Request a Free Consultation
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: '#5f6368', 
              mb: 4,
              fontSize: '1.1rem'
            }}>
              Get a personalized strategy session with our Google Ads experts
            </Typography>
            
            <form>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(245, 247, 255, 0.7)',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(245, 247, 255, 0.7)',
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(245, 247, 255, 0.7)',
                  }
                }}
              />
              
              <FormControl fullWidth margin="normal">
                <InputLabel>Service Interest</InputLabel>
                <Select
                  label="Service Interest"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: 'rgba(245, 247, 255, 0.7)',
                  }}
                >
                  <MenuItem value="search">Search Campaigns</MenuItem>
                  <MenuItem value="display">Display Network</MenuItem>
                  <MenuItem value="video">Video Ads</MenuItem>
                  <MenuItem value="shopping">Shopping Campaigns</MenuItem>
                  <MenuItem value="app">App Promotion</MenuItem>
                  <MenuItem value="performance">Performance Max</MenuItem>
                </Select>
              </FormControl>
              
              <Button
                fullWidth
                variant="contained"
                size="large"
                endIcon={<Send />}
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #1a2a6c, #3a6cb0)',
                  boxShadow: '0 4px 20px rgba(26, 115, 232, 0.4)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 7px 20px rgba(26, 115, 232, 0.6)',
                    background: 'linear-gradient(90deg, #3a6cb0, #1a2a6c)',
                  }
                }}
              >
                Get Free Strategy Session
              </Button>
            </form>
          </Box>
        </Box>
        
        {/* Contact Info Section */}
        <Grid container spacing={3} sx={{ mt: 6, justifyContent: 'center' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              p: 3,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                borderColor: 'rgba(100, 255, 218, 0.3)',
              }
            }}>
              <Box sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'rgba(100, 255, 218, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 3,
                flexShrink: 0
              }}>
                <Phone sx={{ fontSize: 30, color: '#64ffda' }} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Call Us
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  +91 9958280709
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              p: 3,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                borderColor: 'rgba(100, 255, 218, 0.3)',
              }
            }}>
              <Box sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'rgba(100, 255, 218, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 3,
                flexShrink: 0
              }}>
                <Email sx={{ fontSize: 30, color: '#64ffda' }} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Email Us
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  info@easyryt.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              p: 3,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                borderColor: 'rgba(100, 255, 218, 0.3)',
              }
            }}>
              <Box sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'rgba(100, 255, 218, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 3,
                flexShrink: 0
              }}>
                <LocationOn sx={{ fontSize: 30, color: '#64ffda' }} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Our Location
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                  Delhi, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumLanding;