"use client"

import { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { motion, AnimatePresence } from "framer-motion"
import CertificateCard from "../Cards/CertificateCard"
import { certificates } from "../../data/constants"
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 10px;
    margin: 2rem auto;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #854CE6 0%, #6E3AC7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`

const SliderArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(133, 76, 230, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  position: absolute;
  z-index: 10;
  top: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(133, 76, 230, 1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

const PrevArrow = styled(SliderArrow)`
  left: -25px;
  
  @media (max-width: 768px) {
    left: -10px;
  }
`

const NextArrow = styled(SliderArrow)`
  right: -25px;
  
  @media (max-width: 768px) {
    right: -10px;
  }
`

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.card};
  border-radius: 16px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 20px;
    width: 95%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    color: #854CE6;
  }
`

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 20px;
`

const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`

const ModalIssuer = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #854CE6;
  margin-bottom: 10px;
`

const ModalDate = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`

const ModalDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
`

const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ active, theme }) => (active ? "#854CE6" : theme.card)};
  color: ${({ active, theme }) => (active ? "white" : theme.text_primary)};
  border: 1px solid #854CE6;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => (active ? "#854CE6" : "rgba(133, 76, 230, 0.1)")};
  }
`

const SliderWrapper = styled.div`
  .slick-dots li button:before {
    color: #854CE6;
  }
  
  .slick-dots li.slick-active button:before {
    color: #854CE6;
    opacity: 1;
  }
  
  .slick-track {
    display: flex;
    gap: 20px;
    padding: 20px 0;
  }
`

// Custom arrow components for the slider
const PrevArrowComponent = ({ onClick }) => (
  <PrevArrow onClick={onClick}>
    <FaChevronLeft />
  </PrevArrow>
)

const NextArrowComponent = ({ onClick }) => (
  <NextArrow onClick={onClick}>
    <FaChevronRight />
  </NextArrow>
)

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [category, setCategory] = useState("all")

  // Extract unique categories from certificates
  const categories = ["all", ...new Set(certificates.map((cert) => cert.category || "uncategorized"))]

  // Filter certificates based on selected category
  const filteredCertificates =
    category === "all" ? certificates : certificates.filter((cert) => cert.category === category)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    prevArrow: <PrevArrowComponent />,
    nextArrow: <NextArrowComponent />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  }

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = "auto" // Re-enable scrolling
  }

  return (
    <CarouselContainer id="certificates">
      <Title>Certificates & Achievements</Title>
      <Description>
        These certificates represent my commitment to continuous learning and professional development in various
        technologies and domains.
      </Description>

      <CategoryFilter>
        {categories.map((cat) => (
          <FilterButton key={cat} active={category === cat} onClick={() => setCategory(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </FilterButton>
        ))}
      </CategoryFilter>

      <SliderWrapper>
        <Slider {...settings}>
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CertificateCard certificate={certificate} onClick={() => openModal(certificate)} />
            </motion.div>
          ))}
        </Slider>
      </SliderWrapper>

      <AnimatePresence>
        {selectedCertificate && (
          <ModalOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
              <ModalImage src={selectedCertificate.img} alt={selectedCertificate.title} />
              <ModalTitle>{selectedCertificate.title}</ModalTitle>
              <ModalIssuer>{selectedCertificate.issuer}</ModalIssuer>
              <ModalDate>{selectedCertificate.date}</ModalDate>
              <ModalDescription>{selectedCertificate.description}</ModalDescription>

              {selectedCertificate.url && (
                <motion.a
                  href={selectedCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#854CE6",
                    color: "white",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </CarouselContainer>
  )
}

export default Certificates

