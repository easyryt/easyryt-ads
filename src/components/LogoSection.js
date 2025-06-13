import React from 'react';
import { Box, Container, Typography, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import logo0 from "./images/logo0.png";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";

const logos = [logo0, logo1, logo2, logo3, logo4];

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
}));

const LogoCard = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  overflow: 'hidden',
  position: 'relative',
  aspectRatio: '1 / 1',
  width: '100%',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    
    '&:before': {
      opacity: 1,
    }
  },
  
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  }
}));

// Fixed: Added theme parameter to LogoImage
const LogoImage = styled('img')(({ theme }) => ({
  width: '80px',
  height: '80px',
  objectFit: 'contain',
  filter: 'grayscale(100%) brightness(150%)',
  opacity: 0.8,
  transition: 'all 0.4s ease',
  
  [theme.breakpoints.down('md')]: {
    width: '70px',
    height: '70px',
  },
  
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  },
  
  '&:hover': {
    filter: 'grayscale(0%) brightness(100%)',
    opacity: 1,
    transform: 'scale(1.05)'
  }
}));

function LogoSection() {
  const theme = useTheme();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 30%, ${theme.palette.primary.light}20 0%, transparent 30%), 
                      radial-gradient(circle at 80% 70%, ${theme.palette.secondary.light}20 0%, transparent 30%)`,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="overline" 
            sx={{
              display: 'inline-block',
              px: 2,
              py: 1,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: '#a3b1c6',
              borderRadius: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              mb: 3,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
            }}
          >
            TRUSTED BY INDUSTRY LEADERS
          </Typography>
          <GradientText variant="h2" gutterBottom>
            Our Esteemed Partners
          </GradientText>
          <Typography 
            variant="body1" 
            sx={{
              maxWidth: 700,
              mx: 'auto',
              color: '#a3b1c6',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            We collaborate with innovative companies across the globe to deliver exceptional results 
            and drive digital transformation.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          alignItems="center"
          gap={"100px"}
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {logos.map((logo, index) => (
            <Grid 
              item 
              xs={6} 
              sm={4} 
              md={2.4} 
              key={index}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                minWidth: { xs: '140px', sm: 'auto' },
              }}
            >
              <motion.div variants={item} style={{ width: '100%' }}>
                <LogoCard whileHover={{ scale: 1.03 }}>
                  <LogoImage 
                    src={logo} 
                    alt={`Partner logo ${index}`} 
                  />
                </LogoCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LogoSection;