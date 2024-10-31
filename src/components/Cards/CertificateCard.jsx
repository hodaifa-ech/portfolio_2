import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #854CE6;
  margin: 10px;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Issuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ImageContainer = styled.div`
  height: 250px; // Fixed height for the image container
  width: 100%; // Ensure it takes the full width of the card
  overflow: hidden; // Prevent overflow if the image is larger
`;

const Image = styled.img`
  height: 100%; // Set to fill the container's height
  width: 100%; // Set to fill the container's width
  object-fit: cover; // Maintain aspect ratio while covering the area
  border-radius: 10px;
`;

const CertificateCard = ({ certificate }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={certificate.img} alt={certificate.title} />
      </ImageContainer>
      <Title>{certificate.title}</Title>
      <Issuer>{certificate.issuer}</Issuer>
      <Date>{certificate.date}</Date>
      <Description>{certificate.description}</Description>
    </Card>
  );
};

export default CertificateCard;
