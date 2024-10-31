import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import CertificateCard from '../Cards/CertificateCard';
import { certificates } from '../../data/constants'; // Assuming you have the certificates data

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 10px 0; // Reduced padding for less space
`;


const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '20px', // Add padding on the left and right
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          dots: true, // Ensure dots are still visible
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px; // Space between description and carousel
  text-align: center; // Center the description text
`;


const Certificates = () => {
    return (
      <CarouselContainer>
        <Title>Certificates</Title>
        <Description>
          I have completed several courses and received certificates that validate my skills and knowledge. Here are some of them.
        </Description>
        <Slider {...Settings}>
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          ))}
        </Slider>
      </CarouselContainer>
    );
  };
  

export default Certificates;
