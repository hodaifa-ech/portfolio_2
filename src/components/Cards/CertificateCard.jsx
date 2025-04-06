"use client"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaBuilding } from "react-icons/fa"

const Card = styled(motion.div)`
  width: 320px;
  height: 420px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.3);
  margin: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #854CE6 0%, #6E3AC7 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(133, 76, 230, 0.3);
  }
`

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    border-radius: 12px;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
`

const InfoText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Badge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(90deg, #854CE6 0%, #6E3AC7 100%);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  z-index: 2;
  box-shadow: 0 2px 10px rgba(133, 76, 230, 0.5);
`

const ViewButton = styled(motion.div)`
  background-color: rgba(133, 76, 230, 0.1);
  color: #854CE6;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(133, 76, 230, 0.2);
  }
`

const CertificateCard = ({ certificate, onClick }) => {
  return (
    <Card whileHover={{ y: -8 }} onClick={onClick}>
      {certificate.featured && <Badge>Featured</Badge>}
      <ImageContainer>
        <Image src={certificate.img || "/placeholder.svg"} alt={certificate.title} />
      </ImageContainer>
      <Content>
        <Title>{certificate.title}</Title>
        <InfoRow>
          <FaBuilding color="#854CE6" />
          <InfoText>{certificate.issuer}</InfoText>
        </InfoRow>
        <InfoRow>
          <FaCalendarAlt color="#854CE6" />
          <InfoText>{certificate.date}</InfoText>
        </InfoRow>
        <Description>{certificate.description}</Description>
      </Content>
      <ViewButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        View Details
      </ViewButton>
    </Card>
  )
}

export default CertificateCard

