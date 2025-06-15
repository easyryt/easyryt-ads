import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `Ads mein paise barbaad kar rahe the, fir Easyryt ne Google Ads theek kiye. Ab leads aate hain aur cost bhi kam hai. Accha kaam karte hain ye log.`,
    name: "Rajesh Sharma",
  },
  {
    text: `As a small business owner, I was clueless about digital ads. Easyryt team patiently explained everything in Hindi and Marathi. 3 mahine mein sales noticeable badh gaye!`,
    name: "Priya Patel",
  },
  {
    text: `Maine pehle kisi agency ko try kiya tha - koi fayda nahi hua. Easyryt ne actual e-commerce figures improve kiye. Ab ROI sahi dikh raha hai, bas thoda aur time lagega.`,
    name: "Vikram Singh",
  },
  {
    text: `For my saree business, they created regional Facebook ads targeting Gujarat and Maharashtra. Orders increased gradually - not overnight magic, but steady growth. Support team bahut cooperative hai.`,
    name: "Ananya Reddy",
  },
  {
    text: `As an IT startup, we needed quality leads. Easyryt reduced our wasted ad spend by 60%? Shayad 70%? Exact yaad nahi, par clearly cost-effective campaigns banaye.`,
    name: "Arjun Mehta",
  },
  {
    text: `Unhone humare Google Ads account ko properly audit kiya. Pata chala hum galat keywords target kar rahe the! Ab relevant traffic aata hai. 4 mahine se unke saath kaam kar rahe hain.`,
    name: "Divya Iyer",
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: "-300px",
          right: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          zIndex: 0,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: "-300px",
          left: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                display: "inline-flex",
                px: 2,
                py: 1,
                bgcolor: "rgba(26, 115, 232, 0.15)",
                color: "#4dabf5",
                borderRadius: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                mb: 3,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                alignItems: "center",
                gap: 1,
                backdropFilter: "blur(4px)",
              }}
            >
              Client Success Stories
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: "2.5rem",
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
                color: "white",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2rem",
                },
              }}
            >
              Trusted by Industry Leaders
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "700px",
                mx: "auto",
                color: "#a3b1c6",
              }}
            >
              Don't just take our word for it. See what our clients have to say
              about their experience working with our team.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
            pb: 8,
            "& .swiper-pagination-bullet": {
              width: "10px",
              height: "10px",
              backgroundColor: "rgba(255,255,255,0.5)",
              opacity: 1,
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "#4dabf5",
              transform: "scale(1.2)",
            },
            "& .swiper-button-next, & .swiper-button-prev": {
              color: "#4dabf5",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              "&:after": {
                fontSize: "1.2rem",
                fontWeight: 700,
              },
              "&:hover": {
                background: "rgba(77, 171, 245, 0.2)",
              },
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            },
            "& .swiper-button-disabled": {
              opacity: 0.3,
            },
          }}
        >
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
              dynamicBullets: true,
            }}
            navigation
            breakpoints={{
              600: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              900: {
                slidesPerView: 2.5,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: "250px", // Fixed height for all cards
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "30px",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.45)",
                      borderColor: "rgba(77, 171, 245, 0.3)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        color: "#dbe4ff",
                        mb: 3,
                        lineHeight: 1.7,
                        position: "relative",
                        pl: 3,
                        "&:before": {
                          content: '"“"',
                          position: "absolute",
                          left: 0,
                          top: "-15px",
                          fontSize: "4rem",
                          color: "rgba(77, 171, 245, 0.2)",
                          fontFamily: "serif",
                          lineHeight: 1,
                        },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "auto",
                      pt: 2,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
