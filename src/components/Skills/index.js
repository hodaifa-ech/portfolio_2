"use client"

import styled from "styled-components"
import { skills } from "../../data/constants"
import { motion } from "framer-motion"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 80px 0px;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 52px;
text-align: center;
font-weight: 700;
margin-top: 20px;
background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 36px;
  }
`

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary}30;
  box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  border-radius: 20px;
  padding: 24px 36px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 48px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 24px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.primary}40;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: ${({ theme }) => theme.primary}20;
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Skills</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>
        </motion.div>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
