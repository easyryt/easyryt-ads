import React from 'react';
import { Box, Typography, Avatar, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: `We were wasting thousands on Ads before working with Visibility Gurus. Now, we're getting qualified leads for half the cost.`,
    name: 'Lisa R',
    role: 'Service-Based Business',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  },
  {
    text: `Our Google Ads weren't working until Visibility Gurus took over. Within 90 days, our leads doubled, and our cost per acquisition dropped significantly`,
    name: 'John M.',
    role: 'Local Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5
  },
  {
    text: `The team transformed our ad strategy completely. Our ROI increased by 220% in just 4 months - these are results we never thought possible.`,
    name: 'Sarah K.',
    role: 'E-commerce Brand',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    text: `Visibility Gurus helped us scale our e-commerce store 3x in just 6 months. Their data-driven approach is unmatched in the industry.`,
    name: 'Michael T.',
    role: 'E-commerce Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    text: `After struggling with Facebook ads for years, Visibility Gurus optimized our campaigns and tripled our conversion rate in 60 days.`,
    name: 'Jennifer L.',
    role: 'SaaS Company',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      py: 10,
      position: 'relative',
      overflow: 'hidden',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-300px',
        right: '-300px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        zIndex: 0,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-300px',
        left: '-300px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(15, 157, 88, 0.1) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" sx={{
              display: 'inline-flex',
              px: 2,
              py: 1,
              bgcolor: 'rgba(26, 115, 232, 0.15)',
              color: '#4dabf5',
              borderRadius: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              mb: 3,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              alignItems: 'center',
              gap: 1,
              backdropFilter: 'blur(4px)'
            }}>
              Client Success Stories
            </Typography>
            
            <Typography variant="h2" sx={{
              fontSize: '2.5rem',
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
              }
            }}>
              Trusted by Industry Leaders
            </Typography>
            
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '700px',
              mx: 'auto',
              color: '#a3b1c6',
            }}>
              Don't just take our word for it. See what our clients have to say about their experience working with our team.
            </Typography>
          </motion.div>
        </Box>
        
        <Box sx={{
          position: 'relative',
          maxWidth: '1200px',
          mx: 'auto',
          pb: 8,
          '& .swiper-pagination-bullet': {
            width: '10px',
            height: '10px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            opacity: 1,
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: '#4dabf5',
            transform: 'scale(1.2)'
          },
          '& .swiper-button-next, & .swiper-button-prev': {
            color: '#4dabf5',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            '&:after': {
              fontSize: '1.2rem',
              fontWeight: 700
            },
            '&:hover': {
              background: 'rgba(77, 171, 245, 0.2)',
            },
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            }
          },
          '& .swiper-button-disabled': {
            opacity: 0.3
          }
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            navigation
            breakpoints={{
              600: {
                slidesPerView: 1.5,
                centeredSlides: true
              },
              900: {
                slidesPerView: 2.5,
                centeredSlides: false
              },
              1200: {
                slidesPerView: 3,
              }
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '30px',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.45)',
                    borderColor: 'rgba(77, 171, 245, 0.3)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <Box>
                    <Box sx={{
                      color: '#FFD700',
                      mb: 3,
                      display: 'flex',
                    }}>
                      {[...Array(5)].map((_, i) => (
                        i < item.rating ? (
                          <StarIcon key={i} fontSize="small" sx={{ fontSize: '1.4rem' }} />
                        ) : (
                          <StarBorderIcon key={i} fontSize="small" sx={{ fontSize: '1.4rem' }} />
                        )
                      ))}
                    </Box>
                    
                    <Typography variant="body1" sx={{
                      fontSize: '1.1rem',
                      color: '#dbe4ff',
                      mb: 3,
                      lineHeight: 1.7,
                      position: 'relative',
                      pl: 3,
                      '&:before': {
                        content: '"“"',
                        position: 'absolute',
                        left: 0,
                        top: '-15px',
                        fontSize: '4rem',
                        color: 'rgba(77, 171, 245, 0.2)',
                        fontFamily: 'serif',
                        lineHeight: 1,
                      }
                    }}>
                      {item.text}
                    </Typography>
                  </Box>
                  
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 'auto',
                    pt: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                    <Avatar 
                      src={item.avatar} 
                      alt={item.name} 
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        border: '2px solid #4dabf5',
                        boxShadow: '0 0 0 2px rgba(77, 171, 245, 0.3)',
                      }} 
                    />
                    <Box ml={2}>
                      <Typography variant="subtitle1" sx={{ 
                        fontWeight: 600, 
                        fontSize: '1.1rem',
                        color: 'white',
                      }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontSize: '0.9rem',
                        color: '#a3b1c6',
                      }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        
        <Box textAlign="center" mt={2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              maxWidth: '600px',
              mx: 'auto',
              color: '#a3b1c6',
              mb: 3,
            }}>
              Join hundreds of satisfied clients who have transformed their digital marketing results
            </Typography>
            <Box
              component={motion.div}
              whileHover={{ 
                scale: 1.03,
                background: "linear-gradient(90deg, #2e86de, #4dabf5)"
              }}
              whileTap={{ scale: 0.98 }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                py: 1.5,
                px: 4,
                borderRadius: '14px',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'none',
                background: 'linear-gradient(90deg, #4dabf5, #2e86de)',
                boxShadow: '0 6px 20px rgba(26, 115, 232, 0.4)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'translateX(-100%)',
                },
                '&:hover:before': {
                  transform: 'translateX(100%)',
                  transition: 'transform 0.6s ease',
                }
              }}
            >
              View More Testimonials
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "8px" }}>
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;