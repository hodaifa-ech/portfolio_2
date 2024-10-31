import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        {/* Animate title and text loop from left to right */}
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                        </motion.div>
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                        </motion.div>
                        {/* Animate subtitle from right to left */}
                        <motion.div 
                            initial={{ x: 100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        >
                            <SubTitle>{Bio.description}</SubTitle>
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                        </motion.div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        {/* Animate the image with scale and fade-in */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;
