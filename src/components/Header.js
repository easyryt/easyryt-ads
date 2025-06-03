import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Container } from '@mui/material';
import { WhatsApp, MailOutline, Phone } from '@mui/icons-material';
import { styled } from '@mui/system';

const PremiumAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(to right, #ffffff 0%, #f8f9ff 100%)',
  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.08)',
  padding: '0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  zIndex: 1300,
  height: '60px'
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 1.2),
  borderRadius: '24px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  '&:hover': {
    background: '#f5f7ff',
    borderColor: 'rgba(99, 102, 241, 0.3)',
    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.1)'
  },
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '0.85rem',
  color: '#4b5563',
  transition: 'all 0.3s ease',
  fontFamily: '"Inter", sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

const WhatsAppButton = styled(IconButton)({
  backgroundColor: 'rgba(37, 211, 102, 0.1)',
  color: '#25D366',
  padding: '6px',
  borderRadius: '50%',
  border: '1px solid rgba(37, 211, 102, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
    transform: 'scale(1.08)',
    boxShadow: '0 0 12px rgba(37, 211, 102, 0.2)',
  },
});

const CompanyName = styled(Typography)({
  fontWeight: 700,
  letterSpacing: '1.2px',
  background: 'linear-gradient(45deg, #6366f1 0%, #4f46e5 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textTransform: 'uppercase',
  fontSize: '1.25rem',
  fontFamily: '"Montserrat", sans-serif',
  position: 'relative',
  paddingLeft: '22px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #6366f1, #4f46e5)',
    boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)',
  }
});

const Header = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919958280709', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@easyryt.com';
  };

  const handleCall = () => {
    window.location.href = 'tel:+919958280709';
  };

  return (
    <PremiumAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '60px !important', py: 0 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flexGrow: 1,
            paddingLeft: '8px'
          }}>
            <CompanyName variant="h6">
              EasyRyt
            </CompanyName>
          </Box>
          
          <ContactInfo>
            <ContactItem onClick={handleEmail} sx={{ cursor: 'pointer' }}>
              <MailOutline fontSize="small" sx={{ color: '#6b7280', fontSize: '1.05rem' }} />
              <ContactText sx={{ display: { xs: 'none', md: 'block' } }}>
                info@easyryt.com
              </ContactText>
            </ContactItem>
            
            <ContactItem onClick={handleCall} sx={{ cursor: 'pointer' }}>
              <Phone fontSize="small" sx={{ color: '#6b7280', fontSize: '1.05rem' }} />
              <ContactText sx={{ display: { xs: 'none', sm: 'block' } }}>
                +91 9958280709
              </ContactText>
            </ContactItem>
            
            <WhatsAppButton 
              aria-label="WhatsApp" 
              onClick={handleWhatsApp}
              size="small"
              sx={{ marginLeft: '4px' }}
            >
              <WhatsApp fontSize="small" />
            </WhatsAppButton>
          </ContactInfo>
        </Toolbar>
      </Container>
    </PremiumAppBar>
  );
};

export default Header;